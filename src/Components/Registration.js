

import React from 'react'

export default function Registration() {
  return (
    <div>
        <h1>Registration</h1>
        <form>
            <label>Name</label><br/>
            <input type="string" name="name"/><br/>
            <label>USER ID</label><br/>
            <input type="string" name="userid"/><br/>
            <label>Email</label><br/>
            <input type="email" name="email"/><br/>
            <label>Contact</label><br/>
            <input type="number" name="contact"/><br/>
            <label>Password</label><br/>
            <input type="password" name="password"/><br/>
            <button type="submit">SUBMIT</button>
        </form>
    </div>
  );
}
