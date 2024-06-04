
function HeroSection() {
  
    


    return(
        <>

          <div className="upperHero">
      <section id="heroSection" className="hero-section">

        <div className="hero-section-content-box">
            <div className="hero-section-content">
                <p className="section-title">Hello I'm Yash</p>
                <h1 className="hero-section-title">
                    <span className="hero-section-title-color">
                        Software
                    </span>{" "}
                    <br />
                    <span className="dev">Developer</span>
                    
                </h1>
                <p className="hero-section-desc">
                    I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
                </p>
              
            </div>
            <a href="/contact" className="btn btn-primary">Get in Touch</a>

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