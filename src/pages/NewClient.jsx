import axios from "axios";
import { useState } from "react"

function NewClient() {

    const [dni, setDni] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = axios.post("http://localhost:3010/client", {
            dni, name, lastname, // more
        });

        console.log(res);
    }


    return (
        <div class="login-box">
            <h1>Register a new Client</h1>

            <form onSubmit={handleSubmit}>
                <div class="user-box">
                    <input type="text" name="dni" required="" onChange={(e) => setDni(e.target.value)}/>
                        <label>DNI</label>
                </div>
                <div class="user-box">
                    <input type="text" name="" required="" onChange={(e) => setName(e.target.value)}/>
                        <label>Name</label>
                </div>
                <div class="user-box">
                    <input type="text" name="" required="" onChange={(e) => setLastname(e.target.value)}/>
                        <label>Lastname</label>
                </div>
                <div class="user-box">
                    <input type="text" name="" required=""/>
                        <label>Email</label>
                </div>
                <div class="user-box">
                    <input type="text" name="" required=""/>
                        <label>Phone</label>
                </div>
                
                <center>
                    <a href="#">
                        SEND
                        <span></span>
                    </a>
                </center>
            </form>
        </div>
    )
}

export default NewClient