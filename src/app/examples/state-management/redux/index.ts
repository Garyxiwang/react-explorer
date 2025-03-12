// 导出 Redux 相关内容
export * from './store';
export * from './features/counter/counterSlice';

// 提供一个默认导出，方便使用
import { store } from './store';
export default store; 