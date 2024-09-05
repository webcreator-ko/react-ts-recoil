import '@/App.css';

import React from 'react';
import AddTask from '@/components/AddTask';
import InputTask from '@/components/InputTask';

function App() {
  return (
    <div className="app">
      <InputTask />
      <AddTask />
    </div>
  );
}

export default App;
