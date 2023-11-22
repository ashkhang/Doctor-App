import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assests/images/logo.png'
import {FaLinkedin,FaYoutube, FaGithub, FaInstagram} from 'react-icons/fa'
// import {RiLinkedinFill} from 'react-icons'
// import {AiFillYoutube,AiFillGithub} from 'react-icons/ai'


const socialLinks =[
  {
    Path: "http://www.youtubbe.com/c/CodingWithMuhib",
    icon: <FaYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    Path: "http://github.com/codingWithmuhib",
    icon: <FaGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    Path: "http://www.instagram.com/muhib160.official/",
    icon: <FaInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    Path: "http://www.linkedin.com/in/CodingWithmuhib",
    icon: <FaLinkedin className="group-hover:text-white w-4 h-5" />,
  },

]
const quickLinks01=[
  {
path:'/home',
display:"Home",
  },
  {
    path:'/',
    display:"About Us",
      }, 
      {
        path:'/services',
        display:"Services",
          }, 
          {
            path:'/',
            display:"Blog",
              },         
];
const quickLinks02=[
  {
path:'/find-a-doctor',
display:"Find a Doctor",
  },
  {
    path:'/',
    display:"Request An Appointement",
      }, 
      {
        path:'/',
        display:"Find a Location",
          }, 
          {
            path:'/',
            display:"Got a Opinion",
              },         
];
const quickLinks03=[
  {
path:'/',
display:"Donate",
  },
  {
    path:'/contact',
    display:"Contact Us",
      }, 
];





const Footer = () => {
const year =new Date().getFullYear()
  return (
<footer className='pt-5 pt-40 ' style={{ backgroundColor: '#AFDAF4'  }}>
  <div className='container'>
<div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
<div>
<img src={logo} alt=''/>
<p className='text-[16px] leading-7 font-[400] text-textColor mt-4 '>CopyRight 0 {year} developed by Muhibur Rahman all reserved</p>

<div className='flex items-center gap-3 mt-4'>
{socialLinks.map((link,index)=> <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>{link.icon}</Link>)}
</div>
</div>

<div>
  <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>Quick Links</h2>

< ul>
{quickLinks01.map((item,index) =>(
  <li key={index} className='mb-4'>
    <Link to={item.path}className='text-[16px] leading-7 font-[400]text-textColor'>{item.display}</Link>
  </li>
))}
</ul>
</div>

<div>
  <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>I Want to</h2>

< ul>
{quickLinks02.map((item,index) =>(
  <li key={index} className='mb-4'>
    <Link to={item.path}className='text-[16px] leading-7 font-[400]text-textColor'>{item.display}</Link>
  </li>
))}
</ul>
</div>
<div>
  <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>Support</h2>

< ul>
{quickLinks03.map((item,index) =>(
  <li key={index} className='mb-4'>
    <Link to={item.path}className='text-[16px] leading-7 font-[400]text-textColor'>{item.display}</Link>
  </li>
))}
</ul>
</div>
 





</div>
  </div>
</footer>
  )
}  

export default Footer