<template>
  <div class="faq">
    <div class="header d-flex align-items-center justify-content-center">
      <h2>سوال های متداول ؟</h2>
    </div>
    <div class="category">
      <div class="send">
        <i class="bi bi-person"></i>
        <p>ارسال</p>
      </div>
      <div class="orders">
        <i class="bi bi-person"></i>
        <p>ثبت سفارش و پیگیری</p>
      </div>
      <div class="we">
        <i class="bi bi-person"></i>
        <p>خدمات اختصاصی</p>
      </div>
    </div>
    <div class="text-center mt-5">  
          <h3>با ما تماس بگیرید</h3>
        <p class="number">021-4455</p></div>

  </div>
  <subscribe-to-new  />
</template>

<style lang="scss" scoped>
.faq {
  min-height: 80vh;
  .header {
    background-color: #008072;
    height: 40vh;
    h2 {
      font-size: 40px;
      font-weight: 500;
      color: #fff;
    }
  }
  h3{
    font-size: 40px;
    color: #008072;
    margin-bottom: 30px;
  }
  .number{
    font-size: 20px;
    font-weight: bold;
    color: #008072;
  }
  .category {
    display: flex;
    flex-direction: row;
    justify-content: center;
    div {
      i {
        color: #008072;
        font-size: 35px;
        margin-bottom: 5px;
      }
      margin: 0px 20px;
      margin-top: -60px;
      align-items: center;
      display: flex;
      justify-content: center;
      cursor: pointer;
      flex-direction: column;
      height: 200px;
      width: 200px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      background-color: #fff;
    }
  }
}
</style>