// themes/heo/components/AllCharGrid.js

import Link from 'next/link'

export default function AllCharGrid({ posts }) {
  // 如果没有数据，显示提示
  if (!posts || !posts.length) {
    return (
      <section className="px-4 py-8 max-w-6xl mx-auto text-center text-gray-400">
        <p className="text-lg">暂无角色数据</p>
        <p className="text-sm">请在 Notion 数据库中添加角色信息</p>
      </section>
    )
  }

  // 按标题 A-Z 排序
  const sorted = [...posts].sort((a, b) => {
    const titleA = a.title || ''
    const titleB = b.title || ''
    return titleA.localeCompare(titleB)
  })

  return (
    <section className="px-4 py-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-orange-500 text-2xl">✦</span>
        全部角色
        <span className="text-sm font-normal text-gray-400 ml-2">
          ({sorted.length})
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
        {sorted.map((char) => (
          <Link key={char.id} href={`/post/${char.slug}`}>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
              {/* 封面图/头像 */}
              <div className="aspect-square bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center text-5xl overflow-hidden">
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

              {/* 内容 */}
              <div className="p-3">
                <h3 className="text-lg font-bold text-gray-900 truncate">
                  {char.title || '未命名角色'}
                </h3>

                {/* 标签 */}
                {char.tags && char.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {char.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                    {char.tags.length > 3 && (
                      <span className="text-xs text-gray-400">+{char.tags.length - 3}</span>
                    )}
                  </div>
                )}

                {/* 日期 */}
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
