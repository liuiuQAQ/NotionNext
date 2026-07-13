// themes/heo/style.js

// 基础样式映射
export const STYLE = {
  // 卡片
  card: {
    wrapper: 'bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden',
    title: 'text-lg font-bold text-gray-900 line-clamp-1',
    description: 'text-sm text-gray-500 line-clamp-2 mt-1',
    tags: 'text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full',
    cover: 'w-full aspect-square object-cover bg-gray-100',
    footer: 'border-t border-gray-100 pt-3 mt-3 flex justify-between items-center',
  },
  
  // 按钮
  button: {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors',
    outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-lg transition-colors',
  },
  
  // 布局
  layout: {
    container: 'max-w-6xl mx-auto px-4 sm:px-6',
    section: 'py-8 md:py-12',
    grid: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6',
  },
  
  // 颜色
  colors: {
    primary: 'text-orange-500',
    primaryBg: 'bg-orange-50',
    secondary: 'text-gray-600',
    muted: 'text-gray-400',
  }
}
