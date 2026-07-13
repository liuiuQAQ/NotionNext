// themes/heo/index.js

import { useGlobal } from '@lib/global'
import RecentUpdateGrid from './components/RecentUpdateGrid'
import AllCharGrid from './components/AllCharGrid'

export default function ThemeLayout({ children, posts, ...props }) {
  const { themeConfig } = useGlobal()
  
  // 从配置中读取开关
  const showSearch = themeConfig?.HERO_LAYOUT?.showSearch !== false
  const showRecentUpdate = themeConfig?.HERO_LAYOUT?.showRecentUpdate !== false
  const showAllChars = themeConfig?.HERO_LAYOUT?.showAllChars !== false
  
  return (
    <div className="min-h-screen bg-white">
      {showSearch && (
        <div className="py-10 flex justify-center">
          <input 
            placeholder="搜索角色..." 
            className="border-2 border-black w-[600px] sm:w-[90%] px-3 py-2 text-lg rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>
      )}
      {showRecentUpdate && <RecentUpdateGrid posts={posts} />}
      {showAllChars && <AllCharGrid posts={posts} />}
      {children}
    </div>
  )
}
