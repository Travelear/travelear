import { useEffect, useState } from 'react';
import Link from 'next/link';
import MoonIcon from './svgs/moon'
import SunIcon from './svgs/sun'
import axios from 'axios';

const List = () => {

  const [entries, setEntries] = useState([]);

  useEffect(async () => {
    const res = await axios.get('/api/recordings');
    setEntries(res.data.entriesData);
  }, []);

  return (
    <div className="w-5/6 md:w-3/4 lg:w-1/2 xl:w-1/3 h-full">
        <div className="flex flex-wrap">
            {entries.map(recording => (
            <div className="w-full p-4" key={recording.id}>
                    <Link 
                    href={`/?recording=${recording.id}`} 
                    as={`/r/${recording.id}`}>

                    <div className={recording.isWorld? "bg-gray-100 shadow-md rounded-xl p-4 space-y-4" : "bg-nightblue shadow-md rounded-xl p-4 space-y-4"}>
                        <div className="w-full flex flex-row justify-between">
                            <div className="flex-none w-12 h-12 relative">
                                <img className="absolute inset-0 w-full h-full rounded-full object-cover" src={"https://firebasestorage.googleapis.com/v0/b/travelear-fc8b2.appspot.com/o/image%2F%24747021f5-a18d-495b-998d-87f8cb750d35-garett-with-mic-for-travelear-pic.jpg?alt=media&token=4c028c02-8214-45f9-8f6a-4479580a8354"}/>
                            </div>
                            <div className="flex-none w-12 h-12 relative">
                                {recording.isWorld? <SunIcon/> : <div/>}
                                {recording.isSleep? <MoonIcon/> : <div/>}
                            </div>
                        </div>
                        <img className="w-32 h-32 rounded-full mx-auto object-cover" src={recording.image}alt="" width="384" height="512"/>
                        <div className="text-center">
                            <div className="font-medium">
                                <div className={recording.isWorld? "text-gray-800" : "text-cloudwhite"}>
                                    <p>{recording.location}</p>
                                </div>
                                <div className="text-gray-500">
                                   <p>{recording.latitude}, {recording.longitude}</p>
                                </div>
                                <div className="text-gray-500">
                                    <p>Month, Day, Year</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-between text-xs">
                            <div className="text-gray-400 translate rotate-90">
                                <p>{recording.id}</p>
                            </div>
                            <div className="text-gray-500">
                                <p>t-{recording.duration}</p>
                            </div>
                        </div>
                    </div>

                </Link>
                <br/>
            </div>
            ))}
        </div>
    </div>
  );
};

export default List;


