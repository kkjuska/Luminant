import  jtw  from "jsonwebtoken"

export const authMiddlewares = async (req, res, next) => {
    
    const authHeader = req.header.authorization;

    if(!authHeader){
        return res.status(401).json(
            {erro: "Token não enviado"}
        )
    }

    const token = authHeader.split("  ")[1];
    
}