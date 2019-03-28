const Politician = require('../models/politician');

module.exports = {
  updateSuperior: (superiorId, newId) => {
   return  Politician.findByIdAndUpdate({_id: superiorId},{$push:{subordinates: newId}},{new:true})
      
  }
}