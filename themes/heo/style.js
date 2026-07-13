// themes/hero/style.js

export const STYLE = {
  // 全局样式（Tailwind 类名）
  global: {
    body: 'bg-white text-gray-900',
    container: 'max-w-6xl mx-auto px-4'
  },
  
  // 卡片样式
  card: {
    wrapper: 'bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all',
    title: 'text-lg font-bold text-gray-900',
    tags: 'text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full'
  },
  
  // 按钮样式
  button: {
    primary: 'bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors',
    secondary: 'bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors'
  }
}
