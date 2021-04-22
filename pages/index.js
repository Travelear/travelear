import { useState } from 'react'
import { useRouter } from "next/router"
import Link from 'next/link'
import db from '../utils/db'
import LoopIcon from '../components/svgs/loop'
import Layout from '../components/layout'
import Post from '../components/post'
import Modal from 'react-modal'

Modal.setAppElement("#__next")

export default function Home(props) {

  const [post, setPost] = useState({})
  const router = useRouter()
  const { posts } = props


  return (
    <Layout>
      <main className="w-full flex flex-wrap p-4">
        {posts? posts.map(post => (
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-4 bg-white" key={post.id}>
                  <Link 
                      href={`/?id=${post.id}`}
                      as={`/posts/${post.id}`}
                      >
                        <a onClick={()=>setPost(post)}>
                        <div className="bg-gray-100 shadow-md rounded-xl p-4 space-y-4">
                          <div className="w-full flex flex-row justify-between">
                              <div className="flex-none w-8 h-8 relative">
                                  <img className="absolute inset-0 w-full h-full rounded-full object-cover" src={"https://firebasestorage.googleapis.com/v0/b/travelear-fc8b2.appspot.com/o/image%2F%24747021f5-a18d-495b-998d-87f8cb750d35-garett-with-mic-for-travelear-pic.jpg?alt=media&token=4c028c02-8214-45f9-8f6a-4479580a8354"}/>
                              </div>
                              <div className="flex-none w-8 h-8 relative">
                                  {post.isSleep? <LoopIcon/> : <div/>}
                              </div>
                          </div>
                          <img className="w-32 h-32 rounded-full mx-auto object-cover" src={post.image}alt="" width="384" height="512"/>
                          <div className="text-center">
                              <div className="font-medium">
                                  <div className="text-gray-800">
                                      <p>{post.location}</p>
                                  </div>
                                  <div className="text-gray-500">
                                    <p>{post.latitude}, {post.longitude}</p>
                                  </div>
                                  <div className="text-gray-500">
                                      <p>Month, Day, Year</p>
                                  </div>
                              </div>
                          </div>
                          <div className="w-full flex flex-row justify-between text-xs font-light">
                              <div className="text-gray-400 translate rotate-90">
                                  <p>{post.id}</p>
                              </div>
                              <div className="text-gray-500">
                                  <p>t-{post.duration}</p>
                              </div>
                          </div>
                        </div>
                        </a>
                    </Link>
                </div>
          )): <div></div>}
      </main>
      <Modal
      style={
        {
          content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, .0)',
            borderColor: 'rgba(0, 0, 0, .0)'
          },
          overlay : {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, .7)'
          }          
        }
      }
      isOpen={!!router.query.id} 
      onRequestClose={() => router.push("/")}
      >
        <Post 
          id={router.query.id}
          name={post.name}
          location={post.location}
          latitude={post.latitude}
          longitude={post.longitude}
          image={post.image}
          creatorName={post.creatorName}
        />
      </Modal>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const query = await db.collection('tracks-published').get()
  const posts = query.docs.map(entry => (
    JSON.parse(JSON.stringify({
    id: entry.id,
    ...entry.data()
    }))
  ));
  return {
    props: { 
      posts 
    },
    revalidate: 10
  }
}
