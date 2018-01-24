<template>
  <section>
      <div class="page-img">
        {{ $t('contact.heroText') }}
      </div>

      <div class="page-content-wrapper">
        <div class="page-content">
          <h1>{{ $t('contact.content[0].heading') }}</h1>

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
                <a>01 77 37 89 10</a>
                <a>01 42 78 03 57</a>
                <a href="mailto:contact@cadenceavocats.com">contact@cadenceavocats.com</a>
              </div>
            </div>
          </section>

          <section id="contact-mobile">
            <span>Cadence Avocats</span>
            <span>160, rue du Temple</span>
            <span>75003 Paris</span>
            <span>Tel: <a href="tel:+33177378910">01 77 37 89 10</a></span>
            <span>Fax: <a href="fax:+33142780357">01 42 78 03 57</a></span>
            <span>Mail: <a href="mailto:contact@cadenceavocats.com">contact@cadenceavocats.com</a></span>
          </section>

          <img src="~/assets/Point-3.svg" class="separator"/>

          <h1>{{ $t('contact.content[1].heading') }}</h1>
          <p style="text-align: center">
            {{ $t('contact.content[1].description[0]') }}
            <a href="mailto:contact@cadenceavocats.com">contact@cadenceavocats.com</a>
          </p>
        </div>
      </div>
  </section>
</template>

<style scoped>
.page-img {
  background-image: url("~/assets/images/Hero-Contact.png");
  padding: 20% 25%;
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

@media (max-width: 900px) {
  #contact {
    display: none;
  }
}

#contact-mobile span {
  display: flex;
  justify-content: center;
  white-space: pre;
}

@media (min-width: 901px) {
  #contact-mobile {
    display: none;
  }
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
