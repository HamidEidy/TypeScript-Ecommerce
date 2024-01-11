<template>
  <section class="food_section layout_padding">
    <div class="container d-flex justify-content-center">
      <div class="row col-12 px-4">
        <div class="col-sm-12 col-lg-3">
          <!-- <div>
                        <label class="form-label">جستجو</label>
                        <div class="input-group mb-3">
                            <input @input="checksearchbox" type="text" v-model="search" class="form-control" placeholder="نام محصول ..."
                                aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <button @click="search !== '' && changepage({ search: search })" class="input-group-text" id="basic-addon2">
                                <i class="bi bi-search"></i>
                            </button>

                        </div>
                    </div>
                    <hr>  -->

          <div class="filter-list shadow-lg rounded mt-3 pb-2">
            <div class="categoryTitle">
              <span class="highlight">.</span>
              <p>انتخاب برند</p>
            </div>
            <ul>
              <li
                :class="{
                  active:
                    route.query.hasOwnProperty('category') &&
                    route.query.category == category.id,
                }"
                @click="changepage({ category: category.id })"
                v-for="category in categories.data"
                :key="category.id"
                class="list-group-item"
              >
                {{ category.name }}
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-9">
          <div
            class="filters shadow-lg rounded my-3 py-2 d-flex flex-column flex-lg-row"
          >
            <label class="form-label">مرتب سازی بر اساس :</label>
            <div class="form-check my-2">
              <p
                :class="{
                  trues:
                    route.query.hasOwnProperty('sortBy') &&
                    route.query.sortBy == 'max',
                }"
                @click="changepage({ sortBy: 'max' })"
              >
                بیشترین قیمت
              </p>
            </div>
            <div class="form-check my-2">
                <p
                  :class="{
                    trues:
                      route.query.hasOwnProperty('sortBy') &&
                      route.query.sortBy == 'min',
                  }"
                  @click="changepage({ sortBy: 'min' })"
                >
                  کمترین قیمت
                </p>
              </div>
              <div class="form-check my-2">
                <p
                  :class="{
                    trues:
                      route.query.hasOwnProperty('sortBy') &&
                      route.query.sortBy == 'bestseller',
                  }"
                  @click="changepage({ sortBy: 'bestseller' })"
                >
                  پرفروش ها 
                </p>
              </div>
              <div class="form-check my-2">
                <p
                  :class="{
                    trues:
                      route.query.hasOwnProperty('sortBy') &&
                      route.query.sortBy == 'sale',
                  }"
                  @click="changepage({ sortBy: 'sale' })"
                >
                  با تخفیف 
                </p>
              </div>
          </div>
          <div
            v-if="pending"
            class="d-flex justify-content-center align-items-center h-100"
          >
            <div class="spinner-border"></div>
          </div>
          <div v-else>
            <div
              v-if="data.data.products.length == 0"
              class="d-flex justify-content-center align-items-center h-100"
            >
              <h5>محصولی یافت نشد !</h5>
            </div>
            <div v-else>
              <div class="row gx-3">
                <div
                  class="col-sm-6 col-lg-3"
                  v-for="product in data.data.products"
                  :key="product.id"
                >
                  <card :product="product" />
                </div>
              </div>
            </div>
            <nav class="d-flex justify-content-center mt-5">
              <ul class="pagination">
                <li
                  class="page-item"
                  :class="{ active: link.active }"
                  v-for="link in data.data.meta.links.slice(1, -1)"
                  :key="link.id"
                >
                  <button
                    @click="changepage({ page: link.label })"
                    class="page-link"
                    href="#"
                  >
                    {{ link.label }}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script setup>
const router = useRouter();
const route = useRoute();
const search = ref("");
const query = ref({});
const {
  public: { apiBase },
} = useRuntimeConfig();

const { data: categories } = await useFetch(`${apiBase}/categories`);
query.value = route.query;
const { data, refresh, pending } = await useFetch(() => `${apiBase}/menu`, {
  query: query,
});

watch(() => {
  if (Object.keys(route.query).length == 0) {
    query.value = {};
  }
});

function changepage(param) {
  query.value = { ...route.query, ...param };
  if (!param.hasOwnProperty("page")) {
    delete query.value.page;
  }
  router.push({
    path: "/menu",
    query: query.value,
  });
}
function checksearchbox(val) {
  if (val.target.value == "") {
    if (query.value.hasOwnProperty("search")) {
      delete query.value.search;
    }
    router.push({
      path: "/menu",
      query: query.value,
    });
  }
}
</script>

<style scoped lang="scss">
.categoryTitle {
  position: relative;
  .highlight {
    position: absolute;
    top: -27px;
    margin-right: 5px;
  }
  p {
    color: #000;
  }
}

p {
  padding: 20px 40px 0px 0px;
}
.filters {
    font-weight: 500;
  display: flex;
  align-items: baseline;
  input[type="radio"] {
    visibility: hidden;
  }
}
li {
width: 85%;
padding: 5px 10px;
cursor: pointer;
border-radius: 5px;

}
.active{
    background-color: #edfbfc;
    color:  #008072;
}
.form-label {
  padding-right: 15px;
}
.form-check {

  p{
    padding: 5px 10px;
    border-radius: 5px;
    margin: 0;
    cursor: pointer;
  }
}

.trues {
  background-color: #edfbfc;
  color:  #008072;
}
</style>