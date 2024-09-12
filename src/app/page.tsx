import React from 'react';
import HomePage from "../app/(components)/Home/HomePage";  
import HomePage2 from "../app/(components)/Home/HomePage2";
import Navbar from "../app/(components)/Navbar"; 
import Footer from "../app/(components)/Footer";

function Page() {
  return (
    <>
      <div>
        <Navbar />
      </div> 
      <div>
        <HomePage/>
      </div> 
      <div> 
         <HomePage2/>
      </div>
      <div className='mt-12'>
        <Footer />
      </div> 
    </>
  );
}

export default Page;
