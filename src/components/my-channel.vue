<template>
  <el-select @change="changeChannel" :value="value" placeholder="请选择">
    <el-option v-for="item in channelOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
  </el-select>
</template>

<script>
export default {
name: 'my-channel',
props:['value'],
data(){
  return {
     channelOptions: []
  }
},
 created () {
    this.getChannelOptions()
  },
    methods: {
    // value 是选择频道后的频道ID
    changeChannel (value) {
      // if (this.value === '') this.value = null
      // 通知父组件改值  filterData.channel_id
      if (value === '') value = null
      this.$emit('input', value)
    },
    // 获取频道数据
    async getChannelOptions () {
      // 发请求获取频道数据
      const res = await this.$http.get('channels')
      // res = {data:{message:'',data:{channels:[// 频道数组 ]}}}
      // this.channelOptions = [{id,name}]  数据格式
      this.channelOptions = res.data.data.channels
    }
  }
}

</script>

<style scoped lang='less'></style>