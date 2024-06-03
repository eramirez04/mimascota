import jwt from "jsonwebtoken"

export const isLogin = (req, res, next) => {
    const header = req.header('Authorization') || "";
    const token = header.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Credenciales no se proveeyeron" });
    }

    try {
        const checkContra = jwt.verify(token, process.env.AUTH_SECRET)
        req.user = checkContra.user
        next()

    } catch (error) {
        return res.status(403).json({ message: "Token not valid" });
    }
}

/* export const isLogin = (req, res, next) => {
    const token = req.headers["token"]

    if (!token) {
        return res.status(401).json({ message: "Tu conexión ha expirado. Vuelve a hacer login." });
    }
    try {
        const paylod = jwt.verify(token, process.env.AUTH_SECRET)
        req.user = paylod.user
        next()

    } catch (error) {
        return res.status(403).json({ message: "Token no valido" });
    }
} */