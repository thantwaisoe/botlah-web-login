<template>

    <div>
        {{isLogin}}
        <div id="header">
            <h1>StickMee</h1>
            <p>The best partner for your business.</p>
        </div>
        <div id="login">
            <h2>LOGIN</h2>
            <p class="text">Login with your facebook</p>
                <div class="facebook-login">
                    <div class="fb-login-button" data-width="70px" data-size="large"
                        data-scope="pages_manage_metadata,public_profile,email,pages_messaging,pages_show_list"
                        data-onlogin="logInWithFacebook();" data-button-type="login_with" data-layout="rounded"
                        data-auto-logout-link="false" data-use-continue-as="false">

                    </div>

                </div>
                

            </div>
    </div>


</template>

<script>
import {
    initFacebookSdk,
    loginToFacebook
} from "../services/facebook_login.services";
export default {
    name: "loginPage",
    mounted() {
        initFacebookSdk();
        window.logInWithFacebook = this.logInWithFacebook;
    },
    data() {
        return {
            isLogin: false,
        }
    },
    methods: {
        logInWithFacebook() {
            loginToFacebook().then((data) => {
                if (data === 'connected') {
                    console.log(`connected`);
                    // this.$router.push({ name: 'Home' })
                    this.isLogin = true;
                }
                  
                
            }
            )
            
            
        },
       
       
    },
};
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
