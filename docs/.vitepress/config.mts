import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点级选项
  title: "FSYML", // 网站标题
  description: "A VitePress Site", // 网站描述

  // 主题级选项
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //logo
    // logo: '/logo.svg',
    //顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '竹楼', link: '/bamboo/' },
      { text: '书简湖', link: '/heartLake/' },
      { text: '倒悬山', link: '/theMountain/' }
    ],
    //侧边导航栏
    // sidebar: [
    //   {
    //     text: '竹楼',
    //     items: [
    //       { text: 'Linux基础', link: '/bamboo/linux_basic/' },
    //       { text: 'Oracle12基础', link: '/bamboo/oracle12_basic/' }
    //     ]
    //   },
    //   {
    //     text: '书简湖',
    //     items: [
    //       { text: '', link: '/markdown-examples' }
    //     ]
    //   },
    //   {
    //     text: '倒悬山',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' }
    //     ]
    //   }
    // ],
    //多侧边栏
    sidebar: {
      '/bamboo/': [
        {
          text: '竹楼',
          items: [
            { 
              text: 'Linux基础',
              collapsed: true,
              items: [
                { text: 'Linux命令总结', link: '/bamboo/linux_basic/linux-comand' }
                // { text: 'Linux操作总结', link: '/bamboo/linux_basic/' }
              ]
            },
            { 
              text: 'Oracle12基础',
              collapsed: true, 
              items: [
                { text: 'Oracle12命令总结', link: '/bamboo/oracle12_basic/'},
                // { text: 'Oracle12基础', link: '/bamboo/oracle12_basic/' }
              ] 
            }
          ]
        }
      ],
      '/heartLake/': [
        {
          text: '书简湖',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' }
          ]
        }
      ],
      '/theMountain/': [
        {
          text: '倒悬山',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' }
          ]
        }
      ]
    },
    //外链跳转
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
