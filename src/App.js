import Layout from './components/layout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/styles/App.scss';
import 'react-toastify/dist/ReactToastify.css';
import Home from './views/Home';
import Admin from './views/Admin';
import Instructores from './views/Admin/Administration/Instructores';
import Ambientes from './views/Admin/Administration/Ambientes';
import Fichas from './views/Admin/Administration/Fichas';
import MiCuenta from './views/Admin/Tools/MiCuenta';
import ErrorPage from './error-page';

function App() {
  const auth = sessionStorage.getItem('Auth token')
  return (
    <BrowserRouter>
      <Layout auth={auth}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='Admin/'>
            <Route path='' element={<Admin />} />
            <Route path='Administracion/'>
              <Route path='' element={<Instructores />} />
              <Route path='Instructores' element={<Instructores />} />
              <Route path='Ambientes' element={<Ambientes />} />
              <Route path='Fichas' element={<Fichas />} />
            </Route>
            <Route path='tools/'>
              <Route path='' element={<MiCuenta />} />
              <Route path='miCuenta' element={<MiCuenta />} />
            </Route>
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
