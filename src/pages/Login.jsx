import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3010/login", {
                dni, email
            });

            console.log(res);
            
            alert(res.data.message);

            if (res.data.status) {
                navigate("/");
            } 
            
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div className="login-box">
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input type="email" name="" required onChange={(e) => setEmail(e.target.value)} />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="number" name="" required onChange={(e) => setDni(e.target.value)} />
                    <label>DNI</label>
                </div>
                <center>
                    <button className="linkBtn" type="submit">Register</button>
                </center>
            </form>
        </div>
    )
}

export default Login