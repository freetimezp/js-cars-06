import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import './App.css';

import Banner from './pages/Banner';
import Header from './components/Header';

export const AppContext = React.createContext();

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:3000/api/vehiclesData.json')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err.message));
  };

  useEffect(() => {
    fetchData();
  }, []);
  //console.log(data);

  return (
    <>
      <AppContext.Provider value={{ data, setData }}>
        <Header />

        <Routes>
          <Route exact path='/' element={<Banner />} />
        </Routes>

      </AppContext.Provider>
    </>
  );
}

export default App;
