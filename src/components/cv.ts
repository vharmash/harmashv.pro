const cv = {
  professional_experience: [
    {
      role: 'Senior Product Support Engineer',
      company: 'GlobalLogic, Remote',
      period: 'Oct 2021 – Present',
      impact: [
        'Designed and implemented a CLI Dashboard app to monitor several key workflows for internal team usage',
        'Designed and implemented a Chrome Extension to streamline access to select internal API functions, enhancing usability and convenience for the team',
        'Designed and implemented a single-page web UI to provide better workflow component breakdown using VUE, Tailwind CSS and pulling data from internal APIs'
      ],
      responsibilities: [
        'Tier 1-2 Support for user-generated issues via Jira, guiding users, resolving reported issues, escalating bugs to the responsible teams',
        'Digital Asset/Inventory troubleshooting, involving codecs, formats, standards, specifications mismatch/misuse',
        'Automation of mundane and bulk tasks, such as bulk order operations and workflow monitoring using Python and internal APIs',
        'Providing mentorship and support to the team by resolving complex issues that others find challenging to troubleshoot',
        'Documenting SOPs and WAs for the frequently encountered issues on Confluence',
        'Monitoring key platform metrics for unusual symptoms'
      ]
    },
    {
      role: 'Installation Verification Engineer',
      company: 'GlobalLogic, Hybrid',
      period: 'Feb 2019 – Oct 2021 (2Y 9M)',
      responsibilities: [
        'Managing the below workflow for the whole product line of 10+ currently supported software versions:',
        '“Cleanroom” stage for releasing maintenance updates/patches',
        'Bare metal RedHat 7.4 server install and setup',
        'Product installation (15+ KVM/RHOSP VMs deployment)',
        'Jenkins-based auto-QA tests environment: development, preparation and running of groovy pipelines',
        'Installation of Product Updates/Patches',
        'Troubleshooting of the above in case of issues',
        'Documentation verification on matching the actual product/patch/update installation flow',
        'Documenting workflows, bugs, and activity tracking in JIRA/Confluence',
        'Collaboration with developers from around the world on problem troubleshooting',
        'Interviewing newcomers and mentoring team members',
        'Technical Lead role for the team: providing mentorship and support to the team by resolving complex issues that others find challenging to troubleshoot, overseeing the team processes'
      ],
      impact: [
        'Contributed to the spotless release of 20+ maintenance updates across the product line'
      ]
    },
    {
      role: 'Product Support Engineer',
      company: 'GlobalLogic, On-Site',
      period: 'Aug 2016 – Feb 2019 (2Y 7M)',
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
    'Rapid decision making',
    'Great English',
    'Client- and Quality-oriented work ethics',
    'High capacity for learning and desire for self-improvement'
  ],
  recent_tech_experience: {
    Python:
      'QoL scripting, parsing/manipulating large text, managing multiple files, engaging http API endpoints for bulk operations',
    'Chrome Extensions': 'created a simple extension using VUE/Vite framework with Tailwind CSS',
    JavaScript: 'simple scripting with some TypeScript, Vue.js, jQuery',
    Groovy: 'pipeline creation/modification',
    Jenkins: 'job creation, configuration, modification, execution',
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