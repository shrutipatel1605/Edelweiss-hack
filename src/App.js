import React from 'react';
import Navbar from './component/navbar/navbar';
import FilterOptions from './component/filter/filter';

import Table from './component/table/table';



const App = () => {
  return (
    <div>
      <Navbar />
       <FilterOptions/> 
       <Table/> 

       
    </div>
  );
};

export default App;
