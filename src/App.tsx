import { Switch, Route } from "wouter";

import Home from "./Home";
import About from "./About";
import Academics from "./Academics";
import Admissions from "./Admissions";
import Complaints from "./Complaints";
import Contact from "./Contact";
import Footer from "./Footer";
import FoundersMessage from "./FoundersMessage";
import Hero from "./Hero";
import Navbar from "./Navbar";
import News from "./News";
import Testimonials from "./Testimonials";
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Fallback to 404 */}
    </Switch>
  );
}

function App() {
  return (
    <>
  <Router/>
</>
  );
}

export default App;
