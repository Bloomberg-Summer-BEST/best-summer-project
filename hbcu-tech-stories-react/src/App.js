import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

// Default App Pages
const DefaultLayout = React.lazy(() =>
    import("./views/containers/DefaultLayout/DefaultLayout")
);

const loading = () => (
    <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

class App extends Component {
    renderTextHTML = (content) => {
        return (
            <div
                className="render-display"
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>
        );
    };
    render() {
        return (
            <HashRouter>
                <React.Suspense fallback={loading()}>
                    <Switch>
                        <Route
                            path="/"
                            name="Home"
                            render={(props) => (
                                <DefaultLayout
                                    renderTextHTML={this.renderTextHTML}
                                    loading={loading}
                                    {...props}
                                />
                            )}
                        />
                    </Switch>
                </React.Suspense>
            </HashRouter>
        );
    }
}

export default App;
