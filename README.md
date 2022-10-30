# Error-monitor-for-frontend

主要借助两个Event进行捕获错误，`error` 和 `unhandledrejection`。

1. `window.error`

   ```
   该事件可以捕获到的情况有以下几种：
   1. 运行时的错误
   2. 异步错误
   
   不可以捕获到的情况：
   1. 语法错误
   2. 资源加载错误
   ```

2. `window.addEventListener('error', callback, true)`

   ```
   资源加载失败是无法往上冒泡的，采取捕获的形式进行捕获错误。
   同时这种方式可以捕获到window.error能捕获到的情况。
   ```

3. `unhandledrejection`

   ```
   该事件可以捕获到的错误请求如下：
   1. 常规的Promise错误
   2. async 错误
   3. import chunk 错误
   ```



小结：

1. promise无法被try/catch捕获。
2. 跨域脚本错误（script . error）情况下使用try/catch进行抛出具体错误。