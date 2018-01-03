<template>
  <footer>
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
        <a href="/valeurs">Valeurs</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
    <div class="address-logo-wrapper">
      <address>160, rue du Temple<br/>75013 PARIS</address>
      <img src="~/assets/Logo-Footer.svg" />
    </div>
  </footer>
</template>

<style scoped>
  footer {
    background-color: #33545C;
    padding: 0 50px;
    width: 100%;
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style-type: none;
    padding-top: 50px;
    padding-left: 0;
    width: 100%;
  }
  ul li a {
    color: #ffffff;
    font-size: 1.5em;
    text-decoration: none;
    text-transform: uppercase;
  }
  .address-logo-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-between;
    padding: 200px 0 50px 0;
    width: 100%;
  }
  address {
    color: #ffffff;
    font-size: 1.5em;
    font-style: normal;
    text-align: left;
  }
  img {
    width: 500px;
  }
</style>
