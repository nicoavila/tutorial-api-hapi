module.exports = {
  name: 'ApiRoutes',
  register: async (server, options) => {
    server.route([
      {
        method: 'GET',
        path: '/',
        handler: async (req, res) => {
          return 'Hola Noders!';
        }
      },
      {
        method: 'GET',
        path: '/usuarios/{nombre?}',
        handler: async (req, res) => {
          const nombre = (req.params.nombre) ? req.params.nombre : 'invitado';
          return `Hola ${nombre}!`;
        }
      },
      {
        method: 'POST',
        path: '/usuarios',
        handler: async (req, res) => {
          const newUser = {
            nombre: req.payload.nombre,
            apellido: req.payload.apellido
          };
          return res.response({
            datos: newUser
          }).type('application/json');
        }
      },
      {
        method: 'PUT',
        path: '/usuarios/{id}',
        handler: async (req, res) => {
          const newUser = {
            nombre: req.payload.nombre,
            apellido: req.payload.apellido
          };
          return res.response({
            datos: newUser,
            mensaje: `Usuario ID: ${req.params.id} modificado exitósamente!`
          }).type('application/json');
        }
      },
      {
        method: 'DELETE',
        path: '/usuarios/{id}',
        handler: async (req, res) => {
          return res.response({
            mensaje: `Usuario ID: ${req.params.id} eliminado exitósamente!`
          }).type('application/json');
        }
      }
    ]);
  }
}