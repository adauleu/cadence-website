<template>
  <div class="container">
    <PageHeader />
    <nuxt/>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "~/components/Header.vue";
import PageFooter from "~/components/Footer.vue";

export default {
  components: {
    PageHeader,
    PageFooter
  }
};
</script>

<style>
html {
  display: flex;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: "Nunito Sans", sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.page-img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 20% 15%;
  width: 100%;
  letter-spacing: 1.9px;
  line-height: 45.3px;
}

@media (min-width: 1290px) {
  .page-img {
    font-size: 28px;
    height: 100vh;
  }
}

.page-img p {
  color: #ffffff;
  font-size: 19px;
  letter-spacing: 0.91px;
  line-height: 35px;
}

.page-content-wrapper {
  margin: 100px 20%;
}

@media (max-width: 420px) {
  .page-content-wrapper {
    margin: 100px 10%;
  }
}

.page-content {
  color: #33545c;
  font-size: 19px;
  letter-spacing: 1.29px;
  line-height: 32.36px;
}

.page-content div {
  text-align: left;
}

.page-content p {
  margin-bottom: 30px;
  text-align: left;
}

.page-content p:last-child {
  margin-bottom: 0;
}

.separator {
  margin: 30px 0;
}
.separator-vertical {
  margin: 0 30px;
}

h1 {
  font-size: 23px;
  font-weight: normal;
  letter-spacing: 2.11px;
  line-height: 45.3px;
  margin-bottom: 5px;
  text-transform: uppercase;
}

h2 {
  font-size: 15px;
  letter-spacing: 1.65px;
  line-height: 45.3px;
  margin-bottom: 20px;
  text-transform: uppercase;
}
</style>
