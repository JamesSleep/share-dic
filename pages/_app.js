import GlobalStyles from "../src/components/GlobalStyles"
import Navigation from "../src/components/Navigation"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
