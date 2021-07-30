
import React, { useState } from "react";

const SideBar = (props) => {

    const [currState, setCurrState] = useState(null);
    const linkClass = "w3-bar-item w3-button w3-padding";

    console.log("props", props.allprops.location.pathname);
    const w3_close = () => {
        return;
    }

    return (
        <nav className="w3-sidebar w3-collapse w3-black w3-animate-left" id="mySidebar">
            <br />
            <div className="w3-container w3-animate-left">
                <a href="#" className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
                    title="close menu">
                    <i className="fa fa-remove"></i>
                </a>
                <img src="assets/images/techlogo.png" className="w3-round" />
                <h3><b>My Account</b></h3>
            </div>

            <div className="w3-bar-block">
                <a href="/#/" className={"/home" === props.allprops.location.pathname || "/" === props.allprops.location.pathname ? linkClass + " w3-text-teal" : linkClass}><i
                    className="fa fa-th-large fa-fw w3-margin-right"></i>HOME</a>
                <a href="/#/community" className={"/community" === props.allprops.location.pathname ? linkClass + " w3-text-teal" : linkClass}><i
                    className="fa fa-users fa-fw w3-margin-right"></i>COMMUNITY</a>
                <a href="/#/connections" className={"/connections" === props.allprops.location.pathname ? linkClass + " w3-text-teal" : linkClass}><i
                    className="fa fa-envelope fa-fw w3-margin-right"></i>CONNECTIONS</a>
            </div>
            <div className="w3-panel w3-large social-icons">
                <a href="#"><i className="fa fa-facebook-official w3-hover-opacity"></i></a>
                <a href="#"><i className="fa fa-snapchat w3-hover-opacity"></i></a>
                <a href="#"><i className="fa fa-pinterest-p w3-hover-opacity"></i></a>
                <a href="#"><i className="fa fa-twitter w3-hover-opacity"></i></a>
                <a href="#"><i className="fa fa-linkedin w3-hover-opacity"></i></a>
            </div>
            <br /><br /><br />
        </nav>
    );
}

export default SideBar;