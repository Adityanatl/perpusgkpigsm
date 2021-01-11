<script>
import Layout from "../../layouts/auth";
import {
  authMethods,
  authFackMethods,
  notificationMethods
} from "@/state/helpers";
import { mapState } from "vuex";

import appConfig from "@/app.config";
import { required, email } from "vuelidate/lib/validators";

/**
 * Login component
 */
export default {
  page: {
    title: "Login",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout },
  data() {
    return {
      email: "Masukkan Email",
      password: "123456",
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false
    };
  },
  validations: {
    email: { required, email },
    password: { required }
  },
  computed: {
    ...mapState("authfack", ["status"]),
    notification() {
      return this.$store ? this.$store.state.notification : null;
    }
  },
  methods: {
    ...authMethods,
    ...authFackMethods,
    ...notificationMethods,
    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        console.log('process.env.VUE_APP_DEFAULT_AUTH {} ',process.env.VUE_APP_DEFAULT_AUTH)
        if (process.env.VUE_APP_DEFAULT_AUTH === "backend") {
          this.tryingToLogIn = true;
          // Reset the authError if it existed.
          this.authError = null;
          return (
            this.logIn({
              email: this.email,
              password: this.password
            })
              // eslint-disable-next-line no-unused-vars
              .then(token => {
                this.tryingToLogIn = false;
                this.isAuthError = false;
                // Redirect to the originally requested page, or to the home page
                console.log('this.$route.query.redirectFrom ',this.$route.query)
                console.log('name ',name)
                console.log('token ',token)


                this.$router.push(
                  this.$route.query.redirectFrom || { name: "default" }
                );
              })
              .catch(error => {
                this.tryingToLogIn = false;
                this.authError = error ? error : "";
                this.isAuthError = true;
              })
          );
        } else {
          const { email, password } = this;
          if (email && password) {
            this.login({ email, password });
          }
        }
      }
    },

  }
};
</script>

<template>

    <!--============= Sign In Section Starts Here =============-->
    <div class="account-section bg_akun" data-background="./assets/images/akun-bg.png">
        <div class="container">
            <div class="account-title text-center">
                    <router-link tag="a" to="/" class="back-home"><i class="fas fa-angle-left"></i><span>Kembali <span class="d-none d-sm-inline-block">ke Beranda</span></span></router-link>
                <a href="#0" class="logo">
                    <!-- <img src='@/assets/images/new-gurukreator-logo.png' alt="logo"> -->
                </a>
            </div>
            <div class="account-wrapper">
                <div class="account-body">
                    <h4 class="title mb-20">Selamat Datang Guru Kreator!</h4>

                    <b-alert v-model="isAuthError" variant="danger" class="mt-3" dismissible>{{authError}}</b-alert>

                    <div
                    v-if="notification.message"
                    :class="'alert ' + notification.type"
                    >{{notification.message}}</div>                    

                    <form class="account-form" @submit.prevent="tryToLogIn">
                    <b-form-group id="input-group-1" label="Email" label-for="input-1">
                        <b-form-input
                        id="input-1"
                        v-model="email"
                        type="text"
                        placeholder="Enter email"
                        :class="{ 'is-invalid': submitted && $v.email.$error }"
                        ></b-form-input>
                        <div v-if="submitted && $v.email.$error" class="invalid-feedback">
                        <span v-if="!$v.email.required">Email is required.</span>
                        <span v-if="!$v.email.email">Please enter valid email.</span>
                        </div>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Password" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        v-model="password"
                        type="password"
                        placeholder="Enter password"
                        :class="{ 'is-invalid': submitted && $v.password.$error }"
                        ></b-form-input>
                        <div
                        v-if="submitted && !$v.password.required"
                        class="invalid-feedback"
                        >Password is required.</div>
                    </b-form-group>
                        <div class="form-group text-center">
                            <b-button type="submit" class="mt-2 mb-2" @click="tryingToLogIn">Masuk</b-button>
                        </div>
                    </form>






                </div>
                <div class="or">
                    <span style="color:#0b507d">Atau</span>
                </div>
                <div class="account-header pb-0">
                    <span class="d-block mb-30 mt-2">Daftar dengan email yang kamu miliki</span>
                    <a href="#0" class="sign-in-with"><img src='@/assets/images/google.png' alt="icon"><span>Sign Up with Google</span></a>
                    <span class="d-block mt-15">Tidak memiliki akun? <a href="sign-up.html" style="color:#0b507d">DAFTAR disini</a></span>
                </div>
            </div>
        </div>
    </div>
    <!--============= Sign In Section Ends Here =============-->

</template>
