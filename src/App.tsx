import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';
import Subscription from './pages/Subscription';
import SubscriptionGroups from './pages/SubscriptionGroups';
import CreateSubscription from './pages/CreateSubscription';
function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path={`/`} Component={Home}/>
          <Route path={`/register`} Component={Register}/>
          <Route path={`/login`} Component={Login}/>
          <Route path={`/subscriptions`} Component={Subscription}/>
          <Route path={`/brand/:brandName`} Component={SubscriptionGroups}/>
          <Route path={`/create-subscription`} Component={CreateSubscription}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
