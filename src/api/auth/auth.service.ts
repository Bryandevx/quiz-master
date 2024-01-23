import * as bcrypt from 'bcrypt';

import { Role } from '@prisma/client';

import { Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { SignUpInput } from './dto';

import { UserSelect } from 'src/api/user/model';

import { User } from 'src/api/user/model/user.model';

import { UserService } from 'src/api/user/user.service';

import { LoginOutputSelect } from './model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    try {
      const user = await this.userService.findOne(
        {
          where: {
            email,
          },
        },
        {
          select: {
            uuid: true,
            email: true,
            type: true,
            username: true,
            updatedAt: true,
            createdAt: true,
          },
        },
      );

      const userPassword = await this.userService.findUserPassword({
        where: { email },
      });

      const valid = await bcrypt.compare(password, userPassword);

      return user && valid ? user : null;
    } catch (error) {
      console.log(error);
    }
  }

  async checkUserRole(email: string, role: string): Promise<boolean | null> {
    try {
      const userRole = await this.userService.findUserRole({
        where: { email },
      });
      console.log(role);
      console.log(userRole);

      return role === userRole;
    } catch (error) {
      console.log(error);
    }
  }

  async login(email: string, password: string, fields: LoginOutputSelect) {
    const userPassword = await this.userService.findUserPassword({
      where: {
        email,
      },
    });
    const passwordMatchesHash = await bcrypt.compare(password, userPassword);

    if (!passwordMatchesHash) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const user = await this.userService.findOne(
      {
        where: {
          email,
        },
      },
      {
        select: {
          email: true, //fetching these beacuse I will need them below   //research smart endpoints
          uuid: true,
          type: true,
          username: true,
          updatedAt: true,
          createdAt: true,
        },
      },
    );

    return {
      access_token: this.jwtService.sign({
        email: user.email,
        sub: user.uuid,
        role: user.type,
        expiresIn: 60 * 60, //1 hour
      }),
      expiresAt: new Date(Date.now() + 60 * 60),
      user,
    };
  }

  async signup(signUpInput: SignUpInput, select: UserSelect) {
    const userPassword = await this.userService.findUserPassword({
      where: {
        email: signUpInput.email,
      },
    });

    if (userPassword) {
      throw new Error('User with that email already exists!');
    }

    const password = await bcrypt.hash(signUpInput.password, 10);

    return this.userService.create(
      {
        ...signUpInput,
        type: Role.USER,
        password,
      },
      {
        ...select,
      },
    );
  }
}
