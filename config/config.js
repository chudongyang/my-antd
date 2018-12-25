// umi 的配置文件，也可以使用.umirc.js来作为配置文件

export default {
  singular: true, // 启用单数模式的目录
  plugins: [
    ['umi-plugin-react', {
      // 配置umi-plugin-react插件
    }]
  ],
  routes: [ // 配置式的路由，也可以使用约定式的路由，page文件夹下每个文件的名字就是路由
    {
      path: '/',
      component: './HelloWorld.js' // 是相对于page的相对路径
    },
    {
      path: '/counter',
      component: './counter.js'
    }
  ]
}