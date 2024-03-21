import { Link } from 'react-router-dom'
import s from './Logo.module.scss'

export const Logo = () => {
  return (
    <Link to={'/'} className={s.logo_link}>
      <div className={s.root}></div>
    </Link>
  )
}
