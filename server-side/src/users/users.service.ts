import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Users } from 'src/schemas';
import { UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: mongoose.Model<Users>,
  ) {}

  // Get Data of Current User
  async getUserData(userId: string) {
    const dbResponse = await this.usersModel
      .findById(userId)
      .select('-password');

    return { success: true, ...dbResponse.toJSON() };
  }

  // Update User info In DB
  async updateUser(userId: string, body: UpdateUserDto) {
    const dbResponse = await this.usersModel.updateOne(
      { _id: userId },
      { ...body },
    );

    if (dbResponse.matchedCount === 0) {
      throw new NotFoundException('User not Found');
    }

    return { success: true, ...dbResponse };
  }
}
