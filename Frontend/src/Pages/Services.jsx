import {services} from '../assests/Data/Services';
import ServicesCard from '../Components/Services/ServicesCard';


const Services = () => {
  return( 
    <section>
      <div className='container'>
<div className='grid grid-cols-1 md:grid-cols-2 lg:gap-[20px] lg:grid-cols-3 gap-5 lg:gap-[20px] mx-auto   mt-[30px] lg:mt-[55px]'>

{services.map((item,index)=>(
<ServicesCard item={item} index={index} key={index}/>

))}

</div>
</div>
    </section>
  );
};

export default Services