import { Box } from "components/Box";
import React from "react";

export class Pokemon extends React.Component {
    state ={
        pokemon: null,
    }

componentDidMount () {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(res => res.json())
    .then(pokemon => this.setState({pokemon: pokemon}))
};

    render() {
        return (
            <Box>
                <p>{this.state.pokemon && 
                <Box>
                    <h2>{this.state.pokemon.name}</h2>
                    <img src={this.state.pokemon.sprites.other['official-artwork'].front_default} alt={this.state.pokemon.name} width="240"/>
                </Box>
                }</p>
            </Box>
        )
    }
}