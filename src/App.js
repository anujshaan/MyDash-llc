import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/home";
import PageRender from './PageRender';
import Register from './pages/register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Register/>} />
          <Route path='/:page' element={<PageRender/>} />
          <Route path='/:page/:slug' element={<PageRender/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
