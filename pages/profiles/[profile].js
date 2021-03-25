import { useRouter } from 'next/router' 

export default function ProfilePage(){

    const router = useRouter()
    const { profile } = router.query

    return (
        <div className="flex p-8">
            <div className="sm:flex border-b pb-6 space-x-4">
                <img className="w-32 h-32 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/travelear-fc8b2.appspot.com/o/image%2F%24071717b9-3ff0-4bb7-b35c-b9a3acdd1920-Podcast-Logo.jpg?alt=media&token=c8489c29-cca0-47b8-9ec3-39dd7c2bd04f" alt="" width="128" height="128"/>
                <div className="pt-6">
                    <div className="text-cyan-600">
                        Nick Culpin - {profile}
                    </div>
                    <div className="text-gray-500">
                        Travelear Developer
                    </div>
                    <div className="text-gray-500">
                        52 recordings | Member since 2016
                    </div>
                </div>
            </div>
        </div>
    )
}