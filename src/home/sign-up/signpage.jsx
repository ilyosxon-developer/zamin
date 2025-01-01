import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from "react-router-dom";
import Login from '../login';
import "../index.css"; 

 export default function SignPage() {
  return (
      <div className="form-login2">
        <div className="row w-100">
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                placeholder="Ismingiz"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Familiyangiz"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Telefon"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Login"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Parol"
                className="form-control"
              />
            </div>
          </div>
        </div>
            <div className="text-center w-100" >
            <div className="btn-group btn2" >
            <button type="submit" className="btn text-light">
                Ro’yxatdan o’tish
            </button>
            </div>
            <div className="alternative-login">
              <p>yoki</p>
              <div className="social-buttons">
                <div>
                <button className="btn border">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_0_2382)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.89606 16.0001C6.89606 14.9609 7.06856 13.9644 7.37681 13.0299L1.98431 8.91211C0.933309 11.0459 0.341309 13.4504 0.341309 16.0001C0.341309 18.5479 0.932809 20.9506 1.98206 23.0831L7.37156 18.9574C7.06631 18.0271 6.89606 17.0344 6.89606 16.0001Z" fill="#FBBC05"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3641 6.5455C18.6219 6.5455 20.6611 7.3455 22.2634 8.6545L26.9244 4C24.0841 1.52725 20.4426 0 16.3641 0C10.0321 0 4.59013 3.621 1.98438 8.912L7.37663 13.0297C8.61912 9.25825 12.1609 6.5455 16.3641 6.5455Z" fill="#EA4335"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3641 25.4545C12.1611 25.4545 8.61937 22.7417 7.37687 18.9702L1.98438 23.0872C4.59013 28.379 10.0321 32 16.3641 32C20.2721 32 24.0034 30.6122 26.8036 28.0122L21.6851 24.0552C20.2409 24.965 18.4221 25.4545 16.3641 25.4545Z" fill="#34A853"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.6585 15.9998C31.6585 15.0543 31.5128 14.0361 31.2943 13.0908H16.3643V19.2726H24.9583C24.5285 21.3803 23.359 23.0006 21.6853 24.0551L26.8038 28.0121C29.7453 25.2821 31.6585 21.2151 31.6585 15.9998Z" fill="#4285F4"/>
    </g>
    <defs>
    <clipPath id="clip0_0_2382">
    <rect width="40" height="40" fill="white"/>
    </clipPath>
    </defs>
                </svg>
                </button>
                </div>
                <div>
                <button className="btn border">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.5002 28.0004C34.0002 27.8337 30.3335 26.1671 30.3335 21.5004C30.3335 17.8337 32.8335 16.0004 33.8335 15.3337C34.0002 15.1671 34.1668 15.0004 34.1668 14.8337C34.1668 14.6671 34.1668 14.3337 34.0002 14.1671C31.6668 10.6671 28.0002 10.3337 27.0002 10.3337C25.1668 10.1671 23.3335 10.8337 22.0002 11.3337C21.3335 11.6671 20.6668 11.8337 20.1668 11.8337C19.6668 11.8337 19.0002 11.5004 18.3335 11.3337C17.1668 10.8337 15.8335 10.3337 14.3335 10.3337C11.1668 10.3337 8.00018 12.3337 6.33351 15.1671C3.33351 21.0004 5.33351 29.3337 8.66684 34.3337C10.0002 36.3337 12.0002 39.1671 14.8335 39.1671H15.0002C16.1668 39.1671 17.0002 38.8337 17.8335 38.3337C18.6668 38.0004 19.5002 37.6671 20.6668 37.6671C21.8335 37.6671 22.6668 38.0004 23.3335 38.3337C24.1668 38.6671 25.0002 39.0004 26.3335 39.0004C29.1668 39.0004 31.0002 36.3337 32.3335 34.1671C33.8335 32.0004 34.6668 29.6671 34.8335 28.8337C35.1668 28.6671 35.0002 28.1671 34.5002 28.0004Z" fill="black"/>
    <path d="M24.8337 5.50016C26.0003 4.16683 26.667 2.50016 26.667 0.833496C25.167 1.16683 23.5003 2.16683 22.5003 3.3335C21.667 4.3335 20.667 6.16683 20.667 8.00016C22.167 7.8335 23.8337 6.8335 24.8337 5.50016Z" fill="black"/>
    </svg>

                </button>
                </div>
              <div>
              <button className="btn border">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_0_2374)">
    <path d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9861 5.851 30.6053 13.5 31.8056V20.625H9.4375V16H13.5V12.475C13.5 8.465 15.8887 6.25 19.5434 6.25C21.294 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1074C19.1199 10.5 18.5 11.7333 18.5 12.9986V16H22.9375L22.2281 20.625H18.5V31.8056C26.1491 30.6053 32 23.9861 32 16Z" fill="#1877F2"/>
    <path d="M22.2281 20.625L22.9375 16H18.5V12.9986C18.5 11.7333 19.1198 10.5 21.1074 10.5H23.125V6.5625C23.125 6.5625 21.2939 6.25 19.5434 6.25C15.8887 6.25 13.5 8.465 13.5 12.475V16H9.4375V20.625H13.5V31.8056C14.3146 31.9334 15.1495 32 16 32C16.8505 32 17.6854 31.9334 18.5 31.8056V20.625H22.2281Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_0_2374">
    <rect width="40" height="40" fill="white"/>
    </clipPath>
    </defs>
    </svg>

                </button>
              </div>
              </div>
            </div>
            </div>
          <p className="sign-end-p">Agarda siz tizimdan ro’yxatdan o’tgan bo’lsangiz kirish tugmasini bosing.
          <Nav.Link as={Link} className="text-primary d-inline"  to="/login">Kirish</Nav.Link></p>
      </div>   
  );
};


