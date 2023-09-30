import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';
import Subscriptions from './pages/Subscriptions';
function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path={`/`} Component={Home}/>
          <Route path={`/register`} Component={Register}/>
          <Route path={`/login`} Component={Login}/>
          <Route path={`/subscriptions`} Component={Subscriptions}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
