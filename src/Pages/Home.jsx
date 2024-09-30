import React from 'react'

const Home = () => {
  return (
    <div>
      <section class="home" id="home">
                <div class="home__container bd-container bd-grid">
                    <div class="home__data">
                        <span class="home__greeting">Hello, My name is</span>
                        <h1 class="home__name">MUNI SELVAM</h1>
                        <span class="home__profession">Web Developer</span>
                        <a download="" href="assets/pdf/Muni resume.pdf" class="button button-light home__button">Download Cv</a>
                    </div>
                    
                    <div class="home__social">
                        <a href="https://www.facebook.com/" target="_blank" class="home__social-icon"><i class='bx bxl-facebook-square'></i></a>
                        <a href="https://www.instagram.com/" target="_blank" class="home__social-icon"><i class='bx bxl-instagram'></i></a>
                        <a href="https://twitter.com/" target="_blank" class="home__social-icon"><i class='bx bxl-twitter'></i></a>
                    </div>

                    
                </div>
            </section>
    </div>
  )
}

export default Home
