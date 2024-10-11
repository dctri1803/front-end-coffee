import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { routes } from './routes';
import { DefaultComponent } from './components/DefaultComponent/DefaultComponent';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowFooterAndHeader ? DefaultComponent : Fragment;

            // Return the JSX
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
