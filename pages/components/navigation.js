import { useRouter } from 'next/router'
import Link from 'next/link'
import TravelearMark from './svgs/travelear-mark'
import Modal from 'react-modal'

Modal.setAppElement("#__next")

export default function Navigation() {

const router = useRouter()
const profile = '1234'

return(
    <div>
        <div className="top-0 left-0 fixed">
          <div className="center-items bg-white cursor-pointer shadow-md">
          <Link 
          href={'/'}>
              <div className="w-16 h-16 p-2">
                <TravelearMark/>
              </div>
          </Link>
          </div>
        </div>
        <div className="top-16 right-0 fixed">
            <div className="cursor-pointer my-2 bg-white text-black text-lg font-bold shadow-md">
                <Link 
                    href={`/?profile=${profile}`} 
                    as={`/profiles/${profile}`}>
                        <div className="w-full p-2">
                            Profile
                        </div>
                </Link>
            </div>
            <div className="cursor-pointer my-2 bg-white text-black text-lg font-bold shadow-md">
                <Link 
                    href={`/recordings/create`}>
                        <div className="w-full p-2">
                            Create
                        </div>
                </Link>
            </div>
            <div className="cursor-pointer my-2 bg-white text-black text-lg font-bold shadow-md">
                <Link 
                    href={`/about`}>
                        <div className="w-full p-2">
                            About
                        </div>
                </Link>
            </div>
        </div>
        <Modal 
        isOpen={!!router.query.profile}
        onRequestClose={() => router.push("/")}>
          <div>
            in the profile modal {router.query.profile}
          </div>
        </Modal>
    </div>
    )
}