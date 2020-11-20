<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container d-flex align-items-center">
      <router-link to="/">
        <a class="navbar-brand pt-4 pb-4 font-xl-size">Vinylsmind</a>
      </router-link>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#nav">
        <span class="navbar-toggler-icon"> </span>
      </button>
      <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/products">
              <a class="nav-link"> Catalogo </a>
            </router-link>
           </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

.font-xl-size {
  font-size: 2rem;
}

a {

  text-decoration: none;
}

</style>
