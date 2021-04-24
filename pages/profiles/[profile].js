import Layout from '../../components/layout'
import Profile from '../../components/profile'


const ProfilePage = (props) => {

  const profile = props.profile

    return (
        <Layout>
          <div className="w-full flex justify-center items-center">
            <div className="w-256 p-8">
              <Profile props={profile}/>
            </div>
          </div>
        </Layout>
    )
}

export default ProfilePage;