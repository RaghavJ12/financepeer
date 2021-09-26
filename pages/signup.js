import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import baseUrl from '../helpers/baseurl';
import { useRouter } from 'next/router';
import bcrypt from 'bcryptjs';

export default function signup() {
    const router = useRouter();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [psw, setpsw] = useState("");

    const registerUser = async event => {
        event.preventDefault()

        // `${baseUrl}/api/register`
        const req = await fetch('/api/register', {
            body: JSON.stringify({
                name,
                email,
                password: bcrypt.hashSync(psw, 10)
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        const res = await req.json();

        if (res.error) {
            M.toast({ html: res.error, classes: "red" });
        }
        else {
            M.toast({ html: res.message, classes: "green" });
            router.push('/');   
        }
        console.log(res);
    }

    return (
        <>
            
            <div className="container p-6">
                <div className="columuns">
                    <div className="box column is-5 is-offset-3">
                        <form onSubmit={registerUser}>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-exclamation-triangle"></i>
                                    </span>
                                </div>
                            </div>


                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input type="password" placeholder="Password" value={psw} onChange={(e) => setpsw(e.target.value)} />
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button type="submit" className="button" method="post">Signup</button>
                                </div>
                            </div>
                        </form>
                        <Link href="/">login</Link>
                    </div>
                </div>
            </div>
        </>
    );
}