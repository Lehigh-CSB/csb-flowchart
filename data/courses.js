const position = { x: 0, y: 0 };
const edgeType = 'default';

const styleCompleted = {
  background: '#454052',
  width: 40,
  color: '#fff',
  fontsize: '20px',
  fontFamily: 'Helvetica',
  boxShadow: '5px 5px 5px 0px rgba(0,0,0,.10)'
}

const styleUnselected = {
  width: 40,
  fontsize: '20px',
  fontFamily: 'Helvetica',
  boxShadow: '5px 5px 5px 0px rgba(0,0,0,.10)'
}

export const initialNodes = [
  {
    id: 'bus001',
    type: 'input',
    data: { label: 'BUS 001' },
    position,
    style: styleCompleted,
  },
  {
    id: 'eco001',
    type: 'input',
    data: {label: 'ECO 001'},
    position,
    style: styleCompleted,
  },
  {
    id: 'mkt111',
    data: {label: 'MKT 111'},
    position,
    style: styleUnselected,
  },
  {
    id: 'acct151',
    type: 'input',
    data: {label: 'ACCT 151'},
    position,
    style: styleUnselected,
  },
  {
    id: 'acct152',
    data: {label: 'ACCT 152'},
    position,
    style: styleUnselected,
  },
  {
    id: 'law201',
    data: {label: 'LAW 201'},
    position,
    style: styleUnselected,
  },
  {
    id: 'bus003',
    type: 'input',
    data: {label: 'BUS 003'},
    position,
    style: styleCompleted,
  },
  {
    id: 'bus203',
    data: {label: 'BUS 203'},
    position,
    style: styleUnselected,
  },
  {
    id: 'mgt043',
    type: 'input',
    data: {label: 'MGT 043'},
    position,
    style: styleUnselected,
  },
  {
    id: 'eco045',
    type: 'input',
    data: {label: 'ECO 045'},
    position,
    style: styleCompleted,
  },
  {
    id: 'fin125',
    data: {label: 'FIN 125'},
    position,
    style: styleUnselected,
  },
  {
    id: 'scm186',
    data: {label: 'SCM 186'},
    position,
    style: styleUnselected,
  },
  {
    id: 'eco119-146',
    data: {label: 'ECO 119/146'},
    position,
    style: styleUnselected,
  },
  {
    id: 'mgt301',
    type: 'output',
    data: {label: 'MGT301'},
    position,
    style: styleUnselected,
  },
  {
    id: 'math021',
    type: 'input',
    data: { label: 'MATH 021' },
    position,
    style: styleCompleted,
  },
  {
    id: 'math022',
    data: { label: 'MATH 022' },
    position,
    style: styleUnselected,
  },
  {
    id: 'math205',
    type: 'output',
    data: { label: 'MATH 205' },
    position,
    style: styleUnselected,
  },
  {
    id: 'cse007',
    type: 'input',
    data: {label: 'CSE 007'},
    position,
    style: styleCompleted,
  },
  {
    id: 'cse017',
    data: {label: 'CSE 017'},
    position,
    style: styleUnselected,
  },
  {
    id: 'cse109',
    data: {label: 'CSE 109'},
    position,
    style: styleUnselected,
  },
  {
    id: 'cse140',
    data: {label: 'CSE 140'},
    position,
    style: styleUnselected,
  },
  {
    id: 'cse202',
    data: {label: 'CSE 202'},
    position,
    style: styleUnselected,
  },
  {
    id: 'cse216',
    data: {label: 'CSE 216'},
    position,
    style: styleUnselected,
  },
  {
    id: 'cse241-341',
    data: {label: 'CSE 241/341'},
    position,
    style: styleUnselected,
  },
  {
    id: 'cse252',
    type: 'input',
    data: {label: 'CSE 252'},
    position,
    style: styleUnselected,
  },
  {
    id: 'cse262',
    data: {label: 'CSE 262'},
    position,
    style: styleUnselected,
  },
  {
    id: 'cse303',
    type: 'output',
    data: {label: 'CSE 303'},
    position,
    style: styleUnselected,
  },
  {
    id: 'cse340',
    data: {label: 'CSE 340'},
    position,
    style: styleUnselected,
  },
  {
    id: 'csb311',
    data: {label: 'CSB 311'},
    position,
    style: styleUnselected,
  },
  {
    id: 'csb312',
    data: {label: 'CSB 312'},
    position,
    style: styleUnselected,
  },
  {
    id: 'csb313',
    type: 'output',
    data: {label: 'CSB 313'},
    position,
    style: styleUnselected,
  },
  {
    id: 'engl001',
    type: 'input',
    data: { label: 'ENGL 001' },
    position,
    style: styleCompleted,
  }
];

export const initialEdges = [
  {
    id: 'b1',
    source: 'eco001',
    target: 'mkt111',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b2',
    source: 'eco001',
    target: 'law201',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b3',
    source: 'eco001',
    target: 'eco119-146',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b4',
    source: 'math021',
    target: 'eco119-146',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b5',
    source: 'bus003',
    target: 'bus203',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b6',
    source: 'acct151',
    target: 'acct152',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b7',
    source: 'eco045',
    target: 'fin125',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b8',
    source: 'acct151',
    target: 'fin125',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b9',
    source: 'math021',
    target: 'fin125',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b10',
    source: 'math021',
    target: 'scm186',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b11',
    source: 'eco045',
    target: 'scm186',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b12',
    source: 'eco045',
    target: 'mgt301',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b13',
    source: 'bus001',
    target: 'mgt301',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b14',
    source: 'bus203',
    target: 'mgt301',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b15',
    source: 'mkt111',
    target: 'mgt301',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b16',
    source: 'law201',
    target: 'mgt301',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b17',
    source: 'fin125',
    target: 'mgt301',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b18',
    source: 'eco119-146',
    target: 'mgt301',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b19',
    source: 'scm186',
    target: 'mgt301',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b20',
    source: 'csb311',
    target: 'mgt301',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b21',
    source: 'mgt043',
    target: 'mgt301',
    type: edgeType,
    animated: true,
  },
  {
    id: 'b22',
    source: 'csb311',
    target: 'bus203',
    type: edgeType,
    animated: true,
  },
  {
    id: 'm1',
    source: 'math021',
    target: 'math022',
    type: edgeType,
    animated: true,
  },
  {
    id: 'm2',
    source: 'math022',
    target: 'math205',
    type: edgeType,
    animated: true,
  },
  {
    id: 'c1',
    source: 'cse007',
    target: 'cse017',
    type: edgeType,
    animated: true,
  },
  {
    id: 'c2',
    source: 'cse017',
    target: 'cse109',
    type: edgeType,
    animated: true,
  },
  {
    id: 'c3',
    source: 'cse017',
    target: 'cse202',
    type: edgeType,
    animated: true,
  },
  {
    id: 'c4',
    source: 'cse017',
    target: 'cse262',
    type: edgeType,
    animated: true,
  },
  {
    id: 'c5',
    source: 'cse109',
    target: 'cse303',
    type: edgeType,
    animated: true,
  },
  {
    id: 'c6',
    source: 'cse202',
    target: 'cse303',
    type: edgeType,
    animated: true,
  },
  {
    id: 'c7',
    source: 'cse007',
    target: 'cse140',
    type: edgeType,
    animated: true,
  },
  {
    id: 'c8',
    source: 'cse017',
    target: 'cse140',
    type: edgeType,
    animated: true,
  },
  {
    id: 'c9',
    source: 'cse017',
    target: 'cse241-341',
    type: edgeType,
    animated: true,
  },
  {
    id: 'c10',
    source: 'cse140',
    target: 'cse340',
    type: edgeType,
    animated: true,
  },
  {
    id: 'c11',
    source: 'cse017',
    target: 'cse216',
    type: edgeType,
    animated: true,
  },
  {
    id: 'cb1',
    source: 'acct152',
    target: 'csb311',
    type: edgeType,
    animated: true,
  },
  {
    id: 'cb2',
    source: 'cse241-341',
    target: 'csb311',
    type: edgeType,
    animated: true,
  },
  {
    id: 'cb3',
    source: 'csb311',
    target: 'csb312',
    type: edgeType,
    animated: true,
  },
  {
    id: 'cb4',
    source: 'cse216',
    target: 'csb312',
    type: edgeType,
    animated: true,
  },
  {
    id: 'cb5',
    source: 'csb312',
    target: 'csb313',
    type: edgeType,
    animated: true,
  },
];