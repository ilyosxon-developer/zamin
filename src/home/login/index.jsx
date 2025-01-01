import Navbar from "../../base/navbar";
import LoginPage from "./loginpage";
import Signup from "../sign-up";
import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from "react-router-dom";
import '../index.css'
function  Login() {
   return(
    <>
        <Navbar/>
        <div className="login-container">
            <div className="welcome-section">
                <h1>Zamin Ta’lim platformasiga xush kelibsiz</h1>
                    <p>
                        Agarda siz ro'yxatdan o'tmagan bo'lsangiz, ro'yxatdan o'tishingizni
                        taklif qilamiz.<Nav.Link as={Link} className="text-primary d-inline"  to="/sign-up">Ro'yxatdan o'tish</Nav.Link>
                    </p>
            </div>
        <LoginPage/>
        </div>
    </>
   )
}
export default Login;