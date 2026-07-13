// themes/heo/components/AllCharGrid.js

import Link from 'next/link'
import { STYLE } from '../style'

export default function AllCharGrid({ posts, title = '全部角色' }) {
  const chars = posts || []
  
  if (!chars.length) {
    return (
      <section className="py-8 text-center text-gray-500">
        <p>暂无角色数据</p>
        <p className="text-sm">请在 Notion 中添加角色信息</p>
      </section>
    )
  }
  
  return (
    <section className="px-4 py-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-orange-500 text-2xl">✦</span>
        {title}
        <span className="text-sm font-normal text-gray-400 ml-2">
          ({chars.length})
        </span>
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
        {chars.map((char) => (
          <Link key={char.id} href={`/post/${char.slug}`}>
            <div className={STYLE.card.wrapper}>
              {/* 头像/封面 */}
              <div className="aspect-square bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center text-5xl">
                {char.pageCover ? (
                  <img 
                    src={char.pageCover} 
                    alt={char.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span>👤</span>
                )}
              </div>
              
              {/* 内容区 */}
              <div className="p-3">
                <h3 className={STYLE.card.title}>
                  {char.title || '未命名角色'}
                </h3>
                
                {/* 标签 */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {(char.tags || []).slice(0, 3).map((tag) => (
                    <span key={tag} className={STYLE.card.tags}>
                      #{tag}
                    </span>
                  ))}
                  {(char.tags || []).length > 3 && (
                    <span className="text-xs text-gray-400">+{char.tags.length - 3}</span>
                  )}
                </div>
                
                {/* 更新时间 */}
                {char.publishDate && (
                  <div className="text-xs text-gray-400 mt-2">
                    {char.publishDate}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
