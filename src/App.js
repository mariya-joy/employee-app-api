import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import SearchEmployee from './components/SearchEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import ViewAllEmployee from './components/ViewAllEmployee';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddEmployee/>}/>
        <Route path="/search" element={<SearchEmployee/>}/>
        <Route path="/delete" element={<DeleteEmployee/>}/>
        <Route path="/view" element={<ViewAllEmployee/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
