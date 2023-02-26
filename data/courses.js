import { SmartStepEdge } from "@tisoap/react-flow-smart-edge";

const position = { x: 0, y: 0 };
const edgeType = "custom";

const courses = [];

export const edgeTypes = {
  custom: SmartStepEdge,
};

// Read Courses
function readFile() {
  readBUS();
  readMATH();
  readCSE();
}
function readBUS() {
  fetch("data/bus_courses.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = courses.legth; i < data.length + courses.length; i++) {
        courses.push(data[i].title);
        courses[i].credits = data[i].credits;
      }
    });
}
function readMATH() {
  fetch("data/MATH_courses.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = courses.legth; i < data.length + courses.length; i++) {
        courses.push(data[i].title);
        courses[i].credits = data[i].credits;
      }
    });
}
function readCSE() {
  fetch("data/cse_courses.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = courses.legth; i < data.length + courses.length; i++) {
        courses.push(data[i].title);
        courses[i].credits = data[i].credits;
      }
    });
}

function createBox() {
  const classContainer = document.getElementById("class-container");
  // Loop through the classes array and create a box for each class
  for (let i = 0; i < courses.length; i++) {
    // Create a new div element for the class box
    const classBox = document.createElement("div");
    classBox.classList.add("class-box");

    // Create a heading element for the class code
    const codeHeading = document.createElement("h2");
    codeHeading.textContent = courses[i].title;

    // Create a paragraph element for the class credits
    const creditsPara = document.createElement("p");
    creditsPara.textContent = `Credits: ${courses[i].credits}`;

    // Append the heading and paragraph elements to the class box
    classBox.appendChild(codeHeading);
    classBox.appendChild(creditsPara);

    // Append the class box to the class container element
    classContainer.appendChild(classBox);
  }
}

const styleCompleted = {
  // background: '#454052',
  background: "#7ad7f0",
  width: 60,
  color: "#000",
  fontsize: "20px",
  fontFamily: "Helvetica",
  boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)",
};

const styleAvailable = {
  background: "#16558f",
  width: 60,
  color: "#fff",
  fontsize: "20px",
  fontFamily: "Helvetica",
  boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)",
};

const styleUnselected = {
  width: 60,
  fontsize: "20px",
  fontFamily: "Helvetica",
  boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)",
};

export const initialNodes = [
  {
    id: "math205",
    type: "output",
    data: {
      label: "MATH 205",
      title: "Linear Methods",
      description:
        "Linear differential equations and applications; matrices and systems of linear equations; vector spaces; eigenvalues and application to linear systems of differential equations.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "math022",
    data: {
      label: "MATH 022",
      title: "Calculus II",
      description:
        "Applications of integration; techniques of integration; separable differential equations; infinite sequences and series; Taylor's Theorem and other approximations; curves and vectors in the plane.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "math021",
    type: "input",
    data: {
      label: "MATH 021",
      title: "Calculus I",
      description:
        "Functions and graphs; limits and continuity; derivative, differential, and applications; indefinite and definite integrals; trigonometric, logarithmic, exponential, and hyperbolic functions.",
    },
    position,
    style: styleAvailable,
  },
  {
    id: "csb313",
    type: "output",
    data: {
      label: "CSB 313",
      title: "Design of Integrated Business Applications II",
      description:
        "Integrated Product Development (IPD) Capstone Course II. This course extends the industry-based project initiated in CSB 312 into its implementation phase. Detailed design, in-house system construction and delivery, commercial software options, and systems maintenance and support. The practical component of the course is supplemented by several classroom-based modules dealing with topics that lie at the boundary of computer science and business. Formal, oral, and written presentations to clients.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "csb312",
    data: {
      label: "CSB 312",
      title: "Design of Integrated Business Applications I",
      description:
        "Integrated Product Development (IPD) Capstone I. Industry-based business information systems design project. Information systems design methodology, user needs analysis, project feasibility analysis of design alternatives, and integrated product development methodology. Formal oral and written presentations to clients.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "bus001",
    type: "input",
    data: {
      label: "BUS 001",
      title: "Foundations of Business",
      description:
        "This course orients students in the College of Business to the study of business and to the college's expectations of undergraduates. Different types of business organizations and their goals are introduced, including overviews of the functional areas of business, their contributions to organizations, and their related careers. Students will begin to identify their professional interests, understand the wider context of business, and be exposed to the College of Business programs and resources available to support their academic and professional success.",
    },
    position,
    style: styleAvailable,
  },
  {
    id: "mgt301",
    type: "output",
    data: {
      label: "MGT 301",
      title: "Strategic Management in a Global Environment",
      description:
        "The capstone business class, integrating concepts and practices from core business classes, utilizing an organization-wide, strategic perspective and examining the relationship among firm strategy, structure and environment. Course emphasizes strategic analysis, strategy formulation, and strategy implementation to achieve sustainable competitive advantage. Corporate governance, corporate social responsibility and business ethics are incorporated into the strategic perspective. Case analyses and competitive simulation game are central learning components. Senior standing in the College of Business and completion of college core.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "mgt043",
    type: "input",
    data: {
      label: "MGT 043",
      title: "Organizatonal Behavior",
      description:
        "Managers are needed to make organizations run effectively. Management is the art and science of helping individuals achieve goals together, often in organizations. This course provides a broad overview of the principles of effective, ethical management at the individual, interpersonal, and group levels of analysis. Emphasis is on conceptual and applied organizational behavior topics such as: individual differences; decision making; perception and judgment; motivation; leadership; delivering effective feedback and performance appraisal; managing diversity; power, politics and influence; and organizational culture.",
    },
    position,
    style: styleAvailable,
  },
  {
    id: "law201",
    data: {
      label: "LAW 201",
      title: "Legal Environment of Business",
      description:
        "This course examines the legal relationships between business and government, business and society, and the individual and society. A significant focus of the course is on the structure of the U.S. legal system, the role of the courts in the legal system, and contract law as the principal mechanism for the private allocation of resources and risk allocation. The course also focuses on business ethics with particular emphasis on corporate social responsibility. Junior standing is required.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "mkt111",
    data: {
      label: "MKT 111",
      title: "Principles of Marketing",
      description:
        "The purpose of this course is to give an overview of the entire marketing function. The objective is to take a broad-based approach to expose students to the meaning of marketing, the terminology of marketing, the activities involved in marketing, how managers make and implement decisions in marketing, and how they evaluate the results. The role of marketing in the broader society will also be discussed. At the end of this course, students will be able to understand the meaning of the marketing concept, various marketing terminologies, how firms develop and evaluate marketing strategies related to product, place, price, and promotions, how marketing strategies are related to other strategies of the firm, and what internal and external factors influence the marketing decisions. The outcome of the course will be assessed by a series of multiple choice and short essay questions, and other suitable assignments decided by the instructor.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "bus203",
    data: {
      label: "BUS 203",
      title: "Business Communication II",
      description:
        "This course builds on the basic communication frameworks and skills from BUS 003 to enhance students’ business communications related to data, particularly oral communication. Students will translate data and analysis into narratives that provide context for their messages and make persuasive recommendations in written and oral formats.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "fin125",
    data: {
      label: "FIN 125",
      title: "Introduction to Finance",
      description:
        "An introductory finance course stressing the links between corporate finance and investments. Major topic areas will include financial statement analysis, time value of money, risk and return valuation of stocks and bonds, capital budgeting, and cost of capital.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "scm186",
    data: {
      label: "SCM 186",
      title: "Supply Chain Operations Management",
      description:
        "Introduction to managing global supply chains and operations within the context of an integrated value chain. Topics include supply chain management, total quality management, project management, demand forecasting, supply management, lean operations, aggregate planning, capacity planning, inventory management, distribution and transportation management, and performance measurement.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "eco119/146",
    data: {
      label: "ECO 119/146",
      title: "Intermediate Macroeconomic/Microeconomic Analysis",
      description:
        "Macroeconomic measurement, theory and policy. The use of alternative macroeconomic models to analyze the level of national income, inflation, unemployment, economic growth; the balance of payments, and exchange rate determination.\nThe application of economic analysis to managerial and public policy decision-making. Not available for credit to students who have taken ECO 105.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "engl001",
    type: "input",
    data: {
      label: "ENGL 001",
      title: "Critical Reading and Composition",
      description:
        "Introduction to academic writing that supports a claim in respectful conversation with others. Topics drawn from important issues in the world in which students live. The course provides multiple opportunities to engage thoughtfully in the writing process. Students must receive a grade of C- or higher to advance to English 2.",
    },
    position,
    style: styleAvailable,
  },
  {
    id: "eco001",
    type: "input",
    data: {
      label: "ECO 001",
      title: "Principles of Economics",
      description:
        "A one-semester course in the principles of economics. General topics covered are: supply and demand; pricing and production decisions of firms; the role of government in the economy; the determination of national income; money and banking; monetary and fiscal policy; and government finance.",
    },
    position,
    style: styleAvailable,
  },
  {
    id: "eco045",
    type: "input",
    data: {
      label: "ECO 045",
      title: "Statistical Methods",
      description:
        "Descriptive statistics, probability and probability distributions, sampling, estimation, hypothesis testing, chi-square tests, simple regression and correlation. Note: College of Business students may not take MATH 012 as a replacement for ECO 045.",
    },
    position,
    style: styleAvailable,
  },
  {
    id: "bus003",
    type: "input",
    data: {
      label: "BUS 003",
      title: "Business Communication I",
      description:
        "Good business communication skills are essential for success on the job and career advancement. In this course, students are introduced to the frameworks and skills necessary to deliver communications that are professional, clear, concise, evidence-driven, and persuasive. Emphasis is on basic business communications including memos, reports, and presentations.",
    },
    position,
    style: styleAvailable,
  },
  {
    id: "csb311",
    data: {
      label: "CSB 311",
      title: "Advanced Accounting Information Systems",
      description:
        "Application of computer technology to accounting information systems. Transaction processing systems that support the revenue, conversion, and expenditure cycles of manufacturing, service, and retail business organizations. Topics include process modeling, data modeling, internal controls, corporate IT governance, IT audit techniques, SAP and application of Generalized Audit Software.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "acct152",
    data: {
      label: "ACCT 152",
      title: "Introduction to Managerial Accounting",
      description:
        "An introduction to internal accounting information for all levels of management. Topics include cost flow in a manufacturing operation; planning, evaluating and controlling through budgeting and standard costing; and decision-making using cost-volume-profit analysis, direct costing, and relevant costs.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "acct151",
    type: "input",
    data: {
      label: "ACCT 151",
      title: "Introduction to Financial Accounting",
      description:
        "The organization, measurement and interpretation of economic information. Introduction to accounting theory, concepts and principles, the accounting cycle, information processing, and financial statements. Exposure to controversial issues concerning income determination and valuation. Must have sophomore standing.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "cse262",
    data: {
      label: "CSE 262",
      title: "Programming Lamguages",
      description:
        "Use, structure and implementation of several programming languages.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "cse303",
    type: "output",
    data: {
      label: "CSE 303",
      title: "Operating System Design",
      description:
        "Process and thread programming models, management, and scheduling. Resource sharing and deadlocks. Memory management, including virtual memory and page replacement strategies. I/O issues in the operating system. File system implementation. Multiprocessing. Computer security as it impacts the operating system.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "cse340",
    data: {
      label: "CSE 340",
      title: "Design and Analysis of Algorithms",
      description:
        "Algorithms for searching, sorting, manipulating graphs and trees, finding shortest paths and minimum spanning trees, scheduling tasks, etc.: proofs of their correctness and analysis of their asymptotic runtime and memory demands. Designing algorithms: recursion, divide-and-conquer, greediness, dynamic programming. Limits on algorithm efficiency using elementary NP-completeness theory.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "cse202",
    data: {
      label: "CSE 202",
      title: "Computer Organization and Architecture",
      description:
        "Interaction between low-level computer architectural properties and high-level program behaviors: instruction set design; digital logic and assembly language; processor organization; the memory hierarchy; multicore and GPU architectures; and processor interrupt/exception models. Credit will not be given for both CSE 201 and CSE 202.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "cse216",
    data: {
      label: "CSE 216",
      title: "Software Engineering",
      description:
        "The software lifecycle; lifecycle models; software planning; testing; specification methods; maintenance. Emphasis on team work and large-scale software systems, including oral presentations and written reports.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "cse241/341",
    data: {
      label: "CSE 241/341",
      title: "Database Systems, [Algorithms], and Applications",
      description:
        "Design of large databases; normalization; query languages (including SQL); Transaction-processing protocols; Query optimization; performance tuning; distributed systems. Not available to students who have credit for CSE 241.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "cse252",
    type: "input",
    data: {
      label: "CSE 252",
      title: "Computers, the Internet, and Society",
      description:
        "An interactive exploration of the current and future role of computers, the Internet, and related technologies in changing the standard of living, work environments, society and its ethical values. Privacy, security, depersonalization, responsibility, and professional ethics; the role of computer and Internet technologies in changing education, business modalities, collaboration mechanisms, and everyday life.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "cse109",
    data: {
      label: "CSE 109",
      title: "Systems Software",
      description:
        "Advanced programming and data structures, including dynamic structures, memory allocation, data organization, symbol tables, hash tables, B-trees, data files. Object-oriented design and implementation of simple assemblers, loaders, interpreters, compilers, and translators. Practical methods for implementing medium-scale programs.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "cse140",
    data: {
      label: "CSE 140",
      title: "Foundations of Discrete Structures and Algorithms",
      description:
        "Basic representations used in algorithms: propositional and predicate logic, set operations and functions, relations and their representations, matrices and their representations, graphs and their representations, trees and their representations. Basic formalizations for proving algorithm correctness: logical consequences, induction, structural induction. Basic formalizations for algorithm analysis: counting, pigeonhole principle, permutations.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "cse017",
    data: {
      label: "CSE 017",
      title: "Programming and Data Structures",
      description:
        "Algorithmic design and implementation in a high level, object oriented language, such as Java. Classes, subclasses, recursion, searching, sorting, linked lists, trees, stacks, queues.",
    },
    position,
    style: styleUnselected,
  },
  {
    id: "cse007",
    type: "input",
    data: {
      label: "CSE 007",
      title: "Introduction to Programming",
      description:
        "Problem-solving using the Java programming language. Data types, control flow, methods, arrays, objects, inheritance, breadth of computing. Includes laboratory. If credit is given for CSE 007 then no credit will be given for CSE 003 nor CSE 004.",
    },
    position,
    style: styleAvailable,
  },
];

export const initialEdges = [
  {
    id: "b1",
    source: "eco001",
    target: "mkt111",
    type: edgeType,
    animated: true,
  },
  {
    id: "b2",
    source: "eco001",
    target: "law201",
    type: edgeType,
    animated: true,
  },
  {
    id: "b3",
    source: "eco001",
    target: "eco119/146",
    type: edgeType,
    animated: true,
  },
  {
    id: "b4",
    source: "math021",
    target: "eco119/146",
    type: edgeType,
    animated: true,
  },
  {
    id: "b5",
    source: "bus003",
    target: "bus203",
    type: edgeType,
    animated: true,
  },
  {
    id: "b6",
    source: "acct151",
    target: "acct152",
    type: edgeType,
    animated: true,
  },
  {
    id: "b7",
    source: "eco045",
    target: "fin125",
    type: edgeType,
    animated: true,
  },
  {
    id: "b8",
    source: "acct151",
    target: "fin125",
    type: edgeType,
    animated: true,
  },
  {
    id: "b9",
    source: "math021",
    target: "fin125",
    type: edgeType,
    animated: true,
  },
  {
    id: "b10",
    source: "math021",
    target: "scm186",
    type: edgeType,
    animated: true,
  },
  {
    id: "b11",
    source: "eco045",
    target: "scm186",
    type: edgeType,
    animated: true,
  },
  {
    id: "b12",
    source: "eco045",
    target: "mgt301",
    type: edgeType,
    animated: true,
  },
  {
    id: "b13",
    source: "bus001",
    target: "mgt301",
    type: edgeType,
    animated: true,
  },
  {
    id: "b14",
    source: "bus203",
    target: "mgt301",
    type: edgeType,
    animated: true,
  },
  {
    id: "b15",
    source: "mkt111",
    target: "mgt301",
    type: edgeType,
    animated: true,
  },
  {
    id: "b16",
    source: "law201",
    target: "mgt301",
    type: edgeType,
    animated: true,
  },
  {
    id: "b17",
    source: "fin125",
    target: "mgt301",
    type: edgeType,
    animated: true,
  },
  {
    id: "b18",
    source: "eco119/146",
    target: "mgt301",
    type: edgeType,
    animated: true,
  },
  {
    id: "b19",
    source: "scm186",
    target: "mgt301",
    type: edgeType,
    animated: true,
  },
  {
    id: "b20",
    source: "csb311",
    target: "mgt301",
    type: edgeType,
    animated: true,
  },
  {
    id: "b21",
    source: "mgt043",
    target: "mgt301",
    type: edgeType,
    animated: true,
  },
  {
    id: "b22",
    source: "csb311",
    target: "bus203",
    type: edgeType,
    animated: true,
  },
  {
    id: "m1",
    source: "math021",
    target: "math022",
    type: edgeType,
    animated: true,
  },
  {
    id: "m2",
    source: "math022",
    target: "math205",
    type: edgeType,
    animated: true,
  },
  {
    id: "c1",
    source: "cse007",
    target: "cse017",
    type: edgeType,
    animated: true,
  },
  {
    id: "c2",
    source: "cse017",
    target: "cse109",
    type: edgeType,
    animated: true,
  },
  {
    id: "c3",
    source: "cse017",
    target: "cse202",
    type: edgeType,
    animated: true,
  },
  {
    id: "c4",
    source: "cse017",
    target: "cse262",
    type: edgeType,
    animated: true,
  },
  {
    id: "c5",
    source: "cse109",
    target: "cse303",
    type: edgeType,
    animated: true,
  },
  {
    id: "c6",
    source: "cse202",
    target: "cse303",
    type: edgeType,
    animated: true,
  },
  {
    id: "c7",
    source: "cse007",
    target: "cse140",
    type: edgeType,
    animated: true,
  },
  {
    id: "c8",
    source: "cse017",
    target: "cse140",
    type: edgeType,
    animated: true,
  },
  {
    id: "c9",
    source: "cse017",
    target: "cse241/341",
    type: edgeType,
    animated: true,
  },
  {
    id: "c10",
    source: "cse140",
    target: "cse340",
    type: edgeType,
    animated: true,
  },
  {
    id: "c11",
    source: "cse017",
    target: "cse216",
    type: edgeType,
    animated: true,
  },
  {
    id: "cb1",
    source: "acct152",
    target: "csb311",
    type: edgeType,
    animated: true,
  },
  {
    id: "cb2",
    source: "cse241/341",
    target: "csb311",
    type: edgeType,
    animated: true,
  },
  {
    id: "cb3",
    source: "csb311",
    target: "csb312",
    type: edgeType,
    animated: true,
  },
  {
    id: "cb4",
    source: "cse216",
    target: "csb312",
    type: edgeType,
    animated: true,
  },
  {
    id: "cb5",
    source: "csb312",
    target: "csb313",
    type: edgeType,
    animated: true,
  },
];
