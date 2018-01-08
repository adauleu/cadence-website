<template>
  <footer>
    <ul>
      <li>
        <nuxt-link to="/cabinet">Le cabinet</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/equipe">Équipe</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/savoir-faire">Savoir-faire</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/valeurs">Valeurs et engagements</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
    </ul>
    <div class="address-logo-wrapper">
      <address>160, rue du Temple<br/>75003 PARIS</address>
      <img src="~/assets/Logo-Footer.svg" />
      <nuxt-link to="/mentions-legales">Mentions légales</nuxt-link>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    background-color: #33545C;
    padding: 50px 15%;
    width: 100%;
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style-type: none;
    padding-left: 0;
    width: 100%;
  }
  ul li a {
    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
  }
  .address-logo-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-between;
    padding-top: 50px;
    width: 100%;
  }
  .address-logo-wrapper address {
    color: #ffffff;
    font-size: 16px;
    font-style: normal;
    text-align: left;
  }
  .address-logo-wrapper a {
    color: #ffffff;
    text-decoration: none;
  }
</style>
