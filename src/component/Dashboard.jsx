import React from "react"

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="header">
                <div className="logo">
                    <h1>Yummie~</h1>
                </div>
                <div className="navbar">
                    <ul className="navbar">
                        <li>home</li>
                        <li>menu</li>
                        <li>cashier</li>
                        <li>logout</li>
                    </ul>
                </div>
            </div>
            <div className="page-pict">
                <div className="pict-header">
                    <img src="https://assets.grab.com/wp-content/uploads/sites/9/2020/10/01102507/Header-Image_Hema_MEX-Support.jpg" alt="img-header" />
                </div>

            </div>
        </div>
    )
}
export default Dashboard