import COLOR_TYPE from '@Constant/colorType';

const {
  season: { spring, summer, autumn, winter },
  type: { warm, cool, bright, mute, light, deep },
} = COLOR_TYPE;

const color = [
  {
    season: spring,
    type: bright,
    color: [
      '#F8F7D9',
      '#F9E22D',
      '#FDD274',
      '#FECC2D',
      '#FCB937',
      '#FBAA69',
      '#F58538',
      '#F58D72',
      '#D83C39',
      '#DF3252',
      '#BE539F',
      '#A57FBA',
      '#8954A0',
      '#854399',
      '#225B8E',
      '#1881A4',
      '#1D89B1',
      '#1C90AF',
      '#1EA59F',
      '#78C5D5',
      '#CDDA3F',
      '#A56838',
      '#BC5E39',
      '#624F40',
      '#4C4244',
    ],
  },
  {
    season: spring,
    type: warm,
    color: [
      '#F9E22D',
      '#FDD274',
      '#FECC2D',
      '#FDBA38',
      '#EBB433',
      '#D1C33B',
      '#C1D442',
      '#A9C24C',
      '#A7AF44',
      '#76A95A',
      '#71C051',
      '#209F54',
      '#1EA5A0',
      '#4DC3CC',
      '#74C7B8',
      '#9696CA',
      '#8954A0',
      '#D83B3B',
      '#B26F5C',
      '#E95644',
      '#A56838',
      '#F58538',
      '#F49139',
      '#F8AC69',
      '#F6A18B',
    ],
  },
  {
    season: spring,
    type: light,
    color: [
      '#F8F7D9',
      '#EEEB9E',
      '#F4E1A5',
      '#F6CDAB',
      '#FDC9A0',
      '#D7E59E',
      '#D0DEBC',
      '#A6D9D2',
      '#A6DBEB',
      '#9CCBEB',
      '#C3B4D7',
      '#CDA8D0',
      '#FADC6C',
      '#C8C7A9',
      '#D1BD8E',
      '#D7B590',
      '#F8AC69',
      '#CAA07E',
      '#BFA596',
      '#F58D72',
      '#F7A991',
      '#9696CA',
      '#4DC3CC',
      '#74C7B8',
      '#71C051',
    ],
  },

  {
    season: summer,
    type: light,
    color: [
      '#c6dce9',
      '#9cd6ea',
      '#9dcfee',
      '#bacae3',
      '#eeb5cd',
      '#d49fc9',
      '#c7bfb6',
      '#d1b7aa',
      '#a69887',
      '#f27a9c',
      '#f284b4',
      '#ce95bb',
      '#ac98c9',
      '#999ac9',
      '#6c8cbb',
      '#85888d',
      '#b370ad',
      '#9e66a9',
      '#61778f',
      '#497095',
      '#9fbad6',
      '#74c7ec',
      '#61c5e9',
      '#77c9b7',
      '#55bd80',
    ],
  },
  {
    season: summer,
    type: cool,
    color: [
      '#f098c1',
      '#bdbec0',
      '#c5a6ab',
      '#f283b4',
      '#d07fb7',
      '#b370ac',
      '#a47daa',
      '#85888d',
      '#21a77b',
      '#1bb3bb',
      '#1cace1',
      '#2dbdb4',
      '#61778f',
      '#307bbc',
      '#7c6ab0',
      '#8c559f',
      '#944291',
      '#af3463',
      '#c0344d',
      '#e7317e',
      '#ef68a5',
      '#257b87',
      '#257668',
      '#535459',
      '#2d415e',
    ],
  },
  {
    season: summer,
    type: mute,
    color: [
      '#f3bfcb',
      '#f9a4b8',
      '#9dcfee',
      '#77c9b7',
      '#a0b38d',
      '#a69887',
      '#c5a6ab',
      '#d795ad',
      '#eadba5',
      '#85888d',
      '#a37cac',
      '#9e66a9',
      '#a56298',
      '#8b6b80',
      '#7f7094',
      '#61778f',
      '#6588aa',
      '#7da2b7',
      '#9fbad6',
      '#74c7ec',
      '#aaa5c4',
      '#999ac9',
      '#1e9fa8',
      '#535459',
      '#ac4877',
    ],
  },

  {
    season: autumn,
    type: mute,
    color: [
      '#f5e2a5',
      '#fbd59e',
      '#e0d3ab',
      '#bcc697',
      '#a7ad87',
      '#a39d61',
      '#8c956b',
      '#987e65',
      '#de8a57',
      '#c77567',
      '#977260',
      '#986842',
      '#c45a40',
      '#825746',
      '#59514c',
      '#537d81',
      '#598375',
      '#3a825d',
      '#72c8bb',
      '#ceaa8c',
      '#f9ad6a',
      '#cda459',
      '#b88558',
      '#cda459',
      '#dbb792',
    ],
  },
  {
    season: autumn,
    type: warm,
    color: [
      '#fecc2d',
      '#b6ac3d',
      '#b89e47',
      '#a29c60',
      '#919a49',
      '#678247',
      '#7c7660',
      '#9f783b',
      '#a66838',
      '#996541',
      '#9c5238',
      '#7d5545',
      '#994138',
      '#624f3e',
      '#c5683e',
      '#e85743',
      '#f07838',
      '#f39041',
      '#d39c42',
      '#6fc8ba',
      '#34bcb1',
      '#219f54',
      '#1d7b8f',
      '#226e47',
      '#2d624e',
    ],
  },
  {
    season: autumn,
    type: deep,
    color: [
      '#c1d542',
      '#d9ab3a',
      '#cc713a',
      '#bf6d34',
      '#bb5b3b',
      '#dc5644',
      '#7d5544',
      '#984138',
      '#655748',
      '#624f3e',
      '#616845',
      '#708644',
      '#219f54',
      '#1ea1af',
      '#1d89b1',
      '#1881a7',
      '#1c7a85',
      '#1f5f7b',
      '#87569f',
      '#8a315f',
      '#654045',
      '#7e3639',
      '#603b89',
      '#9f783b',
      '#1e5e55',
    ],
  },

  {
    season: winter,
    type: deep,
    color: [
      '#ffffff',
      '#bbc4e2',
      '#1d9bd1',
      '#3686ce',
      '#1683a1',
      '#246385',
      '#2d62ac',
      '#2c558b',
      '#87429c',
      '#8955a0',
      '#b14c9f',
      '#d72f86',
      '#e12c75',
      '#cd3247',
      '#a8366c',
      '#9a366e',
      '#8a3161',
      '#603b86',
      '#159b80',
      '#219f56',
      '#1b5f51',
      '#364179',
      '#343969',
      '#3a322d',
      '#2d2e31',
    ],
  },
  {
    season: winter,
    type: cool,
    color: [
      '#ffffff',
      '#99d6ed',
      '#f5e29b',
      '#e896be',
      '#5fc9e5',
      '#a0b7d3',
      '#2ea2dc',
      '#7f888b',
      '#189c7d',
      '#1db2bb',
      '#2485bd',
      '#3587cd',
      '#3876b8',
      '#3260ae',
      '#2c5589',
      '#52525c',
      '#89419b',
      '#8955a0',
      '#b44c9d',
      '#d93086',
      '#e22c73',
      '#cd3248',
      '#a9346e',
      '#8d305f',
      '#2d2e31',
    ],
  },
  {
    season: winter,
    type: bright,
    color: [
      '#ffffff',
      '#c5d7e7',
      '#eb96bf',
      '#2fa1dc',
      '#2399cf',
      '#188ab4',
      '#3587ca',
      '#2d7bbe',
      '#3260b0',
      '#2c5589',
      '#304f9f',
      '#364a9b',
      '#863c94',
      '#a3368f',
      '#a8366c',
      '#c23386',
      '#da2c8c',
      '#e22c74',
      '#e23254',
      '#cb3447',
      '#b54c9e',
      '#8d53a0',
      '#19997f',
      '#215d53',
      '#2d2e31',
    ],
  },
];

export default color;