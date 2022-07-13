/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posts").del();
  await knex("posts").insert([
    {
      id: 8000,
      title: "Posts and you",
      content:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex molestiae necessitatibus quis dignissimos optio, vero iste a voluptatibus nesciunt odit.",
      author: 200,
      created_at: "2020-06-22T11:20:16.812Z",
    },
    {
      id: 8001,
      title: "Dangers of reading posts",
      content:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex molestiae necessitatibus quis dignissimos optio, vero iste a voluptatibus nesciunt odit.",
      author: 200,
      created_at: "2020-06-20T11:20:16.812Z",
    },
    {
      id: 8002,
      title: "This is a serious post.",
      content:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex molestiae necessitatibus quis dignissimos optio, vero iste a voluptatibus nesciunt odit.",
      author: 200,
      created_at: "2020-06-20T11:20:16.812Z",
    },
  ]);
};
