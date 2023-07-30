import {useState} from 'react'
import Aboutimg from '../../assets/m.jpg'
import blog1 from '../../assets/b1.jpg'
import blog2 from '../../assets/b2.jpg'
import blog3 from '../../assets/b2.jpg'
import prof from '../../assets/p.jpg'
import g1 from '../../assets/2.jpg'
import './index.scss'

  const Home = () => {
     const [active, setActive] = useState(null);

     const toggle = (i) =>{
      if(active === 1){
        return setActive(null)
      }
      setActive(1);
     }
    
  
  return (
      <>
        <div className="home">
          <div className="home-cont">
          <div className="hero">
            <div className="hero-top">
              <div className="hero-top-title">
                <h1 className='hero-top-title-text'>Over a long period if work we have provided hundreds if thousands if eye care services</h1>
              </div>
              <div className="hero-top-satisfaction">
                  <div className="satisfaction-profile-icons">
                    <div className="profile-icon">icon</div>
                    <div className="profile-icon">icon</div>
                    <div className="profile-icon">icon</div>
                    <div className="profile-icon">icon</div>
                  </div>
                  <span className="satisfaction-customer-number">400K+</span>
                  <span className="satisfaction-customer-text">Satisfied Customers</span>
              </div>
            </div>
            <div className="hero-bottom">
              <div className="hero-bottom-left">
                <div className="hero-bottom-left-title">
                  <span className="hero-bottom-left-title-text">Facts</span>
                </div>
                <div className="hero-bottom-left-facts">
                  <div className="hero-bottom-left-fact-text">Lorem ipsum doloryditate fugit esse molestiae inventore quas eos fugiat accusantium corporis dolorem necessitatibus voluptates veritatis consequuntur hic qui deserunt? Itaque, aut!</div>
                  <div className="hero-bottom-left-fact-text">Lorem ipsum doloryditate fugit esse molestiae inventore quas eos fugiat accusantium corporis dolorem necessitatibus voluptates veritatis consequuntur hic qui deserunt? Itaque, aut!</div>
                </div>
              </div>
              <div className="hero-bottom-right">
                <div className="hero-bottom-right-top">
                  <div className="hero-bottom-right-top-title">Lorem ipsum dolor sit amet consectetur</div>
                  <div className="hero-bottom-right-top-title-icon">icon</div>
                </div>
                <div className="hero-bottom-right-discount">
                  <div className="hero-bottom-right-discount-left">20%</div>
                  <div className="hero-bottom-right-discount-right">Make an appointment</div>
                </div>
              </div>
            </div>
          </div>
          <div className="about">
            <div className="about-top">
              <div className="about-title">
                <div className="about-title-text">About Us</div>
              </div>
              <div className="about-info">
                <div className="about-info-left">
                  <div className="about-info-left-title">
                    <h2 className="about-info-left-title-text">Ophthamology clinic Vigen</h2>
                  </div>
                  <div className="about-info-left-desc">
                    <span className="about-info-left-desc-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, aut?</span>
                  </div>
                  <div className="about-info-left-button">
                    <button>Learn more</button>
                  </div>
                </div>
                <div className="about-info-right">
                  <img src={Aboutimg} className="about-info-right-image" />
                </div>
              </div>
            </div>
            <div className="about-bottom">
              <div className="about-bottom-icon">next</div>
              <div className="about-bottom-right">
                <div className="about-bottom-right-left">
                  <div className="about-bottom-right-left-icon">icon</div>
                  <div className="about-bottom-right-left-desc">
                    <span className="about-bottom-right-left-desc-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi!</span>
                  </div>
                </div>
                <div className="about-bottom-right-right">
                  <div className="about-bottom-right-right-cont">
                  <div className="about-bottom-right-right-number">01</div>
                  <div className="about-bottom-right-right-desc">
                    <span className="about-bottom-right-right-desc-text">Lorem ipsum dolor sit amet cons</span>
                  </div>
                  </div>
                  <div className="about-bottom-right-right-cont">
                  <div className="about-bottom-right-right-number">02</div>
                  <div className="about-bottom-right-right-desc">
                    <span className="about-bottom-right-right-desc-text">Lorem ipsum dolor sit amet cons</span>
                  </div>
                  </div>
                  <div className="about-bottom-right-right-cont">
                  <div className="about-bottom-right-right-number">03</div>
                  <div className="about-bottom-right-right-desc">
                    <span className="about-bottom-right-right-desc-text">Lorem ipsum dolor sit amet cons</span>
                  </div>
                  </div>
                  <div className="about-bottom-right-right-cont">
                  <div className="about-bottom-right-right-number">04</div>
                  <div className="about-bottom-right-right-desc">
                    <span className="about-bottom-right-right-desc-text">Lorem ipsum dolor sit amet cons</span>
                  </div>
                  </div>
                  <div className="about-bottom-right-right-cont">
                  <div className="about-bottom-right-right-number">05</div>
                  <div className="about-bottom-right-right-desc">
                    <span className="about-bottom-right-right-desc-text">Lorem ipsum dolor sit amet cons</span>
                  </div>
                  </div>
                  <div className="about-bottom-right-right-cont">
                  <div className="about-bottom-right-right-number">06</div>
                  <div className="about-bottom-right-right-desc">
                    <span className="about-bottom-right-right-desc-text">Lorem ipsum dolor sit amet cons</span>
                  </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="gallery">
            <div className="gallery-top">
              <div className="gallery-top-title">
                <span className="gallery-top-title-text">Gallery</span>
              </div>
            <div className="gallery-top-info">
              <div className="gallery-top-info-left">
                <div className="gallery-top-info-left-title">
                  <span className="gallery-top-info-left-title-text">Check out our clinic great gallery</span>
                </div>
                <div className="gallery-top-info-left-tags">
                  <span className="gallery-top-info-left-tag">#Clinic</span>
                  <span className="gallery-top-info-left-tag">#Clinfasjkjdas</span>
                  <span className="gallery-top-info-left-tag">#Clinicsdas</span>
                  <span className="gallery-top-info-left-tag">#Clinissdc</span>
                  <span className="gallery-top-info-left-tag">#Clinicsdsdsdsdsdsdd</span>
                </div>
              </div>
              <div className="gallery-top-info-right">
                <div className="gallery-top-info-right-socials">
                  <span className="gallery-info-right-socials-icons">icon</span>
                  <span className="gallery-info-right-socials-icons">icon</span>
                  <span className="gallery-info-right-socials-icons">icon</span>
                  <span className="gallery-info-right-socials-icons">icon</span>
                </div>
              </div>
            </div>
            </div>
            <div className="gallery-bottom">
              <div className="gallery-bottom-gallery">
                <div className="gallery-bottom-gallery-cont">
                  <div className="gallery-bottom-gallery-image-cont">
                    <img src={g1} alt="" className="gallery-bottom-gallery-image-cont-image" />
                  </div>
                  <div className="gallery-bottom-gallery-title">
                    <span className="gallery-bottom-gallery-title-number">01</span>
                    <span className="gallery-bottom-gallery-title-separete">/</span>
                    <span className="gallery-bottom-gallery-title-text">Eye correction</span>
                  </div>
                  <div className="gallery-bottom-gallery-desc">
                    <span className="gallery-bottom-gallery-desc-text">First time to clinic</span>
                  </div>
                </div>
                <div className="gallery-bottom-gallery-cont">
                  <div className="gallery-bottom-gallery-image-cont">
                    <img src={g1} alt="" className="gallery-bottom-gallery-image-cont-image" />
                  </div>
                  <div className="gallery-bottom-gallery-title">
                    <span className="gallery-bottom-gallery-title-number">01</span>
                    <span className="gallery-bottom-gallery-title-separete">/</span>
                    <span className="gallery-bottom-gallery-title-text">Eye correction</span>
                  </div>
                  <div className="gallery-bottom-gallery-desc">
                    <span className="gallery-bottom-gallery-desc-text">First time to clinic</span>
                  </div>
                </div>
                <div className="gallery-bottom-gallery-cont">
                  <div className="gallery-bottom-gallery-image-cont">
                    <img src={g1} alt="" className="gallery-bottom-gallery-image-cont-image" />
                  </div>
                  <div className="gallery-bottom-gallery-title">
                    <span className="gallery-bottom-gallery-title-number">01</span>
                    <span className="gallery-bottom-gallery-title-separete">/</span>
                    <span className="gallery-bottom-gallery-title-text">Eye correction</span>
                  </div>
                  <div className="gallery-bottom-gallery-desc">
                    <span className="gallery-bottom-gallery-desc-text">First time to clinic</span>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>        
          <div className="services">
            <div className="services-top">
              <div className="services-top-title">
                <span className="services-top-title-text">Services</span>
              </div>
              <div className="services-top-info">
                <div className="services-top-info-title">
                  <span className="services-top-info-title-text">Excellent services of our clinic</span>
                </div>
                <div className="services-top-info-icon">
                  <span className="services-top-info-icon-cont">icon</span>
                </div>
              </div>
            </div>
            <div className="services-bottom">
              <div className="services-bottom-cont">
                           
                    <div className="services-bottom-cards-cont">
                    <div className="services-bottom-card-text">
                      <div className="services-bottom-cards-text-question">
                        <span className="services-bottom-cards-text-question-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta alias neque nobis praesentium.</span>
                      </div>
                      <div className={ active === 1 ? '.services-bottom-cards-text-answer-active':'services-bottom-cards-text-answer'}>
                        <span className="services-bottom-cards-text-answer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ducimus corrupti accusamus, id, molestias quas repudiandae voluptatibus, nesciunt porro eum est illum cumque nemo! Quo officia saepe totam sit provident harum aut sequi, consectetur laudantium. Fugit nobis sit est corporis eveniet officia, ea ducimus pariatur.</span>
                      </div>
                    </div>
                    <div className="services-bottom-card-icon">
                          <span className="services-bottom-card-icon" onClick={()=> toggle(1) } >
                                <button className="expand-button">{ active === 1 ? '-' : '+' }</button>
                          </span>
                    </div>
                    </div>
                    <div className="services-bottom-cards-cont">
                    <div className="services-bottom-card-text">
                      <div className="services-bottom-cards-text-question">
                        <span className="services-bottom-cards-text-question-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta alias neque nobis praesentium.</span>
                      </div>
                      <div className={ active === 1 ? '.services-bottom-cards-text-answer-active':'services-bottom-cards-text-answer'}>
                        <span className="services-bottom-cards-text-answer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ducimus corrupti accusamus, id, molestias quas repudiandae voluptatibus, nesciunt porro eum est illum cumque nemo! Quo officia saepe totam sit provident harum aut sequi, consectetur laudantium. Fugit nobis sit est corporis eveniet officia, ea ducimus pariatur.</span>
                      </div>
                    </div>
                    <div className="services-bottom-card-icon">
                          <span className="services-bottom-card-icon" onClick={()=> toggle(1) } >
                                <button className="expand-button">{ active === 1 ? '-' : '+' }</button>
                          </span>
                    </div>
                    </div>
                    <div className="services-bottom-cards-cont">
                    <div className="services-bottom-card-text">
                      <div className="services-bottom-cards-text-question">
                        <span className="services-bottom-cards-text-question-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta alias neque nobis praesentium.</span>
                      </div>
                      <div className={ active === 1 ? '.services-bottom-cards-text-answer-active':'services-bottom-cards-text-answer'}>
                        <span className="services-bottom-cards-text-answer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ducimus corrupti accusamus, id, molestias quas repudiandae voluptatibus, nesciunt porro eum est illum cumque nemo! Quo officia saepe totam sit provident harum aut sequi, consectetur laudantium. Fugit nobis sit est corporis eveniet officia, ea ducimus pariatur.</span>
                      </div>
                    </div>
                    <div className="services-bottom-card-icon">
                          <span className="services-bottom-card-icon" onClick={()=> toggle(1) } >
                                <button className="expand-button">{ active === 1 ? '-' : '+' }</button>
                          </span>
                    </div>
                    </div>
                    <div className="services-bottom-cards-cont">
                    <div className="services-bottom-card-text">
                      <div className="services-bottom-cards-text-question">
                        <span className="services-bottom-cards-text-question-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta alias neque nobis praesentium.</span>
                      </div>
                      <div className={ active === 1 ? '.services-bottom-cards-text-answer-active':'services-bottom-cards-text-answer'}>
                        <span className="services-bottom-cards-text-answer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ducimus corrupti accusamus, id, molestias quas repudiandae voluptatibus, nesciunt porro eum est illum cumque nemo! Quo officia saepe totam sit provident harum aut sequi, consectetur laudantium. Fugit nobis sit est corporis eveniet officia, ea ducimus pariatur.</span>
                      </div>
                    </div>
                    <div className="services-bottom-card-icon">
                          <span className="services-bottom-card-icon" onClick={()=> toggle(1) } >
                                <button className="expand-button">{ active === 1 ? '-' : '+' }</button>
                          </span>
                    </div>
                    </div>
                    <div className="services-bottom-cards-cont">
                    <div className="services-bottom-card-text">
                      <div className="services-bottom-cards-text-question">
                        <span className="services-bottom-cards-text-question-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta alias neque nobis praesentium.</span>
                      </div>
                      <div className={ active === 1 ? '.services-bottom-cards-text-answer-active':'services-bottom-cards-text-answer'}>
                        <span className="services-bottom-cards-text-answer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ducimus corrupti accusamus, id, molestias quas repudiandae voluptatibus, nesciunt porro eum est illum cumque nemo! Quo officia saepe totam sit provident harum aut sequi, consectetur laudantium. Fugit nobis sit est corporis eveniet officia, ea ducimus pariatur.</span>
                      </div>
                    </div>
                    <div className="services-bottom-card-icon">
                          <span className="services-bottom-card-icon" onClick={()=> toggle(1) } >
                                <button className="expand-button">{ active === 1 ? '-' : '+' }</button>
                          </span>
                    </div>
                    </div>
                    <div className="services-bottom-cards-cont">
                    <div className="services-bottom-card-text">
                      <div className="services-bottom-cards-text-question">
                        <span className="services-bottom-cards-text-question-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta alias neque nobis praesentium.</span>
                      </div>
                      <div className={ active === 1 ? '.services-bottom-cards-text-answer-active':'services-bottom-cards-text-answer'}>
                        <span className="services-bottom-cards-text-answer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ducimus corrupti accusamus, id, molestias quas repudiandae voluptatibus, nesciunt porro eum est illum cumque nemo! Quo officia saepe totam sit provident harum aut sequi, consectetur laudantium. Fugit nobis sit est corporis eveniet officia, ea ducimus pariatur.</span>
                      </div>
                    </div>
                    <div className="services-bottom-card-icon">
                          <span className="services-bottom-card-icon" onClick={()=> toggle(1) } >
                                <button className="expand-button">{ active === 1 ? '-' : '+' }</button>
                          </span>
                    </div>
                    </div>
                    <div className="services-bottom-cards-cont">
                    <div className="services-bottom-card-text">
                      <div className="services-bottom-cards-text-question">
                        <span className="services-bottom-cards-text-question-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta alias neque nobis praesentium.</span>
                      </div>
                      <div className={ active === 1 ? '.services-bottom-cards-text-answer-active':'services-bottom-cards-text-answer'}>
                        <span className="services-bottom-cards-text-answer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ducimus corrupti accusamus, id, molestias quas repudiandae voluptatibus, nesciunt porro eum est illum cumque nemo! Quo officia saepe totam sit provident harum aut sequi, consectetur laudantium. Fugit nobis sit est corporis eveniet officia, ea ducimus pariatur.</span>
                      </div>
                    </div>
                    <div className="services-bottom-card-icon">
                          <span className="services-bottom-card-icon" onClick={()=> toggle(1) } >
                                <button className="expand-button">{ active === 1 ? '-' : '+' }</button>
                          </span>
                    </div>
                    </div>
                    <div className="services-bottom-cards-cont">
                    <div className="services-bottom-card-text">
                      <div className="services-bottom-cards-text-question">
                        <span className="services-bottom-cards-text-question-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta alias neque nobis praesentium.</span>
                      </div>
                      <div className={ active === 1 ? '.services-bottom-cards-text-answer-active':'services-bottom-cards-text-answer'}>
                        <span className="services-bottom-cards-text-answer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ducimus corrupti accusamus, id, molestias quas repudiandae voluptatibus, nesciunt porro eum est illum cumque nemo! Quo officia saepe totam sit provident harum aut sequi, consectetur laudantium. Fugit nobis sit est corporis eveniet officia, ea ducimus pariatur.</span>
                      </div>
                    </div>
                    <div className="services-bottom-card-icon">
                          <span className="services-bottom-card-icon" onClick={()=> toggle(1) } >
                                <button className="expand-button">{ active === 1 ? '-' : '+' }</button>
                          </span>
                    </div>
                    </div>
              </div>
            </div>
          </div>

          <div className="burner">
            <div className="burner-cont">
              <div className="burner-left">
                <div className="burner-left-top">
                  <div className="burner-left-top-title">
                    <span className="burner-left-top-title-text">Take a discouunt for a child under 6 years of age for the first examination</span>
                  </div>
                  <div className="burner-left-top-icon">icon</div>
                </div>
                <div className="burner-left-bottom">
                  <div className="burner-left-bottom-per">50%</div>
                  <div className="burner-left-bottom-icon">icon</div>
                </div>
              </div>
              <div className="burner-right">
                <div className="burner-left-cont">
                  <div className="burner-left-cont-left">
                    <div className="burner-left-cont-image-cont">
                      <img src={prof} alt="" className="burner-cont-image-cont-image" />
                      </div>
                  </div>
                  <div className="burner-right-cont-right">
                    <div className="burner-right-cont-right-icon">icon</div>
                     <div className="burner-right-cont-right-quote">
                          <span className="burner-right-cont-right-quote-text">Stand up to the sick as you would have them stand up to you in the hour of illness.</span>
                          <span className="burner-right-cont-right-quote-name">Adrian karanja H.M.S.</span>
                          <span className="burner-right-cont-right-quote-signature">H.M.S.</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="specialists">
            <div className="specialist-top">
              <div className="special-top-title">
               <span className="special-top-title-text">Specialists</span>
              </div>
              <div className="special-top-info">
                <div className="special-top-info-left">
                    <div className="special-top-info-left-title">
                      <span className="special-top-info-title-text">Surgeons and Ophthalmologisits</span>
                    </div>
                    <div className="special-top-info-left-desc">
                    <span className="special-top-info-left-desc-text">our clinic only empoloyes only professional physicians. We select the  best doctors on a regular basis</span>
                    </div>
                </div>
                <div className="special-top-info-right">
                  <div className="special-top-info-right-button">
                    <span className="special-top-info-right-button-text">All doctors</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="specialist-bottom">
              <div className="specialist-bottom-cont">
                <div className="special-bottom-cont-item">
                  <div className="special-bottom-item-image-cont">
                    <img src={prof} alt="" className="special-bottom-item-image-cont-image" />
                  </div>
                  <div className="special-bottom-item-title">
                    <span className="special-bottom-item-title-text">Adrian karanja kimani</span>
                  </div>
                  <div className="special-bottom-item-desc">
                    <span className="special-bottom-item-desc-text">Work experience - 8 years</span>
                  </div>
                  <div className="special-bottom-item-tags-cont">
                    <div className="special-bottom-item-tag">Surgeon</div>
                    <div className="special-bottom-item-tag">Surgeon</div>
                    <div className="special-bottom-item-tag">Surgeon</div>
                  </div>
                </div>
                <div className="special-bottom-cont-item">
                  <div className="special-bottom-item-image-cont">
                    <img src={prof} alt="" className="special-bottom-item-image-cont-image" />
                  </div>
                  <div className="special-bottom-item-title">
                    <span className="special-bottom-item-title-text">Adrian karanja kimani</span>
                  </div>
                  <div className="special-bottom-item-desc">
                    <span className="special-bottom-item-desc-text">Work experience - 8 years</span>
                  </div>
                  <div className="special-bottom-item-tags-cont">
                    <div className="special-bottom-item-tag">Surgeon</div>
                    <div className="special-bottom-item-tag">Surgeon</div>
                    <div className="special-bottom-item-tag">Surgeon</div>
                  </div>
                </div>
                <div className="special-bottom-cont-item">
                  <div className="special-bottom-item-image-cont">
                    <img src={prof} alt="" className="special-bottom-item-image-cont-image" />
                  </div>
                  <div className="special-bottom-item-title">
                    <span className="special-bottom-item-title-text">Adrian karanja kimani</span>
                  </div>
                  <div className="special-bottom-item-desc">
                    <span className="special-bottom-item-desc-text">Work experience - 8 years</span>
                  </div>
                  <div className="special-bottom-item-tags-cont">
                    <div className="special-bottom-item-tag">Surgeon</div>
                    <div className="special-bottom-item-tag">Surgeon</div>
                    <div className="special-bottom-item-tag">Surgeon</div>
                  </div>
                </div>
                <div className="special-bottom-cont-item">
                  <div className="special-bottom-item-image-cont">
                    <img src={prof} alt="" className="special-bottom-item-image-cont-image" />
                  </div>
                  <div className="special-bottom-item-title">
                    <span className="special-bottom-item-title-text">Adrian karanja kimani</span>
                  </div>
                  <div className="special-bottom-item-desc">
                    <span className="special-bottom-item-desc-text">Work experience - 8 years</span>
                  </div>
                  <div className="special-bottom-item-tags-cont">
                    <div className="special-bottom-item-tag">Surgeon</div>
                    <div className="special-bottom-item-tag">Surgeon</div>
                    <div className="special-bottom-item-tag">Surgeon</div>
                  </div>
                </div>
                <div className="special-bottom-cont-item">
                  <div className="special-bottom-item-image-cont">
                    <img src={prof} alt="" className="special-bottom-item-image-cont-image" />
                  </div>
                  <div className="special-bottom-item-title">
                    <span className="special-bottom-item-title-text">Adrian karanja kimani</span>
                  </div>
                  <div className="special-bottom-item-desc">
                    <span className="special-bottom-item-desc-text">Work experience - 8 years</span>
                  </div>
                  <div className="special-bottom-item-tags-cont">
                    <div className="special-bottom-item-tag">Surgeon</div>
                    <div className="special-bottom-item-tag">Surgeon</div>
                    <div className="special-bottom-item-tag">Surgeon</div>
                  </div>
                </div>
                <div className="special-bottom-cont-item">
                  <div className="special-bottom-item-image-cont">
                    <img src={prof} alt="" className="special-bottom-item-image-cont-image" />
                  </div>
                  <div className="special-bottom-item-title">
                    <span className="special-bottom-item-title-text">Adrian karanja kimani</span>
                  </div>
                  <div className="special-bottom-item-desc">
                    <span className="special-bottom-item-desc-text">Work experience - 8 years</span>
                  </div>
                  <div className="special-bottom-item-tags-cont">
                    <div className="special-bottom-item-tag">Surgeon</div>
                    <div className="special-bottom-item-tag">Surgeon</div>
                    <div className="special-bottom-item-tag">Surgeon</div>
                  </div>
                </div>
               
                
              </div>
            </div>
          </div>
          <div className="reviews">
            <div className="reviews-top">
                <div className="reviews-title">
                  <span className="reviews-title-text">Reviews</span>
                </div>
                <div className="reviews-info">
                  <div className="review-info-left">
                    <div className="reviews-info-left-title">
                    <span className="reviews-info-left-title-text">Feedback from our favourite customers</span>
                    </div>
                    <div className="reviews-info-left-desc">
                      <span className="reviews-info-left-desc-text">we trust our customers better than any other clinic. Thank you for being with us</span>
                    </div>
                  </div>
                  <div className="review-info-right">
                    <div className="reviews-right-button">
                      <span className="reviews-button-text">ALl reviews</span>
                    </div>
                  </div>
                </div>
            </div>
            <div className="reviews-bottom">
              <div className="review-bottom-card">
                <div className="review-bottom-card-left">
                  <div className="reviews-bottom-card-left-image">img</div>
                  <div className="reviews-bottom-card-left-icon">icon</div>
                </div>
                <div className="review-bottom-card-right">
                  <div className="reviews-bottom-card-right-icon">icon</div>
                  <div className="reviews-bottom-card-right-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam reiciendis dicta, vel, repellat, provident libero perspiciatis fuga harum repudiandae aspernatur facere debitis laboriosam non unde! Natus, numquam. Dolor cum incidunt reiciendis voluptatem ratione dignissimos cumque distinctio sunt, nam rerum quo eos repellat maiores natus illum.</div>
                  <div className="reviews-bottom-card-right-name">
                    <span className="reviews-bottom-card-right-name-text">Adrian Karanja</span>
                    <span className="reviews-bottom-card-right-name-role">Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="newsletter">newsletter</div>

          <div className="faq">
            <div className="faq-top">
              <div className="faq-top-title">
                <span className="faq-top-title-text">FAQ</span>
              </div>
              <div className="faq-top-info">
                <div className="faq-top-info-title">
                  <span className="faq-top-info-title-text">Questions from our clients</span>
                </div>
                <div className="faq-top-info-icon">
                  <span className="faq-top-info-icon-cont">icon</span>
                </div>
              </div>
            </div>
            <div className="faq-bottom">
              <div className="faq-bottom-cont">
                `<div className="faq-bottom-cards-cont">
                    <div className="faq-bottom-card-text">
                      <div className="faq-bottom-cards-text-question">
                        <span className="faq-bottom-cards-text-question-text">Itaque dicta kjkuj ajiasdja alias neque nobis praesentium.</span>
                      </div>
                      <div className={ active === 1 ? '.faq-bottom-cards-text-answer-active':'faq-bottom-cards-text-answer'}>
                        <span className="faq-bottom-cards-text-answer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ducimus corrupti accusamus, id, molestias quas repudiandae voluptatibus, nesciunt porro eum est illum cumque nemo! Quo officia saepe totam sit provident harum aut sequi, consectetur laudantium. Fugit nobis sit est corporis eveniet officia, ea ducimus pariatur.</span>
                      </div>
                    </div>
                    <div className="faq-bottom-card-icon">
                          <span className="faq-bottom-card-icon" onClick={()=> toggle(1) } >
                                <button className="expand-button">{ active === 1 ? '-' : '+' }</button>
                          </span>
                    </div>
                </div>`
                <div className="faq-bottom-cards-cont">
                    <div className="faq-bottom-card-text">
                      <div className="faq-bottom-cards-text-question">
                        <span className="faq-bottom-cards-text-question-text">consectetur adipisicing elit. Itaque dicta alias neque nobis praesentium.</span>
                      </div>
                      <div className={ active === 1 ? '.faq-bottom-cards-text-answer-active':'faq-bottom-cards-text-answer'}>
                        <span className="faq-bottom-cards-text-answer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ducimus corrupti accusamus, id, molestias quas repudiandae voluptatibus, nesciunt porro eum est illum cumque nemo! Quo officia saepe totam sit provident harum aut sequi, consectetur laudantium. Fugit nobis sit est corporis eveniet officia, ea ducimus pariatur.</span>
                      </div>
                    </div>
                    <div className="faq-bottom-card-icon">
                          <span className="faq-bottom-card-icon" onClick={()=> toggle(1) } >
                                <button className="expand-button">{ active === 1 ? '-' : '+' }</button>
                          </span>
                    </div>
                </div>
                <div className="faq-bottom-cards-cont">
                    <div className="faq-bottom-card-text">
                      <div className="faq-bottom-cards-text-question">
                        <span className="faq-bottom-cards-text-question-text">lit. Itaque dicta alias neque nobis praesentium.</span>
                      </div>
                      <div className={ active === 1 ? '.faq-bottom-cards-text-answer-active':'faq-bottom-cards-text-answer'}>
                        <span className="faq-bottom-cards-text-answer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ducimus corrupti accusamus, id, molestias quas repudiandae voluptatibus, nesciunt porro eum est illum cumque nemo! Quo officia saepe totam sit provident harum aut sequi, consectetur laudantium. Fugit nobis sit est corporis eveniet officia, ea ducimus pariatur.</span>
                      </div>
                    </div>
                    <div className="faq-bottom-card-icon">
                          <span className="faq-bottom-card-icon" onClick={()=> toggle(1) } >
                                <button className="expand-button">{ active === 1 ? '-' : '+' }</button>
                          </span>
                    </div>
                </div>
                <div className="faq-bottom-cards-cont">
                    <div className="faq-bottom-card-text">
                      <div className="faq-bottom-cards-text-question">
                        <span className="faq-bottom-cards-text-question-text">Alias neque nobis praesentium.</span>
                      </div>
                      <div className={ active === 1 ? '.faq-bottom-cards-text-answer-active':'faq-bottom-cards-text-answer'}>
                        <span className="faq-bottom-cards-text-answer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ducimus corrupti accusamus, id, molestias quas repudiandae voluptatibus, nesciunt porro eum est illum cumque nemo! Quo officia saepe totam sit provident harum aut sequi, consectetur laudantium. Fugit nobis sit est corporis eveniet officia, ea ducimus pariatur.</span>
                      </div>
                    </div>
                    <div className="faq-bottom-card-icon">
                          <span className="faq-bottom-card-icon" onClick={()=> toggle(1) } >
                                <button className="expand-button">{ active === 1 ? '-' : '+' }</button>
                          </span>
                    </div>
                </div>
                <div className="faq-bottom-cards-cont">
                    <div className="faq-bottom-card-text">
                      <div className="faq-bottom-cards-text-question">
                        <span className="faq-bottom-cards-text-question-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta alias neque nobis praesentium.</span>
                      </div>
                      <div className={ active === 1 ? '.faq-bottom-cards-text-answer-active':'faq-bottom-cards-text-answer'}>
                        <span className="faq-bottom-cards-text-answer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ducimus corrupti accusamus, id, molestias quas repudiandae voluptatibus, nesciunt porro eum est illum cumque nemo! Quo officia saepe totam sit provident harum aut sequi, consectetur laudantium. Fugit nobis sit est corporis eveniet officia, ea ducimus pariatur.</span>
                      </div>
                    </div>
                    <div className="faq-bottom-card-icon">
                          <span className="faq-bottom-card-icon" onClick={()=> toggle(1) } >
                                <button className="expand-button">{ active === 1 ? '-' : '+' }</button>
                          </span>
                    </div>
                </div>
                <div className="faq-bottom-cards-cont">
                    <div className="faq-bottom-card-text">
                      <div className="faq-bottom-cards-text-question">
                        <span className="faq-bottom-cards-text-question-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta alias neque nobis praesentium.</span>
                      </div>
                      <div className={ active === 1 ? '.faq-bottom-cards-text-answer-active':'faq-bottom-cards-text-answer'}>
                        <span className="faq-bottom-cards-text-answer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ducimus corrupti accusamus, id, molestias quas repudiandae voluptatibus, nesciunt porro eum est illum cumque nemo! Quo officia saepe totam sit provident harum aut sequi, consectetur laudantium. Fugit nobis sit est corporis eveniet officia, ea ducimus pariatur.</span>
                      </div>
                    </div>
                    <div className="faq-bottom-card-icon">
                          <span className="faq-bottom-card-icon" onClick={()=> toggle(1) } >
                                <button className="expand-button">{ active === 1 ? '-' : '+' }</button>
                          </span>
                    </div>
                </div>
                <div className="faq-bottom-cards-cont">
                    <div className="faq-bottom-card-text">
                      <div className="faq-bottom-cards-text-question">
                        <span className="faq-bottom-cards-text-question-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda labore tenetur placeat similique atque. Dignissimos expedita est dolorem ab soluta nihil ipsum consectetur perferendis magni, officia assumenda doloribus? Accusantium perferendis porro voluptatem reiciendis, ea dolor!</span>
                      </div>
                      <div className={ active === 1 ? '.faq-bottom-cards-text-answer-active':'faq-bottom-cards-text-answer'}>
                        <span className="faq-bottom-cards-text-answer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consectetur enim omnis, doloribus dolorem in neque eos illum molestias hic soluta asperiores facere quos dolorum nemo nesciunt similique delectus explicabo voluptates ex labore vitae libero?</span>
                      </div>
                    </div>
                    <div className="faq-bottom-card-icon">
                          <span className="faq-bottom-card-icon" onClick={()=> toggle(1) } >
                                <button className="expand-button">{ active === 1 ? '-' : '+' }</button>
                          </span>
                    </div>
                </div>
                <div className="faq-bottom-cards-cont">
                    <div className="faq-bottom-card-text">
                      <div className="faq-bottom-cards-text-question">
                        <span className="faq-bottom-cards-text-question-text">Itaque dicta alias neque nobis praesentium.</span>
                      </div>
                      <div className={ active === 1 ? '.faq-bottom-cards-text-answer-active':'faq-bottom-cards-text-answer'}>
                        <span className="faq-bottom-cards-text-answer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ducimus corrupti accusamus, id, molestias quas repudiandae voluptatibus, nesciunt porro eum est illum cumque nemo! Quo officia saepe totam sit provident harum aut sequi, consectetur laudantium. Fugit nobis sit est corporis eveniet officia, ea ducimus pariatur.</span>
                      </div>
                    </div>
                    <div className="faq-bottom-card-icon">
                          <span className="faq-bottom-card-icon" onClick={()=> toggle(1) } >
                                <button className="expand-button">{ active === 1 ? '-' : '+' }</button>
                          </span>
                    </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="partners">partners</div>
          <div className="blog">
            <div className="blog-top">
              <div className="blog-top-title">
                <span className="blog-top-tittle-text">blog</span>
              </div>
              <div className="blog-top-info">
                <div className="blog-top-info-title">
                  <span className="blog-top-info-title-text">You may be interested to know</span>
                </div>
                <div className="blog-top-info-buttons">
                  <span className="blog-top-info-button">icon</span>
                  <span className="blog-top-info-button">icon</span>
                </div>
              </div>
            </div>
            <div className="blog-bottom">
              <div className="blog-bottom-cont">
                <div className="blog-bottom-cont-card">
                  <div className="blog-bottom-cont-card-image-cont">
                    <img src={blog1} alt="" className="blog-bottom-cont-card-image" />
                  </div>
                  <div className="blog-bottom-cont-card-tags">
                    <div className="blog-bottom-cont-card-tags-tag">Science</div>
                    <div className="blog-bottom-cont-card-tags-tag">Vision</div>
                    <div className="blog-bottom-cont-card-tags-tag">Eye Correction</div>
                  </div>
                  <div className="blog-bottom-cont-card-desc">
                    <span className="blog-bottom-card-desc-text">The modern benchmarl for contact surgery in 2022</span>
                  </div>
                </div>
                <div className="blog-bottom-cont-card">
                  <div className="blog-bottom-cont-card-image-cont">
                    <img src={blog2} alt="" className="blog-bottom-cont-card-image" />
                  </div>
                  <div className="blog-bottom-cont-card-tags">
                    <div className="blog-bottom-cont-card-tags-tag">Science</div>
                    <div className="blog-bottom-cont-card-tags-tag">Vision</div>
                    <div className="blog-bottom-cont-card-tags-tag">Eye Correction</div>
                  </div>
                  <div className="blog-bottom-cont-card-desc">
                    <span className="blog-bottom-card-desc-text">The modern benchmarl for contact surgery in 2022</span>
                  </div>
                </div>
                <div className="blog-bottom-cont-card">
                  <div className="blog-bottom-cont-card-image-cont">
                    <img src={blog3} alt="" className="blog-bottom-cont-card-image" />
                  </div>
                  <div className="blog-bottom-cont-card-tags">
                    <div className="blog-bottom-cont-card-tags-tag">Science</div>
                    <div className="blog-bottom-cont-card-tags-tag">Vision</div>
                    <div className="blog-bottom-cont-card-tags-tag">Eye Correction</div>
                  </div>
                  <div className="blog-bottom-cont-card-desc">
                    <span className="blog-bottom-card-desc-text">The modern benchmarl for contact surgery in 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </>
  )
}

export default Home