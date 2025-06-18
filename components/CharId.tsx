import { FunctionalComponent } from "preact/src/index.d.ts";
import Fav from "../islands/Fav.tsx";


type Character ={
  id:string,
  name:string,
  image:string
  house:string
  alive:boolean
}

const CharId : FunctionalComponent <{characters:Character[]}> = ({characters}) =>{

    return (
        <div class ="detail">
            {characters.map((e)=>(
                <p key={e.id}>
                    <img src={e.image} alt={e.name} />
                    <h2>
                        {e.name}
                        <Fav id={e.id}/>
                    </h2>
                    <p>Casa: {e.house}</p>
                    <p>{e.alive ? "Vivo":"Muerto"}</p>
                    <a href="/">Volver</a>

                </p>
            ))}
        </div>
    )
}

export default CharId