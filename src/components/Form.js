import React from "react";
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import HttpsIcon from '@mui/icons-material/Https';


export default function Form() {
  const [password, setPassword] = React.useState("");
  /*  const [error, setError] = React.useState(false); */
  /* const customStyle = {
    color: "red",
    textAlign: "center",
    fontSize: "0.7rem",
    marginTop: "-10px",
    marginBottom: "0px",
  }; */
  function handlePassword(event) {
    const secure = event.target.value;
    setPassword(secure);
  }
  function handleClick(event) {
    event.preventDefault();
    let confirmpassword='1234';
    if(password===confirmpassword){
      alert("okie you can go now");
    }
  }

  return (
    <div className="">
      <div className="section-container">
        <form className="form-container">

          <div className="logo-section">
            <img className="logo" src="/assets/logo_green_bg.jpeg" alt="logo" />
            <p className="logotxt">Green Bowl</p>
          </div>
          <div className='login-section'>
            <h1 className="greetings" >Welcome Back!</h1>
            <div className="admin-section">
              <PersonSharpIcon style={{ fontSize: "2.3rem", fill: "#16423C" }} />
              <input
                value={"Admin"}
                readOnly
              />
            </div>
            <div className="pass-section">
              <HttpsIcon style={{ fontSize: "2.3rem", fill: "#16423C" }} />
              <input
                onChange={handlePassword}
                type="password"
                placeholder="Password"
                name="password"
              />
              {console.log(password)}
            </div>

            <button id="regbtnlog" onClick={handleClick}>
              Login
            </button>
          </div>
        </form>
      </div >
    </div >
  );
}
