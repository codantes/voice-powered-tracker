import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import {Provider} from '../context/context'
import {useReducer} from 'react'
import { SpeechProvider } from "@speechly/react-client"

function MyApp({ Component, pageProps }) {
  return (
  <SpeechProvider appId='68f25779-b178-4680-aacb-c42ccf351693' language='en-US'>
    <Provider>
      <ChakraProvider >
      <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  </SpeechProvider>
  )
}

export default MyApp
