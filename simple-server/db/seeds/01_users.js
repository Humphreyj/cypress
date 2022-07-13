/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 198,
          username: "testman",
          first_name: "Test",
          last_name: "Testman",
          state: "Tx",
          email: "testman@test.com",
          password:
            "$2b$14$Gwh7DJdd76fiM5OvMVTmX.dU0fvIc2uuxGLuUt69l.WMqCqaAGV.e",
          user_type: "user",
        },
        {
          id: 199,
          username: "admin",
          first_name: "Admin",
          last_name: "Guy",
          state: "Tx",
          email: "admin@test.com",
          password:
            "$2b$14$nRncPpxXCACjfooBIWzfU.ujbyAdi9NjDXHsC9Td0IxW7QgmLR0NS",
          user_type: "admin",
        },
        {
          id: 200,
          username: "postman",
          first_name: "Post",
          last_name: "Posterson",
          state: "AK",
          email: "posterson@test.com",
          password:
            "$2b$14$nRncPpxXCACjfooBIWzfU.ujbyAdi9NjDXHsC9Td0IxW7QgmLR0NS",
          user_type: "user",
        },
      ]);
    });
};
