import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Runwang Guo",
  description: "vitepress-test",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    logo: 'logo/IMG_2476.JPG',
    nav: [
      { text: '主页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/front/': [
      {
        items: [
          { text: '阿里巴巴前端规约', link: '/front/guide' },
          { text: 'JavaScript 编码规约', link: '/front/javascript.zh' },
          { text: 'TypeScript 编码规约', link: '/front/typescript.zh' },
          { text: 'React 编码规约', link: '/front/react.zh' },
          { text: 'Node.js 开发规约', link: '/front/node.zh' },
          { text: 'CSS 编码规约', link: '/front/css.zh' },
          { text: 'HTML 编码规约', link: '/front/html.zh' },
        ]
      }
    ],
    '/engineering/': [
      {
        items: [
          { text: '阿里巴巴工程规约', link: '/engineering/guide' },
          { text: '更新日志规约', link: '/engineering/changelog.zh' },
          { text: '文档通用规约', link: '/engineering/writing.zh' },
          { text: 'Git 规约', link: '/engineering/git.zh' },
        ]
      }
    ], 
    '/backend/': [
      {
        items: [
          { text: '导航', link: '/backend/SUMMARY' },
          { text: '前言', link: '/backend/README' },
          { text: '一、编程规约', collapsed: false, items: [
            {text: '（一）命名风格', link: '/backend/编程规约/命名风格'}, 
            {text: '（二）常量定义', link: '/backend/编程规约/常量定义'},
            {text: '（三）代码格式', link: '/backend/编程规约/代码格式'},
            {text: '（四）OOP规范', link: '/backend/编程规约/OOP规范'},
            {text: '（五）集合处理', link: '/backend/编程规约/集合处理'},
            {text: '（六）并发处理', link: '/backend/编程规约/并发处理'},
            {text: '（七）控制语句', link: '/backend/编程规约/控制语句'},
            {text: '（八）注释规约', link: '/backend/编程规约/注释规约'},
          ]
        },
          { text: '二、异常日志', collapsed: false, items: [
            {text: '（一）异常处理', link: '/backend/异常日志/异常处理'}, 
            {text: '（二）日志规范', link: '/backend/异常日志/日志规范'},
            {text: '（三）其他', link: '/backend/异常日志/其他'},
          ]
        },
          { text: '三、单元测试', link: '/backend/单元测试' },
          { text: '四、安全规约', link: '/backend/安全规约' },
          { text: '五、MySQL数据库', collapsed: false, items: [
            {text: '（一）建表规约', link: '/backend/MySQL数据库/建表规约'}, 
            {text: '（二）索引规约', link: '/backend/MySQL数据库/索引规约'},
            {text: '（三）SQL语句', link: '/backend/MySQL数据库/SQL语句'},
            {text: '（四）ORM映射', link: '/backend/MySQL数据库/ORM映射'},
          ]
        },
        { text: '六、工程结构', collapsed: false, items: [
          {text: '（一）应用分层', link: '/backend/工程结构/应用分层'}, 
          {text: '（二）二方库依赖', link: '/backend/工程结构/二方库依赖'},
          {text: '（三）服务器', link: '/backend/工程结构/服务器'},
        ]
      },
        { text: '附1：版本历史', link: '/backend/版本历史' },
        { text: '附2：本手册专有名词', link: '/backend/本手册专有名词' },
        ]
      }
    ],        
  },
  
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Runwang Guo'
    },
    search: {
      provider: 'local'
    },
  }
})
