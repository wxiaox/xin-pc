<template>
  <el-container class="container-home">
   <el-aside class="my-aside" :width="isOpen?'200px':'64px'">
    
      <!-- logo区域 -->
      <div class="logo" :class="{minlogo:!isOpen}"></div>
      <el-aside class="my-aside" width="200px">
        <!-- 导航菜单 -->
        <el-menu
          default-active="1"
          background-color="#000"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="border-right:none"
          :collapse="!isOpen"
          :collapse-transition="false"

        >
          <el-menu-item index="1">
            <i class="el-icon-s-home" ></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">內容管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-picture"></i>
            <span slot="title">素材管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">发布文章</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-chat-dot-round"></i>
            <span slot="title">评论管理</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-present"></i>
            <span slot="title">粉丝管理</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-setting"></i>
            <span slot="title">个人设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
    </el-aside>
    <el-container>
      <el-header class="my-header">
        <span @click="toggleMenu()" class="icon el-icon-s-fold"></span>
        <span class="text">江苏传智播客科技教育有限公司</span>
        <el-dropdown class="my-dropdown">
          <span class="el-dropdown-link">
            <!-- 用户头像 -->
             <img class="head" :src="photo" alt />

            <!-- 用户名称 -->
            <strong class="name">{{name}}</strong>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人设置</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "app-home",
  data(){
    return{
      isOpen:true,
       name: '',
      photo: ''
    }
  },
  create(){
    const user = auth.getUser();
    this.name = auth.name
    this.pooto = auth.photo
  },
  methods:{
    toggleMenu(){
      this.isOpen=!this.isOpen
    }
  }

};
</script>

<style scoped lang='less'>
.container-home {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .my-aside {
    background-color: #000;
    .logo {
      width: 100%;
      height: 60px;
      background: #000 url(../../assets/logo_admin.png) no-repeat center /
        140px auto;
    }
    .minlogo {
      background-image: url(../../assets/logo_admin_01.png);
      background-size: 36px auto;
    }
  }

  .my-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .icon {
      font-size: 24px;
      vertical-align: middle;
    }
    .text {
      vertical-align: middle;
      padding-left: 10px;
    }
    .my-dropdown {
      float: right;
      .head {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      .name {
        padding-left: 5px;
        vertical-align: middle;
      }
    }
  }
}
</style>
