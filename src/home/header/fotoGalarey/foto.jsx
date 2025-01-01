import './foto.css'
import Img1 from '../../../img/fotoGalarey/1.png'
import Img2 from '../../../img/fotoGalarey/2.png'
import Img3 from '../../../img/fotoGalarey/3.png'
import Img4 from '../../../img/fotoGalarey/4.png'
import Img5 from '../../../img/fotoGalarey/Rectangle 2047.png'
import Img6 from '../../../img/fotoGalarey/Rectangle 2049.png'
import Najot from '../../../img/fotoGalarey/najot.jpg'
import Digital from '../../../img/fotoGalarey/digital.jpg'
import Mitc from '../../../img/fotoGalarey/mitc.jpg'
import Sde from '../../../img/fotoGalarey/Sde.jpg'
import Pdp from '../../../img/fotoGalarey/pdp.jpg'
const foto = {
    title:"Foto Galereya",
    subtitle:"Bizning kundalik faoliyatlarimiz haqida ushbu media bilan tanishing"
}

function FotoGalarey() {
    return (
        <div className='foto'>
            <h1 className='foto-title'>{foto.title}</h1>
            <p className='foto-subtitle'>{foto.subtitle}</p>
            <div className='row'>
                <div className='col-4'>
                    <img src={Img1} alt='error' className='w-100 mb-3' height="35%"/>
                    <img src={Img2} alt='error' className='w-100 mt-2' height="55%"/>
                </div>
                <div className='col-4'>
                    <img src={Img3} alt='error' className='w-100 mb-3'  height="55%" />
                    <img src={Img4} alt='error' className='w-100 mt-2' height="35%" />
                </div>
                <div className='col-4'>
                    <img src={Img5} alt='error' className='w-100 mb-3'height="45%" />
                    <img src={Img6} alt='error' className='w-100 mt-2' height="45%" />
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                   <h1 className='foto-end-h1'>Biz bilan hamkor bo’lgan <br /> tashkilotlar bilan <br /> tanishing!</h1>                    
                </div>
                
                <div className='col-6'>
                    <p className='foto-end-p'>Biz mamlakatimizdagi eng nufuzli tashkilotlar bilan birgalikda hamkorlik qilamiz va ularga ishonamiz. Siz ham bizning safimizga qo’shilishingiz mumkin. Imkoniyatlardan foydalaning</p>
                </div>
            </div>
            <div className='foto-end text-center'>
                <div className='foto-div'>
                    <img src={Pdp} className='img-fluid' alt='img error' />
                </div>
                <div className='foto-div'>
                    <img src={Najot} className='img-fluid' alt='img error' />
                </div>
                <div className='foto-div'>
                    <img src={Sde} className='img-fluid' alt='img error' />
                </div>
                <div className='foto-div'>
                    <img src={Digital} className='img-fluid' alt='img error' />
                </div>
                <div className='foto-div'>
                    <img src={Mitc} className='img-fluid' alt='img error' />
                </div>
            </div>
        </div> 
    )
 }

export default FotoGalarey ; 
