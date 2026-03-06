import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Contacts from './sections/Contacts';
import Quote from './components/Quote';

function App() {
  return (
    <Layout>
      <Hero />
      <Quote />
      <Projects />
      <About />
      <Contacts />
    </Layout>
  );
}

export default App;
