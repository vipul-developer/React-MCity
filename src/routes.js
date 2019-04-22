import React from 'react';
import Layout from './Components/Layout/Layout';
import { Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import SignIn from './Components/Signin';
import Dashboard from "./Components/Admin/Dashboard";
import PrivateRoutes from "./Components/authRoutes/privateRoute";
import PublicRoutes from "./Components/authRoutes/publicRoute";
const Routes = (props) => {
    // console.log(props);
    return(
        <Layout>
            <Switch>
                <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard}/>
                <PublicRoutes {...props } restricted={true} path="/sign_in" exact component={SignIn}/>
                <PublicRoutes {...props } restricted={false} path="/" exact component={Home}/>

                {/* <Route exact component={Dashboard} exac path="/dashboard"/>
                <Route exact component={SignIn} path="/sign_in"/>
                <Route exact component={Home} path="/"/> */}
            </Switch>
        </Layout>
    )
}

export default Routes;
