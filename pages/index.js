import BLOG from '@/blog.config'
import { getAllPosts } from '@/lib/db/SiteDataApi'

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: {
      allPosts
    },
    revalidate: 60
  }
}

export default function Home({ allPosts }) {
  return null
}
