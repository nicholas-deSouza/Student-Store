const lowd = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const path = require("path");

class Storage {
  constructor() {
    this.path = `${__dirname}/db.json`
    this.setup()
  }

  async setup() {
    const adapter = new FileSync(this.path)
    this.db = lowd(adapter)
    this.db.defaults({ transfers: [], transactions: [] }).write()
  }

  get(key) {
    return this.db.get(key)
  }
}

module.exports = {
  storage: new Storage(),
}


