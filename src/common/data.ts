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
      name: 'github'
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
    desc: '采用 Angular 全家桶开发，仿照 Google Earth Engine 开发的项目，\
      国内暂无类似产品，经过这次项目熟练掌握了Typescript，了解并熟悉了Angular框架以及Rxjs库\
      在开发过程中因为第三方库Mapbox未能完美达到要求，遂封装第三方库添加相关内容，使其可以更好地服务于项目\
      并发布到公司私有npm仓库，学习到了编写到发布npm包的全部流程',
  },
  {
    name: 'GagoPublisher',
    remark: '全程个人独立开发',
    desc: '采用react全家桶 + Typecript开发，项目主要服务于公司内部数据上传自动切片的需求，\
      解放了大量劳动力，提高了生产效率，得到公司上下一致好评。项目从 开发环境搭建 到 部署上线\
      均由个人独立完成，完美的工程化开发体验，并且利用gitlabCI实现了自动部署。',
  },
  {
    name: 'demo管理系统',
    desc: '采用react全家桶 + Typecript开发，公司商务部用来向客户展示公司成果物demo的集中管理平台\
    系统中有50个demo，因公司发展需要需要将所有demo改造成经过管理系统点击自动登录，\
    因50个demo代码风格各异，逐个更改成本过高，因此编写了一个npm包集中处理登录逻辑,\
    大大减少了人力成本',
  }
];


export {
  head,
  intro,
  workExp,
  projectExp,
}