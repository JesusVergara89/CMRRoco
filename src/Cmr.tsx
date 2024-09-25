import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function Cmr() {
  return (
    <div className="Cmr">
      <Routes>

        <Route path='/'
          element={
            <Home />
          }
        />

      </Routes>

    </div>
  );
}

export default Cmr;