export const siteTitle = 'Daniel Nadeem — Electrical Engineer at Tesla';
export const siteName = 'Daniel Nadeem';

export const aboutHeading = 'Electrical Engineer';
export const aboutDescription =
  'Daniel Nadeem is an Electrical Engineer from the University of British Columbia.';
export const aboutBody =
  'Daniel Nadeem is an Electrical Engineer from the University of British Columbia. Through experience at Tesla, design teams, and course projects, he has learnt how to apply his academic knowledge into a technical work environment through effective use of the design process, and design implementation. Projects have ranged from designing Python automation scripts and interfaces, to planning and performing high voltage abuse tests, to designing and testing RF link budgets.';

export const heroHeading = 'Hey, I’m Daniel';
export const heroLede = 'I’ve worked on many projects that are available here on this site.';

export const engineerEmptyState = 'Engineering project details are coming.';

export const resumeHref = '/resume.pdf';

export const nav = [
  { href: '/engineer/', label: 'Engineer' },
  { href: '/projects/', label: 'Projects' },
  { href: '/woodworking/', label: 'Woodworking' },
  { href: '/audio/', label: 'Audio' },
  { href: '/cooking/', label: 'Cooking' },
  { href: '/notes/', label: 'Notes' },
  { href: '/about/', label: 'About' },
  { href: resumeHref, label: 'Resume' },
] as const;

export type Card = {
  href?: string;
  image: string;
  title: string;
  year?: string;
  alt: string;
};

export const projectCards: Card[] = [
  {
    href: '/quality-control-robot/',
    image: '/images/robot.jpg',
    title: 'Quality Control Robot',
    year: '2021',
    alt: 'Quality Control Robot',
  },
  {
    href: '/coin-picking-robot/',
    image: '/images/0_completed_robot-2-e1633973593431.jpg',
    title: 'Coin Picking Robot',
    year: '2020',
    alt: 'Coin Picking Robot',
  },
  {
    href: '/reflow-oven-controller/',
    image: '/images/board-1.jpg',
    title: 'Reflow Oven Controller',
    year: '2020',
    alt: 'Reflow Oven Controller',
  },
  {
    href: '/simple-risc-machine/',
    image: '/images/1-1.png',
    title: 'Simple RISC Machine',
    year: '2019',
    alt: 'Simple RISC Machine',
  },
];

export const woodworkingCards: Card[] = [
  {
    href: '/shoe-rack/',
    image: '/images/img_0423-1.jpeg',
    title: 'Shoe Rack',
    year: '2021',
    alt: 'Shoe Rack',
  },
  {
    href: '/desk/',
    image: '/images/img_0289-2.jpg',
    title: 'Desk',
    year: '2021',
    alt: 'Desk',
  },
  {
    href: '/3d-printer-side-table/',
    image: '/images/render-4.jpg',
    title: '3D Printer Side Table',
    year: '2020',
    alt: '3D Printer Side Table',
  },
  {
    href: '/workbench/',
    image: '/images/img_0158-1.jpg',
    title: 'Workbench',
    year: '2020',
    alt: 'Workbench',
  },
  {
    href: '/flight-simulator-3/',
    image: '/images/flight-simulator-2.jpg',
    title: 'Flight Simulator',
    year: '2020',
    alt: 'Flight Simulator',
  },
];

export const audioCards: Card[] = [
  {
    href: '/two-way-surround-speakers/',
    image: '/images/img_0311-2.jpg',
    title: 'Two-Way Surround Speakers',
    year: '2021',
    alt: 'Two-Way Surround Speakers',
  },
];

export const cookingCards: Card[] = [
  {
    image: '/images/img_0957.jpg',
    title: 'Omelet with a Vegetable Filling',
    alt: 'Omelet with a Vegetable Filling',
  },
  {
    href: '/spicy-sausage-pasta-sauce-with-linguini/',
    image: '/images/img_1055.jpg',
    title: 'Spicy Sausage Pasta Sauce with Linguini',
    alt: 'Spicy Sausage Pasta Sauce with Linguini',
  },
  {
    image: '/images/img_5902.jpg',
    title: 'Mushroom Topping on Steak with Sautéed Fries',
    alt: 'Mushroom Topping on Steak with Sautéed Fries',
  },
  {
    image: '/images/img_0480.jpg',
    title: 'Salmon Fillet and Mixed Vegetables in Rice',
    alt: 'Salmon Fillet and Mixed Vegetables in Rice',
  },
];

export const courses = [
  {
    code: 'CIVL 250',
    href: '/notes/civl-250-notes.pdf',
    title: 'Engineering and Sustainable Development',
    brief:
      'Covers implications of a finite biosphere and the complexities of environmental decision-making.',
  },
  {
    code: 'CPEN 211',
    href: '/notes/cpen-211-notes.pdf',
    title: 'Computing Systems I',
    brief:
      'Introduces boolean algebra, combinational and sequential circuits, microcomputer organization, assembly programming, and I/O interfacing for digital system design.',
  },
  {
    code: 'CPSC 259',
    href: '/notes/cpsc-259-notes.pdf',
    title: 'Data Structures and Algorithms for Electrical Engineers',
    brief:
      'Covers advanced procedural programming, sorting/searching algorithms, lists/trees/hash tables, and an introduction to scripting and file I/O.',
  },
  {
    code: 'ELEC 201',
    href: '/notes/elec-201-notes.pdf',
    title: 'Circuit Analysis I',
    brief:
      'Fundamentals of lumped LTI circuit analysis, network theorems, op-amps, first-order circuits, and DC analysis of diodes and transistors.',
  },
  {
    code: 'ELEC 202',
    href: '/notes/elec-202-notes.pdf',
    title: 'Circuit Analysis II',
    brief:
      'Continues circuit analysis with phasors, AC three-phase power, transfer functions, Bode plots, filters, Laplace transforms, transformers, and two-port networks.',
  },
  {
    code: 'ELEC 211',
    href: '/notes/elec-211.pdf',
    title: 'Engineering Electromagnetics',
    brief:
      'Introduces electrostatics, currents, dielectrics, capacitance, electrostatic potential, and magnetostatics.',
  },
  {
    code: 'ELEC 221',
    href: '/notes/elec-221-notes.pdf',
    title: 'Signals and Systems',
    brief:
      'Covers LTI systems, convolution, discrete-time Fourier methods, the z-transform, sampling, filtering/modulation, feedback, and stability.',
  },
  {
    code: 'ELEC 281',
    href: '/notes/elec-281-notes.pdf',
    title: 'Technical Communication',
    brief:
      'Engineering written and oral communication: technical description, reports, business correspondence, and presentations.',
  },
  {
    code: 'MATH 253',
    href: '/notes/math-253-notes-.pdf',
    title: 'Multivariable Calculus',
    brief:
      'Multivariable calculus: partial and directional derivatives, maxima/minima, Lagrange multipliers, the second-derivative test, and multiple integrals with applications.',
  },
  {
    code: 'MATH 256',
    href: '/notes/math-256-notes.pdf',
    title: 'Differential Equations',
    brief:
      'Linear ODEs, Laplace transforms, Fourier series, and separation of variables for linear PDEs.',
  },
  {
    code: 'CPEN 311',
    href: '/notes/cpen-311-notes.pdf',
    title: 'Digital Systems Design',
    brief:
      'Covers advanced combinational/sequential design with HDLs and CAD tools, including FPGAs, state machines, microcontrollers, arithmetic circuits, and interfaces.',
  },
  {
    code: 'ELEC 301',
    href: '/notes/elec-301-notes.pdf',
    title: 'Electronic Circuits',
    brief:
      'Analysis and design of electronic circuits, including transistor biasing/models, amplifier frequency response and feedback, op-amps, active filters, oscillators, and IC selection.',
  },
  {
    code: 'ELEC 311',
    href: '/notes/elec-311-notes.pdf',
    title: 'Electromagnetic Fields and Waves',
    brief:
      'Waves and Maxwell’s equations with applications to transmission lines, impedance matching, reflection/refraction, waveguides, and antennas.',
  },
  {
    code: 'ELEC 315',
    href: '/notes/elec-315-notes.pdf',
    title: 'Electronic Materials and Devices',
    brief:
      'Fundamentals of semiconductors, metals, dielectrics, piezoelectrics, and magnetic materials and their use in diodes, transistors, and transducers.',
  },
  {
    code: 'ELEC 331',
    href: '/notes/elec-331.pdf',
    title: 'Computer Communications',
    brief:
      'Analysis, design, and implementation of computer networks and protocols, including TCP/IP, routing, reliable transfer, multiple access, and Ethernet.',
  },
  {
    code: 'ELEC 341',
    href: '/notes/elec-341-notes.pdf',
    title: 'Systems and Control',
    brief:
      'Continuous-time system analysis via Laplace transforms, transfer-function and state-space modelling, feedback/stability/sensitivity, control design, and frequency-domain analysis.',
  },
  {
    code: 'ELEC 342',
    href: '/notes/elec-342-notes.pdf',
    title: 'Electro-Mechanical Energy Conversion and Transmission',
    brief:
      'Three-phase power, transformers, magnetic circuits, and electromechanical energy conversion including DC, induction, synchronous, brushless DC, stepper, and single-phase machines.',
  },
  {
    code: 'MATH 307',
    href: '/notes/math-307.pdf',
    title: 'Applied Linear Algebra',
    brief:
      'Applications of linear algebra to science and engineering problems, including use of computer algebra systems.',
  },
  {
    code: 'APSC 450',
    href: '/notes/apsc-450.pdf',
    title: 'Professional Engineering Practice',
    brief:
      'Professional practice topics: engineering legislation and ethics, management of engineering enterprises, labour relations, and safety and environmental legislation.',
  },
  {
    code: 'ELEC 481',
    href: '/notes/elec-481.pdf',
    title: 'Economic Analysis of Engineering Projects',
    brief:
      'Time-money relationships and economic analysis of engineering alternatives, including interest, inflation, depreciation, taxation, uncertainty, cost estimation, and budgeting.',
  },
] as const;

export type Course = (typeof courses)[number];

export function courseSlug(code: string): string {
  return code.toLowerCase().replace(/\s+/g, '-');
}

export function groupCourses<T extends { code: string }>(items: readonly T[]) {
  const groups: { prefix: string; items: T[] }[] = [];
  const index = new Map<string, T[]>();

  for (const item of items) {
    const prefix = item.code.split(' ')[0] ?? item.code;
    let group = index.get(prefix);
    if (!group) {
      group = [];
      index.set(prefix, group);
      groups.push({ prefix, items: group });
    }
    group.push(item);
  }

  return groups;
}

export const socials = [
  { href: 'https://x.com/danielzn100', label: 'X', handle: '@danielzn100' },
  { href: 'https://www.linkedin.com/in/danielzn/', label: 'LinkedIn' },
  { href: 'https://github.com/daniel-zn', label: 'GitHub' },
  { href: 'https://www.youtube.com/channel/UCmhuSmJumwws5QfWfJfPXiw', label: 'YouTube' },
  { href: 'https://www.thingiverse.com/danielzn/designs', label: 'Thingiverse' },
] as const;

export const projectSection = { title: 'Projects', href: '/projects/', cards: projectCards };

export const personalSections: { title: string; href: string; cards: Card[] }[] = [
  { title: 'Woodworking', href: '/woodworking/', cards: woodworkingCards },
  { title: 'Audio', href: '/audio/', cards: audioCards },
  { title: 'Cooking', href: '/cooking/', cards: cookingCards },
];
