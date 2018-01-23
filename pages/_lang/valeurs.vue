<template>
  <section>
      <div class="page-img">
        {{ $t('values.heroText') }}
      </div>

      <div class="page-content-wrapper">
        <div class="page-content">
          <p>
            {{ $t('values.content[0]') }}
          </p>

          <img src="~/assets/Point-1.svg" class="separator"/>

          <p>
            {{ $t('values.content[1]') }}
          </p>

          <img src="~/assets/Point-2.svg" class="separator"/>

          <p>
            {{ $t('values.content[2]') }}
          </p>
          <p>
            {{ $t('values.content[3]') }}
          </p>
          <p>
            {{ $t('values.content[4]') }}
          </p>

          <img src="~/assets/Point-3.svg" class="separator"/>

        </div>
      </div>
  </section>
</template>

<style scoped>
.page-img {
  background-image: url("~/assets/images/Hero-Valeurs.png");
}
</style>
