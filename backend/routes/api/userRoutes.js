const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator/check');

const User = require('../../models/UserModel')

//  @route   POSt api/users
//  @desc    register user
//  @access  Public
router.post(
  '/',
  [check('name', 'Name is required').not().isEmpty()],
  [check('email', 'Please include a valid email').isEmail()],
  [
    check(
      'password',
      'Please include a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body

    try {
      let user = await User.findOne({ email })
      
      if(user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] })
      }
      
      user = new User({
        name,
        email,
        password
      })

      const salt = await bcrypt.genSalt(10);
      
      user.password = await bcrypt.hash(password, salt)

      await user.save()
  
      // Return jsonwebtoken
  
      res.send('User registered');
    } catch (error) {
      console.error(error.message)
      res.status(500).send('Server Error')
    }

  }
);

export default router;
