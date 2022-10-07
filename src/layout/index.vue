<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="'1'"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <router-link to="/Order">点餐</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/OrderForm">订单</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/UserCenter">个人中心</router-link>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main> <router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
</script>

<style lang="less"></style>
