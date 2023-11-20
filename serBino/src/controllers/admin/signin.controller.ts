import { Request, Response } from 'express';
import AdminModel from '../../models/admin/login.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import authenticate from './middleware';
const hardcodedUsername = 'user';
    const hardcodedPassword = 'password';
export default class AdminSignIn {
  async login(req: Request, res: Response) {
    const { username, password,email } = req.body;

    try {
      // Check if a user with the provided username already exists in the database
      const existingUser = await AdminModel.findOne({ username });

      if (existingUser) {
        return res.status(400).json({ message: 'Username already in use' });
      }

      // Hash the provided password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user in the database
      const newUser = await AdminModel.create({ username, password: hashedPassword,email });

      // Generate a JWT token with user information
      const token = jwt.sign({ username }, '#thdgdf9', { expiresIn: '3000h' });
      res.status(201).json({ token });
    } catch (error) {
      console.error('Error creating signin:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }


  async adminlogin(req: Request, res: Response)  {
    const { username, password } = req.body;
    if (username === hardcodedUsername && password === hardcodedPassword) {
      //  Successful login   
      res.json({ message: 'Login successful' });
    } else {
      // Invalid credentials  
      res.status(401).json({ message: 'Invalid username or password' });
    }
  }

 }
