import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import { Dashboard, Login, Signup, Search, Popular } from "./pages";
import { Upcoming } from "./pages/upcoming";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="search" element={<Search />} />
          <Route path="popular" element={<Popular />} />
          <Route path="upcoming" element={<Upcoming />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
