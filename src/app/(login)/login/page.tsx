import { Input } from '@/components/hhh/input';
import React from 'react';

export default function Login() {
  return (
    <>
      <div className="bg-gradient-to-r from to-bole-800 p-4">
        <p className="text-white">Login or Register</p>
      </div>

      <div className="bg-white p-24">
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <Input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <div>
          <a href="/signup">Don&apos;t have a login? Sign up here</a>
        </div>
        <div>
          <a href="/forgot-password">Forgot your password?</a>
        </div>
      </div>
    </>
  );
}
