import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SWRConfig} from "swr";
import instance from '@/api/instance';
import { persistor, store } from '@/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SWRConfig value={{fetcher: async (url) => await instance.get(url)}}>
          <Component {...pageProps} />
        </SWRConfig>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
