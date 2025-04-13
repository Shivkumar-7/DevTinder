const adminAuth = (req, res) => {
    const token = "xyx";
    const isAdminAuthorized = token === "xyx";
    if(!isAdminAuthorized) {
        res.status(401).send("Unathorized request");
    }
    else {
        next();
    }
};

const userAuth = (req, res) => {
    const token = "xyx";
    const isAdminAuthorized = token === "xyx";
    if(!isAdminAuthorized) {
        res.status(401).send("Unathorized request");
    }
    else {
        next();
    }
};

module.exports = {
    adminAuth,
    userAuth,
};