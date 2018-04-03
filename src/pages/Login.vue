<template>
  <div id="p-login">
    <div id="login_container">
      <div id="login_title">
        <p>営業活動革新システム</p>
        <h1><img src="../assets/images/logo.svg" alt="SFA ZERO"></h1>
      </div>
      <div id="login_form">
        <form action="" @submit.prevent="login">
          <p><input type="text" placeholder="社員番号（半角）" class="input_number" v-model="inputs.username"></p>
          <p><input type="password" placeholder="パスワード" class="input_pasword" v-model="inputs.password"></p>
          <p><input type="password" placeholder="タブレットパスワード" class="input_pasword" v-model="inputs.tabletPassword"></p>
          <input type="submit" value="ログイン" class="btn_login">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      'inputs': 'auth/inputs'
    })
  },
  methods: {
    login () {
      this.$store.dispatch('auth/login')
        .then(isLoggedIn => {
          if (isLoggedIn) {
            if (this.$route.query.redirect) {
              this.$router.push({ path: this.$route.query.redirect })
            } else {
              this.$router.push({ name: 'index' })
            }
          }
        })
    }
  }
}
</script>
