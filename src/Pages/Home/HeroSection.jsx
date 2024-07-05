
function HeroSection() {
  
    


    return(
        <>

          <div className="upperHero">
      <section id="heroSection" className="hero-section">

        <div className="hero-section-content-box">
            <div className="hero-section-content">

                <h1 className="hero-section-title">
                <span className="herospan"> I'm Yash,</span> a dedicated and innovative <span className="herospan  text, sec-text">Software </span>Developer.
                    
                </h1>
                <p className="hero-section-desc">
                    I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
                </p>
              
            </div>
            <div className="herobutton">
            <a href="/contact" className="btn btn-primary">Get in Touch</a>
            <a href="https://drive.google.com/file/d/1t19NMHRr0ZCMmDcbQGkEF8QBun3tMHeO/view?usp=sharing" className="btn2 btn-primary" target="_blank" rel="noreferrer">My Resume</a>
        
            </div>
        </div>

        <div className="hero-section-image">
            {/* <img src="../src/assets/Photo.jpg" alt="Img" /> */}
        </div>

      </section>
      </div>
        </>
    )
}
export default HeroSection