// pages/index.js

import RecentUpdateGrid from '@themes/heo/components/RecentUpdateGrid'
import AllCharGrid from '@themes/heo/components/AllCharGrid'
import { getAllPosts } from '@lib/db/SiteDataApi'

// ⚠️ 这个函数必须有！负责从 Notion 获取数据
export async function getStaticProps() {
  let allPosts = []
  try {
    allPosts = await getAllPosts()
  } catch (err) {
    console.error('读取Notion数据失败', err)
    allPosts = []
  }
  return {
    props: {
      allPosts
    },
    revalidate: 60  // 60秒后重新生成
  }
}

export default function Home({ allPosts }) {
  return (
    <main className="min-h-screen bg-white">
      {/* 顶部居中搜索框 */}
      <div className="py-10 flex justify-center">
        <input 
          placeholder="搜索" 
          className="border-2 border-black w-[600px] sm:w-[90%] px-3 py-2 text-lg rounded-lg focus:outline-none focus:border-orange-500" 
        />
      </div>

      {/* 区块1：最近更新（按创建时间倒序） */}
      <RecentUpdateGrid posts={allPosts} />

      {/* 区块2：全部角色（按角色名字A-Z排序） */}
      <AllCharGrid posts={allPosts} />
    </main>
  )
}
