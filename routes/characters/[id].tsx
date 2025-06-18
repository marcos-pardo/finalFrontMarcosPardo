import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "axios"
import CharId from "../../components/CharId.tsx";


type Character ={
  id:string,
  name:string,
  image:string
}

export const handler: Handlers<{characters: Character[]}> ={
  GET: async ( _req:Request,ctx:FreshContext) =>{

    const {id} = ctx.params

   
      const response = await axios.get(`https://hp-api.onrender.com/api/character/${id}`)
      const characters:Character[] = response.data
      console.log(characters)

      return ctx.render({characters})
      
    } 
  }

  const Page = (props:PageProps<{characters: Character[]}>) =>{
    return(
<div>
  <CharId characters={props.data.characters}/>
</div>
    )
  }
  export default Page
