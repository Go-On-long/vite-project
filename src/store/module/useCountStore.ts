import { defineStore } from 'pinia'

interface countState {
  counter: number
}

export const useCountStore = defineStore('useCountStore', {
  state: (): countState => {
    return {
      counter: 0,
    }
  },
  getters: {
    doubleCount: state => state.counter * 2,
  },
  actions: {
    increment(): void {
      this.counter++
    },
    randomizeCounter(): void {
      this.counter = Math.round(100 * Math.random())
    },
    setCounter({ counter }: countState): void {
      this.$patch({
        counter,
      })
    },
  },
})
