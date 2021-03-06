const connection = require('../database/connection');
const crypto = require('crypto');

module.exports ={

  async store(request,response){

    const { name, email, whatsapp, city, uf } = request.body;
  
    // Converte o id em uma 4bytes e dps converte para HEX
    const id = crypto.randomBytes(4).toString('HEX');
    await  connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
      });
  
    return response.json({id});
  },

  async index(request,response){

    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
  },

  async show(request, response){
    const ong = await connection('ongs').select('*').where(id=request.params);
    return response.json(ong);
  },

  async destroy(request,response){
    
    const ong = await connection('ongs').delete('ongs').where(id=request.params);
    return response.status(200);
  }
}