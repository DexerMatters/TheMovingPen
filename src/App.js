import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import ProfilePage from "./pages/Profile";
import LearningPageTemplate from "./layouts/LearningPageTemplate";
import { getBackground } from "./img";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />

          {/*The routers for learn/pages */}
          <Route
            path="/learn/english-roundhand"
            element={
              <LearningPageTemplate
                source="learn/ER"
                backgroundImage_={getBackground(0)}
              />
            }
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
