<template>
    <div class="page">
        <div class="flexing">
            <div>
                <h4>Facebook Page Name</h4>
                <p>Busines Type</p>
            </div>
            <div>
                <span class="pi pi-ellipsis-v"></span>
            </div>
        </div>


    </div>
    <div class="page">
        <div class="flexing">
            <div>
                <h4>Facebook Page Name</h4>
                <p>Busines Type</p>
            </div>
            <div>
                <span class="pi pi-ellipsis-v"></span>
            </div>
        </div>


    </div>

</template>

<script>
export default {
name:'ShowPages'
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
    color: #6196e5
}
.flexing{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>