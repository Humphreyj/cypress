import { defineStore } from "pinia";
import axios from "axios";
import jwt_decode from "jwt-decode";
import router from "@/router";

export const useAuth = defineStore({
  id: "auth",
  state: () => ({
    isAuthenticated: false,
    user: {},
  }),
  getters: {},
  actions: {
    login(credentials) {
      axios
        .post(`http://localhost:3030/api/auth/login`, credentials)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("token", JSON.stringify(res.data.user.token));
          this.user = res.data.user;
          this.authenticateToken();
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    authenticateToken() {
      let token = localStorage.getItem("token");

      if (token) {
        let tokenExpiration = jwt_decode(token).exp;
        let dateNow = new Date();

        if (tokenExpiration < dateNow.getTime() / 1000) {
          console.log("Token has expired.");
          this.isAuthenticated = false;
        } else {
          console.log("Token is authenticated.");
          this.isAuthenticated = true;
        }
      } else {
        console.log("No token at all.");
        this.isAuthenticated = false;
      }
    },
    logout() {
      this.isAuthenticated = null;
      this.user = {};
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/login");
    },
  },
});
