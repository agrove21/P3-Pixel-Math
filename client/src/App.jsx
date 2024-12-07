import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Library from "./pages/Library";
import AuthPage from "./pages/AuthPage";
import Challenge from "./pages/Challenge";
import Custom from "./pages/Custom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="library" element={<Library />} />
            <Route path="challenge" element={<Challenge />} />
            <Route path="custom" element={<Custom />} />
          </Route>
          <Route path="auth" element={<AuthPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
