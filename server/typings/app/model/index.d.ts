// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBlog = require('../../../app/model/blog');
import ExportBook = require('../../../app/model/book');
import ExportChapter = require('../../../app/model/chapter');
import ExportResource = require('../../../app/model/resource');
import ExportSection = require('../../../app/model/section');
import ExportUser = require('../../../app/model/user');
import ExportVideo = require('../../../app/model/video');

declare module 'egg' {
  interface IModel {
    Blog: ReturnType<typeof ExportBlog>;
    Book: ReturnType<typeof ExportBook>;
    Chapter: ReturnType<typeof ExportChapter>;
    Resource: ReturnType<typeof ExportResource>;
    Section: ReturnType<typeof ExportSection>;
    User: ReturnType<typeof ExportUser>;
    Video: ReturnType<typeof ExportVideo>;
  }
}
