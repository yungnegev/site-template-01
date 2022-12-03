import { feedback } from "../constants"
import styles from "../style"
import FeedbackCard from "./FeedbackCard"

const Testimonials = () => {
  
  let $feedback = feedback.map((card, index) => {
    return(
      <FeedbackCard key={card.id} {...card}/>
    )
  })
  
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      {/* gradient */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
      {/* text (title & context) */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] ">
        <h1 className={styles.heading2}>
          What are people <br className="sm:block hidden" /> saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[520px]`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, esse
            voluptatum corrupti atque quaerat vero.
          </p>
        </div>
      </div>
      {/* card container */}
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] ">
        { $feedback }
      </div>
    </section>
  );
}

export default Testimonials