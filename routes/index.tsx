import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "axios"
import CharAll from "../components/CharAll.tsx";

type Character ={
  id:string,
  name:string,
  image:string
}

export const handler: Handlers<{characters: Character[]}> ={
  GET: async ( _req:Request,ctx:FreshContext) =>{

   
      const response = await axios.get("https://hp-api.onrender.com/api/characters")
      const characters:Character[] = response.data

      return ctx.render({characters})
      
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
