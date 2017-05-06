# 一个利用Vue加Cnode官方api做的Cnode社区

在线地址:https://raszxcv.github.io/Cnode-fyyi/#/

* 实现的功能
 * 可以使用Acctoken登录账号,可以登出
 * 可以切换选项
 * 可以回帖
 * 可翻页
 * 适配移动端
 
 # 使用的技术
 
* Vue,Vue-router,axios,scss,webpack
 
* 期间遇到了点击主题后,跳转详情页传递主题ID的问题,经过查看官方文档可以使用动态路由来进行传参.还有非父子组件间传递数据问题,本来想使用Vuex,但是就为了传递一个数据而上未免太麻烦,所以根据官方文档的说明使用了一个空的Vue实例作为事件总栈,利用$on和$emit来进行数据传递.
