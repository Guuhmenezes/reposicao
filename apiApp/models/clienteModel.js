const {connection} = require(`../config/db`);

const modelCliente = {

    // SELECIONA TODOS OS REGISTROS DA TABELA CLIENTES;
    selecionaTodosClientes: async () => {
        try {
            
            const conn = await connection();
            const [rows] = await conn.query('select * from tbl_cliente;');
            return rows;

        } catch (error) {
            throw error;
        }
    },
    // SELECIONA O REGISTRO DESEJADO NA TABELA CLIENTES;
    selectOneCliente: async (id) => {
        try {
            const conn = await connection();
            const sql = 'SELECT * FROM tbl_clientes WHERE id=?;';
            const values = id;
            const [rows] = await conn.query(sql, values);
            return rows;

        } catch (error) {
            throw error;
        }
    },
    // SELECIONA O REGISTRO DESEJADO NA TABELA CLIENTES POR NOME;
    selectClienteNome: async (id) => {
        try {
            const conn = await connection();
            const sql = `SELECT * FROM tbl_clientes WHERE nome=?;`;
            const values = `${id}`;
            const [rows] = await conn.query(sql, values);
            return rows;

        } catch (error) {
            throw error;
        }
    },
    // INSERE UM NOVO REGISTRO NA TABELA CLIENTES;
    insertCliente: async (cliente) => {
        try {
            const conn = await connection();
            const sql = 'INSERT INTO tbl_cliente(nome, dataNasc, cpf) VALUES (?,?,?)';
            const values = [cliente.nome, cliente.dataNasc, cliente.cpf];
            return await conn.query(sql, values);

        } catch (error) {
            throw error;
        }
    },

    






    // ATUALIZA UM REGISTRO DA TABELA CLIENTES;
    updateCliente: async (id, cliente) => {
        try {
            const conn = await connection();
            const sql = 'UPDATE clientes SET nome=?, dataNasc=?, Cpf=? WHERE id=?';
            const values = [cliente.nome, cliente.dataNasc, cliente.cpf, id];
            return await conn.query(sql, values);

        } catch (error) {
            throw error;
        }
    },
    // DELETA UM REGISTRO DA TABELA CLIENTES;
    deleteCliente: async (id) => {
        try {
            const conn = await connection();
            const sql = 'DELETE FROM clientes where id=?;';
            return await conn.query(sql, [id]);

        } catch (error) {
            throw error;
        }
    },
    
}

module.exports = modelCliente ;