// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin = require('../../../app/controller/admin');
import ExportBlog = require('../../../app/controller/blog');
import ExportBook = require('../../../app/controller/book');
import ExportChapter = require('../../../app/controller/chapter');
import ExportHome = require('../../../app/controller/home');
import ExportResource = require('../../../app/controller/resource');
import ExportSection = require('../../../app/controller/section');
import ExportUpload = require('../../../app/controller/upload');
import ExportUser = require('../../../app/controller/user');
import ExportVideo = require('../../../app/controller/video');

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
    blog: ExportBlog;
    book: ExportBook;
    chapter: ExportChapter;
    home: ExportHome;
    resource: ExportResource;
    section: ExportSection;
    upload: ExportUpload;
    user: ExportUser;
    video: ExportVideo;
  }
}
