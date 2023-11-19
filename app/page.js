import Image from 'next/image'
import styles from './page.module.css'
import Page from '@/components/Page'
import CardComponent from '@/components/CardComponent'
import TableComponent from '@/components/TableComponent'
import SignIn from '@/components/SignIn'
import ChartComponent from '@/components/ChartComponent'

export default function Home() {
  return (
    <main className={styles.main}>
     <Page />
        <ChartComponent />
        <CardComponent/>
        <SignIn/>
        <TableComponent/>
    </main>
  )
}
