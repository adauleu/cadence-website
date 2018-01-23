<template>
  <section>
      <div class="page-img">
        {{ $t('firm.heroText') }}
      </div>

      <div class="page-content-wrapper">
        <div class="page-content">
          <div>
            {{ $t('firm.content[0]') }}
          </div>
          <img src="~/assets/Point-1.svg" class="separator"/>
          <div>
            {{ $t('firm.content[1]') }}
          </div>
          <img src="~/assets/Point-2.svg" class="separator"/>
          <div>
            {{ $t('firm.content[2]') }}
          </div>
          <img src="~/assets/Point-3.svg" class="separator"/>
        </div>
      </div>
  </section>
</template>

<style scoped>
.page-img {
  background-image: url("~/assets/images/Hero-Cabinet.png");
}
</style>
