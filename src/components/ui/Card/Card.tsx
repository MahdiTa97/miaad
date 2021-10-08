import cn from 'classnames'
import React, { FC, ReactNode } from 'react'
import s from './Card.module.css'

interface CardProps {
  className?: string
  children?: ReactNode
  variant?: 'default' | 'custom'
  bgColor?: 'secondary' | 'primary' | 'base'
}

const Card: FC<CardProps> = (props) => {
  const {
    className,
    children,
    variant = 'default',
    bgColor = 'secondary',
  } = props
  const rootCn = cn(className, s[variant], s[`backgroundColor-${bgColor}`])
  return <div className={rootCn}>{children}</div>
}

export default Card
