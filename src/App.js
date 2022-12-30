import {BrowserRouter,Routes,Route} from 'react-router-dom';

import {Register} from './components/register';
import {Login} from './components/login';
import {Dashboard} from './components/dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Register" element={<Register />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
