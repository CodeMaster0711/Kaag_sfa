<template>
  <div id="p-inputs">
    <global-header></global-header>
    <router-view></router-view>

    <!-- popups -->
    <popups-select-target></popups-select-target>
    <popups-select-agent></popups-select-agent>
  </div>
</template>

<script>
import GlobalHeader from '../../components/GlobalHeader'
import PopupsSelectTarget from '../../components/Popups/SelectTarget'
import PopupsSelectAgent from '../../components/Popups/SelectAgent'

export default {
  components: {
    GlobalHeader,
    PopupsSelectTarget,
    PopupsSelectAgent
  }
}
</script>
