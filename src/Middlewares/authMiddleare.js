const deleteSessionValidation = (req, res, next) => {
  if (!req.session) {
    console.log("Something went wrong in Oauth middleware");
    return res.status(400).json({
      data: {},
      err: "Session is missing",
      message: "Session  is missing  ",
      success: false,
    });
  }
  console.log(req.session);

  // next();
};

const signupandSinginandValidation = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    console.log("Something went wrong in auth middleware");
    return res.status(400).json({
      data: {},
      // err: error || error.message,
      message: "Email or Password is missing  ",
      success: false,
    });
  }

  next();
};

const deleteValidation = (req, res, next) => {
  if (!req.body.email) {
    console.log("Something went wrong in auth middleware");
    return res.status(400).json({
      data: {},
      err: "Email is missing",
      message: "Email  is missing  ",
      success: false,
    });
  }

  next();
};

const roleValidation = (req, res, next) => {
  if (!req.body.email || !req.body.role) {
    console.log("Something went wrong in role or Role middleware");
    return res.status(400).json({
      data: {},
      err: "Email or Role is missing",
      message: "Email or Role  is missing  ",
      success: false,
    });
  }

  next();
};

const hasRoleValidation = (req, res, next) => {
  if (!req.body.email) {
    console.log("Something went wrong in hasRole");
    return res.status(400).json({
      data: {},
      err: "Email  is missing",
      message: "Email   is missing  ",
      success: false,
    });
  }

  next();
};

const tokenVerifyValidation = (req, res, next) => {
  // const token = req.header("x-access-token");
  if (!req.header("x-access-token")) {
    console.log("Something went wrong in VerifyToken");
    return res.status(400).json({
      data: {},
      err: "Token is missing",
      message: "Token   is missing  ",
      success: false,
    });
  }
  next();
};

const changePassValidation = (req, res, next) => {
  if (!req.query.email || !req.body.newPassword || !req.body.oldPassword) {
    console.log("Something went wrong in change Pass validation ");
    return res.status(400).json({
      data: {},
      err: "Required parameter is missing",
      message: "Required parameter  is missing  ",
      success: false,
    });
  }
  next();
};

const resetPassValidation = (req, res, next) => {
  if (!req.query.token || !req.body.password) {
    console.log("Something went wrong in reset Pass validation ");
    return res.status(400).json({
      data: {},
      err: "Required parameter is missing",
      message: "Required parameter  is missing  ",
      success: false,
    });
  }
  next();
};

const sendResetValidation = (req, res, next) => {
  if (! req.body.email)  {
    console.log("Something went wrong in reset sendResetLink validation ");
    return res.status(400).json({
      data: {},
      err: "Required parameter is missing",
      message: "Required parameter  is missing  ",
      success: false,
    });
  }
  next();
};

const sendLinkVerifyValidation = (req, res, next) => {
  if (! req.query.email)  {
    console.log("Something went wrong in reset sendLinkVerifyValidation validation ");
    return res.status(400).json({
      data: {},
      err: "Required parameter is missing",
      message: "Required parameter  is missing  ",
      success: false,
    });
  }
  next();
};

const verifyResetValidation = (req, res, next) => {
  if (! req.query.token)  {
    console.log("Something went wrong in reset verifyResetLink validation ");
    return res.status(400).json({
      data: {},
      err: "Required parameter is missing",
      message: "Required parameter  is missing  ",
      success: false,
    });
  }
  next();
};

const verifyValidation = (req, res, next) => {
  if (! req.query.token)  {
    console.log("Something went wrong in reset verifyValidation validation ");
    return res.status(400).json({
      data: {},
      err: "Required parameter is missing",
      message: "Required parameter  is missing  ",
      success: false,
    });
  }
  next();
};

module.exports = {
  signupandSinginandValidation,
  deleteValidation,
  roleValidation,
  hasRoleValidation,
  deleteSessionValidation,
  tokenVerifyValidation,
  changePassValidation,
  resetPassValidation,
  sendResetValidation,
  verifyResetValidation,
  sendLinkVerifyValidation,
  verifyValidation
};
