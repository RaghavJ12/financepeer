import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';

export default function Home() {
    const [email, setemail] = useState("");
    const [psw, setpsw] = useState("");
    const router = useRouter();

    const userLogin = async (e) => {
        e.preventDefault();
        const req = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password: psw
            })
        })
        const res = await req.json();

        if (res.error) {
            M.toast({ html: res.error, classes: "red" });
        }
        else {
            M.toast({ html: res.message, classes: "green" });
            cookie.set('token', res.token)
            cookie.set('name', res.name)
            cookie.set('email', res.email)
            router.push('/account')
        }
    }

    return (
        <>
            <div className="container p-6">
                <div className="columns">
                    <div className="box column is-5 is-offset-3">
                        <form onSubmit={(e) => userLogin(e)}>
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

                            <div className="columns is-mobile">
                                <div className="column is-3">
                                    <div className="field">
                                        <div className="control">
                                            <button type="submit" className="button is-primary">Login</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3 is-offset-6 has-text-weight-semibold">
                                    <Link href="/signup">Signup</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
