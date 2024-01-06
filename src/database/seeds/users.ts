exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          id: '1df85e57-cecf-4134-9b25-6f911d0ef85c',
          username: 'username #1',
          email: 'example1@nest.it',
          password: 'password123',
        },
        {
          id: '00f98e83-4d57-4283-b4b7-4de6f05dd0d5',
          username: 'username #2',
          email: 'example2@nest.it',
          password: 'password123',
        },
        {
          id: 'ec685f7e-8618-4278-9f7b-d6cb3b89838a',
          username: 'username #3',
          email: 'example3@nest.it',
          password: 'password123',
        },
      ]);
    });
};
