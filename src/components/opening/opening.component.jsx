import "./opening.styles.css"
import CountdownTimer from "../countdown/CountdownTimer.component";
import { useNavigate } from "react-router-dom";
const Opening = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/register');
    }

    return (
        <div className="opening">
            <h1 className="main-header">כנס חדשנות בלמידה</h1>
            <div className="opening-txt">כנס חדשני ויחיד מסוגו בנושא חדשנות בלמידה. הכנס יציג למידה חוצת חילות ובה״דים, חשיפה לידע ויכולות בתחום טכנולוגית למידה ושיטות לימוד מתקדמות. משתתפי הכנס יכללו מפקדים בקריית ההדרכה, מטה הדרכה באגפים ובחילות, אורחים מצה״ל, האקמיה והתעשייה.</div>
            <div className="opening-txt2">הכנס יתקיים בתאריך 22.11.2022 בקריית ההדרכה.</div>
            <button className="register-btn" onClick={handleClick}>להרשמה</button>
            <CountdownTimer targetDate={props.targetDate} />
        </div>
        
    )
}
export default Opening;