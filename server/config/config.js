module.exports =  {
    "development": {
      "user": "root",
      "password": process.env.PASSWORD,
      "database": "trainer_client_development",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "user": "root",
      "password": process.env.PASSWORD,
      "database": "trainer_client_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "user": "root",
      "password": process.env.PASSWORD,
      "database": "trainer_client_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  };
