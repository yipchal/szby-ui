module.exports = {
    title: 'szby-ui',
    description: '深圳百应UI库',
    base: '/szby-ui/',
    themeConfig: {
        sidebar: [
            '/',
            '/componentsDocs/fastFirst',
            {
                title: '组件',
                path: '', // 组的路径
                collapsable: false, // 这个组不可折叠
                sidebarDepth: 0, // 显示到子标题的深度
                children: [
                    {
                        title: 'Basic',
                        path: '',
                        collapsable: false,
                        sidebarDepth: 0,
                        children: [
                            '/componentsDocs/components/card',
                            // '/componentsDocs/components/layout',
                            // '/componentsDocs/components/container',
                            // '/componentsDocs/components/color',
                            // '/componentsDocs/components/typography',
                            // '/componentsDocs/components/border',
                            // '/componentsDocs/components/icon',
                            // '/componentsDocs/components/button',
                            // '/componentsDocs/components/link',
                        ]
                    }
                ]
            }
        ],
        lastUpdated: 'Last Updated'
    },
    markdown: {
        lineNumbers: true // 代码块显示行号
    }
    //   themeConfig: {
    //     sidebar: 'auto',
    //     lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
    //   }
}
