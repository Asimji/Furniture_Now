import {useState} from "react"
import { useNavigate } from "react-router-dom";
import "./Register.css"

export default function Register(){

    const navigate=useNavigate();
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })

    const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(user)
     localStorage.setItem("input",JSON.stringify(user))
     navigate("/login")
    }

    return (
        
    
        <div className="singupContainer" style={{marginBottom:"30px"}}>
        <div>
            <img src="https://i.pinimg.com/originals/11/c0/0c/11c00c702d268a5a7789e801f995fbcc.gif" alt=""/>
        </div>
        <div>
            <img src="https://media3.giphy.com/media/Ltz1ZA728qKw4mEY94/giphy.gif?cid=ecf05e47nicixk50f9tw42tbeob5ajio9x5f2xst1zyd7zvw&rid=giphy.gif&ct=g"
                alt="" />
            <form id="form" onSubmit={handleSubmit}>
                <input type="text" id="name" placeholder="Full Name" required 
                 name="name"
           value={user.name}
           onChange={(e)=>setUser({...user,name:e.target.value})} />
                <input type="number" id="age" placeholder="Age" required  />
                <input type="email" id="email" placeholder="Email" required
                 name="email"
                 value={user.email}
                 onChange={(e)=>setUser({...user,email:e.target.value})}
                />
                <input type="number" id="phoneNumber" placeholder="Phone Number" required/>
                <input type="password" id="password" placeholder="Password" required
                name="password"
                value={user.password}
                onChange={(e)=>setUser({...user,password:e.target.value})}
                />
                <input type="submit" value="REGISTER" id="button" required/>
            </form>
        </div>
    </div>
       )     
    
}