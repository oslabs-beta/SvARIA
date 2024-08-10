import express from 'express';
import controller from '../Controllers/svAriaController.js';

const router = express.Router();

router.post('/',
  controller.addUser,
  (req, res) => res.status(200).json(res.locals.message)
);


router.patch('/:email', controller.getUser, controller.updateUser, (req,res) => res.status(200).json(res.locals.message)
);

router.get('/:email', controller.getUser, (req, res) => res.status(200).json(res.locals.user)
);

router.get('/', controller.getAllUsers, (req, res) => res.status(200).json(res.locals.allUsers)
);

router.delete('/:email', controller.deleteUser, (req, res) => res.status(200).json(res.locals.message)
);

export default router;
