<template>
  <div class="container-article">
    <el-card>
      <div slot="header">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 表单 -->
      <el-form label-width="80px">
        <el-form-item label="状态"></el-form-item>
        <el-form-item label="频道"></el-form-item>
        <el-form-item label="日期范围"></el-form-item>
        <el-form-item ></el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "app-article",
  created() {
    this.$http
      .get("articles")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped lang='less'></style>