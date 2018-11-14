import avatarSrc from '../static/imgs/genji.jpeg'
import githubSrc from '../static/imgs/github.svg';
import blogSrc from '../static/imgs/blog.svg';
import websiteSrc from '../static/imgs/web.svg';
import birthdaySrc from '../static/imgs/birthday.svg';
import schoolSrc from '../static/imgs/school.svg';
import phoneSrc from '../static/imgs/phone.svg';
import emailSrc from '../static/imgs/email.svg';
import gagoSrc from '../static/imgs/gago.svg';
import tencentSrc from '../static/imgs/tencent.svg';

  const head = {
    avatar: avatarSrc,
    quote: '越努力， 越幸运',
    author: '王航',
    links: [
      {
        icon: githubSrc,
        href: '/',
        name:'github'
      },
      {
        icon: blogSrc,
        href: '/',
        name: 'blog'
      },
      {
        icon: websiteSrc,
        href: '/',
        name: 'website'
      },
    ]
  }

  const intro = [
    {
      name: '生日',
      icon: birthdaySrc,
      desc: '1995.7.15',
    },
    {
      name: '毕业院校',
      icon: schoolSrc,
      desc: '大连东软信息学院（本科）',
    },
    {
      name: '手机',
      icon: phoneSrc,
      desc: '15631220218',
    },
    {
      name: '邮箱',
      icon: emailSrc,
      desc: 'wanghangan@gmail.com',
    },
  ];
  const workExp = [
    {
      company: '大连腾讯',
      position: '前端实习生',
      time: '2017.10 - 2018.1',
      icon: tencentSrc,
      desc: '在职期间负责 “互联网+ 项目管理系统” 的开发与维护，在开发新功能的同时改造老旧代码，重构了部分代码，使得开发更高效，bug率明显减少，并独立开发了微信端，解决了pc的限制，随时随地都可办公。',
    },
    {
      company: '佳格天地',
      position: '前端开发',
      time: '2018.3 - 至今',
      icon: gagoSrc,
      desc: '在职期间负责老项目 GagoEngine GagoMill 的开发与维护 以及新项目 GagoPublisher的开发\
      其中GagoEngine 为Angular开发 为此用了一周时间快速学习Angular达到了可以上手的程度。\
      GagoPublisher前后台均为个人独立开发，本着“高内聚、低耦合”的原则，代码实现非常优雅。',
    },
  ];
  const projectExp = [
    {
      name: 'GagoEngine',
      desc:'在职期间负责老项目 GagoEngine GagoMill 的开发与维护 以及新项目 GagoPublisher的开发\
      其中GagoEngine 为Angular开发 为此用了一周时间快速学习Angular达到了可以上手的程度。\
      GagoPublisher前后台均为个人独立开发，本着“高内聚、低耦合”的原则，代码实现非常优雅。',
    },
    {
      name: 'GagoMill',
      desc: '在职期间负责老项目 GagoEngine GagoMill 的开发与维护 以及新项目 GagoPublisher的开发\
      其中GagoEngine 为Angular开发 为此用了一周时间快速学习Angular达到了可以上手的程度。\
      GagoPublisher前后台均为个人独立开发，本着“高内聚、低耦合”的原则，代码实现非常优雅。',
    },
    {
      name: 'GagoPublisher',
      desc:'在职期间负责老项目 GagoEngine GagoMill 的开发与维护 以及新项目 GagoPublisher的开发\
      其中GagoEngine 为Angular开发 为此用了一周时间快速学习Angular达到了可以上手的程度。\
      GagoPublisher前后台均为个人独立开发，本着“高内聚、低耦合”的原则，代码实现非常优雅。',
    }
  ];


export {
  head,
  intro,
  workExp,
  projectExp,
}