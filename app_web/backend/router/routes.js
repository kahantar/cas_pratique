const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
	getAlert: async (req, res) => {
        let info = {};
        console.log(req.body)
        if (JSON.stringify(req.body.client) == "[]")
        {
            info = {
                raw: true,
                order: [
                    ['date', 'DESC']
                ],
                where: {
                    [Op.and]: [
                        {status: req.body.status}, 
                        {category: req.body.category},
                    ]
                }
              }
        }
        else{
            info = {
                raw: true,
                order: [
                    [req.body.orderBy, 'DESC']
                ],
                where: {
                    [Op.and]: [
                        {status: req.body.status}, 
                        {category: req.body.category},
                        {client: req.body.client},
                        {summary: {[Op.iLike]: `%${req.body.search}%`}}
                    ]
                }
              }
        }
        const allAlert = await models.alerte.findAll(info);
        const reqClient = await models.alerte.findAll({
            raw: true,
            attributes: ['client']
          });
        let allClient = [];
        reqClient.map(client => allClient.push(client.client));
        res.json([allAlert, allClient]);
    }
}