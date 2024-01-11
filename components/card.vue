<template>
    <div class="box shadow-lg">
        <div>
            <div class="img-box">
                <img :src="props.product.primary_image" alt="product-image" style="max-width:100%">
            </div>
            <div class="detail-box">
                <h5>
                    <NuxtLink :to="`/products/${props.product.slug}`">{{ props.product.name }}</NuxtLink>
                </h5>
                <!-- <p>
                    {{ props.product.description }}
                </p> -->
                <div class="options">
                    <button  title="افزودن به سبد خرید" class="border-0" @click="addToCart(product)">
                        <i class="bi bi-cart-fill"></i>
                        
                    </button>

                    <h6  v-if="props.product.is_sale">
                        <del>{{ props.product.price }}</del>
                        
                        {{ props.product.sale_price }}
                        <span>تومان</span>
                    </h6>
                    <h6 v-else>
                        {{ props.product.price }}
                        <span>تومان</span>
                    </h6>

    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// import { useCartStore } from "../../store/cart";
const props = defineProps(['product']);
// const cart = useCartStore();
// function addToCart(product){
//     cart.remove(product.id);
//     cart.addToCart(product, 1);

// }
</script>

<style scoped lang="scss">
.box {
    min-width: 100%;
    position: relative;
    margin-top: 25px;
    background-color: #ffffff;
    border-radius: 10px;
    color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    background: linear-gradient(to bottom, #f1f2f3 25px, #222831 25px);
padding: 30px;
background: #fff;
    .img-box {
      background-color: #ffffff;
      height: 150px;
      margin-bottom: 15px;
      img {
        width: 100%;
        height: 100%;

        cursor: pointer;

      }
    }

    .detail-box {
      background-color: #ffffff;
      color: #008072;
      font-family: "Vazir";
      font-weight: bold;
      a {
font-size: 15px;
font-weight: bold;
margin-right: -20px;
      }
      a:hover {
      cursor: pointer;
      }

    }
h6{
    font-weight: bold;
    padding-top: 10px;
}
    .options {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      align-items: center;
      button {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background:  #edfbfc;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 3px;
        i{
            font-size: 15px;
            color:  #008072;
        }

      }
      button:hover {
        background-color: #008072;
        transition: 0.2s;
        i{
            color:  #edfbfc;
        }
      }
      .bi{
        padding-top: 3px;
      }
    }
  }
  .number {
    font-family: "Vazir";

}

</style>