// themes/heo/index.js
// 这是主题的布局入口，不是首页内容

import { useGlobal } from '@lib/global'
import { siteConfig } from '@lib/config'
import RecentUpdateGrid from './components/RecentUpdateGrid'
import AllCharGrid from './components/AllCharGrid'

export default function ThemeLayout({ children, posts, ...props }) {
  const { themeConfig } = useGlobal()
  const CONFIG = siteConfig('heo', themeConfig)
  
  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航栏 - 从配置读取 */}
      {CONFIG.HERO_LAYOUT?.showSearch !== false && (
        <div className="py-10 flex justify-center">
          <input 
            placeholder="搜索角色..." 
            className="border-2 border-black w-[600px] sm:w-[90%] px-3 py-2 text-lg rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>
      )}
      
      {/* 最近更新区域 */}
      {CONFIG.HERO_LAYOUT?.showRecentUpdate !== false && (
        <RecentUpdateGrid posts={posts} />
      )}
      
      {/* 全部角色网格 */}
      {CONFIG.HERO_LAYOUT?.showAllChars !== false && (
        <AllCharGrid posts={posts} />
      )}
      
      {/* 其他内容 */}
      {children}
    </div>
  )
}
