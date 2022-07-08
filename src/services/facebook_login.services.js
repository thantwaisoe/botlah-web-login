import axios from "axios";
export function initFacebookSdk() {
  return new Promise((resolve) => {
    // wait for facebook sdk to initialize before starting the vue app
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "421601729349018",
        cookie: true,
        xfbml: true,
        version: "v11.0",
      });

      // auto authenticate with the api if already logged in with facebook
      // window.FB.getLoginStatus(({ authResponse }) => {
      //     if (authResponse) {
      //       console.log(authResponse.accessToken).then(resolve);
      //     } else {
      //         resolve();
      //     }
      // });
      resolve();
    };

    // load facebook sdk script
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
}
export function callAuthApi(userID, response) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
  };

  const data = { userID, ...response };

  return axios
    .post(process.env.VUE_APP_BASE_URL + "/api/auth", data, {
      headers: headers,
    })
    .then((res) =>
      res.data);
}
export function loginToFacebook() {
  // change async await format
  return new Promise((resolve) => {
    window.FB.login(function (response) {
      console.log({
        response: response.authResponse,
      });
      if (response.status === "connected") {
        console.log("Successfully connected");
        console.log(response.authResponse.accessToken);
        setTimeout(() => { resolve(response) }, 0);
        // const {
        //   authResponse: {
        //     userID
        //   },
        // } = response;
        
        // window.FB.api("/me/accounts", async function (response) {
        //   console.log("aaccounts: " + JSON.stringify(response));
        //   await callAuthApi(userID, response);
        // });
       
        // resolve(response.status)
      } else {
        console.log(response);
      }
    });
  })
  
}

export function getPageByMerchantId(userID) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
  };
 
  return axios
    .get(process.env.VUE_APP_BASE_URL + "/api/merchant/" + userID, {
      headers: headers,
    })
    .then((res) => res.data);
}
export function getProfilePicture(pageId) {
  return axios
    .get(`https://graph.facebook.com/${pageId}/picture?redirect=0&width=100&height=100`)
    .then((res) => res.data);
}

export function meAccount(merchantID, accessToken) {
  return axios
    .get(`https://graph.facebook.com/v14.0/${merchantID}/accounts?access_token=${accessToken}`)
    .then((res) => res.data);
}
