// themes/hero/components/RecentUpdateGrid.js

export default function RecentUpdateGrid({ posts }) {
  // 按更新时间排序，取前6个
  const recentPosts = posts
    .sort((a, b) => new Date(b.publishDate || b.createdTime) - new Date(a.publishDate || a.createdTime))
    .slice(0, 6)

  return (
    <section className="px-4 py-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-orange-500">●</span> 最近更新
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recentPosts.map(post => (
          <div key={post.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-gray-100 rounded mb-3 flex items-center justify-center">
              {post.pageCover ? (
                <img src={post.pageCover} alt={post.title} className="w-full h-full object-cover rounded" />
              ) : (
                <span className="text-gray-400">📷</span>
              )}
            </div>
            <h3 className="font-medium truncate">{post.title}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {post.publishDate || post.createdTime?.split('T')[0] || '最近'}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
