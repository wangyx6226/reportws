import PlayTotalDSP from '../views/page-A1-playtotaldsp/PlayTotalDSP'


export default [
  {
    path:'/main/:a1',
    name: 'A_Song_PlayTotalDSP',
    title:'A_Song_PlayTotalDSP',
    component: PlayTotalDSP
  },
  {
    path:'/main/:a2',
    name: 'A_Song_PlayDetailDSP',
    title:'A_Song_PlayDetailDSP',
    component: null
  },
]