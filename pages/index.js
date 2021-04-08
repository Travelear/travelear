import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Map from './components/map'
import Add from './components/svgs/add'
import Listen from './components/svgs/listen'

import ProfilePage from './profiles/[profile]'
import RecordingPage from './recordings/[recording]'
import Modal from 'react-modal'

// import VolumeUp from './components/svgs/volume-up'
// import VolumeDown from './components/svgs/volume-down'

Modal.setAppElement("#__next")

export default function Home() {

  const router = useRouter()
  const profile = '1234'
  

  return (
    <div className="flex justify-center min-h-screen">
      <Head>
        <title>Travelear</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex flex-wrap">

        <div className="w-full h-full">
          <Map/>
        </div>

        <div className="top-16 right-0 fixed space-y-2">
          <div className="rounded-l-full bg-cloudwhite shadow-lg">
              <div className="p-2 flex">
                <div className="center-items cursor-pointer">
                      <Link 
                        href={`/?profile=${profile}`} 
                        as={`/${profile}`}>
                            <div className="flex-none w-16 h-16 p-2 relative">
                                <img className="absolute inset-0 w-full h-full rounded-full object-cover" src={"https://firebasestorage.googleapis.com/v0/b/travelear-fc8b2.appspot.com/o/image%2F%24747021f5-a18d-495b-998d-87f8cb750d35-garett-with-mic-for-travelear-pic.jpg?alt=media&token=4c028c02-8214-45f9-8f6a-4479580a8354"}/>
                            </div>
                      </Link>
                </div>
              </div>
          </div>
          <div className="rounded-l-full bg-cloudwhite shadow-lg">
              <div className="p-2 flex">
                <div className="center-items cursor-pointer">
                      <Link 
                        href={`/admin/create`}
                        as={`/create`}
                        >
                            <div className="flex-none w-16 h-16 p-2 relative bg-explored rounded-full"/>
                      </Link>
                </div>
              </div>
          </div>
        </div>

      </main>
      <Modal
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
          }}}
        isOpen={!!router.query.profile}
        onRequestClose={() => router.push("/")}>
          <ProfilePage/>
      </Modal>
      <Modal
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          },
          content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            padding               : '0px',
            border                : '1px solid #000000',
            transform             : 'translate(-50%, -50%)'
          }}}
        isOpen={!!router.query.recording}
        onRequestClose={() => router.push("/")}>
          <div className="h-full flex justify-center items-center">
            <RecordingPage/>
          </div>
      </Modal>
    </div>
  )
}