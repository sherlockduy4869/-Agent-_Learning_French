// DELF B1 — Compréhension des écrits — Sujet 01
// Built with: node tools/build_exam.js exams/B1/07-11-2026/DELF_B1_001.data.js
module.exports = {
  level: "B1",
  epreuve: "Compréhension des écrits",
  sujet: 1,
  durationMin: 45,
  storeKey: "delf-b1-ce-sujet01",
  exercises: [
    {
      kind: "Choisir un document",
      theme: "Loisirs, clubs — choisir un cours de guitare pour adulte",
      points: 7,
      consigne: "Lisez la situation et les quatre annonces, puis répondez aux questions. Pour chaque question, choisissez l'annonce A, B, C ou D.",
      document: `
        <div class="situation">
          <b>Situation</b>
          <p>Margaux, 29 ans, habite à Nantes. Elle travaille du lundi au vendredi, jusqu'à 18 h 30. Elle rêve d'apprendre la guitare, mais elle n'a jamais touché un instrument. Voici ses critères :</p>
          <ul>
            <li>un cours pour débutants complets ;</li>
            <li>un cours collectif, pour rencontrer du monde ;</li>
            <li>un horaire compatible avec son travail ;</li>
            <li>40 € par mois au maximum ;</li>
            <li>une guitare prêtée, car elle n'en a pas.</li>
          </ul>
        </div>
        <div class="ad"><div class="ad-letter">A</div><h4>Atelier Les Six Cordes</h4><p>Nos cours accueillent les grands débutants comme les élèves plus avancés. Petits groupes de cinq personnes, le mardi de 19 h 30 à 20 h 30, dans notre salle du quartier Talensac. Guitares prêtées pendant les séances. Tarif : <span class="ev" data-q="2">12 € la séance, une séance chaque semaine</span>. Séance d'essai : 12 €.</p></div>
        <div class="ad"><div class="ad-letter">B</div><h4>Guitare &amp; Compagnie</h4><p>Vous connaissez déjà quelques accords et vous voulez progresser ? <span class="ev" data-q="1">Ce cours n'est pas une initiation : il est fait pour ceux qui ont déjà un peu pratiqué.</span> Groupes de six élèves, le samedi de 10 h à 11 h 30. <span class="ev" data-q="4">Chaque élève vient avec son propre instrument.</span> 35 € par mois, partitions comprises.</p></div>
        <div class="ad"><div class="ad-letter">C</div><h4>Maison de quartier de l'Erdre</h4><p>Cours de guitare « Premiers pas » pour adultes. <span class="ev" data-q="7">Aucune connaissance musicale n'est demandée : on commence vraiment à zéro !</span> <span class="ev" data-q="7">Quatre élèves par groupe au maximum, le jeudi de 19 h 15 à 20 h 15.</span> <span class="ev" data-q="7">L'association met des guitares à la disposition des élèves pendant toute l'année.</span> Tarif : <span class="ev" data-q="7">108 € par trimestre</span>. <span class="ev" data-q="6">Le premier cours est offert</span> : venez essayer sans vous engager !</p></div>
        <div class="ad"><div class="ad-letter">D</div><h4>Studio Mélodie</h4><p>Professeur diplômé du conservatoire donne des <span class="ev" data-q="3">cours particuliers</span>, adaptés à votre rythme. Tous niveaux, débutants bienvenus. Cours <span class="ev" data-q="5">le mercredi de 17 h 30 à 18 h 15</span>, au centre-ville, à deux minutes du tram. Une guitare peut vous être prêtée pendant les trois premiers mois. Forfait : 39 € par mois.</p></div>
      `,
      source: "Annonces rédigées pour l'entraînement. Personnes et organismes fictifs.",
      questions: [
        { id: 1, q: "Quel cours ne convient pas à une personne qui n'a jamais joué de guitare ?",
          o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 1,
          quote: "Annonce B : « Ce cours n'est pas une initiation : il est fait pour ceux qui ont déjà un peu pratiqué. »",
          why: "Une « initiation », c'est un cours pour découvrir une activité, pour commencer. L'annonce B dit que ce n'est <b>pas</b> une initiation : il faut déjà connaître « quelques accords ». Margaux n'a jamais joué, ce cours n'est donc pas pour elle.",
          wrong: [
            "A : l'annonce accueille « les grands débutants » = les personnes qui n'ont jamais pratiqué.",
            "C : « on commence vraiment à zéro » = sans aucune connaissance.",
            "D : « débutants bienvenus » : les débutants sont acceptés."
          ],
          tip: "Faites un tableau : une ligne par annonce, une colonne par critère. Cochez ✔ ou ✘ au fur et à mesure de votre lecture : vous trouverez ensuite chaque réponse très vite." },
        { id: 2, q: "Quel cours coûte plus de 40 € par mois ?",
          o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 0,
          quote: "Annonce A : « 12 € la séance, une séance chaque semaine »",
          why: "Il faut calculer : un mois compte environ 4 semaines, donc 4 séances × 12 € = <b>48 € par mois</b> (et même plus quand le mois a 5 mardis). C'est plus que le budget de Margaux.",
          wrong: [
            "B : 35 € par mois, c'est moins de 40 €.",
            "C : <b>piège</b> du calcul : 108 € semble beaucoup, mais c'est « par trimestre », c'est-à-dire pour 3 mois. 108 ÷ 3 = 36 € par mois.",
            "D : 39 € par mois, c'est juste en dessous de 40 €."
          ],
          tip: "Quand les prix sont exprimés avec des unités différentes (la séance, le mois, le trimestre, l'année), ramenez-les tous à la même unité avant de comparer." },
        { id: 3, q: "Dans quel cours l'élève est-il seul avec le professeur ?",
          o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 3,
          quote: "Annonce D : « Professeur diplômé du conservatoire donne des cours particuliers »",
          why: "Un « cours particulier », c'est un cours individuel : un seul élève avec le professeur. C'est le contraire d'un cours collectif, que Margaux cherche pour rencontrer du monde.",
          wrong: [
            "A : « petits groupes de cinq personnes » : c'est un cours collectif.",
            "B : « groupes de six élèves » : c'est un cours collectif.",
            "C : « quatre élèves par groupe au maximum » : c'est un petit groupe, mais un cours collectif."
          ],
          tip: "Attention au <b>piège</b> de vocabulaire : « particulier » ne veut pas dire « spécial » ici. Dans « cours particulier », il signifie « pour une seule personne »." },
        { id: 4, q: "Pour quel cours faut-il apporter sa propre guitare ?",
          o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 1,
          quote: "Annonce B : « Chaque élève vient avec son propre instrument. »",
          why: "« Venir avec son propre instrument » = apporter sa guitare personnelle. Margaux n'a pas de guitare : elle devrait en acheter une.",
          wrong: [
            "A : « Guitares prêtées pendant les séances » : on donne une guitare à l'élève pour le cours.",
            "C : l'association « met des guitares à la disposition des élèves » = elle les prête.",
            "D : « Une guitare peut vous être prêtée pendant les trois premiers mois » : Margaux n'a pas besoin d'en acheter une tout de suite."
          ],
          tip: "Cherchez les synonymes de « prêter » : « mettre à disposition », « fournir », « sur place ». Et repérez les expressions qui demandent quelque chose à l'élève : « venir avec », « apporter », « prévoir »." },
        { id: 5, q: "Quel cours a lieu pendant les heures de travail de Margaux ?",
          o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 3,
          quote: "Annonce D : « le mercredi de 17 h 30 à 18 h 15 »",
          why: "Margaux travaille du lundi au vendredi jusqu'à 18 h 30. Le mercredi à 17 h 30, elle est encore au travail : elle ne peut pas aller à ce cours.",
          wrong: [
            "A : le mardi à 19 h 30, Margaux a fini sa journée depuis une heure.",
            "B : le samedi, Margaux ne travaille pas.",
            "C : le jeudi à 19 h 15, Margaux a terminé son travail."
          ],
          tip: "Pour les horaires, relisez la situation : notez les jours ET les heures où la personne n'est pas libre, puis comparez avec chaque annonce." },
        { id: 6, q: "Quel cours peut-on essayer sans payer ?",
          o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 2,
          quote: "Annonce C : « Le premier cours est offert : venez essayer sans vous engager ! »",
          why: "« Offert » = gratuit, on ne paie pas. Le premier cours de l'annonce C est donc un essai gratuit.",
          wrong: [
            "A : <b>piège</b> : il y a bien une « séance d'essai », mais elle coûte 12 €.",
            "B : l'annonce ne parle pas d'essai.",
            "D : l'annonce ne parle pas d'essai."
          ],
          tip: "Le mot « essai » ne suffit pas : vérifiez toujours s'il y a un prix à côté. « Offert », « gratuit », « sans frais » = on ne paie pas." },
        { id: 7, q: "Quel cours correspond à tous les critères de Margaux ?",
          o: ["Annonce A", "Annonce B", "Annonce C", "Annonce D"], a: 2,
          quote: "Annonce C : « Aucune connaissance musicale n'est demandée […] Quatre élèves par groupe au maximum, le jeudi de 19 h 15 à 20 h 15. L'association met des guitares à la disposition des élèves […] 108 € par trimestre. »",
          why: "L'annonce C remplit les 5 critères : débutants acceptés (« on commence à zéro »), cours collectif (4 élèves), le jeudi soir après le travail, 36 € par mois (108 ÷ 3) et guitares prêtées.",
          wrong: [
            "A : un seul critère manque, mais il est important : le prix (48 € par mois, plus que 40 €).",
            "B : deux critères manquent : le cours n'est pas pour les débutants et il faut apporter sa guitare.",
            "D : deux critères manquent : c'est un cours individuel et l'horaire tombe pendant le travail de Margaux."
          ],
          tip: "Pour la dernière question, reprenez votre tableau : la bonne annonce est la seule ligne avec 5 ✔. Un seul ✘ suffit pour éliminer une annonce." }
      ]
    },
    {
      kind: "Article de presse",
      theme: "Environnement local — compostage collectif dans un quartier",
      points: 9,
      consigne: "Lisez le document puis répondez aux questions en choisissant la bonne réponse.",
      document: `
        <h3 class="doc-title">Aux Tilleuls, les épluchures ont trouvé une seconde vie</h3>
        <p class="chapo">Depuis un an, les habitants d'un quartier de Tours déposent leurs déchets de cuisine dans des bacs installés au pied des immeubles. Une initiative qui séduit de plus en plus de familles.</p>
        <p>Il est 18 heures. Odile, 67 ans, arrive avec son petit seau vert. Comme chaque mardi, <span class="ev" data-q="8">elle vient vider ses épluchures de légumes et son marc de café dans l'un des trois grands bacs en bois du square</span>, en bas de chez elle. « Avant, tout partait à la poubelle. Aujourd'hui, ma poubelle est presque vide », raconte-t-elle en souriant.</p>
        <p>Le projet est né à l'initiative de l'association Quartier Vert, avec l'aide de la mairie, qui a payé les bacs. Au départ, une quinzaine de familles seulement participaient ; elles sont aujourd'hui plus de cent vingt. <span class="ev" data-q="9">Pour participer, il faut d'abord suivre une courte formation d'une heure</span>, organisée un samedi par mois à la maison de quartier. On y apprend ce qui est interdit dans les bacs : la viande, le poisson et les produits laitiers, qui attirent les animaux. <span class="ev" data-q="9">À la fin, chacun reçoit gratuitement un seau</span> et un code pour ouvrir les bacs.</p>
        <p>Après plusieurs mois, les déchets se transforment en compost, une terre noire très riche. <span class="ev" data-q="10">Celui-ci sert ensuite à nourrir les jardinières de l'école voisine et les massifs de fleurs du quartier.</span> <span class="ev" data-q="10">Les habitants peuvent aussi en emporter pour leurs plantes, deux fois par an</span>, lors d'une distribution.</p>
        <p>« Ce que j'aime le plus, c'est que les gens se parlent, explique Samir Benali, 41 ans, bénévole de l'association. <span class="ev" data-q="11">Au début, on venait juste vider son seau. Maintenant, on reste un moment, on discute, on échange des recettes et des conseils.</span> »</p>
        <p>Tout n'a pas été simple pour autant. L'été dernier, à cause de la chaleur, des odeurs désagréables ont gêné certains voisins. L'association a donc réagi : <span class="ev" data-q="12">elle a ajouté des copeaux de bois, qui absorbent l'humidité, et elle a déplacé un bac plus loin des fenêtres.</span> Depuis, plus personne ne se plaint.</p>
        <p>Et la suite ? <span class="ev" data-q="13">La mairie souhaite installer des bacs semblables dans deux autres quartiers de la ville dès le printemps prochain.</span> L'association, elle, cherche de nouveaux bénévoles pour accompagner ces projets.</p>
      `,
      source: "Texte rédigé pour l'entraînement. Personnes et association fictives.",
      questions: [
        { id: 8, q: "Que font les habitants du quartier des Tilleuls ?",
          o: ["Ils déposent leurs restes de cuisine dans des bacs communs.",
              "Ils cultivent des légumes dans un jardin partagé.",
              "Ils trient leurs déchets en plastique dans le square."], a: 0,
          quote: "« elle vient vider ses épluchures de légumes et son marc de café dans l'un des trois grands bacs en bois du square »",
          why: "Les « épluchures » (la peau des légumes) et le « marc de café » sont des restes de cuisine. Les bacs sont utilisés par tout le quartier : ce sont des bacs communs.",
          wrong: [
            "B : <b>piège</b> : le mot « légumes » est dans le texte, mais les habitants jettent les épluchures, ils ne cultivent pas de légumes.",
            "C : le texte parle de déchets de cuisine, jamais de plastique."
          ],
          tip: "Pour la première question, lisez le titre, le chapeau (le paragraphe en gras) et le début du texte : ils donnent le sujet général de l'article." },
        { id: 9, q: "Que faut-il faire pour pouvoir utiliser les bacs ?",
          o: ["Payer une petite cotisation à l'association.",
              "Acheter un seau spécial à la mairie.",
              "Assister d'abord à une séance d'information."], a: 2,
          quote: "« Pour participer, il faut d'abord suivre une courte formation d'une heure […] À la fin, chacun reçoit gratuitement un seau »",
          why: "« Il faut » exprime une obligation. « Suivre une formation » = assister à une séance où l'on apprend les règles. C'est la condition pour participer.",
          wrong: [
            "A : le texte ne parle d'aucune cotisation (somme d'argent payée à une association).",
            "B : contradiction : le seau est donné « gratuitement » à la fin de la formation, on ne l'achète pas."
          ],
          tip: "Pour trouver une règle ou une condition, cherchez les expressions d'obligation : « il faut », « devoir », « obligatoire », « pour + infinitif »." },
        { id: 10, q: "À quoi sert le compost produit dans le quartier ?",
          o: ["Il est vendu aux jardiniers de la ville.",
              "Il enrichit les plantations du quartier et de l'école.",
              "Il est distribué chaque mois aux habitants."], a: 1,
          quote: "« Celui-ci sert ensuite à nourrir les jardinières de l'école voisine et les massifs de fleurs du quartier. Les habitants peuvent aussi en emporter pour leurs plantes, deux fois par an »",
          why: "« Nourrir les jardinières et les massifs de fleurs » = enrichir les plantations. Le compost est utilisé à l'école et dans le quartier.",
          wrong: [
            "A : le texte ne dit jamais que le compost est vendu.",
            "C : <b>piège</b> de fréquence : la distribution a lieu « deux fois par an », pas chaque mois."
          ],
          tip: "Vérifiez toujours les indications de fréquence et de durée : « par an », « par mois », « chaque semaine ». Un seul mot change la réponse." },
        { id: 11, q: "D'après Samir Benali, qu'est-ce qui a changé grâce au projet ?",
          o: ["Les voisins prennent le temps de discuter ensemble.",
              "Les voisins viennent seulement vider leur seau.",
              "Les voisins cuisinent ensemble à la maison de quartier."], a: 0,
          quote: "« Au début, on venait juste vider son seau. Maintenant, on reste un moment, on discute, on échange des recettes et des conseils. »",
          why: "« On reste un moment, on discute » = on prend le temps de parler ensemble. Samir dit aussi : « les gens se parlent ».",
          wrong: [
            "B : <b>piège</b> passé / présent : c'était vrai « au début », mais ce n'est plus le cas « maintenant ».",
            "C : les voisins « échangent des recettes » (ils se les donnent), mais le texte ne dit pas qu'ils cuisinent ensemble."
          ],
          tip: "Repérez les mots qui opposent deux moments : « au début », « avant », « autrefois » ↔ « maintenant », « aujourd'hui », « depuis ». La question porte souvent sur la situation actuelle." },
        { id: 12, q: "Comment l'association a-t-elle réglé le problème des odeurs ?",
          o: ["Elle a fermé tous les bacs pendant l'été.",
              "Elle a interdit les épluchures de légumes.",
              "Elle a ajouté du bois et changé un bac de place."], a: 2,
          quote: "« elle a ajouté des copeaux de bois, qui absorbent l'humidité, et elle a déplacé un bac plus loin des fenêtres. »",
          why: "Les « copeaux » sont de petits morceaux de bois. « Déplacer » = changer de place. L'association a fait ces deux choses.",
          wrong: [
            "A : le texte ne dit pas que les bacs ont été fermés ; ils ont été modifiés.",
            "B : contradiction : les épluchures de légumes sont autorisées (Odile en apporte). Les produits interdits sont la viande, le poisson et les produits laitiers."
          ],
          tip: "Après un problème, cherchez le connecteur qui annonce la solution : « donc », « alors », « pour cela », « l'association a réagi »." },
        { id: 13, q: "Quel est le projet pour l'avenir ?",
          o: ["Remplacer les bacs en bois par des bacs plus grands.",
              "Développer l'expérience dans d'autres parties de la ville.",
              "Confier toute l'organisation des bacs à la mairie."], a: 1,
          quote: "« La mairie souhaite installer des bacs semblables dans deux autres quartiers de la ville dès le printemps prochain. »",
          why: "Installer des bacs « dans deux autres quartiers » = développer l'expérience ailleurs dans la ville. « Semblables » = du même type.",
          wrong: [
            "A : le texte ne parle pas de remplacer les bacs actuels.",
            "C : la mairie installe de nouveaux bacs, mais l'association continue : elle « cherche de nouveaux bénévoles pour accompagner ces projets »."
          ],
          tip: "Pour l'avenir, cherchez le futur, le conditionnel et les verbes de projet : « souhaiter », « prévoir », « vouloir », « dès le printemps prochain »." }
      ]
    },
    {
      kind: "Courriel",
      theme: "Festivals, culture locale — bénévoles d'un festival de cinéma en plein air",
      points: 9,
      consigne: "Vous vous êtes inscrit(e) comme bénévole pour un festival de cinéma en plein air. Vous recevez ce courriel. Lisez-le puis répondez aux questions.",
      document: `
        <div class="mail-head">
          <div><span>De :</span> Léa Fontaine &lt;benevoles@cinesouslesetoiles.fr&gt;</div>
          <div><span>À :</span> Équipe des bénévoles</div>
          <div><span>Objet :</span> Festival Ciné sous les étoiles : infos pratiques</div>
        </div>
        <p>Bonjour à toutes et à tous,</p>
        <p>Merci d'avoir accepté de rejoindre l'équipe du festival Ciné sous les étoiles, qui aura lieu du jeudi 8 au dimanche 11 juillet dans le parc des Saules, à Angers. <span class="ev" data-q="14">Voici les informations pratiques à connaître avant le festival</span> : lisez-les bien !</p>
        <p><b>Réunion d'accueil.</b> <span class="ev" data-q="15">Elle aura lieu le samedi 26 juin à 10 h. Elle est obligatoire pour tous les nouveaux bénévoles</span> (les anciens peuvent venir, mais ce n'est pas nécessaire). Attention : elle ne se tiendra pas dans le parc, mais dans les locaux de l'association, 14 rue des Tanneurs. Vous y recevrez votre planning et votre badge.</p>
        <p><b>Les soirs de projection.</b> Les films commencent à 22 h. <span class="ev" data-q="16">Le rendez-vous est fixé à l'entrée nord du parc, une heure et demie avant le début du film.</span></p>
        <p><b>Ce que nous vous offrons.</b> Chaque jour où vous travaillez, un repas chaud vous attend à la buvette. <span class="ev" data-q="17">Les boissons sans alcool sont gratuites pour les bénévoles pendant tout le festival.</span> Vous recevrez aussi un tee-shirt de l'équipe, que vous pourrez garder.</p>
        <p><b>Ce que vous devez prévoir.</b> <span class="ev" data-q="18">Apportez des vêtements chauds (les nuits sont fraîches près de la rivière), une lampe de poche</span> et une gourde. Les gilets fluo et les talkies-walkies sont fournis par l'organisation.</p>
        <p><b>Contacts.</b> Si vous ne pouvez pas venir à une mission, prévenez-nous au moins 48 heures à l'avance. <span class="ev" data-q="19">Pour toute question sur le planning, répondez simplement à ce courriel.</span> <span class="ev" data-q="19">Pendant le festival, et seulement en cas d'urgence</span>, appelez Thomas, notre responsable des bénévoles, au 06 00 00 00 00.</p>
        <p>À très bientôt sous les étoiles !</p>
        <p>Léa Fontaine<br>Coordinatrice des bénévoles</p>
      `,
      source: "Courriel rédigé pour l'entraînement. Personnes et festival fictifs.",
      questions: [
        { id: 14, q: "Ce courriel sert surtout à…",
          o: ["inviter de nouvelles personnes à devenir bénévoles.",
              "présenter le programme des films du festival.",
              "donner aux bénévoles l'organisation à connaître."], a: 2,
          quote: "« Voici les informations pratiques à connaître avant le festival »",
          why: "Léa écrit à des personnes qui sont déjà bénévoles (« Merci d'avoir accepté de rejoindre l'équipe ») pour leur donner les informations pratiques : réunion, horaires, repas, matériel, contacts.",
          wrong: [
            "A : contradiction : les destinataires ont déjà « accepté de rejoindre l'équipe » ; Léa ne cherche pas de nouveaux bénévoles.",
            "B : le courriel ne donne le titre d'aucun film : il n'y a pas de programme."
          ],
          tip: "Pour trouver le but d'un courriel, lisez l'objet, le premier paragraphe, puis regardez les titres des parties : ensemble, ils montrent l'intention de l'auteur." },
        { id: 15, q: "La réunion du 26 juin…",
          o: ["est obligatoire pour ceux qui participent pour la première fois.",
              "aura lieu dans le parc où se déroule le festival.",
              "est réservée aux bénévoles des années précédentes."], a: 0,
          quote: "« Elle est obligatoire pour tous les nouveaux bénévoles (les anciens peuvent venir, mais ce n'est pas nécessaire). »",
          why: "« Les nouveaux bénévoles » = ceux qui participent pour la première fois. Pour eux, la réunion est « obligatoire » : ils doivent venir.",
          wrong: [
            "B : <b>piège</b> du lieu : la réunion « ne se tiendra pas dans le parc », mais au 14 rue des Tanneurs.",
            "C : contradiction : pour les « anciens », la réunion n'est pas nécessaire ; elle n'est pas réservée à eux."
          ],
          tip: "Lisez toujours les informations entre parenthèses : elles contiennent souvent une exception ou une précision importante." },
        { id: 16, q: "Les soirs de projection, où et à quelle heure les bénévoles doivent-ils arriver ?",
          o: ["À 22 h, à l'entrée nord du parc.",
              "À 20 h 30, à l'entrée nord du parc.",
              "À 20 h 30, au 14 rue des Tanneurs."], a: 1,
          quote: "« Les films commencent à 22 h. Le rendez-vous est fixé à l'entrée nord du parc, une heure et demie avant le début du film. »",
          why: "Il faut calculer : 22 h − 1 h 30 = <b>20 h 30</b>. Le lieu du rendez-vous est l'entrée nord du parc.",
          wrong: [
            "A : <b>piège</b> : 22 h est l'heure du début du film, pas l'heure du rendez-vous.",
            "C : l'heure est juste, mais le 14 rue des Tanneurs est le lieu de la réunion d'accueil, pas celui des soirs de projection."
          ],
          tip: "Quand une option contient deux informations (une heure ET un lieu), vérifiez les deux : une seule erreur suffit pour que l'option soit fausse." },
        { id: 17, q: "Qu'est-ce que les bénévoles reçoivent gratuitement ?",
          o: ["Un repas chaque soir du festival.",
              "Un tee-shirt à rendre après le festival.",
              "Des boissons sans alcool pendant tout le festival."], a: 2,
          quote: "« Les boissons sans alcool sont gratuites pour les bénévoles pendant tout le festival. »",
          why: "« Gratuites » = on ne les paie pas. Ces boissons sont offertes pendant les quatre jours, même les jours où le bénévole ne travaille pas.",
          wrong: [
            "A : <b>piège</b> de restriction : le repas est offert seulement « chaque jour où vous travaillez », pas tous les soirs.",
            "B : contradiction : le tee-shirt, « vous pourrez [le] garder » ; on ne le rend pas."
          ],
          tip: "Faites attention aux mots qui limitent une information : « seulement », « uniquement », « chaque jour où… », « sauf ». Ils changent le sens de la phrase." },
        { id: 18, q: "Que doivent apporter les bénévoles ?",
          o: ["Un pull et de quoi s'éclairer.",
              "Un gilet fluo et une lampe.",
              "Un tee-shirt et une gourde."], a: 0,
          quote: "« Apportez des vêtements chauds (les nuits sont fraîches près de la rivière), une lampe de poche et une gourde. »",
          why: "Un pull est un « vêtement chaud », et une « lampe de poche » sert à s'éclairer (à voir dans le noir).",
          wrong: [
            "B : <b>piège</b> : les gilets fluo « sont fournis par l'organisation » ; les bénévoles n'ont pas besoin d'en apporter.",
            "C : <b>piège</b> : le tee-shirt est donné par le festival (« Vous recevrez aussi un tee-shirt »)."
          ],
          tip: "Séparez bien ce que les organisateurs donnent (« fournis », « offert », « vous recevrez ») et ce que vous devez apporter (« apportez », « prévoyez »)." },
        { id: 19, q: "Une semaine avant le festival, vous avez une question sur votre planning. Que faites-vous ?",
          o: ["Vous appelez Thomas au téléphone.",
              "Vous répondez au courriel de Léa.",
              "Vous allez à l'entrée nord du parc."], a: 1,
          quote: "« Pour toute question sur le planning, répondez simplement à ce courriel. »",
          why: "Pour le planning, il faut répondre au courriel, c'est-à-dire écrire à Léa Fontaine.",
          wrong: [
            "A : <b>piège</b> : on appelle Thomas « pendant le festival, et seulement en cas d'urgence ». Une semaine avant, ce n'est pas le bon moment.",
            "C : l'entrée nord du parc est le lieu de rendez-vous des soirs de projection, pas un endroit pour poser ses questions."
          ],
          tip: "Pour les contacts, notez à chaque fois : qui contacter, comment (téléphone, courriel), pour quel sujet et à quel moment. La question vous place souvent dans une situation précise." }
      ]
    }
  ]
};
