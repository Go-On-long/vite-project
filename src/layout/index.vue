<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="0"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <el-menu-item
            v-for="(item, index) in title"
            :key="index"
            :index="index"
            @click="routerPush(index)"
          >
            {{ item }}
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main> <router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const title = ref<Array<String>>(['点餐', '订单', '个人中心'])
const routes = ref<Array<String>>(['Order', 'OrderForm', 'UserCenter'])
const router = useRouter()

function routerPush(index: number): void {
  router.push('/' + routes.value[index])
}

onMounted(() => {
  // 默认跳转首页
  routerPush(0)
})
</script>
