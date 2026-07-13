import AllCharGrid from '@themes/hero/components/AllCharGrid'
import { latestPosts } from '@lib/notion'

// getStaticProps 必须在组件外部
export async function getStaticProps() {
  let allPosts = []
  try {
    allPosts = await latestPosts()
  } catch (err) {
    console.error('Notion数据读取失败', err)
    allPosts = []
  }
  return {
    props: { allPosts },
    revalidate: 60
  }
}

// 组件定义
export default function Home({ allPosts }) {
  return (
    <main className="min-h-screen bg-white">
      <div className="py-10 flex justify-center">
        <input 
          placeholder="搜索" 
          className="border-2 border-black w-[600px] sm:w-[90%] px-3 py-2 text-lg" 
        />
      </div>
      <AllCharGrid posts={allPosts} />
    </main>
  )
}
