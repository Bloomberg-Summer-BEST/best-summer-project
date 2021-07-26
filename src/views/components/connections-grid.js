import React from "react";


const ConnectionsGrid = props => {
    return (
        <>

            <header id="home">
                <a href="#"><img src="assets/images/techlogo.png"
                    class="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity" /></a>
                <span class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onclick="w3_open()"><i
                    class="fa fa-bars"></i></span>
                <div class="w3-container">
                    <h1><b>CONNECTIONS</b></h1>
                    <div class="w3-section w3-bottombar w3-padding-16">
                        <span class="w3-margin-right">Category:</span>
                        <button class="w3-button w3-black">ALL</button>
                        <button class="w3-button w3-white"><i class="fa fa-diamond w3-margin-right"></i> Mentors </button>
                        <button class="w3-button w3-white w3-hide-small"><i class="fa fa-users"></i> Friends </button>
                        <button class="w3-button w3-white w3-hide-small"> <i class="fa fa-inbox"></i> Inbox </button>
                    </div>
                </div>
            </header>
            <div className="w3-row-padding">
                <div className="w3-container">
                    <ul className="w3-ul w3-card-4 connections-list">
                        <li className="w3-bar">
                            <img src="assets/images/avatar1.jpg" className="w3-bar-item w3-circle w3-hide-small"
                            />
                            <div className="w3-bar-item">
                                <span className="w3-large">Mike</span><br />
                                <span>Web Designer</span>
                            </div>
                        </li>
                        <li className="w3-bar">
                            <img src="assets/images/avatar2.png" className="w3-bar-item w3-circle w3-hide-small"
                            />
                            <div className="w3-bar-item">
                                <span className="w3-large">Jill</span><br />
                                <span>Support</span>
                            </div>
                        </li>
                        <li className="w3-bar">
                            <img src="assets/images/avatar3.png" className="w3-bar-item w3-circle w3-hide-small"
                            />
                            <div className="w3-bar-item">
                                <span className="w3-large">Jane</span><br />
                                <span>Accountant</span>
                            </div>
                        </li>
                        <li className="w3-bar">
                            <img src="assets/images/avatar1.jpg" className="w3-bar-item w3-circle w3-hide-small"
                            />
                            <div className="w3-bar-item">
                                <span className="w3-large">Mike</span><br />
                                <span>Web Designer</span>
                            </div>
                        </li>
                        <li className="w3-bar">
                            <img src="assets/images/avatar2.png" className="w3-bar-item w3-circle w3-hide-small"
                            />
                            <div className="w3-bar-item">
                                <span className="w3-large">Jill</span><br />
                                <span>Support</span>
                            </div>
                        </li>
                        <li className="w3-bar">
                            <img src="assets/images/avatar3.png" className="w3-bar-item w3-circle w3-hide-small"
                            />
                            <div className="w3-bar-item">
                                <span className="w3-large">Jane</span><br />
                                <span>Accountant</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w3-center w3-padding-32">
                <div className="w3-bar">
                    <a href="#" className="w3-bar-item w3-button w3-hover-black">«</a>
                    <a href="#" className="w3-bar-item w3-black w3-button">1</a>
                    <a href="#" className="w3-bar-item w3-button w3-hover-black">2</a>
                    <a href="#" className="w3-bar-item w3-button w3-hover-black">3</a>
                    <a href="#" className="w3-bar-item w3-button w3-hover-black">4</a>
                    <a href="#" className="w3-bar-item w3-button w3-hover-black">»</a>
                </div>
            </div>
        </>
    )
}

export default ConnectionsGrid;