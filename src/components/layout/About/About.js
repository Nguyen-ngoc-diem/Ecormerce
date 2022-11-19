import React from 'react';
import './About.scss';


function About(props) {
    return (
        <div className="about">
            <div className="container">
                <div className="about__content">
                    <div className="about__container text-center">
                        <h1 className="about__title ">Your design, just for you #YouMake</h1>
                        <video loop autoPlay muted playsInline class="d-block w-100" >
                            <source src="https://images.samsung.com/is/content/samsung/assets/test/youmake/youmake0002_why-youmake_f04_02_wherever_you_live_pc_1440x840.mp4" />
                        </video>
                        <br />
                        <p className="about__slogan">
                            Whether you're a pioneer, innovator, or technologist, personalize your favorite products and experiences to match your own personality and style.
                        </p>
                    </div>
                    <div className="about__preview">
                        <div className="about__img">

                            <img src="/images/About_0.png" />
                        </div>
                        <div className="about__img">

                            <img src="/images/About_1.png" />
                        </div>
                        <div className="about__img">

                            <img src="/images/About_2.png" />
                        </div>
                    </div>
                    <div className="about__container">
                        <p className=" about__letter">
                            Empowering you is the breakthrough we aim for
                            With a history of continuously delivering new breakthroughs, our next challenge is to embrace the new normal with your new needs, desires and passions.

                            That's why we create products that allow you to customize your experience so that you can make the most of your life and work.
                            Personalize what you use every day. We give you the power to make it all your own with a variety of colors, accessories and designs to suit your aesthetic.

                        </p>
                        <p className="about__author">With love</p>
                    </div>
                    <div className="about__preview">
                        <div className="about__img">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
