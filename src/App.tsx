import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Dashboard,
  Login,
  Signup,
  Search,
  Popular,
  Upcoming,
  Details,
} from "./pages";
import React, { useEffect } from "react";
import { useMe } from "./hooks";

function App() {
  const { me } = useMe();

  useEffect(() => {
    console.log(me);
  }, [me]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="search" element={<Search />} />
          <Route path="populares" element={<Popular />} />
          <Route path="details" element={<Details />} />
          <Route path="upcoming" element={<Upcoming />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
