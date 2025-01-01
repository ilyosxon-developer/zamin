import ZaminTalim from './section/index.jsx'
import HeaderIndex from "./main-section/index.jsx";
import Courses from './kurslar/index.jsx'
import FotoGalarey from "./fotoGalarey/foto.jsx";



import '../index.css'
function  mainpage() {
   return(
      <>    
         <HeaderIndex/>     
            <ZaminTalim/>  
            <Courses/>
         <FotoGalarey/>
      </>
   )
}
export default mainpage;