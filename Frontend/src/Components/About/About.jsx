import React from 'react';
import aboutImg from '../../assests/images/about.png';
import aboutCardImg from '../../assests/images/about-Card.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-[50px] lg:gap-[130px] xl:gap-0">
          {/* About img */}
          <div className="relative w-full lg:w-1/2 xl:w-[770px] order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-40 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[25%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* About content */}
          <div className="w-full lg:w-1/2 xl:w-[900px] order-1 lg:order-2 mt-[30px] lg:mt-10">
            <h2 className="heading">Proud to be one of the Nation's Best</h2>
            <p className="mt-[30px]">
              For 30 years in a row, U.S. News & World Report has recognized us as one of the best public hospitals in the nation and #1 in Texas.
            </p>
            <p className="mt-[30px]">
              Our best is something we strive for each day, caring for our patients - not looking back at what we accomplish but towards what we can do tomorrow. Providing the best. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, modi?
            </p>
            <Link to="/">
              <button className="btn mt-[50px]">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
