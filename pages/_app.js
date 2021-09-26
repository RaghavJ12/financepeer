import '../styles/globals.scss'
import 'bulma/css/bulma.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />

      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
