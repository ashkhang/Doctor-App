import React,{useState} from 'react'
import signupImg from '../assests/images/Signup.gif' 
import avatar from '../assests/images/doctor-img01.png'
import {Link} from 'react-router-dom'
const Signup = () => {



  const [selectedFile,setSelectedFile]=useState(null)
  const [previewURL,setpreviewURL]=useState('')

  const [formData,setFormData] =useState({
   name:'',
    email :'',
    password:'',
    photo:'selectedFile',
    gender:'',
    role:'patient'
  });
  
  const handleInputChange = e=>{
    setFormData ({...formData,[e.target.name]:e.target.value})
  };


  const handleFileInputChange =async(event)=>{
const file =event.target.files[0];
// ..............later we will use cloudinaryy to upload photo......

console.log(file); 
}
  
  const submitHandler=async event =>
event.preventDefault



  return (
    <section className='px-5 xl:px-5'>
<div className='max-w-[1170px] mx-auto'>
<div className='grid grid-cols-1 lg:grid-cols-2'>
{/* ........img box......... */}

<div className='hiden lg:block bg-primaryColor rounded-l-lg'>
<figure className='rounded-l-lg'>
<img src={signupImg} alt='' className='w-full rounded-l-lg'/>
</figure> 
</div>
{/* .....................sign up form........... */}
<div className="rounded-l-lg lg:pl-16 py-10">
<h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 '>
  Create an
  <span className='text-primaryColor '>
    account
  </span>
</h3>
<form onSubmit={submitHandler}>
<div className='mb-5'>
<input 
type='text'
 placeholder=' Full Name'
  name='name'
   value={formData.name}
   onChange={handleInputChange}
    className='w-full  py-3 border-b border-solid border-[#0066ff61] focus-outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:texttextColor  cursor-pointer '
   required
   />
</div>
{/* .......... */}
<div className='mb-5'>
<input 
type='Email'
 placeholder='Enter Your Email'
  name='email'
  value={formData.email}
  onChange={handleFileInputChange}
   className='w-full  py-3 border-b border-solid border-[#0066ff61] focus-outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:texttextColor  cursor-pointer '
   required
   />
</div>
{/* ................... */}
<div className='mb-5'>
<input 
type='Password'
 placeholder='Enter your Password'
  name='password'
   value=""
    className='w-full  py-3 border-b border-solid border-[#0066ff61] focus-outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:texttextColor  cursor-pointer '
   required
   />
</div>
{/* ............... */}
<div className="mb-5 flex items-center justify-between">
<label htmlFor='' className='text-headingColor font-bold text-[16px]  leading-7'>
Gender:
<select 
name='gender'
className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
>
<option value=''>Select</option>
<option value='male'>Male</option>
<option value='female'>Female</option>
<option value='other'>Others</option>
</select>
</label>
</div>
{/* .................... */}
<div className='mb-5 items-center gap-3'>
<figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
<img  src={avatar} alt='' className='rounded-full w-full'/>
</figure>
{/* .............. */}
<div className='relative w-[130px] h-[50px]'>
<input
type='file'
name='photo'
id='customeFile'
onChange={handleInputChange}
accept='.jpg, .png'
className='absolute top-0 left-0 w-full opacity-0 cursor-pointer'
/>
<lable
 htmlFor='customeFile'
className='absolute top-3  left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'
>
Upload Photo
</lable>
</div>
</div>
{/* ..................... */}

<div className="mt-7">
<button
 type='submit'
  className='w-full bg-primaryColor  text-white text-[18px] leading-[30px] rounded-lg px-4 py-3  '
  >
  Sign Up
</button>
</div>


<p className='mt-5 text-textColor text-center'>
Already I Have an account?
<Link to="/register" className="text-primaryColor font-medium ml-1" >login</Link>
</p>

</form>
</div>
</div>
</div>
    </section>
  )
}

export default Signup