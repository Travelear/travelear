import { useRouter } from 'next/router' 

export default function RecordingPage(){

    const router = useRouter()
    const { record } = router.query

    return (
        <div>
            profile page of {record}
        </div>
    )
}