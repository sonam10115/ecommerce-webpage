import React from 'react'
import Title from './Title'
import { benefitItems } from '../constant/data.js'
import { RiArrowRightUpLine } from '@remixicon/react'

const Benifits = () => {
  return (
 <section className=".section">
    <div className="container">
        {/* title  */}
        <Title title="Benifits"
        text="loreemmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
        link="view all"/>

        {/* card wrapper  */}
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:mt-16'>
            {benefitItems.map(item => (
                // card
                <div className=' bg-white p-10 flex flex-col rounded-xl '>
                    {/* // icon */}
                    <div className='bg-orange-75 w-[55%] h-24 flex items-center justify-center mx-auto rounded-xl mb-7'>
                        <img src={item.icon} alt={item.title} width={64} height={64}  />
                    </div>
                    {/* content  */}
                    <div className='mb-4 text-center space-y-3.5 '>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </div>

                    {/* button  */}
                    <button className='mt-auto ml-auto border border-white-95 w-14 h-14 flrx items-center justify-center rounded-md text-orange-50 transition-colors hover:bg-orange-50 hover:text-white'>
                        <RiArrowRightUpLine size={26}  />
                    </button>




                </div>
            ))}
            
        </div>
    </div>
 </section>
  )
}

export default Benifits
