export const sections = [
	{
		number: '01',
		code: 'LIT / FRAGMENT',
		en: 'ESSAYS',
		zh: '随笔与碎片',
		note: '潮水留下的私人注脚',
		href: '/essays/',
		slug: 'essays',
		statement: '写下情绪、阅读、夜晚，以及没有必要证明有用的东西。',
	},
	{
		number: '02',
		code: 'SYS / COMPUTE',
		en: 'COMPUTING',
		zh: '计算机科学',
		note: '代码、系统与学习笔记',
		href: '/computing/',
		slug: 'computing',
		statement: '把复杂的知识重新讲清楚，也留下每一次真正理解的瞬间。',
	},
	{
		number: '03',
		code: 'CAMPUS / HITSZ',
		en: 'HITSZ',
		zh: '大学生活',
		note: '在哈工深生活与成长',
		href: '/hitsz/',
		slug: 'hitsz',
		statement: '课程、校园、踩坑和成长，组成一份仍在续写的生存记录。',
	},
	{
		number: '04',
		code: 'NEXT / ROUTE',
		en: 'ROADMAP',
		zh: '未来航线',
		note: '计划、复盘与正在发生',
		href: '/roadmap/',
		slug: 'roadmap',
		statement: '记录此刻想去的方向，也诚实保存后来改变方向的理由。',
	},
] as const;

export type SectionSlug = (typeof sections)[number]['slug'];

export function getSection(slug: string) {
	return sections.find((section) => section.slug === slug);
}
