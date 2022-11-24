// const router = require('express');
// const app = express();
const router = require('express').Router;
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
} = require('../../controllers/userController')

router
    .route('/api/users')
    .get('getUsers')
    .post('createUser');

router
    .route('/api/users-by-id')
    .get('getSingleUser')
    .put('updateUser');

module.exports = router



