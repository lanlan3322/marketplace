import React, { useState, useEffect } from 'react';
import { getBlockchain } from './ethereum.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Store from './components/store/Store';
import Message from './components/message/Message';
import ProfileView from './components/profile/Profile';
import Login from './components/login/login';

function App() {
  const [paymentProcessor, setPaymentProcessor] = useState(undefined); 
  const [ubi, setUbi] = useState(undefined); 
  const [signerAddress, setSignerAddress] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { paymentProcessor, ubi, signerAddress } = await getBlockchain();
      setPaymentProcessor(paymentProcessor);
      setUbi(ubi);
      setSignerAddress(signerAddress)
    }
    init();
  }, []);

  if(typeof window.ethereum === 'undefined') {
    return (
      <Message />
    );
  }

  return (
    <div className='container'>
      <div className='col-sm-12'>
        <h1>UBI Commerce de Proof Of Humanity</h1>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Store paymentProcessor={paymentProcessor} ubi={ubi} signerAddress={signerAddress} />
            </Route>
          </Switch>
        </Router>
        {/* <ProfileView /> */}
      </div>
    </div>
  );
}

export default App;
