import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from '../src/Assets/layout/footer';
import Header from '../src/Assets/layout/header';
import { Container } from '../src/Assets/Components/container';

function App() {
  return (
    <>
      <Header />
      <Container>
        <div className='App'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            Learn React
          </a>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;
