<template>
<div>
    <div>
        <loading v-model:active="isLoading" :is-full-page="true" />
    </div>
    <div id="header">
        <h1>StickMee</h1>
        <p>The best partner for your business.</p>
    </div>
    <div id="login">
        <h2>LOGIN</h2>
        <p class="text">Login with your facebook</p>
        <div class="facebook-login">
            <div class="fb-login-button" data-width="70px" data-size="large" data-scope="pages_manage_metadata,public_profile,email,pages_messaging,pages_show_list" data-onlogin="logInWithFacebook();" data-button-type="login_with" data-layout="rounded" data-auto-logout-link="false" data-use-continue-as="false">

            </div>

        </div>

    </div>
</div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import {
    initFacebookSdk,
    loginToFacebook,
    meAccount,
    callAuthApi
} from "../services/facebook_login.services";
export default {
    name: "loginPage",
    components: {
      Loading  
    },
    data() {
        return {
            isLoading: false
        }
    },
    mounted() {
        initFacebookSdk();
        window.logInWithFacebook = this.logInWithFacebook;
    },
    methods: {
        logInWithFacebook() {
            loginToFacebook()
                .then((data) => {
                    this.isLoading = true;
                    console.log(data);
                    let id = data.authResponse.userID;
                    let token = data.authResponse.accessToken;
                    localStorage.setItem('userId', id)
                    if (data.status === 'connected') {
                        meAccount(id, token)
                            .then(data => {
                                console.log("meAccount data" + data);
                                callAuthApi(id, data)
                                    .then(data => {
                                        console.log(data + "from call Auth api" + data);
                                        this.isLoading = false;
                                        this.$router.push({
                                            name: 'Home'
                                        })
                                    })
                            })
                    }
                })
        }

    },
}
</script>

<style scoped>
#login {
    background-color: white;
    width: 450px;
    height: 250px;
    margin: 20px auto;
    padding-top: 30px;
    border-radius: 10px;
    border: 0px solid black;
    box-shadow: 1px 1px 2px 0.5px grey;
    text-align: center;
}

.text {
    margin-bottom: 40px;
    margin-top: 0px;
}

#header {
    margin-top: 12%;
    text-align: center;
}

h1 {
    margin-bottom: 0;
}
</style>
