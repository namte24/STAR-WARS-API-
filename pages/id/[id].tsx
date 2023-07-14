import React from 'react'
import CharacterCard from '../../components/CharacterCard'
import styled from 'styled-components'

function Character({character}) {
  return (
    <CharacterContainer>
        <StarfieldLeft/>
        <CharacterCard character={character}/>
        <StarfieldRight/>
    </CharacterContainer>
  )
}

export default Character

//Executed on server

export async function getStaticProps(context) { 
    const character = await fetch(`https://akabab.github.io/starwars-api/api/id/${context.params.id}`).then((res) => res.json());

    return{
        props:{
            character,
        },
    };
}

export async function getStaticPaths(context) {
    const character = await fetch("https://akabab.github.io/starwars-api/api/all.json").then((res) => res.json());

    const paths = character.map((character) => `/id/${character.id}.json`);

    return{
        paths,
        fallback: false,
    };
}

const CharacterContainer = styled.div`
    padding: 40px;
    margin-top:200px;

`;


//extending styles
const StarfieldLeft = styled.div`
 position: fixed;
 width: 100px;
 top: 0;
 background-repeat: repeat-y;
 left: 0;
 height: 1700px;
 background-position: left center;
 background-size: 100% auto;
  background-image: url("https://cdn.wallpapersafari.com/41/72/md8Mar.jpg");
`;

const StarfieldRight = styled.div`
 position: fixed;
 width: 100px;
 top: 0;
 background-repeat: repeat-y;
 right: 0;
 height: 1700px;
 background-position: right center;
 background-size: 100% auto;
background-image: url("https://cdn.wallpapersafari.com/41/72/md8Mar.jpg");
`;