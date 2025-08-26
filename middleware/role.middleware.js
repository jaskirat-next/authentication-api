

export const authrize = (roles = []) => {
    return (req, res , next) => {
        if(!roles.includes(req.user.role)){
            return res.status(400).json({ message: "Forbidden: Access denied" })
        }
        next();
    }
}