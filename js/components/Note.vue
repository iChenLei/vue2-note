<template>
    <div class="note_board">
         <Head></Head>
        <h5>My Note</h5>
        <Login></Login>
    </div>
</template>

<script>
    import Head from './head/Head';
    import Login from './Login';
    export default{
        //....
        components:{Head,Login}
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