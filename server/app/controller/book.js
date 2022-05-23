'use strict';

const Controller = require('egg').Controller;
// const checkAgent = require('../utils/checkagent');
class BookController extends Controller {
  // 添加书籍
  async create() {
    try {
      const body = this.ctx.request.body;
      body.orderby = Number(body.orderby);
      await this.ctx.service.book.createBook(body);
      this.ctx.body = {
        code: 20000,
        message: true,
      };
    } catch (error) {
      this.ctx.body = {
        code: 30000,
        message: false,
      };
    }
  }

  // 查看书籍列表
  async index() {
    try {
      const query = this.ctx.request.query;
      const bookList = await this.ctx.service.book.getBookList(query);
      this.ctx.body = {
        code: 20000,
        message: true,
        data: bookList,
      };
    } catch (error) {
      this.ctx.body = {
        code: 30000,
        message: false,
      };
    }
  }

  // 修改书籍
  async update() {
    try {
      const body = this.ctx.request.body;
      const id = this.ctx.params.id;
      await this.ctx.service.book.updateBook(id, body);
      this.ctx.body = {
        code: 20000,
        data: true,
      };
    } catch (error) {
      this.ctx.body = {
        code: 30000,
        message: false,
      };
    }
  }
  // 删除
  async destroy() {
    try {
      const id = this.ctx.params.id;
      await this.ctx.service.book.deleteBook(id);
      this.ctx.body = {
        code: 20000,
        message: true,
      };
    } catch (error) {
      this.ctx.body = {
        code: 30000,
        message: false,
      };
    }
  }

}

module.exports = BookController;
