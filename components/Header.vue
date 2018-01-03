<template>
<header>
  <img id="logo" src="~/assets/Logo-Header.svg" />
  <img id="hamburger" src="~/assets/Hamburger.svg" @click="toggleMenu()" v-show="!menuOpened"/>
  <div id="menu" v-show="menuOpened">
    <img id="hamburger-closed" src="~/assets/Hamburger-Close.svg" @click="toggleMenu()" />
    <ul>
        <li>
          <a href="/equipe">Équipe</a>
        </li>
        <li>
          <a href="/savoir-faire">Savoir-faire</a>
        </li>
        <li>
          <a href="/cabinet">Le cabinet</a>
        </li>
        <li>
          <a href="/valeurs">Valeurs et Engagements</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
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
    }
  }
};
</script>
<style>
header {
  position: relative;
  width: 100%;
}
#hamburger {
  position: absolute;
  right: 0;
  margin: 10px;
}
#hamburger-closed {
  position: absolute;
  right: 0;
  margin: 10px;
  float: right;
  margin: 10px;
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
ul {
  clear: both;
  margin: 50px 5px;
}
li {
  list-style: none;
  margin : 10px 0px 10px 0px;
}
a {
  text-transform: uppercase;
  color: inherit;
  text-decoration: none;
}
</style>

