const Dev = require('../models/Dev');
const parseStringsAsArray = require('../utils/ParseStringsAsArrays');

module.exports = {
    async index(request, response){
        const { latitude, longitude, techs} = request.query;

        const techsArray = parseStringsAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
        return response.json({devs});
    }
}