const Datatypes = require("sequelize");


const getModelUniDept = (db) =>{
  return db.define("departament", {
    dept_codi: {
      type: Datatypes.INTEGER,
      allowNull: false
    },
    dept_nom: {
      type: Datatypes.STRING
    },
    dept_ubicacio: {
      type: Datatypes.STRING
    },
    dept_telefon: {
      type: Datatypes.STRING
    },
    dept_prof_dni: {
      type: Datatypes.STRING
    }
  })
}

module.exports = {getModelUniDept}
