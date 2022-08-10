import "./App.css";
import "./utilities/resets.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";

import {
  AboutUsPageComponent,
  BlogPageComponent,
  ContactPageComponent,
  ServicesPageComponent,
  HomePageComponent,
} from "./layout/Layout";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePageComponent />} />
        <Route path="about" element={<AboutUsPageComponent />} />
        <Route path="services" element={<ServicesPageComponent />} />
        <Route path="blog" element={<BlogPageComponent />} />
        <Route path="contact" element={<ContactPageComponent />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
