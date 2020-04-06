import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ServicosPage from './components/servicos/ServicosPage';
import ContactPage from './components/contactos/ContactPage';
import PortfolioPage from './components/portfolio/PortfolioPage';
import GaleriaPage from './components/portfolio/GaleriaPage';
import Header from './common/Heafer';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="center-box scrolltopoleo">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/sobre-nos" component={AboutPage} />
            <Route exact path="/servicos" component={ServicosPage} />
            <Route exact path="/contacto" component={ContactPage} />
            <Route exact path="/portfolio" component={PortfolioPage} />
            <Route exact path="/galeria" component={GaleriaPage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
