const cv = {
  professional_experience: [
    {
      role: 'Application Staging Engineer',
      company: 'GlobalLogic, Remote',
      period: 'Feb 2024 – Present',
      industry: 'Telecommunications',
      outline:
        'Part of a continuous integration/automation team, supporting product lifecycle for a major telecom vendor (again)',
      responsibilities: ['Working on Spinnaker pipelines, jiggling Jenkins files'],
      impact: [
        "Back to the project I've left in 2021, working at the different area and the release cycle place of the same Product "
      ]
    },
    {
      role: 'Senior Product Support Engineer',
      company: 'GlobalLogic, Remote',
      period: 'Oct 2021 – Feb 2024, (2Y 4M)',
      industry: 'Digital Media Supply Chain',
      outline:
        'Leading a Team of 10, providing support for internal workflows of a major media supply chain vendor',
      impact: [
        'Devised and executed a Python-based CLI dashboard app to streamline key internal workflow monitoring',
        'Engineered and launched a Chrome Extension to provide simplified access to key internal API functions, thereby enhancing team usability and convenience',
        'Architected and implemented a single-page web interface using VUE and Tailwind CSS, to deliver a more comprehensible workflow component breakdown, leveraging data from internal APIs'
      ],
      responsibilities: [
        'Providing Tier 1-2 support for user-generated issues via Jira, including user guidance, issue resolution, and escalation of bugs to the appropriate teams',
        'Engaging in digital asset/inventory troubleshooting, with a focus on codecs, formats, standards, and specification mismatches/misuses',
        'Automating routine and bulk tasks, including bulk order operations and workflow monitoring, using Python and internal APIs',
        'Furnishing team support and mentorship by tackling complex issues that present challenges for others',
        'Documenting standard operating procedures and workarounds for common issues in Confluence',
        'Conducted regular monitoring of key platform metrics to identify anomalous activity'
      ]
    },
    {
      role: 'Installation Verification Engineer',
      company: 'GlobalLogic, Hybrid',
      period: 'Feb 2019 – Oct 2021 (2Y 9M)',
      industry: 'Telecommunications',
      outline: 'Leading a Team of 5, supporting product lifecycle for a major telecom vendor',
      responsibilities: [
        'Managing workflow across a product line consisting of 10+ supported software versions',
        'Supervising the "Cleanroom" stage for the release of maintenance updates/patches',
        'Executing bare metal server setup using RedHat 7.4',
        'Overseeing the deployment of 15+ KVM/RHOSP VMs for product installation',
        'Developing, preparing, and executing Jenkins-based auto-QA tests with Groovy pipelines',
        'Handling installation and troubleshooting of product updates/patches',
        'Ensuring documentation matches actual product installation procedures',
        'Documenting workflows and bugs, and tracking activities in JIRA/Confluence',
        'Collaborating with global developer teams for troubleshooting',
        'Interviewing newcomers and mentoring team members',
        'Providing mentorship and support to the team by resolving complex issues that others find challenging to troubleshoot'
      ],
      impact: [
        'Contributed to the spotless releases of 20+ maintenance updates across the product line'
      ]
    },
    {
      role: 'Product Support Engineer',
      company: 'GlobalLogic, On-Site',
      period: 'Aug 2016 – Feb 2019 (2Y 7M)',
      industry: 'Telecommunications',
      outline:
        'Being Member of a Team of 3 Engineers, providing VAS platform support for a mobile operator',
      responsibilities: [
        'Facilitating improvement development through communication with customer and developers on business requirements and technical limitations',
        'Oracle RAC 11g configuration and support',
        'Several JVM-based applications lifecycle support and troubleshooting',
        'Linux servers’ deployment and support (RedHat 5.11, 6.09)'
      ],
      impact: [
        'Designed and deployed a highly-available cluster using native RedHat tools for a Web Gateway service',
        'Designed and deployed a Grafana-based visualisation solution for monitoring functional system load',
        'Designed and implemented a python CDR parser/stats gathering script for monitoring functional system load'
      ]
    }
  ],
  general_summary: [
    '10+ years of experience working in IT industry',
    'Expert knowledge of Linux environment',
    'Exceptional troubleshooting and problem-solving skills',
    'Great English',
    'Client- and Quality-oriented work ethics'
  ],
  recent_tech_experience: {
    Python:
      'QoL scripting, parsing/manipulating large text, managing multiple files, engaging http API endpoints for bulk operations',
    'Chrome Extensions': 'created a simple extension using VUE/Vite framework with Tailwind CSS',
    JavaScript: 'simple scripting with some TypeScript, Vue.js, jQuery',
    'Groovy/Jenkins': 'job/pipeline creation/modification',
    Spinnaker: 'pipeline creation, configuration, modification, execution',
    'GIT/Gerrit': 'code review and change tracking',
    Oracle: 'DBA wannabe, have experience of deploying and basic tuning of Oracle RAC 11g',
    'Basic PL/SQL': 'writing SELECTs and manipulating medium-complexity 3rd party queries',
    'C#, Java, Rust': 'Able to read moderately complex code, even Java to some extent',
    'AWS cloud stack': 'basic experience with Hashi, Nomad and AWS Batch',
    vSphere: 'a little hands-on experience with small-scale installation',
    Linux: 'have been managing Linux servers as part of the job for about 8 years',
    Ansible: 'can read and debug playbooks',
    Docker:
      'a little experience writing dockerfiles and compose, setting up and troubleshooting container networking',
    Kubernetes: 'troubleshooting container apps, basic networking troubleshooting',
    'Cloudflare Workers': 'basic understanding and usage of the CF ecosystem',
    'TCP/IP': 'good background in working with warious networks (L2&L3)',
    Rust: "Delving into learning Rust for it's performance and reliability"
  }
}

export default cv
