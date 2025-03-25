import React from "react";
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import HttpsIcon from '@mui/icons-material/Https';
import { useNavigate} from "react-router-dom";



export default function Login() {
  const [password, setPassword] = React.useState("");
   const [error, setError] = React.useState(false);
  const customStyle = {
    color: "#BE3144 ",
    textAlign: "center",
    fontSize: "1rem",
    marginTop: "-20px",
    marginBottom: "0px",
    paddingLeft: "20px",
    fontFamily: "Poppins",
    fontWeight:"600",
  };
  const navigate = useNavigate();
     const [isAuthenticated, setAuthenticated] = React.useState(
      sessionStorage.getItem("isAuthenticated") === "true"
     );
  function handlePassword(event) {
    const secure = event.target.value;
    setError(false);
    setPassword(secure);
   
  }
  function handleClick(event) {
    event.preventDefault();
    let confirmpassword='1234';
    if(password===confirmpassword){
      sessionStorage.setItem("isAuthenticated", "true");
      setAuthenticated(true);
    }
    else{
      setError(true);
    }
    
  }
  React.useEffect(() => {
    if (isAuthenticated) {
       navigate("/dashboard");
    }
 }, [isAuthenticated, navigate]);

  return (
    <div className="">
      <div className="section-container">
        <form className="form-container">

          <div className="logo-section">
            <img className="logo" src="/assets/logo_green_bg.jpeg" alt="logo" />
            <p className="logotxt"> The Green Bowl </p>
          {/*   <img className="login-person" src="/assets/login-per.png" alt="logo" /> */}
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
            {error?<p style={customStyle}>password incorrect! Try again..</p>:" "}
            <button id="regbtnlog" onClick={handleClick}>
              Login
            </button>
          </div>
        </form>
        
      </div >
    </div >
  );
}
