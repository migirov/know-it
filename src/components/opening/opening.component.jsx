import "./opening.styles.css"
import Slider from "../slider/slider.component";
import CountdownTimer from "../countdown/CountdownTimer.component";
import { useNavigate } from "react-router-dom";
import AddToCalendar from "../add-to-calendar/add-to-calendar.component";
const Opening = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/info');
    }
    return (
        <div className="opening">
            <h1 className="main-header">כנס חדשנות בלמידה</h1>
            <div className="opening-txt">כנס חדשני ויחיד מסוגו בנושא חדשנות בלמידה. הכנס מיועד למנהלי הדרכה בכירים - מפקדים בהכשרות (רס״ן ומעלה) ולאנשי פיתוח הדרכה בצה״ל ומחוצלו.</div>
            <div className="opening-txt2">הכנס יתקיים בתאריך 22.11.2022 <br></br>בקריית ההדרכה.</div>
            <button className="register-btn" onClick={handleClick}>לפרטים נוספים</button>
            <AddToCalendar/>
            <CountdownTimer targetDate={props.targetDate} />
            <Slider />
        </div>
        
    )
}
export default Opening;