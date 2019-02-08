const models = require('./models');
const fake = require('faker');

const category = ["dark web", "deep web", "connected devices"];
const status = ["new", "investigating", "junk"];

for (let i = 0; i < 20; i++)
{
    models.alerte.create({
        category: category[fake.random.number() % 3],
        score: fake.random.number() % 101,
        date: fake.date.past(),
        status: status[fake.random.number() % 3],
        client: fake.name.firstName(),
        summary: "This is a summary of the alert's content",
    })
    .then(() =>{})
    .catch(()=>{})
}