export function Hero({}) {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">We are creatives</h1>
        <svg
          className="hero__arrow"
          width="36"
          height="114"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="#FFF"
            strokeWidth="6"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 3v100M3 95.484l15 15 15-15" />
          </g>
        </svg>
      </div>
      <picture className="hero__picture">
        <source
          srcSet="images/mobile/image-header.jpg"
          media="(max-width: 810px)"
        />
        <img
          className="hero__image"
          src="images/desktop/image-header.jpg"
          alt="Orange"
        />
      </picture>
    </section>
  )
}
