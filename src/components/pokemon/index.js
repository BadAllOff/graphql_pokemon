import React from "react";
import {
  Container,
  Name,
  Meta,
  MetaSpan,
  Image,
  Attacks,
  Attack,
} from "./styles/pokemon";

export default function Pokemon({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Pokemon.Name = function PokemonName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
Pokemon.Meta = function PokemonMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};
Pokemon.MetaSpan = function PokemonMetaSpan({ children, ...restProps }) {
  return <MetaSpan {...restProps}>{children}</MetaSpan>;
};
Pokemon.Image = function PokemonImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
Pokemon.Attacks = function PokemonAttacks({ children, ...restProps }) {
  return <Attacks {...restProps}>{children}</Attacks>;
};
Pokemon.Attack = function PokemonAttack({ children, ...restProps }) {
  return <Attack {...restProps}>{children}</Attack>;
};
