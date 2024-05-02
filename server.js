const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2')
const app = express();
const port = 3000;
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Admin123',
  database: 'unialexramos'
});

app.use(cors());


connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!')
})

app.post("/modifCorreuRamos",(req,res) => {
  connection.query('ALTER TABLE alumnes MODIFY ALUMN_E_MAIL VARCHAR(30);', (err, rows) => {
    if (err) {
      console.error('Ja está modificat, pelacanyes', err);
      return res.status(500).json({ error: 'Ja está modificat, pelacanyes' });
    }
    console.log('Modificat a 30 el VARCHAR');
  })
  connection.query('UPDATE alumnes SET alumn_e_mail = "otaku@institutvidreres.cat" WHERE alumn_e_mail = null', (err, rows) => {
    if (err) {
      console.error('Ja está modificat, pelacanyes', err);
      return res.status(500).json({ error: 'Ja está modificat, pelacanyes' });
    }
    console.log('Modificat a 30 el VARCHAR');
  })
})

app.get("/llistaAssigRamos",(req,res) => {
  connection.query('SELECT DISTINCT assig_codi, assig_nom\n' +
    ' FROM assignatures\n' +
    ' JOIN assignatures_professor ON assig_codi = assigprof_assig_codi\n' +
    ' JOIN professor ON assigprof_prof_dni = prof_dni\n' +
    ' JOIN departament ON prof_dept_codi = dept_codi\n' +
    'WHERE dept_nom = "INFORMATICA I MATEMATICA APLICADA";', (err, rows) => {
    if (err) throw err;
    console.log('S\'ha fet la select');
    res.json(rows)
  })
})

app.put("/modifDeptRamos",(req,res) => {
  const { tabla, e_mail, nuevosValores } = req.body;
  const camposNuevos = Object.entries(nuevosValores).map(([campo, valor]) => `${campo} = '${valor}'`).join(', ');

  const query = `UPDATE ${tabla} SET ${camposNuevos} WHERE alumn_e_mail = ${e_mail}`;
  connection.query(query, (err, rows) => {
    if (err) {
      console.error('No puc, pelacanyes', err);
      return res.status(500).json({ error: 'No puc, pelacanyes' });
    }
    console.log('S\'ha fet l\'update');
  })
})

app.get("/ImpartirAssigRamos",(req,res) => {
  connection.query('SELECT DISTINCT assig_codi\n' +
    ' FROM assignatures\n' +
    ' JOIN assignatures_professor ON assig_codi = assigprof_assig_codi\n' +
    ' JOIN professor ON assigprof_prof_dni = prof_dni\n' +
    'WHERE prof_nom = "JOSEP"\n' +
    '  AND prof_cognom_1 = "MORALES"\n' +
    '  AND prof_cognom_2 = "ANTUNEZ";', (err, rows) => {
    if (err) {
      console.error('No puc, pelacanyes', err);
      return res.status(500).json({ error: 'No puc, pelacanyes' });
    }
    console.log('S\'ha fet la select');
    res.json(rows)
  })
})

app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`);
});
