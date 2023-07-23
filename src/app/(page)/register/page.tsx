'use client';

import Link from 'next/link';
import React from 'react';

const Register = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="username"
          required
        />
        <input
          type="email"
          placeholder="email"
          required
        />
        <input
          type="password"
          placeholder="password"
          required
        />
        <button type="button">Register</button>
      </form>
      <Link href="/login">Login with an existing account</Link>
    </div>
  );
};

export default Register;
