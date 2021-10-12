import {parseCookies} from 'nookies'

function Home() {
    return (
        <div>
            Welcome
        </div>
    );
}

export async function getServerSideProps(ctx){
    const {token} = parseCookies(ctx);
    if(!token){
        const {res}=ctx
        res.writeHead(302,{Location:"/login"})
        res.end()
    }
    return{
        props:{}
    }
}

export default Home;