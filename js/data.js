// ============================================
// Arcana – Core Shared Data (with task completion)
// ============================================

const projects = [
  { id:'p1', name:'Website Redesign', color:'#b45309' },
  { id:'p2', name:'Learn Rust', color:'#7c3aed' },
  { id:'p3', name:'Fitness Routine', color:'#2b6e4f' }
];

const tasks = [
  { id:'t1', projectId:'p1', title:'Create wireframes', dueDate:'2026-06-10', priority:'High', status:'In Progress', completed: false },
  { id:'t2', projectId:'p1', title:'Design homepage mockup', dueDate:'2026-06-15', priority:'High', status:'Not Started', completed: false },
  { id:'t3', projectId:'p1', title:'Write frontend code', dueDate:'2026-06-20', priority:'Medium', status:'Not Started', completed: false },
  { id:'t4', projectId:'p2', title:'Read Rust book chapters 1-5', dueDate:'2026-06-12', priority:'Medium', status:'In Progress', completed: false },
  { id:'t5', projectId:'p2', title:'Complete Rustlings exercises', dueDate:'2026-06-25', priority:'Low', status:'Not Started', completed: false },
  { id:'t6', projectId:'p3', title:'Morning yoga - 30 days', dueDate:'2026-06-30', priority:'Medium', status:'Not Started', completed: false }
];

let eventsData = [
  { id:'e1', title:'Dentist appointment', start:'2026-06-08T10:00', end:'2026-06-08T11:00', category:'personal', repeat:'none' },
  { id:'e2', title:'Team standup', start:'2026-06-06T09:00', end:'2026-06-06T09:15', category:'work', repeat:'weekly', days:'Mon,Tue,Wed,Thu,Fri' },
  { id:'e3', title:'Book club', start:'2026-06-12', allDay:true, category:'organization', repeat:'none' },
  { id:'e4', title:'Math exam', start:'2026-06-14T13:00', end:'2026-06-14T15:00', category:'school', repeat:'none' }
];

const categoryColors = {
  work: '#b45309',
  school: '#2b6e4f',
  organization: '#8b5cf6',
  personal: '#db6f2c'
};

const learningData = {
  skills: [
    { id:'s1', name:'Coding' },
    { id:'s2', name:'Physics' },
    { id:'s3', name:'Accounting' }
  ],
  subjects: [
    { id:'sub1', skillId:'s1', name:'Web Development' },
    { id:'sub2', skillId:'s1', name:'Data Structures' },
    { id:'sub3', skillId:'s2', name:'Classical Mechanics' },
    { id:'sub4', skillId:'s3', name:'Financial Accounting' }
  ],
  chapters: [
    { id:'ch1', subjectId:'sub1', name:'Front End' },
    { id:'ch2', subjectId:'sub1', name:'Back End' },
    { id:'ch3', subjectId:'sub2', name:'Arrays & Linked Lists' },
    { id:'ch4', subjectId:'sub3', name:'Newton Laws' },
    { id:'ch5', subjectId:'sub4', name:'Balance Sheet' }
  ],
  subchapters: [
    { id:'sc1', chapterId:'ch1', title:'HTML Basics', type:'video', url:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id:'sc2', chapterId:'ch1', title:'CSS Flexbox', type:'book' },
    { id:'sc3', chapterId:'ch1', title:'JavaScript Intro', type:'video', url:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id:'sc4', chapterId:'ch2', title:'Node.js Setup', type:'video', url:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id:'sc5', chapterId:'ch3', title:'Singly Linked List', type:'book' },
    { id:'sc6', chapterId:'ch4', title:'First Law', type:'video', url:'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id:'sc7', chapterId:'ch5', title:'Assets = Liabilities + Equity', type:'video', url:'https://www.youtube.com/embed/dQw4w9WgXcQ' }
  ]
};

const books = [
  { id:'b1', title:'Eloquent JavaScript', author:'Marijn Haverbeke', subjectId:'sub1', status:'reading' },
  { id:'b2', title:'CSS Secrets', author:'Lea Verou', subjectId:'sub1', status:'read' },
  { id:'b3', title:'React Up & Running', author:'Stoyan Stefanov', subjectId:'sub1', status:'want' },
  { id:'b4', title:'Introduction to Algorithms', author:'CLRS', subjectId:'sub2', status:'read' },
  { id:'b5', title:'The Algorithm Design Manual', author:'Skiena', subjectId:'sub2', status:'reading' }
];