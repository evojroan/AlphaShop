
import styles from './app.module.css';
import NavbarMenu from './components/nav/navbarmenu.jsx';
import Checkout from './components/checkout/checkout.jsx';
import Cart from './components/cart/cart.jsx';
import Footer from './components/footer/footer.jsx';

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

