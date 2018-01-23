<template>
  <section>
      <div class="page-img">
        {{ $t('home.heroText') }}
      </div>

      <div class="page-content-wrapper">
        <div class="page-content">
          <p>
            {{ $t('home.content[0]') }}
          </p>

          <img src="~/assets/Point-1.svg" class="separator"/>

          <p>
            {{ $t('home.content[1]') }}
          </p>

          <img src="~/assets/Point-2.svg" class="separator"/>

          <p>
            {{ $t('home.content[2]') }}
          </p>

          <img src="~/assets/Point-3.svg" class="separator"/>          
        </div>
      </div>
  </section>
</template>

<style scoped>
.page-img {
  background-image: url("~/assets/images/Hero-Accueil.png");
}

.description p {
  margin-bottom: 20px;
}
</style>
