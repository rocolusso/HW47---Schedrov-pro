import React from "react";

import Posts from "./Posts";
import Directories from "./Directories";
import data2 from "../assets/data/data2.json";
import data1 from "../assets/data/data1.json";


const App = () => {
  return(
  <>
  <Posts data={data1} />
  <Directories data={data2}/>
  </>
  )
};

export default App;
