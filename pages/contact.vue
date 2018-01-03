<template>
  <section>
      <div class="page-img">
        <p>Contact</p>
        Pour toute question ou demande d’information,vous pouvez nous contacter aux coordonnées suivantes.
      </div>
      <div class="description">
        <h1>Coordonnées</h1>
        <div id="coordinates">
          <div id="address">
            <p>Cadence Avocats</p>
            <p>160, rue du Temple</p>
            <p>75003 Paris</p>
          </div>
          <img src="~/assets/Point-3-Vertical.svg"/>
          <div>
            <div>
              <p>Tel</p>
              <p>Fax</p>
              <p>Mail</p>
            </div>
            <div>
              <a href="tel:+33177378910">01 77 37 89 10</a>
              <a href="tel:+33142780357">01 42 78 03 57</a>
              <a href="mailto:contact@cadenceavocats.com">contact@cadenceavocats.com</a>
            </div>
          </div>
        </div>
        <img src="~/assets/Point-3.svg"/>
        <h1>Recrutement</h1>
        <p>
          Les personnes intéressées par un stage ou une collaboration sont invitées à adresser leur lettre de motivation accompagnée d’un curriculum vitae à l’adresse suivante :
          <a href="mailto:contact@cadenceavocats.com">contact@cadenceavocats.com</a>
        </p>
      </div>
  </section>
</template>

<style scoped>
.page-img {
  background-image: url("~/assets/images/Hero-Contact.png");
}

h1 {
  text-transform: uppercase;
  font-size: 23px;
  letter-spacing: 2.11px;
  line-height: 45.3px;
}

.description p{
  text-align: left;
}

a{
  color: inherit;
  display:block;
  text-decoration: none;
}
</style>
