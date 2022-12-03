import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'


const CardDeal = () => {
  return (
    <section className={layout.section}>
      {/* Text section */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in a few
          easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[520px] mt-5`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          voluptas adipisci similique tempore accusantium, error amet quod, nisi
          facere sint ea, accusamus minus commodi.
        </p>
        <Button styles={'mt-10 rounded-[10px]'}/>
      </div>
      {/* image section */}
      <div className={layout.sectionImg}>
        <img src={card} alt="" className='w-[100%] h-[100%] '/>
      </div>
    </section>
  );
}

export default CardDeal