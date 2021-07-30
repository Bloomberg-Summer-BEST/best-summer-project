import React from "react";


const Home = React.lazy(() => import("./views/pages/Home"));
const Community = React.lazy(() => import("./views/pages/Community"));
const Connections = React.lazy(() => import("./views/pages/Connections"));
const Stories = React.lazy(() => import("./views/pages/Stories"));

export const appRoutes = [
    { path: "/", exact: true, name: "Home", component: Home },
    {
        path: "/community",
        exact: true,
        name: "Community",
        component: Community,
    },
    {
        path: "/connections",
        exact: true,
        name: "Connections",
        component: Connections,
    },
    {
        path: "/stories",
        exact: true,
        name: "Stories",
        component: Stories,
    },
];
