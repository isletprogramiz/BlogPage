import "./topbar.css";
import { Link } from "react-router-dom";

function TopBar(props) {
    return (
        <div className="top">
         <div className="topLeft">
         <i className ="topIcon fa-brands fa-facebook-square"></i>
         <i className ="topIcon fa-brands fa-twitter-square"></i>
         <i className ="topIcon fa-brands fa-instagram-square"></i>

         </div>
         <div className="topCenter">
             <ul className="topList">
                <li className="topListItem">
                <Link to="/">HOME</Link>
                </li>
                <li className="topListItem">
                <Link to="/single">ABOUT</Link></li>
                <li className="topListItem">
                <Link to="/login">CONTACT </Link></li>
                <li className="topListItem">
                <Link to="/write">WRITE</Link></li>
                <li className="topListItem">
                <Link to="setting">LOGOUT</Link></li>
             </ul>
         </div>
         <div className="topRight">
        
         
         <img src ="https://i.pinimg.com/236x/c6/5c/10/c65c108c2cf9383960406b93d58ed396.jpg" className="imgTop" alt="hello" />
         <i class="searchIcon fa-solid fa-magnifying-glass"></i>
         </div>
        </div>
    );
}

export default TopBar;