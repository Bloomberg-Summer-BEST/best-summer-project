import React, { Suspense, Fragment } from "react";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import { appRoutes } from "../../../_routes";

const DefaultHeader = React.lazy(() => import("./DefaultHeader"));
const SideBar = React.lazy(() => import("../../components/sidebar"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));

const Home = (props) => {
    return (
        <>
            <SideBar renderTextHTML={props.renderTextHTML} allprops={props} />
            <div className="w3-main">
                <Suspense fallback={props.loading()}>
                    <Switch>
                        {appRoutes.map((route, idx) => {
                            return route.component ? (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={(props) => (
                                        <route.component
                                            {...props}
                                            renderTextHTML={props.renderTextHTML}
                                        />
                                    )}
                                />
                            ) : null;
                        })}
                    </Switch>
                </Suspense>

                <DefaultFooter renderTextHTML={props.renderTextHTML} />
            </div>
        </>
    );
};

export default Home;
