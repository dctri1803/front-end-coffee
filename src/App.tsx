import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { routes } from './routes';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            return  <Route path={route.path} element={<Page />} />
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
