import React from "react";
import './slideshow.css';

import myjordan6 from './assets/myjordan6.jpg';
import NikeSBDunkUK from './assets/NikeSBDunkUK.jpg';
import Xajzpa from './assets/Xajzpa.jpg';
import TimberlandWaterproofBoots from './assets/TimberlandWaterproofBoots.jpg'

function Slideshow(){
    return(
        <div className="slideshow">
            <img src={myjordan6} alt="img1" />
            <img src={NikeSBDunkUK} alt="img2" />
            <img src={Xajzpa} alt="img3" />
            <img src={TimberlandWaterproofBoots} alt="img4" />
        </div>
    )
}
export default Slideshow;