import Link from 'next/link'
import db from '../../utils/db'

const Posts = (props) => {

  const { entries } = props

  return (
    <div className="w-5/6 md:w-3/4 lg:w-1/2 xl:w-1/3 h-full">
        <div className="flex flex-wrap">
            <div>
              {entries? entries.map(post => (
                <div className="w-full p-4" key={post.id}>
                    <Link 
                        href={`/?post=${post.id}`} 
                        as={`/r/${post.id}`}>

                        <div className="bg-gray-100 shadow-md rounded-xl p-4 space-y-4">
                            <div className="w-full flex flex-row justify-between">
                                <div className="flex-none w-12 h-12 relative">
                                    <img className="absolute inset-0 w-full h-full rounded-full object-cover" src={"https://firebasestorage.googleapis.com/v0/b/travelear-fc8b2.appspot.com/o/image%2F%24747021f5-a18d-495b-998d-87f8cb750d35-garett-with-mic-for-travelear-pic.jpg?alt=media&token=4c028c02-8214-45f9-8f6a-4479580a8354"}/>
                                </div>
                                <div className="flex-none w-12 h-12 relative">
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
                            <div className="w-full flex flex-row justify-between text-xs">
                                <div className="text-gray-400 translate rotate-90">
                                    <p>{post.id}</p>
                                </div>
                                <div className="text-gray-500">
                                    <p>t-{post.duration}</p>
                                </div>
                            </div>
                        </div>

                    </Link>
                </div>
              )): <div></div>}
            </div>
        </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const query = await db.collection('tracks-published').get()
  const entries = query.docs.map(entry => (
    JSON.parse(JSON.stringify({
    id: entry.id,
    ...entry.data()
    }))
  ));
  return {
    props: { 
      entries 
    },
    revalidate: 10
  }
}

export default Posts;
