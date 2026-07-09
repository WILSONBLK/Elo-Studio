'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './PageBack.module.css'

export default function PageBack({ label = 'Back', href }: { label?: string; href?: string }) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    if (!href) {
      e.preventDefault()
      router.back()
    }
  }

  return (
    <Link href={href ?? '/'} onClick={handleClick} className={styles.back}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12">
        <path d="M19 12H5M12 5l-7 7 7 7"/>
      </svg>
      {label}
    </Link>
  )
}
