import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Components/Header';
import Headlines from './Components/Headlines';
import Footer from './Components/Footer';
import ArticleSummery from './Components/ArticleSummery';
import Modal from './Components/utils/Modal';


function App() {

  const keyAPI = 'https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=d94ecca9-2deb-4b7d-a4a3-18d7ed99de2e'

  const [newsData, setNewsData] = useState([]);
  const [getError, setGetError] = useState({ message: ``, count: 0 });

  const getNewsData = async () => {
    try {
      const res = await axios.get(keyAPI);
      console.log(res.data.response.results);
      return res.data.response.results.length ? res.data.response.results : new Error(`There is no News today`);
    }
    catch (e) {
      setGetError({ message: `News data not available from the server: ${e.message}`, count: 0 });
      return [];
    }
  }

  useEffect(() => {

    const getData = async () => {
      setNewsData(await getNewsData());
    }
    setTimeout(() => getData(), 1000);

  }, []);

  return (
    <Router>
      <div className='App'>
        <div className='container-fluid'>
          <>
            {getError.count === 0 && <Modal handleClose={() => setGetError({ ...getError, count: getError.count + 1 })} message={getError.message} />}
            <div>
              <Header />
              <div>
                <Routes>
                  <Route path="/" element={<Headlines newsData={newsData} />} />
                  <Route path="/:id" element={<ArticleSummery newsData={newsData} />} />
                  <Route path="*" element={<Headlines newsData={newsData} />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </>
        </div>
      </div >
    </Router >
  );
}

export default App;