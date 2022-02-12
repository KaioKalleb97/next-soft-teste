const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'next_soft',
    port: process.env.MYSQL_PORT
})




exports.post = (req, res, next) => {
    if (req.body == null) {
        var dados = req.params;
    } else {
        var dados = req.body;
    }
    var query = `INSERT INTO ?? (id, cpf, nome, email, telefone, complemento, bairro, cidade, estado, numero, logradouro) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    var table = [
        "registros",
        dados.cpf,
        dados.nome,
        dados.email,
        dados.telefone,
        dados.complemento,
        dados.bairro,
        dados.cidade,
        dados.estado,
        dados.numero,
        dados.logradouro
    ];
    query = mysqlServer.format(query, table);
    connection.query(query, function (error, result) {
        if (error) {
            res.status(400).send({ erro: error, menssagem: 'Falha ao cadastrar' });
            return false;
        }

        res.status(201).send(result);
    });
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    if (req.body == null) {
        var dados = req.params;
    } else {
        var dados = req.body;
    }
    var query = `UPDATE registros SET  nome = ?, email = ?, telefone = ?, complemento = ?, bairro = ?, cidade = ?, estado = ?, numero = ?, logradouro = ? WHERE cpf = ?`;
    var table = [
        dados.nome,
        dados.email,
        dados.telefone,
        dados.complemento,
        dados.bairro,
        dados.cidade,
        dados.estado,
        dados.numero,
        dados.logradouro,
        id
    ];
    query = mysqlServer.format(query, table);
    connection.query(query, function (error, result) {
        if (error) {
            res.status(400).send({ erro: error, menssagem: 'Falha ao atualizar' });
            return false;
        }

        res.status(201).send(dados);
    });
};

exports.delete = (req, res, next) => {
    let id = req.params.id;

    var query = `DELETE FROM registros WHERE cpf = ?`;
    var table = [id];
    query = mysqlServer.format(query, table);
    connection.query(query, function (error, result) {
        if (error) {
            res.status(400).send({ erro: error, menssagem: 'Falha ao deletar' });
            return false;
        }

        res.status(200).send({ status: 200, message: 'Perfil deletado com sucesso' });
    });

};

exports.get = (req, res, next) => {
    var query = `SELECT * FROM registros`;
    var table = [];
    query = mysqlServer.format(query, table);

    connection.query(query, function (error, result) {
        if (error) {
            res.status(400).send({ erro: error, menssagem: 'Falha ao localizar' });
            return false;
        }
        res.status(200).send({ data: result });
    });
};

exports.getById = (req, res, next) => {
    let id = req.params.id;

    var query = `SELECT * FROM registros WHERE cpf = ?`;
    var table = [id];
    query = mysqlServer.format(query, table);

    connection.query(query, function (error, result) {
        if (error) {
            res.status(400).send({ erro: error, menssagem: 'Falha ao cadastrar' });
            return false;
        }
        if (result.length == 0) {
            res.status(200).send({ Resultados: 0 });
        } else {
            res.status(200).send(result[0]);
        }


    });

};