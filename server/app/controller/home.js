'use strict';

const Controller = require('egg').Controller;
// const checkAgent = require('../utils/checkagent');
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('admin/index.html');
    // if (ua) {

    // } else {
    //   await ctx.render('phone/home.html', data);
    // }
  }
}

module.exports = HomeController;
