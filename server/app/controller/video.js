'use strict';

const Controller = require('egg').Controller;
// const checkAgent = require('../utils/checkagent');
class VideoController extends Controller {

  // 添加视频
  async create() {
    try {
      const body = await this.ctx.request.body;
      await this.ctx.service.video.createVideo(body);
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

  // 删除视频
  async destroy() {
    try {
      const id = await this.ctx.params.id;
      // eslint-disable-next-line no-unused-vars
      const destroy = await this.ctx.service.video.deleteVideo(id);
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
  // 修改视频
  async update() {
    try {
      const body = await this.ctx.request.body;
      const id = await this.ctx.params.id;
      const update = await this.ctx.service.video.updateVideo(id, body);
      this.ctx.body = {
        code: 20000,
        message: update,
      };
    } catch (error) {
      this.ctx.body = {
        code: 30000,
        message: false,
      };
    }
  }

  async show() {
    try {
      const id = await this.ctx.params.id;
      const video = await this.ctx.service.video.getVideoById(id);
      this.ctx.body = {
        code: 20000,
        message: true,
        data: video,
      };
    } catch (error) {
      console.log(error);
      this.ctx.body = {
        code: 30000,
        message: false,
      };
    }
  }

  async index() {
    try {
      const query = this.ctx.request.query;
      const videoList = await this.ctx.service.video.getVideoList(query);
      this.ctx.body = {
        code: 20000,
        message: true,
        data: videoList,
      };
    } catch (error) {
      console.log(error);
      this.ctx.body = {
        code: 30000,
        message: false,
      };
    }
  }


}

module.exports = VideoController;
