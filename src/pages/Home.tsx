import { Link } from 'react-router-dom';
const Home = () => {
  return (
     <div className="h-screen relative">
      
     <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/imagecopy.png)',  zIndex: '-1' }}></div>


      {/* Overlay to darken the background for better readability */}
     <header className="bg-transparent backdrop-blur-md">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block" href="#">
          <span className="sr-only">Home</span>
          <div className="flex items-center">
            <img src="/image.png" alt="IHUB DATA Logo" className="h-12" />
          </div>
        </a>
      </div>
      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li><a className="text-white hover:text-gray-200" href="#">About</a></li>
            <li><a className="text-white hover:text-gray-200" href="#">Careers</a></li>
            <li><a className="text-white hover:text-gray-200" href="#">Services</a></li>
            <li><a className="text-white hover:text-gray-200" href="#">Blog</a></li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Link className="bg-blue-600 text-white px-5 py-2.5 rounded-md shadow-md" to="/login">
  Login
</Link>
          <a className="bg-white text-blue-600 px-5 py-2.5 rounded-md shadow-md hidden sm:block" href="#">Register</a>
        </div>
      </div>
    </div>
  </div>
</header>

       

      {/* Main Section */}
         <main className="flex flex-col items-center justify-center h-full text-center">
     <h1 className="text-4xl font-bold text-white">
  IHub-Data IIIT Hyderabad
</h1>
<p className="mt-4 text-lg text-gray-200 max-w-2xl">
  Glucose-Care harnesses advanced data analysis and cutting-edge technology to measure glucose levels, aiming to predict and prevent diabetes.
</p>




        <div className="mt-8 flex space-x-4">
          <a className="bg-white text-blue-600 px-6 py-3 rounded-md shadow-md hover:bg-blue-50 transition" href="#">
            Learn More
          </a>
          <a className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition" href="#">
            Get Started
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home;
