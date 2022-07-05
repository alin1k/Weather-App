import React, { useEffect, useState } from "react";
import Heading from "./components/Heading.js";
import Widgets from "./components/widgets/Widgets.js"
import Form from "./components/Form.js"
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [cities, setCities] = useState([]);
  
  useEffect(() => {
    const cities = JSON.parse(localStorage.getItem('cities'));
    console.log(cities);
    if (cities) {
     setCities(cities);
    }
  }, []);

  useEffect(()=>{
    console.log("added to local storage")
    localStorage.setItem('cities', JSON.stringify(cities));
  }, [cities]);


  return (
    <div>
      <ToastContainer transition={Slide} />
      {cities.length === 0 ? <Heading /> : <></>}

      <Widgets cities={cities} setCities={setCities} />
      <Form setCities={setCities} />
    </div>
  );
}

export default App;
