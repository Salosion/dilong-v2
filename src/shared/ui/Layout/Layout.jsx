import { Outlet } from 'react-router-dom'
import s from './Layout.module.scss'

export function Layout(props) {
  return (
    <div className={s.container}>
      {props.headerSlot}
      <Outlet />
      {props.footerSlot}
    </div>
  )
}
