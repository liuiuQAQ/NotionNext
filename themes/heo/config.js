// themes/hero/config.js

export const CONFIG = {
  // 主题基本信息
  id: 'hero',
  name: 'Hero 主题',
  description: '展示角色卡片的英雄主题',
  
  // 主题特有的配置项
  HERO_LAYOUT: {
    showSearch: true,        // 是否显示搜索框
    showRecentUpdate: true,  // 是否显示最近更新区域
    showAllChars: true,      // 是否显示全部角色
    gridColumns: 4,          // 网格列数（2/3/4/5）
  },
  
  // 颜色配置
  COLORS: {
    primary: '#FF6B35',      // 主色调（橙色）
    secondary: '#1A1A2E',    // 次要色（深色）
    background: '#FFFFFF',   // 背景色
    cardBg: '#F8F9FA',       // 卡片背景
  }
}
