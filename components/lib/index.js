import '../css/index.js';

// 动态导入所有组件的 index.js 文件，排除当前的 index.js
const requireComponent = require.context(
    '.',
    true, // 是否递归查找子目录
    /^\.\/(?!index\.js$).*\/index\.js$/ // 匹配不包括当前 index.js 的其他 index.js 文件
  );
  
  const components = requireComponent.keys().map(fileName => {
    const componentConfig = requireComponent(fileName);
    // 兼容 ES6 和 CommonJS 模块
    const component = componentConfig.default || componentConfig;
    
    // 检查并确保组件具有 name 属性
    if (!component.name) {
      console.error(`Component at ${fileName} is missing a name property`);
      return null;
    }
    
    return component;
  }).filter(component => component !== null); // 过滤掉没有 name 属性的组件

const install = function(Vue) {
  if(install.installed) return
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...components
};
