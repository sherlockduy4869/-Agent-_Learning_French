// TCF tout public — Maîtrise des structures de la langue — niveau B2 — Sujet 1
// Built with: node tools/build_exam.js TCF_Grammar/B2/09-11-2026/TCF_B2_001.data.js
module.exports = {
  test: "TCF",
  level: "B2",
  epreuve: "Maîtrise des structures de la langue",
  sujet: 1,
  durationMin: 15,
  storeKey: "tcf-b2-msl-sujet1",
  exercises: [
    {
      title: "Questions 1 à 18",
      kind: "Grammaire, formulation et vocabulaire",
      theme: "Prépositions de lieu, pronoms (lui, en, double pronom), relatifs (dont, auquel), subjonctif, systèmes hypothétiques, concordance des temps, accord du participe, concession et conséquence, inversion, quand bien même, collocations et registre",
      points: 18,
      consigne: "Choisissez la bonne réponse. Les questions sont classées par ordre de difficulté croissante.",
      questions: [
        { id: 1, lvl: "A2", point: "Préposition + nom de pays (au / en)",
          q: `L'année prochaine, notre entreprise va ouvrir une nouvelle filiale <span class="gap"></span> Portugal, près de Porto.`,
          o: ["en", "au", "à", "dans"], a: 1,
          quote: "« L'année prochaine, notre entreprise va ouvrir une nouvelle filiale <b>au</b> Portugal, près de Porto. »",
          why: "Devant un nom de pays masculin qui commence par une consonne, on emploie <i>au</i> (= à + le) : <i>le Portugal</i> → <i><b>au</b> Portugal</i>, comme <i>au Canada</i>, <i>au Japon</i>.",
          wrong: [
            "A : <i>en</i> s'emploie devant un pays féminin (<i>en France</i>, <i>en Espagne</i>) ou masculin commençant par une voyelle (<i>en Iran</i>). <i>Portugal</i> est masculin et commence par une consonne.",
            "C : <i>à</i> s'emploie devant un nom de ville (<i>à Porto</i>, <i>à Lisbonne</i>), pas devant un nom de pays.",
            "D : <i>dans</i> n'introduit pas un nom de pays sans article ; on ne dit pas <i>dans Portugal</i>. <b>Piège</b> : calque de l'anglais <i>in</i>."
          ],
          tip: "Ville → <i>à</i> · pays féminin (souvent en -e) ou commençant par une voyelle → <i>en</i> · pays masculin → <i>au</i> · pays pluriel → <i>aux</i> (<i>aux États-Unis</i>)." },

        { id: 2, lvl: "A2", point: "Pronom COI lui (téléphoner à quelqu'un)",
          q: `<span class="dlg">— Tu as prévenu le directeur du retard de la livraison ?</span><span class="dlg">— Pas encore, je vais <span class="gap"></span> téléphoner cet après-midi.</span>`,
          o: ["le", "y", "leur", "lui"], a: 3,
          quote: "« Pas encore, je vais <b>lui</b> téléphoner cet après-midi. »",
          why: "On dit <i>téléphoner <b>à</b> quelqu'un</i> : le verbe se construit avec un complément d'objet indirect (COI). Pour une seule personne (<i>le directeur</i>), le pronom COI est <i><b>lui</b></i>.",
          wrong: [
            "A : <i>le</i> est un pronom COD ; or <i>téléphoner</i> ne se construit pas avec un COD (on ne dit pas <i>téléphoner quelqu'un</i>). <b>Piège</b> : influence de <i>appeler quelqu'un</i> (« je vais l'appeler »).",
            "B : <i>y</i> remplace un complément introduit par <i>à</i> quand il désigne une chose ou un lieu, pas une personne.",
            "C : <i>leur</i> est bien un pronom COI, mais au pluriel ; ici, il n'y a qu'un directeur."
          ],
          tip: "Verbe + <i>à</i> + personne (<i>parler, téléphoner, répondre, écrire à…</i>) → <i>lui</i> (singulier) / <i>leur</i> (pluriel). Verbe + COD (<i>appeler, voir, aider quelqu'un</i>) → <i>le, la, les</i>." },

        { id: 3, lvl: "B1", point: "Pronom en (parler de quelque chose)",
          q: `Ce projet de recherche est passionnant : toute l'équipe <span class="gap"></span> parle avec enthousiasme depuis des semaines.`,
          o: ["en", "y", "le", "lui"], a: 0,
          quote: "« Ce projet de recherche est passionnant : toute l'équipe <b>en</b> parle avec enthousiasme depuis des semaines. »",
          why: "On dit <i>parler <b>de</b> quelque chose</i>. Le pronom <i><b>en</b></i> remplace un complément introduit par <i>de</i> : <i>parler de ce projet</i> → <i>en parler</i>.",
          wrong: [
            "B : <i>y</i> remplace un complément introduit par <i>à</i> (<i>penser à ce projet</i> → <i>y penser</i>), pas par <i>de</i>.",
            "C : <i>le</i> est un pronom COD ; or <i>parler</i> n'a pas de COD ici, il se construit avec <i>de</i>.",
            "D : <i>lui</i> remplace <i>à + personne</i> : <i>l'équipe lui parle</i> signifierait qu'elle s'adresse à quelqu'un, pas qu'elle parle du projet."
          ],
          tip: "Test rapide : cherchez la préposition du verbe. <i>de</i> + chose → <i>en</i> (<i>parler de, avoir besoin de, se souvenir de</i>) ; <i>à</i> + chose → <i>y</i> (<i>penser à, participer à</i>)." },

        { id: 4, lvl: "B1", point: "Subjonctif après il faut que",
          q: `Pour obtenir la subvention, il faut que l'association <span class="gap"></span> son dossier complet avant la fin du mois.`,
          o: ["remet", "remettra", "remette", "remettrait"], a: 2,
          quote: "« Pour obtenir la subvention, il faut que l'association <b>remette</b> son dossier complet avant la fin du mois. »",
          why: "<i>Il faut que</i> exprime une obligation : il est toujours suivi du subjonctif. <i>Remettre</i> → <i>que l'association <b>remette</b></i>.",
          wrong: [
            "A : <i>remet</i> est au présent de l'indicatif ; après <i>il faut que</i>, l'indicatif est impossible. <b>Piège</b> : à l'oral, <i>remet</i> et <i>remette</i> se prononcent presque pareil, mais l'écrit les distingue.",
            "B : <i>remettra</i> est au futur de l'indicatif : même si l'action est à venir, <i>il faut que</i> impose le subjonctif.",
            "D : <i>remettrait</i> est au conditionnel, mode qui ne s'emploie pas après <i>il faut que</i>."
          ],
          tip: "Obligation, volonté, sentiment → subjonctif : <i>il faut que, il est nécessaire que, je veux que, je souhaite que, je suis content que</i>… L'idée de futur ne change rien au mode." },

        { id: 5, lvl: "B1", point: "Si + imparfait → conditionnel présent",
          q: `Si la mairie <span class="gap"></span> davantage dans les transports en commun, moins d'habitants prendraient leur voiture pour aller travailler.`,
          o: ["investissait", "investirait", "investit", "investisse"], a: 0,
          quote: "« Si la mairie <b>investissait</b> davantage dans les transports en commun, moins d'habitants prendraient leur voiture pour aller travailler. »",
          why: "C'est une hypothèse sur le présent : la conséquence est au conditionnel présent (<i>prendraient</i>), donc la proposition introduite par <i>si</i> est à l'<b>imparfait</b> : <i>si la mairie <b>investissait</b></i>.",
          wrong: [
            "B : <i>investirait</i> est au conditionnel. <b>Piège</b> classique : le conditionnel ne s'emploie jamais directement après le <i>si</i> d'hypothèse (pas de « si + -rait »).",
            "C : <i>investit</i> est au présent : <i>si + présent</i> appelle un futur (<i>prendront</i>), pas le conditionnel <i>prendraient</i>.",
            "D : <i>investisse</i> est au subjonctif, mode qui ne s'emploie pas après <i>si</i>."
          ],
          tip: "Les trois systèmes : <i>si</i> + présent → futur · <i>si</i> + imparfait → conditionnel présent · <i>si</i> + plus-que-parfait → conditionnel passé. Jamais de conditionnel après <i>si</i>." },

        { id: 6, lvl: "B1", point: "Pronom relatif dont (parler de)",
          q: `Voici le rapport <span class="gap"></span> le directeur nous a parlé lors de la dernière réunion d'équipe.`,
          o: ["que", "où", "qui", "dont"], a: 3,
          quote: "« Voici le rapport <b>dont</b> le directeur nous a parlé lors de la dernière réunion d'équipe. »",
          why: "Dans la relative, le verbe est <i>parler <b>de</b></i> : <i>le directeur nous a parlé <b>de</b> ce rapport</i>. Le relatif qui remplace un complément introduit par <i>de</i> est <i><b>dont</b></i>.",
          wrong: [
            "A : <i>que</i> remplace un COD ; or on ne dit pas <i>parler quelque chose</i> dans ce sens : <i>parler</i> se construit avec <i>de</i>. <b>Piège</b> : <i>que</i> est le relatif « par défaut » des apprenants.",
            "B : <i>où</i> remplace un complément de lieu ou de temps ; <i>le rapport</i> n'est ni un lieu ni un moment.",
            "C : <i>qui</i> remplace le sujet du verbe ; ici, le sujet de <i>a parlé</i> est déjà <i>le directeur</i>."
          ],
          tip: "Pour choisir le relatif, reconstruisez la phrase simple : <i>le directeur a parlé <b>de</b> ce rapport</i> → <i>de</i> + nom → <i>dont</i>. Sujet → <i>qui</i> ; COD → <i>que</i> ; lieu/temps → <i>où</i>." },

        { id: 7, lvl: "B2", point: "Concordance des temps : futur dans le passé (conditionnel présent)",
          q: `<span class="dlg">— Pourquoi la nouvelle réglementation n'est-elle toujours pas appliquée ?</span><span class="dlg">— C'est étonnant : l'an dernier, le ministre avait annoncé qu'elle <span class="gap"></span> en vigueur au printemps suivant.</span>`,
          o: ["entrera", "entrerait", "entre", "est entrée"], a: 1,
          quote: "« C'est étonnant : l'an dernier, le ministre avait annoncé qu'elle <b>entrerait</b> en vigueur au printemps suivant. »",
          why: "Le verbe introducteur est au passé (<i>avait annoncé</i>) et l'action annoncée était future par rapport à ce moment passé. Au discours indirect, le futur devient alors un <b>conditionnel présent</b> (futur dans le passé) : <i>« elle entrera » → il avait annoncé qu'elle <b>entrerait</b></i>. L'indice <i>au printemps suivant</i> confirme ce point de vue passé.",
          wrong: [
            "A : <i>entrera</i> conserve le futur des paroles d'origine. <b>Piège</b> : après un verbe introducteur au passé, on fait la concordance ; d'ailleurs ce printemps est déjà passé, puisque la réglementation n'est « toujours pas appliquée ».",
            "C : <i>entre</i> est au présent : il ne situe pas l'action dans l'avenir du moment de l'annonce et ne respecte pas la concordance.",
            "D : <i>est entrée</i> affirme que la réglementation est déjà en vigueur, ce qui contredit la question (<i>n'est toujours pas appliquée</i>) ; de plus, le passé composé ne marque pas l'avenir."
          ],
          tip: "Concordance au passé : présent → imparfait · passé composé → plus-que-parfait · futur → conditionnel présent · futur antérieur → conditionnel passé. Exemple : <i>« Je viendrai » → Il a dit qu'il viendrait.</i>" },

        { id: 8, lvl: "B2", point: "Subjonctif après bien que",
          q: `Bien que la direction <span class="gap"></span> des efforts pour améliorer les conditions de travail, les salariés restent mécontents.`,
          o: ["a fait", "fera", "ait fait", "avait fait"], a: 2,
          quote: "« Bien que la direction <b>ait fait</b> des efforts pour améliorer les conditions de travail, les salariés restent mécontents. »",
          why: "<i>Bien que</i> exprime la concession et est <b>toujours suivi du subjonctif</b>. L'action (faire des efforts) est accomplie avant le constat présent, d'où le subjonctif passé : <i>bien qu'elle <b>ait fait</b></i>.",
          wrong: [
            "A : <i>a fait</i> est au passé composé de l'indicatif. <b>Piège</b> : le fait est réel, mais <i>bien que</i> impose quand même le subjonctif.",
            "B : <i>fera</i> est au futur de l'indicatif, impossible après <i>bien que</i>.",
            "D : <i>avait fait</i> est au plus-que-parfait de l'indicatif, également impossible après <i>bien que</i>."
          ],
          tip: "Conjonctions toujours suivies du subjonctif : <i>bien que, quoique, pour que, afin que, à condition que, sans que, à moins que, avant que, jusqu'à ce que</i>. Attention : <i>après que</i> → indicatif." },

        { id: 9, lvl: "B2", point: "Si + plus-que-parfait → conditionnel passé",
          q: `Si l'entreprise avait anticipé la hausse des prix de l'énergie, elle <span class="gap"></span> d'importantes pertes l'an dernier.`,
          o: ["aurait évité", "évitait", "avait évité", "éviterait"], a: 0,
          quote: "« Si l'entreprise avait anticipé la hausse des prix de l'énergie, elle <b>aurait évité</b> d'importantes pertes l'an dernier. »",
          why: "C'est une hypothèse sur le passé (irréel du passé) : <i>si</i> + plus-que-parfait (<i>avait anticipé</i>) → <b>conditionnel passé</b> dans la principale. L'indice <i>l'an dernier</i> situe la conséquence dans le passé : <i>elle <b>aurait évité</b></i>.",
          wrong: [
            "B : <i>évitait</i> est à l'imparfait de l'indicatif ; la principale d'un système hypothétique demande le conditionnel.",
            "C : <i>avait évité</i> reprend le plus-que-parfait de la subordonnée. <b>Piège</b> : le plus-que-parfait va après <i>si</i>, pas dans la principale.",
            "D : <i>éviterait</i> (conditionnel présent) exprimerait une conséquence présente ; il est incompatible avec <i>l'an dernier</i>."
          ],
          tip: "Irréel du passé : <i>Si j'avais su, je serais venu.</i> Retenez la formule « si + avait/était + participe → aurait/serait + participe »." },

        { id: 10, lvl: "B2", point: "Pronom relatif composé auquel (participer à)",
          q: `Le colloque <span class="gap"></span> nous avons participé le mois dernier réunissait des chercheurs venus de toute l'Europe.`,
          o: ["duquel", "lequel", "dont", "auquel"], a: 3,
          quote: "« Le colloque <b>auquel</b> nous avons participé le mois dernier réunissait des chercheurs venus de toute l'Europe. »",
          why: "Le verbe de la relative est <i>participer <b>à</b></i> : <i>nous avons participé <b>à</b> ce colloque</i>. Avec la préposition <i>à</i>, on emploie le relatif composé <i>à + lequel</i>, contracté en <i><b>auquel</b></i> (antécédent masculin singulier : <i>le colloque</i>).",
          wrong: [
            "A : <i>duquel</i> = <i>de + lequel</i> ; il conviendrait à un verbe construit avec <i>de</i> (<i>près duquel</i>), pas à <i>participer à</i>.",
            "B : <i>lequel</i> sans préposition ne peut pas remplacer un complément introduit par <i>à</i>.",
            "C : <i>dont</i> remplace un complément introduit par <i>de</i>. <b>Piège</b> : <i>dont</i> est fréquent, mais on ne dit pas <i>participer de</i> dans ce sens."
          ],
          tip: "<i>à</i> + lequel → <i>auquel, à laquelle, auxquels, auxquelles</i> ; <i>de</i> + lequel → <i>duquel, de laquelle, desquels, desquelles</i>. Accordez avec l'antécédent et vérifiez la préposition du verbe." },

        { id: 11, lvl: "B2", point: "Ordre des doubles pronoms (le lui)",
          q: `<span class="inst">Quelle phrase est correcte ?</span>`,
          o: [
            "Ce rapport, je lui l'ai envoyé hier soir.",
            "Ce rapport, je le lui ai envoyé hier soir.",
            "Ce rapport, je l'ai lui envoyé hier soir.",
            "Ce rapport, je lui en ai envoyé hier soir."
          ], a: 1,
          quote: "« Ce rapport, je <b>le lui</b> ai envoyé hier soir. »",
          why: "Avec deux pronoms compléments devant le verbe, quand le COI est à la 3<sup>e</sup> personne (<i>lui, leur</i>), l'ordre est <b>COD avant COI</b> : <i>le / la / les</i> + <i>lui / leur</i>. Les deux pronoms se placent devant l'auxiliaire : <i>je <b>le lui</b> ai envoyé</i>.",
          wrong: [
            "A : <i>lui l'</i> inverse l'ordre : avec <i>lui</i>, le pronom COD vient en premier. <b>Piège</b> : avec <i>me, te, nous, vous</i>, c'est l'inverse (<i>je te l'ai envoyé</i>), d'où la confusion.",
            "C : au passé composé, les pronoms se placent devant l'auxiliaire, jamais entre l'auxiliaire et le participe.",
            "D : <i>en</i> remplace une quantité ou un nom précédé de <i>de / du / des</i> ; or le COD est défini (<i>ce rapport</i>), il faut donc <i>le</i>."
          ],
          tip: "Ordre devant le verbe : <i>me / te / se / nous / vous</i> → <i>le / la / les</i> → <i>lui / leur</i> → <i>y</i> → <i>en</i>. Exemples : <i>il me le donne</i> ; <i>il le lui donne</i> ; <i>il leur en donne</i>." },

        { id: 12, lvl: "B2", point: "Accord du participe passé avec le COD antéposé",
          q: `<span class="inst">Quelle phrase est correcte ?</span>`,
          o: [
            "Les solutions que nous avons proposées ont été retenues par le comité.",
            "Les solutions que nous avons proposé ont été retenues par le comité.",
            "Les solutions que nous avons proposées ont été retenus par le comité.",
            "Les solutions que nous avons proposés ont été retenues par le comité."
          ], a: 0,
          quote: "« Les solutions que nous avons <b>proposées</b> ont été <b>retenues</b> par le comité. »",
          why: "Avec l'auxiliaire <i>avoir</i>, le participe passé s'accorde avec le COD <b>placé avant le verbe</b>. Ici le COD est <i>que</i>, dont l'antécédent est <i>les solutions</i> (féminin pluriel) : <i>proposées</i>. Avec <i>être</i> (voix passive), le participe s'accorde avec le sujet <i>les solutions</i> : <i>retenues</i>.",
          wrong: [
            "B : <i>proposé</i> reste invariable. <b>Piège</b> : on oublie souvent l'accord parce que le COD (<i>que</i>) est placé avant le verbe et ne « se voit » pas.",
            "C : <i>retenus</i> est au masculin ; à la voix passive, le participe s'accorde avec le sujet féminin pluriel <i>les solutions</i>.",
            "D : <i>proposés</i> est au masculin ; l'antécédent de <i>que</i>, <i>les solutions</i>, est féminin."
          ],
          tip: "Avec <i>avoir</i>, posez la question « quoi ? » : si la réponse (le COD) est <b>avant</b> le verbe (<i>que, le, la, les</i>…), accordez avec elle ; si elle est après ou absente, pas d'accord." },

        { id: 13, lvl: "B2", point: "Concession : en dépit de + nom",
          q: `<span class="gap"></span> la grève des transports, la plupart des salariés sont venus travailler ce matin.`,
          o: ["Bien que", "Pourtant", "En dépit de", "Quoique"], a: 2,
          quote: "« <b>En dépit de</b> la grève des transports, la plupart des salariés sont venus travailler ce matin. »",
          why: "Le blanc est suivi d'un <b>groupe nominal</b> (<i>la grève des transports</i>), pas d'une proposition avec un verbe conjugué. Pour exprimer la concession devant un nom, on emploie une locution prépositive : <i><b>en dépit de</b></i> (= <i>malgré</i>).",
          wrong: [
            "A : <i>bien que</i> est une conjonction : elle introduit une proposition au subjonctif (<i>bien qu'il y ait une grève</i>), pas un simple nom.",
            "B : <i>pourtant</i> est un adverbe qui relie deux propositions (<i>Il y avait une grève ; pourtant, ils sont venus</i>) ; il ne peut pas introduire un groupe nominal.",
            "D : <i>quoique</i> est, comme <i>bien que</i>, une conjonction suivie d'un verbe au subjonctif. <b>Piège</b> : même sens, mais pas la même construction."
          ],
          tip: "Concession : devant un <b>nom</b> → <i>malgré, en dépit de</i> ; devant une <b>proposition</b> → <i>bien que, quoique</i> + subjonctif ; entre deux phrases → <i>pourtant, cependant, néanmoins</i>." },

        { id: 14, lvl: "B2", point: "Collocation : soulever / susciter des questions",
          q: `Ce rapport <b>soulève</b> de nombreuses questions sur la gestion des fonds publics.<span class="inst" style="margin-top:8px">Quel mot peut remplacer le mot en gras sans changer le sens de la phrase ?</span>`,
          o: ["élève", "suscite", "augmente", "monte"], a: 1,
          quote: "« Ce rapport <b>suscite</b> de nombreuses questions sur la gestion des fonds publics. »",
          why: "<i>Soulever des questions</i> signifie « les faire naître, les provoquer ». Le verbe <i><b>susciter</b></i> a exactement ce sens et se combine naturellement avec <i>questions</i> (<i>susciter des questions, des doutes, des réactions</i>).",
          wrong: [
            "A : <i>élever</i> signifie « mettre plus haut » ou « éduquer » (<i>élever un enfant</i>). <b>Piège</b> : paronyme de <i>soulever</i>, mais on ne dit pas <i>élever des questions</i>.",
            "C : <i>augmenter</i> veut dire « rendre plus grand en quantité » ; c'est un calque de l'anglais <i>to raise</i>, qui ne fonctionne pas avec <i>questions</i>.",
            "D : <i>monter</i> désigne un mouvement vers le haut ou le fait d'organiser (<i>monter un projet</i>) ; <i>monter des questions</i> n'existe pas."
          ],
          tip: "Apprenez les noms avec leurs verbes : <i>soulever / susciter / poser une question</i> ; <i>émettre un doute</i> ; <i>formuler une critique</i> ; <i>prendre une décision</i>. Méfiez-vous des traductions mot à mot de l'anglais." },

        { id: 15, lvl: "C1", point: "Quoi que + subjonctif (vs quoique)",
          q: `<span class="gap"></span> vous fassiez pour convaincre le jury, votre projet sera évalué selon les mêmes critères que les autres.`,
          o: ["Quoique", "Quel que", "Bien que", "Quoi que"], a: 3,
          quote: "« <b>Quoi que</b> vous fassiez pour convaincre le jury, votre projet sera évalué selon les mêmes critères que les autres. »",
          why: "<i>Faire</i> a besoin d'un complément d'objet : il manque ici « quelque chose ». <i><b>Quoi que</b></i> (en deux mots) signifie « quelle que soit la chose que » et joue précisément ce rôle de COD : <i>quoi que vous fassiez</i> = <i>quelle que soit la chose que vous fassiez</i>. Il est suivi du subjonctif (<i>fassiez</i>).",
          wrong: [
            "A : <i>quoique</i> (en un mot) signifie <i>bien que</i> : <i>quoique vous fassiez</i> laisserait <i>faire</i> sans complément. <b>Piège</b> : les deux formes se prononcent de la même façon.",
            "B : <i>quel que</i> s'accorde avec un nom et s'emploie avec <i>être</i> (<i>quel que soit votre choix</i>), pas avec un autre verbe.",
            "C : <i>bien que</i> exprime une concession et ne peut pas servir de COD à <i>faire</i> : <i>bien que vous fassiez</i> est incomplet."
          ],
          tip: "Test : remplacez par <i>bien que</i>. Si la phrase reste correcte → <i>quoique</i> en un mot. Si elle devient incomplète (il manque « quelque chose ») → <i>quoi que</i> en deux mots." },

        { id: 16, lvl: "C1", point: "Inversion du sujet après à peine",
          q: `<span class="inst">Quelle phrase est correcte ?</span>`,
          o: [
            "À peine la réunion avait commencé-elle que l'alarme incendie s'est déclenchée.",
            "À peine avait la réunion commencé que l'alarme incendie s'est déclenchée.",
            "À peine la réunion avait-elle commencé que l'alarme incendie s'est déclenchée.",
            "À peine que la réunion avait commencé, l'alarme incendie s'est déclenchée."
          ], a: 2,
          quote: "« À peine la réunion <b>avait-elle</b> commencé que l'alarme incendie s'est déclenchée. »",
          why: "En tête de phrase, <i>à peine</i> entraîne l'<b>inversion du sujet</b>, et la seconde partie est introduite par <i>que</i>. Quand le sujet est un nom (<i>la réunion</i>), on fait une inversion complexe : le nom reste devant le verbe et un pronom de reprise (<i>elle</i>) se place après l'<b>auxiliaire</b> : <i>la réunion <b>avait-elle</b> commencé</i>.",
          wrong: [
            "A : le pronom de reprise est placé après le participe ; aux temps composés, il se place après l'auxiliaire (<i>avait-elle commencé</i>).",
            "B : on ne peut pas placer un nom sujet entre l'auxiliaire et le participe ; avec un sujet nominal, il faut l'inversion complexe avec pronom de reprise.",
            "D : <i>à peine que</i> n'existe pas : <i>que</i> introduit la seconde proposition, pas la première. <b>Piège</b> : calque de constructions comme <i>dès que</i>."
          ],
          tip: "Adverbes qui entraînent l'inversion en tête de phrase (registre soutenu) : <i>à peine… que</i>, <i>aussi</i> (= donc), <i>sans doute</i>, <i>peut-être</i>, <i>ainsi</i>. Sujet nom → <i>Nom + verbe/auxiliaire-pronom</i>." },

        { id: 17, lvl: "C1", point: "Quand bien même + conditionnel",
          q: `Quand bien même le projet <span class="gap"></span> tous les financements nécessaires, les travaux ne pourraient pas être achevés avant 2030.`,
          o: ["obtiendrait", "obtienne", "obtient", "obtenait"], a: 0,
          quote: "« Quand bien même le projet <b>obtiendrait</b> tous les financements nécessaires, les travaux ne pourraient pas être achevés avant 2030. »",
          why: "<i>Quand bien même</i> (= <i>même si</i>, registre soutenu) exprime une hypothèse concessive et se construit avec le <b>conditionnel</b> : <i>quand bien même le projet <b>obtiendrait</b></i>. La principale est, elle aussi, au conditionnel (<i>ne pourraient pas</i>).",
          wrong: [
            "B : <i>obtienne</i> est au subjonctif. <b>Piège</b> : on pense aux conjonctions de concession comme <i>bien que</i>, mais <i>quand bien même</i> ne prend pas le subjonctif.",
            "C : <i>obtient</i> est au présent de l'indicatif ; il ne marque pas l'hypothèse que demande <i>quand bien même</i>.",
            "D : <i>obtenait</i> est à l'imparfait. <b>Piège</b> : c'est le temps de <i>même si</i> (<i>même s'il obtenait</i>), mais <i>quand bien même</i> exige le conditionnel."
          ],
          tip: "<i>Même si</i> + imparfait = <i>quand bien même</i> + conditionnel : <i>Même s'il pleuvait, je sortirais</i> = <i>Quand bien même il pleuvrait, je sortirais.</i>" },

        { id: 18, lvl: "C1", point: "Registre soutenu : ne saurait + infinitif",
          q: `<span class="inst">Quelle formulation est la plus soutenue ?</span>`,
          o: [
            "On peut pas accepter ces conditions.",
            "Nous ne saurions accepter de telles conditions.",
            "Nous ne pouvons pas accepter ces conditions.",
            "Ces conditions, ça va pas être possible de les accepter."
          ], a: 1,
          quote: "« Nous <b>ne saurions</b> accepter de telles conditions. »",
          why: "Au conditionnel, <i>savoir</i> à la forme négative signifie « ne pas pouvoir » ; en registre soutenu, il s'emploie avec <i>ne</i> seul, sans <i>pas</i> : <i>nous <b>ne saurions</b> accepter</i>. Ajoutez le pronom <i>nous</i> et le déterminant soutenu <i>de telles</i> : c'est la formulation la plus soutenue.",
          wrong: [
            "A : registre familier : le <i>ne</i> de la négation disparaît (<i>on peut pas</i>), comme souvent à l'oral.",
            "C : phrase correcte, mais de registre courant (neutre) : négation complète <i>ne… pas</i>, vocabulaire ordinaire.",
            "D : registre familier : sujet repris par <i>ça</i>, mise en tête de phrase typique de l'oral et négation sans <i>ne</i>."
          ],
          tip: "Indices de registre soutenu : <i>ne</i> seul avec <i>savoir, pouvoir, oser, cesser</i> (<i>je ne saurais dire</i>), <i>nous</i> plutôt que <i>on</i>, inversion du sujet, vocabulaire choisi (<i>de tels, néanmoins, dès lors</i>)." }
      ]
    }
  ]
};
