import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ContactScreen from './screens/ContactScreen';
import CodeScreen from './screens/CodeScreen';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <>
        <Header />
        <main className='py-3'>
          <Container>
            <Switch>
              <Route path='/' component={HomeScreen} exact />
              <Route path='/product/:id' component={ProductScreen} />
              <Route path='/contact' component={ContactScreen} />
              <Route path='/code' component={CodeScreen} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
