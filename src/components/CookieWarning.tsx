'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { useEffect, useState } from 'react'

import Action from './Action'
import Link from 'next/link'

const CookieWarning = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const handledCookie = localStorage.getItem('cookieAccepted')
    if (!handledCookie) {
      openCookieWarning()
    }
  }, [])

  const openCookieWarning = () => {
    localStorage.setItem('cookieAccepted', 'false')
    setOpen(true)
  }

  const handleAccept = () => {
    setOpen(false)
    localStorage.setItem('cookieAccepted', 'true')
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Our Cookie Policy</DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="text-muted-foreground">
            <p className="indent-16 text-justify">
              We use cookies to personalize your experience. By continuing to
              visit this website you agree to our use of cookies.
              <Link
                className="link"
                href={'https://help.ishiniwijesinge.com/cookies'}
              >
                Learn more.
              </Link>
            </p>
          </div>
        </DialogHeader>

        <DialogFooter>
          <Action
            onClick={() => handleAccept()}
            variant={'primary'}
            type="submit"
          >
            Accept
          </Action>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CookieWarning
