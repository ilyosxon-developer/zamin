import  HeaderImg from '../../../img/header.jpg'
import HeaderImg2 from '../../../img/header2.jpg'
import './header.css'

  const header = {
    title: "Zamin Ta’lim platformasi orqali kelajak kasbini o’rganing!",
    title2: "Zamin Education haqida qisqacha",
    p: "Biz sizga eng yuqori darajadagi kasblarni zamonaviy metodika asosida o’rgatamiz va o’z sohangiz mutaxassisi bo’lishingizga ko’maklashamiz",
    p2: "“Zamin Education” loyihasining ilk sinov-tajriba o‘quv jarayoni Muhammad Al-Xorazmiy nomidagi axborot-texnologiyalarini chuqurlashtirib o‘rgatishga ixtisoslashgan maktabda amalga oshirilmoqda.",
    button1: "Bizning kurslar",
    button2: "Video",
    button3: "Batafsil",
    img: HeaderImg, 
    img2: HeaderImg2, 
  };

  function HeaderIndex() {
    return (
        <>
        <div className="row mt-5 mb-5" >
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-md-1 order-2 ">
                <div>
                <h1 className='header-title' >{header.title}</h1>
                <p className='header-p'>{header.p}</p>
                <div className="row ps-2">
                    <button type="submit" className="col-5 btn header-btn text-light">
                        {header.button1}
                    </button>
                    <div className="col-5 d-flex justify-content-center">
                        <div>
                                <svg width="44"  height="4  4" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17" cy="17" r="17" fill="url(#paint0_linear_0_486)"/>
                            <path d="M23.2197 17.8712L14.8683 22.4862C14.1596 22.8774 13.25 22.4037 13.25 21.6149V12.3849C13.25 11.5974 14.1582 11.1224 14.8683 11.5149L23.2197 16.1299C23.381 16.2176 23.515 16.3443 23.6082 16.4972C23.7014 16.6501 23.7505 16.8238 23.7505 17.0006C23.7505 17.1774 23.7014 17.351 23.6082 17.5039C23.515 17.6568 23.381 17.7835 23.2197 17.8712Z" fill="white"/>
                            <defs>
                            <linearGradient id="paint0_linear_0_486" x1="9.70637e-07" y1="-3.95349" x2="30.4419" y2="47.8372" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFC700"/>
                            <stop offset="1" stop-color="#FF782D"/>
                            </linearGradient>
                            </defs>
                                </svg>
                        </div>
                        <div className='d-flex align-items-center p-2 pt-1 pb-0'> 
                            <h4 className='fs-4 fst-normal'>{header.button2}</h4>
                        </div>
                    </div>    
                </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-md-2 order-1 p-4 pt-0">
                <div>
                    <img className="img-fluid"  src={header.img} alt="error"/> 
                </div>        
            </div>                         
        </div> 
        <div className="row mt-5 mb-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div>
                    <img className="img-fluid"  src={header.img2} alt="error" />  
                </div>       
            </div>  
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div>
                <h1 className='header-title2'>{header.title2}</h1>
                <p className='header-p mt-4 mb-4'>{header.p2}</p>
                <div className="d-flex">
                    <button type="submit" className="btn header-btn w-50 text-light btn-lg">
                    {header.button3}
                    </button>
                </div>
                </div>
            </div> 
        </div>
        </> 
    )
 }

export default HeaderIndex ; 
