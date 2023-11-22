import { formateDate } from './../../Utils/FormateDate';


const DoctorAbout = () => {
  return (
    <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
            About of 
            <span className='text-irisBlueColor font-bold text-[24px leading-9]'>
                 Muhibur Rahman
            </span>
            </h3>
            <p className=''>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio enim tempora voluptate exercitationem molestiae, repellendus quae tempore laborum ex cupiditate cum minus reiciendis totam blanditiis repudiandae aliquam quasi hic impedit, voluptatibus deserunt. Quibusdam dolor, doloremque sequi recusandae ex quam pariatur amet cupiditate ipsa, quidem beatae quaerat laudantium? Et, dolor nesciunt.
            </p>
            <div/>
{/* ....................................... */}


            <div className='mt-12'>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
            <ul className='pt-4 md:p-5'>

<li className='flex flex-col sm:flex-row sm:justify-between sn:items-end md:gap-5 mb-[30px] '>
<div>
    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
        {formateDate('09-13-2014')} -  {formateDate('09-13-2014')}
    </span>
    <p className='text-[16px] leading-6 font-medium tet-textColor  '>PHD in Surgeon</p>
</div>
<p className='text-[14px] leading-5 font-medium tet-textColor  '>New Apolle Hospital,New York.</p>

</li>
<li className='flex flex-col sm:flex-row sm:justify-between sn:items-end md:gap-5 mb-[30px] '>
<div>
    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
    {formateDate('07-04-2010')} -  {formateDate('09-13-2014')}
    </span>
    <p className='text-[16px] leading-6 font-medium tet-textColor  '>PHD in Surgeon</p>
</div>
<p className='text-[14px] leading-5 font-medium tet-textColor  '>New Apolle Hospital,New York.</p>

</li>

            </ul>
            </div>
            {/* ................................. */}
    <div className='mt-12'>
    <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
        Experience
        </h3>

        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ee]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                {formateDate('07-04-2010')} -  {formateDate('09-13-2014')}
                </span>
                <p className='text-[16px] leading-6 font-medium tet-textColor  '>
                    Sr. Surgeon
                    </p>

                    <p className='text-[14px] leading-5 font-medium tet-textColor  '>
                        New Apolle Hospital,New York.
                        </p>


            </li>
        {/* ................. */}

        <li className='p-4 rounded bg-[#fff9ee]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                {formateDate('07-04-2010')} -  {formateDate('09-13-2014')}
                </span>
                <p className='text-[16px] leading-6 font-medium tet-textColor  '>
                    Sr. Surgeon
                    </p>

                    <p className='text-[14px] leading-5 font-medium tet-textColor  '>
                        New Apolle Hospital,New York.
                        </p>


            </li>

{/* ..................... */}
        </ul>
    </div>
    </div>
  )
}

export default DoctorAbout