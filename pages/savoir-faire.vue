<template>
  <section>
      <div class="page-img">
        <p>Savoir-Faire</p>
        Nous intervenons pour le compte de TPE, PME ou de grands groupes, dans les domaines du droit des affaires et du droit social, en conseil comme en contentieux.
      </div>

      <div id="toggle-buttons">
          <button @click="setDroitAffaires(true)" v-bind:class="{ active: isDroitAffaires }">Droit des affaires</button>
          <img src="~/assets/Point-3-Vertical-White.svg" class="separator-vertical"/>
          <button @click="setDroitAffaires(false)" v-bind:class="{ active: !isDroitAffaires }">Droit social</button>
      </div>

      <div class="page-content-wrapper">
        <div class="page-content">

          <article v-show="isDroitAffaires">
            <h1>Droit des affaires</h1>

            <h2>Droit des sociétés</h2>

            <div>
              Cadence Avocats assiste ses clients dans la création de sociétés (mise en place d’une gouvernance, pactes d’actionnaires) comme dans les opérations d’acquisition, de cession, et de restructuration (fusion, scission, apport partiel d’actifs).
            </div>

            <img src="~/assets/Point-1.svg" class="separator"/>

            <h2>Droit commercial</h2>

            <div>
              Le cabinet assiste ses clients en matière de baux commerciaux (rédaction, renouvellement, cession) et de cession de fonds de commerce, mais également dans la rédaction de leurs conditions générales et contrats commerciaux, ainsi qu’en droit de la distribution.
            </div>

            <img src="~/assets/Point-1.svg" class="separator"/>

            <h2>Financement</h2>

            <div>
              <p>
                Le cabinet intervient en droit bancaire et financier.
              </p>
              <p>
                Le cabinet a également développé une expertise en matière de financement participatif (assistance des Conseillers en Investissement Participatif et des Intermédiaires en Financement Participatif, et assistance des porteurs de projet dans la réalisation de leurs opérations de financement).
              </p>
            </div>

            <img src="~/assets/Point-1.svg" class="separator"/>

            <h2>Résolution des différends</h2>

            <div>
              <p>
                Cadence Avocats accompagne ses clients en matière précontentieuse, notamment dans la recherche de solutions amiables aux litiges.
              </p>
              <p>
                Cadence Avocats assiste et défend ses clients devant les juridictions judiciaires civiles et commerciales, notamment dans les domaines du contentieux entre actionnaires, du contentieux commercial (rupture brutale, concurrence déloyale, problématiques de responsabilité contractuelle ou délictuelle), de la révocation et mise en cause de la responsabilité des dirigeants, et des voies d’exécution.
              </p>
            </div>
          </article>

          <article v-show="!isDroitAffaires">
            <h1>Droit social</h1>

            <h2>Gestion quotidienne des relations de travail</h2>

            <div>
              <p>
                Le cabinet accompagne les entreprises dans la gestion quotidienne des ressources humaines (rédaction des contrats de travail, gestion des licenciements quel que soit le motif, gestion des départs négociés…) et des relations sociales (mise en place et gestion des institutions représentatives du personnel, gestion des relations avec les représentants du personnel et les organisations syndicales).
              </p>
              <p>
                Cadence Avocats a développé une expertise particulière en matière de gestion et de suivi des différents régimes d’aménagements du temps de travail, ainsi que pour la mise en place de politiques de primes / rémunérations variables au sein de l’entreprise.
              </p>
            </div>

            <img src="~/assets/Point-1.svg" class="separator"/>

            <h2>Contentieux social</h2>

            <div>
              Cadence Avocats assiste et accompagne ses clients dans tous leurs litiges sociaux : contentieux social individuel (notamment en matière de licenciement, harcèlement et discrimination, prise d’acte, résiliation judiciaire, violation des règles de durée du travail, travail dissimulé, requalification de contrat précaire en CDI), contentieux social collectif (élection et désignation des représentants du personnel, délits d’entrave), contentieux administratif (salariés protégés) et contentieux de sécurité sociale (faute inexcusable notamment).
            </div>

            <img src="~/assets/Point-1.svg" class="separator"/>

            <h2>Opérations stratégiques</h2>

            <div>
              Le cabinet assiste ses clients à l’occasion d’opérations stratégiques et/ou complexes, sur les aspects sociaux de ces opérations : réalisation d’audits d’acquisition et de conformité, gestion des incidences sociales de restructurations.
            </div>
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
