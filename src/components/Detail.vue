<template>
  <div class="details">
    <div class="container">
      <h1 class="text-primary text-center">{{title}}</h1>
      <h3>Product Id: {{ this.$route.params.pId }}</h3>
      <div class="col-md-12" v-for="(product,index) in products" :key="index">
          <div v-if="pId == product.productId">
              <h1>{{ product.productTitle }}</h1>
              <img :src="product.image" class="img-fluid" />
          </div>
      </div>
      <!-- <div class="col-md-12" v-for="(product,index) in products" :key="index">
        <div v-if="proId == product.productId">
          <h1>{{product.productTitle}}</h1>
          <img :src="product.image" class="img-fluid" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      title: "details",
      pId : this.$route.params.pId,
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
  }
};
</script>
