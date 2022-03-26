import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx';
import Nav from './components/Nav.js'
import Dogs from './pages/Dogs'

function App() {
  return (
      <div className='bg-[#f8eddb]'>
        <Nav />
        <section className='h-screen'>
          <div className='flex m-auto justify-center bg-[#fdfbf6] h-5/6 w-5/6 rounded-3xl drop-shadow-2xl'> 
            <Routes>
              <Route  path="/home" element={<Homepage />}  />
              <Route  path="/dogs" element={<Dogs/>} />
            </Routes>
          </div>
        </section>
      </div>

  );
}

export default App;
