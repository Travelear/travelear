import useSWR from "swr"

export default function Post({postId}){  
    return (
      <div>
        <h2>{postId}</h2>
      </div>
    );
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