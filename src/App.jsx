import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./frontPage";
import SignIn from "./signin";
import SignUp from "./signup";
import ProductsPage from "./ProductsPage";

export default function App() {
  return (

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>

  );
}
