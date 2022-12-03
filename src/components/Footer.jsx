import styles from "../style"
import { logo } from "../assets"
import { footerLinks, navLinks, socialMedia } from "../constants"

const Footer = () => {
  
  let $footerLinks = footerLinks.map((link, index) => {
    return (
      <div key={link.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
        <h4 className='mb-4 font-poppins font-medium text-[18px] leading-[27px] text-white'>
          {link.title}
        </h4>
        <ul>
          {link.links.map((li, index) => {
           return <li key={li.index} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-3`}>
                    {li.name}
                  </li>
          })}
        </ul>
      </div>
    )
  })
  
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        {/* logo and text */}
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="" className="w-[266px] h-[72px] object-contain"/>
          <p className={styles.paragraph + ' mt-4 max-w-[310px]'}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, accusamus?
          </p>
        </div>
        {/* links */}
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          { $footerLinks }
        </div>
      </div>
      {/* social media */}
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[gray]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          2021 LoremBank. All Rights Reserved.
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => {
            return(
              <img key={social.id}
                   src={social.icon}
                   alt={social.id}
                   className={`w-[21px] h-[21px] object-contain cursor-pointer hover:text-secondary ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}/>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Footer