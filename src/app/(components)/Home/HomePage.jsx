// import React from 'react' ; 
// import Feature from './(components)/Feature';
// import Blog from './(components)/Blog'; 
// import Pricing from './(components)/Pricing';
// import Services from './(components)/Services';

// const Home = () => {
//   return (
//     <div>
//        <Feature/>
//        <Blog/>
//        <Pricing/>
//        <Services/>
//     </div>
//   )
// }

// export default Home 
import React from 'react';

function HomePage() {
  return (
    <div className="mt-12">
      {/* Heading Section */}
      <div className='text-center mt-12 py-6'>
        <p className="text-lg md:text-2xl font-bold">
          Now, manage your library or study <br className="hidden md:block" /> room easily with{' '}
          <span className="text-blue-500">Abhyasika</span>
        </p>
      </div>

      {/* Subheading Section */}
      <div className='text-center mt-4'>
        <p className="text-sm md:text-lg">
          Comprehensive management solutions for study rooms.
        </p>
      </div>

      {/* Call-to-Action Button */}
      <div className="flex items-center justify-center mt-10">
        <div className="text-white bg-blue-500 px-6 py-3 rounded-full cursor-pointer hover:bg-blue-600 transition text-sm md:text-base">
          Start Free Trial Now
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="mt-20 px-4 md:px-60 flex flex-col md:flex-row justify-center gap-8">
        {/* Member Management */}
        <div className="px-4 md:px-6">
          <div className='flex flex-col text-center md:text-left'>
            <p className='py-4 font-bold text-lg'>Member Management</p>
            <p className="text-sm md:text-base">
              Efficiently manage members and <span className="block md:inline">their activities.</span>
            </p>
          </div>
        </div>

        {/* Payment Solutions */}
        <div className="px-4 md:px-6">
          <div className='flex flex-col text-center md:text-left'>
            <p className='py-4 font-bold text-lg'>Payment Solutions</p>
            <p className="text-sm md:text-base">
              Streamlined payment collection for <span className="block md:inline">convenience.</span>
            </p>
          </div>
        </div>

        {/* Desk Reservations */}
        <div className="px-4 md:px-6">
          <div className='flex flex-col text-center md:text-left'>
            <p className='py-4 font-bold text-lg'>Desk Reservations</p>
            <p className="text-sm md:text-base">Reserve desks easily and efficiently.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
