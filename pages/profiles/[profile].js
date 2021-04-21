import { useRouter } from 'next/router' 

export default function ProfilePage(){

    const router = useRouter()
    const { profile } = router.query

    return (
        <div className="flex p-8">
            <div className="sm:flex border-b pb-6 space-x-4">
                <div className="flex-none w-32 h-32 p-2 relative">
                    <img className="absolute inset-0 w-full h-full rounded-full object-cover" src={"https://firebasestorage.googleapis.com/v0/b/travelear-fc8b2.appspot.com/o/image%2F%24747021f5-a18d-495b-998d-87f8cb750d35-garett-with-mic-for-travelear-pic.jpg?alt=media&token=4c028c02-8214-45f9-8f6a-4479580a8354"}/>
                </div>
                <div className="pt-6">
                    <div className="text-cyan-600">
                        Garett Martocello - {profile}
                    </div>
                    <div className="text-gray-500">
                        Travelear Chief Audio Engineer
                    </div>
                    <div className="text-gray-500">
                        52 posts | Member since 2016
                    </div>
                </div>
            </div>
        </div>
    )
}