import Layout from '../../components/layout'
import Post from '../../components/post'
import db from '../../utils/db'


const PostPage = (props) => {

  const post = props.post

  return (
    <Layout>
      <div className="w-full flex justify-center items-center">
        <div className="w-256 p-8">
          <Post 
          postId={post.id}
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
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;


export async function getStaticProps({ params }) {
  const doc = await db.collection('tracks-published').doc(params.id).get()
  const post = JSON.parse(JSON.stringify({
                id: doc.id,
                ...doc.data()
              }))
  return {
    props: {
      post: post
    },
  }
}

export async function getStaticPaths() {
  const doc = await db.collection('tracks-published').where('isPublic', '==', true).get();
  return {
    paths: doc.docs.map((post) => {
      return {
        params: {
          id: post.id,
        },
      }
    }),
    fallback: false,
  }
}


