<template>
  <ul id="tab">
    <li v-for="item in items" :class="{ cr: $route.name === item.name }">
      <router-link :to="{ name: item.name }">{{ item.text }}</router-link>
    </li>
  </ul><!--/tab-->
</template>

<script>
export default {
  name: 'tab',
  props: ['items']
}
</script>
