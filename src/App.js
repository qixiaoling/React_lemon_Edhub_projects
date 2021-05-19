import React from 'react';
import './App.css';
import Product from "./Product";
import citroenen from './assets/citroenen.jpeg';
import limoenen from './assets/limoenen.png';
import ijsblokjes from './assets/ijsblokjes.jpg'
import {ReactComponent as ShopingCart} from './assets/winkelmandje.svg'

function App() {
    const[messageValue, setMessageValue] = React.useState('');
    const[checkedTerms, toggleCheckedTerms] = React.useState(false);
    const[submitted, setSubmitted] = React.useState(false);


    function sendForm(e){

        console.log("I am the message");
        setSubmitted(true);
        console.log(submitted)
    }
  return (
      <>
          <nav>
              <ul>
                  <li><a href="/">Shop</a></li>
                  <li><a href="/">Ons verhaal</a></li>
                  <li><a href="/">Blog</a></li>
              </ul>
              <ShopingCart className="shopping-cart-icon"/>
          </nav>
          <header>
            <h1>Fruit perfection</h1>
              <button type="button" onClick={()=> console.log("Jij wilt shoppen!")}>Shop nu</button>
          </header>
          <main>
              <Product
                  image={citroenen}
                  alt="Citroenen"
                  title="Citroen"
                  description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
              />
              <Product
                  image={limoenen}
                  alt="Limoenen"
                  title="Limoenen"
                  description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
              />
              <Product
                  image={ijsblokjes}
                  alt="Ijsblokjes"
                  title="Ijsblokkjes"
                  description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
              />
          </main>
          <footer>
              <div className="form-container">
                  <h2>Contactformulier</h2>
                  <form>
                      <input
                        type="text"
                        placeholder="Type hier jouw bericht"
                        name="message"
                        className={ messageValue.length > 20 ? 'input-error' : ''}
                        value={messageValue}
                        onChange={(e)=>setMessageValue(e.target.value)}
                      />
                      {/*{messageValue.length > 20 && <p className="error-message">Dit bericht is te lang!</p>}*/}
                  </form>

                  <label htmlFor="terms-and-conditions">
                      <input
                        type="checkbox"
                        id="terms-and-conditions"
                        name="terms-and-conditions"
                        checked={checkedTerms}
                        onChange={()=> toggleCheckedTerms(!checkedTerms)}
                      />
                      Ik ga akkoord
                  </label>
                  <br/>
                  <button
                      type="submit"
                      disabled={!checkedTerms}
                      onClick={()=> sendForm}
                  >Verstuur</button>

              </div>
          </footer>

      </>

  );
}

export default App
