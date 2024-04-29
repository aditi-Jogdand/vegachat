import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

const Service = lazy(() => import("./component/services"));
const Home = lazy(() => import("./component/home"));
const Pricing = lazy(() => import("./component/pricing"));

import "tailwindcss/tailwind.css";

import "./index.css";
import Navbar from "./component/root/nav";
import Footerr from "./component/root/footer";

const App = props => (
  <>
  <Navbar/>
    
    {props.children}
    <Footerr/>
  </>
);

render(() => (
  <Router root={App}>
    <Route path="/services" component={Service} />
    <Route path="/pricing" component={Pricing}/>
    <Route path="/" component={Home} />
    
  </Router>
),document.getElementById("root"));

