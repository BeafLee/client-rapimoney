import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function NewClient() {

    const [dni, setDni] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [bank, setBank] = useState("");
    const [cci, setCci] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(import.meta.env.VITE_SOME_KEY + "/client", {
                dni, name, lastname, birthdate, phone, email, bank, cci_num: cci
            });

            navigate("/");
        } catch (error) {
            console.error(error);
        }

    }


    return (
        <div className="login-box">
            <h1>Register a new Client</h1>

            <form onSubmit={handleSubmit} >
                <div className="user-box">
                    <input type="number" name="dni" required onChange={(e) => setDni(e.target.value)} />
                    <label>DNI</label>
                </div>
                <div className="user-box">
                    <input type="text" name="name" required onChange={(e) => setName(e.target.value)} />
                    <label>Name</label>
                </div>
                <div className="user-box">
                    <input type="text" name="lastname" required onChange={(e) => setLastname(e.target.value)} />
                    <label>Lastname</label>
                </div>
                <div className="user-box">
                    <input type="date" name="birthdate" required onChange={(e) => setBirthdate(e.target.value)} />
                    <label>Birthdate</label>
                </div>
                <div className="user-box">
                    <input type="tel" name="phone" required onChange={(e) => setPhone(e.target.value)} />
                    <label>Phone</label>
                </div>
                <div className="user-box">
                    <input type="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="text" name="bank" required onChange={(e) => setBank(e.target.value)} />
                    <label>Bank</label>
                </div>
                <div className="user-box">
                    <input type="number" name="cci_num" required onChange={(e) => setCci(e.target.value)} />
                    <label>CCI Number</label>
                </div>

                <center>
                    <button className="linkBtn" type="submit">Register</button>
                </center>
                
            </form>
        </div>
    )
}

export default NewClient