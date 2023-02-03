import {useState} from "react"

function handleLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(email)
    console.log(password)
    if (email === "pulu@index.co" && password === "12345") {
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
export default handleLogin