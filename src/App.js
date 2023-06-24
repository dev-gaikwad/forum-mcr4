import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PostDetails from './pages/PostDetails/PostDetails';
import Titlebar from './components/TitleBar/Titlebar';
import { ForumContextProvider } from './context/ForumContext';

const App = () => {
  return (
    <>
      <Router>
        <ForumContextProvider>
          <Titlebar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/details/:id' element={<PostDetails />} />
          </Routes>
        </ForumContextProvider>
      </Router>
    </>
  );
};

export default App;
