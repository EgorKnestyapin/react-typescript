import Layout from "components/Layout";
import About from "pages/About";
import Home from "pages/Home";
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
