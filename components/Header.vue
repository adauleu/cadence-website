<template>
  <header>
    <div><nuxt-link to="/"><img id="logo" src="~/assets/Logo-Header.svg" /></nuxt-link></div>
    
    <div id="hamburger" @click="toggleMenu()">
      <div class="currentpage">{{currentMenu($route.path)}}</div><img id="hamburgerbutton" src="~/assets/Hamburger.svg" v-show="!menuOpened"/>
    </div>

    <div id="menu" v-show="menuOpened" @mouseleave="closeMenu()">
      <img id="hamburger-closed" src="~/assets/Hamburger-Close.svg" @click="toggleMenu()" />
      <ul>
        <li @click="toggleMenu()"><nuxt-link to="/">{{ $t('links.accueil') }}</nuxt-link></li>
        <li @click="toggleMenu()"><nuxt-link to="/cabinet">{{ $t('links.cabinet') }}</nuxt-link></li>
        <li @click="toggleMenu()"><nuxt-link to="/equipe">{{ $t('links.equipe') }}</nuxt-link></li>
        <li @click="toggleMenu()"><nuxt-link to="/savoir-faire">{{ $t('links["savoir-faire"]') }}</nuxt-link></li>
        <li @click="toggleMenu()"><nuxt-link to="/valeurs">{{ $t('links.valeurs') }}</nuxt-link></li>
        <li @click="toggleMenu()"><nuxt-link to="/contact">{{ $t('links.contact') }}</nuxt-link></li>
      </ul>
    </div>

    <ul v-if="$i18n.locale === 'fr'" class="lang">
      <li>FR</li>
      <li>
        <nuxt-link :to="'/en' + $route.fullPath">EN</nuxt-link>
      </li>
    </ul>
    <ul v-else class="lang">
      <li>
        <nuxt-link :to="$route.fullPath.replace(/^\/[^\/]+/, '')">FR</nuxt-link>
      </li>
      <li>EN</li>
    </ul>
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

@media (max-width: 420px) {
  header #logo {
    width: 240px;
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
}
#logo {
  margin: 40px;
}

.lang {
  background-color: #33545c;
  color: #ffffff;
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  padding: 10px 20px;
}

/* @media (min-width: 768px) {
  .lang {
    background-color: #ffffff;
    color: #33545c;
    padding: 20px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
} */

.lang li {
  padding-left: 10px; 
}

.lang li a {
  color: inherit;
  text-decoration: none;
}
</style>
