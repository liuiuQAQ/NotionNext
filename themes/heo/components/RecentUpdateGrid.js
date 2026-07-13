// themes/heo/components/RecentUpdateGrid.js

import Link from 'next/link'
import { STYLE } from '../style'

export default function RecentUpdateGrid({ posts, limit = 6 }) {
  if (!posts || !posts.length) return null
  
  // 按最近更新排序（优先用 publishDate，没有则用 createdTime）
  const sorted = [...posts]
    .sort((a, b) => {
      const dateA = a.publishDate || a.createdTime || '1970-01-01'
      const dateB = b.publishDate || b.createdTime || '1970-01-01'
      return new Date(dateB) - new Date(dateA)
    })
    .slice(0, limit)
  
  if (!sorted.length) return null
  
  return (
    <section className="px-4 py-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-orange-500 text-2xl">●</span>
        最近更新
        <span className="text-sm font-normal text-gray-400 ml-2">
          (最新 {sorted.length} 个)
        </span>
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {sorted.map((post) => (
          <Link key={post.id} href={`/post/${post.slug}`}>
            <div className="bg-white border border-gray-100 rounded-lg p-3 hover:shadow-lg transition-shadow hover:border-orange-200">
              <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center text-3xl mb-2 overflow-hidden">
                {post.pageCover ? (
                  <img 
                    src={post.pageCover} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  '📦'
                )}
              </div>
              <h3 className="font-medium text-sm truncate">
                {post.title || '未命名'}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {post.publishDate || post.createdTime?.split('T')[0] || '最近'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
