import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { Layout, ScrollManager } from "@/components/Layout";
import { LightboxProvider } from "@/components/Lightbox";
import { useSeo } from "@/lib/hooks";
import Home from "@/pages/Home";
import Benefits from "@/pages/Benefits";
import HowItWorks from "@/pages/HowItWorks";
import Services from "@/pages/Services";
import Videos from "@/pages/Videos";
import Faq from "@/pages/Faq";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

function Seo() {
  const { pathname } = useLocation();
  useSeo(pathname);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <LightboxProvider>
        <ScrollManager />
        <Seo />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/services" element={<Services />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </LightboxProvider>
    </HashRouter>
  );
}
