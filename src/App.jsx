import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import DefaultLayout from "./layouts/DefaultLayout";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
