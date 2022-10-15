<script setup lang="ts">
import { useRouter } from 'vue-router'
// import loginApi from '../api/loginApi'
import { ElMessage } from 'element-plus'
import store from '../store/index'
import { storeToRefs } from 'pinia'
import utils from '../utils/index'

interface User {
  username: String
  password: String
}

const router = useRouter()

const countstore = store.useCountStore()

const user: User = {
  username: '',
  password: '',
}

// 转化为ref避免解构赋值失去响应性
const { counter } = storeToRefs(countstore)

function submit(): void {
  if (user.username && user.password) {
    utils.setUtils('wanglong')
    ElMessage.success('登录成功')
    router.push('/home')
  } else alert('用户名或密码不可为空')
}
</script>

<template>
  <div class="box">
    <div class="card">
      <div class="card-content">
        <div class="card-row">
          <label for="username">用户名：</label>
          <input name="username" v-model="user.username" />
        </div>
        <div class="card-row card-row-fix">
          <label for="password">密码：</label>
          <input name="password" type="password" v-model="user.password" />
        </div>
        <div class="card-button">
          <button @click="submit">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url('../styles/style.less');
.card {
  z-index: 2;
  background: #eddeee;
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  .card-content {
    width: 15.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .card-row {
      display: flex;
      justify-content: space-between;
    }
    .card-row-fix {
      margin-top: 1rem;
    }
    .card-button {
      margin: 1rem 0 0 6rem;
    }
  }
}
</style>
