// DELF B2 — Compréhension des écrits — Sujet 01
// Built with: node tools/build_exam.js exams/B2/07-11-2026/DELF_B2_001.data.js
module.exports = {
  level: "B2",
  epreuve: "Compréhension des écrits",
  sujet: 1,
  durationMin: 60,
  storeKey: "delf-b2-ce-sujet01",
  exercises: [
    /* ------------------------------------------------------------------ */
    {
      kind: "Article de presse",
      theme: "Urbanisme et mobilité — les rues scolaires fermées à la circulation",
      points: 9,
      consigne: "Lisez le document puis répondez aux questions en choisissant la bonne réponse.",
      document: `
        <h3 class="doc-title">Rues scolaires : quand la voiture cède le passage aux cartables</h3>
        <p class="chapo"><span class="ev" data-q="1">Depuis trois ans, de plus en plus de communes interdisent la circulation, aux heures d'entrée et de sortie des classes, dans les rues qui bordent les écoles.</span> <span class="ev" data-q="1">Plébiscité par les familles, le dispositif séduit, mais son efficacité réelle divise encore les spécialistes.</span></p>
        <p>À Grenoble, il est 8 h 20 rue des Glycines, et deux barrières métalliques viennent de fermer la chaussée devant l'école élémentaire du quartier. Pendant quarante minutes, aucune voiture ne passera : les élèves arrivent à pied, à vélo ou à trottinette, sous l'œil de deux parents bénévoles. « Avant, c'était un ballet de voitures en double file, se souvient Nadia Ferrand, mère d'élève. <span class="ev" data-q="2">Aujourd'hui, mon fils de neuf ans fait le trajet tout seul, et je ne m'inquiète plus.</span> »</p>
        <p>Grenoble est loin d'être un cas isolé. Selon l'Observatoire national des mobilités actives, plus de 1 200 rues scolaires ont vu le jour en France depuis 2023, contre une centaine auparavant. Autour des établissements pilotes, les relevés indiquent une baisse moyenne de 23 % du dioxyde d'azote aux heures de fermeture. Ces chiffres doivent toutefois être lus avec prudence : la baisse ne concerne que les abords immédiats de l'école, et une partie de la circulation se reporte sur les rues voisines.</p>
        <p>Deux modèles coexistent. Le premier, de loin le plus répandu, consiste à fermer la rue de manière temporaire, grâce à des barrières amovibles installées matin et soir. Le second, plus ambitieux, transforme durablement la chaussée : la rue, piétonnisée et plantée d'arbres, devient un véritable lieu de vie. <span class="ev" data-q="3">Ce second modèle coûte nettement plus cher – jusqu'à 300 000 euros par rue –, mais il dispense la commune de mobiliser chaque jour des agents ou des bénévoles.</span></p>
        <p>Pour Julien Marchetti, urbaniste et chercheur au laboratoire Villes et Territoires, l'essentiel est ailleurs. « <span class="ev" data-q="4">La rue scolaire n'est pas d'abord une mesure antipollution. Elle change la manière dont les enfants s'approprient la ville</span> : un enfant qui marche seul jusqu'à l'école gagne en autonomie. » Le chercheur met néanmoins en garde : « <span class="ev" data-q="4">Si la mesure reste isolée, elle risque de n'être qu'un symbole. Sans trottoirs sûrs ni pistes cyclables pour rejoindre l'école, on ne fait que déplacer le problème de cent mètres.</span> »</p>
        <p>Le dispositif a aussi ses détracteurs. Certains commerçants dénoncent une baisse de fréquentation, sans qu'aucune étude ne l'ait confirmée à ce jour. Des parents qui travaillent loin jugent, eux, qu'on leur complique la vie. <span class="ev" data-q="5">Surtout, les écoles situées sur un axe de bus ou une route départementale ne peuvent tout simplement pas en bénéficier.</span></p>
        <p>Du côté de l'État, on se garde bien de légiférer. <span class="ev" data-q="6">Le ministère des Transports estime que la décision relève des maires, « qui connaissent le terrain », et se contente de leur fournir un guide méthodologique.</span> Une proposition de loi visant à les rendre obligatoires devant les écoles neuves a bien été déposée au printemps, <span class="ev" data-q="6">mais elle n'a toujours pas été inscrite à l'ordre du jour.</span></p>
      `,
      source: "Texte rédigé pour l'entraînement. Personnes, laboratoire et observatoire fictifs.",
      questions: [
        { id: 1, q: "Quel est le sujet principal de cet article ?",
          o: [
            "La réussite d'une école grenobloise qui a supprimé la circulation devant ses portes.",
            "Un dispositif en pleine expansion, apprécié des familles, mais dont les effets restent débattus.",
            "La mobilisation des parents d'élèves pour obtenir l'interdiction des voitures en ville."
          ], a: 1,
          quote: "« Depuis trois ans, de plus en plus de communes interdisent la circulation […] dans les rues qui bordent les écoles. Plébiscité par les familles, le dispositif séduit, mais son efficacité réelle divise encore les spécialistes. »",
          why: "Le chapô résume toujours l'article. Il annonce deux idées : un phénomène qui se développe (« de plus en plus de communes ») et un débat (« mais son efficacité réelle divise »). La réponse B reformule ces deux éléments : « en pleine expansion » = « de plus en plus », « apprécié des familles » = « plébiscité par les familles », « débattus » = « divise les spécialistes ».",
          wrong: [
            "A : <b>piège</b> classique : l'exemple d'ouverture (Grenoble) n'est qu'une illustration. Le journaliste écrit d'ailleurs : « Grenoble est loin d'être un cas isolé. »",
            "C : exagération et information absente : l'article parle des rues situées devant les écoles, aux heures d'entrée et de sortie, et non d'une interdiction des voitures dans toute la ville ; aucune mobilisation de parents n'est décrite."
          ],
          tip: "Pour l'idée générale, lisez d'abord le titre et le chapô, puis vérifiez avec le dernier paragraphe. Méfiez-vous de l'anecdote du premier paragraphe : dans un article de presse, elle sert d'« accroche », elle n'est pas le sujet." },
        { id: 2, q: "Selon Nadia Ferrand, qu'est-ce qui a changé depuis la création de la rue scolaire ?",
          o: [
            "Des agents municipaux accompagnent désormais les enfants jusqu'à l'école.",
            "La rue des Glycines est maintenant interdite aux voitures toute la journée.",
            "Certains élèves, comme son fils, peuvent aller à l'école sans être accompagnés."
          ], a: 2,
          quote: "« Aujourd'hui, mon fils de neuf ans fait le trajet tout seul, et je ne m'inquiète plus. »",
          why: "« Faire le trajet tout seul » = aller à l'école sans adulte, « sans être accompagné ». L'adverbe « Aujourd'hui » s'oppose à « Avant » : c'est bien un changement.",
          wrong: [
            "A : mauvais détail : ce sont « deux parents bénévoles » qui surveillent la rue, pas des agents municipaux ; et ils ne raccompagnent pas les enfants.",
            "B : contradiction : la rue n'est fermée que « pendant quarante minutes », aux heures d'entrée des classes."
          ],
          tip: "Dans une question de détail, vérifiez chaque mot de l'option : la personne (parents ou agents ?), la durée (quarante minutes ou toute la journée ?). Une seule erreur suffit à éliminer une réponse." },
        { id: 3, q: "Qu'est-ce qui caractérise « ce second modèle » ?",
          o: [
            "Il demande un investissement plus important, mais évite une surveillance quotidienne.",
            "Il repose sur des barrières que l'on installe chaque matin et chaque soir.",
            "Il est aujourd'hui le modèle le plus répandu dans les communes françaises."
          ], a: 0,
          quote: "« Ce second modèle coûte nettement plus cher – jusqu'à 300 000 euros par rue –, mais il dispense la commune de mobiliser chaque jour des agents ou des bénévoles. »",
          why: "« Coûter nettement plus cher » = « demander un investissement plus important ». « Dispenser de mobiliser chaque jour des agents » = ne plus avoir besoin de personnes pour surveiller tous les jours. Le connecteur « mais » oppose l'inconvénient (le coût) à l'avantage.",
          wrong: [
            "B : <b>piège</b> de la reprise : les barrières « installées matin et soir » caractérisent le <b>premier</b> modèle, la fermeture temporaire.",
            "C : contradiction : c'est le premier modèle qui est « de loin le plus répandu ». Le second est présenté comme « plus ambitieux »."
          ],
          tip: "Quand le texte oppose « le premier… le second… », soulignez ce qui appartient à chacun. Les expressions de reprise (« ce second modèle », « ce dernier », « celui-ci ») renvoient à un élément précis : remontez toujours dans le texte pour l'identifier." },
        { id: 4, q: "Quelle est l'opinion de Julien Marchetti sur les rues scolaires ?",
          o: [
            "Elles sont avant tout un moyen efficace de lutter contre la pollution de l'air.",
            "Elles sont inutiles tant que les villes ne disposent pas de pistes cyclables.",
            "Leur intérêt principal ne tient pas à la qualité de l'air, mais elles doivent s'inscrire dans un projet plus large."
          ], a: 2,
          quote: "« La rue scolaire n'est pas d'abord une mesure antipollution. Elle change la manière dont les enfants s'approprient la ville […]. Si la mesure reste isolée, elle risque de n'être qu'un symbole. »",
          why: "L'urbaniste dit que l'essentiel est ailleurs que dans la pollution : c'est l'autonomie des enfants. Puis il nuance (« néanmoins ») : isolée, la mesure risque de n'être « qu'un symbole ». Il faut donc l'accompagner d'autres aménagements (trottoirs, pistes cyclables) : c'est le « projet plus large » de la réponse C.",
          wrong: [
            "A : contradiction directe : « La rue scolaire n'est <b>pas d'abord</b> une mesure antipollution. »",
            "B : <b>piège</b> de l'exagération : l'expert dit que la mesure isolée est <b>insuffisante</b> (« elle risque de n'être qu'un symbole »), pas qu'elle est inutile. Insuffisant ≠ inutile."
          ],
          tip: "Quand un expert donne une opinion en deux temps (un avis + « néanmoins / toutefois » + une mise en garde), la bonne réponse contient souvent les deux. Méfiez-vous des options radicales (« inutile », « jamais », « totalement »)." },
        { id: 5, q: "Quelle limite du dispositif l'article présente-t-il comme établie ?",
          o: [
            "Il a fait baisser de manière mesurable le chiffre d'affaires des commerces voisins.",
            "Il ne peut pas être mis en place devant toutes les écoles.",
            "Il est de plus en plus rejeté par l'ensemble des parents d'élèves."
          ], a: 1,
          quote: "« Surtout, les écoles situées sur un axe de bus ou une route départementale ne peuvent tout simplement pas en bénéficier »",
          why: "« Ne pas pouvoir en bénéficier » = le dispositif ne peut pas être installé devant ces écoles. L'adverbe « Surtout » signale que c'est la limite la plus importante, et le journaliste la présente comme un fait (« tout simplement »), sans réserve.",
          wrong: [
            "A : <b>piège</b> de l'idée non confirmée : les commerçants « dénoncent » une baisse, « sans qu'aucune étude ne l'ait confirmée ». Ce n'est donc pas une limite établie.",
            "C : contradiction et exagération : le dispositif est « plébiscité par les familles » ; seuls « des parents qui travaillent loin » le critiquent, pas « l'ensemble des parents »."
          ],
          tip: "Distinguez ce que le texte présente comme un fait et ce qui n'est qu'une opinion ou une accusation : « dénoncer », « estimer », « sans que cela soit confirmé » signalent un point de vue, pas une vérité établie." },
        { id: 6, q: "Quelle est la position de l'État sur les rues scolaires ?",
          o: [
            "Il laisse les communes décider, tout en mettant à leur disposition des conseils.",
            "Il vient de voter une loi qui les rend obligatoires devant les nouvelles écoles.",
            "Il finance la transformation des rues scolaires en espaces aménagés durablement."
          ], a: 0,
          quote: "« Le ministère des Transports estime que la décision relève des maires, « qui connaissent le terrain », et se contente de leur fournir un guide méthodologique. »",
          why: "« La décision relève des maires » = ce sont les communes qui décident. « Fournir un guide méthodologique » = donner des conseils pratiques. L'expression « se garder bien de légiférer » montre que l'État refuse volontairement de faire une loi.",
          wrong: [
            "B : <b>piège</b> : une proposition de loi a été « déposée », mais elle « n'a toujours pas été inscrite à l'ordre du jour ». Elle n'a donc pas été votée.",
            "C : information absente : l'article ne parle d'aucun financement de l'État."
          ],
          tip: "Attention au vocabulaire politique : une loi « déposée » ou « proposée » n'est pas une loi « adoptée » ou « votée ». Repérez aussi « se contenter de » : il indique une action limitée, minimale." }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      kind: "Entretien",
      theme: "Science et recherche — les sciences participatives et les citoyens observateurs",
      points: 9,
      consigne: "Lisez le document puis répondez aux questions en choisissant la bonne réponse.",
      document: `
        <h3 class="doc-title">« Les volontaires ne remplacent pas les chercheurs : ils leur prêtent des yeux partout »</h3>
        <p class="chapo">Compter les papillons, photographier les insectes d'une haie : les programmes de sciences participatives attirent chaque année davantage de bénévoles. Hélène Vasseur, écologue à l'Institut ligérien de la biodiversité, à Tours, coordonne l'un d'eux depuis 2019.</p>
        <p class="itw-q">Que recouvre exactement l'expression « sciences participatives » ?</p>
        <p><span class="ev" data-q="7">C'est une façon de faire de la recherche dans laquelle des non-spécialistes recueillent des données selon un protocole défini par des scientifiques.</span> Le mot essentiel, c'est « protocole » : <span class="ev" data-q="7">il ne s'agit pas de partager de jolies photos sur les réseaux sociaux, mais de suivre une méthode précise, toujours la même</span>, pour que les observations soient comparables d'une année sur l'autre.</p>
        <p class="itw-q">Votre programme a-t-il du succès ?</p>
        <p>Nous sommes passés de 300 participants la première année à près de 4 000 aujourd'hui. <span class="ev" data-q="8">Mais le chiffre qui compte le plus à mes yeux est un autre : environ un tiers des volontaires nous envoient des données depuis plus de trois ans.</span> C'est ce noyau fidèle qui fait la valeur scientifique du programme, car une série longue vaut bien davantage que des milliers d'observations ponctuelles.</p>
        <p class="itw-q">Qu'avez-vous appris grâce à ces données ?</p>
        <p>Nous avons montré que les haies taillées en fin d'hiver accueillaient deux fois plus d'insectes pollinisateurs que celles taillées à l'automne. Aucune équipe n'aurait pu couvrir seule un territoire aussi vaste : il aurait fallu des dizaines de techniciens. <span class="ev" data-q="9">Ces résultats ont d'ailleurs conduit plusieurs communes à revoir leur calendrier d'entretien des haies.</span></p>
        <p class="itw-q">Certains chercheurs doutent de la fiabilité des données d'amateurs…</p>
        <p><span class="ev" data-q="10">Je trouve cette inquiétude légitime : un volontaire peut confondre deux espèces, oublier une sortie ou n'observer que par beau temps. Mais elle repose souvent sur une image dépassée.</span> Nous formons les participants, nous vérifions les photos douteuses, et les erreurs individuelles se compensent sur un grand nombre d'observations. <span class="ev" data-q="10">Les amateurs ne sont pas moins fiables ; ils se trompent autrement, et nous savons corriger ces biais.</span></p>
        <p class="itw-q">Comment entretenir la motivation des bénévoles sur la durée ?</p>
        <p>Il y a une règle sur laquelle nous ne transigeons jamais : <span class="ev" data-q="11">rendre aux participants ce qu'ils nous donnent. Chaque hiver, nous leur envoyons les résultats de l'année</span> et nous organisons des rencontres avec les chercheurs. <span class="ev" data-q="11">Un volontaire qui ignore à quoi servent ses données finit toujours par abandonner.</span></p>
        <p class="itw-q">Quel est aujourd'hui votre principal défi ?</p>
        <p><span class="ev" data-q="12">Paradoxalement, ce n'est plus le recrutement. Le vrai défi, c'est la diversité des participants : nos volontaires sont surtout des retraités et des diplômés, souvent issus de milieux aisés.</span> Pour que la science soit vraiment partagée, <span class="ev" data-q="12">il faut aller chercher les jeunes, les habitants des quartiers populaires.</span></p>
      `,
      source: "Entretien rédigé pour l'entraînement. Personne, institut et programme fictifs.",
      questions: [
        { id: 7, q: "Comment Hélène Vasseur définit-elle les sciences participatives ?",
          o: [
            "Des amateurs partagent librement leurs photos de la nature sur les réseaux sociaux.",
            "Des chercheurs présentent régulièrement leurs travaux au grand public.",
            "Des non-spécialistes collectent des données en respectant une méthode fixée par des chercheurs."
          ], a: 2,
          quote: "« C'est une façon de faire de la recherche dans laquelle des non-spécialistes recueillent des données selon un protocole défini par des scientifiques. »",
          why: "La réponse C reformule la définition mot à mot : « recueillir » = « collecter », « un protocole défini par des scientifiques » = « une méthode fixée par des chercheurs ». L'interviewée insiste elle-même sur ce mot : « Le mot essentiel, c'est “protocole” ».",
          wrong: [
            "A : <b>piège</b> : l'option reprend les mots du texte (« photos », « réseaux sociaux »), mais pour dire le contraire : « il ne s'agit <b>pas</b> de partager de jolies photos sur les réseaux sociaux ».",
            "B : inversion des rôles : dans les sciences participatives, ce sont les citoyens qui participent à la recherche ; il ne s'agit pas de vulgarisation scientifique."
          ],
          tip: "La structure « il ne s'agit pas de X, mais de Y » est très fréquente dans les définitions : X est le contresens à éviter, Y est la vraie définition. Les distracteurs reprennent souvent X." },
        { id: 8, q: "Quel chiffre Hélène Vasseur juge-t-elle le plus révélateur de la réussite du programme ?",
          o: [
            "La proportion de volontaires qui participent depuis plusieurs années.",
            "Le nombre total de participants, qui a été multiplié par plus de dix.",
            "Le nombre d'observations envoyées chaque année par les bénévoles."
          ], a: 0,
          quote: "« Mais le chiffre qui compte le plus à mes yeux est un autre : environ un tiers des volontaires nous envoient des données depuis plus de trois ans. »",
          why: "« Un tiers des volontaires […] depuis plus de trois ans » = la proportion de bénévoles fidèles, engagés « depuis plusieurs années ». Elle explique pourquoi : « une série longue vaut bien davantage que des milliers d'observations ponctuelles ».",
          wrong: [
            "B : <b>piège</b> : le passage de 300 à 4 000 participants est bien dans le texte, mais le connecteur « Mais » et l'expression « est un autre » montrent que ce n'est <b>pas</b> le chiffre le plus important pour elle.",
            "C : information absente : aucun nombre d'observations annuelles n'est donné ; elle relativise même les « milliers d'observations ponctuelles »."
          ],
          tip: "Quand une personne cite plusieurs chiffres, cherchez celui qu'elle met en valeur : « le chiffre qui compte », « surtout », « ce qui me frappe ». Un « mais » placé après un premier chiffre annonce souvent l'information principale." },
        { id: 9, q: "Quelle conséquence concrète les résultats du programme ont-ils eue ?",
          o: [
            "Les communes ont recruté des techniciens pour surveiller les haies.",
            "Certaines communes ont changé la période à laquelle elles taillent les haies.",
            "Les volontaires ont été invités à planter de nouvelles haies dans la région."
          ], a: 1,
          quote: "« Ces résultats ont d'ailleurs conduit plusieurs communes à revoir leur calendrier d'entretien des haies. »",
          why: "« Conduire à » exprime la conséquence. « Revoir leur calendrier d'entretien » = changer la période de taille : puisque les haies taillées en fin d'hiver accueillent plus de pollinisateurs, les communes ont modifié la date de leurs travaux.",
          wrong: [
            "A : <b>piège</b> de l'hypothèse : les « dizaines de techniciens » sont au conditionnel passé (« il aurait fallu ») ; c'est ce qui aurait été nécessaire <b>sans</b> les volontaires, pas ce qui s'est passé.",
            "C : information absente : l'entretien ne parle pas de plantation de haies."
          ],
          tip: "Le conditionnel passé (« il aurait fallu », « aucune équipe n'aurait pu ») décrit une situation imaginaire, qui ne s'est pas réalisée. Ne confondez jamais une hypothèse avec un fait." },
        { id: 10, q: "Comment Hélène Vasseur réagit-elle aux doutes sur la fiabilité des données ?",
          o: [
            "Elle estime que ces doutes n'ont absolument aucun fondement.",
            "Elle reconnaît que des erreurs existent, mais affirme qu'elles peuvent être maîtrisées.",
            "Elle admet que les amateurs sont moins fiables que les chercheurs professionnels."
          ], a: 1,
          quote: "« Je trouve cette inquiétude légitime […]. Mais elle repose souvent sur une image dépassée. […] Les amateurs ne sont pas moins fiables ; ils se trompent autrement, et nous savons corriger ces biais. »",
          why: "C'est un <b>accord partiel</b> : elle commence par une concession (« Je trouve cette inquiétude légitime » et elle cite des erreurs possibles), puis « Mais » introduit son objection. « Nous savons corriger ces biais » = les erreurs « peuvent être maîtrisées ».",
          wrong: [
            "A : exagération : elle juge au contraire l'inquiétude « légitime » ; elle dit seulement qu'elle repose « souvent » sur une image dépassée.",
            "C : contradiction : « Les amateurs <b>ne sont pas moins fiables</b> ». Le <b>piège</b> consiste à confondre la concession (ils font des erreurs) et la conclusion."
          ],
          tip: "Face à une critique, repérez la structure « concession + opposition » : « Je trouve cela légitime / C'est vrai / Certes… mais… ». La position réelle de la personne se trouve après le « mais », sans effacer ce qu'elle a concédé avant." },
        { id: 11, q: "Quel principe permet, selon elle, de garder les bénévoles motivés ?",
          o: [
            "Rémunérer les participants qui envoient le plus d'observations.",
            "Limiter les sorties d'observation aux journées de beau temps.",
            "Tenir les volontaires informés de l'utilisation de leurs données."
          ], a: 2,
          quote: "« rendre aux participants ce qu'ils nous donnent. Chaque hiver, nous leur envoyons les résultats de l'année […]. Un volontaire qui ignore à quoi servent ses données finit toujours par abandonner. »",
          why: "« Rendre aux participants ce qu'ils nous donnent » est expliqué par la phrase suivante : on leur envoie les résultats. La dernière phrase donne la raison, sous forme négative : sans savoir « à quoi servent ses données », un volontaire abandonne. Il faut donc l'informer.",
          wrong: [
            "A : information absente : il n'est jamais question d'argent. « Rendre » ne signifie pas ici « payer », mais partager les résultats.",
            "B : mauvais détail : « n'observer que par beau temps » est cité plus haut comme une <b>erreur</b> possible des amateurs, pas comme une règle."
          ],
          tip: "Une expression imagée ou abstraite (« rendre ce qu'on nous donne ») est presque toujours expliquée par la phrase qui suit. Lisez-la avant de choisir : c'est elle qui donne le sens précis." },
        { id: 12, q: "Quel est, pour Hélène Vasseur, le principal défi aujourd'hui ?",
          o: [
            "Élargir le profil social et l'âge des personnes qui participent.",
            "Attirer un nombre beaucoup plus important de nouveaux volontaires.",
            "Former davantage de retraités aux méthodes d'observation scientifique."
          ], a: 0,
          quote: "« Paradoxalement, ce n'est plus le recrutement. Le vrai défi, c'est la diversité des participants […] il faut aller chercher les jeunes, les habitants des quartiers populaires »",
          why: "« La diversité des participants » = des profils plus variés. Les volontaires actuels sont « des retraités et des diplômés […] issus de milieux aisés » ; il faut attirer « les jeunes » (l'âge) et « les habitants des quartiers populaires » (le milieu social).",
          wrong: [
            "B : <b>piège</b> de l'idée réfutée : « ce n'est plus le recrutement ». Le problème n'est pas le nombre, mais le profil des volontaires.",
            "C : contresens : les retraités sont déjà majoritaires ; elle veut justement attirer d'<b>autres</b> publics."
          ],
          tip: "« Paradoxalement » annonce une idée contraire à ce que l'on attend. Et « ce n'est plus X, le vrai défi c'est Y » : X est éliminé, seul Y est la bonne réponse." }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      kind: "Texte argumentatif (tribune)",
      theme: "Tourisme — surtourisme et limitation du nombre de visiteurs",
      points: 7,
      consigne: "Lisez le document puis répondez aux questions en choisissant la bonne réponse.",
      document: `
        <h3 class="doc-title">Surtourisme : osons limiter l'accès pour mieux accueillir</h3>
        <p>Chaque été, le même scénario se répète. Sur les sentiers côtiers, dans les villages perchés ou les ruelles des centres historiques, des foules compactes piétinent les lieux qu'elles sont venues admirer. <span class="ev" data-q="13">On entend souvent qu'il serait impossible, voire indécent, de restreindre l'accès à un site naturel ou historique. Je soutiens l'inverse : instaurer des quotas de visiteurs dans les sites saturés n'est pas une atteinte à la liberté de voyager, c'est la seule manière de préserver ce qui rend ces lieux désirables.</span></p>
        <p>D'abord, la fréquentation excessive abîme concrètement les milieux. <span class="ev" data-q="14">Dans une crique de la côte bretonne que je connais depuis l'enfance, le nombre de visiteurs quotidiens est passé de 400 à plus de 3 000 en quinze ans ; la végétation des dunes, piétinée, y a reculé de moitié.</span> Les panneaux invitant à « rester sur les chemins » n'y changent rien : quand la foule déborde, le sentier s'élargit de lui-même.</p>
        <p>Ensuite, le surtourisme finit par se retourner contre le tourisme lui-même. <span class="ev" data-q="15">À force d'attirer toujours plus de monde, certaines destinations tuent la poule aux œufs d'or</span> : les visiteurs, lassés de faire la queue et de photographier la nuque de leurs voisins, ne reviennent pas. <span class="ev" data-q="16">Quant aux habitants, chassés par la flambée des loyers et la transformation des logements en meublés touristiques, ils désertent les centres-villes.</span> Or un lieu sans habitants n'est plus qu'un décor.</p>
        <p>Je ne plaide pas pour un tourisme réservé à une élite. Un quota mal conçu, payant et accessible aux seuls voyageurs capables de planifier leurs vacances six mois à l'avance, ne ferait que remplacer l'encombrement par l'exclusion. Je ne crois pas davantage aux « chartes du visiteur responsable » distribuées à l'entrée des sites : <span class="ev" data-q="17">faute de mesures contraignantes, elles servent surtout d'alibi à des collectivités qui ne veulent rien changer.</span></p>
        <p>Des solutions justes existent pourtant. <span class="ev" data-q="18">À Port-Lavrec, petite commune du littoral, la réservation gratuite est devenue obligatoire pour accéder au sentier des falaises, et un tiers des places est attribué le jour même, sur place. Résultat : la fréquentation a baissé d'un quart, mais les commerçants n'ont constaté aucune perte</span>, car les visiteurs, moins pressés, restent plus longtemps et dépensent davantage.</p>
        <p><span class="ev" data-q="19">Élus, cessez de mesurer le succès d'une saison au seul nombre d'entrées. Fixez des seuils, gardez des places pour ceux qui n'ont rien prévu, consacrez les recettes à l'entretien des sites.</span> Et nous, voyageurs, acceptons d'attendre notre tour : <span class="ev" data-q="19">un lieu qui sait parfois nous dire « non » est un lieu qui a encore quelque chose à nous offrir.</span></p>
      `,
      source: "Tribune rédigée pour l'entraînement. Lieux, personnes et chiffres fictifs.",
      questions: [
        { id: 13, q: "Quelle est la thèse défendue par l'auteur ?",
          o: [
            "Les sites les plus fragiles devraient être définitivement fermés aux touristes.",
            "Limiter le nombre de visiteurs est le meilleur moyen de protéger les sites très fréquentés.",
            "Il serait inacceptable de restreindre l'accès à un site naturel ou historique."
          ], a: 1,
          quote: "« Je soutiens l'inverse : instaurer des quotas de visiteurs dans les sites saturés n'est pas une atteinte à la liberté de voyager, c'est la seule manière de préserver ce qui rend ces lieux désirables. »",
          why: "La thèse est annoncée par « Je soutiens ». « Instaurer des quotas de visiteurs » = limiter le nombre de visiteurs ; « préserver ce qui rend ces lieux désirables » = protéger les sites ; « les sites saturés » = les sites très fréquentés.",
          wrong: [
            "A : exagération : l'auteur ne veut pas fermer les sites, mais en limiter l'accès. Sa conclusion dit même qu'un lieu qui dit « parfois » non a encore « quelque chose à nous offrir ».",
            "C : <b>piège</b> de l'idée réfutée : c'est l'opinion que l'auteur rapporte (« On entend souvent qu'il serait impossible, voire indécent… ») pour la contredire aussitôt (« Je soutiens l'inverse »)."
          ],
          tip: "Dans une tribune, l'introduction présente souvent une idée reçue (« on dit souvent », « beaucoup pensent ») avant la thèse de l'auteur (« je soutiens », « je crois au contraire »). Ne confondez pas les deux." },
        { id: 14, q: "Que montre l'exemple de la crique bretonne ?",
          o: [
            "L'augmentation de la fréquentation y a entraîné une dégradation du milieu naturel.",
            "Le nombre de visiteurs quotidiens y a été divisé par deux en quinze ans.",
            "La végétation des dunes y a complètement disparu à cause du piétinement."
          ], a: 0,
          quote: "« le nombre de visiteurs quotidiens est passé de 400 à plus de 3 000 en quinze ans ; la végétation des dunes, piétinée, y a reculé de moitié. »",
          why: "L'exemple illustre l'argument annoncé juste avant : « la fréquentation excessive abîme concrètement les milieux ». La hausse des visiteurs (de 400 à plus de 3 000) a pour conséquence le recul de la végétation : c'est une « dégradation du milieu naturel ».",
          wrong: [
            "B : <b>piège</b> du chiffre déplacé : « de moitié » concerne la végétation, pas les visiteurs, dont le nombre a au contraire fortement augmenté.",
            "C : exagération : la végétation a « reculé de moitié », elle n'a pas « complètement disparu »."
          ],
          tip: "Pour une question sur un chiffre, associez chaque nombre à ce qu'il mesure (les visiteurs ? la végétation ?) et au sens de l'évolution (hausse ou baisse ?). Les distracteurs mélangent souvent ces éléments." },
        { id: 15, q: "Dans ce texte, « tuer la poule aux œufs d'or » signifie :",
          o: [
            "attirer de nouveaux visiteurs grâce à une publicité plus efficace.",
            "renoncer volontairement à une partie de ses revenus pour protéger un site.",
            "détruire, par excès, ce qui était à l'origine de sa richesse."
          ], a: 2,
          quote: "« À force d'attirer toujours plus de monde, certaines destinations tuent la poule aux œufs d'or : les visiteurs […] ne reviennent pas. »",
          why: "La poule aux œufs d'or représente une source de richesse ; la « tuer », c'est la détruire en voulant en profiter trop vite. Le contexte le confirme : « à force d'attirer toujours plus de monde » (l'excès), les destinations perdent leurs visiteurs, donc ce qui les faisait vivre.",
          wrong: [
            "A : contresens : l'expression décrit une perte, pas une attraction de nouveaux visiteurs.",
            "B : <b>piège</b> : il y a bien une perte de revenus, mais elle n'est pas « volontaire » ; elle est la conséquence involontaire de l'excès. Renoncer volontairement correspond plutôt à la proposition de l'auteur (les quotas)."
          ],
          tip: "Pour comprendre une expression idiomatique, ne la traduisez pas mot à mot : regardez ce qui l'entoure. Ici, « à force de » (la cause) et les deux-points (la conséquence) expliquent l'image." },
        { id: 16, q: "Selon l'auteur, quelle conséquence le surtourisme a-t-il pour les habitants ?",
          o: [
            "Ils sont poussés à quitter les centres-villes à cause du coût du logement.",
            "Ils transforment leurs logements en meublés touristiques pour s'enrichir.",
            "Ils refusent désormais d'accueillir les touristes dans leur quartier."
          ], a: 0,
          quote: "« Quant aux habitants, chassés par la flambée des loyers et la transformation des logements en meublés touristiques, ils désertent les centres-villes. »",
          why: "« Chassés par la flambée des loyers » = poussés à partir parce que les loyers augmentent fortement (« le coût du logement ») ; « déserter les centres-villes » = les quitter.",
          wrong: [
            "B : <b>piège</b> de l'inversion : la transformation en meublés touristiques est une <b>cause</b> du départ des habitants, pas une action des habitants eux-mêmes.",
            "C : information absente : l'auteur ne parle d'aucun refus des habitants."
          ],
          tip: "Repérez qui fait quoi : dans une construction passive (« chassés par… »), le complément introduit par « par » est la cause ou l'agent, et le sujet (les habitants) subit l'action." },
        { id: 17, q: "Les chartes « servent surtout d'alibi » aux collectivités. Cela veut dire qu'elles :",
          o: [
            "prouvent que les collectivités agissent efficacement contre le surtourisme.",
            "permettent aux collectivités de donner l'impression d'agir sans rien changer.",
            "obligent légalement les visiteurs à respecter les sites qu'ils fréquentent."
          ], a: 1,
          quote: "« faute de mesures contraignantes, elles servent surtout d'alibi à des collectivités qui ne veulent rien changer. »",
          why: "Un alibi est, au sens propre, une preuve d'innocence ; au sens figuré, « servir d'alibi », c'est servir de prétexte, de justification. Les chartes permettent aux collectivités de montrer qu'elles font « quelque chose » alors qu'elles « ne veulent rien changer ».",
          wrong: [
            "A : contresens : l'auteur critique les chartes (« Je ne crois pas davantage aux chartes ») ; il ne les juge pas efficaces.",
            "C : contradiction : « faute de mesures contraignantes » = justement, les chartes n'obligent à rien."
          ],
          tip: "Les expressions « servir d'alibi », « servir de prétexte », « se donner bonne conscience », « un effet d'annonce » expriment toutes la même critique : une action qui sert à paraître, pas à agir." },
        { id: 18, q: "Pourquoi l'auteur cite-t-il l'exemple de Port-Lavrec ?",
          o: [
            "Pour montrer que les quotas finissent par ruiner l'économie locale.",
            "Pour prouver qu'une réservation payante est la solution la plus efficace.",
            "Pour montrer qu'une limitation peut rester ouverte à tous sans nuire aux commerces."
          ], a: 2,
          quote: "« la réservation gratuite est devenue obligatoire […] et un tiers des places est attribué le jour même, sur place. Résultat : la fréquentation a baissé d'un quart, mais les commerçants n'ont constaté aucune perte »",
          why: "L'exemple suit la phrase « Des solutions justes existent pourtant ». Il répond aux deux craintes de la concession : l'exclusion (ici, la réservation est « gratuite » et des places sont gardées pour ceux qui n'ont pas réservé, donc « ouverte à tous ») et la perte économique (« aucune perte »).",
          wrong: [
            "A : contradiction : « les commerçants n'ont constaté aucune perte ».",
            "B : mauvais détail : la réservation est « gratuite ». L'auteur critique justement plus haut les quotas « payants »."
          ],
          tip: "Pour comprendre la fonction d'un exemple, regardez la phrase qui l'introduit (« Des solutions justes existent pourtant ») : l'exemple sert à la prouver. Mettez-le aussi en relation avec la concession qui précède." },
        { id: 19, q: "Quel est le ton général de cette tribune ?",
          o: [
            "Neutre et descriptif : l'auteur se contente d'exposer des faits.",
            "Engagé mais nuancé : l'auteur défend une position et propose des solutions.",
            "Alarmiste et résigné : l'auteur pense qu'il est déjà trop tard pour agir."
          ], a: 1,
          quote: "« Élus, cessez de mesurer le succès d'une saison au seul nombre d'entrées. Fixez des seuils, gardez des places pour ceux qui n'ont rien prévu […] »",
          why: "Le ton est <b>engagé</b> : première personne (« Je soutiens », « Je ne plaide pas »), interpellation directe (« Élus »), impératifs (« cessez », « fixez », « acceptons »). Il est aussi <b>nuancé</b> : l'auteur refuse un tourisme « réservé à une élite » (concession), et il est <b>constructif</b> : il donne un exemple de solution et des propositions concrètes.",
          wrong: [
            "A : l'auteur ne se contente pas d'exposer : il donne son opinion (« Je soutiens l'inverse ») et donne des ordres aux élus.",
            "C : il décrit des problèmes sérieux, mais il n'est pas résigné : « Des solutions justes existent pourtant », et sa conclusion est même optimiste (« un lieu qui a encore quelque chose à nous offrir »)."
          ],
          tip: "Indices d'un ton engagé : le « je », les verbes d'opinion, les impératifs, l'apostrophe (« Élus, … »). Pour distinguer « engagé » de « polémique » ou « alarmiste », cherchez la concession et les propositions : elles montrent un ton nuancé et constructif." }
      ]
    }
  ]
};
