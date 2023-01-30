import React, { useState } from "react";
import './Language.scss';
// import uzbFlag from "./../../../images/User/uzbFlag.png"
// import NavVector from './../../../images/User/nav2_vector.png';
// import rusFlag from "./../../../images/User/rusFlag.png"
// import engFlag from "./../../../images/User/engFlag.png"
// import Polygon from "./../../../images/User/Polygon.png"
import uzbFlag from '../../assets/uzb-flag.jpg'
import rusFlag from '../../assets/rus-flag.svg'
import engFlag from '../../assets/ang-flag.jpg'
import Bottoms from '../../assets/vniz.png'



function Language (img, text) {

    const [isOpen, setIsOpen] = useState(false);
    const [flag, setFlag] = useState(uzbFlag);
    const [language, setLanguage] = useState('uzb');



    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const uzb = () => {
        setFlag(uzbFlag)
        setLanguage('uzb')
        handleClick()
    }
    const rus = () => {
        setFlag(rusFlag)
        setLanguage('rus')
        handleClick()
    }
    const eng = () => {
        setFlag(engFlag)
        setLanguage('eng')
        handleClick()
    }
    return (
        <>
        <div className="languageContener">

            <div className="flex gap" onClick={handleClick}>
                <div className="relativ">
                    <img className="changableFlag" src={flag} alt="uz" />
                    {/* <span>{language}</span> */}
                </div>
                <div className="bottomContainer">
                    <img className="bottomImg" src={Bottoms} alt="" />
                </div>
            </div>

            {isOpen ?
                <div className="dropdown_wrapper" >
                    {/* <div className="polyAbsolutes"><img src={Polygon} alt="" /></div> */}
                    <div className="hover langBox" onClick={uzb}>
                        <div className="ddImg"><img id="uzb"  className="flag" src={uzbFlag} alt="" /></div>
                        <div className="langText">O'zbekcha</div>
                    </div>
                    <div className="hover langBox" onClick={rus}>
                        <div className="ddImg"><img id="rus" className="flag" src={rusFlag} alt="" /></div>
                        <div className="centerText Russian">Русский</div>
                    </div>
                    <div className="hover langBox" onClick={eng}>
                        <div className="ddImg"><img id="eng" className="flag" src={engFlag} alt="" /></div>
                        <div className="centerText">English</div>
                    </div>
                </div> : null}
                    </div>
        </>
    )

}

export default Language;