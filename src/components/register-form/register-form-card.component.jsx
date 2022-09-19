import { useState, useEffect } from "react";
import "./register-form-card.styles.css";
import database from "../../firebase/firebase";
import { getFirestore, collection, query,doc, where, onSnapshot, setDoc } from "firebase/firestore";

const db = getFirestore()

const RegisterFormCard = (props) => {


  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("05");

  const submit = (e) => {
    e.preventDefault();
    const collectionRef = doc(db, 'users', phone);
    setDoc(collectionRef, {
        name: name,
        company: company,
        email: email,
        phone: phone
    }, {merge: true});
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
  };
  return (
    <div class="div-from">
      <form>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">
            שם מלא
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            שם החברה
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            מייל
          </label>
          <input
            type="email"
            class="form-control dir-ltr"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword2" class="form-label">
            טלפון
          </label>
          <input
            type="tel"
            class="form-control dir-ltr"
            id="exampleInputPassword1"
            maxLength="10"
            pattern="[0][5][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={submit}>
          שלח
        </button>
      </form>
      <label for="exampleInputPassword2" class="form-label">
        בלחיצה על שלח אני מבינ/ה שאני נכנס/ת לרשימת המתנה ואין שום התחייבות
        לרישום לאירוע
      </label>
    </div>
  );
};
export default RegisterFormCard;
