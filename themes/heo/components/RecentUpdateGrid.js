import RecentUpdateGrid from '@/themes/heo/components/RecentUpdateGrid'
import AllCharGrid from '@/themes/heo/components/AllCharGrid'
import { latestPosts } from '@/lib/notion'

// 静态预渲染获取Notion数据，捕获读取异常
export async function getStaticProps() {
  let allPosts = []
  try {
    allPosts = await latestPosts()
  } catch (err) {
    console.error('Notion数据读取失败', err)
    allPosts = []
  }
  return {
    props: {
      allPosts
    },
    revalidate: 60
  }
}

export default function Home({ allPosts }) {
  return (
    <main className="min-h-screen bg-white">
      {/* 顶部搜索框 */}
      <div className="py-10 flex justify-center">
        <input placeholder="搜索" className="border-2 border-black w-[600px] sm:w-[90%] px-3 py-2 text-lg" />
      </div>
      {/* 两大角色区块 */}
      <RecentUpdateGrid posts={allPosts} />
      <AllCharGrid posts={allPosts} />
    </main>
  )
}
