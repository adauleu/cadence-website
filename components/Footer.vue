<template>
  <footer>
    <ul>
      <li>
        <nuxt-link to="/cabinet">{{ $t('links.firm') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/equipe">{{ $t('links.team') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/savoir-faire">{{ $t('links.expertise') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/valeurs">{{ $t('links.values') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">{{ $t('links.contact') }}</nuxt-link>
      </li>
    </ul>
    <div class="mentions-legales">
      <nuxt-link to="/mentions-legales">{{ $t('links.notices') }}</nuxt-link>
    </div>
    <div class="address-logo-wrapper">
      <address>160, rue du Temple - 75003 Paris</address>
      <nuxt-link to="/">
        <img src="~/assets/Logo-Footer.svg" />
      </nuxt-link>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    background-color: #33545C;
    padding: 50px 10%;
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

  @media (max-width: 900px) {
    ul {
      flex-direction: column;
    }
  }

  ul li a {
    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
  }

  .mentions-legales {
    padding-top: 20px;
    text-align: right;
  }

  @media (max-width: 900px) {
    .mentions-legales {
      text-align: center;
    }
  }

  .mentions-legales a {
    color: #ffffff;
    text-decoration: none;
  }

  .address-logo-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-between;
    padding-top: 20px;
    width: 100%;
  }

  @media (max-width: 900px) {
    .address-logo-wrapper {
      flex-direction: column;
      align-items: center;
    }
  }

  .address-logo-wrapper address {
    color: #ffffff;
    font-size: 16px;
    font-style: normal;
    text-align: left;
  }

  @media (max-width: 420px) {
    .address-logo-wrapper img {
      width: 240px;
    }
  }

  @media (max-width: 900px) {
    .address-logo-wrapper img {
      padding-top: 30px
    }
  }
</style>
