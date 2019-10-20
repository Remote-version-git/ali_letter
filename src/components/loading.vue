<template>
  <div class="loading-backgorund">
      <div>
        <h1>Loading...</h1>
      <img src="../assets/images/loading.gif" alt="">
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.loading-backgorund {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 9999;
}
img {
    width: 300px;
    height: 200px;
    margin: 0 auto;
}
h1 {
    font-size: 16px;
    border-radius: 10px;
    padding: 10px 5px;
    color: #5fbc32;
    background-color: #fefefe;
    text-align: center;
}
</style>