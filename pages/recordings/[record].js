import { useRouter } from 'next/router' 

export default function RecordingPage(){

    const router = useRouter()
    const { recording } = router.query

    return (
        <div>
           recording page {recording}
        </div>
    )
}