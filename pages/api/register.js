
export default function handler(req, res) {
    res.status(200).json({ name: req.body.n , email: req.body.e , psw: req.body.p });
}