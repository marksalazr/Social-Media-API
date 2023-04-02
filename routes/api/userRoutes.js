const router = require ('express').Router();
const {
    addFriend,
    createUser,
    deleteUser,
    getSingleUser,
    getUsers,
    removeFriend,
    updateUser,
} = require ('../../controllers/userControllers.js');
// /users__vv
router
    .route('/')
    .get(getUsers)
    .post(createUser);

// users/usersIDvv

router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

    //students?

    module.exports = router;