import { Bag, Heart } from '@components/icons'
import Button from '@components/ui/Button'
import { useUI } from '@components/ui/context'
import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import { Avatar } from '@components/common'
import DropdownMenu from './DropdownMenu'
import s from './UserNav.module.css'

interface Props {
  className?: string
}

const UserNav: FC<Props> = ({ className }) => {
  const { toggleSidebar, closeSidebarIfPresent, openModal } = useUI()
  const isSignedIn = false

  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        <li className={s.item}>
          <Button
            className={s.item}
            variant="naked"
            onClick={toggleSidebar}
            aria-label="Cart"
          >
            <Bag />
            {/* {itemsCount > 0 && (
                <span className={s.bagCount}>{itemsCount}</span>
              )} */}
          </Button>
        </li>
        <li className={s.item}>
          <Link href="/wishlist">
            <a onClick={closeSidebarIfPresent} aria-label="Wishlist">
              <Heart />
            </a>
          </Link>
        </li>
        <li className={s.item}>
          {isSignedIn ? (
            <DropdownMenu />
          ) : (
            <button
              className={s.avatarButton}
              aria-label="Menu"
              onClick={() => openModal()}
            >
              <Avatar />
            </button>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default UserNav
