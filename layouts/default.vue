<template>
  <div class="container">
    <Header />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}

*, *:before, *:after {
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
  font-size: 28px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  min-height: 70vh;
  padding: 0 15%;
  width: 100%;
  letter-spacing: 1.9px;
  line-height: 45.3px;
}

.page-img p{
  color: #FFFFFF;
  font-size: 19px;
  letter-spacing: 0.91px;
  line-height: 35px;
}

.description{
  color: #33545C;
  font-size: 19px;
  letter-spacing: 1.29px;
  line-height: 32.36px;
  margin: 100px 20%;
}

.description div{
  text-align: left;
}

.separator{
  margin: 30px 0
}
.separator-vertical{
  margin: 0 30px
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
