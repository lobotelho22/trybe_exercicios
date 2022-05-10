import React from "react";
import pokemons from "./data"


class PokeProfile extends React.Component {
       render () {
        const pokeUnique = pokemons.map((pokemon) => {
            const { name, type, averageWeight, image: urlImage } = pokemon
            const altText = `uma imagem do pokemon chamado ${name}`
            return (
                <article className="pokemon-card">
                <h3>{name}</h3>
                <p>{type}</p>
                <img src={urlImage} alt={altText} />
                <p>Peso médio: {averageWeight.value} {averageWeight.measurementUnit}</p>
                </article>
            )
        })

        return (
            <section>
                {pokeUnique}
            </section>
        )
    }
}

export default PokeProfile
