

import Kino from "./Kino"

export default function Kinolar(props){

    const {films = []} = props
    
    return(
       <div className="column">
            {films.length ? films.map(film=>(
                <Kino key={film.imdbID} {...film} />
            )) : <h1>Hech narsa topilmadi</h1>  }
       </div>
    )
} 