import { useState } from 'react'
import { useRouter } from "next/router"
import Link from 'next/link'
import db from '../utils/db'
import PostCard from '../components/postcard'
import Layout from '../components/layout'
import Post from '../components/post'
import Modal from 'react-modal'

Modal.setAppElement("#__next")

export default function Home(props) {

  const router = useRouter()
  const [post, setPost] = useState({})
  const { posts } = props

  const modalStyle = {
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

  return (
    <Layout>
      <div>
        {/* BROWSE */}
        <div className="w-full flex flex-wrap p-2">
        {posts? posts.map(post => (
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 p-4 bg-white" key={post.id}>
                  <Link 
                      href={`/?postId=${post.id}`}
                      as={`/posts/${post.id}`}
                      >
                        <a onClick={()=>setPost(post)}>
                        <PostCard post={post}/>
                        </a>
                    </Link>
                </div>
          )): <div></div>}
        </div>
      </div>

      <Modal
      style={modalStyle}
      isOpen={!!router.query.postId} 
      onRequestClose={() => router.push("/")}
      >
        <Post 
          postId={router.query.postId}
          name={post.name}
          location={post.location}
          latitude={post.latitude}
          longitude={post.longitude}
          image={post.image}
          file={post.file}
          duration={post.duration}
          creatorName={post.creatorName}
          isSleep={post.isSleep}
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
