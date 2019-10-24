<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="../../assets/logo.png" alt="无法显示图片">
          </div>
        </el-col>
        <el-col :span="18">
          <div class="middle">
            电商后台管理系统
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <a class="logout" @click.prevent="handleLogout()" href="#">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <!--        侧边栏导航-->
        <el-menu :unique-opened="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">用户列表</span>
            </el-menu-item>
          </el-submenu>
        <!--2-->

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>权限管理</span>
          </template>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">角色列表</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">权限列表</span>
          </el-menu-item>
        </el-submenu>

        <!--3-->

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>商品管理</span>
          </template>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">分类参数</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">商品分类</span>
          </el-menu-item>
        </el-submenu>

        <!--4-->

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>订单管理</span>
          </template>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>
        </el-submenu>

        <!--5-->

        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>数据统计</span>
          </template>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">数据报表</span>
          </el-menu-item>
        </el-submenu>
          </el-menu>
      </el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // newVue之前自动触发
  beforeCreate () {
    // 获取token
    const token = localStorage.getItem('token')
    // 如果有，就继续渲染组件
    // 如果没有，返回登录页
    if (!token) {
      this.$router.push({name: 'login'})
    }
  },
  methods: {
    handleLogout () {
    // 清楚token,返回登录页面
      localStorage.clear()
      this.$message.success('退出成功')
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
  }

  .header {
    background-color: #b3c0d1;

  }

  .aside {
    background-color: #d3dcd6;
  }

  .main {
    background-color: #e9eef3;
  }

  .middle {
    /*竖直居中，与外层高度相同，可以使用F12看一下*/
    line-height: 60px;
    /*水平居中*/
    text-align: center;
  }

  .logout {
    /*去除下划线*/
    text-decoration: none;
    line-height: 60px;
  }
</style>
