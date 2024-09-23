import Download from "./DownLoad"
import PopularDocuments from "./populardocuments"
import UserReviews from "./UserReviews"
import Banner from "../banner/Banner"


const Home = () => {
  return (
    <div>
      <Banner />
      <PopularDocuments />
      <UserReviews />
      <Download />
    </div> 
  )
}

export default Home