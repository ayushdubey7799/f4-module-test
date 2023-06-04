import Home from "./Home";
import Item from "./Item";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "../App.css";


// const About = () => <h1>About</h1>;
const NotFound = () => <h1>404 Not Found</h1>;

const App = () => {
  return (
    <>
    <p>Social Media App</p>
  <Provider store = {store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
            
           
         

      
    </BrowserRouter>
    </Provider>
    </>
  );
};

export default App;
