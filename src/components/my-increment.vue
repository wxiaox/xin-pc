<template>
<div class='wrapper'>
  数值：{{value}}<button @click="increment()">自增一</button>
</div>
</template>

<script>
export default {
  name: 'my-increment',
  // data(){
  //   return {
  //     count:0
  //   }
  // },
  props:['value'],
  methods:{
    increment(){
     this.$emit('input', this.value + 1)
    }
  }
}
</script>

<style scoped lang='less'></style>