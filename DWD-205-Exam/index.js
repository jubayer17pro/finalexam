const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'Employee';

MongoClient.connect(url, function(err, client) {
  if (err) throw err;

  const db = client.db(dbName);

  const employee = {
    name: 'Jubayer Ahmed',
    department: 'Marketing',
    salary: 25000,
    designation: 'junior developer',
    employee_type: 'Full-Time'
  };

  db.collection('Employee').insertOne(employee, function(err, result) {
    if (err) throw err;
    console.log('Employee added to database');
  });

  // Add other database operations here

  client.close();
});
