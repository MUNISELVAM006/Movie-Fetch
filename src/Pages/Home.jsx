// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//       <section class="home" id="home">
//                 <div class="home__container bd-container bd-grid">
//                     <div class="home__data">
//                         <span class="home__greeting">Hello, My name is</span>
//                         <h1 class="home__name">MUNI SELVAM</h1>
//                         <span class="home__profession">Web Developer</span>
//                         <a download="" href="assets/pdf/Muni resume.pdf" class="button button-light home__button">Download Cv</a>
//                     </div>
                    
//                     <div class="home__social">
//                         <a href="https://www.facebook.com/" target="_blank" class="home__social-icon"><i class='bx bxl-facebook-square'></i></a>
//                         <a href="https://www.instagram.com/" target="_blank" class="home__social-icon"><i class='bx bxl-instagram'></i></a>
//                         <a href="https://twitter.com/" target="_blank" class="home__social-icon"><i class='bx bxl-twitter'></i></a>
//                     </div>

                    
//                 </div>
//             </section>
//     </div>
//   )
// }

// export default Home


import React from "react";

const Home = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center bg-gray-100">
      <section className="w-full max-w-6xl p-6 flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <span className="text-lg text-gray-500">Hello, My name is</span>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mt-2">
            MUNI SELVAM
          </h1>
          <span className="text-lg text-orange-500">Web Developer</span>
          <div className="mt-6">
            <a
              download=""
              href="assets/pdf/Muni resume.pdf"
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 shadow-md transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 lg:mt-0 flex space-x-6">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-blue-600 transition"
          >
            <i className="bx bxl-facebook-square"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-pink-500 transition"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-blue-400 transition"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
