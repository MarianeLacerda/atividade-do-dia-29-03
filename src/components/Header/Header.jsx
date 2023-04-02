import {Link} from "react-router-dom"
import styles from "./Header.module.css"

function Header(){
    return(
        <header className={styles.header}>
<h1>Pokemón</h1>
<nav className="menu">
<ul>
    <li>Home</li>
     <li><Link to="/">Pokémon</Link></li>
</ul>
</nav>
</header>
    )
}

export default Header