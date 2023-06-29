import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Raleway } from '@next/font/google'
const raleway = Raleway({
  subsets: ['latin']
})
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={raleway.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
