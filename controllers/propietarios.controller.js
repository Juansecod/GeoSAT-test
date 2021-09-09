const client = require('../config/database.config');
const tableName = 'propietarios';

const getPropietariosByPredio = async (req, res) => {
    const { id } = req.query;
    const data = await client.query(`SELECT * FROM "${tableName}" WHERE "idPredio" = ${id}`)
        .then(({ rowCount:cantidad, rows:propietarios }) => {
            return {
                cantidad,
                propietarios
            };
        })
        .catch(({message}, code) => {
            return {message, code: code || 400};
        });
    return res.status((data.code) || 200).json(data);
};

const postPropietarios = async (req, res) =>{
    const { id:idPredio } = req.query;
    const { nombres, apellidos, razonSocial, direccion, telefono, correo, tipoPropietario , tipoDocumento, numeroDocumento, numeroVerificacion } = req.body;
    const sqlSentence = `INSERT INTO "${tableName}"("idPredio", nombres, apellidos, "razonSocial", direccion, telefono, correo, "idTipoPropietario" , "idTipoDocumento", "numeroDocumento", "numeroVerificacion") 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;
    const values = [idPredio, nombres || null, apellidos || null, razonSocial || null, direccion, telefono, correo || null, tipoPropietario , tipoDocumento, numeroDocumento, numeroVerificacion || null];
    try{
        const exist = await client.query(`SELECT * FROM "${tableName}" WHERE "idPredio" = ${idPredio} AND "numeroDocumento" = ${numeroDocumento}`)
            .then(row => {
                if(row.rows.length > 0) throw new Error("Propietario ya existente en el predio seleccionado");
            })
            .catch(({message}) => {
                throw new Error(message);
            });
        const data = await client.query(sqlSentence, values)
            .catch(({ message }) => { 
                throw new Error(message);
            });
        res.status(200).json({
            msg: `Se ha insertado con exito el documento ${numeroDocumento} en el predio seleccionado`, 
        });
    }catch(error){
        return res.status(400).json({msg: error.message});
    }
};

const putPropietarios = async (req,res) => {
    const { id } = req.query;
    const { nombres, apellidos, razonSocial, direccion, telefono, correo, tipoPropietario , tipoDocumento, numeroDocumento, numeroVerificacion } = req.body;
    try{
        let sqlSentence = `UPDATE "${tableName}" SET `;
        let valores = '';
        if(numeroPredial != undefined) valores = valores + `nombres = '${nombres}'`;
        if(nombre != undefined) valores = valores + `, apellidos = '${apellidos}'`;
        if(avaluo != undefined) valores = valores + `, "razonSocial" = '${razonSocial}'`;
        if(departamento != undefined) valores = valores + `, direccion = '${direccion}'`;
        if(municipio != undefined) valores = valores + `, telefono = ${telefono}`;
        if(municipio != undefined) valores = valores + `, correo = '${correo}'`;
        if(municipio != undefined) valores = valores + `, "tipoPropietario" = ${tipoPropietario}`;
        if(municipio != undefined) valores = valores + `, "tipoDocumento" = ${tipoDocumento}`;
        if(municipio != undefined) valores = valores + `, "numeroDocumento" = ${numeroDocumento}`;
        if(municipio != undefined) valores = valores + `, "numeroVerificacion" = ${numeroVerificacion}`;
        if (valores[0] == ",") valores = valores.replace(",","");

        sqlSentence = sqlSentence + valores + ` WHERE "idPropietario" = ${id}`;

        let data = await client.query(sqlSentence)
            .catch(({message}) => {
                throw new Error(message);
            });
        if(data.rowCount == 0) throw new Error('Ha ocurrido un error');
        res.status(200).json({
            msg: 'Se ha actualizado el propietario con exito.'
        });
    }catch(error){
        return res.status(400).json({msg: error.message});
    }
};

const deletePropietario = async (req, res) => {
    const sqlSentence = `DELETE FROM ${tableName} WHERE "idPropietario" = $1`;
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
        res.status(200).json({msg: 'Propietario eliminado con exito'});
    }catch(error){
        return res.status(400).json({msg: error.message});
    }
};

module.exports = { getPropietariosByPredio, postPropietarios, putPropietarios, deletePropietario };