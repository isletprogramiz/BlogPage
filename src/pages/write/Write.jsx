import "./write.css"

export default function Write() {
  return (
   <div className="write">
   <img className ="writeImg" src="https://images.unsplash.com/photo-1615966650071-855b15f29ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlJTIwaW4lMjBsb3ZlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=" " />
    <form className="writeForm">
        <div className="writeFormGroup">
         <label htmlFor="fileInput">
         <i class=" writeIcon fa-solid fa-plus"></i>
         </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
             <input type="text" placeholder="Title" className="writeTitle" />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
    </form>

   </div>
  )
}
