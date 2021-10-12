import React from 'react';
import { parseCookies } from 'nookies'
import UploadFileIcon from '@mui/icons-material/UploadFile';

function Home() {

    const user = parseCookies();

    return (
        <div className="m-6">
            <h5>Welcome {user.name}</h5>
            <br />
            Please upload the JSON file:
            <div className="m-6">
                <form>
                    <input type="file" id="myfile" name="myfile"></input>
                    <button class="button is-warning" type="submit">Upload <i className="ml-2"><UploadFileIcon /></i></button>
                </form>
            </div>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    const cookie = parseCookies(ctx);
    const token = cookie.token

    if (!token) {
        const { res } = ctx
        res.writeHead(302, { Location: "/login" })
        res.end()
    }
    return {
        props: {}
    }
}

export default Home;