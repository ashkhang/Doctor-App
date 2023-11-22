import DoctorCard from '../../Components/Doctors/DoctorCard'
import Testimonial from '../../Components/Services/Testimonial/Testimonial';
import { doctors } from '../../assests/Data/doctors';
const Doctors = () => {
  return (
    <>
  <section className='bg[#A89876]'>
<div className='container text-center'>
  <h2 className='heading '>Find a Doctor</h2>
<div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c ] rpunded-md flex items-center justify-between'>
<input 
type='search'
className='py-4 pl-4 bg-[#ABA98F] w-full focus:utline-none cursorpointer placeholder:text-textColor '
placeholder='search Doctor'
/>
<button  className='btn mt-0 rounded-[0px] rounded-r-md  bg-[#F6B08C]'>Search</button>
</div>
</div>
  </section>
  {/* .................................. */}

<section>
  <div className="container">
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
      {doctors.map(doctor => ( 
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  </div>
</section>
{/* ..................................... */}
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
   

  </>
  )
}

export default Doctors