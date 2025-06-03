import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import { books } from "./data";
import Books from './pages/Books';





function App() {
  return (
    <Router>

    <div className="App">
      <Nav/>
      <Route path="/" exact component={Home} />
      <Route path="/books" render={() => <Books books={books} />}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
