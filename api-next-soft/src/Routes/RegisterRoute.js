const RegistroController = require('../Controllers/RegistroController');
module.exports = (app) => {
   app.post('/usuario', RegistroController.post);
   app.put('/usuario/:id', RegistroController.put);
   app.delete('/usuario/:id', RegistroController.delete);
   app.get('/usuarios', RegistroController.get);
   app.get('/usuario/:id', RegistroController.getById);
}