import React, { useEffect, useState } from 'react';
import Router from 'next/router'
import Link from 'next/link';
import { NextApiRequest, NextApiResponse } from 'next';
// import sqlite from 'sqlite'
import { hash } from 'bcrypt';

export default function signup() {
    // const db = await sqlite.open('./mydb.sqlite');

    // if (req.method === 'POST') {
    //     hash(req.body.password, 10, async function (err, hash) {
    //         // Store hash in your password DB.

    //         const statement = await db.prepare(
    //             'INSERT INTO person (name, email, password) values (?, ?, ?)'
    //         );
    //         const result = await statement.run(req.body.name, req.body.email, hash);
    //         result.finalize();

    //         const person = await db.all('select * from person');
    //         res.json(person);
    //     });
    // } else {
    //     res.status(405).json({ message: 'We only support POST' });
    // }

    const registerUser = async event => {
        event.preventDefault()

        const req = await fetch('/api/register', {
            body: JSON.stringify({
                n: name,
                e: email,
                p: psw
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
        const res = await req.json();
        console.log(res.psw);
    }
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [psw, setpsw] = useState("");
    return (
        <div className="container p-6">
            <div className="columuns">
                <div className="box column is-5 is-offset-3">
                    <form onSubmit={registerUser}>
                        <div class="field">
                            <label class="label">Name</label>
                            <div class="control">
                                <input type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
                            </div>
                        </div>

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
                                <button type="submit" className="button" method="post">Signup</button>
                            </div>
                        </div>
                    </form>
                    <Link href="/">login</Link>
                </div>
            </div>
        </div>
    );
}