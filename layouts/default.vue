 <template>
  <div class="d-flex  flex-column align-items-center head px-3">
    <header
      class="d-flex col-10 justify-content-between align-items-center py-3"
    >
      <div id="logo">
        <nuxt-link to="/"
          ><h1>فروشگاه موبایل</h1></nuxt-link>
      </div>
      <div>
        <i class="bi bi-search"></i>
        <input
          @click="blurBg"
          type="text"
          placeholder="به دنبال چه چیزی میگردید؟"
        />
      </div>

      <div class="d-flex">
        <div id="call">
          <p>با ما تماس بگیرید</p>
          <p class="number">02152415265</p>
        </div>

        <div id="icons">
          <i class="bi bi-cart3"></i>
          <i class="bi bi-person"></i>
        </div>
      </div>
    </header>
    <nav class="col-10 d-flex justify-content-between align-items-center">
      <div id="routlink">
        <nuxt-link to="/Menu"> محصولات</nuxt-link>
        <nuxt-link to="/how-to-buy"> راهنمای خرید</nuxt-link>
        <nuxt-link to="/waranty-rules">شرایط گارانتی</nuxt-link>

        <div class="dropdown">
          <button class="dropbtn">سایر ...</button>
          <div class="dropdown-content">
            <nuxt-link to="/installment">خرید اقساطی</nuxt-link>
            <nuxt-link to="/contact">تماس با ما</nuxt-link>
            <nuxt-link to="/faq">سوالات متداول</nuxt-link>
          </div>
        </div>
      </div>
      <a id="me" href="https://github.com/HamidEidy" target="_blank">درباره من</a>
    </nav>
  </div>
</template> 

<script setup>
</script>
<style scoped>
.head {
  z-index: 1000;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2) !important;
}
</style>