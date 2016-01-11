Services = new Mongo.Collection('services');

Router.configure({
    layoutTemplate: 'main',
});

Router.route('/', {
    name: 'home',
    template: 'home'
});

Router.route('/assets/:thing', {
    data: function(){
        return fs
    }
});

//Services.insert({name: 'ice', symbol: 'cloud', title: 'ICE', description: 'Apricity OS lets you put your favorite web apps on the desktop with ICE, a simple SSB (Site Specific Browser) manager. These specialized browsers minimize the number of steps between you wanting to use your favorite web app and you actually using it. This embodies our vision here at Apricity: we want to help make your workspace, and your playspace, more productive and elegant.'});
//Services.insert({name: 'resource', symbol: 'dashboard', title: 'PERFORMANCE', description: 'Apricity OS, by stripping down the Gnome desktop environment to its essentials, is able to be fast and fluid without sacrificing aesthetic appeal. Apricity OS idles at around 500 megabytes of memory usage, as opposed to other popular operating systems that idle at up to several gigabytes. This also helps bring boot times down to just a few seconds.'});
//Services.insert({name: 'ice', symbol: 'flag', title: 'BATTERY USAGE', description: 'Apricity OS comes with TLP, an advanced battery management utility that optimizes battery usage. TLP comes with an outstanding default configuration, but allows users to customize it to suit their specific needs. This, combined with Apricity OS\’s decreased resource usage, means you can keep working those extra hours away from home.'});
//Services.insert({name: 'pushbullet', symbol: 'star', title: 'PUSHBULLET', description: 'Staying connected between your devices can be tedious work, but Apricity OS comes with Pushbullet, a tool that lets you send links and small files between your devices, and lets you receive mobile notifications, texts, and phone calls across all your devices.'});
//Services.insert({name: 'wine', symbol: 'play-circle', title: 'UTILIZING WINDOWS PROGRAMS', description: 'It is possible to use many Windows programs and games on Apricity OS using Wine and PlayOnLinux. This helps ease the transition of switching from Windows to Apricity OS and helps you maintain the same workflow you used  on another operating system.'});
//Services.insert({name: 'btsync', symbol: 'refresh', title: 'SYNCTHING', description: 'Syncthing allows you to share large amounts data across multiple platforms allowing to be as connected as possible. Syncthing can transfer large files even faster than cloud-based alternatives. Furthermore, your files and personal information are stored only on local devices, not in the cloud, and are encrypted along every step in the file transfer process.'});
//Services.insert({name: 'sbackup', symbol: 'repeat', title: 'SBACKUP', description: 'SBackup, is one of the easiest ways to back up your computer. While remaining simple and easy to use, it has many notable features which makes it stand apart from the competition. SBackup is able to create both compressed and uncompressed backups, able to split uncompressed backups into multiple parts, supports scheduled backups and manual backups, can back up files to both local and remote destinations, and has a variety of advanced options such as logging, and email notification. '});
//Services.insert({name: 'liquidprompt', symbol: 'edit', title: 'POWERLINE-SHELL', description: 'Powerline-Shell, an adaptive and beautiful terminal prompt, brings the console into the modern world. Have all the most powerful computing tools available at your fingertips, with all the information you need beautifully displayed just a glance away. Naturally, Powerline is included in Apricity OS.'});
//Services.insert({name: 'apps', symbol: 'eye', title: 'HiDPI COMPATIBILITY', description: 'As an operating system for the modern day, Apricity OS has excellent hidpi compatibility. This means that Apricity OS, unlike many other operating systems, can be used on “Retina” style displays with a minimum of scaling issues.'});
//Services.insert({name: 'hidpi', symbol: 'plus', title: 'INCLUDED APPLICATIONS', description: 'Apricity OS comes with a suite of applications designed to create a more useful environment for both work and play, including LibreOffice, Totem, Gnome Photos, Gnome Music, Gnome Calendar, and Steam. A full list of included applications can be found on <a id="github-apps" href="https://github.com/agajews/ApricityOS/blob/master/apps.md">GitHub</a>.'});
//Services.insert({name: 'security', symbol: 'lock', title: 'SECURITY', description: 'Apricity OS keeps your information safe through the use of Uncomplicated Firewall (UFW).  UFW was created to be an intuitive firewall that is ready out of the box with default set of rules that serve the needs of the basic computer user. UFW also can be customized to suit the needs of the user.'});
//Services.insert({name: 'updates', symbol: 'arrow-up', title: 'UPDATES', description: 'Because Apricity OS is based on Arch Linux, it follows a rolling release cycle. This, when combined with the graphical Pamac package manager, ensures that you always have the most up to date packages. This also helps minimize potential security risks.'});