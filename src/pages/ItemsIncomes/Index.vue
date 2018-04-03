<template>
  <div id="p-items-incomes">
    <global-header></global-header>
    <router-view></router-view>
    <!-- popups -->
    <popups-select-target></popups-select-target>
    <popups-select-agent></popups-select-agent>
    <popups-responsible></popups-responsible>
    <popups-sales-box></popups-sales-box>
    <popups-cross></popups-cross>
  </div>
</template>

<script>
import GlobalHeader from '../../components/GlobalHeader'
import PopupsSelectTarget from '../../components/Popups/SelectTarget'
import PopupsSelectAgent from '../../components/Popups/SelectAgent'
import PopupsResponsible from '../../components/Popups/Responsible'
import PopupsSalesBox from '../../components/Popups/SalesBox'
import PopupsCross from '../../components/Popups/Cross'

export default {
  components: {
    GlobalHeader,
    PopupsResponsible,
    PopupsSelectTarget,
    PopupsSelectAgent,
    PopupsSalesBox,
    PopupsCross
  }
}
</script>
