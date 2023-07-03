import React from 'react';
import Navbar from './components/navbar/navbar';
import FilterOptions from './components/filter/Filter';
import Tab from './components/table/table'; 



const App = () => {
  return (
    <div>
      <Navbar />
      {/* <FilterOptions/> */}
      <Tab/>

       
    </div>
  );
};

export default App;
