
export default function Kino(props){

    const{Poster, Title, Year, Type } = props

    return(
        
        <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator " src={Poster} />
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{Title}<i className="material-icons right"></i></span>
            <p><a href="#">{Type}</a></p>
        </div>
        <div className="card-reveal">
            <span>{Year}</span>
            <p></p>
        </div>
        </div>
       
    )
}