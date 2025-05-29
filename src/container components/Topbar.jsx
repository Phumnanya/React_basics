import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Topbar() {
    return(
        <>
            <nav>
                <div className="navboxes">
                    <FontAwesomeIcon icon={faBars} />
                    <img src="Ziara.png" alt="logo" />
                </div>
                <div className="navboxes"></div>
            </nav>
        </>
    )
}