<template>
  <header>
    <div><nuxt-link :to="$i18n.path('')"><img id="logo" src="~/assets/Logo-Header.svg" /></nuxt-link></div>
    
    <div id="hamburger" @click="toggleMenu()">
      <div class="currentpage">{{currentMenu($route.path)}}</div><img id="hamburgerbutton" src="~/assets/Hamburger.svg" v-show="!menuOpened"/>
    </div>

    <div id="menu" v-show="menuOpened" @mouseleave="closeMenu()">
      <img id="hamburger-closed" src="~/assets/Hamburger-Close.svg" @click="toggleMenu()" />
      <ul>
        <li @click="toggleMenu()"><nuxt-link :to="$i18n.path('')">{{ $t('links.home') }}</nuxt-link></li>
        <li @click="toggleMenu()"><nuxt-link :to="$i18n.path('cabinet')">{{ $t('links.firm') }}</nuxt-link></li>
        <li @click="toggleMenu()"><nuxt-link :to="$i18n.path('equipe')">{{ $t('links.team') }}</nuxt-link></li>
        <li @click="toggleMenu()"><nuxt-link :to="$i18n.path('savoir-faire')">{{ $t('links.expertise') }}</nuxt-link></li>
        <li @click="toggleMenu()"><nuxt-link :to="$i18n.path('valeurs')">{{ $t('links.values') }}</nuxt-link></li>
        <li @click="toggleMenu()"><nuxt-link :to="$i18n.path('contact')">{{ $t('links.contact') }}</nuxt-link></li>
      </ul>
    </div>

    <div class="lang">
      <nuxt-link v-if="$i18n.locale === 'fr'" :to="`/en${$route.fullPath}`">EN</nuxt-link>
      <nuxt-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')">FR</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  data: function() {
    return {
      menuOpened: false
    }
  },
  methods: {
    toggleMenu: function() {
      this.menuOpened = !this.menuOpened
    },
    closeMenu: function() {
      this.menuOpened = false
    },
    currentMenu: function(path) {
      const mapping = {
        "/": "",
        "/equipe": "Équipe",
        "/savoir-faire": "Savoir-faire",
        "/cabinet": "Le cabinet",
        "/valeurs": "Valeurs et Engagements",
        "/contact": "Contact"
      }
      return mapping["" + path]
    }
  }
}
</script>

<style scoped>
header {
  position: relative;
  width: 100%;
}

#logo {
  margin: 40px;
}

@media (max-width: 460px) {
  #logo {
    width: 190px;
  }
}

#menu ul {
  clear: both;
  margin: 40px 0px 20px 0px;
  padding-left: 0;
}

#menu ul li {
  list-style: none;
  padding: 0;
}

#menu ul li a {
  color: inherit;
  display: flex;
  padding: 10px 0 10px 40px;
  text-decoration: none;
  text-transform: uppercase;
}

#menu ul li a:hover {
  background: #ffffff;
  color: #33545c;
  font-weight: bold;
}

#hamburger {
  position: absolute;
  right: 0;
  top: 0;
  vertical-align: middle;
  padding: 20px;
  text-transform: uppercase;
  color: inherit;
}

#hamburgerbutton {
  padding: 1px 0 0 20px;
  float: right;
}

#hamburger:hover {
  cursor: pointer;
  font-weight: bold;
}

#hamburger-closed {
  position: absolute;
  right: 0;
  margin: 10px;
  float: right;
  margin: 20px;
}

.currentpage {
  color: #33545c;
  float: left;
}

@media (max-width: 900px) {
  .currentpage {
    display: none;
  }
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
  z-index: 10;
}

.lang {
  background-color: #ffffff;
  color: #33545c;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  position: absolute;
  right: 0;
  bottom: 0;
}

.lang a {
  color: inherit;
  text-decoration: none;
}
</style>
