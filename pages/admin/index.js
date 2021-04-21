import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Admin = () => {

    const [entries, setEntries] = useState([]);

    useEffect(async () => {
      const res = await axios.get('/api/posts');
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
                        {entries.map(post => (
                            <div key={post.id}>
                            <Link href={`/admin/edit/${post.id}`}>
                                <div>
                                <p>{post.name}</p>
                                <p>{post.authorName}</p>
                                </div>
                            </Link>
                            <br/>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Admin;

