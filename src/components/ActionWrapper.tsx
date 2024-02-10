'use client'

import { usePathname, useRouter } from 'next/navigation'

import Action from './Action'

const ACTIONS = [
  {
    id: 'home',
    href: '/',
    label: 'Join Now',
  },
  {
    id: 'service',
    href: '/service',
    label: 'Contact',
  },
  {
    id: 'contact',
    href: '/contact',
    label: 'Q & A',
  },
  {
    id: 'about',
    href: '/about',
    label: 'Term & Conditions',
  },
]

const ActionWrapper: React.FC = () => {
  const pathname = usePathname()
  const router = useRouter()

  const { id, label } = ACTIONS.find((action) => action.href === pathname) || {
    label: '',
    id: null,
  }

  const onAction = () => {
    if (id === 'home') {
      router.push('/service')
    } else if (id === 'service') {
      router.push('/contact')
    } else if (id === 'contact') {
      router.push('/faq')
    } else if (id === 'about') {
      router.push('/terms')
    }
  }

  return (
    label && (
      <Action className="" variant={'pageAction'} onClick={onAction}>
        {label}
      </Action>
    )
  )
}

export default ActionWrapper
