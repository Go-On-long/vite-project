<script setup lang = "ts" >
import { reactive, provide, inject } from 'vue'

// 基本参数定义
const arr = reactive<Array<number>>([1, 2, 3])
const obj = reactive<Object>({
  name: '1233',
  value: 111,
})
enum Color {
  green,
  red,
  yellow,
}
let a: Color = Color.green
// 内置对象
// Boolean
// Number
// String
// Date
// RegExp
// Error
// Window
// Document
// HTMLElement
// DocumentFragment
// Event
// NodeList

defineProps<{
  msg: string
}>()
// emits 为 defineEmits 显示声明后的对象。
const emits = defineEmits(['increase'])
//触发监听事件
emits('increase', {
  params: {},
})
// 如存在多个监听事件则为
// defineEmits(['increase', 'emit2', 'emit3'])
//provide,inject 传递，接受数据
provide('lala', {})

inject('lala', {})

// 接口
interface Person {
  // readonly name: String,// 只读
  username: String
  password: String
}

const b: Person = {
  username: '',
  password: '',
}

//类
// abstract 抽象类，不能被实例化
class name {
  private params: Object
  // protected 在派生类中可以继续访问，static为类对象属性，非static为实例对象属性
  constructor(params: Object) {
    this.params = params
  }
}

class fuck extends name {
  constructor(f: Object) {
    super(f)
  }
}

const name1 = new name(b)

const fuck1 = new fuck(b)

function c(): number {
  return 11
}

//  设置默认参数和可选,剩余参数
const d = function (name: String = '1', age?: Number, ...args: any[]): String {
  return name + ' ' + age + args
}

// 泛型不事先指定类型
const f = function <T, V>(value: T, name: V) {
  return [value, name]
}

//泛型接口
interface Nerver<T> {
  data: T[]
  code: (t: T) => void
  getNumber: (id: Number) => T
}
// 泛型约束
interface Lengthwise {
  length: number
}

// 指定泛型约束
function fn2<T extends Lengthwise>(x: T): void {
  console.log(x.length)
}
fn2('sss')

function submit(): void {
  alert(b.username + '' + b.password)
}

console.log(Color, a, b, c(), name1, fuck1, d('zha'), f<Number, String>(1, '1'))
</script>

<template>
  <div style="z-index:2;background: #fff;width: 20rem;height: 20rem;">
    <div style="width:15.5rem;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">
      <div style="display:flex;justify-content: space-between;">
        <label for="username">用户名：</label>
        <input name="username" v-model="b.username" />
      </div>
      <div style="display:flex;justify-content: space-between;margin-top: 10px;">
        <label for="password">密码：</label>
        <input name="password" type="password" v-model="b.password" />
      </div>
      <div>
        <button @click="submit">登录</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>