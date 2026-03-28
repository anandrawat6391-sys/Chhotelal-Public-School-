import { Switch, Route } from "wouter";
import Home from "../Home";
import About from "../About";
import Academics from "../Academics";
import Admissions from "../Admissions";
import Complaints from "../Complaints";
import Contact from "../Contact";
import Footer from "../Footer";
import FoundersMessage from "../FoundersMessage";
import Hero from "../Hero";
import Navbar from "../Navbar";
import News from "../News";
import Testimonials from "../Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/academics" component={Academics} />
        <Route path="/admissions" component={Admissions} />
        <Route path="/complaints" component={Complaints} />
        <Route path="/contact" component={Contact} />
        <Route path="/founders-message" component={FoundersMessage} />
        <Route path="/news" component={News} />
        <Route path="/testimonials" component={Testimonials} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
