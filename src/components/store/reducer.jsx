import action from "./type";
import FormTypes from "../../FormTypes";
const initialState = {
  queryData: [
    {
      label: '这是第first表单',
      name: 'first',
      type: FormTypes.INPUT,
    },
    {
      label: '这是第first2表单',
      name: 'first2',
      type: FormTypes.INPUT,
    },
    {
      label: '这是第second表单',
      name: 'second',
      type: FormTypes.INPUT,
    },
    {
      label: '这是第second2表单',
      name: 'second2',
      type: FormTypes.INPUT,
    },
    {
      label: '这是第third表单',
      name: 'third',
      type: FormTypes.INPUT,
    },
    {
      label: '这是第third3表单',
      name: 'third2',
      type: FormTypes.INPUT,
    },
    {
      label: '这是select3表单',
      name: 'select3',
      type: FormTypes.SELECT,
      options: [
        {
          value: 'apple',

          label: '苹果',
        },
        {
          value: 'car',
          label: '汽车',
        },
      ],
    },
    {
      label: '这是select4表单',
      name: 'select4',
      type: FormTypes.SELECT,
    },
    {
      label: '这是第select5表单',
      name: 'select5',
      type: FormTypes.SELECT,
    },
    {
      label: '这是第select6表单',
      name: 'select6',
      type: FormTypes.SELECT,
    },
    {
      label: '开始时间',
      name: 'datePicker',
      type: FormTypes.DATEPICKER,
    },
    {
      label: '结束时间',
      name: 'datePicker2',
      type: FormTypes.DATEPICKER,
    },
  ],
  formData: [
    {
      title: '基本信息',
      id: 'basic',
      data: [
        {
          label: '这是第first2表单',
          name: 'first2',
          type: FormTypes.INPUT,
        },
        {
          label: '这是select3表单',
          name: 'select3',
          type: FormTypes.SELECT,
        },
        {
          label: '这是select4表单',
          name: 'select4',
          type: FormTypes.SELECT,
        },
        {
          label: '这是第datePicker表单',
          name: 'datePicker',
          type: FormTypes.DATEPICKER,
        },
      ],
    },
    {
      title: '详细信息',
      id: 'info',
      data: [
        {
          label: '这是第first表单',
          name: 'first',
          type: FormTypes.INPUT,
        },
        {
          label: '这是第second表单',
          name: 'second',
          type: FormTypes.INPUT,
        },
      ],
    },
  ],
  dataSource: [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ],

  columns: [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ],
}
const reducer = (initialState, action) => {
  console.log(initialState,action)
  switch (action.TEST1) {
    case 'test1':
      console.log('test1')
      break;

    default:
      break;
  }
  return initialState
}
export  {reducer,initialState}