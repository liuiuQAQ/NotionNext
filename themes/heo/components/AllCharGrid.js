// themes/hero/components/AllCharGrid.js

import Link from 'next/link'

export default function AllCharGrid({ posts }) {
  // 获取所有角色（你可以在这里添加筛选逻辑）
  const allChars = posts || []

  return (
    <section className="px-4 py-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-orange-500">✦</span> 全部角色
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {allChars.map(char => (
          <Link key={char.id} href={`/post/${char.slug}`}>
            <div className="border rounded-lg p-4 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 rounded-full mb-3 flex items-center justify-center text-4xl">
                {char.pageCover ? (
                  <img src={char.pageCover} alt={char.title} className="w-full h-full object-cover rounded-full" />
                ) : (
                  '👤'
                )}
              </div>
              <h3 className="font-bold text-center truncate">{char.title}</h3>
              <div className="flex flex-wrap gap-1 justify-center mt-2">
                {(char.tags || []).slice(0, 2).map(tag => (
                  <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
