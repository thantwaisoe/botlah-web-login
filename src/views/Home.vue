<template>
  <div>
    <Menubar>
      <template #start>
        <div class="menu-tiems">
          <div class="p-menuitem">
            <span class="p-menuitem-icon pi pi-bars" @click="visible=true">
            </span>
          </div>
        </div>
      </template>
      <template #end>
        <div class="menu-tiems">
          <div class="p-menuitem">
            <span class="p-menuitem-icon pi pi-user" :style="'font-size: 1.4rem, padding-right: 5px'"></span>
          </div>
        </div>
      </template>

    </Menubar>
    <!-- side bar -->
    <div class="sidebar">
      <Sidebar v-model:visible="visible" :style="'width: 15%'">
        <ul>
          <li> <a :href="'/home'">Home</a></li>
          <li><a :href="'/home'">Setting</a></li>

        </ul>
      </Sidebar>
    </div>
    <!-- end side bar -->
    <!-- content area -->
    <div class="content">
      <Button type="button" label="Add Your Facebook Page" icon="pi pi-plus" />
      <h3>Facebook Page List</h3>
      <div v-for="page in fbPage" :key="page">
        <ShowPages :pageDetail="page" :pageId="page.pageId"/>
      </div>

      <!-- <div class="pages-list"> -->
      <!-- need to handle multiple pages HERE -->
      <!-- <div class="page">
                <h5  class="page-name">Facebook page Name </h5>
                <span class="pi pi-ellipsis-v"></span>
                <p>Busines Types</p>
            </div>
            <div class="page">
                <h5  class="page-name">Facebook page Name </h5>
                <span class="pi pi-ellipsis-v"></span>
                <p>Busines Types</p>
            </div>
        </div> -->
    </div>
  </div>
</template>

<script>
import {getPageByMerchantId} from "../services/facebook_login.services"
import ShowPages from './ShowPages.vue'
import store from "@/store"
export default {
  name: 'Home',
  components: {
    ShowPages
  },
  data() {
    return {
      fbPage: null,
      visible: false, 
    }
  },
  created() {
    let id = store.state.userId
    console.log({id})
    getPageByMerchantId(id).then((data) => {    
      this.fbPage = data.data
    })

  }
}
</script>

<style lang="scss" scoped>
.sidebar {
    text-align: center;
    background-color: white;
}
ul{
  padding: 0px;
}

ul li {
    padding-bottom: 10px;
    list-style: none;
    text-align: center;
    font-size: 23px
}
ul li a:hover{
  color: var(--blue-500)
}

.pages-list {
    margin-top: 20px;
   
}



.pi pi-ellipsis-v {
    text-align: right;
}

h3 {
    text-align: left;
}

.p-menubar {
    background-color: rgb(207, 203, 203);
    padding-right: 25px;

}

a {
    display: block;
    color: black;
    text-decoration: none;
}

.content {
    margin: 45px 0px 0px 50px;
}

.p-menuitem-icon {
    font-size: 1.6rem;
}
.content h3{
  margin-top: 40px;
}
</style>
