<template>
    <div class="page">
        <div class="flexing">
            <div>
                <img :src="imgUrl" alt="">
            </div>
            <div>
                <h4>{{pageDetail.pageName}}</h4>
                <p>{{pageDetail.serviceType}}</p>
                <p>ID:{{pageDetail.pageId}}</p>
            </div>
            <div>
                <!-- TODO: add more about this page when user click -->
                <!-- <span class="pi pi-ellipsis-v"></span> -->
            </div>
        </div>


    </div>

</template>

<script>
import {getProfilePicture} from "../services/facebook_login.services"
export default {
    name: 'ShowPages',
    data() {
        return {
            imgUrl: " ",
            pageArray: []
        }
    },
    props: ['pageDetail','pageId'],
    created() {
        getProfilePicture(this.pageId).then(data => {
            this.imgUrl = data.data.url
        })

    }
    
}
</script>

<style>
.page {
    padding: 20px;
    margin: 10px;
    background-color: white;
    width: 450px;
    border-radius: 3px;
}
.page h4{
    color: #6196e5;
    margin-bottom: 0px
}
.flexing{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>