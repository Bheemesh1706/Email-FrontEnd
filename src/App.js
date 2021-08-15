import './App.css';
import { TemplateProvider } from './Context/TemplateContext';

import React from 'react';
import {CreateTemplate} from './CreateTemplate';

function App() {

 
  return (
    <TemplateProvider>
      <div>
        <CreateTemplate />
      </div>
    </TemplateProvider>
  );
}

export default App;
