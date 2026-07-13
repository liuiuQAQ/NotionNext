import BLOG from '@/blog.config'
import { getAllPosts } from '@/lib/db/SiteDataApi'
import Layout from '@/layouts/layout'
import Hero from '@/themes/proxio/components/Hero'
import PostGrid from '@/themes/proxio/components/PostGrid'

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: { allPosts },
    revalidate: 60
  }
}

export default function Home({ allPosts }) {
  return (
    <Layout>
      <Hero />
      <PostGrid posts={allPosts} />
    </Layout>
  )
}
