import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"


export default function Login(){

    const navigate=useNavigate()

    const [user,setUser]=useState({
        email:"",
        password:""
    })

    const handleSubmit=(e)=>{
     e.preventDefault();
     const loggedUser=JSON.parse(localStorage.getItem("input"))
     if(!loggedUser){
        alert("Please Register")
        navigate("/register")
     }
     if(user.email===loggedUser.email && user.password===loggedUser.password){
      
         navigate("/")
     }
     else{
        alert("Incorrect Email/Password")
     }

    }
   

    return <div style={{height:"600px"}}>
  <div className="lok_login_Container">
            <img src="https://hometown.gumlet.io/media/product/36/5453/20057/1.jpg?mode=fill&w=273&h=273&dpr=1.0"
                alt="" style={{height:"50%"}} />
            <div>
                <div>
                    <p>Login or Signup</p>
              <form onSubmit={handleSubmit}>
                    <div>

                        <input type="text" placeholder="Enter Your Email"
        name="email"
        value={user.email}
        onChange={(e)=>setUser({...user,email:e.target.value})}
        />
        
                    </div>
                    <div style={{margin:"13px 0 13px 0"}}>
                    <input type="password" placeholder="Enter Your Password" 
        name="password"
        value={user.password}
        onChange={(e)=>setUser({...user,password:(e.target.value)})}
        />  
              
                    </div>
                    <p>By continuing, I agree to the <span className="pincolor">Terms of Use</span> & <span
                            className="pincolor">Privacy Policy</span></p>
                    <input type="submit" id="button" />
                            </form>
                    <p style={{fontSize:"12px",fontWeight:"bold"}}>Have trouble logging in? <span className="pincolor"><Link to="/register">REGISTER HERE / SignUp</Link></span> </p>
                </div>
            </div>
        </div>

    </div>
}