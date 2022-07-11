import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Single from './Pages/Single/Single';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Single />} />
      </Routes>
    </>
  )
}

export default App