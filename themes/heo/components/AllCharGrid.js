import Link from 'next/link'

export default function AllCharGrid({ posts }) {
  // 按名称排序
  const sortedPosts = [...posts].sort((a, b) => {
    const nA = a.title?.toLowerCase() || ''
    const nB = b.title?.toLowerCase() || ''
    if (nA > nB) return 1
    if (nA < nB) return -1
    return 0
  })

  return (
    <section className="w-full py-8 px-4 md:px-10 mt-12">
      <h2 className="text-3xl text-center mb-10 font-normal">全部角色</h2>
      <div className="grid grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
        {sortedPosts && sortedPosts.length > 0 ? (
          sortedPosts.map(post => (
            <Link href={`/${post.slug}`} key={post.id}>
              <div className="cursor-pointer">
                <div className="border-2 border-black rounded-xl aspect-square overflow-hidden bg-white">
                  {post.pageCover ? (
                    <img 
                      src={post.pageCover} 
                      alt={post.title || '角色'}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-gray-400">
                      角色
                    </div>
                  )}
                </div>
                <p className="text-center mt-3 text-lg">
                  {post.title || '角色'}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400">暂无角色</div>
        )}
      </div>
    </section>
  )
}
