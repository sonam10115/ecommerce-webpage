import React from 'react'
import Title from './Title'
import { coursesSecimgs } from '../constant/data'


const Courses = () => {
  return (
    <section className=''>
        <div className="container">
            {/* title  */}
            <Title title='Our Course' 
            text='lorem  is the name of th emaining ufll is the way to dfi ne the matire o of the na jsuhudhd ' 
            link='View All'/>
            

            {/* card wrapper */}
            <div className=''>
                {coursesSecimgs.map((item) => (
                    // card
                    <div className='' key={item.id}>
                        {/* img  */}
                        <div className=''>
                            <img src={item.img} alt={item.title} width={560} height={265} />
                        </div>
                        {/* content  */}
                        <div className=''>
                            {/* tags  */}
                            <div className=''>
                                {item.tags.map((tag,index) => (
                                    <span className='' key={index}>{tag.tag}</span>
                                ))}
                                <p className=''>{item.instructor}</p>
                            </div>
                            {/* meta data  */}
                            <div className=''></div>

                        </div>
                        {/* btn  */}
                        <button className=''></button>



                    </div>

                ))}
            </div>



        </div>
    </section>
  )
}

export default Courses
