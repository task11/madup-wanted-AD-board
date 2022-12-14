export const BANNER_LIST = [
  {
    id: 1,
    title: 'ROAS',
    name: 'roas'
  },
  {
    id: 2,
    title: '광고비',
    name: 'cost'
  },
  {
    id: 3,
    title: '노출 수',
    name: 'imp'
  },
  {
    id: 4,
    title: '클릭 수',
    name: 'click'
  },
  {
    id: 5,
    title: '전환 수',
    name: 'cov'
  },
  {
    id: 6,
    title: '매출',
    name: 'amount'
  }
];

export const SERVICE_LIST = [
  {
    id: 1,
    name: '매드업'
  },
  {
    id: 2,
    name: '김정맨'
  }
];

export const DATE_LIST = [
  {
    id: 1,
    name: '주간'
  },
  {
    id: 2,
    name: '야간'
  }
];

export const PROGRESS = [
  {
    id: 1,
    status: 'all',
    title: '전체 광고'
  },
  {
    id: 2,
    status: 'active',
    title: '진행중'
  },
  {
    id: 3,
    status: 'ended',
    title: '중단됨'
  }
];

export const AD_LIST = [
  {
    id: 1,
    adType: 'web',
    title: '매드업 레버 광고 1234',
    budget: 500000,
    status: 'active',
    startDate: '2020-10-19T00:00:00',
    endDate: null,
    report: {
      cost: 267144117,
      convValue: 1157942685,
      roas: 433
    }
  },
  {
    id: 2,
    adType: 'web',
    title: '매드업 레버 광고 12345',
    budget: 200000,
    status: 'ended',
    startDate: '2021-01-22T00:00:00',
    endDate: '2021-12-21T23:59:59',
    report: {
      cost: 169837362,
      convValue: 745438798,
      roas: 438
    }
  },
  {
    id: 3,
    adType: 'web',
    title: '원티드 레버 광고 1234',
    budget: 150000,
    status: 'active',
    startDate: '2022-01-01T00:00:00',
    endDate: null,
    report: {
      cost: 699481243,
      convValue: 898716259,
      roas: 1284
    }
  },
  {
    id: 4,
    adType: 'app',
    title: '매드업 앱광고 광고 9912',
    budget: 240000,
    status: 'active',
    startDate: '2022-02-10T00:00:00',
    endDate: null,
    report: {
      cost: 9300222,
      convValue: 38234789,
      roas: 411
    }
  }
];
