<template>
  <div>
    <h2>Menu</h2>
    <!-- <h1>{{ msg }}</h1> -->
    <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
        <img :src="data.image" class="img-fluid" />
        <h3 @click="goTodetail(data.productId)">{{data.productTitle}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      title: "Home",
      products: [
        {
          productTitle: "AAAA",
          image: require("../assets/images/p1.jpg"),
          productId: 1
        },
        {
          productTitle: "BBBB",
          image: require("../assets/images/p2.jpg"),
          productId: 2
        },
        {
          productTitle: "CCCC",
          image: require("../assets/images/p3.jpg"),
          productId: 3
        },
        {
          productTitle: "DDDD",
          image: require("../assets/images/p4.jpg"),
          productId: 4
        },
        {
          productTitle: "EEEE",
          image: require("../assets/images/p1.jpg"),
          productId: 5
        },
        {
          productTitle: "FFFF",
          image: require("../assets/images/p2.jpg"),
          productId: 6
        }
      ]
    };
  },
  methods: {
    goTodetail(productId) {
      {    this.$router.push({name:'details', params: { pId: productId}})  }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
