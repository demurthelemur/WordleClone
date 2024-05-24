<template>
  <div class="box">
    {{ Letter }}
  </div>
</template>

<script>
export default {
  props: {
    Letter: {
      type: String,
      required: false
    }
  }
}
</script>

<style>
.box {
  width: 2rem;
  height: 3rem;
  text-align: center;
  background-color: #2b2a2a;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 15px;
  margin: 5px;
  border-radius: 8px;
  font-size: 40px;
  color: white;
}
</style>
