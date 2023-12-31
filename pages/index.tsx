import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
  
} from '../components/sharedstyles'
import styled from 'styled-components'
import { useState } from 'react'
import Character from '../components/Character'

export default function Characters({characters}) {
  const [value, setValue] = useState(12);

  const handleShowMore = () =>{
    setValue(value + 12);
  }
  return (
    <>
    <Head>
  <title>STARWARS</title>
</Head>
<HomeScreenContainer>
    <Starfieldleft/>
    <CharactersContainer>
      {characters.filter((character)=> character.id ).map((character, index)=> index < value && (
        <Character character={character} key={character.id}/>
      ))}
    </CharactersContainer>
        {value < characters.length && (
          <Button onClick={handleShowMore}>SHOW MORE</Button>
        )}
    <StarfieldRight/>
</HomeScreenContainer>
    </>


  )
}


//
export async function getStaticProps(context) {

  const characters = await fetch("https://akabab.github.io/starwars-api/api/all.json").then((res) => res.json());
  return{
    props: {
      characters,
    },
  };
  
}


const HomeScreenContainer = styled.div` `;

const CharactersContainer = styled.div` 
  display: flex;
  margin-top: 200px;
  padding: 30px;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  background-color: #151515;
`;
const Starfield = styled.div`
  position: fixed;
  width: 200px;
  top:0;
  background-repeat: repeat-y;  
`;
//extending styles
const Starfieldleft = styled(Starfield)`
  left: 0;
  height: 1700px;
  background-position: left center;
  background-size: 100% auto;
  background-image: url("https://cdn.wallpapersafari.com/41/72/md8Mar.jpg");
`;

const StarfieldRight = styled(Starfield)` 
right: 0;
height: 1700px;
background-position: right center;
background-size: 100% auto;
background-image: url("https://cdn.wallpapersafari.com/41/72/md8Mar.jpg");
`;
const Button = styled.button`
  color: #aaa;
  background-color: transparent;
  border: none;
  font-family: inherit;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 18.4px;
  display: block;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  :hover{
    color: #fff;
    cursor: pointer;
  }

  :hover::after{
    border-bottom-color: #fff;
    width: 100%;
  }

  ::after{
    content: "";
    display: block;
    width: 40%;
    margin: 0 auto;
    opacity: 0.9;
    border-bottom: 1px solid transparent;

    //Animations
    -webkit-transition: border-color 200ms, width 250ms;
    -moz-transition: border-color 200ms, width 250ms ;
    transition: border-color 200ms, width 250ms;

  }
`;

