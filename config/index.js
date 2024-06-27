// @ts-check

/**
 * The blog's configuration. Start here after cloning the repo.
 * Hovering over the properties (in an editor like VSCode) will provide additional information about them.
 */

/** @type {import('./types').BlogConfig} */
const blogConfig = {
  url: 'https://sogang-game-tech-blog.vercel.app',
  title: '서강대학교 미래교육원',
  titleParts: ['서강대학교', '미래교육원'],
  author: '서강대학교 미래교육원',
  pages: {
    home: {
      title: '서강대학교 미래교육원 수강생 블로그',
      description:
        "2024년 봄학기, 소프트웨어공학 수업 수강생들이 학기동안 배웠던 내용 중 자신이 중요하다고 생각하는 주제를 선정하여 블로그 글로 정리하였습니다. 이 저장소에선 학생들이 작성한 글을 정리합니다.",
    },
    posts: {
      url: '/posts',
      title: 'Posts',
      description:
        "게임개발, 유니티, C++, C#, 디자인패턴 등 다양한 주제로 작성된 블로그 글을 읽어보세요.",
    },
  },
  theme: {
    accentColor: {
      light: '#be123c',
      dark: '#fda4af',
    },
    codeBlockTheme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  footerLinks: {
    github: 'https://github.com/sggameopensource',
  },
  topics: [
    '게임개발',
    '유니티',
    '클린코드',
    'C++',
    'C#',
    '디자인패턴',
  ],
};

module.exports = { blogConfig };
