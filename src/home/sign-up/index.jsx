import Navbar from "../../base/navbar";
import SignPage from "./signpage";

function  Signup() {
   return(
    <>
        <Navbar/>
        <div className="login-container">
            <div className="login-item w-100">
                <h1 className="text-center" >Ro’yxatdan o’tish</h1>
                <SignPage/>
            </div>
        </div>
    </>
   )
}
export default Signup;