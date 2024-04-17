export function Articles({}) {
  return (
    <div className="article-wrapper">
      <article className="article">
        <div className="article__content">
          <h2 className="article__heading">Transform your brand</h2>
          <p className="article__description">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="article__button">Learn More</button>
        </div>
        <picture className="article__picture">
          <source
            srcSet="images/mobile/image-transform.jpg"
            media="(max-width: 750px)"
          />
          <img
            className="article__image"
            src="images/desktop/image-transform.jpg"
            alt="Egg"
          />
        </picture>
      </article>
      <article className="article">
        <div className="article__content">
          <h2 className="article__heading">Stand out to the right audience</h2>
          <p className="article__description">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button className="article__button">Learn More</button>
        </div>
        <picture className="article__picture">
          <source
            srcSet="images/mobile/image-stand-out.jpg"
            media="(max-width: 750px)"
          />
          <img
            className="article__image"
            src="images/desktop/image-stand-out.jpg"
            alt="Glass"
          />
        </picture>
      </article>
    </div>
  )
}
