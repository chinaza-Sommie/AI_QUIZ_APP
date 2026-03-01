import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SelectStack from './pages/selectStack';
import Questions from './pages/questions';
import Layout from './pages/layout';
import Results from './pages/results';
import { useState, useEffect } from 'react';
// import '';

function App() {
  const [selected, setSelected] = useState("");
  const [answers, setAnswers] = useState({});

  return (
    // <div className="min-h-screen bg-grid">
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/select" element={<SelectStack setSelected={setSelected} selected={selected} />} />
          <Route path="/questions/:selected" element={<Questions answers={answers} setAnswers={setAnswers} />} />
          <Route path="/results" element={<Results answers={answers} setAnswers={setAnswers}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
