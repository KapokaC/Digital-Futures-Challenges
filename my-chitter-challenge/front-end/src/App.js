import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios';

import Home from './components/home/home';
import Header from './components/home/header.jsx';
import Footer from './components/home/footer.jsx'
import Register from './components/user/register';
import Login from './components/user/login';
import AddPeeps from './components/peeps/addPeeps';




function App() {

  const [peepData, setPeepData] = useState([]);
  const [getError, setGetError] = useState({ message: ``, count: 0 });
  const [user, setUser] = useState({});


  const getPeepData = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/`);
      setPeepData(res.data);
      return res.data ? res.data : new Error(`No peep's today`);
    }
    catch (e) {
      setGetError({ message: `Chitter data not available from the server: ${e.message}`, count: 0 });
      return [];
    }
  }

  useEffect(() => {
    getPeepData();
  }, []);


  return (
    <Router>
      <div className='container-fluid'>
        <Header setUser={setUser} user={user} />
        <Routes>
          <Route path="/" index element={<Home peepData={peepData} getError={getError} />} />
          <Route path='/addPeep' element={user && user._id ? <AddPeeps setPeepData={setPeepData} getPeepData={getPeepData} user={user} /> : <Login setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

