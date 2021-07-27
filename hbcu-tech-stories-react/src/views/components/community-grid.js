import React, { useState } from "react";
import { TabContent, TabPane } from "reactstrap";


const CommunityGrid = props => {
    const [activeTab, setActiveTab] = useState("all-pane")
    return (
        <>

            <header id="home">
                <a href="#"><img src="assets/images/techlogo.png"
                    className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity" /></a>
                <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"><i
                    className="fa fa-bars"></i></span>
                <div className="w3-container">
                    <h1><b>COMMUNITY</b></h1>
                    <div className="w3-section w3-bottombar w3-padding-16">
                        <span className="w3-margin-right">Category:</span>
                        <button className={"all-pane" === activeTab ? "w3-button w3-black" : "w3-button w3-white w3-hide-small"} onClick={() => setActiveTab("all-pane")}>ALL</button>
                        <button className={"groups-pane" === activeTab ? "w3-button w3-black" : "w3-button w3-white w3-hide-small"} onClick={() => setActiveTab("groups-pane")}><i className="fa fa-diamond"></i> My Groups </button>
                        <button className={"friends-pane" === activeTab ? "w3-button w3-black" : "w3-button w3-white w3-hide-small"} onClick={() => setActiveTab("friends-pane")}> <i className="fa fa-users"></i> Bookmarks </button>
                    </div>
                </div>
            </header>
            <TabContent activeTab={activeTab} className="w3-row-padding">
                <TabPane tabId="all-pane">
                    <div className="list-grid">
                        <div className="w3-third w3-container card">
                            <div className="card-inner">
                                <img src="assets/images/image1.jpg" alt="The Hornets" className="w3-hover-opacity image" />
                                <div className="w3-container w3-white">
                                    <p className="name"><b>The Hornets</b></p>
                                    <p className="title"><b>Alabama State University Students and Alumni</b></p>
                                    <p>With your Alabama State University Degree, the possibilities are endless. Want to here from
                                        current and former ASU students - where they are and where they are going, join our group!</p>
                                    <p><button className="button">Join Group</button></p>
                                </div>
                            </div>
                        </div>

                        <div className="w3-third w3-container card">
                            <div className="card-inner">
                                <img src="assets/images/image10.jpg" alt="The Hornets" className="w3-hover-opacity image" />
                                <div className="w3-container w3-white">
                                    <p className="name"><b>The Fisk Buldogs</b></p>
                                    <p className="title"><b>Fisk University Students and Alumni</b></p>
                                    <p>With your Fisk University Degree, the possibilities are endless. Want to here from current and former Fisk University students - where they are and where they are going, join our group!</p>
                                    <p><button className="button">Join Group</button></p>
                                </div>
                            </div>
                        </div>

                        <div className="w3-third w3-container card">
                            <div className="card-inner">
                                <img src="assets/images/image11.jpg" alt="The Hornets" className="w3-hover-opacity image" />
                                <div className="w3-container w3-white">
                                    <p className="name"><b>The Fisk Buldogs</b></p>
                                    <p className="title"><b>Fisk University Students and Alumni</b></p>
                                    <p>With your Howard University Degree, the possibilities are endless. Want to here from current and former Howard students - where they are and where they are going, join our group!</p>
                                    <p><button className="button">Join Group</button></p>
                                </div>
                            </div>
                        </div>

                        <div className="w3-third w3-container card">
                            <div className="card-inner">
                                <img src="assets/images/image12.jpg" alt="The Hornets" className="w3-hover-opacity image" />
                                <div className="w3-container w3-white">
                                    <p className="name"><b>The Hornets</b></p>
                                    <p className="title"><b>Alabama State University Students and Alumni</b></p>
                                    <p>With your Alabama State University Degree, the possibilities are endless. Want to here from current and former ASU students - where they are and where they are going, join our group!</p>
                                    <p><button className="button">Join Group</button></p>
                                </div>
                            </div>
                        </div>

                        <div className="w3-third w3-container card">
                            <div className="card-inner">
                                <img src="assets/images/image4.jpg" alt="The Hornets" className="w3-hover-opacity image" />
                                <div className="w3-container w3-white">
                                    <p className="name"><b>Fisk Bulldogs</b></p>
                                    <p className="title"><b>Fisk University Students and Alumni</b></p>
                                    <p>With your Fisk University Degree, the possibilities are endless. Want to here from current and former Fisk University students - where they are and where they are going, join our group!</p>
                                    <p><button className="button">Join Group</button></p>
                                </div>
                            </div>
                        </div>

                        <div className="w3-third w3-container card">
                            <div className="card-inner">
                                <img src="assets/images/image7.jpg" alt="The Hornets" className="w3-hover-opacity image" />
                                <div className="w3-container w3-white">
                                    <p className="name"><b>The Howard Bison</b></p>
                                    <p className="title"><b>Howard University Students and Alumni</b></p>
                                    <p>With your Howard University Degree, the possibilities are endless. Want to here from current and former Howard students - where they are and where they are going, join our group!</p>
                                    <p><button className="button">Join Group</button></p>
                                </div>
                            </div>
                        </div>

                        <div className="w3-third w3-container card">
                            <div className="card-inner">
                                <img src="assets/images/image8.jpg" alt="The Hornets" className="w3-hover-opacity image" />
                                <div className="w3-container w3-white">
                                    <p className="name"><b>Software Engineering</b></p>
                                    <p className="title"><b>All about Software Engineering</b></p>
                                    <p>Want to here from your peers in Software Engineering, what to network and connect with real world Software Engineer. We welcome you onboard!</p>
                                    <p><button className="button">Join Group</button></p>
                                </div>
                            </div>
                        </div>

                        <div className="w3-third w3-container card">
                            <div className="card-inner">
                                <img src="assets/images/image5.jpg" alt="The Hornets" className="w3-hover-opacity image" />
                                <div className="w3-container w3-white">
                                    <p className="name"><b>Web Development</b></p>
                                    <p className="title"><b>All about Web Development</b></p>
                                    <p>Collaborate, Ideate, and network with your peers in web Development.</p>
                                    <p><button className="button">Join Group</button></p>
                                </div>
                            </div>
                        </div>

                        <div className="w3-third w3-container card">
                            <div className="card-inner">
                                <img src="assets/images/image9.jpg" alt="The Hornets" className="w3-hover-opacity image" />
                                <div className="w3-container w3-white">
                                    <p className="name"><b>Premed Students</b></p>
                                    <p className="title"><b>Journey into medical school.</b></p>
                                    <p>What can you do with your premed degree - here from your fellow friends and peers on how they overcame great challenges to be where thet are now!</p>
                                    <p><button className="button">Join Group</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPane>
                <TabPane tabId="mentors-pane">

                </TabPane>
                <TabPane tabId="friends-pane">

                </TabPane>
                <TabPane tabId="inbox">

                </TabPane>
            </TabContent>

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

export default CommunityGrid;