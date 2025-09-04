import React from 'react'
import Title from './Title'
import { benefitItems } from '../constant/data.js'

const Benifits = () => {
  return (
 <section>
    <div className="container">
        {/* title  */}
        <Title title="Benifits"
        text="loreemmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
        link="view all"/>

        {/* card wrapper  */}
        <div className="">
            {benefitItems.map(item => (
                // card
                <div className=' '>
                    {/* // icon */}
                    <div className=''>
                        <img src={item.icon} alt={item.title} width={64} height={64}  />
                    </div>
                    {/* content  */}
                    <div className=''>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </div>


                </div>
            ))}
            
        </div>
    </div>
 </section>
  )
}

export default Benifits
