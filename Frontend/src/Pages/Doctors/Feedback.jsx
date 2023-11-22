import React, { useState } from 'react';
import avatar from '../../assests/images/avatar-icon.png';
import { formateDate } from '../../Utils/FormateDate';
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from './FeedbackForm';

const Feedback = () => {
  const [showFeedbackForm, setshowFeedbackForm] = useState(false);

  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
          All Reviews(272)
        </h4>

        <div className='flex justify-center gap-10 mb-[30px] '>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full '>
              <img className='w-full' src={avatar} alt='' />
            </figure>

            <div>
              <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
                Ali ahmed
              </h5>
              <p className='text-[16px] leading-6 text-textColor'>
                {formateDate('02-14-2023')}
              </p>
              <p className='mt-3 font-medium text-[15px] '>
                Good Services, highly recommended
              </p>
            </div>
          </div>

          <div className='flex gap-1'>
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color='#0067FF' />
            ))}
          </div>
        </div>
      </div>

      {!showFeedbackForm && (
        <div className='text-center'>
          <button
            onClick={() => setshowFeedbackForm(true)}
            className='btn'
          >
            Give feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
