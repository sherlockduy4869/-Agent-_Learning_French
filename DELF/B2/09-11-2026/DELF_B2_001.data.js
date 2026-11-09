// DELF B2 — Compréhension des écrits — Sujet 02
// Built with: node tools/build_exam.js DELF/B2/09-11-2026/DELF_B2_001.data.js
module.exports = {
  level: "B2",
  epreuve: "Compréhension des écrits",
  sujet: 2,
  durationMin: 60,
  storeKey: "delf-b2-ce-sujet02",
  exercises: [
    /* ------------------------------------------------------------------ */
    {
      kind: "Article de presse",
      theme: "Travail et organisation — la semaine de quatre jours dans les entreprises",
      points: 9,
      consigne: "Lisez le document puis répondez aux questions en choisissant la bonne réponse.",
      document: `
        <h3 class="doc-title">Semaine de quatre jours : les entreprises françaises passent au banc d'essai</h3>
        <p class="chapo"><span class="ev" data-q="1">Travailler quatre jours au lieu de cinq, sans perte de salaire : l'idée est désormais expérimentée par plusieurs centaines d'entreprises.</span> <span class="ev" data-q="1">Si les salariés se disent conquis, les économistes restent partagés sur ses effets à long terme.</span></p>
        <p>À Nantes, le vendredi, les bureaux d'Ondalys sont déserts. Depuis janvier 2025, les 80 salariés de cette PME de logiciels ne travaillent plus que du lundi au jeudi, sans aucune baisse de rémunération. « Au début, j'ai cru à un gadget, avoue Sophie Lebrun, cheffe de projet. <span class="ev" data-q="2">Aujourd'hui, le vendredi, je m'occupe de mon père, qui vit seul à la campagne. Avant, je devais poser des jours de congé pour cela.</span> »</p>
        <p>L'entreprise nantaise n'a rien d'une exception. D'après l'Observatoire du travail et des organisations, quelque 400 entreprises françaises ont adopté la semaine de quatre jours depuis 2023. Chez elles, les arrêts maladie auraient reculé de 30 % et les démissions de moitié. La productivité, elle, est restée stable. Ces résultats doivent néanmoins être nuancés : les entreprises qui se sont lancées sont volontaires, et souvent celles qui s'y prêtaient le mieux.</p>
        <p>Sous une même étiquette se cachent deux formules. <span class="ev" data-q="3">La première, dite « semaine compressée », conserve les 35 heures hebdomadaires mais les répartit sur quatre jours, ce qui allonge chaque journée de près de deux heures.</span> La seconde réduit véritablement le temps de travail, à 32 heures payées 35. Plus coûteuse, cette dernière oblige à repenser l'organisation en profondeur : réunions raccourcies, tâches inutiles supprimées.</p>
        <p>Pour Claire Dumontel, économiste du travail à l'université de Lille, le débat est souvent mal posé. « <span class="ev" data-q="4">La semaine de quatre jours n'est pas une recette miracle, mais ce n'est pas non plus une lubie. Elle fonctionne là où l'on peut réorganiser le travail.</span> » Elle met toutefois en garde contre un effet pervers : « <span class="ev" data-q="4">Si l'on se contente de faire en quatre jours ce que l'on faisait en cinq, on gagne un jour de repos, mais on le paie en fatigue.</span> » Dans un hôpital, un commerce ou une usine, ajoute-t-elle, un jour de moins pour chacun signifie surtout qu'il faut embaucher.</p>
        <p>La formule rencontre aussi des résistances. Certains dirigeants redoutent une baisse du chiffre d'affaires, sans que les premières données ne l'aient confirmée. <span class="ev" data-q="5">Mais le principal écueil est ailleurs : selon l'Observatoire, un salarié sur quatre continue de répondre à ses courriels pendant son jour de repos, le plus souvent pour suivre le rythme de clients qui, eux, travaillent cinq jours.</span></p>
        <p>Du côté du gouvernement, on avance à pas comptés. <span class="ev" data-q="6">Le ministère du Travail rappelle que la loi permet déjà de répartir les 35 heures sur quatre jours et écarte toute réduction généralisée du temps de travail, « qui ne peut se décider d'en haut ». Il a cependant lancé un appel à projets pour accompagner une cinquantaine de PME désireuses de tester la formule, à condition qu'elles acceptent d'en mesurer les effets.</span></p>
      `,
      source: "Texte rédigé pour l'entraînement. Personnes, entreprise et observatoire fictifs.",
      questions: [
        { id: 1, q: "Quel est le sujet principal de cet article ?",
          o: [
            "La réussite d'une PME nantaise qui a décidé de fermer ses bureaux le vendredi.",
            "Une organisation du travail de plus en plus testée, qui plaît aux salariés mais divise les experts.",
            "Une loi récente qui oblige les entreprises françaises à passer à quatre jours de travail."
          ], a: 1,
          quote: "« Travailler quatre jours au lieu de cinq, sans perte de salaire : l'idée est désormais expérimentée par plusieurs centaines d'entreprises. Si les salariés se disent conquis, les économistes restent partagés sur ses effets à long terme. »",
          why: "Le chapô résume l'article en deux temps : un phénomène qui se développe (« expérimentée par plusieurs centaines d'entreprises ») et un débat (« les économistes restent partagés »). La réponse B reformule : « de plus en plus testée » = « expérimentée par plusieurs centaines d'entreprises », « plaît aux salariés » = « les salariés se disent conquis », « divise les experts » = « les économistes restent partagés ». Le « Si » du chapô a ici une valeur d'opposition (= « alors que »).",
          wrong: [
            "A : <b>piège</b> de l'exemple d'ouverture : Ondalys n'est qu'une illustration. Le journaliste le dit lui-même : « L'entreprise nantaise n'a rien d'une exception. »",
            "C : information contredite : il n'existe aucune loi de ce type. Le ministère « écarte toute réduction généralisée du temps de travail » ; les entreprises sont « volontaires »."
          ],
          tip: "Pour trouver l'idée générale, partez du titre et du chapô, puis vérifiez avec le dernier paragraphe. L'anecdote du début (une entreprise, une personne) sert d'accroche : elle n'est jamais le sujet principal." },
        { id: 2, q: "Qu'est-ce que la nouvelle organisation a changé pour Sophie Lebrun ?",
          o: [
            "Elle peut aider un proche sans avoir à prendre sur ses congés.",
            "Elle travaille désormais depuis son domicile le vendredi.",
            "Elle a accepté une légère baisse de salaire contre un jour libre."
          ], a: 0,
          quote: "« Aujourd'hui, le vendredi, je m'occupe de mon père, qui vit seul à la campagne. Avant, je devais poser des jours de congé pour cela. »",
          why: "« Je m'occupe de mon père » = elle aide un proche. L'opposition « Aujourd'hui » / « Avant » montre le changement : elle n'a plus besoin de « poser des jours de congé », c'est-à-dire de « prendre sur ses congés ».",
          wrong: [
            "B : information absente et contradiction : le vendredi, « les bureaux […] sont déserts » parce que personne ne travaille ; il n'est pas question de télétravail.",
            "C : contradiction : les salariés travaillent quatre jours « sans aucune baisse de rémunération »."
          ],
          tip: "Les marqueurs temporels « avant / aujourd'hui / désormais / depuis » signalent un changement : la bonne réponse se trouve dans la comparaison entre les deux moments." },
        { id: 3, q: "Qu'est-ce qui caractérise la « semaine compressée » ?",
          o: [
            "Elle diminue le nombre d'heures travaillées sans toucher au salaire.",
            "Elle impose de réorganiser en profondeur les réunions et les tâches.",
            "Elle maintient la durée de travail hebdomadaire, au prix de journées plus longues."
          ], a: 2,
          quote: "« La première, dite « semaine compressée », conserve les 35 heures hebdomadaires mais les répartit sur quatre jours, ce qui allonge chaque journée de près de deux heures. »",
          why: "« Conserver les 35 heures hebdomadaires » = maintenir la durée de travail de la semaine ; « allonger chaque journée » = des journées plus longues. Le connecteur « mais » introduit le prix à payer de cette formule.",
          wrong: [
            "A : <b>piège</b> de la confusion entre les deux modèles : les « 32 heures payées 35 » correspondent à la <b>seconde</b> formule.",
            "B : <b>piège</b> de la reprise : « cette dernière » renvoie à la seconde formule, la plus coûteuse. C'est elle qui « oblige à repenser l'organisation en profondeur »."
          ],
          tip: "Quand un texte présente « la première… la seconde… », faites un petit tableau avec les caractéristiques de chacune. Pour une reprise comme « cette dernière », remontez au nom le plus proche : ici, la seconde formule." },
        { id: 4, q: "Que pense Claire Dumontel de la semaine de quatre jours ?",
          o: [
            "C'est une mode passagère qui ne résistera pas à l'épreuve des faits.",
            "Elle améliore la santé des salariés dans tous les secteurs d'activité.",
            "Elle peut donner de bons résultats, si elle ne se réduit pas à travailler plus intensément."
          ], a: 2,
          quote: "« La semaine de quatre jours n'est pas une recette miracle, mais ce n'est pas non plus une lubie. Elle fonctionne là où l'on peut réorganiser le travail. » […] « Si l'on se contente de faire en quatre jours ce que l'on faisait en cinq, on gagne un jour de repos, mais on le paie en fatigue. »",
          why: "L'économiste adopte une position équilibrée : la mesure « fonctionne » dans certaines conditions. Puis « toutefois » introduit une mise en garde : faire en quatre jours le travail de cinq, c'est intensifier le travail et le « payer en fatigue ». La réponse C réunit les deux idées : une réussite possible, à une condition.",
          wrong: [
            "A : contradiction : « ce n'est pas non plus une lubie » (= une idée bizarre, un caprice). Elle ne la considère pas comme une mode.",
            "B : <b>piège</b> de l'exagération : elle dit au contraire que, dans un hôpital, un commerce ou une usine, la mesure pose problème (« il faut embaucher ») ; et la santé des salariés n'est pas son argument."
          ],
          tip: "La double négation « ce n'est pas X, mais ce n'est pas non plus Y » exprime une position nuancée, entre deux extrêmes. Les distracteurs reprennent souvent l'un des deux extrêmes." },
        { id: 5, q: "Selon l'article, quel est le principal problème posé par la semaine de quatre jours ?",
          o: [
            "Une partie des salariés ne parvient pas à se couper du travail pendant son jour libre.",
            "Les entreprises concernées ont perdu une part importante de leur chiffre d'affaires.",
            "Les clients refusent de travailler avec les entreprises fermées le vendredi."
          ], a: 0,
          quote: "« Mais le principal écueil est ailleurs : selon l'Observatoire, un salarié sur quatre continue de répondre à ses courriels pendant son jour de repos »",
          why: "« Le principal écueil » = le principal problème. « Un salarié sur quatre » = « une partie des salariés » ; « continuer de répondre à ses courriels pendant son jour de repos » = ne pas parvenir à se couper du travail. Le connecteur « Mais » et l'adverbe « ailleurs » montrent que les difficultés citées avant sont secondaires.",
          wrong: [
            "B : <b>piège</b> de la crainte non confirmée : les dirigeants « redoutent » une baisse, « sans que les premières données ne l'aient confirmée ».",
            "C : <b>piège</b> de la déformation : les clients sont bien cités, mais comme la <b>cause</b> du problème (les salariés suivent leur rythme). Le texte ne dit nulle part qu'ils refusent de travailler avec ces entreprises."
          ],
          tip: "Distinguez une crainte (« redouter », « craindre que ») d'un fait établi. Et quand un texte annonce « le principal problème est ailleurs », tout ce qui précède est relégué au second plan." },
        { id: 6, q: "Quelle est la position du gouvernement ?",
          o: [
            "Il s'apprête à imposer par la loi la semaine de 32 heures à toutes les entreprises.",
            "Il refuse de généraliser la mesure, mais soutient quelques expérimentations encadrées.",
            "Il finance toutes les entreprises qui choisissent de passer à quatre jours de travail."
          ], a: 1,
          quote: "« Le ministère du Travail […] écarte toute réduction généralisée du temps de travail […]. Il a cependant lancé un appel à projets pour accompagner une cinquantaine de PME désireuses de tester la formule, à condition qu'elles acceptent d'en mesurer les effets. »",
          why: "« Écarter toute réduction généralisée » = refuser de généraliser. « Cependant » introduit une action limitée : accompagner « une cinquantaine de PME » (= quelques expérimentations) « à condition qu'elles acceptent d'en mesurer les effets » (= des expérimentations encadrées). L'expression « avancer à pas comptés » signifie avancer avec prudence.",
          wrong: [
            "A : contradiction : le ministère juge qu'une telle réduction « ne peut se décider d'en haut ».",
            "C : <b>piège</b> de l'exagération : l'aide concerne seulement « une cinquantaine de PME », et sous condition, pas « toutes les entreprises »."
          ],
          tip: "Pour la position des autorités, repérez les verbes de refus (« écarter », « exclure », « se garder de ») et les connecteurs de restriction (« cependant », « toutefois ») : la bonne réponse combine souvent un refus et une action limitée." }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      kind: "Entretien",
      theme: "Culture et patrimoine — les artothèques et le prêt d'œuvres d'art aux particuliers",
      points: 9,
      consigne: "Lisez le document puis répondez aux questions en choisissant la bonne réponse.",
      document: `
        <h3 class="doc-title">« Accrocher une œuvre chez soi, c'est accepter de vivre avec elle »</h3>
        <p class="chapo">Emprunter un tableau ou une photographie comme on emprunte un livre : c'est le principe des artothèques, des structures publiques méconnues. Marion Keller dirige celle des Quatre-Vents, à Poitiers, depuis 2018.</p>
        <p class="itw-q">Qu'est-ce qu'une artothèque, exactement ?</p>
        <p><span class="ev" data-q="7">C'est un lieu public qui possède une collection d'œuvres originales et qui les prête aux particuliers pour quelques semaines, contre une modeste cotisation.</span> <span class="ev" data-q="7">Nous ne sommes ni une galerie ni une boutique de reproductions. On ne vient pas chez nous pour acheter, et tout ce que nous prêtons est authentique.</span></p>
        <p class="itw-q">Qui sont vos emprunteurs ?</p>
        <p>Nous comptons environ 1 500 abonnés. <span class="ev" data-q="8">La moitié d'entre eux n'avaient jamais mis les pieds dans un musée avant de venir ici. C'est de ce chiffre-là que je suis la plus fière</span>, bien plus que du nombre de prêts, qui a pourtant doublé en cinq ans. Beaucoup nous disent que le musée les intimide.</p>
        <p class="itw-q">Que change le fait de vivre avec une œuvre ?</p>
        <p>Au musée, on passe trente secondes devant un tableau. Chez soi, on le voit matin et soir, sous des lumières différentes. Beaucoup d'emprunteurs nous racontent qu'ils ont d'abord détesté l'œuvre choisie… et qu'ils ont eu du mal à la rendre. <span class="ev" data-q="9">Ce regard répété transforme le rapport à l'art : on ne le consomme plus, on finit par dialoguer avec lui.</span></p>
        <p class="itw-q">On vous reproche parfois de faire courir des risques aux œuvres…</p>
        <p><span class="ev" data-q="10">La crainte est compréhensible, et je ne prétends pas que le risque soit nul : chaque année, deux ou trois cadres nous reviennent abîmés. Mais il faut la ramener à sa juste mesure.</span> <span class="ev" data-q="10">Nous ne prêtons ni pièces fragiles ni œuvres de grande valeur, chacune est assurée</span>, et nous conseillons chaque emprunteur. Une œuvre qui dort dans une réserve est parfaitement protégée, c'est vrai, mais personne ne la voit.</p>
        <p class="itw-q">Comment choisissez-vous les œuvres que vous achetez ?</p>
        <p>Notre règle est simple : <span class="ev" data-q="11">la moitié du budget d'acquisition va obligatoirement à des artistes de la région</span>, et nous n'achetons jamais une œuvre sans l'avoir vue en vrai. Nous ne cherchons pas non plus à plaire au plus grand nombre : il faut des œuvres qui dérangent.</p>
        <p class="itw-q">Quel est votre principal défi pour les années à venir ?</p>
        <p><span class="ev" data-q="12">On pourrait croire que c'est l'argent : notre budget a baissé de 10 % cette année. En réalité, le plus difficile, c'est de nous faire connaître. La plupart des habitants ignorent encore qu'ils peuvent repartir avec une gravure sous le bras pour le prix d'une place de cinéma.</span> Nous allons donc sortir de nos murs et installer des œuvres dans les mairies de quartier et les maisons de retraite.</p>
      `,
      source: "Entretien rédigé pour l'entraînement. Personne et établissement fictifs.",
      questions: [
        { id: 7, q: "Comment Marion Keller définit-elle une artothèque ?",
          o: [
            "Une structure publique qui prête des œuvres originales pour une durée limitée.",
            "Une galerie qui permet d'essayer une œuvre chez soi avant de l'acheter.",
            "Une boutique qui vend des reproductions d'œuvres célèbres à bas prix."
          ], a: 0,
          quote: "« C'est un lieu public qui possède une collection d'œuvres originales et qui les prête aux particuliers pour quelques semaines, contre une modeste cotisation. »",
          why: "« Un lieu public » = une structure publique ; « œuvres originales » = des œuvres authentiques, pas des copies ; « pour quelques semaines » = pour une durée limitée. Elle précise ensuite ce que l'artothèque n'est pas, ce qui confirme la définition.",
          wrong: [
            "B : <b>piège</b> : le mot « galerie » est dans le texte, mais dans une négation : « Nous ne sommes <b>ni</b> une galerie… ». Et « On ne vient pas chez nous pour acheter ».",
            "C : contradiction : elle refuse d'être « une boutique de reproductions » et affirme que « tout ce que nous prêtons est authentique »."
          ],
          tip: "La structure « ni X ni Y » élimine deux interprétations possibles. Les distracteurs reprennent volontiers ces mots (« galerie », « reproductions ») : vérifiez toujours s'ils sont dans une phrase affirmative ou négative." },
        { id: 8, q: "Que montre le chiffre dont Marion Keller est la plus fière ?",
          o: [
            "Le nombre de prêts a doublé grâce aux habitués des musées.",
            "La moitié des abonnés quittent l'artothèque au bout de cinq ans.",
            "L'artothèque attire un public peu habitué aux lieux culturels."
          ], a: 2,
          quote: "« La moitié d'entre eux n'avaient jamais mis les pieds dans un musée avant de venir ici. C'est de ce chiffre-là que je suis la plus fière »",
          why: "« Ne jamais avoir mis les pieds dans un musée » = ne jamais y être allé, donc être « peu habitué aux lieux culturels ». « Ce chiffre-là » renvoie à la phrase précédente : la moitié des abonnés. La suite le confirme : « le musée les intimide ».",
          wrong: [
            "A : <b>piège</b> du chiffre secondaire : le doublement des prêts est mentionné, mais elle en est <b>moins</b> fière (« bien plus que du nombre de prêts ») ; et rien ne dit qu'il est dû aux habitués des musées, c'est même le contraire.",
            "B : mauvais détail : « la moitié » et « cinq ans » appartiennent à deux informations différentes. Rien n'indique que des abonnés partent."
          ],
          tip: "Quand plusieurs chiffres se suivent, associez chacun à ce qu'il mesure. L'expression « ce chiffre-là » (démonstratif + « -là ») renvoie au chiffre qui vient d'être cité, pas à celui qui suit." },
        { id: 9, q: "Selon elle, quel effet produit le fait de garder une œuvre chez soi ?",
          o: [
            "La plupart des emprunteurs finissent par acheter l'œuvre empruntée.",
            "La voir tous les jours modifie peu à peu la relation à l'œuvre.",
            "Les emprunteurs la rendent souvent plus tôt, faute de l'apprécier."
          ], a: 1,
          quote: "« Chez soi, on le voit matin et soir, sous des lumières différentes. […] Ce regard répété transforme le rapport à l'art : on ne le consomme plus, on finit par dialoguer avec lui. »",
          why: "« Ce regard répété » = le fait de voir l'œuvre tous les jours ; « transformer le rapport à l'art » = modifier la relation à l'œuvre. « Finir par » indique une évolution progressive (« peu à peu »).",
          wrong: [
            "A : information absente, et même contraire au principe : « On ne vient pas chez nous pour acheter. »",
            "C : <b>piège</b> de la lecture incomplète : les emprunteurs ont « d'<b>abord</b> détesté l'œuvre », mais ensuite ils ont « eu du mal à la rendre ». Leur avis a changé."
          ],
          tip: "« D'abord… et ensuite / puis… » décrit une évolution : ne vous arrêtez pas à la première étape. Les points de suspension (« … et qu'ils ont eu du mal à la rendre ») marquent ici un effet de surprise, un retournement." },
        { id: 10, q: "Comment Marion Keller réagit-elle au reproche sur les risques pour les œuvres ?",
          o: [
            "Elle affirme qu'aucune œuvre n'a jamais été endommagée lors d'un prêt.",
            "Elle admet que des dégâts se produisent, mais juge le risque limité et maîtrisé.",
            "Elle reconnaît qu'il vaudrait mieux garder les œuvres dans les réserves."
          ], a: 1,
          quote: "« La crainte est compréhensible, et je ne prétends pas que le risque soit nul : chaque année, deux ou trois cadres nous reviennent abîmés. Mais il faut la ramener à sa juste mesure. Nous ne prêtons ni pièces fragiles ni œuvres de grande valeur, chacune est assurée »",
          why: "C'est un <b>accord partiel</b>. Concession : « La crainte est compréhensible », « je ne prétends pas que le risque soit nul » (= des dégâts se produisent). Puis « Mais » introduit son objection : « ramener à sa juste mesure » = relativiser ; les précautions (pas de pièces fragiles, assurance, conseils aux emprunteurs) montrent que le risque est « maîtrisé ».",
          wrong: [
            "A : contradiction : « deux ou trois cadres nous reviennent abîmés » chaque année.",
            "C : <b>piège</b> de la concession : elle admet qu'une œuvre en réserve « est parfaitement protégée, c'est vrai », mais « personne ne la voit ». C'est un argument <b>contre</b> la conservation en réserve."
          ],
          tip: "« C'est vrai, mais… », « je ne prétends pas que…, mais… » : la concession accorde un point à l'adversaire, l'opinion réelle vient après le « mais ». Ne confondez jamais ce qui est concédé avec la conclusion." },
        { id: 11, q: "Quel principe guide les achats de l'artothèque ?",
          o: [
            "Les œuvres sont choisies d'après les goûts de la majorité des abonnés.",
            "Les achats se font surtout sur catalogue, afin de réduire les coûts.",
            "Une part fixe du budget est réservée à des créateurs de la région."
          ], a: 2,
          quote: "« la moitié du budget d'acquisition va obligatoirement à des artistes de la région »",
          why: "« La moitié du budget […] obligatoirement » = une part fixe, imposée ; « budget d'acquisition » = l'argent destiné aux achats ; « artistes de la région » = créateurs locaux.",
          wrong: [
            "A : contradiction : « Nous ne cherchons pas non plus à plaire au plus grand nombre » ; elle veut même « des œuvres qui dérangent ».",
            "B : contradiction : « nous n'achetons jamais une œuvre sans l'avoir vue en vrai »."
          ],
          tip: "Les mots de la règle (« obligatoirement », « jamais », « toujours », « notre règle est simple ») signalent un principe. Vérifiez qu'une option ne transforme pas un « jamais » du texte en pratique habituelle." },
        { id: 12, q: "Quel est, pour Marion Keller, le principal défi de l'artothèque ?",
          o: [
            "Faire savoir aux habitants que ce service existe et qu'il est accessible.",
            "Compenser la forte baisse des subventions qu'elle a subie cette année.",
            "Ouvrir de nouvelles artothèques dans les maisons de retraite de la ville."
          ], a: 0,
          quote: "« On pourrait croire que c'est l'argent : notre budget a baissé de 10 % cette année. En réalité, le plus difficile, c'est de nous faire connaître. La plupart des habitants ignorent encore qu'ils peuvent repartir avec une gravure sous le bras pour le prix d'une place de cinéma. »",
          why: "« Se faire connaître » = faire savoir que le service existe. « Pour le prix d'une place de cinéma » montre qu'il est accessible, c'est-à-dire peu cher. « En réalité » introduit la vraie réponse, après une idée écartée.",
          wrong: [
            "B : <b>piège</b> du conditionnel réfuté : « On pourrait croire que c'est l'argent » est une hypothèse aussitôt rejetée par « En réalité ».",
            "C : mauvais détail : elle veut « installer des œuvres » dans les maisons de retraite, pas y ouvrir de nouvelles artothèques."
          ],
          tip: "« On pourrait croire que X… En réalité, Y » : X est une fausse piste, Y est la réponse. Même schéma avec « On pense souvent que… Pourtant… » ou « Contrairement à ce qu'on croit… »." }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      kind: "Texte argumentatif (tribune)",
      theme: "Médias et information — l'information en continu et les alertes d'actualité",
      points: 7,
      consigne: "Lisez le document puis répondez aux questions en choisissant la bonne réponse.",
      document: `
        <h3 class="doc-title">Éteignons les alertes : l'information mérite mieux que l'urgence</h3>
        <p>Il est 7 h 12 et mon téléphone vibre déjà : « ALERTE – Explosion dans un immeuble à Lyon ». À 7 h 40, on apprend qu'il s'agissait d'une fuite de gaz sans victime ; à 9 heures, que l'immeuble ne se trouvait même pas à Lyon. On présente volontiers l'information en continu comme un progrès démocratique : tout savoir, tout de suite, serait le privilège du citoyen moderne. <span class="ev" data-q="13">Je pense au contraire que la course à l'immédiateté appauvrit l'information, et qu'il est temps, pour les rédactions comme pour les lecteurs, de choisir la lenteur.</span></p>
        <p>D'abord, la vitesse se gagne aux dépens de la vérification. <span class="ev" data-q="14">Dans de nombreuses rédactions, on publie d'abord et on vérifie ensuite : on met la charrue avant les bœufs, puis on corrige discrètement.</span> Or un rectificatif n'a jamais le retentissement de l'alerte initiale. <span class="ev" data-q="15">Selon une enquête menée auprès de 2 000 lecteurs par l'Institut Médias et Société, seuls 15 % d'entre eux avaient vu la correction d'une information erronée qu'ils avaient pourtant lue.</span></p>
        <p>Ensuite, le flux permanent épuise ceux qu'il prétend informer. À force de recevoir des dizaines d'alertes par jour, on ne distingue plus l'essentiel de l'anecdotique : la démission d'un ministre et le score d'un match font vibrer le téléphone de la même façon. <span class="ev" data-q="16">Beaucoup finissent par décrocher. Ce n'est pas par paresse qu'ils s'informent moins, mais par saturation : un lecteur sur trois déclare aujourd'hui éviter volontairement l'actualité.</span> Et le citoyen qui fuit l'information laisse le champ libre aux rumeurs.</p>
        <p>Je ne plaide pas pour un retour au seul journal du soir. L'information rapide est parfois vitale : en cas d'inondation ou d'accident industriel, chaque minute compte. Je ne crois pas davantage aux encadrés « Vérification » que certains sites ajoutent en bas de leurs articles : <span class="ev" data-q="17">ils servent surtout à donner le change, en corrigeant après coup ce qu'il aurait fallu vérifier avant, sans rien changer à la logique de l'urgence.</span></p>
        <p>Des alternatives existent pourtant. <span class="ev" data-q="18">Le quotidien régional <i>L'Écho des Vallées</i> a supprimé l'an dernier toutes ses notifications, à l'exception des alertes de sécurité, et publie chaque soir une seule lettre, intitulée « Ce que l'on sait vraiment ». Ses lecteurs ont d'abord protesté ; un an plus tard, le nombre d'abonnés a progressé de 12 %, et les signalements d'erreurs ont presque disparu.</span></p>
        <p><span class="ev" data-q="19">Rédactions, cessez de confondre être le premier et être le meilleur. Réservez les alertes aux véritables urgences, signalez clairement ce qui n'est pas encore vérifié, donnez à vos journalistes le temps d'enquêter.</span> Et nous, lecteurs, désactivons quelques notifications : <span class="ev" data-q="19">une information juste qui arrive une heure plus tard vaut mieux que dix nouvelles immédiates, mais fausses.</span></p>
      `,
      source: "Tribune rédigée pour l'entraînement. Journal, institut, personnes et chiffres fictifs.",
      questions: [
        { id: 13, q: "Quelle est la thèse défendue par l'auteur ?",
          o: [
            "L'information en continu est un progrès, car elle permet au citoyen de tout savoir.",
            "Les médias devraient cesser de couvrir les faits divers et les accidents.",
            "La recherche de la rapidité nuit à la qualité de l'information."
          ], a: 2,
          quote: "« Je pense au contraire que la course à l'immédiateté appauvrit l'information, et qu'il est temps, pour les rédactions comme pour les lecteurs, de choisir la lenteur. »",
          why: "La thèse est introduite par « Je pense au contraire ». « La course à l'immédiateté » = la recherche de la rapidité ; « appauvrir l'information » = nuire à sa qualité.",
          wrong: [
            "A : <b>piège</b> de l'idée réfutée : c'est l'opinion courante que l'auteur rapporte (« On présente volontiers… », avec le conditionnel « serait ») pour la contester aussitôt (« au contraire »).",
            "B : information absente : l'auteur ne critique pas les sujets traités, mais la vitesse de publication. Il défend même l'information rapide en cas d'accident."
          ],
          tip: "Dans une introduction de tribune, l'idée reçue (« on présente volontiers », « on entend souvent », conditionnel de rumeur) précède la thèse (« je pense au contraire », « je soutiens »). La thèse est toujours du côté du « je »." },
        { id: 14, q: "Dans ce texte, « mettre la charrue avant les bœufs » signifie :",
          o: [
            "faire les choses dans le mauvais ordre, en publiant avant de vérifier.",
            "travailler lentement, en prenant le temps de bien faire chaque étape.",
            "faire porter à d'autres la responsabilité de ses propres erreurs."
          ], a: 0,
          quote: "« on publie d'abord et on vérifie ensuite : on met la charrue avant les bœufs, puis on corrige discrètement. »",
          why: "Normalement, les bœufs tirent la charrue : ils doivent donc être devant. Mettre la charrue avant les bœufs, c'est inverser l'ordre logique. Le contexte l'explique : les deux-points reprennent l'idée « on publie d'abord et on vérifie ensuite », alors qu'il faudrait faire l'inverse.",
          wrong: [
            "B : contresens : l'expression critique au contraire la précipitation, l'absence de vérification préalable.",
            "C : information absente : il n'est pas question de rejeter la faute sur d'autres ; les rédactions corrigent elles-mêmes, « discrètement »."
          ],
          tip: "Une expression idiomatique est souvent expliquée juste avant ou juste après, en particulier autour des deux-points. Cherchez la phrase « traduction » : ici, « on publie d'abord et on vérifie ensuite »." },
        { id: 15, q: "Que révèle l'enquête de l'Institut Médias et Société ?",
          o: [
            "15 % des informations publiées doivent ensuite être corrigées.",
            "La grande majorité des lecteurs ignorent qu'une information fausse a été rectifiée.",
            "Les lecteurs font moins confiance aux médias qui publient des rectificatifs."
          ], a: 1,
          quote: "« seuls 15 % d'entre eux avaient vu la correction d'une information erronée qu'ils avaient pourtant lue. »",
          why: "Si « seuls 15 % » ont vu la correction, 85 % ne l'ont pas vue : c'est « la grande majorité ». « Une information erronée » = une information fausse ; « la correction » = le rectificatif. L'enquête illustre la phrase précédente : un rectificatif « n'a jamais le retentissement de l'alerte initiale ».",
          wrong: [
            "A : <b>piège</b> du chiffre déplacé : 15 % désigne une proportion de <b>lecteurs</b>, pas une proportion d'informations corrigées.",
            "C : information absente : l'enquête ne mesure pas la confiance des lecteurs."
          ],
          tip: "« Seuls », « ne… que », « à peine » orientent un chiffre vers le peu : 15 % présenté avec « seuls » met en valeur les 85 % restants. Demandez-vous toujours : ce pourcentage, il porte sur qui ou sur quoi ?" },
        { id: 16, q: "Selon l'auteur, quelle est la conséquence de l'accumulation des alertes ?",
          o: [
            "Les lecteurs, devenus paresseux, ne cherchent plus à s'informer.",
            "Les lecteurs s'intéressent désormais plus au sport qu'à la politique.",
            "Saturés, certains lecteurs se détournent volontairement de l'actualité."
          ], a: 2,
          quote: "« Beaucoup finissent par décrocher. Ce n'est pas par paresse qu'ils s'informent moins, mais par saturation : un lecteur sur trois déclare aujourd'hui éviter volontairement l'actualité. »",
          why: "« Décrocher » (familier) = abandonner, cesser de suivre. « Par saturation » = parce qu'ils sont saturés ; « éviter volontairement l'actualité » = se détourner volontairement de l'actualité. « Un lecteur sur trois » justifie « certains lecteurs ».",
          wrong: [
            "A : <b>piège</b> de la cause refusée : « Ce n'est <b>pas</b> par paresse […], mais par saturation ». L'option reprend la cause que l'auteur écarte.",
            "B : mauvais détail : la démission d'un ministre et le score d'un match illustrent le fait que tout est mis au même niveau ; rien ne dit que les lecteurs préfèrent le sport."
          ],
          tip: "La structure « ce n'est pas X, mais Y » (ou « non pas X, mais Y ») sépare la mauvaise explication de la bonne. Les distracteurs reprennent souvent X, le terme rejeté." },
        { id: 17, q: "Les encadrés « Vérification » servent « à donner le change ». Cela signifie qu'ils permettent :",
          o: [
            "de faire croire qu'on se soucie de la vérification sans changer de pratiques.",
            "de remplacer systématiquement les informations fausses par des informations exactes.",
            "d'échanger des informations vérifiées avec d'autres rédactions."
          ], a: 0,
          quote: "« ils servent surtout à donner le change, en corrigeant après coup ce qu'il aurait fallu vérifier avant, sans rien changer à la logique de l'urgence. »",
          why: "« Donner le change » = tromper, créer une illusion, faire croire quelque chose de rassurant. Le contexte le confirme : ces encadrés donnent l'apparence du sérieux, mais ils ne changent rien « à la logique de l'urgence ». L'auteur le dit d'ailleurs clairement : « Je ne crois pas davantage » à ces encadrés.",
          wrong: [
            "B : exagération et contresens : ils corrigent « après coup », ce qui n'empêche pas l'erreur initiale de circuler ; et l'auteur les juge inefficaces.",
            "C : <b>piège</b> du sens littéral : « le change » n'a ici rien à voir avec un échange. Il s'agit d'une expression figée."
          ],
          tip: "Plusieurs expressions dénoncent une action de façade : « donner le change », « servir d'alibi », « faire illusion », « jeter de la poudre aux yeux », « un effet d'annonce ». Ne les traduisez jamais mot à mot." },
        { id: 18, q: "Pourquoi l'auteur cite-t-il l'exemple de L'Écho des Vallées ?",
          o: [
            "Pour montrer que les lecteurs refusent de renoncer aux notifications.",
            "Pour prouver qu'un média peut ralentir tout en gagnant des abonnés et en fiabilité.",
            "Pour montrer qu'il faudrait supprimer toutes les alertes, y compris de sécurité."
          ], a: 1,
          quote: "« Ses lecteurs ont d'abord protesté ; un an plus tard, le nombre d'abonnés a progressé de 12 %, et les signalements d'erreurs ont presque disparu. »",
          why: "L'exemple illustre la phrase qui l'introduit : « Des alternatives existent pourtant ». Le journal a ralenti (une seule lettre par soir) ; résultat, « le nombre d'abonnés a progressé » et « les signalements d'erreurs ont presque disparu » (= plus de fiabilité).",
          wrong: [
            "A : <b>piège</b> passé / présent : les lecteurs ont « d'<b>abord</b> protesté », mais « un an plus tard », les abonnés sont plus nombreux. La réaction initiale n'est pas le résultat final.",
            "C : contradiction : le journal a gardé les « alertes de sécurité », et l'auteur affirme que l'information rapide est « parfois vitale »."
          ],
          tip: "Pour comprendre la fonction d'un exemple, lisez la phrase qui l'annonce (« Des alternatives existent pourtant ») et regardez le résultat final (« un an plus tard… »), pas seulement la première réaction." },
        { id: 19, q: "Quel est le ton général de cette tribune ?",
          o: [
            "Polémique et agressif : l'auteur accuse les journalistes de mentir volontairement.",
            "Neutre et informatif : l'auteur expose les avantages et les limites de l'information en continu.",
            "Engagé et constructif : l'auteur critique une pratique et propose d'autres façons de faire."
          ], a: 2,
          quote: "« Rédactions, cessez de confondre être le premier et être le meilleur. Réservez les alertes aux véritables urgences, signalez clairement ce qui n'est pas encore vérifié, donnez à vos journalistes le temps d'enquêter. »",
          why: "Le ton est <b>engagé</b> : première personne (« Je pense », « Je ne plaide pas »), apostrophe (« Rédactions, »), impératifs (« cessez », « réservez », « désactivons »). Il est aussi <b>constructif</b> : l'auteur cite une alternative qui fonctionne et formule des propositions concrètes. Sa concession (l'information rapide est « parfois vitale ») montre qu'il reste nuancé.",
          wrong: [
            "A : exagération : l'auteur critique la précipitation, pas une volonté de mentir ; les erreurs viennent de l'urgence, et il demande qu'on donne aux journalistes « le temps d'enquêter ».",
            "B : l'auteur ne se contente pas d'exposer : il prend clairement position (« Je pense au contraire ») et donne des consignes aux rédactions et aux lecteurs."
          ],
          tip: "Pour le ton, relevez les indices : « je » + verbes d'opinion et impératifs = engagé ; concession + propositions = nuancé, constructif ; accusations et vocabulaire violent = polémique ; absence de « je » et de jugement = neutre." }
      ]
    }
  ]
};
