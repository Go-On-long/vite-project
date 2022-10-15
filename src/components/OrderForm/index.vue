<template>
  <div>
    <div class="search">
      <el-input
        v-model="input"
        placeholder="搜索六个月内的外卖商超订单"
        :prefix-icon="Search"
      />
    </div>
    <div class="content" v-for="(item, index) in data" :key="index">
      <div class="head">
        <div class="head-left">
          <img src="../../assets/vue.svg" alt="" />
          <span>{{ item.name }}</span>
          <span>></span>
        </div>
        <span>{{ item.state }}</span>
      </div>
      <div class="ctx"></div>
      <div class="footer">
        <el-button>{{ item.pj }}</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref<string>('')
const data = ref<Array<Object>>([
  {
    name: '汉堡王(滨江餐厅)',
    state: '已送达',
    pj: '评价得欢乐豆',
  },
  {
    name: '汉堡王(滨江餐厅)',
    state: '已送达',
    pj: '评价得欢乐豆',
  },
  {
    name: '汉堡王(滨江餐厅)',
    state: '已送达',
    pj: '评价得欢乐豆',
  },
  {
    name: '汉堡王(滨江餐厅)',
    state: '已送达',
    pj: '评价得欢乐豆',
  },
  {
    name: '汉堡王(滨江餐厅)',
    state: '已送达',
    pj: '评价得欢乐豆',
  },
  {
    name: '汉堡王(滨江餐厅)',
    state: '已送达',
    pj: '评价得欢乐豆',
  },
  {
    name: '汉堡王(滨江餐厅)',
    state: '已送达',
    pj: '评价得欢乐豆',
  },
  {
    name: '汉堡王(滨江餐厅)',
    state: '已送达',
    pj: '评价得欢乐豆',
  },
  {
    name: '汉堡王(滨江餐厅)',
    state: '已送达',
    pj: '评价得欢乐豆',
  },
])

</script>
<style lang="less" scoped>
.search {
  width: 95%;
  margin: 0.6rem auto;
  border-radius: 0.2rem;
}
.content {
  background: grey;
  height: 8rem;
  .search();
  .head {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0.6rem;
    .head-left {
      display: inherit;
      img {
        width: 1rem;
        height: 1rem;
        margin: auto 0.2rem;
      }
      :last-child {
        padding-left: 0.6rem;
      }
    }
  }
  .ctx {
    width: 100%;
    height: 3rem;
  }
  .footer {
    display: flex;
    justify-content: end;
    margin-right: 0.6rem;
  }
}
</style>
