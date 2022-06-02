<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">left</div>
      <div class="col-md-4">
        <form>
          <div class="mb-4">
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              id="exampleInputPassword1"
            />
          </div>
          <div class="facebook-login">
            <div
              class="fb-login-button"
              data-width=""
              data-size="medium"
              data-scope="pages_manage_metadata,public_profile,email,pages_messaging,pages_show_list"
              data-onlogin="logInWithFacebook();"
              data-button-type="continue_with"
              data-layout="default"
              data-auto-logout-link="false"
              data-use-continue-as="false"
            ></div>
          </div>
          <button
            type="button"
            class="btn btn-primary"
            @click="testButtonWithLogin()"
          >
            Login
          </button>
          <!-- enter facebook login -->
        </form>
      </div>
      <div class="col-md-3">Right</div>
    </div>
  </div>
</template>

<script>
import {
  initFacebookSdk,
  callAuthApi,
} from "../services/facebook_login.services";
export default {
  name: "loginPage",
  mounted() {
    initFacebookSdk();
    window.logInWithFacebook = this.logInWithFacebook;
  },
  methods: {
    logInWithFacebook() {
      window.FB.login(function (response) {
        console.log({
          response: response.authResponse,
        });
        if (response.status === "connected") {
          console.log("Successfully connected");
          console.log(response.authResponse.accessToken);
          const {
            authResponse: { userID },
          } = response;
          window.FB.api("/me/accounts", function (response) {
            console.log("aaccounts: " + JSON.stringify(response));
            callAuthApi(userID, response).then((data) => {
              console.log("successfully save" + data);
            });
          });
        } else {
          console.log(response);
        }
      });
    },
    testButtonWithLogin() {
      console.log("clicked");
      callAuthApi("userID", "test").then((data) => {
        console.log("successfully save" + data);
      });
    },
  },
};
</script>

<style scoped></style>
