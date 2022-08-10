import "./App.css";
import "./utilities/resets.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import {
  AboutUsPageComponent,
  BlogPageComponent,
  ContactPageComponent,
  ServicesPageComponent,
  HomePageComponent,
} from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePageComponent />} />
        <Route path="about" element={<AboutUsPageComponent />} />
        <Route path="services" element={<ServicesPageComponent />} />
        <Route path="blog" element={<BlogPageComponent />} />
        <Route path="contact" element={<ContactPageComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
