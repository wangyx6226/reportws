
import Home from '@/views/Home'

/**
 * 播放与订单数据
 */
export let playdata =   {
  path: '/play',
  component: Home,
  id: 'A',
  name: 'A_Song_Table',
  iconCls:'el-icon-service',
  hidden: false,
  children: [
    {
      path: 'A1',
      component: () => import('@/views/playdata/A1'),
      id: 'A1',
      name: 'A_Song_PlayTotalDSP',
      hidden: false,
      chartType: ['line', 'pie', 'bar'],  
      activeChannel: 'all'
    }, {
      path: 'A2',
      component: () => import('@/views/playdata/A2'),
      id: 'A2',
      name: 'A_Song_PlayDetailDSP',
      hidden: false,
      activeChannel: 'all'
    }, 
    // {
    //   path: 'A3',
    //   component: () => import('@/views/playdata/A3'),
    //   id: 'A3',
    //   name: 'A_Song_DigitalAlbum',
    //   hidden: false,
    //   activeChannel: 'all'
    // }, {
    //   path: 'A4',
    //   component: () => import('@/views/playdata/A4'),
    //   id: 'A4',
    //   name: 'A_Song_PlayType',
    //   hidden: false,
    //   activeChannel: 'all'
    // }, {
    //   path: 'A5',
    //   component: () => import('@/views/playdata/A5'),
    //   id: 'A5',
    //   name: 'A_Song_Marketshare',
    //   hidden: false,
    //   activeChannel: 'all'
    // }, {
    //   path: 'A6',
    //   component: () => import('@/views/playdata/A6'),
    //   id: 'A6',
    //   name: 'A_Song_SongPlayDetail',
    //   hidden: false,
    //   activeChannel: 'all'
    // }, {
    //   path: 'A7',
    //   component: () => import('@/views/playdata/A7'),
    //   id: 'A7',
    //   name: 'A_Song_UserOrderStatistics',
    //   hidden: false,
    //   activeChannel: 'all'
    // }, {
    //   path: 'A8',
    //   component: () => import('@/views/playdata/A8'),
    //   id: 'A8',
    //   name: 'A_Song_OrderPaymentMethod',
    //   hidden: false,
    //   activeChannel: 'all'
    // }, {
    //   path: 'A9',
    //   component: () => import('@/views/playdata/A9'),
    //   id: 'A9',
    //   name: 'A_Song_SongPlayTotal',
    //   hidden: false,
    //   activeChannel: 'all'
    // }, {
    //   path: 'A10',
    //   component: () => import('@/views/playdata/A10'),
    //   id: 'A10',
    //   name: 'A_Song_RegionalPlay',
    //   hidden: false,
    //   activeChannel: 'all'
    // },
  ]
}

/** 
 * 运营数据统计
*/
export let operation = {
  path: '/operation',
  component: Home,
  id: 'B',
  name: 'B_OP_Table',
  iconCls:'el-icon-phone-outline',
  hidden: false,
  children: [
    {
      path: 'B1',
      // component: () => import('@/view/operation/B1'),
      id: 'B1',
      name: 'B_OP_UVIP',
      hidden: false,
      activeChannel: 'all'
    },
  ]
}

export default [playdata, operation]
// export default [
//   {
//     path: '/main/:A',
//     component: '',
//     id: 'A',
//     name: 'A_Song_Table',
//     iconCls:'el-icon-service',
//     hidden: false,
//     childrens: [
//       {
//         path: '/main',
//         component: '',
//         id: 'A1',
//         name: 'A_Song_PlayTotalDSP',
//         hidden: false,
//         chartType: ['line', 'pie', 'bar'],  
//         activeChannel: 'all'
//       }, {
//         path: '/main',
//         component: '',
//         id: 'A2',
//         name: 'A_Song_PlayDetailDSP',
//         hidden: false,
//         activeChannel: 'all'
//       }, {
//         path: '/main',
//         component: '',
//         id: 'A3',
//         name: 'A_Song_DigitalAlbum',
//         hidden: false,
//         activeChannel: 'all'
//       }, {
//         path: '/main',
//         component: '',
//         id: 'A4',
//         name: 'A_Song_PlayType',
//         hidden: false,
//         activeChannel: 'all'
//       }, {
//         path: '/main',
//         component: '',
//         id: 'A5',
//         name: 'A_Song_Marketshare',
//         hidden: false,
//         activeChannel: 'all'
//       }, {
//         path: '/main',
//         component: '',
//         id: 'A6',
//         name: 'A_Song_SongPlayDetail',
//         hidden: false,
//         activeChannel: 'all'
//       }, {
//         path: '/main',
//         component: '',
//         id: 'A7',
//         name: 'A_Song_UserOrderStatistics',
//         hidden: false,
//         activeChannel: 'all'
//       }, {
//         path: '/main',
//         component: '',
//         id: 'A8',
//         name: 'A_Song_OrderPaymentMethod',
//         hidden: false,
//         activeChannel: 'all'
//       }, {
//         path: '/main',
//         component: '',
//         id: 'A9',
//         name: 'A_Song_SongPlayTotal',
//         hidden: false,
//         activeChannel: 'all'
//       }, {
//         path: '/main',
//         component: '',
//         id: 'A10',
//         name: 'A_Song_RegionalPlay',
//         hidden: false,
//         activeChannel: 'all'
//       },
//     ]
//   }, 
//   {
//     path: '/main',
//     component: '',
//     id: 'B',
//     name: 'B_OP_Table',
//     iconCls:'el-icon-phone-outline',
//     hidden: false,
//     childrens: [
//       {
//         path: '/main',
//         component: '',
//         id: 'B1',
//         name: 'B_OP_UVIP',
//         hidden: false,
//         activeChannel: 'all'
//       },
//     ]
//   }

// ]