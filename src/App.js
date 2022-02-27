import React, { useEffect, useRef,  useState } from 'react';
import "./App.css";
import "./Responsive.css";
  const App = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    
    let interval = useRef();

    const startTimer = () =>{
        const countdownDate = new Date('Mar 18, 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days= Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours= Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes= Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
            const seconds= Math.floor((distance % (1000 * 60)) / 1000);
        
             if(distance < 0){
                 //stop out timer
                 clearInterval(interval.current);
             } else {
                 //Update Timer
                 setTimerDays(days);
                 setTimerHours(hours);
                 setTimerMinutes(minutes);
                 setTimerSeconds(seconds);
             }

        }, 1000);
    };

    // component did mount
    useEffect(()=>{
        startTimer();
        return () =>{
            clearInterval(interval.current);
        };
    });

        return (
            <>

                <section id="header">
                    <div className="container">
                        <div className="left">
                            <img src={process.env.PUBLIC_URL + "/header-logo.png"} alt="My-Pic" width="10%" />
                        </div>
                        <div className="right">
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Class</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Contact</a></li>
                                <button>Enroll Now</button>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="home">
                    <div className="container" id='box' >
                        <h1>Al-Tanveer</h1>
                        <h1>Academy</h1>
                        <h2>For Every Child</h2>
                        <button>Explore Classes</button>
                    </div>
                </section>

                <section id="welcome">
                    <h1>Welcome to our <span>Academy</span></h1>
                    <p>"We provide top quality education from Playgroup to M.A which allows a complete career path for every student. Our journey does not end here as we strive for the continuous improvement of our education system with the help of innovative and ground breaking teaching methods"</p>
                </section>

                <section id="inter">
                    <div className="container">
                        <div className="a">
                            <div className="box">
                                <div className="img"> <img src={process.env.PUBLIC_URL+ "/about-icon1.svg"} alt="My-Pic" width="130%" /> </div>
                                  <div className="text">
                                      <h3>Inter School Sports</h3>
                                      <p>The words you use in your written communica speak volumes.</p>
                                  </div>
                            </div>
                            <div className="box">
                                <div className="img"> <img src={process.env.PUBLIC_URL+ "/about-icon2.svg"} alt="My-Pic" width="130%" /> </div>
                                  <div className="text friendly">
                                      <h3>Friendly Enviornment</h3>
                                      <p>The words you use in your written communica speak volumes.</p>
                                  </div>
                            </div>
                            <div className="box">
                                <div className="img"> <img src={process.env.PUBLIC_URL+ "/about-icon3.svg"} alt="My-Pic" width="130%" /> </div>
                                  <div className="text">
                                      <h3>Multiple Classes</h3>
                                      <p>The words you use in your written communica speak volumes.</p>
                                  </div>
                            </div>
                        </div>
                        <div className="b">
                            <img src={process.env.PUBLIC_URL+ "/inter-img.jpg"} alt="My-Pic" width="100%" />
                        </div>
                    </div>
                </section>
                   
                <section id="classes">
                    <div className="container">
                        <h1>Classes We Offer</h1>
                        <p>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue.</p>
                       
                      <div className="box-sec">
                      <div className="box">
                           <img src={process.env.PUBLIC_URL+ "/classes-1.webp"} alt="My-Pic" width="100%" />
                         <div className="text">
                         <h3>Primary & Middle</h3>
                           <p>In this Section we will provide Playgroup to 8th Classes. </p>
                           {/* <hr />
                           <div className="age">
                               <div className="a">
                                   <h3>5-14</h3>
                                   <p>Age Group</p>
                               </div>
                               <div className="b">
                                   <h3>30</h3>
                                   <p>Age Group</p>
                               </div>
                               <div className="c">
                                   <h3>05/h</h3>
                                   <p>Age Group</p>
                               </div>
                           </div> */}
                         </div>
                       </div>
                      <div className="box">
                           <img src={process.env.PUBLIC_URL+ "/classes-2.webp"} alt="My-Pic" width="100%" />
                           <div className="text">
                         <h3>High School Study</h3>
                           <p>In this Section we will provide 9th & 10th Classes.</p>
                           {/* <hr />
                           <div className="age">
                               <div className="a">
                                   <h3>14-23</h3>
                                   <p>Age Group</p>
                               </div>
                               <div className="b">
                                   <h3>30</h3>
                                   <p>Age Group</p>
                               </div>
                               <div className="c">
                                   <h3>07/h</h3>
                                   <p>Age Group</p>
                               </div>
                           </div> */}
                         </div>
                       </div>
                      <div className="box">
                           <img src={process.env.PUBLIC_URL+ "/classes-3.webp"} alt="My-Pic" width="100%" />
                           <div className="text">
                         <h3>Inter & University Level</h3>
                           <p>In this Section we will provide here 11th to M.A Classes.</p>
                           {/* <hr />
                            <div className="age">
                               <div className="a">
                                   <h3>3-5</h3>
                                   <p>Age Group</p>
                               </div>
                               <div className="b">
                                   <h3>30</h3>
                                   <p>Age Group</p>
                               </div>
                               <div className="c">
                                   <h3>10/h</h3>
                                   <p>Age Group</p>
                               </div>
                           </div> */}
                         </div>
                       </div>
                      </div>
                      <button>More Classes</button>
                    </div>
                </section>
            
            <section id="drawing">
                <div className="box">
                    <h3>18 Mar 2022</h3>
                    <h1>Farewell Event</h1>
                    <p>At the farewell party, everyone is dressed up and the celebration is loud and festive. A farewell party was organised, to which all political parties were invited.</p>
                   <button>View Event</button>

                   <div className="time">
                   <section>
                       <h2>{timerDays}</h2>
                       <p>Days</p>
                   </section>
                  
                   <section>
                       <h2>{timerHours}</h2>
                       <p>Hours</p>
                   </section>
                   
                   <section>
                       <h2>{timerMinutes}</h2>
                       <p>Minutes</p>
                   </section>
                 
                   <section>
                       <h2>{timerSeconds}</h2>
                       <p>Seconds</p>
                   </section>
                   </div>
                </div>
            </section>

            <section id="expert">
                <div className="container">
                    <h1>Expert Teachers</h1>
                    <p className='para'>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue.</p>
              
                  <div className="pics">
                      <div className="box">
                        <img src={process.env.PUBLIC_URL+"/teacher-1.png"} alt="My-Pic" width="100%"/>
                        <h2>M.Abdullah</h2>
                        <p>Science Teacher</p>
                      </div>
                      <div className="box" id='box-2'>
                        <img src={process.env.PUBLIC_URL+"/teacher-2.png"} alt="My-Pic" width="88%"/>
                        <h2>Jamat Ali</h2>
                        <p>Maths Teacher</p>
                      </div>
                      <div className="box">
                        <img src={process.env.PUBLIC_URL+"/teacher-3.png"}  alt="My-Pic" width="100%"/>
                        <h2>Ume Abdullah</h2>
                        <p>Arts Teacher</p>
                      </div>
                      {/* <div className="box">
                        <img src={process.env.PUBLIC_URL+"/teacher-1.png"} alt="My-Pic" width="100%"/>
                        <h2>Aleeza </h2>
                        <p>Sports Instructor</p>
                      </div> */}
                  </div>
                </div>
            </section>

            <section id="me">
                <div className="container">
                    <img src={process.env.PUBLIC_URL+"/comma.webp"} alt="My-Pic" width="6%" />
                    <p className='para'>"“Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.”</p>
                   
                   {/* <div className="king">
                     <div className="a"> <img src={process.env.PUBLIC_URL+"/me.jpg"} alt="My-Pic" width="30%" /></div>
                      <div className="b">
                          <h2>Basharat Ali</h2>
                          <p>Web Developer</p>
                      </div>
                   </div> */}

                </div>
            </section>

        <section id="image">
            <img src={process.env.PUBLIC_URL+"/img-1.webp"} alt="My-Pic" width="25%" />
            <img src={process.env.PUBLIC_URL+"/img-2.webp"} alt="My-Pic" width="25%" />
            <img src={process.env.PUBLIC_URL+"/img-3.webp"} alt="My-Pic" width="25%" />
            <img src={process.env.PUBLIC_URL+"/img-4.webp"} alt="My-Pic" width="25%" />
        </section>

        <section id="footer">
            <div className="container">
                 <div className="foot-sec">
                <div className="lap">
                <div className="a">
                    <img src={process.env.PUBLIC_URL+"/header-logo.png"} alt="My-Pic" width="40%"/>
                    <p>Users and submit their own items. You can create different packages and by connecting with your PayPal or Stripe account charge users for registration.</p>
                   <div className="icons">
                       <i className='fa fa-twitter'></i>
                       <i className='fa fa-facebook'></i>
                       <i className='fa fa-pinterest-p'></i>
                       <i className='fa fa-linkedin'></i>
                   </div>

                </div>
                <div className="b">
                    <h1>Quick Links</h1>
                    <ul>
                        <li><a href="">Classes</a></li>
                        <li><a href="">Join with us</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Evnets</a></li>
                    </ul>
                </div>
                </div>
                <div className="c">
                    <h1>About Us</h1>
                    <ul>
                        <li><a href="">Our Team</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Testimonial</a></li>
                        <li><a href="">Programming</a></li>
                        <li><a href="">User Stories</a></li>
                    </ul>
                </div>
                 </div>
                <footer>Copyright &copy; basharatalidogar14@gmail.com  All Right Reversed!</footer>
     
            </div>

          </section>

            </>
        )
    }

export default App;