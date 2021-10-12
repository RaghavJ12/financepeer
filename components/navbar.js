import React from 'react';
import cookie from 'js-cookie';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
    const router = useRouter();
    const { token } = parseCookies()
    let user = false;
    if (token) {
        user = true;
    }
    else {
        user = false;
    }
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            {user ?
                <div className="navbar-end">
                    <div className="navbar-item">
                        <a className="button is-danger" onClick={() => {
                            cookie.remove(token);
                            console.log(token);
                            router.push('/');
                            user=false
                        }}>
                            <strong>Log out</strong>
                        </a>
                    </div>
                </div>
                :
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <Link href="/signup">
                                    <strong>Sign up</strong>
                                </Link>
                            </a>
                            <a className="button is-info">
                                <Link href="/login">
                                    Log in
                                </Link>
                            </a>
                        </div>
                    </div>
                </div>
            }
        </nav>
    );
}