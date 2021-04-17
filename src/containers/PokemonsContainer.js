import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Pokemon } from "../components";
import { GET_POKEMONS } from "../graphql/get-pokemons";

export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });

  return (
    <div className="container">
      {pokemons &&
        pokemons.map((pokemon) => {
          return (
            <Pokemon key={pokemon.id} pokemon={pokemon}>
              <Pokemon.Name>{pokemon.name}</Pokemon.Name>
              <Pokemon.Meta>
                <Pokemon.MetaSpan>{pokemon.maxHP}</Pokemon.MetaSpan>
                <Pokemon.MetaSpan>{pokemon.maxCP}</Pokemon.MetaSpan>
              </Pokemon.Meta>
              <Pokemon.Image src={pokemon.image} alt={pokemon.name} />
              <Pokemon.Attacks>
                {pokemon.attacks.special.slice(0, 3).map((attack) => (
                  <Pokemon.Attack key={`${attack.name}-${attack.damage}`}>
                    {attack.name}
                  </Pokemon.Attack>
                ))}
              </Pokemon.Attacks>
            </Pokemon>
          );
        })}
    </div>
  );
}
