// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Selected papers and workshop publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected research projects in generative modelling, probabilistic ML, and numerical methods.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "GitHub profile and selected repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic CV and selected research experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-completed-the-mphil-in-machine-learning-and-machine-intelligence-at-the-university-of-cambridge-with-distinction",
          title: 'Completed the MPhil in Machine Learning and Machine Intelligence at the University of...',
          description: "",
          section: "News",},{id: "news-started-as-a-research-assistant-at-the-university-of-cambridge-working-on-diffusion-based-generative-samplers-for-molecular-energy-functions",
          title: 'Started as a Research Assistant at the University of Cambridge, working on diffusion-based...',
          description: "",
          section: "News",},{id: "news-first-author-work-on-efficient-and-unbiased-boltzmann-sampling-appeared-at-ml-for-physical-sciences-at-neurips-2024",
          title: 'First-author work on efficient and unbiased Boltzmann sampling appeared at ML for Physical...',
          description: "",
          section: "News",},{id: "projects-efficient-boltzmann-sampling",
          title: 'Efficient Boltzmann Sampling',
          description: "Efficient sampling from Boltzmann distributions using consistency models and importance sampling.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/boltzmann-consistency-models/";
            },},{id: "projects-constrain-kl-for-variational-autoencoders",
          title: 'Constrain-KL for Variational Autoencoders',
          description: "A constrained optimisation approach for setting exact KL targets in beta-VAE training.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/constrain-kl-vae/";
            },},{id: "projects-diffusion-samplers-for-molecular-energies",
          title: 'Diffusion Samplers for Molecular Energies',
          description: "Diffusion-based generative samplers for molecular energy functions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/diffusion-molecular-samplers/";
            },},{id: "projects-deflation-techniques-for-nonlinear-pdes",
          title: 'Deflation Techniques for Nonlinear PDEs',
          description: "Sparse Jacobian-Newton deflation in Julia for finding multiple nonlinear PDE solutions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nonlinear-pde-deflation/";
            },},{id: "projects-teaching-and-peer-tutoring",
          title: 'Teaching and Peer Tutoring',
          description: "Tutorials and mentoring for first-year mathematics and numerical analysis students.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teaching-assistantship/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Fengzhe_Zhang_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%7A%32%38%37@%63%61%6D.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/fz920", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/fengzhe-zhang", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
