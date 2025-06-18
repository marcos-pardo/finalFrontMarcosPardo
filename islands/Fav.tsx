
import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";

type state ={
    id :string
}

const Fav : FunctionalComponent<state> =({id}) =>{

    const [isFav,setIsFav] = useState<boolean>(false)

    useEffect(()=>{
        const cookie = document.cookie.split("; ").find((e)=> e.trim().startsWith("favorites"))
        if(cookie){
            const cookieFavs = JSON.parse(decodeURIComponent(cookie.split("=")[1]))
            setIsFav(cookieFavs.includes(id))
        }
    },[id])

        const botonFavorito = () =>{
        const cookie = document.cookie.split("; ").find((e)=> e.trim().startsWith("favorites"))
        let arrCookie : string[] =[]
                if(cookie) arrCookie = JSON.parse(decodeURIComponent(cookie.split("=")[1]))
        const update = isFav ? arrCookie.filter((e)=> e!== id):[...arrCookie,id]

        document.cookie=`favorites=${encodeURIComponent(JSON.stringify(update))};path=/`

        setIsFav(!isFav)

    }
    return (
        <div>
            <span type="button" onClick={botonFavorito}>{isFav ? <span class="star fav">★</span>: <span class="star">★</span>}</span>
        </div>
    )
}

export default Fav

