export function NavigationList({}) {
  return (
    <ul className="navigation__list navigation__list--mobile">
      <li className="navigation__item">
        <a className="navigation__link" href="#">
          About
        </a>
      </li>
      <li className="navigation__item">
        <a className="navigation__link" href="#">
          Services
        </a>
      </li>
      <li className="navigation__item">
        <a className="navigation__link" href="#">
          Projects
        </a>
      </li>
      <li className="navigation__item">
        <a className="navigation__link navigation__link--contact" href="#">
          Contact
        </a>
      </li>
    </ul>
  )
}
