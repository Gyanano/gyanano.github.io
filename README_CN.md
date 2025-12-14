# Gyanano 个人作品集

一个极简风格的深色主题个人作品集网站，展示全栈开发与嵌入式系统工程项目。

[English](./README.md)

## 特性

- **流畅的页面过渡** - 使用 Framer Motion 实现优雅的进入/退出动画
- **交互式粒子背景** - 基于 Canvas 的粒子系统，响应鼠标移动
- **自定义光标** - 带有悬停效果的动画光标（仅桌面端）
- **响应式设计** - 移动端友好布局，自适应粒子数量
- **暗色美学** - 极简黑白主题，搭配 JetBrains Mono 字体

## 技术栈

- React 19
- TypeScript
- Vite
- Framer Motion
- React Router (HashRouter)
- Tailwind CSS (CDN)
- Lucide React 图标库

## 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装

```bash
# 克隆仓库
git clone https://github.com/gyanano/portfolio.git
cd portfolio

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

应用将在 `http://localhost:3000` 启动

### 构建

```bash
# 创建生产构建
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
├── index.html          # HTML 入口，包含 Tailwind 配置
├── index.tsx           # React 入口文件
├── App.tsx             # 主应用组件，包含路由
├── types.ts            # TypeScript 类型定义
├── components/
│   ├── BackgroundEffect.tsx   # 粒子画布动画
│   ├── CustomCursor.tsx       # 动画光标组件
│   ├── Navigation.tsx         # 顶部导航栏
│   └── SmoothTransition.tsx   # 页面过渡包装器
└── pages/
    ├── Home.tsx        # 首页
    ├── About.tsx       # 个人简介与技能页
    └── Projects.tsx    # 项目展示页
```

## 页面

| 路由 | 描述 |
|------|------|
| `/` | 首页 - 带动画排版的主视觉区 |
| `/about` | 简介 - 个人介绍与技能展示 |
| `/work` | 作品 - 精选项目展示 |

## 许可证

MIT

## 联系方式

- GitHub: [@gyanano](https://github.com/gyanano)
- 邮箱: gyanano@foxmail.com
