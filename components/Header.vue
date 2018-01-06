<template>
<header>
  <div @click="closeMenu()"><nuxt-link to="/"><img id="logo" src="~/assets/Logo-Header.svg" /></nuxt-link></div>
  
  <div id="hamburger">
    <div id="currentpage"><strong>{{currentMenu($route.path)}}</strong></div><img id="hamburgerbutton" src="~/assets/Hamburger.svg" @click="toggleMenu()" v-show="!menuOpened"/>
  </div>
  <div id="menu" v-show="menuOpened">
    <img id="hamburger-closed" src="~/assets/Hamburger-Close.svg" @click="toggleMenu()" />
    <ul>
      <li @click="toggleMenu()"><nuxt-link to="/cabinet">Le cabinet</nuxt-link></li>
      <li @click="toggleMenu()"><nuxt-link to="/equipe">Équipe</nuxt-link></li>
      <li @click="toggleMenu()"><nuxt-link to="/savoir-faire">Savoir-faire</nuxt-link></li>
      <li @click="toggleMenu()"><nuxt-link to="/valeurs">Valeurs et Engagements</nuxt-link></li>
      <li @click="toggleMenu()"><nuxt-link to="/contact">Contact</nuxt-link></li>
    </ul>
  </div>
</header>
</template>

<script>
export default {
  data: function() {
    return {
      menuOpened: false
    };
  },
  methods: {
    toggleMenu: function() {
      this.menuOpened = !this.menuOpened;
    },
    closeMenu: function() {
      this.menuOpened = false;
    },
    currentMenu: function(path) {
      var mapping = {
        "/": "",
        "/equipe": "Équipe",
        "/savoir-faire": "Savoir-faire",
        "/cabinet": "Le cabinet",
        "/valeurs": "Valeurs et Engagements",
        "/contact": "Contact"
      };
      return mapping["" + path];
    }
  }
};
</script>

<style scoped>
header {
  position: relative;
  width: 100%;
}

ul {
  clear: both;
  margin: 50px 0px 30px 0px;
}
li {
  list-style: none;
  margin: 20px 0px 0px 0px;
}
a {
  text-transform: uppercase;
  color: inherit;
  text-decoration: none;
}
#hamburger {
  position: absolute;
  right: 0;
  top: 0;
  vertical-align: middle;
  margin: 20px;
  text-transform: uppercase;
  color: inherit;
}
#hamburgerbutton {
  margin-left: 20px;
  padding-top: 1px;
  float: right;
}
#hamburger-closed {
  position: absolute;
  right: 0;
  margin: 10px;
  float: right;
  margin: 20px;
}
#currentpage {
  color: #33545c;
  float: left;
}
#menu {
  background-color: #33545c;
  font-size: 19px;
  color: #ffffff;
  letter-spacing: 1.69px;
  line-height: 35px;
  position: absolute;
  right: 0;
  top: 0;
  text-align: left;
  width: 250px;
  overflow-wrap: normal;
}
#logo {
  margin: 40px;
}
</style>
