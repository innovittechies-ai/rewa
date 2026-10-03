export interface Notice {
  id: string;
  refNo: string;
  title: string;
  category: 'Admissions' | 'Academic' | 'Exam' | 'Placement' | 'Tenders' | 'General';
  date: string;
  isNew?: boolean;
  content: string;
  signatory: string;
  attachmentName: string;
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  established: number;
  intake: number;
  degrees: string[];
  hodName: string;
  description: string;
  laboratories: string[];
  keyHighlights: string[];
}

export interface Facility {
  id: string;
  name: string;
  category: string;
  description: string;
  stats: string;
  features: string[];
  icon: string;
}

export const COLLEGE_INFO = {
  name: 'Rewa Engineering College',
  hindiName: 'रीवा इंजीनियरिंग कॉलेज, रीवा (म.प्र.)',
  tagline: 'An Autonomous Institution of Government of Madhya Pradesh',
  subTagline: 'Affiliated to Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal & Approved by AICTE, New Delhi',
  established: 1964,
  collegeCode: '0103',
  dteCode: '0103',
  nirfStatus: 'Participating Institution',
  address: {
    line1: 'University Road, Kuthulia',
    city: 'Rewa',
    state: 'Madhya Pradesh',
    pincode: '486002',
    country: 'India',
  },
  contacts: {
    phones: ['07662-233478', '07662-292478'],
    fax: '07662-233478',
    email: 'prinrec.rwa@mp.gov.in',
    alternateEmail: 'info@recrewa.ac.in',
    placementEmail: 'placement@recrewa.ac.in',
  },
  principal: {
    name: 'Dr. B. K. Agrawal',
    designation: 'Principal & Professor',
    qualifications: 'Ph.D., M.Tech, B.E., FIE',
    message: `Rewa Engineering College (Autonomous), established in 1964, stands as a beacon of engineering brilliance in the Vindhya region of Central India. Over the past six decades, our institute has nurtured thousands of technocrats, researchers, administrators, and entrepreneurs who are making transformative impacts globally. We are committed to fostering outcome-based education, state-of-the-art laboratory research, industry-aligned skill building, and human values in our students. Welcome to a legacy of technical excellence.`,
  },
};

export const NOTICES_DATA: Notice[] = [
  {
    id: 'n-01',
    refNo: 'REC/ACAD/2026/1142',
    title: 'Notification regarding College Level Counselling (CLC) Round for B.Tech Admissions 2026-27',
    category: 'Admissions',
    date: 'Oct 02, 2026',
    isNew: true,
    content: 'Eligible candidates with valid JEE Main 2026 scores / 10+2 PCM merit are informed that the institutional College Level Counselling (CLC) round for vacant seats in CSE, ECE, EE, ME, and Civil Engineering will be conducted in the Central Seminar Hall. Registration starts at 9:30 AM with all original documents.',
    signatory: 'Dr. S. K. Mahajan (Dean Academics)',
    attachmentName: 'CLC_Counselling_Notice_2026_Schedule.pdf',
  },
  {
    id: 'n-02',
    refNo: 'REC/EXAM/2026/894',
    title: 'Time Table and Guidelines for End Semester Theory & Practical Examinations (RGPV Autumn 2026)',
    category: 'Exam',
    date: 'Sep 28, 2026',
    isNew: true,
    content: 'The autonomous end-semester examination time table for B.Tech (III, V, VII Sem) and M.Tech (III Sem) is hereby published. Students must download admit cards from the student portal before Oct 10, 2026. Wearing college identity cards in exam halls is mandatory.',
    signatory: 'Prof. R. P. Tiwari (Controller of Examinations)',
    attachmentName: 'Autonomous_Exam_TimeTable_Autumn2026.pdf',
  },
  {
    id: 'n-03',
    refNo: 'REC/TNP/2026/412',
    title: 'On-Campus Placement Drive for 2027 Passing Out Batch by Tata Consultancy Services (TCS) & L&T',
    category: 'Placement',
    date: 'Sep 24, 2026',
    isNew: true,
    content: 'TCS (Digital & Ninja roles) and Larsen & Toubro are organizing on-campus screening drives for 7th Semester B.Tech students of CSE, ECE, EE, and ME. Eligible registered candidates with minimum 6.5 CGPA and no active backlogs must report to Computer Center 1 in formal attire.',
    signatory: 'Dr. Pankaj Sharma (Head, Training & Placement)',
    attachmentName: 'TCS_LT_Campus_Drive_Registration_Criteria.pdf',
  },
  {
    id: 'n-04',
    refNo: 'REC/TEND/2026/088',
    title: 'E-Tender Notice for Supply and Installation of High-Performance Computing Cluster for CSE Lab',
    category: 'Tenders',
    date: 'Sep 20, 2026',
    isNew: false,
    content: 'Online bids are invited on behalf of the Principal, Rewa Engineering College, through the MP E-Procurement Portal (mptenders.gov.in) for the turnkey supply, commissioning, and 3-year warranty of GPU Server nodes for the AI/ML laboratory under TEQIP grants.',
    signatory: 'Stores & Purchase Officer',
    attachmentName: 'Tender_REC_CSE_HPC_Cluster_Specs.pdf',
  },
  {
    id: 'n-05',
    refNo: 'REC/ADMIN/2026/621',
    title: 'Notice regarding National Scholarship Portal (NSP) & Post Matric Scholarship Application Renewal',
    category: 'General',
    date: 'Sep 15, 2026',
    isNew: false,
    content: 'All SC/ST/OBC and minority category students enrolled in 1st to 4th year are advised to submit their verified online scholarship application forms along with income and caste certificates to the Academic Scholarship Section before the prescribed deadline.',
    signatory: 'Scholarship Officer, REC Rewa',
    attachmentName: 'NSP_MP_Scholarship_Notice_2026.pdf',
  },
  {
    id: 'n-06',
    refNo: 'REC/ACAD/2026/1029',
    title: 'Induction Program and Orientation Schedule for Newly Admitted B.Tech 1st Year Students',
    category: 'Academic',
    date: 'Sep 10, 2026',
    isNew: false,
    content: 'A three-week mandatory AICTE Student Induction Program (SIP) will commence with an Inaugural Address by the Principal and eminent alumni in the Golden Jubilee Auditorium. Parents are cordially invited.',
    signatory: 'First Year Coordinator',
    attachmentName: 'Orientation_SIP_Schedule_2026.pdf',
  },
];

export const DEPARTMENTS_DATA: Department[] = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    established: 2018,
    intake: 60,
    degrees: ['B.Tech in Computer Science & Engineering'],
    hodName: 'Dr. Anand Sharma',
    description: 'Equipped with modern computing infrastructure, high-speed fiber connectivity, and dedicated centers for AI, Cloud Computing, and Cyber Security. Students participate actively in Smart India Hackathon and national coding contests.',
    laboratories: [
      'Artificial Intelligence & Machine Learning Lab',
      'Advanced Cloud Computing & Data Science Lab',
      'Operating Systems & Networking Lab',
      'Software Engineering & Web Technologies Lab',
      'Microsoft Centre of Excellence',
    ],
    keyHighlights: [
      'High performance computing server with GPU acceleration',
      'Regular industry certifications in Cloud, DevOps & Full Stack',
      '100% placement track record for eligible candidates in 2025',
    ],
  },
  {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    shortName: 'ECE',
    established: 1984,
    intake: 60,
    degrees: ['B.Tech in Electronics & Communication'],
    hodName: 'Dr. S. K. Mahajan',
    description: 'Pioneering department fostering innovation in VLSI design, Embedded Systems, Signal Processing, and Wireless Telecommunications. Features industry-standard simulation software and FPGA testing benches.',
    laboratories: [
      'VLSI & Microelectronics Design Lab (Cadence / Mentor Graphics)',
      'Digital Signal & Image Processing Lab',
      'Microwave & Optical Fiber Communication Lab',
      'Embedded Systems & IoT Innovation Lab',
      'Microprocessor & Microcontroller Lab',
    ],
    keyHighlights: [
      'Sponsored research grants from AICTE & MP Council of Science & Tech',
      'Active IEEE Student Branch and technical robotics club',
      'State-of-the-art spectrum analyzers and DSO benches',
    ],
  },
  {
    id: 'ee',
    name: 'Electrical Engineering',
    shortName: 'EE',
    established: 1964,
    intake: 60,
    degrees: ['B.Tech in Electrical Engineering', 'Part-time B.E. in Electrical'],
    hodName: 'Prof. R. P. Tiwari',
    description: 'One of the founding branches of REC Rewa since 1964 with an illustrious legacy. Training students in Power Systems, Renewable Solar Integration, Electrical Drives, and Smart Grid technologies.',
    laboratories: [
      'High Voltage & Power Systems Laboratory',
      'Electrical Machines & Drive Control Lab',
      'Control Systems & Instrumentation Lab',
      'Power Electronics & Electric Vehicle Systems Lab',
      'Basic Electrical Engineering Lab',
    ],
    keyHighlights: [
      'Heavy machine test rigs and synchronized grid simulators',
      'Extensive alumni presence in Power Grid, NTPC, BHEL, and MP State Utilities',
      'Consultancy projects for Vindhya regional industries and solar parks',
    ],
  },
  {
    id: 'me',
    name: 'Mechanical Engineering',
    shortName: 'ME',
    established: 1964,
    intake: 60,
    degrees: ['B.Tech in Mechanical Engineering', 'M.Tech in Thermal Engineering'],
    hodName: 'Dr. Akhilesh Tiwari',
    description: 'Comprehensive program covering CAD/CAM, Thermal Systems, Industrial Automation, and Materials Science. Features a full-scale institutional workshop, CNC machines, and wind tunnel apparatus.',
    laboratories: [
      'Central Mechanical Workshops (Fitting, Welding, Foundry, Carpentry)',
      'CAD/CAM & FEA Simulation Lab (Ansys, SolidWorks, AutoCAD)',
      'Thermal Engineering & IC Engines Lab',
      'Fluid Mechanics & Hydraulic Machinery Lab',
      'Metrology, Dynamics & Vibration Lab',
    ],
    keyHighlights: [
      'SAE Collegiate Club - BAJA and Formula Student vehicle fabrication',
      'M.Tech program accredited with specialized computational fluid lab',
      'Direct industrial ties with Jaypee Cement, Prism Johnson, and BHEL',
    ],
  },
  {
    id: 'ce',
    name: 'Civil Engineering',
    shortName: 'CE',
    established: 1964,
    intake: 60,
    degrees: ['B.Tech in Civil Engineering', 'M.Tech in Transportation Engineering'],
    hodName: 'Prof. P. K. Singh',
    description: 'Founding department with distinguished expertise in Structural Engineering, Geotechnical testing, Environmental engineering, and Highway engineering. Recognized consultant for government infrastructure works.',
    laboratories: [
      'Structural Analysis & Concrete Technology Lab (UTM 1000 kN)',
      'Geotechnical & Soil Mechanics Testing Lab',
      'Transportation & Highway Materials Testing Lab',
      'Surveying Lab with Total Stations & GPS',
      'Environmental Engineering & Water Testing Lab',
    ],
    keyHighlights: [
      'Official material testing consultancy for MP PWD, NHAI & Municipal Corp',
      'Advanced digital Total Stations, GIS software & automated compression machines',
      'Vast alumni network serving as Superintending Engineers and Chief Engineers',
    ],
  },
  {
    id: 'ash',
    name: 'Applied Sciences & Humanities',
    shortName: 'ASH',
    established: 1964,
    intake: 300,
    degrees: ['Foundational Science & Humanities for all B.Tech Branches'],
    hodName: 'Dr. Reena Dwivedi',
    description: 'Lays the foundational bedrock for engineering students with rigorous courses in Engineering Mathematics, Physics, Chemistry, Professional Communication, and Universal Human Values.',
    laboratories: [
      'Modern Engineering Physics Optics Lab',
      'Applied Chemistry & Instrumental Analysis Lab',
      'Digital English Language & Soft Skills Lab',
      'Humanities & Ethics Seminar Center',
    ],
    keyHighlights: [
      'Modern 60-seat multimedia Language Lab with pronunciation software',
      'Active research papers in material science, nano-ferrites, and graph theory',
      'Mentorship program for first-year rural and bilingual background students',
    ],
  },
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'library',
    name: 'Central Academic Library',
    category: 'Academic Resource',
    description: 'A colossal repository of over 55,000 text and reference books, national and international journals, DELNET e-resources, and a 24/7 air-conditioned digital reading hall.',
    stats: '55,000+ Volumes · 4,000+ IEEE E-Journals',
    features: ['Automated RFID book circulation', 'High-speed Digital E-Library section', 'Book Bank scheme for SC/ST students', 'Quiet reading mezzanine for GATE aspirants'],
    icon: 'BookOpen',
  },
  {
    id: 'coe-ms',
    name: 'Centre of Excellence (COE) for Microsoft Technologies',
    category: 'Technology & Innovation',
    description: 'State-of-the-art technological hub established under governmental initiative to provide students hands-on certification in Azure Cloud, AI, and enterprise software architecture.',
    stats: '120 High-End Workstations · 1 Gbps Fiber',
    features: ['Official Microsoft learning curriculum', 'Cloud computing sandbox environments', 'Hackathons and developer bootcamps', 'Specialized faculty training center'],
    icon: 'Cpu',
  },
  {
    id: 'hostels',
    name: 'Campus Residential Hostels',
    category: 'Student Accommodation',
    description: 'Well-maintained, spacious hostels for boys and girls inside the safe college perimeter with clean dining messes, solar water heaters, Wi-Fi, and recreation rooms.',
    stats: '4 Boys Hostels · 2 Girls Hostels',
    features: ['24/7 CCTV surveillance & security guards', 'Nutritious vegetarian dining messes', 'Indoor sports rooms (Table Tennis, Chess)', 'Resident Wardens & emergency medical support'],
    icon: 'Home',
  },
  {
    id: 'computing',
    name: 'Central Computing & NKN Internet Center',
    category: 'IT Infrastructure',
    description: 'Connected with the National Knowledge Network (NKN) 1 Gbps backbone, offering seamless high-bandwidth internet connectivity across departments, labs, and student hubs.',
    stats: '1 Gbps High-Speed NKN Link',
    features: ['Campus-wide optical fiber network', 'Central server room with hardware firewall', 'Web portal and online examination server', 'Wi-Fi zones in academic blocks'],
    icon: 'Network',
  },
  {
    id: 'sports',
    name: 'Sports Complex & Physical Education',
    category: 'Health & Recreation',
    description: 'A sprawling 20-acre sports arena featuring a full-sized cricket/football ground, athletic track, outdoor basketball & volleyball courts, and modern multi-gymnasium.',
    stats: '20+ Acres Sports Fields',
    features: ['Annual Inter-College "TARANG" Sports Meet', 'Fully equipped gymnasium with instructor', 'Badminton and table tennis arenas', 'Yoga and wellness training sessions'],
    icon: 'Trophy',
  },
  {
    id: 'bank-canteen',
    name: 'Banking, Post Office & Campus Amenities',
    category: 'Daily Services',
    description: 'Complete on-campus self-sufficiency featuring a full-fledged State Bank of India (SBI) branch with 24-hour ATM, an India Post Sub-Office, and a hygienic student cafeteria.',
    stats: 'On-Campus SBI Branch & ATM',
    features: ['Immediate educational loan processing', 'National savings & postal parcel service', 'Spacious canteen serving snacks & lunch', 'Student stationery & reprographics kiosk'],
    icon: 'Coffee',
  },
];

export const PLACEMENT_STATS = {
  highestPackage: '18.0 LPA',
  averagePackage: '5.6 LPA',
  placementRate: '86.4%',
  offersLastSeason: '320+',
  visitingCompanies: '45+',
  topRecruiters: [
    { name: 'Tata Consultancy Services', category: 'IT / Digital' },
    { name: 'Infosys', category: 'IT Solutions' },
    { name: 'Larsen & Toubro (L&T)', category: 'Core EPC' },
    { name: 'BHEL', category: 'Public Sector' },
    { name: 'Wipro Technologies', category: 'IT / Services' },
    { name: 'Adani Group', category: 'Infrastructure' },
    { name: 'Cognizant', category: 'IT & Consulting' },
    { name: 'Tech Mahindra', category: 'Engineering Services' },
    { name: 'Prism Johnson Cement', category: 'Core Manufacturing' },
    { name: 'Reliance Industries', category: 'Power & Telecom' },
    { name: 'Capgemini', category: 'Technology' },
    { name: 'Hexaware Technologies', category: 'Software' },
  ],
};

export const QUICK_LINKS = [
  { label: 'RGPV Portal', url: 'https://www.rgpv.ac.in', external: true },
  { label: 'MP DTE Counselling', url: 'https://dte.mponline.gov.in', external: true },
  { label: 'National Scholarship Portal', url: 'https://scholarships.gov.in', external: true },
  { label: 'AICTE Official Portal', url: 'https://www.aicte-india.org', external: true },
  { label: 'Anti-Ragging Helpline', url: 'https://www.antiragging.in', external: true },
  { label: 'Digital Library (DELNET)', url: 'https://delnet.in', external: true },
];

export const UPCOMING_EVENTS = [
  {
    date: 'Oct 15, 2026',
    title: 'National Conference on Advances in Clean Energy & Smart Power Systems (NCACES-26)',
    organizer: 'Electrical Engineering Department',
    venue: 'Golden Jubilee Auditorium',
  },
  {
    date: 'Oct 28, 2026',
    title: 'Annual Inter-College Technical Festival: "Aarohan 2026"',
    organizer: 'Student Technical Council & Coding Club',
    venue: 'Campus Wide',
  },
  {
    date: 'Nov 12, 2026',
    title: 'Diamond Jubilee Grand Alumni Reunion (1964-2024)',
    organizer: 'REC Alumni Association',
    venue: 'Central Lawns & Guest House',
  },
];

export const ALUMNI_TESTIMONIALS = [
  {
    name: 'Er. Rajesh K. Shukla',
    batch: 'Class of 1988 (Mechanical)',
    designation: 'Executive Director (Retd.), Bharat Heavy Electricals Ltd. (BHEL)',
    quote: 'The rigorous mechanical labs and disciplined guidance of our professors at REC Rewa laid the unwavering foundation of my 35-year engineering career across India’s power sector.',
  },
  {
    name: 'Smt. Vandana Tiwari',
    batch: 'Class of 1999 (Electronics & Comm.)',
    designation: 'Vice President of Engineering, Global Cloud Infrastructure',
    quote: 'REC Rewa gave me the intellectual resilience to lead complex global engineering teams. The culture of mutual peer learning in Rewa remains unforgettable.',
  },
  {
    name: 'Er. Manoj Verma',
    batch: 'Class of 2012 (Civil Engineering)',
    designation: 'Project Director, National Highways Authority of India (NHAI)',
    quote: 'Our surveying and concrete testing labs at REC were second to none. Whenever I inspect major bridge projects today, I remember our practical sessions under the Rewa sun.',
  },
];
