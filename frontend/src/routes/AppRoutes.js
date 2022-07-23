import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import App from '../App';
import Projects from '../pages/Projects';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='dashboard' element={<Dashboard />}>
            <Route index element={<Projects />} />
            <Route path='projects' element={<Projects />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
