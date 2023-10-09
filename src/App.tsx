import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';
import Subscription from './pages/Subscription';
import SubscriptionGroups from './pages/SubscriptionGroups';
import CreateSubscription from './pages/CreateSubscription';
import DetailedSubscription from './pages/DetailedSubscription';
import Payment from './pages/Payment';
import UserAccount from './pages/UserAccount';
import JoniedSubscriptions from './pages/UserAccount/JoinedSubscriptions';
import SharedSubscriptions from './pages/UserAccount/SharedSubscriptions';
import Chat from './pages/UserAccount/Chat';
import Wallet from './pages/UserAccount/Wallet';
import IdentityAndVerfication from './pages/UserAccount/IdentityAndVerification';
import PaymentCards from './pages/UserAccount/PaymentCards';
import ConnectedBankAccount from './pages/UserAccount/ConnectedBankAccount';
import ChangePassword from './pages/UserAccount/ChangePassword';
import SubscriptionSuccess from './pages/SubscriptionSuccess';
import LoginDetails from './pages/LoginDetails';

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
          <Route path={`/youtube`} Component = {DetailedSubscription}/>
          <Route path={`/payment`} Component = {Payment}/>
          <Route path={`/my-account`} Component = {UserAccount}>
            <Route path={`shared-subscriptions`} Component={SharedSubscriptions}/>
            <Route path={`joined-subscriptions`} Component={JoniedSubscriptions}/>
            <Route path={`chat`} Component={Chat}/>
            <Route path={`wallet`} Component={Wallet}/>
            <Route path={`identity-and-verification`} Component={IdentityAndVerfication}/>
            <Route path={`payment-cards`} Component={PaymentCards}/>
            <Route path={`connected-bank-account`} Component={ConnectedBankAccount}/>
            <Route path={`change-password`} Component={ChangePassword}/>
          </Route>
          <Route path={`/subscription-success`} Component={SubscriptionSuccess}/>

          {/* Dummy route for testing */}
          <Route path={`/login-details`} Component={LoginDetails}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
