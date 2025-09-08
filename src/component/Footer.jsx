import React from 'react'
import { contactInfo, footerLists, socialIcons } from '../constant/data';
import { div, li } from 'framer-motion/client';

const Footer = () => {
  return (

    <footer className='pt-14 pb-8  bg-white'>
        <div className="container">
            {/* footer top   */}
            <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr'>
                {/* footer brand  */}
                <div className=''>
                    {/* footer logo  */}
                    <div className=''>
                        <img src="/images/logo.png" alt="footer " width={150 } height={50} />
                    </div>

                    {/* link  */}
                    <div className='mt-8 space-y-4'>
                        {contactInfo.map(item =>(
                            <a href="#" key={item.id} className='flex items-center gap-1.5 hover:text-orange-50
                             hover:underline transition-colors'>
                               { <item.icon />}
                               {item.label}

                                </a>
                        ))}
                    </div>

                </div>

                {/* footer lsit  */}
                {footerLists.map(item =>(
                    <div key={item.id} className='space-y-3'>
                        <p className='text-lg font-semibold'>{item.title}</p>
                        <ul className='space-y-2.5'>
                            {item.links.map((link,index) =>(
                                <li key={index}>
                                    <a href="#">{link.label}</a>
                                </li>

                            ))}
                        </ul>
                    </div>
                ))}

                     
                {/* social profile  */}
                <div className=''>
                    <p> social profiles </p>
                    <div>
                        {socialIcons.map(icon =>(
                            <button className=''>
                                <a href="">{<icon.icon />}</a>

                            </button>
                            
                        ))}
                    </div>
                </div>


            </div>
             {/* footer button  */}
             <p> &copy; Skillbridge. All rights reserved.</p>

        </div> 
    </footer>
    
    
  )
}

export default Footer;
