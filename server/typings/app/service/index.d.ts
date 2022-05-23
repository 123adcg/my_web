// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportBlog = require('../../../app/service/blog');
import ExportBook = require('../../../app/service/book');
import ExportChapter = require('../../../app/service/chapter');
import ExportResource = require('../../../app/service/resource');
import ExportSection = require('../../../app/service/section');
import ExportUser = require('../../../app/service/user');
import ExportVideo = require('../../../app/service/video');
import ExportWebsite = require('../../../app/service/website');

declare module 'egg' {
  interface IService {
    blog: AutoInstanceType<typeof ExportBlog>;
    book: AutoInstanceType<typeof ExportBook>;
    chapter: AutoInstanceType<typeof ExportChapter>;
    resource: AutoInstanceType<typeof ExportResource>;
    section: AutoInstanceType<typeof ExportSection>;
    user: AutoInstanceType<typeof ExportUser>;
    video: AutoInstanceType<typeof ExportVideo>;
    website: AutoInstanceType<typeof ExportWebsite>;
  }
}
