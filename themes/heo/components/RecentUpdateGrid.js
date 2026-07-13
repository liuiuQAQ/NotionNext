import Link from 'next/link'
export default function RecentUpdateGrid({ posts }) {
  const sortedByTime = [...posts].sort((a,b)=>new Date(b.createdTime)-new Date(a.createdTime))
  return (
    <section className="w-full py-8 px-4 md:px-10">
      <h2 className="text-3xl text-center mb-10 font-normal">最近更新</h2>
      <div className="grid grid-cols-6 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-6">
        {sortedByTime.map(post=>(
          <Link href={`/${post.slug}`} key={post.id}>
            <div className="border-2 border-black rounded-xl aspect-square overflow-hidden bg-white">
              {post.pageCover ? <img src={post.pageCover} className="w-full h-full object-cover"/> : <div className="flex h-full items-center justify-center text-gray-400">角色</div>}
            </div>
            <p className="text-center mt-3 text-lg">角色</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
