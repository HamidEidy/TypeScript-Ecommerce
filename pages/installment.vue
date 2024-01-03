<template>
  <div class="installment">
    <img src="/bg-header.webp" alt="" />
    <div class="d-flex flex-column align-items-center head px-3">
      <div class="d-flex flex-column col-10 justify-content-between py-3">
        <div class="btns">
          <h4>
            فروش اقساطی محصولات
            <br />
            فروشگاه برای تمام ایران
          </h4>
          <p>با خرید اقساطی #یهویی_نده</p>
          <i class="bi bi-arrow-down-circle-fill"></i>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
img {
margin-top: -300px;
}
.btns {
  z-index: 1;
  color: aliceblue;

  h4 {
    font-size: 40px;
    font-weight: 900;
    margin-top: 2vh;
  }
  p {
    margin-top: 5vh;
    background-color: #1fcf8e;
    box-shadow: 0 20px 60px 0 rgba(31, 207, 142, 0.6);
    padding: 10px 50px;
    border-radius: 10px;
    width: fit-content;
    font-size: 30px;
    font-weight: 800;
  }
  i {
    font-size: 60px;
    
  }
}
</style>

<script>
definePageMeta({
  layout: false,
});
</script>