import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email,setemail] = useState("");
  const [psw,setpsw] = useState("");
  return (
    <div className="container card">
            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
            </div>
            
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input type="password" placeholder="Password" value={psw} onChange={(e) => setpsw(e.target.value)} />
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <button type="submit" className="button">Signup</button>
                </div>
            </div>
            <Link href="/signup">Signup</Link>
        </div>
  )
}
