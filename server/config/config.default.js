/* eslint valid-jsdoc: "off" */
'use strict';

const fs = require('fs');
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1652695081568_9645';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
  };
  config.cors = {
    origin: '*', // "*"代表所有的跨域请求
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  config.jwt = {
    secret: 'zl_blog',
  };
  config.sequelize = {
    dialect: 'mysql',
    // eslint-disable-next-line no-undef
    database: 'blog_zl',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Lin063063',
    timezone: '+08:00',
  };
  // post请求配置
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // 设置静态文件目录
  config.static = {
    prefix: '/', // 访问路径
    dir: path.join(appInfo.baseDir, 'app/public'), // 设置静态文件目录
  };
  return {
    ...config,
    ...userConfig,
  };
};
