function NewClient() {
    return (
        <div class="login-box">
            <h1>Register a new Client</h1>

            <form>
                <div class="user-box">
                    <input type="text" name="dni" required=""/>
                        <label>DNI</label>
                </div>
                <div class="user-box">
                    <input type="text" name="" required=""/>
                        <label>Name</label>
                </div>
                <div class="user-box">
                    <input type="text" name="" required=""/>
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