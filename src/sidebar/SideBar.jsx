import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
    <div className="sideBarItems">
        <span className="sideBarTitle">ABOUT ME</span>
        <img src="https://loveshayariimages.in/wp-content/uploads/2021/06/Cute-Girl-Pic-For-Dp-Pics-Hd-FRee.jpg" alt="" />
        <p>"You'll be a wonderful lord," she told him. "And any lady would be lucky to have you. But I'm not a lady. I never have been. That's not me."
            For longtime watchers of the show, this last exchange might sound familiar. 
            That's because "That's not me" is something Arya has said before.
        </p>
    </div>
    <div className="sideBarItems">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
            <li className="sideBarListItem">Life</li>
            <li className="sideBarListItem">Music</li>
            <li className="sideBarListItem">Style</li>
            <li className="sideBarListItem">Sport</li>
            <li className="sideBarListItem">Tech</li>
            <li className="sideBarListItem">Cinema</li>
           
        </ul>
    </div>
    <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
        <i className ="sideBarIcon fa-brands fa-facebook-square"></i>
         <i className ="sideBarIcon fa-brands fa-twitter-square"></i>
         <i className ="sideBarIcon fa-brands fa-instagram-square"></i>

        </div>
    </div>
    </div>
  )
}
