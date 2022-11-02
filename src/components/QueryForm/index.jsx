import React, { useReducer,useEffect } from 'react'
import { Button, Checkbox, Form, Input, Row, Col, Select, DatePicker } from 'antd'
import 'antd/dist/antd.css'
import './index.less'
import FormTypes from '../../FormTypes'

const QueryForm = React.memo((props) => {
  console.log(props)
  const [form] = Form.useForm()

  // console.log(form)
  console.log(FormTypes)

  useEffect(() => {
    props.onChange?.(form)
  }, [form])

  const onFinish = (values) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const FormItemChildren = (val) => { 
    console.log(val)
    switch (val.type) {
      case 'input':
        return (
          <Form.Item label={val.label} name={val.name}>
            <Input></Input>
          </Form.Item>
        )
        break;
      case 'select':
        return (
          <Form.Item label={val.label} name={val.name}>
            <Select >
              {
                val.options ? val.options.map((item) => { 
                  return <Select.Option value={ item.value}>{item.label}</Select.Option>
                }) : null}
            </Select>
          </Form.Item>
        )
      case 'datePicker':
        return (
          <Form.Item label={val.label} name={val.name}>
            <DatePicker style={{width:'100%'}}></DatePicker>
          </Form.Item>
        )
      default:
        break;
    }
  }
  return (
    <div className="queryForm2">
      {/* ddd */}
      <Form
        name="basic"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelAlign="right"
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 17,
          // offset:5
        }}
        labelWrap
      >
        <Row gutter={24}>
          {props.queryData.length
            ? props.queryData.map((item) => {
                return (
                  <Col span={12} key={item.name}>
                    {FormItemChildren(item)}
                    
                  </Col>
                )
              })
            : null}
        </Row>
      </Form>
    </div>
  )
})
export default QueryForm
