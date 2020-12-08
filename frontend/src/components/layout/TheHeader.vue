<template>

  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container d-flex align-items-center">

      <router-link to="/">
        <h1 class="navbar-brand mt-0 mr-3 mb-0 ml-0">
          Vinylsmind
        </h1>
      </router-link>

      <button class="navbar-toggler" data-toggle="collapse" data-target="#nav">
        <span class="navbar-toggler-icon"> </span>
      </button>

      <div class="collapse navbar-collapse" id="nav">
        <!-- LEFT -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/products">
              <a class="nav-link mr-0"> Catalogo </a>
            </router-link>
           </li>
           <li class="nav-item">
             <router-link to="/register">
               <a class="nav-link pl-0"> Add Vinyls </a>
             </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/search">
                <a class="nav-link pl-0"> Read Vinyls </a>
              </router-link>
             </li>
             <li class="nav-item">
               <router-link to="/delete">
                 <a class="nav-link pl-0"> Delete Vinyls </a>
               </router-link>
            </li>
        </ul>
        <!-- RIGHT -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link"> Login </a>
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
