import React from "react";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import Blog from "../pages/Blog/BlogPage";
import Contact from "../pages/Contact/ContactPage";
import Home from "../pages/Home/HomePage";
import Services from "../pages/Services/ServicesPage";
import SingleServicePage from "../pages/SingleService/SingleServicePage";

const AboutUsPageComponent = () => <AboutUsPage />;
const BlogPageComponent = () => <Blog />;
const ContactPageComponent = () => <Contact />;
const HomePageComponent = () => <Home />;
const ServicesPageComponent = () => <Services />;
const SingleServicePageComponent = () => <SingleServicePage />;

export {
  AboutUsPageComponent,
  BlogPageComponent,
  ContactPageComponent,
  HomePageComponent,
  ServicesPageComponent,
  SingleServicePageComponent,
};
