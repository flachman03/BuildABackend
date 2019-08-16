module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:/football_library'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};
 