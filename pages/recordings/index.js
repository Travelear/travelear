import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Recordings = () => {

  const [entries, setEntries] = useState([]);

  useEffect(async () => {
    const res = await axios.get('/api/recordings');
    console.log(res)
    setEntries(res.data.entriesData);
  }, []);

  return (
    <div>
      <main className="flex justify-center items-center content-center">
        <div className="p-6 mt-20 ml-2 mr-32 w-full space-y-4">
            <h1 className="border-b pb-6 font-bold text-left uppercase">
                Admin
            </h1>
            <div>
                {entries.map(recording => (
                    <div key={recording.id}>
                    <Link href={`/r/${recording.id}`}>
                        <div>
                        <p>{recording.name}</p>
                        <p>{recording.authorName}</p>
                        </div>
                    </Link>
                    <br/>
                    </div>
                ))}
            </div>
        </div>
      </main>
    </div>
  );
};

export default Recordings;