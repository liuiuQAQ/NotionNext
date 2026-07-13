// themes/heo/index.js

import RecentUpdateGrid from './components/RecentUpdateGrid'
import AllCharGrid from './components/AllCharGrid'

export default function ThemeLayout({ children, posts, ...props }) {
  return (
    <div className="min-h-screen bg-white">
      {/* 顶部搜索栏 */}
      <div className="py-10 flex justify-center">
        <input
          placeholder="搜索角色..."
          className="border-2 border-black w-[600px] sm:w-[90%] px-3 py-2 text-lg rounded-lg focus:outline-none focus:border-orange-500"
        />
      </div>

      {/* 最近更新 */}
      <RecentUpdateGrid posts={posts} />

      {/* 全部角色 */}
      <AllCharGrid posts={posts} />

      {/* 子内容 */}
      {children}
    </div>
  )
}
