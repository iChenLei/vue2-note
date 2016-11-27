<template>
    <div>
    <h4>陈雷的笔记</h4>
    <p>你已经记了{{ count }}篇笔记</p>
    <p>当前时间{{  time }}</p>
    </div>
</template>

<script>
    export default{
        data:function(){
            return{
                mcount:12,
                time:new Date()
            }
        },
        computed:{
            count:()=>{23}
        }
    }
</script>

<style>
    p{
        color:yellow;
    }
</style>