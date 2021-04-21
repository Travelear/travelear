import { useRouter } from 'next/router'
import Player from '../../components/player'
import db from '../../utils/db';
var QRCode = require('qrcode.react')

const PostPage = (props) => {

  const { entry } = props;
  const router = useRouter()

  console.log(entry)

  if (router.isFallback) {
    return (
      <div>loading</div>
    )
  } else {
    if (entry) {
      return (
        <div className="w-full h-full">
            <div className="flex flex-wrap text-black font-departures border-black border-1">
                <div className="w-full flex flex-row justify-between items-center bg-travello space-x-4 p-4">
                    <div className="w-128">
                        <QRCode value="http://www.thetravelear.com" bgColor="#fbbf24" fgColor="#000000"/>
                    </div>
                    <div className="w-full text-xs">
                        <div><p>{entry.name}</p></div>
                        <div><p>{entry.latitude},{entry.longitude}</p></div>
                    </div>
                </div>
                <div className="w-full flex">
                        <Player/>
                </div>
            </div>
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
  const entries = await db.collection('tracks-published').where("isPublic", "==", true).get()
  const paths = entries.docs.map(entry => ({
    params: {
      post: entry.data().id
    }
  }));
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const { post } = context.params;
  const res = await db.collection('tracks-published').where("id", "==", post).get()
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

export default PostPage;