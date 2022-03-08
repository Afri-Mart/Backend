// Update with your config settings.
const sharedConfig = {
  client: "sqlite3",
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
  //sqlite3
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, done) => conn.run("PRAGMA foreign_keys = ON", done),
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: "./data/user.db3" },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: "./data/user.test.db3" },
  },
  production: {},
};
