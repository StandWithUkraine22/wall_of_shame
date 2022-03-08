import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedIndustriesData } from '../lib/industries'
import Link from 'next/link'
import MyDate from '../components/date'
import Image from 'next/image'


export default function Home({ allIndustriesData }) {
  const columns = 5;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingLg}>
        Companies that continue operating with Russia
      </section>
      <section className={utilStyles.headingMd}>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allIndustriesData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
                <a className={utilStyles.link} href={`/industries/${id}`}>{title}</a>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allIndustriesData = getSortedIndustriesData()
  return {
    props: {
      allIndustriesData
    }
  }
}
