import Player from './player'
import { useRouter } from "next/router"

var QRCode = require('qrcode.react')

export default function Post({id, name, location, latitude, longitude, image, creatorName}){ 
    const router = useRouter()

    if (router.isFallback) {
        return (
          <div>loading</div>
        )
      } else {
        if (id) {
          return (
            <div className="w-full h-full bg-gray-100 rounded-lg shadow-lg">
                <div className="flex flex-col justify-items-center text-black border-black border-1">
                    <div>
                        <img className="h-64 w-full object-cover rounded-t-lg" src={image} alt="" />
                    </div>
                    <div className="w-full flex flex-row justify-between space-x-6 p-4">
                        <div className="flex flex-col justify-between space-y-6">
                            <div>
                                <p className="text-xs text-primary">{name}</p>
                                <p className="text-xs text-primary">{location}</p>
                                <p className="text-xs text-primary">{latitude}, {longitude}</p>
                            </div>
                            <div>
                                <p className="text-xs text-primary">{creatorName}</p>
                                <p className="text-xs text-primary">{id}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap content-end">
                            <QRCode
                                size={48}
                                value={`http://www.thetravelear.com/posts/${id}`} 
                                bgColor="#ffffff" 
                                fgColor="#000000"
                            />
                        </div>
                    </div>
                    <div className="w-full px-4 rounded-b-lg">
                        <Player/>
                    </div>
                </div>
            </div>
        )
        } else {
          return (
            <div>not found</div>
          )
        }
      }
}