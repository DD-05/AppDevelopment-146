import './App.css';
import HomePage from './component/HomePage';
import Login from './component/Login';
import SignUp from './component/Signup';
function App() {
  return (
    <div className="App">
      <Login />
      <SignUp/> 
    </div>
  );
}

export default App;
