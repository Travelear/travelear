import Head from 'next/head'
import Player from './components/player'
import Map from './components/map'
import Ticket from './components/ticket'
import Navigation from './components/navigation'

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">
      <Head>
        <title>Travelear</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="justify-center flex-1 text-center">
        <div className="w-full h-full">
          <Map/>
        </div>
        <div>
          <Navigation/>
        </div>
        <div className="bottom-8 left-0 fixed cursor-pointer">
          <Ticket/>
        </div>
        <div className="bottom-8 right-8 fixed">
          <Player/>
        </div>
      </main>
    </div>
  )
}