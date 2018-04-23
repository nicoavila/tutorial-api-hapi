const Hapi = require('hapi');
const routes = require("./routes");

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  app: {
    version: 1
  }
});

const iniciarServer = async () => {
  try {
    await server.register(routes);
    await server.start();
    console.log(`Servidor corriendo en: ${server.info.uri}`);
  } catch (error) {
    console.log('Error al iniciar el servidor Hapi');
  }
};

iniciarServer();