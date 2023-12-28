 <template>
  <div class="d-flex flex-column align-items-center">
    <header
      class="d-flex col-11 justify-content-between align-items-center py-3"
    >
      <div id="logo">
        <img src="../assets/1641798048-v86QVTiiqSZZd0o0.svg" alt="" />
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
          <p>02152415265</p>
        </div>

        <div id="icons">
          <i class="bi bi-cart3"></i>
          <i class="bi bi-person"></i>
        </div>
      </div>
    </header>
    <nav class="col-11 d-flex justify-content-between align-items-center">
      <div id="routlink">
    <nuxt-link to="/Menu">محصولات</nuxt-link>
    <nuxt-link to="/how-to-buy">راهنمای خرید</nuxt-link>
    <nuxt-link to="/waranty-rules">شرایط گارانتی</nuxt-link>

    <div class="dropdown">
      <button class="dropbtn">سایر ...</button>
      <div class="dropdown-content">
        <a href="#">خرید اقساطی</a>
        <a href="#">تماس با ما</a>
        <a href="#">سوالات متداول</a>
      </div>
    </div>
      </div>
      <a id="me" href="">لینکدین من</a>
    </nav>
  </div>
</template> 

<script setup>
</script>