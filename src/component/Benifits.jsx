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
        <div className='grid gap-5 md:grid-cols-2'>
            {benefitItems.map(item => (
                // card
                <div className=' bg-white p-10 flex flex-col rounded-xl '>
                    {/* // icon */}
                    <div className=''>
                        <img src={item.icon} alt={item.title} width={64} height={64}  />
                    </div>
                    {/* content  */}
                    <div className=''>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </div>

                    {/* button  */}
                    <button>
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
