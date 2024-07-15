import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader";
import MouseCursor from "./components/MouseCursor";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Hireing from "./pages/Hireing";
import Blogdetails from "./pages/Blogdetails";
import Blog from "./pages/Blog";
import Get_quote from "./pages/Get_quote";
import ServiceAndro from "./pages/ServiceAndro";
import ServiceDM from "./pages/ServiceDM";
import ServiceIt from "./pages/ServiceIt";
import ServiceSMK from "./pages/ServiceSMK";
import ServiceGd from "./pages/ServiceGd";
import ServiceG from "./pages/ServiceG";
import ServiceIm from "./pages/ServiceIm";
import ServiceMata from "./pages/ServiceMata";
import Serviceseo from "./pages/Serviceseo";
import ServiceWeb from "./pages/ServiceWeb";
import Wordpress from "./pages/Wordpress";
import Shopify from "./pages/Shopify";
import Commerce from "./pages/Commerce";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Refundpolicy from "./components/Refundpolicy";
import Termsandconditions from "./components/Termsandconditions";
import Team_Details from "./pages/Team_Details";
import Email from "./pages/Email";
import Whats_up from "./pages/Whats_up";
import CRM from "./pages/CRM";
import Billing from "./pages/Billing";
import Game from "./pages/Game";
import MLM from "./pages/MLM";
import "./App.css";
import "./tailwind.css";
import "./assets/css/main.css";

function App() {
  const [loading, setLoading] = useState(true); // Preloader state

  useEffect(() => {
    // Simulate an asynchronous loading operation
    const loadData = async () => {
      try {
        // Fetch data or perform any initial setup here
        // For example: await fetchInitialData();

        // Once loading is complete, hide the preloader
        setLoading(false);
      } catch (error) {
        // Handle any errors that might occur during loading
        console.error("Error loading data:", error);
        setLoading(false); // Still hide preloader even if there's an error
      }
    };

    loadData(); // Start loading

    // Cleanup function (not necessary in this case, but good practice)
    return () => {
      // Cancel any asynchronous tasks if component is unmounted
    };
  }, []); // The empty array ensures this effect runs only once after mount

  return (
    <>
      <Router>
        {loading && <Preloader />} {/* Only show Preloader if loading is true */}
        <div className={`main-content ${loading ? "loading" : "loaded"}`}>
          <Header />
          <div>
            {/* Your application content */}
            <MouseCursor />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-details" element={<Blogdetails />} />
            <Route path="/hire" element={<Hireing />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/project" element={<Project />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/error" element={<Error />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-quote" element={<Get_quote />} />
            <Route path="/android-development" element={<ServiceAndro />} />
            <Route path="/team-details" element={<Team_Details />} />
            <Route path="/digital-marketing" element={<ServiceDM />} />
            <Route path="/graphic-designing" element={<ServiceGd />} />
            <Route path="/google" element={<ServiceG />} />
            <Route path="/influencer-marketing" element={<ServiceIm />} />
            <Route path="/it-service" element={<ServiceIt />} />
            <Route path="/meta" element={<ServiceMata />} />
            <Route path="/seo" element={<Serviceseo />} />
            <Route path="/social-media" element={<ServiceSMK />} />
            <Route path="/web-development" element={<ServiceWeb />} />
            <Route path="/wordpress" element={<Wordpress />} />
            <Route path="/shopify" element={<Shopify />} />
            <Route path="/e-commerce" element={<Commerce />} />
            <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
            <Route path="/Refund-Policy" element={<Refundpolicy />} />
            <Route path="/terms-conditionas" element={<Termsandconditions />} />
            <Route path="/email" element={<Email />} />
            <Route path="/whatsapp" element={<Whats_up />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/gaming" element={<Game />} />
            <Route path="/mlm" element={<MLM />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;