import { useState, useEffect } from "react";
import "./register-form-card.styles.css";
import database from "../../firebase/firebase";
import { getFirestore, collection, query,doc, where, onSnapshot, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const db = getFirestore()

const RegisterFormCard = (props) => {

      const navigate = useNavigate();
  

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("05");
  const [id, setId] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [role, setRole] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const collectionRef = doc(db, 'users', phone);
    setDoc(collectionRef, {
        name: name,
        company: company,
        email: email,
        phone: phone,
        id: id,
        role: role,
        companyType: companyType
    }, {merge: true});
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setId('');
    setCompanyType("");
    setRole("");
    navigate('/');
  };
  return (
    <div className="div-form">
    <div className="form-text">ההרשמה מיועדת לאנשים העוסקים בפיתוח הדרכה באזרחות ובצבא.</div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            שם מלא
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            ת.ז. (לצורך כניסה לבסיס)
          </label>
          <input
            type="phone"
            className="form-control dir-ltr"
            value={id}
            maxLength="9"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            מייל 
          </label>
          <input
            type="email"
            className="form-control dir-ltr"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            טלפון
          </label>
          <input
            type="tel"
            className="form-control dir-ltr"
            id="exampleInputPassword1"
            maxLength="10"
            pattern="[0][5][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            ארגון
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            תפקיד בארגון 
          </label>
          <input
            type="text"
            className="form-control dir-rtl"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            סוג ארגון (כוחות הבטחון, תעשייה, צה״ל, ממשלתי, מוסדות חינוך, מוסדות אקדמייה וכדומה).
          </label>
          <input
            type="text"
            className="form-control dir-rtl"
            value={companyType}
            onChange={(e) => setCompanyType(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={submit}>
          שלח
        </button>
      </form>
      <label htmlFor="exampleInputPassword2" className="form-label">
        בלחיצה על שלח אני מבינ/ה שאני נכנס/ת לרשימת המתנה ואין שום התחייבות
        לרישום לאירוע.
      </label>
    </div>
  );
};
export default RegisterFormCard;
