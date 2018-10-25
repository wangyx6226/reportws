export default [
  {
    path: '/main/:A',
    component: '',
    id: 'A',
    name: 'A_Song_Table',
    iconCls:'el-icon-service',
    hidden: false,
    childrens: [
      {
        path: '/main',
        component: '',
        id: 'A1',
        name: 'A_Song_PlayTotalDSP',
        hidden: false,
        activeChannel: 'all'
      }, {
        path: '/main',
        component: '',
        id: 'A2',
        name: 'A_Song_PlayDetailDSP',
        hidden: false,
        activeChannel: 'all'
      }, {
        path: '/main',
        component: '',
        id: 'A3',
        name: 'A_Song_DigitalAlbum',
        hidden: false,
        activeChannel: 'all'
      }, {
        path: '/main',
        component: '',
        id: 'A4',
        name: 'A_Song_PlayType',
        hidden: false,
        activeChannel: 'all'
      }, {
        path: '/main',
        component: '',
        id: 'A5',
        name: 'A_Song_Marketshare',
        hidden: false,
        activeChannel: 'all'
      }, {
        path: '/main',
        component: '',
        id: 'A6',
        name: 'A_Song_SongPlayDetail',
        hidden: false,
        activeChannel: 'all'
      }, {
        path: '/main',
        component: '',
        id: 'A7',
        name: 'A_Song_UserOrderStatistics',
        hidden: false,
        activeChannel: 'all'
      }, {
        path: '/main',
        component: '',
        id: 'A8',
        name: 'A_Song_OrderPaymentMethod',
        hidden: false,
        activeChannel: 'all'
      }, {
        path: '/main',
        component: '',
        id: 'A9',
        name: 'A_Song_SongPlayTotal',
        hidden: false,
        activeChannel: 'all'
      }, {
        path: '/main',
        component: '',
        id: 'A10',
        name: 'A_Song_RegionalPlay',
        hidden: false,
        activeChannel: 'all'
      },
    ]
  }, 
  {
    path: '/main',
    component: '',
    id: 'B',
    name: 'B_OP_Table',
    iconCls:'el-icon-phone-outline',
    hidden: false,
    childrens: [
      {
        path: '/main',
        component: '',
        id: 'B1',
        name: 'B_OP_UVIP',
        hidden: false,
        activeChannel: 'all'
      },
    ]
  }

]