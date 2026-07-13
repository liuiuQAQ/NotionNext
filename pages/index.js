import RecentUpdateGrid from '@/themes/heo/components/RecentUpdateGrid'
import AllCharGrid from '@/themes/heo/components/AllCharGrid'

export default function Home({ allPosts }) {
  return (
    <main className="min-h-screen bg-white">
      {/* 顶部居中搜索框 */}
      <div className="py-10 flex justify-center">
        <input placeholder="搜索" className="border-2 border-black w-[600px] sm:w-[90%] px-3 py-2 text-lg" />
      </div>
      {/* 区块1：最近更新（按创建时间倒序） */}
      <RecentUpdateGrid posts={allPosts} />
      {/* 区块2：全部角色（按角色名字母A-Z排序） */}
      <AllCharGrid posts={allPosts} />
    </main>
  )
}
