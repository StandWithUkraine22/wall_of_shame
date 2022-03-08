import Layout from '../../components/layout'
import { getAllIndustriesIds, getIndustryData } from '../../lib/industries'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export default function Industry({ industryData }) {
  return (
    <Layout>
      <Head>
        <title>{industryData.title}
        </title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{industryData.title}  
        </h1>
        <div dangerouslySetInnerHTML={{ __html: industryData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllIndustriesIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const industryData = await getIndustryData(params.id)
  return {
    props: {
      industryData
    }
  }
}
