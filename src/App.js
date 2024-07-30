import './App.css';
import { AuthProvider } from './components/AuthContext';
import Routing from './components/Routing';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
   <div>
    <AuthProvider>
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
      </AuthProvider>
   </div>
  );
}

export default App;