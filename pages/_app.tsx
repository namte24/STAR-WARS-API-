import type { AppProps } from 'next/app'
import styled, { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import {Circle} from 'better-react-spinkit';




export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const timeoutId = setTimeout(() =>{
      setLoading(false)
    }, 500);
    return() =>{
      clearTimeout(timeoutId);
    }
  },[])
  return (
    <>
  
        <GlobalStyle />
        {loading? (
          <AppLoading>
            <ApploadingContents>
              <img src='https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png'
              alt=''/>
              <Circle color="#edec51" size={60} />
            </ApploadingContents>
          </AppLoading>
        ):(
          <>
          <Header/>
          <Navbar/>
          <Component {...pageProps} />
          <Footer/>
          </>
        )}
     
    
    </>
  )
}

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const ApploadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  > img{
    object-fit: contain;
    height: 150px;
    margin-bottom: 20px;
    filter: brightness(0) invert(1);
  }
`;
