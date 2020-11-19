<template>

  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container d-flex align-items-center">

      <a href="/" class="navbar-brand p-4 font-xl-size">Vinylsmind</a>

      <button class="navbar-toggler" data-toggle="collapse" data-target="#nav"> <span class="navbar-toggler-icon"> </span> </button>

      <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"> <a href="/products" class="nav-link"> Catalogo </a> </li>
          <li class="nav-item"> <a href="/admin-products" class="nav-link"> Admin Products </a> </li>
        </ul>
      </div>

    </div>

  </nav>

</template>

<style scoped>

.font-xl-size {
  font-size: 2rem;
}

</style>
