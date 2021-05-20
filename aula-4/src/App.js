const express = require('express');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger/swagger.json')
const UserController = require('./controllers/UserController')
const ApiConstants = require('./enums/ApiConstants')

class App {
    start() {
        this.setupExpress();
        this.loadControllers();
        this.startServer();
    }

    setupExpress() {
        //criando instancia do express
        this.express = express();

        //config o swagger na API
        this.express.use(`${ApiConstants.BASE_PATH}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerFile))

        //definindo middleware para imprimir cada requeisição nova
        this.express.use((req, res, next) => {
            console.log(req.method, req.url);
            next();
        });
    }
    //carrega toda lissta de controllers que a aplicaçção terá
    loadControllers() {
        this.controllers = [
            new UserController(this.express)
              ];
    }
    //inicia  o servidor da api na porta 3001
    startServer() {
        const port = 3001;
        this.express.listen(port, () => {
            console.log(`API esta executando na port ${port}.`)
        });
    }
}

module.exports = App;