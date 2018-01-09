<template>
  <div class="page-content members">
    <article>
      <img src="~/assets/images/Anne-Sophie.jpg" height="454" width="302">
      <h1>Anne-Sophie Wafo-Tapa</h1>
      <div>
        <p>
          Anne-Sophie Wafo-Tapa, fondatrice du cabinet Cadence Avocats, est avocate inscrite au Barreau de Paris.
        </p>
        <p>
          Elle intervient dans tous les domaines du droit social, tant en conseil qu'en contentieux, sur les aspects individuels de la relation de travail, mais aussi sur les aspects collectifs du droit du travail.
        </p>
        <p>
          Forte de son expérience professionnelle acquise pendant six années auprès de cabinets spécialisés en droit du travail, Anne-Sophie a créé son propre cabinet AW Legal en 2017 afin de poursuivre son activité de manière indépendante. Anne-Sophie a souhaité co-fonder Cadence Avocats en 2018 afin de proposer à ses clients une offre diversifiée, tout en conservant un cabinet à taille humaine.
        </p>
        <p>
          Outre un master de droit des affaires, Anne-Sophie est titulaire d'un DJCE (Diplôme de Juriste Conseil en Entreprise) et du certificat de spécialisation Droit social du DJCE.
        </p>
        <p>
          Elle a étudié un an à la Cardiff School of Law & Politics et travaille en français et en anglais.
        </p>
      </div>
    </article>
    <img src="~/assets/Point-3-Vertical.svg" class="separator-vertical"/>
    <img src="~/assets/Point-3.svg" class="separator-horizontal"/>
    <article>
      <img src="~/assets/images/Marie.jpg" height="454" width="302">
      <h1>Marie Plassart</h1>
      <div>
        <p>
          Marie Plassart, fondatrice du cabinet Cadence Avocats, est avocate inscrite au Barreau de Paris.
        </p>
        <p>
          Elle intervient dans tous les domaines du droit des affaires, tant en conseil qu’en contentieux.
        </p>
        <p>
          Plus précisément, elle a développé une expertise en droit des sociétés, en financement (notamment en financement participatif), en droit commercial et en résolution des différends.
        </p>
        <p>
          Après six années d’exercice au sein du cabinet Solferino Associés, Marie a décidé de co-fonder Cadence Avocats, afin d’enrichir les services proposés de compétences complémentaires.
        </p>
        <p>
          Marie est titulaire du DJCE (Diplôme de Juriste Conseil d’Entreprise) de Rennes, d’un certificat en droit des sociétés, et d’un LLM in international business law de l’Université d’Exeter (Royaume-Uni).
        </p>
        <p>
          Elle travaille en français et en anglais.
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

@media (min-width: 900px) {
  .separator-horizontal {
    display: none;
  }
}

h1 {
  margin: 30px 0;
  text-align: left;
}

article {
  flex: 1;
  /* width: 310px; */
}

article h1 {
  white-space: nowrap;
}

article img {
  display: block;
}
</style>