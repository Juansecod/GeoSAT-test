const client = require('../config/database.config');
const tableName = 'construcciones';

const getConstruccionesByPredio = async (req, res) => {
    const { id } = req.query;
    const data = await client.query(`SELECT * FROM "${tableName}" WHERE "idPredio" = ${id}`)
        .then(({ rowCount:cantidad, rows:construcciones }) => {
            return {
                cantidad,
                construcciones
            };
        })
        .catch(({message}, code) => {
            return {message, code: code || 400};
        });
    return res.status((data.code) || 200).json(data);
};

const postConstrucciones = async (req, res) =>{
    const { id:idPredio } = req.query;
    const { areaTotal, direccion, numeroPisos, tipo } = req.body;
    const sqlSentence = `INSERT INTO "${tableName}"("idPredio", "areaTotal", direccion, "numeroPisos", tipo) 
        VALUES ($1, $2, $3, $4, $5)`;
    const values = [idPredio, areaTotal, direccion, numeroPisos || 1, tipo || null];
    try{
        const data = await client.query(sqlSentence, values)
            .catch(({ message }) => { 
                throw new Error(message);
            });
        res.status(200).json({
            msg: 'Se ha insertado con exito la construccion en el predio seleccionado'
        });
    }catch(error){
        return res.status(400).json({msg: error.message});
    }
};

const putConstrucciones = async (req,res) => {
    const { id } = req.query;
    const { areaTotal, direccion, numeroPisos, tipo } = req.body;
    try{
        let sqlSentence = `UPDATE "${tableName}" SET `;
        let valores = '';
        if(numeroPredial != undefined) valores = valores + `"areaTotal" = ${areaTotal}`;
        if(nombre != undefined) valores = valores + `, direccion = '${direccion}'`;
        if(avaluo != undefined) valores = valores + `, "numeroPisos" = ${numeroPisos}`;
        if(departamento != undefined) valores = valores + `, tipo = '${tipo}'`;
        if (valores[0] == ",") valores = valores.replace(",","");

        sqlSentence = sqlSentence + valores + ` WHERE "idConstruccion" = ${id}`;

        let data = await client.query(sqlSentence)
            .catch(({message}) => {
                throw new Error(message);
            });
        if(data.rowCount == 0) throw new Error('Ha ocurrido un error');
        res.status(200).json({
            msg: 'Se ha actualizado la construccion con exito.'
        });
    }catch(error){
        return res.status(400).json({msg: error.message});
    }
};

const deleteConstruccion = async (req, res) => {
    const sqlSentence = `DELETE FROM ${tableName} WHERE "idConstruccion" = $1`;
    const { id } = req.query;
    try{
        const data = await client.query(sqlSentence, [id])
            .then(data => {
                const { rowCount } = data;
                if(rowCount != 1) throw new Error('Ha ocurrido un error');
            })
            .catch(({ message }) => { 
                throw new Error(message);
            });
        res.status(200).json({msg: 'Construccion eliminada con exito'});
    }catch(error){
        return res.status(400).json({msg: error.message});
    }
};

module.exports = { getConstruccionesByPredio, postConstrucciones, putConstrucciones, deleteConstruccion };