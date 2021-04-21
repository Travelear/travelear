import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import Post from '../../components/post'

const PostPage = () => {

    const router = useRouter();
    const { postId } = router.query;
  
    return (
      <Layout>
        <Post postId={postId}/>
      </Layout>
    )
  
  };

export default PostPage;
