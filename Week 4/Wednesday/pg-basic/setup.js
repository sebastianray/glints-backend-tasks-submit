const pool = require('./config/connection');

const tasksTableSql = `
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    task VARCHAR(50),
    status VARCHAR(50),
    tag VARCHAR(50),
    createdAt VARCHAR(6),
    completedAt VARCHAR(6)
);
`;

pool.query(tasksTableSql, (err, data) =>{
    if (err) {
        throw err;
    } else {
        console.log('Table created successfully');
        pool.end();
    }
});