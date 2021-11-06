const axios = require('axios');

module.exports = {
  get: function(req, res) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${req.query.name}`)
      .then(result => {
        res.send(result.data);
      })
      .catch(error => {
        res.status(404).send(error);
      })
  }
}