// const router = require('express');
// const app = express();
const router = require('express').Router;
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought
} = require('../../controllers/thoughtController')

router.route("/api/thoughts").get(getThoughts).post(createThought)

router.route("/api/thoughts/:thoughtId/reactions").get(reactions).put(updateThought)

router
    .route('/api/users-by-id')
    .get('getSingleUser')
    .put('updateUser');

module.exports = router