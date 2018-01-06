<template>
  <section>
      <div class="page-img">
        <p>Contact</p>
        Pour toute question ou demande d’information, vous pouvez nous contacter aux coordonnées suivantes.
      </div>

      <div class="page-content-wrapper">
        <div class="page-content">
          <h1>Coordonnées</h1>

          <section id="contact">
            <div id="address">
              <p>Cadence Avocats</p>
              <p>160, rue du Temple</p>
              <p>75003 Paris</p>
            </div>
            <img src="~/assets/Point-3-Vertical.svg" class="separator-vertical"/>
            <div id="coordinates">
              <div id="abbreviations">
                <abbr>Tel</abbr>
                <abbr>Fax</abbr>
                <abbr>Mail</abbr>
              </div>
              <div id="numbers">
                <a href="tel:+33177378910">01 77 37 89 10</a>
                <a href="fax:+33142780357">01 42 78 03 57</a>
                <a href="mailto:contact@cadenceavocats.com">contact@cadenceavocats.com</a>
              </div>
            </div>
          </section>

          <img src="~/assets/Point-3.svg" class="separator"/>

          <h1>Recrutement</h1>
          <p>
            Les personnes intéressées par un stage ou une collaboration sont invitées à adresser leur lettre de motivation accompagnée d’un curriculum vitae à l’adresse suivante :
            <a href="mailto:contact@cadenceavocats.com">contact@cadenceavocats.com</a>
          </p>
        </div>
      </div>
  </section>
</template>

<style scoped>
.page-img {
  background-image: url("~/assets/images/Hero-Contact.png");
}

a {
  color: inherit;
  display: block;
  text-decoration: none;
}

abbr {
  display: block;
}
</style>

<style>
#contact {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}
#address {
  flex: 1;
}

#address p {
  margin-bottom: 0;
  text-align: right;
}

#coordinates {
  display: flex;
  flex: 1;
  text-align: left;
}

#numbers {
  margin-left: 15px;
}
</style>
