// 仓库的主文件


import {createStore} from 'redux';
// 生成仓库

let store = createStore ((prevState, action) => {
  console.log(prevState);
  console.log(action);
  return prevState
})
