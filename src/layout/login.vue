<script setup lang="ts">
import { reactive, provide, inject } from 'vue'

// 接口
interface User {
  username: String
  password: String
}

const user: User = {
  username: '',
  password: '',
}

function submit(): void {
  alert(user.username + '' + user.password)
}
</script>

<template>
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
</template>

<style lang="less" scoped>
.read-the-docs {
  color: #888;
}
.card {
  z-index: 2;
  background: #eddeee;
  width: 20rem;
  height: 20rem;
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
      margin-top: 1rem;
    }
  }
}
</style>
