import useSWR from "swr"
import Player from './player'
var QRCode = require('qrcode.react')

export default function Post({postId}){  
    return (
        <div className="w-full h-full bg-gray-100 rounded-lg shadow-lg">
            <div className="flex flex-col justify-items-center text-black border-black border-1 space-y-4">
                <div>
                    <img className="h-64 w-256 object-cover rounded-t-lg" src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
                </div>
                <div className="w-full px-4">
                    <Player/>
                </div>
                <div className="w-full flex flex-row justify-between space-x-6 bg-calltoaction rounded-b-lg p-4">
                    <div className="flex flex-col justify-between space-y-6">
                        <div>
                            <p className="text-xs text-primary">Recording Name</p>
                            <p className="text-xs text-primary">Location, State, USA</p>
                            <p className="text-xs text-primary">123.12312 , 123213123</p>
                            <p className="text-xs text-primary">january 5th 1987</p>
                        </div>
                        <div>
                            <p className="text-xs text-primary">Author Name</p>
                            <p className="text-xs text-primary">{postId}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap content-end">
                        <QRCode
                            size="32"
                            value={`http://www.thetravelear.com/posts/${postId}`} 
                            bgColor="#fbbf24" 
                            fgColor="#000000"
                        />
                    </div>
                </div>
            </div>
        </div>
      )
}