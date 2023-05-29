import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Home from "./pages/Home";
import Header from "./heads/Header";
import Footer from "./heads/Footer";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="blogs" element={<Blogs />} />*/}
          {/*<Route path="contact" element={<Contact />} />*/}
          {/*<Route path="*" element={<NoPage />} />*/}
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
