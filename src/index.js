import React from "react";
import { render } from "react-dom";
import Resturents from "./pages/Resturents";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Switch
} from 'react-router-dom'; import Resturentdetails from "./pages/ResturenDetail/resturentDetails";


const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Resturents}/>
                <Route exact path="/:id" component={Resturentdetails} />
            </Switch>
        </Router>
    )
}

render(<React.StrictMode>
    <Routing />
</React.StrictMode>, document.getElementById('root'));