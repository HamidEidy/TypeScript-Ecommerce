<template>
  <div class="box text-start d-flex flex-column">
    <div>
      <div class="img-box">
        <img class="bg-white" src="/brands/iphone.png" alt="product-image" />
      </div>

      <div class="detail-box">
        <h5>
          <a>شیائومی ردمی نوت</a>
        </h5>
        <p>کتگوری</p>
        <div class="options">
            <div class="d-flex align-items-baseline justify-content-between w-100">
            <i class="bi bi-cart3"></i>
            <p class="number">1000 تومان</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

  .box {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -4px rgba(0, 0, 0, 0.1);
    .img-box {
      background-color: #ffffff;
      height: 135px;
      padding: 0px 20px;
      img {
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        width: 100%;
        height: 100%;
      }
    }

    .detail-box {
      padding: 25px;
      background-color: #ffffff;
      color: #222831;
      h5 {
        font-weight: 600;
      }
      a {
        font-weight: 600;
        color: #000000;
        cursor: pointer;
      }
      p {
        font-size: 15px;
        font-weight: bold;
        display: block;
      }
.number{
    color: #00a693;
}
      i {
        background-color: #00a693;
        margin: 0px 10px;
        color: #fff;
        height: 32px;
        border-radius: 50px;
        padding: 5px 8px;
        align-items: center;
        text-align: center;
        display: flex;
        cursor: pointer;
    }


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
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background: #222831;
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
      }
      button:hover {
        background-color: #ffb000;
        transition: 0.2s;
      }
      .bi {
        padding-top: 3px;
      }
    }
  }

</style>