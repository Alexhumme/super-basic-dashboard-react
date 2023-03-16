import Layout from './components/layout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/styles/App.scss';
import Home from './views/Home';
import Admin from './views/Admin';
import Instructores from './views/Admin/Instructores';

function App() {
  const auth = sessionStorage.getItem('Auth token')
  return (
    <BrowserRouter>
      <Layout auth={auth}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='Admin/'>
            <Route path='' element={<Admin />} />
            <Route path='Instructores' element={<Instructores />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
