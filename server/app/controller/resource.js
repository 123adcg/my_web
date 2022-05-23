'use strict';

const Controller = require('egg').Controller;
// const checkAgent = require('../utils/checkagent');
class downloadController extends Controller {
  // 添加资源
  async create() {
    try {
      const body = await this.ctx.request.body;
      await this.ctx.service.resource.createResource(body);
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

  // 删除资源
  async destroy() {
    try {
      const id = await this.ctx.params.id;
      await this.ctx.service.resource.deleteResource(id);
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

  // 修改资源
  async update() {
    try {
      const body = await this.ctx.request.body;
      const id = await this.ctx.params.id;
      await this.ctx.service.resource.updateResource(id, body);
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
  // 查看资源
  async index() {
    try {
      const query = await this.ctx.request.query;
      const resourceList = await this.ctx.service.resource.getResourceList(query);
      this.ctx.body = {
        code: 20000,
        message: true,
        data: resourceList,
      };
    } catch (error) {
      this.ctx.body = {
        code: 30000,
        message: false,
      };
    }
  }


}

module.exports = downloadController;
