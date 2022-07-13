const server = require("./server");
const PORT = 3030;
const routes = require("./api/apiRoutes");

server.use("/api", routes);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
