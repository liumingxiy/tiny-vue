export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '通过 <code>type</code> 设置不同的类型 可选值：success | warning | info | error ，默认值：success。<br> 同时可通过 <code>default</code> 默认插槽自定义提示内容。',
        'en-US':
          'Set different types through <code>type</code>. The options are success | warning | info | error. The default value is success. <br/> You can customize the prompt content through the <code>default</code> slot. '
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      demoId: 'custom-close',
      name: {
        'zh-CN': '自定义关闭',
        'en-US': 'left right arrow'
      },
      desc: {
        'zh-CN': '<p>自定义关闭</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['custom-close.vue']
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': '自定义提示图标',
        'en-US': 'left right text'
      },
      desc: {
        'zh-CN': '<p>自定义提示图标</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['icon.vue']
    },
    {
      'demoId': 'center',
      'name': { 'zh-CN': '文字居中', 'en-US': 'Center text' },
      'desc': {
        'zh-CN': '<p>通过 <code>center</code> 属性可使文字显示居中。</p>\n',
        'en-US': '<p>You can use the <code>center</code> property to center the text. </p>\n'
      },
      'codeFiles': ['center.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '不同尺寸',
        'en-US': 'size'
      },
      desc: {
        'zh-CN': '<p>不同尺寸</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'target',
      name: {
        'zh-CN': '指定挂载节点',
        'en-US': 'Specify display node'
      },
      desc: {
        'zh-CN': '通过<code> target </code>属性绑定要挂载的容器ref值，实现自定义展示位置',
        'en-US': 'Specify display position'
      },
      codeFiles: ['target.vue']
    },
    {
      demoId: 'slot-default',
      name: {
        'zh-CN': '自定义提示内容',
        'en-US': 'slot-default'
      },
      desc: {
        'zh-CN': '<p>自定义提示内容</p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['slot-default.vue']
    }
  ],
  apis: [
    {
      name: 'alert', // 组件名称展示使用
      type: 'component', // API 类型
      properties: [
        {
          'name': 'center',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '文字是否居中', 'en-US': 'Whether the text is centered' },
          'demoId': 'center'
        },
        {
          name: 'closable',
          type: 'Boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '<p>设置警告是否可以关闭,该属性的默认值为 true</p>',
            'en-US': 'Is fixed top'
          },
          demoId: 'custom-close'
        },
        {
          name: 'close-text',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>关闭按钮自定义文本</p>',
            'en-US': 'Is show left arrow'
          },
          demoId: 'custom-close'
        },
        {
          name: 'description',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置警告的提示内容，默认为空</p>',
            'en-US': 'Is show right arrow'
          },
          demoId: 'custom-close'
        },
        {
          name: 'icon',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置警告的图标，默认会根据 type 值自动使用对应图标</p>',
            'en-US': 'Is show right text'
          },
          demoId: 'icon'
        },
        {
          name: 'size',
          type: 'String',
          defaultValue: 'normal',
          desc: {
            'zh-CN': '<p>设置警告的大小 normal/large， 缺省为 normal。</p>',
            'en-US': 'Is show left text'
          },
          demoId: 'size'
        },
        {
          name: 'target',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '挂载容器的ref值，通过该属性可以让组件展示在对应容器的顶部',
            'en-US':
              'Mounted container reference, this property allows the component to be displayed at the top of the corresponding container.'
          },
          demoId: 'target'
        },
        {
          name: 'type',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置警告的类型</p>',
            'en-US': 'set sub-title'
          },
          demoId: 'size'
        }
      ],
      events: [
        {
          name: 'close',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>关闭 alert 时触发的事件</p>',
            'en-US': 'Click'
          },
          demoId: 'custom-close'
        }
      ],
      slot: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>组件默认插槽</p>',
            'en-US': 'Click'
          },
          demoId: 'slot-default'
        }
      ]
    }
  ]
}
