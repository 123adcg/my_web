'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // // 网页
  router.get('/', controller.home.index);
  // router.get('/blog', controller.blog.getBlogList);
  // router.get('/blog/:id', controller.blog.getBlogDetail);
  // router.get('/video', controller.video.getVideoList);
  // router.get('/video/:id', controller.video.getVideoDetail);
  // router.get('/resource', controller.resource.getResourceList);
  // router.get('/book', controller.book.getBookList);
  // router.get('/book/:id', controller.book.toFirstSection);
  // router.get('/section/:id', controller.section.getSectionDetail);

  // //后台功能接口
  router.post('/login', controller.admin.login); // 登录
  // router.get('/admin', controller.admin.index); // 后台登录
  router.resources('book', '/book', app.middleware.checktoken(), controller.book); // 书籍的管理
  router.resources('chapter', '/chapter', app.middleware.checktoken(), controller.chapter); // 章的管理
  router.resources('section', '/section', app.middleware.checktoken(), controller.section); // 节的管理
  router.resources('user', '/user', app.middleware.checktoken(), controller.user); // 用户的管理
  router.resources('blog', '/blog', controller.blog); // 博客管理
  router.resources('video', '/video', app.middleware.checktoken(), controller.video); // 视频的管理
  router.resources('resources', '/resource', app.middleware.checktoken(), controller.resource); // 下载的管理
  router.post('/upload', controller.upload.index); // 添加内容的图片

};
