import "./BottomBanner.styles.css"
import React from 'react';
import { useNavigate } from "react-router-dom";
const BottomBanner = (props) => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    }

    const handleFormClick = () => {
        navigate('/register');
    }

    const handleInfoClick = () => {
        navigate('/info');
    }
    return (
        <div className="BottomBanner">
            <div className="info-icon icon" onClick={handleInfoClick}></div>
            <div className="home-icon icon" onClick={handleHomeClick}></div>
            <div className="form-icon icon" onClick={handleFormClick}></div>
        </div>
        
    )
}
export default BottomBanner;