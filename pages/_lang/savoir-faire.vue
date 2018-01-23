<template>
  <section>
      <div class="page-img">
        {{ $t('expertise.heroText') }}
      </div>

      <div id="toggle-buttons">
          <button @click="setDroitAffaires(true)" v-bind:class="{ active: isDroitAffaires }">{{ $t('expertise.businessLaw.title') }}</button>
          <img src="~/assets/Point-3-Vertical-White.svg" class="separator-vertical"/>
          <button @click="setDroitAffaires(false)" v-bind:class="{ active: !isDroitAffaires }">{{ $t('expertise.employmentLaw.title') }}</button>
      </div>

      <div class="page-content-wrapper">
        <div class="page-content">

          <article v-show="isDroitAffaires">
            <h2>{{ $t('expertise.businessLaw.content[0].heading') }}</h2>

            <p>
              {{ $t('expertise.businessLaw.content[0].description[0]') }}
            </p>

            <img src="~/assets/Point-1.svg" class="separator"/>

            <h2>{{ $t('expertise.businessLaw.content[1].heading') }}</h2>

            <p>
              {{ $t('expertise.businessLaw.content[1].description[0]') }}
            </p>

            <img src="~/assets/Point-2.svg" class="separator"/>

            <h2>{{ $t('expertise.businessLaw.content[2].heading') }}</h2>

            <p>
              {{ $t('expertise.businessLaw.content[2].description[0]') }}
            </p>
            <p>
              {{ $t('expertise.businessLaw.content[2].description[1]') }}
            </p>

            <img src="~/assets/Point-3.svg" class="separator"/>

            <h2>{{ $t('expertise.businessLaw.content[3].heading') }}</h2>

            <p>
              {{ $t('expertise.businessLaw.content[3].description[0]') }}
            </p>
            <p>
              {{ $t('expertise.businessLaw.content[3].description[1]') }}
            </p>
          </article>

          <article v-show="!isDroitAffaires">
            <h2>{{ $t('expertise.employmentLaw.content[0].heading') }}</h2>

            <p>
              {{ $t('expertise.employmentLaw.content[0].description[0]') }}
            </p>
            <p>
              {{ $t('expertise.employmentLaw.content[0].description[1]') }}
            </p>

            <img src="~/assets/Point-1.svg" class="separator"/>

            <h2>{{ $t('expertise.employmentLaw.content[1].heading') }}</h2>

            <p>
              {{ $t('expertise.employmentLaw.content[1].description[0]') }}
            </p>

            <img src="~/assets/Point-2.svg" class="separator"/>

            <h2>{{ $t('expertise.employmentLaw.content[2].heading') }}</h2>

            <p>
              {{ $t('expertise.employmentLaw.content[2].description[0]') }}
            </p>

            <img src="~/assets/Point-3.svg" class="separator"/>            
          </article>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      isDroitAffaires: true
    };
  },
  methods: {
    setDroitAffaires: function(isDroitAffaires) {
      this.isDroitAffaires = isDroitAffaires;
    }
  }
};
</script>

<style scoped>
.page-img {
  background-image: url("~/assets/images/Hero-SavoirFaire.png");
}
button {
  background-color: inherit;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  flex: 1;
  letter-spacing: 2.33px;
  line-height: 20px;
  outline: 0;
  text-transform: uppercase;
  height: 130px;
}

button.active {
  font-weight: bold;
}
</style>

<style>
#toggle-buttons {
  align-items: center;
  display: flex;
  flex-direction: row;
  background-color: #33545c;
}
</style>
