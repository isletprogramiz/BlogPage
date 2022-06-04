import SideBar from "../../sidebar/SideBar"
import "./setting.css"

export default function Setting() {
  return (
    <div className="settings">
        <div className="settingWrapper">

            <div className="settingTitle">
                <span className="settingUpdateTitle">Update your Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>

            <form className="settingForm">

                <label>Profile Picture</label>
                <div className="settingPP">
                    <img src="https://images.ctfassets.net/9wtva4vhlgxb/50Zllq4PvCA96ohmViFhlD/560523dec2b3db70a149b7f98a97de5c/Top-Baby-Girl_720x432.jpg" alt=" " />
                    <label htmlFor="fileInput">
                    <i class="settingPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} ></input>
                    <label>Username</label>
                    <input type="text" placeholder="Shilpi" />
                    <label>Email</label>
                    <input type="email" placeholder="shilpi.nkk@gmail.com" />
                    <label>Password</label>
                    <input type="text"  />
                    <button className="settingSubmit">Update</button>

               </div>
            </form>
        </div>
        <SideBar />
    </div>
  )
}
