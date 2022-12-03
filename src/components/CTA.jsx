import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px]`}>
      {/* heading and text */}
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[520px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          assumenda ipsam aspernatur nesciunt itaque consequuntur vel eveniet
          ratione omnis sunt, voluptatibus distinctio, consequatur eos!
        </p>
      </div>
      {/* button */}
      <div>
        <Button className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`} styles={'rounded-[10px]'}/>
      </div>
    </section>
  );
}

export default CTA