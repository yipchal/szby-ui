// components/css/index.js
function importAll(r) {
    r.keys().forEach(r);
  }
  
  // 动态引入 components 目录下的所有 .scss 文件
  importAll(require.context('./components', true, /\.scss$/));
  