<template>
    <div class="note_board">
         <Head></Head>
        <h5>My Note</h5>
    </div>
</template>

<script>
    import Head from './head/Head';
    export default{
        //....
        components:{Head}
    }
</script>

<style>
    .note_board{
        width:auto;
        height:300px;
        algin:center;
        border-radius:5px;
    }
</style>