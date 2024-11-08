
const Hapi = require('@hapi/hapi');
// const booksRoutes = require('./routes/books');

const init = async () => {
  const server = Hapi.server({
    port: process.env.APP_PORT || 9000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

//   server.route(booksRoutes);

  await server.start();
  console.log(`Server is running on ${server.info.uri}`);
};

init();
