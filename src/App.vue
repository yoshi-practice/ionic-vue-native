<template>
  <div>
    <div>{{count}}</div>
    <ion-button shape="round" @click="this.countUp">Push</ion-button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      count:0
    }
  },
  methods:{
    countUp(){
      this.count++
    }
  }
}
</script>
