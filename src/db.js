import mysql from 'mysql'
let all
//Database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "curriculum",
})

// Database connection error or not

const database = connection.connect((error)=>{
    if (error) {
        console.log('This is the error: ' + error);
        return;
    }
    console.log('All is fine. Database connection complete.')
})
// Insert data in table
const addvitae = (firstname, surname, profession, city, country, mail, telephone, others, others2, experience, technologies, languages, training, courses) =>{
    const cvdata = `INSERT INTO datos (id, name, surname, profession, city, country, mail, telephone, others, others2, experience, technologies, languages, training, courses) VALUES (${null},"${firstname}","${surname}","${profession}","${city}","${country}","${mail}","${telephone}","${others}","${others2}","${experience}","${technologies}","${languages}","${training}", "${courses}")`
    connection.query(cvdata, function(error, result, filed){
        if (error) throw error
        console.log(result)
    })
}
// See data from table
const seevitae = () => {
    const cvtable = `SELECT * FROM datos ORDER BY id DESC LIMIT 1`
    connection.query(cvtable, function(error, result, filed){
        if (error) {
            console.log('This is the error: ' + error);
            return;
        }
        all = result           
    })
    return all
}

export {database, addvitae, seevitae}