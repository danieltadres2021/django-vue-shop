<template>
  <div class="fuid-container mt-5 mb-5">
    <section id="main" class="main">
        <div class="container">
          <div class="row mt-5">
            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 mt-2 mb-2">
              <div class="card"
                   style="background-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url('https://cdn.shopify.com/s/files/1/0287/4323/7725/files/headphones-2588235_1920_1350x897.jpg?v=1594960019');
                   height: 400px;
                   background-size: cover;">
                <div class="container-fluid">
                  <div class="mt-5 pt-5">
                    <h1 class="default-font text-white font-weight-bold ml-5">Pop Greatest Records</h1>
                    <p class="default-font text-white ml-5">Shop Pop's Best Albums Ever Collection</p>
                    <a class="default-font btn btn-outline-light ml-5" href="/">SHOP</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 mt-2 mb-2">
              <div class="card"
                  style="background-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url('https://cdn.shopify.com/s/files/1/0287/4323/7725/files/photo-1542395118-9d95347995bc_898x674.jpg?v=1604682051');
                  height: 400px;
                  background-size: cover">
                <div class="container-fluid">
                  <div class="mt-5 pt-5">
                    <h1 class="default-font text-white font-weight-bold ml-5">Limited Edition Vinyl</h1>
                    <p class="default-font text-white ml-5">The best collectable records</p>
                    <a class="default-font btn btn-outline-light ml-5" href="/">SHOP</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

    <section>
      <div class="fuid-container">
        <div class="row mt-5 pt-5">
          <div class="container text-center">
            <h4 class="text-center default-font">Featured New Releases</h4>
          </div>
        </div>
        <div class="row">
        <!--
          {% for prods in products %}
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mt-4">
              <div class="card">
                <img class="card-img-top" src="{{ prods.image.url }}" alt="Card image" style="width:100%; max-height: 150px;">
                <div class="card-body">
                  <h5 class="card-title default-font">{{ prods.title }}</h5>
                  <p class="card-text default-font" style="font-size: .8rem;"> {{ prods.band}} </p>
                  <a id="cart-add-item"
                     href="/cart-add-item/{{prods.productId}}"
                     class="btn btn-outline-dark default-font"
                     style="font-size: .8rem;">ADD
                     <i class="fas fa-shopping-bag"></i>
                  </a>
                </div>
              </div>
            </div>
          {% endfor %}
        -->
        </div>
      </div>
    </section>
  </div>
</template>
