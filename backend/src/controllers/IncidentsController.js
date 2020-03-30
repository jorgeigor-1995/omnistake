const connection = require("../database/connection");
const crypto = require('crypto');

module.exports = {
    async create(req, res){
        const { title, description, value } = req.body;
        const ong_id = req.header.authorization;
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        return res.json({ id });
    },

    async index(request, response){
        const { page = 1} = request.query;

        const [ count] = await connection("incidents")
            .count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incident.ong_id')
            .limit(5)
            .offset((page-1)*5)
            .select("incidents.*",
                 'ongs.name', 
                 'ongs.email', 
                 'ongs.whatsapp', 
                 'ongs.city', 
                 'ongs.uf');
        response.header.json("X-Total-Count", count['count(*)']);
        
        return response.json(incidents);
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = req.header.authorization;
        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id){
            return response.status(401).json({ error: "Operation not permitted" });

        await connection('incidents').where('id', id).delete();

        return response.status(204).send;
        }
    }
}