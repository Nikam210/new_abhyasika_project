import React from 'react';
import HomePage from "../app/(components)/Home/HomePage"; 
import Navbar from "../app/(components)/Navbar"; 
import Footer from "../app/(components)/Footer";

function Page() {
  return (
    <>
      <div className="my-10">
        <Navbar />
      </div> 
      <div className='my-40'>
        <HomePage/>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Page;
