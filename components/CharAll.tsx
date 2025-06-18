import { FunctionalComponent } from "preact/src/index.d.ts";
import Fav from "../islands/Fav.tsx";


type Character ={
  id:string,
  name:string,
  image:string
}

const CharAll : FunctionalComponent <{characters:Character[]}> = ({characters}) =>{

    return (
        <div class="grid">
            {characters.map((e)=>(

                <div key={e.id} class="card">
                    <a href={`characters/${e.id}`}>
                    <img src={e.image} alt={e.name} />
                    </a>
                    <div class="card-info">
                     <a href={`characters/${e.id}`} class="name">{e.name} </a>
                     <Fav id={e.id}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CharAll