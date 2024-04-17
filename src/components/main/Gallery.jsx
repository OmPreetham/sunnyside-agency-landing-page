export function Gallery({}) {
  return (
    <div className="gallery">
      <picture className="gallery__picture">
        <source
          srcSet="images/mobile/image-gallery-milkbottles.jpg"
          media="(max-width: 750px)"
        />
        <img
          className="gallery__image"
          src="images/desktop/image-gallery-milkbottles.jpg"
          alt="Milkbottle"
        />
      </picture>
      <picture className="gallery__picture">
        <source
          srcSet="images/mobile/image-gallery-orange.jpg"
          media="(max-width: 750px)"
        />
        <img
          className="gallery__image"
          src="images/desktop/image-gallery-orange.jpg"
          alt="Orange"
        />
      </picture>
      <picture className="gallery__picture">
        <source
          srcSet="images/mobile/image-gallery-cone.jpg"
          media="(max-width: 750px)"
        />
        <img
          className="gallery__image"
          src="images/desktop/image-gallery-cone.jpg"
          alt="Cone"
        />
      </picture>
      <picture className="gallery__picture">
        <source
          srcSet="images/mobile/image-gallery-sugarcubes.jpg"
          media="(max-width: 750px)"
        />
        <img
          className="gallery__image"
          src="images/desktop/image-gallery-sugarcubes.jpg"
          alt="Sugarcubes"
        />
      </picture>
    </div>
  )
}
