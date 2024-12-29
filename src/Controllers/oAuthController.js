const { oauthService } = require("../Services/index");

class OauthController {
  async LoginWithControllter(profile, done) {
    try {
      const data = {
        provider: profile?.provider,
        providerUserId: profile?.id,
        providerUserName: profile?.displayName,
        providerPhoto: profile?._json.picture || null,
      };
      console.log("controller => ", data);

      const token = await oauthService.createOauthService(data);
      return done(null, token);
    } catch (error) {
      console.error("Error in Google Strategy:", error);
      return done(error);
    }
  }

  async FailedController(req, res) {
    try {
      return res.status(201).json({
        message: "Failed to Login with Oauth",
        success: true,
        data: {},
        err: {},
      });
    } catch (error) {
      console.log("Something went wrong in controller level (Failed Oauth)");
      return res.status(201).json({
        message: "Failed to route ",
        success: false,
        data: {},
        err: {},
      });
    }
  }

  async SucessController(req, res) {
    try {
      const token = req.query?.token;
      res.status(200).json({
        message: "Sucessfull login with Oauth",
        success: true,
        data: token,
        err: {},
      });
    } catch (error) {
      console.log("Something went wrong in controller level (Sucess Oauth)");
      return res.status(201).json({
        message: "Failed to route ",
        success: false,
        data: {},
        err: {},
      });
    }
  }

  async ProtectedUrlController(req, res) {
    try {
      res.status(200).json({
        message: "Welcome to ProtectedUrlController",
        success: true,
        data: {},
        err: {},
      });
    } catch (error) {
      console.log(
        "Something went wrong in controller level (ProtectedUrlController)"
      );
      return res.status(201).json({
        message: "Failed to route ",
        success: false,
        data: {},
        err: {},
      });
    }
  }
}

const oAuthController = new OauthController();
module.exports = oAuthController;
