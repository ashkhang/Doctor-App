import React from 'react'
import heroImg01 from '../assests/images/hero-img01.png'
import heroImg02 from '../assests/images/hero-img02.png'
import heroImg03 from '../assests/images/hero-img03.png'
import faqImg from '../assests/images/faq-img.png'
import icon01 from '../assests/images/icon01.png'
import icon02 from '../assests/images/icon02.png'
import icon03 from '../assests/images/icon03.png'
import featureImg from '../assests/images/feature-img.png'
import videoIcon from '../assests/images/video-icon.png'
import avatarIcon from '../assests/images/avatar-icon.png'
import {Link} from 'react-router-dom'
import {BsArrowRight,} from 'react-icons/bs'
import About from '../Components/About/About'
import ServicesList from '../Components/Services/ServicesList'
import DoctorList from '../Components/Doctors/DoctorList'
import FaqList from '../Components/faq/FaqList'
// import FaqItem from '../Components/faq/FaqItem'
// import {Services}  from '../assests/Data/Services'
import Testimonial from '../Components/Services/Testimonial/Testimonial';
// import Testimonial from './../Components/Services/Testimonial/Testimonial';

const Home = () => {
  return (
    <>
    {/* ................hero section............. */}
   
   <section  className='hero__section pt-[60px] 2xl:h-[800px]'>
    <div className='container'>  
      <div className='flex flex-col lg:flex-row gap-[90px]  items-center justify-between'>
            {/* ...............hero content........ */}
     <div className='lg:w-[570px]'>
      <h1 className='text-[36px] leading-[46px] text-headingColor font-[650] md:text-[45px]'>
We help Patients <br/>live a healthy,<br/>longer life.
      </h1>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Numquam aliquid tenetur qui doloremque. Velit aliquid at
    ad maxime magni libero commodi deserunt dicta cupiditate?
     Doloremque qui libero debitis ipsam soluta, hic iure pariatur tenetur?
</p>


<button className='btn '>Request and Appointement </button>

     </div>
     {/* ............hero counter...... */}

<div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-[30px]'>
  <div>
    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor '>
      30+
    </h2>
<span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'>
</span>


<p className='text__  para'>Years of Experience</p>



  </div>

  <div>
    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor '>
      15+
    </h2>
<span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'>
</span>


<p className='text__  para'>Clinic Location</p>



  </div>
  <div>
    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor '>
      100%
    </h2>
<span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'>
</span>


<p className='text__  para'>Patients Satisfaction</p>



  </div>




</div>

{/* ...................hero content................ */}
     
     <div className='flex gap-[30px] justify-end'>
<div>
  <img className='w-full' src={heroImg01} alt=''/>
</div>

<div className='mt-[30px]'>

  <img className='w-full mb-[30px]' src={heroImg02} alt=''/>
  <img className='w-full ' src={heroImg03} alt=''/>

</div>


     </div>
     
     
     
     
      </div>
    </div>
   </section>

   {/* .................hero section end..... */}
   <section>
<div className="container">
  <div className='lg:w-[ 470px] mx-auto'>
<h2 className='heading text-center'>Providing the best medical services</h2>
<p className=' text-center '>
World-class care for everyone.our healthy System <br/>of fers unmatched,expert healthcare.
</p>

  </div>

<div className="flex flex-wrap items-center flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] justify-between">
<div className='py-[30px] px-5'>
<div className='flex items-center justify-center'>
  <img className='' src={icon01} alt=''/>

</div>

<div className="mt-[30]">
<h2 className='text-[40px] leading-2  text-headingColor font-[200] text-center'>Find a Doctor</h2>
<p className='text-[18px] leading-2 text-textCenter font-[400] mt-5 text-center '> World-class care for everyone.<br/>our health system offers unmatched ,<br/>expert health care.From the lab to the clinic.</p>

<Link to='/doctors' className ='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center  justify-center group hover:bg-primaryColorhover:border-none'>
  <BsArrowRight className="group-hover:text-blue-500 w-5 h-5"/>

</Link>
</div>





</div>

<div className='py-[30px] px-5'>
<div className='flex items-center justify-center'>
  <img className='' src={icon02} alt=''/>

</div>

<div className="mt-[30]">
<h2 className='text-[40px] leading-2  text-headingColor font-[200] text-center'>Find a Location</h2>
<p className='text-[18px] leading-2 text-textCenter font-[400] mt-5 text-center '> World-class care for everyone.<br/>our health system offers unmatched ,<br/>expert health care.From the lab to the clinic.</p>

<Link to='/doctors' className ='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center  justify-center group hover:bg-primaryColorhover:border-none'>
  <BsArrowRight className="group-hover:text-blue-500 w-5 h-5"/>

</Link>
</div>





</div>





<div className='py-[30px] px-5'>
<div className='flex items-center justify-center'>
  <img className='' src={icon03} alt=''/>

</div>

<div className="mt-[30]">
<h2 className='text-[40px] leading-2  text-headingColor font-[200] text-center'>Book Appointement</h2>
<p className='text-[18px] leading-2 text-textCenter font-[400] mt-5 text-center '> World-class care for everyone.<br/>our health system offers unmatched ,<br/>expert health care.From the lab to the clinic.</p>

<Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
  <BsArrowRight className='group-hover:text-blue-500 w-5 h-5' />
</Link>

</div>





</div>


</div>


</div>

   </section>
<About/>
{/*  */}
{/* ..............services section.............. */}
<section>
<div className='container'>
<div className="xl:w-[470px] mx-auto">
  <h2 className='heading text-center'>
Our Medical Services
  </h2>
<p className='text-center'>
  World-class care for everyone ,our health System offers unmatched,expert health care.
</p>
</div>

<ServicesList/>



</div>

</section>

{/* ...............services section end................ */}

{/* ............features section............. */}
<section>


<div className=''>
  <div className='flex items-cover justify-between lex-col lg:flex-row'>
    {/* .........features content.............. */}
<div className=' text-center xl:w-[670px]'>
  <h2 className='heading'>
    Get Virtual treatement <br/>
    anytime.

  </h2>
<ul className="pl-4">
<li >
  1. Schedul the appointment directly.
</li>
<li >
  2. Search for your physician here,and contact their office.
</li>
<li >
  3. view our physicianswho are accepting new patients,use the<br/> online scheduling tool to select an appointment time.
</li>

</ul>
<Link to='/'>
<button className="btn">
  Learn More
</button>
</Link>
</div>
{/* ....................feature img............... */}
<div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 '>
<img src={featureImg} alt='' className='w-3/4'  />
<div className='w-[150px] lg:w-[248]  bg-white absolute bottom-[50px] left-0 md:bottom-[100px] d:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] '>
  <div className='w-[250px] flex items-center flex-col justify-between rounded-lg bg-white p-4 px-9 shadow-lg'>
    <div className='flex items-center  gap-[6px] lg:gap-3'>
      <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
        Tue,24
      </p>
      <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-texColor font-[400]'>
        10:00AM 
      </p>
      <span className='w-5 h-5 lg:w-[34px] lg:h-[34px flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
      <img src={videoIcon} alt=''/>
      </span>
      


    </div>
    <div className='rounded-full w-[65px] lg:w-[96px] bg-[#CCF0F3]  py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-[2px] lg:mt-4'   >
Consultation
</div> 
<div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] '>
<img src={avatarIcon} alt="" />
<h4 className='text-[10px] leading-3 lg:text-[15px] lg:leading-[22px] font-[700] text-headingColor  '>
  Waye Collins
</h4>
</div>






  </div>

</div>




</div>




  </div>
</div>
</section>
{/* ................features section end...................... */}
   
   {/* ...............our great Doctors.............. */}
   <section>
    <div className="container">
   <div className="xl:w-[470px] mx-auto">
  <h2 className='heading text-center'>
Our Greate doctors
  </h2>
<p className='text-center'>
  World-class care for everyone ,our health System offers unmatched,expert health care.
</p>
</div>

<DoctorList/>

 
   </div>
   </section>
   {/* ..................our great doctors end......... */}
    
    {/* ...........faq sectin.............. */}
                <section>
                  <div className="container mx-[80px]">
                    <div className=" flex justify-between gap-[50px] lg:gap-0">
            <div>
              <img className=' my-[100px] py-[100px] hidden md:block' src={faqImg} alt=''/>
            </div>
            <div className='w-full md:w-1/2  my-[150px]'>
              <h2 className='heading '>Most questions by our beloved patients</h2>
            <FaqList />
            </div>
                    </div>
                  </div>
                </section>
    {/* ..............faq section end............ */}
   
   {/* .............testimonia.............. */}
   <section>
    <div className="container">
      <div className="xl:w-[470px] mx-auto">
<h2 className='heading text-center'>
  What Our Patients says
</h2>
<p className='text-center'>
  World-class care for everyone.our health syestam offers unmatched.expert health care.
</p>
</div>
<Testimonial/>
</div>
   </section>
   
   {/* ...........testimonia end............... */}
    </>
  )
}

export default Home  