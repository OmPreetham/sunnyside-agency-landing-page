export function Features({}) {
  return (
    <div className="features-wrapper">
      <section className="feature">
        <div className="feature__content">
          <h3 className="feature__heading">Graphic design</h3>
          <p className="feature__description">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <picture className="feature__picture">
          <source
            srcSet="images/mobile/image-graphic-design.jpg"
            media="(max-width: 750px)"
          />
          <img
            className="feature__image"
            src="images/desktop/image-graphic-design.jpg"
            alt="Two Apples"
          />
        </picture>
      </section>
      <section className="feature">
        <div className="feature__content">
          <h3 className="feature__heading">Photography</h3>
          <p className="feature__description">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
        <picture className="feature__picture">
          <source
            srcSet="images/mobile/image-photography.jpg"
            media="(max-width: 750px)"
          />
          <img
            className="feature__image"
            src="images/desktop/image-photography.jpg"
            alt="Orange"
          />
        </picture>
      </section>
    </div>
  )
}
