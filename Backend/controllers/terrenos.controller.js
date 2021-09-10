const client = require('../config/database.config');
const tableName = 'terrenos';

const getTerrenoByPredio = async (req, res) => {
    const { id } = req.query;
    const data = await client.query(`SELECT * FROM "${tableName}" WHERE "idPredio" = ${id}`)
        .then(({ rowCount:cantidad, rows:terreno }) => {
            return {
                cantidad,
                terreno
            };
        })
        .catch(({message}, code) => {
            return {message, code: code || 400};
        });
    return res.status((data.code) || 200).json(data);
};

const postTerrenos = async (req, res) =>{
    const { id:idPredio } = req.query;
    const { area, valorComercial, tipo, fuentesAgua, construcciones } = req.body;
    const sqlSentence = `INSERT INTO "${tableName}"("idPredio", "area", "valorComercial", tipo, "fuentesAgua", construcciones) 
        VALUES ($1, $2, $3, $4, $5, $6)`;
    const values = [idPredio,  area, valorComercial, tipo, fuentesAgua || false, construcciones || false];
    try{
        const exist = await client.query(`SELECT * FROM "${tableName}" WHERE "idPredio" = ${idPredio}`)
            .then(row => {
                if(row.rows.length > 0) throw new Error('Predio con un terreno ya registrado');
            })
            .catch(({message}) => {
                throw new Error(message);
            });
        const data = await client.query(sqlSentence, values)
            .catch(({ message }) => { 
                throw new Error(message);
            });
        res.status(200).json({
            msg: 'Se ha insertado con exito el terreno en el predio seleccionado' 
        });
    }catch(error){
        return res.status(400).json({msg: error.message});
    }
};

const putTerrenos = async (req,res) => {
    const { id } = req.query;
    const { area, valorComercial, tipo, fuentesAgua, construcciones } = req.body;
    try{
        let sqlSentence = `UPDATE "${tableName}" SET `;
        let valores = '';
        if(numeroPredial != undefined) valores = valores + `area = ${area}`;
        if(nombre != undefined) valores = valores + `, "valorComercial" = ${valorComercial}`;
        if(avaluo != undefined) valores = valores + `, tipo = '${tipo}''`;
        if(departamento != undefined) valores = valores + `, fuentesAgua = ${fuentesAgua}`;
        if(municipio != undefined) valores = valores + `, construcciones = ${construcciones}`;
        if (valores[0] == ",") valores = valores.replace(",","");

        sqlSentence = sqlSentence + valores + ` WHERE "idPredio" = ${id}`;

        let data = await client.query(sqlSentence)
            .catch(({message}) => {
                throw new Error(message);
            });
        if(data.rowCount == 0) throw new Error('Ha ocurrido un error');
        res.status(200).json({
            msg: 'Se ha actualizado el terreno con exito.'
        });
    }catch(error){
        return res.status(400).json({msg: error.message});
    }
};

const deleteTerrenos = async (req, res) => {
    const sqlSentence = `DELETE FROM ${tableName} WHERE "idTerreno" = $1`;
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

module.exports = { getTerrenoByPredio, postTerrenos, putTerrenos, deleteTerrenos };