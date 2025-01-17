import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about-me', label: 'About Me' },
  { id: 'Certificate', label: 'Certificate' },
  { id: 'projects', label: 'Projects' },
  // { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/radith-yugan-526966302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: <FaLinkedin className="size-6" />,
    label: 'LinkedIn',
  },
 
  {
    href: 'https://github.com/RdhYuGaan',
    icon: <FaGithub className="size-6" />,
    label: 'GitHub',
  },
];

export const skills = [
  { name: 'UX', value: 90 },
  { name: 'Website Design', value: 85 },

  { name: 'Graphic Design', value: 88 },
  { name: 'Figma', value: 70 },
];

export const projects = [
  {
    imgSrc: '/web/web-img-1.png',
    altText: 'E-commerce Website',
    title: 'E-commerce Website',
    category: 'Web Design',
  },
  {
    imgSrc: '/web/web-img-2.png',
    altText: 'Portfolio Website',
    title: 'Portfolio Website',
    category: 'Web Design',
  },
  {
    imgSrc: '/web/web-img-3.png',
    altText: 'Mobile App Design',
    title: 'Mobile App Design',
    category: 'App Design',
  },
  {
    imgSrc: '/web/web-img-4.png',
    altText: 'Corporate Website',
    title: 'Corporate Website',
    category: 'Web Design',
  },
  {
    imgSrc: '/web/web-img-5.png',
    altText: ' Pet Care and Monitering Mobile Application',
    title: ' Pet Care and Monitering Mobile Application',
    category: 'UI/UX',
  },
  // {
  //   imgSrc: '/web/web-img-6.png',
  //   altText: 'Social Media Dashboard',
  //   title: 'Social Media Dashboard',
  //   category: 'Graphic Design',
  // },
];


export const Certificates = [
  {
    imgSrc: '/UI.png',
    altText: 'UI/UX Design',
    title: ' Project Management Fundamentals | Micorsoft',
    description:
      'The Project Management Fundamentals Certificate showcases leadership, teamwork, strategic planning, and decision-making skills for effective project management.',
  },
  {
    imgSrc: '/web.png',
    altText: 'Web  Design',
    title: ' Beginner to Project Manager | Udemy',
    description:
      'Udemy Project management course builds essential skills in planning, execution and leadership for successful project management.',
  },
  {
    imgSrc: '/app.png',
    altText: 'App Design',
    title: ' Agile Project Management | Alison',
    description:
      'Agile Project Management course enhanced my skills in Agile pronciples, iterative planning, team collaboration, and adaptive project delivery.',
  },
  {
    imgSrc: '/bi.png',
    altText: 'App Design',
    title: ' Power BI for Beginners | Simplilearn',
    description:
      'I have gained data visualization, dashboard creation, and insights generation for impactful business decision-making by this course.',
  },
  {
    imgSrc: '/hp.png',
    altText: 'App Design',
    title: '  Effective Leadership | hp LIFE',
    description:
      'Develops skills in team management, decision-making, communication, and inspiring others for organizational success.',
  },
  // {
  //   imgSrc: '/graphic-design.png',
  //   altText: 'Graphic Design',
  //   title: 'Graphic Design',
  //   description:
  //     'Delivering creative graphic design solutions, from branding to marketing materials, that make a lasting impact.',
  // },
];

// export const testimonials = [
//   {
//     name: 'John Doe',
//     review:
//       'Working with you was an absolute pleasure. Your attention to detail and creativity made the process smooth and enjoyable. I am thrilled with the final product!',
//     imgSrc: '/profile/profile-1.jpg',
//   },
//   {
//     name: 'Jane Smith',
//     review:
//       'The design exceeded my expectations! You understood my needs perfectly and delivered a stunning website that truly reflects my brand.',
//     imgSrc: '/profile/profile-2.jpg',
//   },
//   {
//     name: 'Michael Lee',
//     review:
//       'Your professionalism and dedication to the project were outstanding. I appreciate how you went above and beyond to make sure everything was perfect!',
//     imgSrc: '/profile/profile-3.jpg',
//   },
//   {
//     name: 'Emily Davis',
//     review:
//       'I was blown away by your ability to bring my vision to life. The end result is beautiful and exactly what I was hoping for. Thank you!',
//     imgSrc: '/profile/profile-4.jpg',
//   },
// ]; 