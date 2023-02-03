import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [masuk, setMasuk] = useState(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    console.log(email)
    console.log(password)
    if (email === "pulu@index.co" && password === "12345") {
      // setMasuk(true)
      navigate('/dashboard')
      console.log("anda berhasil login")
      alert("anda berhasil login")

    } else if (email === "pulu@index.co" || password === "12345") {
      console.log("salah password atau email")
      alert("salah password atau email")
    } else if (email === "" || password === "") {
      console.log("belum isi email atau password")
      alert("belum isi email atau password")
    }
    else {
      console.log("email dan password salah")
      alert("email dan password salah")
    }
  }

  //gimana caranya ketika nilai variabel 'masuk' berubah, kita panggil lagi functionnya yang mau kita panggil
  //jawaban : pakai useEffect ====> dependency array
  // useEffect(() => {
  //   console.log(`value masuk berubah jadi ${masuk}`)
  // }, [masuk])

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-box">
          <div className="forms">
            <div className="form-control">
              <label>email</label><span><sup>*</sup></span>
              <input type={"email"} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-control">
              <label>Password</label><span><sup>*</sup></span>
              <input type={"password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-button">
              <button onClick={() => handleLogin()}>Login</button>
            </div>
            {/* <div className="form-button">
              <button onClick={() => setMasuk(masuk)}>Check</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
