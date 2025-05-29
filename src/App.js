import React from 'react';
import './App.css';
import Classcompo from './Flexisaf internship/Class-components';
import Eventhandlers from './Flexisaf internship/Event-handlers';
import Functionalcompo from './Flexisaf internship/Functional-components';
import Jsyntax from './Flexisaf internship/JSX';
import Property from './Flexisaf internship/Props';
import State from './Flexisaf internship/State';

function App() {
  return (
     <>
     <main>
        <Classcompo />
        <Eventhandlers />
        <Functionalcompo />
        <Jsyntax />
        <Property fullname="Eustace Mbanefo"/>
        <State />
     </main>
     </>
  );
}

export default App;