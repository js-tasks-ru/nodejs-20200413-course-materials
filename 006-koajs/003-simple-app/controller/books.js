const db = require('../db/data.json');

module.exports = {
  getAll(ctx) {
    ctx.response.body = db.map((record, id) => {
      return {id, ...record}
    });
  },

  getById(ctx) {
    const {id} = ctx.params;
    ctx.body = db[id];
  },

  create(ctx) {
    const {author, title} = ctx.request.body;
    const newLength = db.push({author, title});
    ctx.body = {
      id: newLength - 1,
      ...db[newLength - 1],
    };
  },

  update() {
  },

  delete() {

  }
}
