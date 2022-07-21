import logo from './logo.svg';
import './App.css';
import Photo from './Component/profile/ProfilePhoto'
import Name from './Component/profile/FullName'
import Address from './Component/profile/Address'
function App() {
  return (
    <div className="App">
      <div   > <Photo/>  </div>
      <div   > <Name/>  </div>
      <div   > <Address />  </div>
      
    </div>
  );
}

export default App;
