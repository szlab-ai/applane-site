export const defaultLang = 'en' as const;

export const ui = {
  en: {
    'nav.features': 'Features', 'nav.support': 'Support', 'nav.privacy': 'Privacy',
    'hero.eyebrow': 'Application routing for macOS', 'hero.title': 'Put every app on the right route.',
    'hero.description': 'Choose which Mac apps use a proxy, a proxy chain, the system route, or no connection at all—without turning your whole Mac into one network profile.',
    'hero.status': 'In development', 'hero.statusNote': 'Built for macOS 14 and later. App Store release is being prepared.',
    'hero.primary': 'See how routing works', 'hero.secondary': 'Read the privacy policy',
    'hero.previewTitle': 'Product screenshots are coming next', 'hero.previewCopy': 'The site framework is ready. Verified AppLane captures will be added separately.',
    'route.kicker': 'One Mac. Different lanes.', 'route.heading': 'A clear decision for every connection.',
    'route.body': 'AppLane evaluates ordered rules using the source app, destination, and port. New connections follow the first matching rule.',
    'route.apps': 'Selected apps', 'route.rules': 'Ordered rules', 'route.direct': 'System route', 'route.block': 'Block', 'route.proxy': 'Proxy', 'route.chain': 'Proxy chain',
    'features.heading': 'Control the path. See the result.',
    'features.apps.title': 'Choose applications', 'features.apps.body': 'Add the apps you want to control. An empty configuration intercepts nothing.',
    'features.rules.title': 'Express precise policy', 'features.rules.body': 'Combine app identity, host patterns, IP ranges, and ports, then route through SOCKS or HTTP CONNECT endpoints and chains.',
    'features.connections.title': 'Inspect each outcome', 'features.connections.body': 'Review the destination, chosen route, state, traffic counters, and the rule explanation captured when a connection began.',
    'privacy.kicker': 'Private by construction', 'privacy.heading': 'Your configuration stays on your Mac.',
    'privacy.body': 'AppLane has no account, ads, analytics, tracking, telemetry, or developer data service. Configuration stays in the app sandbox and proxy credentials use the macOS Keychain.',
    'privacy.link': 'Read the full privacy policy',
    'limits.heading': 'Current compatibility', 'limits.body': 'TCP routing is the primary path. UDP support is limited to a single SOCKS5 hop with fixed IP destinations. DNS uses the system resolver, and this version does not provide continuous disconnection protection.',
    'limits.link': 'View setup and support details',
    'footer.opensource': 'Includes BaoLianDeng software under the MIT License.', 'footer.copyright': '© 2026 szlab', 'footer.contact': 'Contact',
  },
  zh: {
    'nav.features': '功能', 'nav.support': '支持', 'nav.privacy': '隐私',
    'hero.eyebrow': 'macOS 应用级网络分流', 'hero.title': '让每个应用，走对自己的路。',
    'hero.description': '分别决定哪些 Mac 应用使用代理、代理链、系统网络或阻止连接，无需把整台 Mac 绑定到同一种网络模式。',
    'hero.status': '开发中', 'hero.statusNote': '面向 macOS 14 及以上版本，正在准备 App Store 发布。',
    'hero.primary': '了解分流方式', 'hero.secondary': '查看隐私政策',
    'hero.previewTitle': '产品截图将在下一步加入', 'hero.previewCopy': '网站框架已经就绪，后续只使用经过核对的 AppLane 实际截图。',
    'route.kicker': '一台 Mac，多条通道', 'route.heading': '每个连接，都有清楚的去向。',
    'route.body': 'AppLane 根据来源应用、目标和端口依次检查规则，新连接采用第一条匹配规则。',
    'route.apps': '所选应用', 'route.rules': '有序规则', 'route.direct': '系统网络', 'route.block': '阻止', 'route.proxy': '代理', 'route.chain': '代理链',
    'features.heading': '控制通道，看清结果。',
    'features.apps.title': '选择应用', 'features.apps.body': '只添加需要控制的应用。空配置不会拦截任何流量。',
    'features.rules.title': '表达精确规则', 'features.rules.body': '组合应用身份、域名模式、IP 网段和端口，再选择 SOCKS、HTTP CONNECT 端点或代理链。',
    'features.connections.title': '检查每次命中', 'features.connections.body': '查看目标、所用通道、连接状态、流量计数，以及连接建立时保存的规则说明。',
    'privacy.kicker': '从架构上保护隐私', 'privacy.heading': '你的配置留在自己的 Mac 上。',
    'privacy.body': 'AppLane 没有账户、广告、分析、跟踪、遥测或开发者数据服务。配置保存在应用沙盒，代理凭据使用 macOS 钥匙串。',
    'privacy.link': '阅读完整隐私政策',
    'limits.heading': '当前兼容范围', 'limits.body': 'TCP 是当前主要分流路径。UDP 仅支持单个 SOCKS5 跳点和固定 IP 目标；DNS 使用系统解析，本版本也不提供持续断网保护。',
    'limits.link': '查看设置与支持说明',
    'footer.opensource': '包含 BaoLianDeng 的 MIT 许可软件。', 'footer.copyright': '© 2026 szlab', 'footer.contact': '联系',
  },
} as const;

export type Lang = keyof typeof ui;
export type TranslationKey = keyof typeof ui.en;
