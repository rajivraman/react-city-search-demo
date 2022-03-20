import './App.scss';
import Search from './components/Search';
import Results from './components/Results';
import React, {useState} from 'react';

export const ResultsContext = React.createContext();

function App() {
  const [results, setResults] = useState([]);
  return (
    <ResultsContext.Provider value={{ results, setResults }}>
      <Search />
      <Results />
    </ResultsContext.Provider>
  );
}

export default App;
