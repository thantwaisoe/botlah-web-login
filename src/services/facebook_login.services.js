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
