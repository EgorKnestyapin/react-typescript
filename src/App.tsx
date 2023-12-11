import Layout from "components/Layout";
import About from "pages/About";
import Apple from "pages/Clients/modules/Apple";
import Clients from "pages/Clients";
import Facebook from "pages/Clients/modules/Facebook";
import Home from "pages/Home";
import Sega from "pages/Clients/modules/Sega";
import Users from "pages/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/facebook" element={<Facebook />} />
          <Route path="/clients/apple" element={<Apple />} />
          <Route path="/clients/sega" element={<Sega />} />
          <Route path="*" element="Page not found 404" />
        </Routes>
        {/* Lessons */}
        {/* <Lesson20 /> */}
        {/* <Lesson21 /> */}
        {/* <Lesson22 /> */}
        {/* <Lesson24 /> */}
        {/* <Lesson25 /> */}
        {/* Homeworks */}
        {/* <Homework20 /> */}
        {/* <Homework21 /> */}
        {/* <Homework22 /> */}
        {/* <Homework23 /> */}
        {/* <Homework24 /> */}
        {/* <Homework25 /> */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
