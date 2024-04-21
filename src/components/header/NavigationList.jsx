export function NavigationList({}) {
  return (
    <ul className="navigation__list navigation__list--mobile">
      <li className="navigation__item">
        <a className="navigation__item__link" href="#">
          About
        </a>
      </li>
      <li className="navigation__item">
        <a className="navigation__item__link" href="#">
          Services
        </a>
      </li>
      <li className="navigation__item">
        <a className="navigation__item__link" href="#">
          Projects
        </a>
      </li>
      <li className="navigation__item">
        <a
          className="navigation__item__link navigation__item__link--contact"
          href="#"
        >
          Contact
        </a>
      </li>
    </ul>
  )
}
