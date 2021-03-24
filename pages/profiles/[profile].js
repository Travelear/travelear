import { useRouter } from 'next/router' 

export default function ProfilePage(){

    const router = useRouter()
    const { profile } = router.query

    return (
        <div>
            profile page of {profile}
        </div>
    )
}