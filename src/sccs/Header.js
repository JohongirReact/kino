
export default function Header(){
    return(
        <nav >
        <div className="nav-wrapper container" >
        <a  className="brand-logo d-flex ">React Kino</a>
        <ul id="nav-mobile" className="right  hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
        </div>
  </nav>    
    )
}