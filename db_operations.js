const sql = require('mssql');
const config = require('./db_config');


async function getCompany(companyId) {
    try {
        let pool = await sql.connect(config);
        let company = await pool.request()
            .input('input_parameter', sql.Int, companyId)
            .query('SELECT * FROM Company WHERE ID = @input_parameter');
        return company.recordsets;
    }
    catch (error) {
        console.log(error); 
    }
}

async function getCompanyList() {
    try {
        let pool = await sql.connect(config);
        let companyList = await pool.request().query('SELECT * FROM Company');
        return companyList.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCompanyList: getCompanyList,
    getCompany: getCompany,
} 