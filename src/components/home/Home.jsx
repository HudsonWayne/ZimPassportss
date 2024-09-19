import Download from "./DownLoad"
import PopularDocuments from "./populardocuments"
import UserReviews from "./UserReviews"


const Home = () => {
  return (
    <div>
      <PopularDocuments />
      <UserReviews />
      <Download />
    </div> 
  )
}

export default Home