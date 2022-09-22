import "./Info.styles.css"
import React from 'react';

const Info = (props) => {

    return (
        <div className="Info">
            <h5 className="title-info">{props.OpeningTxt}</h5>
            <h4 className="info-header">למי?</h4>
            <div className="info-body">{props.forWhomTxt}</div>
            <h4 className="info-header">מה בתוכנית?</h4>
            <div className="info-body">{props.whereTxt}</div>
            <h4 className="info-header">מתי?</h4>
            <div className="info-body">{props.whenTxt}</div>
            <h4 className="info-header">איפה?</h4>
            <div className="info-body">{props.plans}</div>
        </div>
        
    )
}
export default Info;