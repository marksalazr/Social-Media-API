const router = require ('express').Router();
const {
    addFriend,
    createUser,
    deleteUser,
    getUser,
    getUsers,
    removeFriend,
    updateUser,
} = require ('../../controllers/userController.js');
// /users__vv
router
    .route('/')
    .get(getUsers)
    .post(createUser);

// users/usersIDvv

router
  .route('/:userId')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

    //students?

    module.exports = router;