
import styles from './app.module.css';
import NavbarMenu from './components/nav/navbarmenu.js';
import Checkout from './components/checkout/checkout.js';
import Cart from './components/cart/cart.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <div className={styles.App}>
    <NavbarMenu/>
    <main>
      <section className={styles.mainLeft}><Checkout/></section>
      <section className={styles.mainRight}><Cart/></section>
    </main>
     <footer>
      <Footer/>
     </footer>
      
    </div>
  );
}

export default App;

