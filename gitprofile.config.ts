// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'JohnyVasamsetti', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true,
          projects: ["JohnyVasamsetti/github-actions","JohnyVasamsetti/JohnyVasamsetti"],
        },
      },
    }
  },
  seo: {
    title: 'Portfolio of Johny Vasamsetti',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'johny-vasamsettti',
    twitter: '0xJ0hny',
    researchGate: '',
    facebook: '',
    instagram: 's0m3_7h1ng',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'vasamsetti.johny',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    phone: '',
    email: 'vasamsetti.johny@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'AWS',
    'Kubernetes',
    'Docker',
    'Github Actions',
    'Terraform',
    'CloudFormation',
    'Karpenter',
    'CI/CD',
    'Git',
    'Bash',
    'Python',
    'Java',
    'SpringBoot',
    'Django',
    'React.js'
  ],
  experiences: [
    {
      company: 'Thoughtworks',
      position: 'Infrastructure Consultant',
      from: 'May 2022',
      to: 'Present',
      companyLink: 'https://www.thoughtworks.com/en-in',
    },
    {
      company: 'Thoughtworks',
      position: 'Internship',
      from: 'March 2022',
      to: 'May 2022',
      companyLink: 'https://www.thoughtworks.com/en-in',
    },
  ],
  educations: [
    {
      institution: 'RGUKT IIIT Nuzvid',
      degree: 'B.Tech',
      from: '2018',
      to: '2022',
    },
    {
      institution: 'RGUKT IIIT Nuzvid',
      degree: 'PUC',
      from: '2016',
      to: '2018',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'vasamsetti.johny', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
        'dark',
        'light'
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
