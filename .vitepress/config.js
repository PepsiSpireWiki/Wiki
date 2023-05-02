import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// https://vitepress.dev/reference/default-theme-config

export default defineConfig({
    lang: 'en-CA',
    title: 'Pepsi Spire Wiki',
    description: 'A wiki about the mixture-focused soda fountain by PepsiCo.',

    base: '/',
    cleanUrls: true,
    lastUpdated: true,

    head: [
        [ 'meta', { name: 'theme-color', content: '#2e7ec9' } ],
        [ 'meta', { name: "og:image", content: "/spire_small.png"} ]
    ],

    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { 
                text: 'Information',
                items: [
                    { text: 'General Info', link: '/info/general' },
                    { text: 'Where to find', link: '/info/where-to-find' }
                ]
            },
            {
                text: 'Models',
                items: [
                    { text: 'Model List', link: '/models' },
                    { text: '1.1', link: '/models/1.1' },
                    { text: '2.0', link: '/models/2.0' },
                    { text: '3.0', link: '/models/3.0' },
                    { text: '4.1', link: '/models/4.1' },
                    { text: '4.2', link: '/models/4.2' },
                    { text: '5.0', link: '/models/5.0' }
                ]
            },
            {
                text: 'Menus',
                items: [
                    { text: 'User', link: '/menus/user' },
                    { text: 'Manager', link: '/menus/manager' },
                    { text: 'Other', link: '/menus/other' }
                ]
            },
            { text: 'Assets', link: '/assets' }
        ],

        sidebar: {
            '/info': [
                {
                  text: 'Information',
                  items: [
                        { text: 'General Info', link: '/info/general' },
                        { text: 'Timeline', link: '/info/timeline' },
                        { text: 'Where to find', link: '/info/where-to-find' },
                        { text: 'Official site (Archive)', link: '/info/archive' }
                  ]
                }
            ],
            '/models': [
                {
                    text: 'Models',
                    items: [
                        { text: 'Model List', link: '/models' },
                        { text: '1.1', link: '/models/1.1' },
                        { text: '2.0', link: '/models/2.0' },
                        { text: '3.0', link: '/models/3.0' },
                        { text: '4.1', link: '/models/4.1' },
                        { text: '4.2', link: '/models/4.2' },
                        { text: '5.0', link: '/models/5.0' },
                        { text: '6.0', link: '/models/6.0' }
                    ]
                }
            ],
            '/menus': [
                {
                    text: 'Menus',
                    items: [
                        { text: 'User', link: '/menus/user' },
                        { text: 'Manager', link: '/menus/manager' },
                        { text: 'Other', link: '/menus/other' }
                    ]
                }
            ],
            '/assets': [
                {
                    text: 'Assets',
                    items: [
                        { text: 'Social Media Assets', link: '/assets/social-media' },
                        { text: 'Promotional Assets', link: '/assets/promotional' },
                        { text: 'Development Assets', link: '/assets/development' },
                        { text: 'Internal Assets', link: '/assets/internal' }
                    ]
                }
            ]
        },

        socialLinks: [
            {
                icon: {
                    svg: '<svg viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg"><path d="M23.886 10.852a2.625 2.625 0 0 0-2.624-2.624 2.52 2.52 0 0 0-1.805.735c-1.784-1.28-4.26-2.12-6.99-2.225l1.197-5.604 3.883.818a1.87 1.87 0 0 0 3.736-.084C21.283.84 20.443 0 19.415 0c-.734 0-1.364.42-1.658 1.05L13.412.126c-.126-.021-.252 0-.357.063s-.168.168-.21.294l-1.322 6.255c-2.792.084-5.29.902-7.095 2.225a2.648 2.648 0 0 0-1.805-.735A2.625 2.625 0 0 0 0 10.852c0 1.07.63 1.973 1.553 2.393a4.912 4.912 0 0 0-.063.797c0 4.03 4.68 7.284 10.474 7.284 5.793 0 10.474-3.254 10.474-7.284 0-.272-.021-.524-.063-.776a2.716 2.716 0 0 0 1.511-2.414ZM5.94 12.72c0-1.028.84-1.868 1.868-1.868s1.868.84 1.868 1.868-.84 1.868-1.868 1.868-1.868-.84-1.868-1.868Zm10.432 4.933c-1.28 1.28-3.715 1.364-4.43 1.364-.713 0-3.169-.105-4.428-1.364a.494.494 0 0 1 0-.693.494.494 0 0 1 .693 0c.797.798 2.518 1.091 3.757 1.091 1.238 0 2.938-.293 3.757-1.091a.494.494 0 0 1 .693 0c.147.21.147.504-.042.693Zm-.336-3.065c-1.029 0-1.868-.84-1.868-1.868s.84-1.868 1.868-1.868 1.868.84 1.868 1.868-.84 1.868-1.868 1.868Z"/></svg>'
                },
                link: 'https://reddit.com/r/pepsispire'
            },
            {
                icon: 'discord',
                link: 'https://discord.gg/dew'
            }
        ],

        editLink: {
            pattern: 'https://github.com/pepsispirewiki/wiki/edit/main/:path',
            text: 'Improve this page'
        },

        footer: {
            message: 'Created with ❤️ in 🇨🇦',
            copyright: `© ${new Date().getFullYear() || '2023-present'} <a href="https://github.com/SoCuul">SoCuul</a> & <a href="https://github.com/PepsiSpireWiki/wiki/graphs/contributors">other contributors</a>`
        },

        i18nRouting: true,
        search: {
            provider: 'local'
        }
    }
})
