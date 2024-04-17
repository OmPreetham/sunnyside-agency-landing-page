export function Testimonials({}) {
  return (
    <section className="testimonials">
      <h4 className="testimonials__heading">Client testimonials</h4>
      <article className="testimonial">
        <div className="testimonnial__writer">
          <h5 className="testimonial__author">Emily R.</h5>
          <p className="testimonial__position">Marketing Director</p>
        </div>
        <p className="testimonial__description">
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </p>
        <img
          className="testimonial__image"
          src="images/image-emily.jpg"
          alt="Emily"
        />
      </article>
      <article className="testimonial">
        <div className="testimonnial__writer">
          <h5 className="testimonial__author">Thomas S.</h5>
          <p className="testimonial__position">Chief Operating Officer</p>
        </div>
        <p className="testimonial__description">
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
          success made it a satisfying and enjoyable experience.
        </p>
        <img
          className="testimonial__image"
          src="images/image-thomas.jpg"
          alt="Thomas"
        />
      </article>
      <article className="testimonial">
        <div className="testimonnial__writer">
          <h5 className="testimonial__author">Jennie F.</h5>
          <p className="testimonial__position">Business Owner</p>
        </div>
        <p className="testimonial__description">
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </p>
        <img
          className="testimonial__image"
          src="images/image-jennie.jpg"
          alt="Jennie"
        />
      </article>
    </section>
  )
}
