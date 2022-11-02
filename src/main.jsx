
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.less'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 加上严格模式如果console.log()控制台会打印两次
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode> 
  <App />
)
