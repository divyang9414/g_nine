import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home.jsx';
// import Header from './components/pr_1 header_footer/Header.jsx';
// import Footer from './components/pr_1 header_footer/Footer.jsx';
import H_and_F_together from './components/pr_1 header_footer/H_and_F_together.jsx';
import Clock_counter from './pages/pr_2 counter/Clock_counter.jsx';
import Stop_watch from './pages/pr_2 counter/Stop_watch.jsx';
import Basic_Form_Printing from './pages/pr_3 Basic_Form_Printing/Basic_Form_Printing.jsx';
import FormValidation from './pages/pr_3 FormValidation/FormValidation.jsx';
import Review from './pages/pr_4 review system/Review.jsx';
import Crud from './pages/pr_6 CRUD Operation/Crud.jsx';
import Sorting from './pages/pr_8 Sorting_and_More/Sorting.tsx';

function App() {
  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route path="/" element={""} />
          <Route path="/H_and_F_together" element={<H_and_F_together />} />
          <Route path="/Clock_counter" element={<Clock_counter />} />
          <Route path="/Stop_watch" element={<Stop_watch />} />
          <Route path="/Basic_Form_Printing" element={<Basic_Form_Printing />} />
          <Route path="/FormValidation" element={<FormValidation />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Crud" element={<Crud />} />
          <Route path="/Sorting" element={<Sorting />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
