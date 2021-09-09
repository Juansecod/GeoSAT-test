const client = require('../config/database.config');
const tableName = 'predios';

const getPredios = async (req, res) => {
    const data = await client.query(`SELECT * FROM "${tableName}"`)
        .then(({ rowCount:cantidad, rows:predios }) => {
            return {
                cantidad,
                predios
            };
        })
        .catch(({message}, code) => {
            return {message, code: code || 400};
        });
    return res.status((data.code) || 200).json(data);
};

const postPredios = async (req, res) =>{
    const { numeroPredial, nombre, avaluo, departamento, municipio } = req.body;
    const sqlSentence = `INSERT INTO "${tableName}"("numeroPredial", nombre, avaluo, departamento, municipio) VALUES ($1, $2, $3, $4, $5)`;
    try{
        if(typeof(numeroPredial) != 'number' || typeof(avaluo) != 'number') throw new Error('Validar campos de entrada');
        const exist = await client.query(`SELECT * FROM "${tableName}" WHERE "numeroPredial" = ${numeroPredial}`)
            .then(row => {
                if(row.rows.length > 0) throw new Error('Predio ya existente');
            })
            .catch(({message}) => {
                throw new Error(message);
            });
        const data = await client.query(sqlSentence, [numeroPredial, nombre, avaluo, departamento, municipio])
            .catch(({ message }) => { 
                throw new Error(message);
            });
        const id = await client.query(`SELECT "idPredio" FROM "${tableName}" WHERE "numeroPredial" = ${numeroPredial}`)
            .then(({ rows:predio }) => {
                const { idPredio } = predio[0];
                return idPredio;
            })
            .catch(({message}) => {
                throw new Error(message);
            });
        res.status(200).json({
            msg: `Se ha insertado el predio con el numero predial ${numeroPredial} con exito.`, 
            id
        });
    }catch(error){
        return res.status(400).json({msg: error.message});
    }
};

const putPredios = async (req,res) => {
    const { id } = req.query;
    const { numeroPredial, nombre, avaluo, departamento, municipio } = req.body;
    try{
        if(numeroPredial != undefined && typeof(numeroPredial) != 'number') throw new Error('Validar campos de entrada');
        if(avaluo != undefined && typeof(avaluo) != 'number') throw new Error('Validar campos de entrada');
        
        let sqlSentence = `UPDATE "${tableName}" SET `;
        let valores = '';
        if(numeroPredial != undefined) valores = valores + `"numeroPredial" = ${numeroPredial}`;
        if(nombre != undefined) valores = valores + `, nombre = '${nombre}'`;
        if(avaluo != undefined) valores = valores + `, avaluo = ${avaluo}`;
        if(departamento != undefined) valores = valores + `, departamento = '${departamento}'`;
        if(municipio != undefined) valores = valores + `, municipio = '${municipio}'`;
        if (valores[0] == ",") valores = valores.replace(",","");

        sqlSentence = sqlSentence + valores + ` WHERE "idPredio" = ${id}`;

        let data = await client.query(sqlSentence)
            .catch(({message}) => {
                throw new Error(message);
            });
        if(data.rowCount == 0) throw new Error('Ha ocurrido un error');
        res.status(200).json({
            msg: 'Se ha actualizado el predio con exito.'
        });
    }catch(error){
        return res.status(400).json({msg: error.message});
    }
};

const deletePredio = async (req, res) => {
    const {id} = req.query;
    const tables = ['propietarios', 'terrenos', 'construcciones', 'predios'];
    try{
        const data = await tables.map( async tableName => {
            try {
                let sqlSentence = `DELETE FROM ${tableName} WHERE "idPredio" = $1`;
                const data = await client.query(sqlSentence, [id])
                    .then(data => {
                        const { rowCount } = data;
                        if(rowCount != 1 && tableName == 'predios') throw new Error('Ha ocurrido un error');
                        return rowCount;
                    })
                    .catch(({ message }) => {
                        throw new Error(message);
                    });
            } catch ({message}) {
                throw new Error(message);
            }
        });
        await data[(data.length - 1)]
            .catch(({message}) => {
                throw new Error(message);
            });
        return res.status(200).json({
            msg: 'Predio eliminado con exito'
        });
    }catch({message}){
        return res.status(400).json({msg: message});
    }

};

module.exports = { getPredios, postPredios, putPredios, deletePredio };