import './App.css';
import { UserProvider } from './UserContext';
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import LoginPage from './LoginPage';

function App() {
  return (
    <UserProvider>
      <Header/>
      <Routes>
        <Route exact={true} path="/" element={<HomePage />} />
        <Route exact={true} path='/product/:id' element={<ProductPage/>} />
        <Route exact={true} path='/login' element={<LoginPage/>} />
      </Routes>
      
    </UserProvider>
  );
}

export default App;
