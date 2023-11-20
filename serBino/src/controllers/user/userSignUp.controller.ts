import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../../models/user/user.model';
import jwt from 'jsonwebtoken'
export default class UserReg {
  async create(req: Request, res: Response) {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    try {
      const { phoneNo, email, password } = req.body;
      let user = await UserModel.findOne({ email });

      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      user = new UserModel({
        phoneNo,
        email,
        password: hashedPassword,
      });

      await user.save();

      // const payload = {
      //   user:{
      //     id: user.id,
      //   }
      // };
      // res.json(user)

      jwt.sign({ }, "feiugirebgi", { expiresIn: '3000h' }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      // console.error(error.message);
      res.status(500).send('Server error');
    }
  }
  // async create(req: Request, res: Response) {
  //   const { phoneNo, email, password } = req.body;

  //   try {
  //     if (!phoneNo || !email || !password) {
  //       return res.status(400).json({ message: 'All fields are required' });
  //     }

  //     if (password.length < 6) {
  //       return res.status(400).json({ message: 'Password should be at least 6 characters long' });
  //     }

  //     const existingUser = await UserModel.findOne({ email });

  //     if (existingUser) {
  //       return res.status(400).json({ message: 'User with this email already exists' });
  //     }

  //     const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

  //     const newUser = await UserModel.create({ phoneNo, email, password: hashedPassword });

  //     res.status(201).json({
  //       message: 'User created successfully',
  //       user: newUser
  //     });
  //   } catch (error) {
  //     console.error('Error creating user:', error);
  //     res.status(500).json({ message: 'Internal Server Error' });
  //   }
  // }
}
