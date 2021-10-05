import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';



function App() {
  return (
    <div className="App">


      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/contact-us">
            <ContactUs></ContactUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>


    </div >
  );
}

export default App;
