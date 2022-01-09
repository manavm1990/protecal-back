import { NewUserType } from '../types';
import bcrypt from 'bcrypt';

export default class User {
  public email: string;
  public mobile: string;
  public password: string;
  public username: string;

  constructor({ email, mobile, password, username }: NewUserType) {
    this.email = email || '';
    this.mobile = mobile || '';
    this.password = password;
    this.username = username;
  }

  public encryptPassword(): Promise<string> {
    // Async preferred over sync hash to avoid server blocking
    // https://www.npmjs.com/package/bcrypt
    return bcrypt.hash(this.password, 10);
  }

  public validate(): string[] {
    const errors: string[] = [];

    if (!this.email && !this.mobile) {
      errors.push('Email or mobile is required');
    }

    if (!this.username || this.username.length < 3) {
      errors.push('username is required and must be at least 3 characters');
    }

    if (!this.password || this.password.length < 6) {
      errors.push('password is required and must be at least 6 characters');
    }

    return errors;
  }
}
