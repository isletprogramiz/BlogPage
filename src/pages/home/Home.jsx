import "./home.css"
import Header from "../../header/Header"
import SideBar from "../../sidebar/SideBar"
import Post from "../../posts/Posts"


export default function Home() {
  return (
    <>
    <Header />   
    <div className="home">
    <Post />
    <SideBar />
    </div>
    </>
  )
}
