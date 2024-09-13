import React from 'react';
import HomePage from "../app/(components)/Home/HomePage";  
 import HomePage2 from "../app/(components)/Home/HomePage2"; 
 import HomePage3 from "../app/(components)/Home/HomePage3"; 
import HomePage4 from "../app/(components)/Home/HomePage4"; 
import HomePage5 from "../app/(components)/Home/HomePage5";
import Navbar from "../app/(components)/Navbar"; 
import Footer from "../app/(components)/Footer"; 
import Blog from "../app/(components)/Home/Blog";

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
      <div> 
         <HomePage3/>
        </div> 
        <div> 
          <HomePage4/>
        </div>  
         <div> 
          <HomePage5/>
        </div>  
        <div> 
          <Blog/>
        </div>
      <div className='mt-12'>
        <Footer />
      </div> 
    </>
  );
}

export default Page;
