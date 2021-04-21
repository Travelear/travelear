import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import ProfilePage from './profiles/[profile]'
import PostPage from './posts/[post]'
import CreatePage from './admin/create'
import Posts from './posts'
import Modal from 'react-modal'
import Map from '../components/map'
import MapPinIcon from '../components/svgs/map-pin'

Modal.setAppElement("#__next")

export default function Home() {

  const [checkCreate, setCheckCreate] = useState(false)
  const [checkMap, setCheckMap] = useState(false)

  const router = useRouter()
  const profile = '1234'

  const setShowCreate = () => {
    return setCheckCreate(prevCheck => !prevCheck)
  }
  
  const setShowMap = () => {
    return setCheckMap(prevCheck => !prevCheck)
  } 
  

  return (
    <div className="flex justify-center min-h-screen">
      <Head>
        <title>Travelear</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex flex-wrap">

        <div className="w-full h-full bg-cloudwhite flex justify-center items-center pt-24">
          <Posts/>
        </div>

        <div className="top-24 right-0 fixed space-y-2">
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
                  <button className="flex-none w-16 h-16 p-2 bg-explored relative rounded-full" onClick={setShowCreate}/>
                </div>
              </div>
          </div>
          <div className="rounded-l-full bg-cloudwhite shadow-lg">
              <div className="p-2 flex">
                <div className="center-items cursor-pointer">
                  <button className="flex-none w-16 h-16 p-2 relative rounded-full" onClick={setShowMap}>
                    <MapPinIcon/>
                  </button>
                </div>
              </div>
          </div>
        </div>

        <div className="w-full fixed t-0 p-4 bg-cloudwhite">
            <input type="search" className="form-input px-4 py-3 w-full border-gray-50" placeholder="Search"/>
        </div>

      </main>
      <Modal
        isOpen={!!router.query.profile}
        onRequestClose={() => router.push("/")}>
          <div className="h-full flex justify-center items-center">
            <ProfilePage/>
          </div>
      </Modal>
      <Modal
        isOpen={!!router.query.post}
        onRequestClose={() => router.push("/")}>
          <div className="h-full flex justify-center items-center">
            <PostPage/>
          </div>
      </Modal>
      <Modal
        isOpen={checkCreate}
        onRequestClose={setShowCreate}>
          <div className="h-full flex justify-center items-center">
            <CreatePage/>
          </div>
      </Modal>
    </div>
  )
}