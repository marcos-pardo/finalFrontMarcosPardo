import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "axios"
import CharAll from "../components/CharAll.tsx";

type Character ={
  id:string,
  name:string,
  image:string
}

export const handler: Handlers<{characters: Character[]}> ={
  GET: async ( req:Request,ctx:FreshContext) =>{

      const response = await axios.get("https://hp-api.onrender.com/api/characters")
      const characters:Character[] = response.data

      const cookie = req.headers.get("Cookie")?.split("; ").find((e)=>e.trim().startsWith("favorites"))
    let arrCookie : string[] =[]
    if(cookie) arrCookie = JSON.parse(decodeURIComponent(cookie.split("=")[1]))

        const filtrado = characters.filter((e)=> arrCookie.includes(e.id))

        return ctx.render({characters:filtrado})
  
    } 
  }

  const Page = (props:PageProps<{characters: Character[]}>) =>{
    return(
<div>
  <CharAll characters={props.data.characters}/>
</div>
    )
  }
  export default Page
