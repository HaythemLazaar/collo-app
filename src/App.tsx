import Hello from '~/components/Hello';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './layouts/auth-layout/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Hello />} />
        <Route path={`/auth`} element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
