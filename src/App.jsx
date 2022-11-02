// import { useState } from 'react'
import { Button, ConfigProvider } from 'antd'
import React, { useReducer } from 'react'
import './App.less'
import QueryForm from './components/QueryForm'
import store from './components/store'
import zhCN from 'antd/es/locale/zh_CN'
// import moment from 'moment'
// import 'moment/locale/zh_CN'
// moment.locale('zh_CN')
let queryDataRef = null
const App = React.memo(() => {
  const [state, dispatch] = useReducer(store.reducer, store.initialState)
  console.log('app', state)

  const querySearch = () => {
    console.log(queryDataRef.getFieldsValue())
    queryDataRef.getFieldsValue()
    console.log('我是搜索')
  }

  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <div className="query_header">
          <p>查询条件</p>
        </div>
        <div className="query_body">
          <QueryForm
            onChange={(val) => {
              console.log(val)
              return (queryDataRef = val)
            }}
            queryData={state.queryData}
          ></QueryForm>
        </div>
        <div className="query_button">
          <Button type="primary" onClick={querySearch}>
            查询
          </Button>
          <Button type="primary" onClick={querySearch}>
            搜索
          </Button>
        </div>
      </div>
    </ConfigProvider>
  )
})

export default App
