import React from 'react'
import { Link } from 'react-router-dom'

import s from './Navigation.module.scss'

export const Navigation = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <Link to={'/shipping-payment'} className={s.link}>
          Доставка и оплата
        </Link>
      </li>
      <li className={s.item}>
        <Link to={'/contacts'} className={s.link}>
          Контакты
        </Link>
      </li>
      <li className={s.item}>
        <Link to={'/about'} className={s.link}>
          О компании
        </Link>
      </li>
      <li className={s.item}>
        <Link to={'/configuration'} className={s.link}>
          Конфигураторы
        </Link>
      </li>
    </ul>
  )
}
