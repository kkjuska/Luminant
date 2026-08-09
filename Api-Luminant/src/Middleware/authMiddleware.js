import  jwt  from "jsonwebtoken"

export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
    
        if(!authHeader){
            return res.status(401).json(
                {erro: "Token não enviado"}
            )
        }
    
        const token = authHeader.split(" ")[1];
        
        const verify = jwt.verify(
            token,
            process.env.JWT_SECRET
        )        
        
        req.user = verify
        next()
    } catch (error) {
        return res.status(401).json({
            erro: "token invalido ou expirado"
        })
    }
}