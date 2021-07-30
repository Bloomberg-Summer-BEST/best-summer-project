
import React, { useState, useEffect } from "react";
import ConnectionsGrid from "../components/connections-grid";

const Connections = (props) => {
    const [currState, setCurrState] = useState(null);

    return (
        <ConnectionsGrid />
    );
};

export default Connections;