
import styles from './app.module.css';
import NavbarMenu from './components/nav/navbarmenu.jsx';
import Checkout from './components/checkout/checkout.jsx';
import Cart from './components/cart/cart.jsx';
import Footer from './components/footer/footer.jsx';
import { useContext } from 'react';
import { cartContext } from './context/shopContext.jsx';

function App({cartData}) {
  return (
    <div className={styles.App}>
    <cartContext.Provider value={cartData}>
    <NavbarMenu/>
    <main>
      <section className={styles.mainLeft}><Checkout/></section>
      <section className={styles.mainRight}><Cart/></section>
    </main>
    <footer>
      <Footer/>
    </footer>
    </cartContext.Provider>  
    </div>
  );
}

export default App;

