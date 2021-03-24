import { useRouter } from 'next/router'
import Link from 'next/link'
import TravelearMark from './travelear-mark'
import Modal from 'react-modal'

Modal.setAppElement("#__next")

export default function Navigation() {

const router = useRouter()

const profile = '1234'

return(
    <div>
        <div className="top-0 left-0 fixed">
          <div className="w-16 h-16 p-2 bg-white cursor-pointer shadow-md">
          <Link href="/">
              <TravelearMark/>
          </Link>
          </div>
        </div>
        <div className="cursor-pointer p-2 my-2  bg-white text-black text-lg font-bold shadow-md">
            <div className="w-full">
                <Link 
                href={`/?profile=${profile}`} 
                as={`/profiles/${profile}`}>
                    Profile
                </Link>
            </div>
        </div>
        <div className="cursor-pointer p-2 my-2  bg-white text-black text-lg font-bold shadow-md">
            <div className="w-full">
                <Link href={'/Create'}>
                    Create
                </Link>
            </div>
        </div>
        <Modal 
        isOpen={!!router.query.profile}
        onRequestClose={() => router.push("/")}
        >
          <div>
            in the profile modal {router.query.profile}
          </div>
        </Modal>
    </div>
    )
}