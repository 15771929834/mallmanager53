<template>
  <div class="login-wrap">
    <el-form class='login-form' label-position="top" label-width="80px" :model="formdata">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button
        @click.prevent = "handleLogin()"
        class="loginButton" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'login',
    data () {
      return {
        formdata: {
          username: '',
          password: ''
        }
      }
    },
    methods:{
      async handleLogin(){
        const res = await this.$http.post('login', this.formdata)
            // console.log(res)
            // 登录成功保存token，跳转home，并提示，不成功，消息提示
            const {data, meta:{msg, status}} = res.data
            if (status === 200) {
              localStorage.setItem('token',data.token)
              this.$router.push({name:'home'})
              this.$message.success(msg)
            }
            else {
              this.$message.warning(msg)
            }

      }
    }

  }
</script>

<style scoped>
  .login-wrap {
    height: 100%;
    background: #324152;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-wrap .login-form {
    width: 400px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 30px;
  }

  .login-wrap .loginButton{
    width: 100%;
  }
</style>
