import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Portfolio from './pages/Portfolio';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
