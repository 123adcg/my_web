// eslint-disable-next-line strict
module.exports = app => {
  app.beforeStart(async function() {
    // await app.model.sync({ force: true }); // 开发环境使用，会删除数据表
    await app.model.sync({});
  });
};
