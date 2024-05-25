// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'bots', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Recent Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['bots/RMSTrial'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'JP Wile',
    description: "John Paul Wile's Portfolio",
    imageURL: '',
  },
  social: {
    linkedin: 'John Paul Wile',
    twitter: '@JohnPaulWile',
    mastodon: 'botsone@mastodon.social',
    facebook: 'John Paul Wile',
    instagram: '@botsone',
    reddit: 'JPWile',
    threads: '@botsone',
    youtube: 'botsone',
    medium: 'John Paul Wile',
    stackoverflow: 'JP Wile',
    website: 'https://www.botsone.net',
    email: 'botsone@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/file/d/19u_Diu16u7I5Of_vlpJMaZ6MSCdjEBKBWmneVCMxEzM/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'Java',
    'ReactJS',
    'NextJS',
    'NodeJS',
    'Vue',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Shadcn',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experience: [
    {
      company: 'Company Name',
      position: 'Tech Lead',
      from: 'January, 2024',
      to: 'Present',
      companyLink: 'https://forward-flow.com',
    },
    {
      company: 'Red Mountain Scientific',
      position: 'Full Stack Developer',
      from: 'July 2019',
      to: 'August 2022',
      companyLink: 'https://redmtnsci.com',
    },
  ],
  education: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
  ],
  publications: [
    {
      title: 'How to tune your subwoofer and monitors correctly',
      conferenceName: '',
      journalName: 'SubStack',
      authors: 'John Paul Wile',
      link: 'https://johnpaulwile.substack.com/p/how-to-tune-your-subwoofer-and-monitors?utm_source=profile&utm_medium=reader2',
      description:
        'A short article to help with tuning your studio subwoofer with your studio monitors.',
    },
    {
      title: "Why are we looking for a 'flat' signal in music production?",
      conferenceName: '',
      journalName: 'SubStack',
      authors: 'John Paul Wile',
      link: 'https://johnpaulwile.substack.com/p/why-are-we-looking-for-a-flat-signal?utm_source=profile&utm_medium=reader2',
      description:
        'An article explaining why producers and engineers are looking for a flat speaker response curve in their studio.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'botsone', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by John Paul Wile with ❤️`,

  enablePWA: true,
};

export default CONFIG;
