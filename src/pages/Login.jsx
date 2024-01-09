function Login() {
    return (
        <div class="login-box">
            <h1>Login</h1>

            <form>
                <div class="user-box">
                    <input type="email" name="" required="" />
                    <label>Email</label>
                </div>
                <div class="user-box">
                    <input type="number" name="" required="" />
                    <label>DNI</label>
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

export default Login