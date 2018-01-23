<template>
  <div class="page-content members">
    <article>
      <img src="~/assets/images/Anne-Sophie.jpg" height="454" width="302" class="team-picture">
      <h1>{{ $t('team.members[0].name') }}</h1>
      <div>
        <p>
          {{ $t('team.members[0].description[0]') }}
        </p>
        <p>
          {{ $t('team.members[0].description[1]') }}
        </p>
        <p>
          {{ $t('team.members[0].description[2]') }}
        </p>
        <p>
          {{ $t('team.members[0].description[3]') }}
        </p>
        <p>
          {{ $t('team.members[0].description[4]') }}
        </p>
      </div>
    </article>
    <img src="~/assets/Point-3-Vertical.svg" class="separator-vertical"/>
    <img src="~/assets/Point-3.svg" class="separator-horizontal"/>
    <article>
      <img src="~/assets/images/Marie.jpg" height="454" width="302" class="team-picture">
      <h1>{{ $t('team.members[1].name') }}</h1>
      <div>
        <p>
          {{ $t('team.members[1].description[0]') }}
        </p>
        <p>
          {{ $t('team.members[1].description[1]') }}
        </p>
        <p>
          {{ $t('team.members[1].description[2]') }}
        </p>
        <p>
          {{ $t('team.members[1].description[3]') }}
        </p>
        <p>
          {{ $t('team.members[1].description[4]') }}
        </p>
        <p>
          {{ $t('team.members[1].description[5]') }}
        </p>
      </div>
    </article>

  </div>
</template>

<style scoped>
.members {
  display: flex;
  flex-direction: row;
  margin: 100px 30%;
}

@media (max-width: 900px) {
  .members {
    flex-direction: column;
    margin: 100px 10%;
  }
}

@media (max-width: 420px) {
  .members .team-picture {
    width: 100%;
    height: auto;
  }
}

.separator-vertical {
  margin: 0 100px;
  align-self: start;
  padding-top: calc(454/2 - 58/2)px
}

@media (max-width: 900px) {
  .separator-vertical {
    display: none;
  }
}

.separator-horizontal {
  padding: 50px 0;
}

@media (min-width: 901px) {
  .separator-horizontal {
    display: none;
  }
}

h1 {
  font-size: 1em;
  margin: 30px 0;
  text-align: left;
  white-space: nowrap;
}

article {
  flex: 1;
  /* width: 310px; */
}

article img {
  display: block;
}
</style>