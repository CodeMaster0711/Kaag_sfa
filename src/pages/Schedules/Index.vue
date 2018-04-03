<template>
  <div id="p-schedules">
    <global-header></global-header>
    <router-view></router-view>
  </div>
</template>

<script>
import GlobalHeader from '../../components/GlobalHeader'

export default {
  components: {
    GlobalHeader
  }
}
</script>
