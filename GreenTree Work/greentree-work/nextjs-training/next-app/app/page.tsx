
import Link from 'next/link'
import styles from './page.module.css'


export default function Home() {
  return (
    <>
      <h1>Hello World!</h1>
      <span>Click here to see <Link href="/user">UserPage</Link></span>
    </>
  )
}
