import React from 'react';
import './App.css';
import Classcompo from './Flexisaf internship/Class-components';
import Eventhandlers from './Flexisaf internship/Event-handlers';
import Functionalcompo from './Flexisaf internship/Functional-components';
import Jsyntax from './Flexisaf internship/JSX';
import Property from './Flexisaf internship/Props';
import States from './Flexisaf internship/State';

function App() {
  return (
     <>
     <main>
        <Classcompo />
        <Eventhandlers />
        <Functionalcompo />
        <Property fullname="Eustace Mbanefo"/>
        <Jsyntax />
        <States />
     </main>
     </>
  );
}

export default App;
