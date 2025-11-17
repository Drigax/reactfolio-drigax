const INFO = {
  main: {
    title: 'Reactfolio-drigax by nicklowbar',
    name: 'Nicholas Barlow',
    email: 'nicklowbar@gmail.com',
    logo: '../images/logo.png',
  },

  socials: {
    twitter: 'https://twitter.com/nicklowbar',
    bluesky: 'https://bsky.app/profile/nicklowbar.bsky.social',
    mastodon: 'https://peoplemaking.games/@nicklowbar',
    github: 'https://github.com/nicklowbar',
    linkedin: 'https://linkedin.com/in/nicholas-z-barlow',
    instagram: 'https://instagram.com/nicklowbar',
  },

  homepage: {
    title: 'Experienced Systems Programmer that loves to do cool stuff.',
    description:
        `I am a Software Engineer with expertise in a wide array of operating systems, game engines, 3d frameworks, full stack web development tools, and GPU acceleration frameworks.\r\n\
			
		I have experience in building performant, feature-rich, secure and reliable applications using various frameworks, environments, technologies and constraints. \r\n\
			
		I love solving difficult problems and take every new opportunity to widen my skillset.\r\n\
			
		I am passionate about writing high-quality, highly-maintainable solutions that implement healthy software practices and leverage industry standards.\r\n\
			
		I am always looking for new opportunities to do cool stuff.`,
  },

  about: {
    title: 'I’m Nicholas Barlow. ',
    description:
        'I\'m a programmer suffering from an art habit. I\'m a creative that crafts software solutions. I have experience working on Operating sytsems, Linux-based multi-application IoT solutions, Real time rendering, Cross platform game development, and Network programming. Currently based in the Seattle Area.',
  },

  articles: {
    title: 'All my life I have put myself in positions to do cool stuff.',
    description:
        `I hope by sharing my experiences, I can help motivate the next generation of creators to follow suit.
         
        Here is a collection of writings where I share my thoughts on different aspects of programming, game design, leadership, art, and more.`,
  },

  projects: [
    {
      title: 'Rooftop Rampage',
      description:
          'Rooftop Rampage is a fighting game developed to demonstrate implementing character control, multi modal input, and composited 2.5D art to make a complete game in the Babylon.js WebGPU framework.',
      logo: '/images/RRicon.ico',
      linkText: 'Play Now',
      link: 'https://drigax.github.io/RooftopRampage/',
    },

    {
      title: 'Parkour Posse',
      description:
          'Parkour Posse is an online co-operative game where players navigate through parkour obstacle courses, working together to get the fastest time. Developed in Unity with the Mirror Networking framework.',
      logo: '/images/parkour-posse.png',
      linkText: 'Buy Now',
      link: 'https://store.steampowered.com/app/1666800/Parkour_Posse/',
    },

    {
      title: 'Chosen Fate',
      description:
          'Chosen Fate was a multiplayer fighting game where players can team up with their own customizable heroes in fantastic worlds. Developed in Unity using the UNET multiplayer framework.',
      logo: '/images/chosenfate-icon.jpg',
      linkText: 'Learn More',
      link: 'http://chosenfate.com/',
    },

    {
      title: 'Discord Auto Updater',
      description:
          'This is a utility I wrote that automatically updates the Discord for Linux client to the latest version. This was implemented as a collection of bash scripts that install a systemd service that facilitates periodic update checks and installations.',
      logo: '/images/discord-icon.png',
      linkText: 'Learn More',
      link:
          'https://github.com/nicklowbar/SystemHelpers/tree/main/system-setup/update-discord',
    },

    {
      title: 'VArm',
      description:
          'VArm was a pneumatic haptic device, where muscular-antagonistic mechanical forces can be applied to the wearer. This system allowed for simulation of large and complex forces on a wearer\'s body.',
      logo: '/images/arm-logo-white.png',
      linkText: 'Learn More',
      link: 'https://www.youtube.com/watch?v=vEsA_RAtAXA'
    },
  ],

  works: [
    {
      imageSrc: `${process.env.PUBLIC_URL}/images/cantankerouscreations.png`,
      imageAlt: `Cantankerous Creations`,
      companyName: `Cantankerous Creations`,
      title: `CEO & Founder`,
      duration: `2024 - Present`,
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/images/riotgames.png`,
      imageAlt: `Riot Games`,
      companyName: `Riot Games`,
      title: `Senior Software Engineer`,
      duration: `2021 - 2024`,
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/images/microsoft.png`,
      imageAlt: `Microsoft`,
      companyName: `Microsoft`,
      title: `Software Engineer II - Babylon.js`,
      duration: `2019 - 2021`,
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/images/microsoft.png`,
      imageAlt: `Microsoft`,
      companyName: `Microsoft`,
      title: `Software Engineer - Windows Graphics`,
      duration: `2017 - 2019`,
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/images/microsoft.png`,
      imageAlt: `Riot Games`,
      companyName: `Riot Games`,
      title: `Software Engineering Intern - Windows Server Networking`,
      duration: `Summer 2015`,
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/images/microsoft.png`,
      imageAlt: `Microsoft`,
      companyName: `Microsoft`,
      title: `Software Engineering Intern - Office 365 Licensing`,
      duration: `Summer 2015`,
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/images/cisco.png`,
      imageAlt: `Cisco Systems`,
      companyName: `Cisco Systems`,
      title: `Software Validation Intern - Routing`,
      duration: `Summer 2014`,
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/images/philips.png`,
      imageAlt: `Philips Healthcare`,
      companyName: `Philips Healthcare`,
      title: `Software Engineering Intern - User Interface`,
      duration: `Spring 2014`,
    },
    {
      imageSrc: `${process.env.PUBLIC_URL}/images/rockwell.png`,
      imageAlt: `Rockwell Collins`,
      companyName: `Rockwell Collins`,
      title: `Software Engineering Intern - User Interface`,
      duration: `Summer 2013`,
    },
  ],
};

export default INFO;
