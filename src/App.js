import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPayPal from "./ReactPayPal";

function App() {
  const [checkout, setCheckout] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {(checkout === true) ? 
        <div className="payment-div">
          <ReactPayPal 
            total={500}
          />
        </div> 

      :
        <div>
          <h1>React-PayPal</h1>
          <button onClick={() => {setCheckout(true)}} className="checkout-button">Checkout</button>
        </div>
      }
    </div>
  );
}

export default App;
