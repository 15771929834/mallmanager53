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
            <a class="logout" href="#">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">Aside</el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'home'
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

  .middle{
    /*竖直居中，与外层高度相同，可以使用F12看一下*/
line-height: 60px;
    /*水平居中*/
    text-align: center;
  }

  .logout{
    /*去除下划线*/
    text-decoration: none;
    line-height: 60px;
  }
</style>
