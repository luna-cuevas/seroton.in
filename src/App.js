import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Nav from './components/Nav'
import Dogs from './pages/Dogs'

function App() {
  return (
    <Router>
      <div className='bg-[#f8eddb]'>
        <Nav />
        <section className='h-screen'>
          <div className='flex m-auto justify-center bg-[#fdfbf6] h-5/6 w-5/6 rounded-3xl drop-shadow-2xl'> 
          <Routes>
            <Route exact path="/home" element={<Homepage/>}/>
            <Route exact path="/dogs" element={<Dogs/>}/>
          </Routes>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
