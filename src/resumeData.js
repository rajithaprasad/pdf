// src/resumeData.js

export const ResumeSchema = {
  PersonalInfo: {
    Name: 'John Doe',
    Email: 'john.doe@example.com',
    Phone: '123-456-7890',
    Address: '123 Main St, City, Country',
  },
  Introduction: {
    Website: 'http://johndoe.com',
    LinkedIn: 'https://www.linkedin.com/in/johndoe',
    Github: 'https://github.com/johndoe',
  },
  Objective: 'A highly motivated software developer seeking to contribute skills to a dynamic team.',
  Experience: [
    {
      Company: 'ABC Corp',
      StartDate: 'Jan 2020',
      EndDate: 'Dec 2022',
      Title: 'Software Engineer',
      Location: 'New York, NY',
      Description: '• Developed scalable web applications using JavaScript and React.\n• Collaborated with cross-functional teams to deliver high-quality products.',
    },
    {
      Company: 'XYZ Ltd.',
      StartDate: 'Mar 2018',
      EndDate: 'Dec 2019',
      Title: 'Junior Developer',
      Location: 'San Francisco, CA',
      Description: '• Assisted in building internal tools with Python and Django.\n• Wrote unit and integration tests to ensure application stability.',
    },
  ],
  Education: [
    {
      School: 'University of Example',
      Degree: 'BSc Computer Science',
      FieldOfStudy: 'Computer Science',
      GraduationDate: 'May 2017',
      Location: 'Los Angeles, CA',
      Description: '• Focused on algorithms, data structures, and web development.\n• Graduated with honors.',
    },
  ],
  Projects: [
    {
      Title: 'Personal Portfolio Website',
      Date: '2022',
      Description: 'A personal portfolio website showcasing projects and skills.',
      Link: 'http://johndoe.com',
    },
  ],
  Skills: {
    'Programming Languages': ['JavaScript', 'Python', 'Java'],
    'Web Development': ['React', 'Node.js', 'HTML', 'CSS'],
  },
  OptionalSection: {
    Certifications: [
      {
        Name: 'Certified JavaScript Developer',
        Date: '2021',
        Details: 'Certified by JavaScript Institute.',
      },
    ],
    Awards: [
      {
        Name: 'Best Developer Award',
        Date: '2022',
        Details: 'Awarded for outstanding performance at ABC Corp.',
      },
    ],
  },
};
