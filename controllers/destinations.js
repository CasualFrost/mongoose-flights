const Flight = require('../models/flight');

module.exports = {
    create
};



function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err) {
            // handle errors first
            if (err) console.log(err);
            // then, respond with a redirect
            res.redirect(`/flights/${flight._id}`);
          });
    });
}