import "./email.styles.css"
const Email = (props) => {

    return (
        <div className="info">
            <div className="main-header">יש לכם שאלה? בקשה?</div>
            <div className="main-header">מעוניינים ליצור עימנו קשר?</div>
            <a className="info-txt" href="mailto:madortill@gmail.com">madortill@gmail.com</a>
        </div>
        
    )
}
export default Email;