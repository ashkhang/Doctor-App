import {faqs}  from './../../assests/Data/Faqs'
import FaqItem from './FaqItem';

const FaqList = () => {
  return (
    <ul className='mt-[38px] a'>
        {faqs.map((item,index)=>(
        
<FaqItem item={item} key={index}/>
     
        ))}
        </ul>
  )
}

export default FaqList