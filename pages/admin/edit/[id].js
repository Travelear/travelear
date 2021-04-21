import { useRouter } from 'next/router'
import db from '../../../utils/db'

const post = (props) => {
  const { entry } = props;
  const router = useRouter()
  if (router.isFallback) {
    return (
      <div>loading</div>
    )
  } else {
    if (entry) {
      return (
        <div>
          <h1>{entry.title}</h1>
          <h4>{entry.created}</h4>
          <p>{entry.body}</p>
        </div>
      );
    } else {
      return (
        <div>not found</div>
      )
    }
  }
};

export const getStaticPaths = async () => {
  const entries = await db.collection("tracks-published").get()
  const paths = entries.docs.map(entry => ({
    params: {
      id: entry.data().id
    }
  }));
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await db.collection("tracks-published").where("id", "==", id).get()
  const entry = res.docs.map(entry => entry.data());
  if (entry.length) {
    return {
      props: {
        entry: JSON.parse(JSON.stringify(entry[0]))
      }
    }
  } else {
    return {
      props: {}
    }
  }
}

export default post;