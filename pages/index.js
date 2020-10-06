import Head from 'next/head'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Share Dic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
    </Container>
  )
}
