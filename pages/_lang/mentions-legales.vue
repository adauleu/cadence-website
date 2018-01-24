<template>
  <section>
    <div class="page-content-wrapper">
      <div class="page-content">
        <h2>{{ $t('notices.content[0].heading') }}</h2>
        <p v-html="$t('notices.content[0].description[0]')"/>
        <p v-html="$t('notices.content[0].description[1]')"/>
        <p v-html="$t('notices.content[0].description[2]')"/>
        <p v-html="$t('notices.content[0].description[3]')"/>
        <p v-html="$t('notices.content[0].description[4]')"/>

        <h2>{{ $t('notices.content[1].heading') }}</h2>
        <p>
          {{ $t('notices.content[1].description[0]') }}
        </p>
        <p>
          {{ $t('notices.content[1].description[1]') }}
        </p>
        <p>
          {{ $t('notices.content[1].description[2]') }}
        </p>
        <p>
          {{ $t('notices.content[1].description[3]') }}
        </p>
        <p>
          {{ $t('notices.content[1].description[4]') }}
        </p>
        <p>
          {{ $t('notices.content[1].description[5]') }}
        </p>
        <h2>{{ $t('notices.content[2].heading') }}</h2>
        <p>
          {{ $t('notices.content[2].description[0]') }}
        </p>
        <p>
          {{ $t('notices.content[2].description[1]') }}
        </p>
        <p>
          {{ $t('notices.content[2].description[2]') }}
        </p>
        <p>
          {{ $t('notices.content[2].description[3]') }}
        </p>
        <p>
          {{ $t('notices.content[2].description[4]') }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>
