// themes/heo/config.js

export const CONFIG = {
  // 主题基本信息
  id: 'heo',
  name: 'Heo 角色展示主题',
  description: '为角色卡片展示优化的英雄主题',
  
  // 主题特有配置（可被 blog.config.js 覆盖）
  HERO_LAYOUT: {
    showSearch: true,          // 是否显示搜索框
    showRecentUpdate: true,    // 是否显示最近更新区域  
    showAllChars: true,        // 是否显示全部角色
    gridColumns: 4,            // 网格列数：2/3/4/5
    postsPerPage: 20,          // 每页显示数量
  },
  
  // 颜色系统
  COLORS: {
    primary: '#FF6B35',        // 主色（橙色）
    secondary: '#1A1A2E',      // 深色背景
    background: '#FFFFFF',     // 背景色
    cardBg: '#F8F9FA',         // 卡片背景
    cardHover: '#FFFFFF',      // 卡片悬停
    textPrimary: '#1A1A2E',    // 主文字
    textSecondary: '#6B7280',  // 次要文字
  },
  
  // 字体
  FONTS: {
    heading: 'system-ui, -apple-system, sans-serif',
    body: 'system-ui, -apple-system, sans-serif',
  },
  
  // 角落工具
  FLOATING_BUTTONS: {
    showBackToTop: true,
    showComment: true,
    showDarkMode: true,
  }
}
