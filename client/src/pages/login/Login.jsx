import React from "react";
import "./Login.scss";
const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello world.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus, nesciunt exercitationem at officiis
                        deserunt temporibus tempora fuga dignissimos labore
                        vero.
                    </p>
                    <span>Don't have account?</span>
                    <button>Register</button>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form action="">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
