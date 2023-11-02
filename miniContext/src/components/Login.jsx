import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext.js";

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);
    const handelSubmit = (e) => {
        e.preventDefault();
        setUser({userName, password})
        console.log("Clicked")
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type={"text"} placeholder={"username"}/>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={"text"} placeholder={"password"}/>
            <button onClick={handelSubmit}>Submit</button>
        </div>
    )
}

export default Login;