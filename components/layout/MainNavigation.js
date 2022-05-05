import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import classes from './mainNavigation.module.css'

export default function MainNavigation() {
  return (
    <header className={classes.header}>
        <Link href={'/'}>
            <a>
                <Logo />
            </a>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link href={'/posts'}>Posts</Link>
                </li>
                <li>
                    <Link href={'/contact'}>Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
