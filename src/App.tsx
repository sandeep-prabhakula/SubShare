import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';
import { Component } from 'react';
import Subscription from './pages/Subscription';
import Subscriptions from './pages/Subscriptions';
import DetailedSubscription from './pages/DetailedSubscription';
import Payment from './pages/Payment';
function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path={`/`} Component={Home}/>
          <Route path={`/register`} Component={Register}/>
          <Route path={`/login`} Component={Login}/>
          <Route path={`/subscription`} Component={Subscription}/>
          <Route path={`/subscriptions`} Component={Subscriptions}/>
          <Route path={`/youtube`} Component = {DetailedSubscription}/>
          <Route path={`/payment`} Component = {Payment}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
