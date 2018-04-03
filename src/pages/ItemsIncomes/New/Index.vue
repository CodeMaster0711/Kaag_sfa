<template>
  <div id="p-items-incomes-new">

    <!-- #function_bar -->
    <function-bar pageType="new" @add-todo="updateStatus"></function-bar>

    <div id="container">
      <div id="main">

        <!-- #tab -->
        <tab :items="tabItems"></tab>

        <!-- #data_table -->
        <router-view></router-view>

      </div><!--/main-->

      <!-- #asides -->
      <asides :has-contract="true"></asides>

    </div><!--/container-->
  </div>
</template>

<script>
import FunctionBar from '../../../components/ItemsIncomes/FunctionBar'
import Tab from '../../../components/ItemsIncomes/Tab'
import Asides from '../../../components/ItemsIncomes/Asides'

export default {
  components: {
    FunctionBar,
    Tab,
    Asides
  },
  data () {
    return {
      tabItems: [
        { name: 'items-incomes-new-1', text: '基本情報1' },
        { name: 'items-incomes-new-2', text: '基本情報2' },
        { name: 'items-incomes-new-3', text: '基本情報3' },
        { name: 'items-incomes-new-each', text: '個別施策' }
      ]
    }
  },
  methods: {
    updateStatus () {
      this.$emit('add-newitem', 1)
    }
  }
}
</script>
