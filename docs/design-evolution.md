# Tide：内容与连接，2026-10-15

## 本轮计划

保持首页入场、立绘和四宫格。补充文章检索、栏目筛选、RSS、关于、友链和 404；不虚构文章、友链或近期生活动态。

## 参考与取舍

- https://github.com/anthropics/skills/tree/main/skills/frontend-design ：先定视觉约束；标题排版和海洋主题优先。
- https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines ：检查标签、焦点、移动端、空状态、URL 筛选状态和减少动效。
- https://github.com/satnaing/astro-paper/wiki/Features ：搜索、RSS、草稿隔离和可访问导航。
- https://github.com/saicaca/fuwari ：个人博客栏目组织、阅读导航和订阅入口；不移植主题。

## 视觉规则

颜色：墨蓝 #020a28、深海 #03174d、海蓝 #075bb0、青 #5de1f4、纸白 #f5fbff、珊瑚 #ff6375。
标题沿用 Anton 与 Cormorant Garamond，正文沿用现有中文回退字体，元信息使用 IBM Plex Mono。
首页保持四宫格，底部增加功能入口。内页采用左对齐标题、宽阅读区域、斜切行动按钮；关于页用左右构图，移动端折叠为一列。

## 维护

- 友链：编辑 src/data/friends.ts 的 friends 数组。每条包含 name、url、description；url 使用 https。
- 关于：编辑 src/pages/about.astro。近期状态留待作者撰写，不生成虚构经历。
- 文章：src/content/blog，draft: true 仅本地预览；搜索和 RSS 始终排除草稿。
- 搜索：标题、摘要、标签；支持中文和 URL 参数 q / category。不声称支持正文全文检索。
- RSS：/rss.xml，由公开文章自动生成。

## 验收

构建成功；无文章时搜索、RSS 和友链仍可用；筛选保留 URL；可键盘导航；375px 无横向溢出；首页入场和返回逻辑保留。

### 本轮结果

2026-10-16：生产构建通过，10 个 HTML 页面；RSS 和 sitemap 排除草稿。浏览器验证中文/英文关键词与栏目组合筛选、重置 URL、友链复制成功。桌面关于页、375px 关于页和首页已截图复核。依赖兼容修复后 npm audit 为 0 项告警。
