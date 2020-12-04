<template>
  <div v-bind:class="cardMode">
    <slot> </slot>
  </div>
</template>

<script>
  export default {
    props: ['cardMode']
  }
</script>
