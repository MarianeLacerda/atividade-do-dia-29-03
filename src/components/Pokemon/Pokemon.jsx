import{useState} from "react"
import axios from "axios"

function Pokemon(){
    const [pesquisa, setPesquisa]=useState
    const [pokemon, setPokemon]=useState("vazio")
        const getPokemon=async{nome}=>{
            const response=await axios.get("https://pokeapi.co/api/v2/pokemon/${nome}")
            console.log(response.data)
            console.log(pokemon((item)=>console.log(item)))
        }
    return(
      <div>  
<p> <button onclick={getPokemon}>PESQUISAR</button></p>
{pokemon==="vazio"?
<h2>Nada pesquisado ainda...</h2>:
<div>
    <h2>Resultado da pesquisa:</h2>
    <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
<p>Nome:{pokemon.name}</p>
<p>Peso:{pokemon.weight}</p>
<p>Altura:{pokemon.height/10}</p>
<p>Imagem:{pokemon.sprites}</p>
<p>Tipo:{pokemon.types[0].type.name}</p>
{pokemon.stats.map((item)=>(<p>{item.stat.name}<progress value={item.base_stat} max="150"></progress></p>)
)}
</div>}

    )
}

export default Pokemon