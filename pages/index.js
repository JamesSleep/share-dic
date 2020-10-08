import Head from 'next/head'
import styled from 'styled-components'
import Navigation from '../src/components/Navigation';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Main = styled.main`
  
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Share Dic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Main>
        <h2></h2>
      </Main>
    </Container>
  )
}
