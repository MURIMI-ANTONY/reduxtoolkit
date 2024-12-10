import { useState } from "react";
import {login,logout} from "../store";
import  {useDispatch,useSelector} from "react-redux";

function Login(){
    const [newUserName, setNewUserName] = useState<string>("");
    const dispatch = useDispatch();
    const username = useSelector((state:any)=>state.user.value.username)
    return(
        <div>
            <h1>This is the Login Page</h1>
            {username}
            <br></br>
            {/* // React.ChangeEvent<HTMLInputElement></HTMLInputElement> ...typescript knows e is a React vhange event from an input element */}
            <input type="text" 
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                setNewUserName(e.target.value);
            }}></input>
            <button type="submit" onClick={()=>dispatch(login({username: newUserName}))}>Login</button>
            <button onClick={()=>dispatch(logout())}>Log out</button>
        </div>
    )
}

export default Login;