import '../styles/globals.css'
import type { AppProps } from 'next/app'
<<<<<<< HEAD
import { wrapper } from '@/store/store'
=======
import {SWRConfig} from "swr";
import instance from '@/api/instance';
>>>>>>> 180090501cb765fb69a17dd078339318686f5089

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <SWRConfig value={{fetcher: async (url) => await instance.get(url)}}>
        <Component {...pageProps} />
      </SWRConfig>
  )
}

export default wrapper.withRedux(MyApp) 
