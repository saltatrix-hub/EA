(function () {
  "use strict";

  const q = (question, correct, ...wrong) => ({
    q: question,
    options: [correct, ...wrong],
    answer: 0,
    help: `Doğru cevap: ${correct}`
  });

  const vocab = entries => entries.map(([en, tr, ex]) => ({ en, tr, ex }));
  const drills = entries => entries.map(([task, answer]) => ({ task, answer }));

  const lesson = spec => ({
    id: spec.id,
    title: spec.title,
    band: spec.band,
    goal: spec.goal,
    minutes: "35-45 dk",
    objectives: spec.objectives,
    explain: spec.explain,
    formulas: spec.formulas,
    vocab: vocab(spec.vocab),
    dialogue: spec.dialogue.map(([speaker, line]) => ({ speaker, line })),
    reading: spec.reading,
    drills: drills(spec.drills),
    final: spec.final
  });

  const EXTENDED_COURSE = [
    lesson({
      id: 31,
      title: "Plural Nouns + These / Those: Çoğullar",
      band: "A1 sağlamlaştırma",
      goal: "Düzenli ve düzensiz çoğulları, these/those ile birlikte doğru kullanmak.",
      objectives: ["-s/-es çoğullarını kurmak", "child/children gibi düzensizleri tanımak", "these ve those kullanmak", "tekil-çoğul uyumu yapmak"],
      explain: [
        "Çoğu isim çoğul olurken -s alır: book → books. -s, -sh, -ch, -x ile bitenlerde çoğunlukla -es gelir: bus → buses, watch → watches.",
        "Bazı çoğullar düzensizdir ve ezberlenir: child → children, person → people, man → men, woman → women.",
        "Yakındaki çoğullar için these, uzaktaki çoğullar için those kullanılır. These are my keys. Those are your shoes."
      ],
      formulas: ["one book → two books", "one bus → two buses", "child → children", "this → these", "that → those"],
      vocab: [
        ["children","çocuklar","The children are at school."],["people","insanlar","There are many people here."],["men","erkekler","The men are working."],["women","kadınlar","The women are talking."],["keys","anahtarlar","These are my keys."],
        ["glasses","gözlük","My glasses are on the table."],["boxes","kutular","Those boxes are heavy."],["watches","saatler","These watches are new."],["feet","ayaklar","My feet are cold."],["teeth","dişler","Brush your teeth."]
      ],
      dialogue: [["A","Are these your keys?"],["B","Yes, they are. Those glasses are mine too."],["A","What is in those boxes?"],["B","Children's books and watches."]],
      reading: { text:"There are two women and three children in the shop. The children are looking at watches. Those watches are expensive.", question:"Mağazada kimler var?", answer:"İki kadın ve üç çocuk var." },
      drills: [["Çoğul yap: one box","two boxes"],["Çoğul yap: one child","two children"],["Çevir: Bunlar benim anahtarlarım.","These are my keys."],["Boşluk: ___ are your shoes over there.","Those"],["Düzelt: These is my books.","These are my books."]],
      final: [
        q("book kelimesinin çoğulu?","books","bookes","book's","book"),
        q("child kelimesinin çoğulu?","children","childs","childes","childrens"),
        q("Yakındaki çoğullar için hangisi kullanılır?","these","this","that","it"),
        q("Doğru cümleyi seç.","Those are my shoes.","Those is my shoes.","That are my shoes.","Those are my shoe."),
        q("one woman → two ...","women","womans","womanes","woman"),
        q("‘people’ ne demek?","insanlar","çocuklar","erkekler","ayaklar"),
        q("‘keys’ ne demek?","anahtarlar","kutular","gözlük","dişler"),
        q("‘These watches are new.’ ne demek?","Bu saatler yeni.","Şu saat eski.","Bu saat yeni.","Saatler pahalı."),
        q("Boşluk: My ___ are cold.","feet","foots","foot","feets"),
        q("Doğru çoğul hangisi?","buses","buss","bussies","bus")
      ]
    }),
    lesson({
      id: 32,
      title: "Question Words: Who, Why, Which, How Often",
      band: "A1+",
      goal: "Günlük konuşmalarda doğru soru kelimesini seçip ayrıntılı soru sormak.",
      objectives: ["who/whose ayrımını yapmak", "why-because ilişkisini kurmak", "which ile seçim sormak", "how often ile sıklık sormak"],
      explain: [
        "Who kişi sorar: Who is she? Whose sahip sorar: Whose bag is this? İkisi aynı değildir.",
        "Why neden sorar; cevapta sıkça because kullanılır: Why are you late? Because the bus was late.",
        "Which sınırlı seçenekler arasından seçim sorar. How often ise sıklık sorar: How often do you exercise?"
      ],
      formulas: ["Who...? = Kim...?", "Whose...? = Kimin...?", "Why...? — Because...", "Which one...? = Hangisi...?", "How often...? = Ne sıklıkla...?"],
      vocab: [
        ["who","kim","Who is your teacher?"],["whose","kimin","Whose phone is this?"],["why","neden","Why are you tired?"],["because","çünkü","Because I worked late."],["which","hangi","Which bus goes to town?"],
        ["how often","ne sıklıkla","How often do you study?"],["how long","ne kadar süre","How long is the film?"],["how far","ne kadar uzak","How far is the station?"],["what kind","ne tür","What kind of music?"],["when","ne zaman","When does it start?"]
      ],
      dialogue: [["A","Which bus goes to the station?"],["B","Bus 12."],["A","How often does it come?"],["B","Every twenty minutes."]],
      reading: { text:"Mina studies English three times a week because she wants to travel. Her teacher is Mr Brown. The lesson takes one hour.", question:"Mina neden İngilizce çalışıyor?", answer:"Seyahat etmek istediği için." },
      drills: [["Kişi sor: ___ is your teacher?","Who"],["Sebep sor: ___ are you late?","Why"],["Çevir: Ne sıklıkla spor yaparsın?","How often do you exercise?"],["Sahip sor: Bu kimin çantası?","Whose bag is this?"],["Cevapla: Why do you study English?","Because I want to communicate/travel/work."]],
      final: [
        q("Kişi sormak için hangisi?","Who","Why","Which","When"),
        q("‘Whose bag?’ ne demek?","Kimin çantası?","Hangi çanta?","Çanta nerede?","Kaç çanta?"),
        q("Sebep soran kelime?","Why","Who","When","How often"),
        q("Sıklık sorusu hangisi?","How often do you study?","How long are you?","Who do you study?","Which often?"),
        q("Why sorusuna uygun cevap?","Because I was tired.","Three times.","At home.","My sister."),
        q("‘which’ ne demek?","hangi","neden","ne zaman","kimin"),
        q("‘how far’ ne sorar?","ne kadar uzak","ne kadar sık","ne kadar eski","kaç kişi"),
        q("‘when’ ne demek?","ne zaman","nerede","neden","kim"),
        q("Doğru soru hangisi?","Which one do you want?","Which you want one?","What one you do want?","Which do want?"),
        q("‘What kind of music?’ ne sorar?","Ne tür müzik?","Müzik nerede?","Müzik ne zaman?","Kimin müziği?")
      ]
    }),
    lesson({
      id: 33,
      title: "Countable / Uncountable + Much / Many",
      band: "A1+",
      goal: "Sayılabilen ve sayılamayan isimlerle miktarı doğru ifade etmek.",
      objectives: ["countable/uncountable ayrımını yapmak", "much ve many kullanmak", "a few/a little kullanmak", "how much/how many sormak"],
      explain: [
        "Sayılabilen isimlerin tekil ve çoğulu vardır: one apple, two apples. Sayılamayan isimleri doğrudan saymayız: water, rice, money.",
        "Many sayılabilen çoğullarla; much sayılamayanlarla kullanılır: many books, much water. Günlük olumlu cümlede a lot of ikisiyle de doğaldır.",
        "A few birkaç ve sayılabilenlerle; a little biraz ve sayılamayanlarla kullanılır."
      ],
      formulas: ["many + plural noun", "much + uncountable noun", "a few apples", "a little water", "a lot of + noun"],
      vocab: [
        ["rice","pirinç/pilav","We need some rice."],["money","para","I don't have much money."],["information","bilgi","I need some information."],["bottle","şişe","Two bottles of water."],["piece","parça","A piece of cake."],
        ["many","çok sayıda","How many people?"],["much","çok miktarda","How much time?"],["a few","birkaç","I have a few questions."],["a little","biraz","Add a little milk."],["enough","yeterli","We have enough food."]
      ],
      dialogue: [["A","How much water do we have?"],["B","Only a little."],["A","How many bottles do we need?"],["B","We need three bottles."]],
      reading: { text:"We have a little rice and a few tomatoes. We don't have much milk, but we have a lot of water. We need two bottles of milk.", question:"Neden alışveriş yapılmalı?", answer:"Süt az olduğu için iki şişe süt gerekiyor." },
      drills: [["Boşluk: How ___ apples?","many"],["Boşluk: How ___ water?","much"],["Çevir: Birkaç sorum var.","I have a few questions."],["Çevir: Biraz süt ekle.","Add a little milk."],["Düzelt: many money","much money / a lot of money"]],
      final: [
        q("Sayılabilen isimle hangisi kullanılır?","many","much","a little","an"),
        q("Sayılamayan isimle hangisi kullanılır?","much","many","a few","these"),
        q("Doğru ifade hangisi?","a little water","a few water","many water","two waters"),
        q("Doğru ifade hangisi?","a few apples","a little apples","much apples","an apples"),
        q("Hem sayılabilen hem sayılamayanla kullanılabilir?","a lot of","many","much","an"),
        q("‘information’ nasıl bir isimdir?","sayılamayan","çoğul","özel isim","fiil"),
        q("‘a piece of cake’ ne demek?","bir parça kek","birkaç kek","çok kek","kek kutusu"),
        q("Boşluk: We don't have ___ time.","much","many","a few","these"),
        q("Boşluk: There are ___ people here.","many","much","a little","an"),
        q("‘enough’ ne demek?","yeterli","az","fazla pahalı","boş")
      ]
    }),
    lesson({
      id: 34,
      title: "Object Pronouns + Possessive Pronouns",
      band: "A1+",
      goal: "me/him/her/them ve mine/yours gibi zamirleri doğal cümlelerde kullanmak.",
      objectives: ["özne ve nesne zamirini ayırmak", "me/him/her/us/them kullanmak", "mine/yours ayrımını yapmak", "tekrarı azaltmak"],
      explain: [
        "Özne eylemi yapar; nesne eylemden etkilenir: She calls me. Burada she özne, me nesnedir.",
        "Nesne zamirleri fiilden veya edattan sonra gelir: I know him. Talk to her. Come with us.",
        "Mine, yours, his, hers sahip olunan ismin yerine geçer: This is my bag. This bag is mine."
      ],
      formulas: ["I → me", "he → him / she → her", "we → us / they → them", "my bag → mine", "your phone → yours"],
      vocab: [
        ["me","beni/bana","Can you help me?"],["him","onu/ona (erkek)","I know him."],["her","onu/ona (kadın)","Call her."],["us","bizi/bize","Come with us."],["them","onları/onlara","I can see them."],
        ["mine","benimki","This book is mine."],["yours","seninki/sizinki","Is this yours?"],["hers","onunki (kadın)","The coat is hers."],["ours","bizimki","The house is ours."],["theirs","onlarınki","Those keys are theirs."]
      ],
      dialogue: [["A","Is this phone yours?"],["B","No, mine is blue. Ask Elif."],["A","Can you call her?"],["B","Yes, I'll call her now."]],
      reading: { text:"This is our office. The desks are ours, but that computer is theirs. Elif works with us. If you need help, ask her.", question:"Bilgisayar kimin?", answer:"Onların." },
      drills: [["Değiştir: I know Ali. → I know ___.","him"],["Değiştir: Call Elif. → Call ___.","her"],["Çevir: Bu kitap benimki.","This book is mine."],["Boşluk: Come with ___. (biz)","us"],["Düzelt: This is my.","This is mine. / This is my + noun."]],
      final: [
        q("‘I know him.’ ne demek?","Onu tanıyorum.","O beni tanıyor.","Onun kitabı.","Bizi tanıyor."),
        q("Kadın için nesne zamiri?","her","she","hers","him"),
        q("‘Come with us.’ ne demek?","Bizimle gel.","Bize bak.","Onlarla git.","Benimle konuş."),
        q("‘This bag is mine.’ ne demek?","Bu çanta benim.","Bu benim çantam mı?","Bu çanta senin.","Çanta bende değil."),
        q("Doğru cümleyi seç.","Can you help me?","Can you help I?","Can you help mine?","Can me help you?"),
        q("‘theirs’ ne demek?","onlarınki","bizimki","seninki","onları"),
        q("Boşluk: I can see ___. (onları)","them","they","theirs","their"),
        q("Boşluk: The coat is ___. (onunki-kadın)","hers","her","she","him"),
        q("Özne zamiri hangisi?","they","them","mine","us"),
        q("Nesne zamiri hangisi?","him","he","his","hers")
      ]
    }),
    lesson({
      id: 35,
      title: "Verb Patterns: Like -ing / Want to",
      band: "A1+",
      goal: "Sevdiğin etkinlikleri ve yapmak istediğin şeyleri doğru yapıyla anlatmak.",
      objectives: ["like/love/hate + -ing kullanmak", "want/need + to kullanmak", "would like ile kibar istek kurmak", "iki yapıyı ayırmak"],
      explain: [
        "Etkinliklerden söz ederken like, love ve hate sonrasında fiilin -ing hâli çok yaygındır: I like reading.",
        "Want ve need sonrasında to + fiil gelir: I want to travel. I need to study.",
        "Would like daha kibar bir istektir: I'd like to book a room. Yiyecek/içecek isterken isim de gelebilir: I'd like some tea."
      ],
      formulas: ["like/love/hate + verb-ing", "want + to + verb", "need + to + verb", "would like + to + verb", "would like + noun"],
      vocab: [
        ["reading","okuma","I like reading."],["cooking","yemek yapma","She loves cooking."],["travelling","seyahat etme","We enjoy travelling."],["learning","öğrenme","I like learning languages."],["waiting","bekleme","I hate waiting."],
        ["want","istemek","I want to leave."],["need","ihtiyaç duymak","I need to rest."],["would like","istemek (kibar)","I'd like to order."],["enjoy","keyif almak","They enjoy walking."],["plan","planlamak","We plan to travel."]
      ],
      dialogue: [["A","What do you like doing at weekends?"],["B","I like walking and reading."],["A","What do you want to do this weekend?"],["B","I want to visit a museum."]],
      reading: { text:"Mert loves cooking, but he hates washing dishes. This weekend, he wants to cook for his friends. He needs to buy some vegetables.", question:"Mert hafta sonu ne yapmak istiyor?", answer:"Arkadaşları için yemek yapmak istiyor." },
      drills: [["Boşluk: I like ___ books. (read)","reading"],["Boşluk: I want ___ home. (go)","to go"],["Çevir: Dinlenmem gerekiyor.","I need to rest."],["Kibar söyle: Bir oda ayırtmak istiyorum.","I'd like to book a room."],["Düzelt: I enjoy to walk.","I enjoy walking."]],
      final: [
        q("Like sonrasında hangi yapı yaygındır?","verb-ing","to verb-ing","verb-s","did + verb"),
        q("Want sonrasında hangi yapı gelir?","to + verb","verb-ing","verb-ed","verb-s"),
        q("Doğru cümleyi seç.","I like reading.","I like read.","I like to reading.","I like reads."),
        q("Doğru cümleyi seç.","I want to travel.","I want travelling.","I want travel to.","I want travels."),
        q("Kibar istek hangisi?","I'd like some tea.","I like tea now.","I want tea give.","Tea me."),
        q("‘enjoy’ ne demek?","keyif almak","nefret etmek","unutmak","satın almak"),
        q("‘I hate waiting.’ ne demek?","Beklemekten nefret ederim.","Beklemek istiyorum.","Beklemem gerekiyor.","Beklemeyi unuttum."),
        q("Boşluk: She needs ___ study.","to","for","at","-ing"),
        q("Boşluk: They enjoy ___.","walking","to walk","walks","walked to"),
        q("‘plan to travel’ ne demek?","seyahat etmeyi planlamak","seyahatten dönmek","seyahati sevmemek","seyahati iptal etmek")
      ]
    }),
    lesson({
      id: 36,
      title: "Adverbs: Slowly, Carefully, Well",
      band: "A2",
      goal: "Bir eylemin nasıl yapıldığını zarflarla anlatmak.",
      objectives: ["sıfat-zarf farkını görmek", "-ly zarflarını kurmak", "good/well ayrımını yapmak", "cümlede doğru yere yerleştirmek"],
      explain: [
        "Sıfat bir ismi, zarf ise çoğunlukla bir fiili açıklar: a careful driver; He drives carefully.",
        "Birçok zarf sıfata -ly eklenerek oluşur: slow → slowly, quiet → quietly. Ancak her kelime bu kurala uymaz.",
        "Good sıfattır, well genellikle zarftır: She is a good singer. She sings well."
      ],
      formulas: ["slow → slowly", "careful → carefully", "quiet → quietly", "good → well", "verb + adverb"],
      vocab: [
        ["slowly","yavaşça","Please speak slowly."],["carefully","dikkatlice","Drive carefully."],["quickly","hızlıca","She finished quickly."],["quietly","sessizce","The baby is sleeping quietly."],["clearly","açık/net şekilde","Explain it clearly."],
        ["well","iyi şekilde","He speaks English well."],["badly","kötü şekilde","I slept badly."],["easily","kolayca","She learns easily."],["loudly","yüksek sesle","Don't talk loudly."],["politely","kibarca","He asked politely."]
      ],
      dialogue: [["A","Could you speak more slowly, please?"],["B","Of course. Can you hear me clearly now?"],["A","Yes, thank you."],["B","Please ask if you don't understand."]],
      reading: { text:"Elif is a careful driver. She always drives slowly in the city. She speaks politely to other people and explains directions clearly.", question:"Elif nasıl araba kullanıyor?", answer:"Şehirde dikkatli ve yavaş kullanıyor." },
      drills: [["Zarfa çevir: slow","slowly"],["Boşluk: She sings ___. (good)","well"],["Çevir: Lütfen dikkatlice dinle.","Please listen carefully."],["Düzelt: He drives careful.","He drives carefully."],["Sıfat mı zarf mı? a quiet room","quiet = sıfat"]],
      final: [
        q("Fiili açıklayan kelime türü?","zarf","isim","zamir","artikel"),
        q("slow kelimesinin zarf hâli?","slowly","slowy","slowlly","well"),
        q("good kelimesinin yaygın zarf hâli?","well","goodly","betterly","good"),
        q("Doğru cümleyi seç.","She drives carefully.","She drives careful.","She carefully driver.","She is drive carefully."),
        q("‘Speak clearly.’ ne demek?","Net konuş.","Yüksek sesle konuş.","Hızlı konuş.","Konuşmayı bırak."),
        q("‘quietly’ ne demek?","sessizce","dikkatlice","kolayca","kötü şekilde"),
        q("‘politely’ ne demek?","kibarca","yavaşça","üzgünce","doğrudan"),
        q("Boşluk: He speaks English ___.","well","good","careful","slow"),
        q("Sıfat kullanılan cümle hangisi?","She is a careful driver.","She drives carefully.","Speak slowly.","He asked politely."),
        q("Zarf kullanılan cümle hangisi?","She learns easily.","She is an easy learner.","It is an easy test.","This book is easy.")
      ]
    }),
    lesson({
      id: 37,
      title: "Superlatives: The Biggest, The Best",
      band: "A2",
      goal: "Bir grubun içindeki en üstün veya en düşük özelliği ifade etmek.",
      objectives: ["-est yapısını kullanmak", "the most yapısını kullanmak", "best/worst biçimlerini öğrenmek", "comparative ile ayırmak"],
      explain: [
        "Kısa sıfatlarda en üstünlük için the + -est kullanılır: small → the smallest, tall → the tallest.",
        "Uzun sıfatlarda the most kullanılır: the most expensive, the most interesting.",
        "Bazı biçimler düzensizdir: good → the best, bad → the worst. Superlative genellikle üç veya daha fazla şeyi karşılaştırır."
      ],
      formulas: ["the + adjective-est", "the most + adjective", "good → the best", "bad → the worst", "in/of + group"],
      vocab: [
        ["the biggest","en büyük","Tokyo is one of the biggest cities."],["the smallest","en küçük","This is the smallest room."],["the cheapest","en ucuz","Which is the cheapest? "],["the fastest","en hızlı","It is the fastest train."],["the oldest","en eski/en yaşlı","This is the oldest building."],
        ["the best","en iyi","This is the best option."],["the worst","en kötü","It was the worst day."],["the most useful","en faydalı","This is the most useful tool."],["the most beautiful","en güzel","It is the most beautiful beach."],["the most crowded","en kalabalık","Friday is the most crowded day."]
      ],
      dialogue: [["A","Which is the cheapest hotel?"],["B","The Blue Hotel is the cheapest."],["A","Is it also the best?"],["B","No, the Park Hotel is the most comfortable."]],
      reading: { text:"There are three cafés in my town. Green Café is the cheapest. Moon Café is the smallest, but it has the best coffee. Central Café is the most crowded.", question:"En iyi kahve hangi kafede?", answer:"Moon Café'de." },
      drills: [["Superlative yap: tall","the tallest"],["Superlative yap: expensive","the most expensive"],["Superlative yap: good","the best"],["Çevir: Bu en ucuz otel.","This is the cheapest hotel."],["Düzelt: the most fastest","the fastest"]],
      final: [
        q("tall kelimesinin superlative hâli?","the tallest","the taller","the most tall","tallest than"),
        q("expensive için doğru biçim?","the most expensive","the expensivest","more expensive","most expensive than"),
        q("good için doğru biçim?","the best","the goodest","the better","the most good"),
        q("bad için doğru biçim?","the worst","the baddest","the worse","the most bad"),
        q("Doğru cümleyi seç.","This is the cheapest shop.","This is cheapest than.","This is the most cheap.","This shop is cheaper of all."),
        q("‘the fastest’ ne demek?","en hızlı","daha hızlı","çok yavaş","en uzak"),
        q("‘the most useful’ ne demek?","en faydalı","daha faydalı","faydasız","kullanılmış"),
        q("Superlative genellikle neyi karşılaştırır?","bir grubun içindeki en üstün olanı","yalnız iki eşit şeyi","geçmiş ve geleceği","sayılamayan isimleri"),
        q("Boşluk: It is ___ oldest building.","the","a","more","than"),
        q("Yanlış kullanımı seç.","the most fastest","the biggest","the most beautiful","the best")
      ]
    }),
    lesson({
      id: 38,
      title: "Have To / Don't Have To / Mustn't",
      band: "A2",
      goal: "Zorunluluk, gereksizlik ve yasak arasındaki önemli farkı anlamak.",
      objectives: ["have to ile zorunluluk kurmak", "don't have to ile gereksizliği anlatmak", "mustn't ile yasağı anlatmak", "üç anlamı karıştırmamak"],
      explain: [
        "Have to dışarıdan gelen zorunluluğu anlatır: I have to wear a uniform. She has to start at nine.",
        "Don't have to, yapmak zorunda değilsin demektir; yapabilirsin ama gerekli değildir.",
        "Mustn't yasak demektir. You mustn't smoke here = Burada sigara içmek yasak. Don't have to ile aynı değildir."
      ],
      formulas: ["I/you/we/they have to", "he/she has to", "don't/doesn't have to", "mustn't = yasak", "Do you have to...?"],
      vocab: [
        ["have to","zorunda olmak","I have to work."],["has to","zorunda (he/she)","She has to leave."],["don't have to","zorunda değil","You don't have to come."],["mustn't","yasak","You mustn't park here."],["uniform","üniforma","I wear a uniform."],
        ["rule","kural","This is an important rule."],["allowed","izinli","Food is not allowed."],["necessary","gerekli","Is it necessary?"],["optional","isteğe bağlı","The meeting is optional."],["required","zorunlu/gerekli","A ticket is required."]
      ],
      dialogue: [["A","Do I have to bring my passport?"],["B","Yes, it's required."],["A","Do I have to print the ticket?"],["B","No, you don't have to. You can show it on your phone."]],
      reading: { text:"At the museum, visitors have to buy a ticket. They mustn't touch the paintings. They don't have to leave their phones outside, but phones must be silent.", question:"Telefonu dışarıda bırakmak zorunlu mu?", answer:"Hayır, zorunlu değil; fakat telefon sessiz olmalı." },
      drills: [["Boşluk: She ___ wear a uniform.","has to"],["Çevir: Gelmek zorunda değilsin.","You don't have to come."],["Çevir: Buraya park etmek yasak.","You mustn't park here."],["Soru yap: You have to book.","Do you have to book?"],["Farkı açıkla: don't have to / mustn't","zorunda değil / yasak"]],
      final: [
        q("‘don't have to’ ne demek?","zorunda değil","yasak","mutlaka yapmalı","yapamıyor"),
        q("‘mustn't’ ne demek?","yasak","gerekli değil","tavsiye","plan"),
        q("She ile doğru yapı?","has to","have to","having to","has too"),
        q("Doğru cümleyi seç.","You mustn't smoke here.","You don't have smoke here.","You mustn't to smoke.","You not have to smoking."),
        q("Zorunlu olmadığını söyle.","You don't have to wait.","You mustn't wait.","You can't to wait.","You haven't wait."),
        q("‘required’ ne demek?","zorunlu/gerekli","isteğe bağlı","yasak","ucuz"),
        q("‘optional’ ne demek?","isteğe bağlı","zorunlu","tehlikeli","kapalı"),
        q("Soru doğru hangisi?","Do you have to work?","Have you to work?","Do you have work to?","Are you have to work?"),
        q("Müzede resimlere dokunmak yasak:","You mustn't touch the paintings.","You don't have to touch the paintings.","You should touch the paintings.","You aren't touch the paintings."),
        q("‘You don't have to print it.’ ne demek?","Yazdırmak zorunda değilsin.","Yazdırman yasak.","Yazdıramazsın.","Yazdırmalısın.")
      ]
    }),
    lesson({
      id: 39,
      title: "Present Perfect: Life Experiences",
      band: "A2",
      goal: "Hayat deneyimlerini, zamanı belirtmeden have/has + V3 ile anlatmak.",
      objectives: ["have/has + V3 yapısını tanımak", "ever/never kullanmak", "been/gone farkına giriş yapmak", "Past Simple ile temel farkı görmek"],
      explain: [
        "Present Perfect, geçmişteki bir deneyimin bugünle bağlantısını anlatabilir. Kesin zaman söylemeyiz: I have visited Rome.",
        "Yapı have/has + fiilin üçüncü hâlidir: have seen, has eaten, have been. Ever soru; never olumsuz deneyim için yaygındır.",
        "Kesin geçmiş zamanı söylersen Past Simple kullanılır: I visited Rome in 2024. Zaman yoksa deneyim vurgusunda Present Perfect uygundur."
      ],
      formulas: ["I/you/we/they have + V3", "he/she has + V3", "Have you ever...?", "I have never...", "Past time given → Past Simple"],
      vocab: [
        ["ever","hiç","Have you ever flown?"],["never","hiçbir zaman","I have never tried it."],["been","bulunmuş/gidip dönmüş","I have been to Paris."],["seen","görmüş","She has seen that film."],["done","yapmış","Have you done your homework?"],
        ["tried","denemiş","I've tried sushi."],["visited","ziyaret etmiş","We have visited Rome."],["experience","deneyim","It was a great experience."],["already","çoktan","I have already eaten."],["yet","henüz","I haven't finished yet."]
      ],
      dialogue: [["A","Have you ever been to London?"],["B","No, I haven't, but I've been to Paris."],["A","Have you tried British food?"],["B","Not yet."]],
      reading: { text:"Elif has visited three countries. She has been to Italy, Spain and Greece. She has never flown alone, but she wants to try it. Last year, she visited Rome.", question:"Elif tek başına uçmuş mu?", answer:"Hayır, hiç tek başına uçmamış." },
      drills: [["Boşluk: I ___ seen this film.","have"],["Boşluk: She ___ never tried sushi.","has"],["V3 yaz: go","gone/been"],["Çevir: Hiç Londra'ya gittin mi?","Have you ever been to London?"],["Zaman varsa seç: I ___ Rome last year.","visited"]],
      final: [
        q("Present Perfect temel yapısı?","have/has + V3","did + V1","am/is/are + ing","will + V1"),
        q("She ile hangisi kullanılır?","has","have","did","is have"),
        q("Deneyim sorusunda ‘hiç’ için?","ever","never","yet","ago"),
        q("‘I have never tried sushi.’ ne demek?","Hiç suşi denemedim.","Dün suşi denedim.","Suşi deniyorum.","Suşi deneyeceğim."),
        q("Kesin geçmiş zamanla doğru cümle?","I visited Rome last year.","I have visited Rome last year.","I visit Rome last year.","I have visit Rome."),
        q("see fiilinin V3 hâli?","seen","saw","seed","seeing"),
        q("do fiilinin V3 hâli?","done","did","doing","doed"),
        q("‘not yet’ ne demek?","henüz değil","çoktan","hiçbir zaman","geçen yıl"),
        q("Doğru soru hangisi?","Have you ever flown?","Did you ever flown?","Have you ever fly?","Are you ever flown?"),
        q("‘already’ ne demek?","çoktan","henüz","dün","belki")
      ]
    }),
    lesson({
      id: 40,
      title: "Travel + Transport: Planning a Journey",
      band: "A2",
      goal: "Ulaşım bileti almak, sefer bilgisi sormak ve yolculuk planlamak.",
      objectives: ["bilet istemek", "kalkış-varış sormak", "tek yön/gidiş dönüş ayrımını yapmak", "gecikme ve peron bilgisi anlamak"],
      explain: [
        "Bilet alırken I'd like a ticket to... kalıbı kullanılır. Single tek yön, return gidiş-dönüş demektir.",
        "Sefer bilgisi için What time does it leave/arrive? ve Which platform? soruları çok kullanılır.",
        "Gecikme durumunda delayed, iptal durumunda cancelled kelimelerini duyarsın."
      ],
      formulas: ["I'd like a ticket to...", "single / return ticket", "What time does it leave?", "Which platform?", "The train is delayed."],
      vocab: [
        ["ticket","bilet","I'd like a ticket."],["single","tek yön","A single to Ankara."],["return","gidiş-dönüş","A return ticket, please."],["platform","peron","Which platform?"],["departure","kalkış","Check the departure time."],
        ["arrival","varış","The arrival is at six."],["delayed","gecikmiş","The train is delayed."],["cancelled","iptal edilmiş","The flight is cancelled."],["luggage","bagaj","Where is my luggage?"],["journey","yolculuk","Have a good journey."]
      ],
      dialogue: [["A","I'd like a return ticket to Ankara, please."],["B","Of course. The next train leaves at 10:15."],["A","Which platform does it leave from?"],["B","Platform six."]],
      reading: { text:"Mert's train leaves at 9:30 from platform four. It is delayed by twenty minutes. He has a return ticket and one piece of luggage.", question:"Tren ne kadar gecikmiş?", answer:"Yirmi dakika." },
      drills: [["Çevir: Ankara'ya tek yön bilet istiyorum.","I'd like a single ticket to Ankara."],["Sor: Tren saat kaçta kalkıyor?","What time does the train leave?"],["Sor: Hangi peron?","Which platform?"],["Çevir: Uçuş iptal edildi.","The flight is cancelled."],["‘return ticket’ ne demek?","gidiş-dönüş bileti"]],
      final: [
        q("‘single ticket’ ne demek?","tek yön bilet","gidiş-dönüş bilet","ucuz bilet","otobüs bileti"),
        q("‘return ticket’ ne demek?","gidiş-dönüş bilet","tek yön bilet","iptal bilet","uçak bileti"),
        q("Kalkış saatini soran cümle?","What time does it leave?","What time does it arrive from?","How time it leaves?","When time leave?"),
        q("‘platform’ ne demek?","peron","bagaj","varış","bilet"),
        q("‘The flight is cancelled.’ ne demek?","Uçuş iptal edildi.","Uçuş gecikti.","Uçuş dolu.","Uçuş başladı."),
        q("‘delayed’ ne demek?","gecikmiş","erken","ucuz","tek yön"),
        q("‘luggage’ ne demek?","bagaj","yolcu","bilet","kapı"),
        q("Kibar bilet isteği?","I'd like a ticket, please.","Give ticket.","I want you ticket.","Ticket to me."),
        q("Varış kelimesi?","arrival","departure","journey","return"),
        q("Kalkış kelimesi?","departure","arrival","luggage","platform")
      ]
    }),
    lesson({
      id: 41,
      title: "Hotel English: Booking and Problems",
      band: "A2",
      goal: "Otel rezervasyonu yapmak, giriş işlemi ve basit sorun bildirmek.",
      objectives: ["oda ayırtmak", "check-in bilgisi vermek", "oda özelliklerini sormak", "sorunu kibarca bildirmek"],
      explain: [
        "Rezervasyon için I'd like to book a room kalıbını kullan. Süreyi for two nights, tarihi from Monday to Wednesday şeklinde ekleyebilirsin.",
        "Girişte I have a reservation under the name... kalıbı kullanılır.",
        "Sorun bildirirken There is a problem with... veya The ... isn't working diyebilirsin."
      ],
      formulas: ["I'd like to book a room.", "for two nights", "under the name...", "Is breakfast included?", "The shower isn't working."],
      vocab: [
        ["reservation","rezervasyon","I have a reservation."],["reception","resepsiyon","Ask at reception."],["available","müsait","Is a room available?"],["included","dahil","Breakfast is included."],["key card","anahtar kartı","Here is your key card."],
        ["single room","tek kişilik oda","A single room, please."],["double room","çift kişilik oda","We need a double room."],["night","gece","For three nights."],["shower","duş","The shower is cold."],["towel","havlu","Can I have a clean towel?"]
      ],
      dialogue: [["A","Hello. I have a reservation under the name Yılmaz."],["B","Yes, a double room for two nights."],["A","Is breakfast included?"],["B","Yes. Here is your key card."]],
      reading: { text:"Elif is staying for three nights. Breakfast is included, but the Wi-Fi isn't working. She calls reception and asks for help.", question:"Elif'in sorunu ne?", answer:"Wi-Fi çalışmıyor." },
      drills: [["Çevir: Bir oda ayırtmak istiyorum.","I'd like to book a room."],["Çevir: İki gece için.","For two nights."],["Sor: Kahvaltı dahil mi?","Is breakfast included?"],["Sorun bildir: Duş çalışmıyor.","The shower isn't working."],["İste: Temiz bir havlu alabilir miyim?","Can I have a clean towel?"]],
      final: [
        q("Oda ayırtmak için doğru cümle?","I'd like to book a room.","I like booking room.","Give me room now.","I have room book."),
        q("‘available’ ne demek?","müsait","dahil","bozuk","pahalı"),
        q("‘Is breakfast included?’ ne demek?","Kahvaltı dahil mi?","Kahvaltı ne zaman?","Kahvaltı nerede?","Kahvaltı bitti mi?"),
        q("‘under the name Yılmaz’ ne demek?","Yılmaz adına","Yılmaz'ın altında","Yılmaz'ın odasında","Yılmaz'dan sonra"),
        q("Sorun bildiren cümle?","The Wi-Fi isn't working.","The Wi-Fi works well.","I like the Wi-Fi.","Where Wi-Fi?"),
        q("‘reception’ ne demek?","resepsiyon","rezervasyon","oda","koridor"),
        q("‘double room’ ne demek?","çift kişilik oda","iki oda","tek kişilik oda","büyük salon"),
        q("‘for three nights’ ne demek?","üç gece için","üç geceden beri","gece üçte","üç kişilik"),
        q("‘key card’ ne demek?","anahtar kartı","kimlik kartı","banka kartı","bilet"),
        q("Kibar havlu isteği?","Can I have a clean towel?","Give clean towel.","I clean towel.","Where give towel?")
      ]
    }),
    lesson({
      id: 42,
      title: "Phone Calls + Appointments",
      band: "A2",
      goal: "Telefonda kendini tanıtmak, mesaj bırakmak ve randevu ayarlamak.",
      objectives: ["telefonda kim olduğunu söylemek", "birini istemek", "mesaj bırakmak", "randevu saati değiştirmek"],
      explain: [
        "Telefonda kendini tanıtırken This is Elif denir. I am Elif yerine bu kalıp daha doğaldır.",
        "Birini isterken Could I speak to...?; mesaj bırakırken Can I leave a message? kullanılır.",
        "Randevu için I'd like to make an appointment; değiştirmek için I'd like to change my appointment diyebilirsin."
      ],
      formulas: ["This is ... speaking.", "Could I speak to...?", "Can I leave a message?", "make an appointment", "Does Tuesday work for you?"],
      vocab: [
        ["appointment","randevu","I have an appointment."],["message","mesaj","Can I leave a message?"],["available","müsait","Is the doctor available?"],["hold","beklemek","Please hold."],["call back","geri aramak","I'll call you back."],
        ["speaking","telefonda benim","Elif speaking."],["line","telefon hattı","The line is busy."],["reschedule","yeniden planlamak","Can we reschedule?"],["confirm","onaylamak","I'd like to confirm."],["suitable","uygun","Is Friday suitable?"]
      ],
      dialogue: [["A","Good morning. This is Mert speaking. Could I speak to Dr Kaya?"],["B","She isn't available. Can I take a message?"],["A","Yes. Please ask her to call me back."],["B","Of course."]],
      reading: { text:"Elif has a dentist appointment on Monday, but she has to work. She calls to reschedule it. Friday at 3 p.m. is suitable, so she confirms the new time.", question:"Yeni randevu ne zaman?", answer:"Cuma saat 15.00'te." },
      drills: [["Telefonda tanıt: Ben Elif.","This is Elif speaking."],["Kibarca iste: Mert'le görüşebilir miyim?","Could I speak to Mert?"],["Mesaj bırakmayı sor.","Can I leave a message?"],["Çevir: Seni geri arayacağım.","I'll call you back."],["Randevu iste.","I'd like to make an appointment."]],
      final: [
        q("Telefonda doğal tanıtım?","This is Elif speaking.","I am speaking Elif.","Here Elif is.","Elif talks."),
        q("Kibarca birini istemek?","Could I speak to Mert?","Give Mert.","Mert speak now?","I want Mert talk."),
        q("‘leave a message’ ne demek?","mesaj bırakmak","mesaj silmek","telefonu kapatmak","geri aramak"),
        q("‘call back’ ne demek?","geri aramak","beklemek","mesaj bırakmak","randevu almak"),
        q("‘reschedule’ ne demek?","yeniden planlamak","iptal etmek","onaylamak","beklemek"),
        q("‘Please hold.’ ne demek?","Lütfen bekleyin.","Lütfen kapatın.","Lütfen konuşun.","Lütfen tekrar edin."),
        q("Randevu almak?","make an appointment","do an appointment","take appointment to","appointment make"),
        q("‘confirm’ ne demek?","onaylamak","değiştirmek","reddetmek","aramak"),
        q("‘Is Friday suitable?’ ne demek?","Cuma uygun mu?","Cuma müsait değil.","Randevu cuma mıydı?","Cuma neden?"),
        q("Hat meşgul:","The line is busy.","The line is suitable.","The phone is appointment.","The call is hold.")
      ]
    }),
    lesson({
      id: 43,
      title: "Invitations: Accepting and Refusing",
      band: "A2",
      goal: "Davet etmek, nazikçe kabul etmek veya gerekçe vererek reddetmek.",
      objectives: ["would you like ile davet etmek", "kabul ifadeleri kullanmak", "nazikçe reddetmek", "saat ve yer netleştirmek"],
      explain: [
        "Would you like to...? nazik bir davettir: Would you like to have coffee?",
        "Kabul: I'd love to / That sounds great. Red: I'd love to, but... / I'm afraid I can't.",
        "Planı netleştirmek için What time shall we meet? ve Where shall we meet? kullanılabilir."
      ],
      formulas: ["Would you like to...?", "I'd love to.", "That sounds great.", "I'm afraid I can't.", "What time shall we meet?"],
      vocab: [
        ["invite","davet etmek","I'd like to invite you."],["accept","kabul etmek","She accepted the invitation."],["refuse","reddetmek","He refused politely."],["available","müsait","Are you available tonight?"],["sounds great","kulağa harika geliyor","That sounds great."],
        ["I'd love to","çok isterim","I'd love to come."],["I'm afraid","maalesef/korkarım","I'm afraid I can't."],["maybe another time","belki başka zaman","Maybe another time."],["shall we","... yapalım mı","Shall we meet at six?"],["free","boş/müsait","Are you free on Saturday?"]
      ],
      dialogue: [["A","Would you like to have dinner on Friday?"],["B","I'd love to, but I'm working Friday."],["A","How about Saturday?"],["B","That sounds great. Shall we meet at seven?"]],
      reading: { text:"Mina invites Ali to a concert on Thursday. Ali is busy, so he refuses politely. They decide to meet for coffee on Sunday instead.", question:"Neden konsere birlikte gitmiyorlar?", answer:"Ali perşembe günü meşgul olduğu için." },
      drills: [["Davet et: Kahve içmek ister misin?","Would you like to have coffee?"],["Kabul et.","I'd love to. / That sounds great."],["Nazikçe reddet.","I'm afraid I can't."],["Sor: Cumartesi müsait misin?","Are you free on Saturday?"],["Öner: Altıda buluşalım mı?","Shall we meet at six?"]],
      final: [
        q("Nazik davet hangisi?","Would you like to come?","Do you come now.","You will come.","Come you?"),
        q("Davet kabulü hangisi?","I'd love to.","I'm afraid I can't.","Maybe never.","I refuse."),
        q("Nazik ret hangisi?","I'd love to, but I'm busy.","No.","I don't want.","Bad idea."),
        q("‘That sounds great.’ ne demek?","Kulağa harika geliyor.","Çok gürültülü.","Bu kötü görünüyor.","Bunu duymadım."),
        q("‘Are you free?’ ne sorar?","Müsait misin?","Ücretsiz mi?","Özgür müsün?","Neredesin?"),
        q("‘invite’ ne demek?","davet etmek","reddetmek","beklemek","aramak"),
        q("‘maybe another time’ ne demek?","belki başka zaman","hemen şimdi","her zaman","bir daha asla"),
        q("Buluşma saatini sor?","What time shall we meet?","How time we meet?","When time meet?","What meet time is?"),
        q("Öneri hangisi?","Shall we meet at six?","We meeting six.","Do six meet.","Are meet at six?"),
        q("‘refuse politely’ ne demek?","nazikçe reddetmek","hemen kabul etmek","davet göndermek","geç kalmak")
      ]
    }),
    lesson({
      id: 44,
      title: "Work and Jobs: Duties and Experience",
      band: "A2",
      goal: "İşini, sorumluluklarını ve temel iş deneyimini anlatmak.",
      objectives: ["meslek ve iş yeri anlatmak", "görevleri açıklamak", "çalışma saatlerinden söz etmek", "deneyimi basitçe anlatmak"],
      explain: [
        "Meslek için I work as a..., iş yeri için I work at/in... kullanılır: I work as a receptionist at a hotel.",
        "Görev anlatırken My job is to... veya I have to... kullanılabilir.",
        "Deneyim için Present Perfect kullanılabilir: I have worked here for two years. Başlangıç zamanı için since, süre için for gelir."
      ],
      formulas: ["work as + job", "work at/in + place", "My job is to...", "for + duration", "since + starting point"],
      vocab: [
        ["employee","çalışan","The company has 20 employees."],["manager","yönetici","My manager is helpful."],["customer","müşteri","I help customers."],["colleague","iş arkadaşı","She is my colleague."],["duty","görev","This is my main duty."],
        ["shift","vardiya","I work the night shift."],["salary","maaş","The salary is good."],["experience","deneyim","I have three years' experience."],["apply","başvurmak","I want to apply for the job."],["responsible for","sorumlu","I'm responsible for bookings."]
      ],
      dialogue: [["A","What do you do?"],["B","I work as a receptionist at a hotel."],["A","What are you responsible for?"],["B","I help guests and manage bookings."]],
      reading: { text:"Mert works as a shop assistant. He has worked there for two years. He helps customers and checks deliveries. He likes his colleagues, but he doesn't like the late shift.", question:"Mert hangi vardiyayı sevmiyor?", answer:"Geç vardiyayı." },
      drills: [["Çevir: Öğretmen olarak çalışıyorum.","I work as a teacher."],["Çevir: Bir bankada çalışıyorum.","I work at a bank."],["Söyle: Rezervasyonlardan sorumluyum.","I'm responsible for bookings."],["Boşluk: for two years / ___ 2024","since"],["Boşluk: since Monday / ___ three days","for"]],
      final: [
        q("Mesleği söyleyen yapı?","work as","work at","work for time","work since"),
        q("İş yerini söyleyen yapı?","work at/in","work as","work during","work job"),
        q("Süre ile hangisi kullanılır?","for","since","at","on"),
        q("Başlangıç noktasıyla hangisi?","since","for","during two","from time"),
        q("‘responsible for’ ne demek?","...den sorumlu","...den yorulmuş","...e başvurmuş","...i reddetmiş"),
        q("‘colleague’ ne demek?","iş arkadaşı","müşteri","yönetici","çalışma saati"),
        q("‘shift’ ne demek?","vardiya","maaş","görev","başvuru"),
        q("‘apply for a job’ ne demek?","işe başvurmak","işten ayrılmak","işe geç kalmak","iş kurmak"),
        q("Doğru cümle?","I have worked here for two years.","I work here since two years.","I have work here for two years.","I worked here since two years."),
        q("‘What do you do?’ iş bağlamında ne sorar?","Ne iş yapıyorsun?","Şu an ne yapıyorsun?","Nereye gidiyorsun?","Neden çalışıyorsun?")
      ]
    }),
    lesson({
      id: 45,
      title: "A2 Final Project: Messages, Emails and Communication",
      band: "A2",
      goal: "Kısa mesaj ve e-posta yazarak A2 iletişim becerilerini bir final görevinde birleştirmek.",
      objectives: ["uygun selamlama kullanmak", "mesajın amacını açıkça yazmak", "bağlaçlarla düzenlemek", "uygun kapanış yapmak", "5-8 cümlelik bir final metni üretmek"],
      explain: [
        "Kısa e-postada dört parça yeterlidir: selamlama, yazma amacı, gerekli ayrıntı, kapanış.",
        "Bilgiyi sıraya koymak için first, then, after that; neden ve karşıtlık için because, but, so kullan.",
        "Göndermeden önce kontrol et: büyük harf, noktalama, fiil zamanı, tarih-saat ve istenen bilgi."
      ],
      formulas: ["Hi/Dear + name", "I'm writing to...", "because / but / so", "Could you...?", "Best wishes / See you"],
      vocab: [
        ["subject","konu başlığı","Write a clear subject."],["message","mesaj","Thanks for your message."],["reply","yanıtlamak","Please reply soon."],["attach","eklemek","I attached the file."],["details","ayrıntılar","Here are the details."],
        ["available","müsait","I'm available on Friday."],["unfortunately","maalesef","Unfortunately, I can't come."],["confirm","onaylamak","Please confirm the time."],["regards","saygılarımla","Kind regards"],["invitation","davet","Thanks for the invitation."]
      ],
      dialogue: [["A","Did you reply to the invitation?"],["B","Yes. I thanked her and confirmed the time."],["A","Did you include the address?"],["B","No, I'll send another message."]],
      reading: { text:"Hi Elif, Thanks for your invitation. I'd love to come on Saturday, but I will arrive late because I work until six. Could you send me the address? See you, Mina", question:"Mina neden geç gelecek?", answer:"Saat altıya kadar çalıştığı için." },
      drills: [["E-postaya başla: Elif'e samimi","Hi Elif,"],["Amaç yaz: Rezervasyonumu onaylamak için yazıyorum.","I'm writing to confirm my reservation."],["Kibarca adres iste.","Could you send me the address?"],["Ret yaz: Maalesef gelemiyorum.","Unfortunately, I can't come."],["Samimi kapanış yaz.","Best wishes, / See you,"]],
      final: [
        q("E-postada amaç belirten yapı?","I'm writing to...","I write because now.","My writing is...","I am write for..."),
        q("Kibar istek hangisi?","Could you send the details?","Send details now.","You send details.","Details give."),
        q("‘unfortunately’ ne demek?","maalesef","neyse ki","hemen","ayrıca"),
        q("‘confirm’ ne demek?","onaylamak","iptal etmek","eklemek","silmek"),
        q("Samimi kapanış hangisi?","Best wishes","Subject","Dear","Unfortunately"),
        q("‘attach a file’ ne demek?","dosya eklemek","dosya silmek","mesaj yazmak","yanıt vermek"),
        q("‘reply’ ne demek?","yanıtlamak","davet etmek","onaylamak","gecikmek"),
        q("Neden bildiren bağlaç?","because","but","then","and"),
        q("Sonuç bildiren bağlaç?","so","because","although","first"),
        q("Göndermeden önce ne kontrol edilmeli?","zaman, ayrıntı ve yazım","yalnız uzunluk","yalnız renk","hiçbir şey")
      ]
    })
  ];

  function rotateAnswers(course) {
    course.forEach(lessonItem => {
      lessonItem.final.forEach((item, index) => {
        const currentCorrect = item.options[item.answer];
        const target = (lessonItem.id + index) % item.options.length;
        const others = item.options.filter((_, optionIndex) => optionIndex !== item.answer);
        const reordered = [];
        let otherIndex = 0;
        for (let i = 0; i < item.options.length; i++) {
          reordered.push(i === target ? currentCorrect : others[otherIndex++]);
        }
        item.options = reordered;
        item.answer = target;
        if (!item.help) item.help = `Doğru cevap: ${currentCorrect}`;
      });
    });
  }

  function correctExistingContent(course) {
    const byId = id => course.find(item => item.id === id);
    byId(4).explain[1] = "'a/an' seçimi yazıdaki harfe değil, ilk sese göre yapılır: an apple, an hour; fakat a university. Çoğu başlangıç kelimesinde ses ve harf aynı olduğu için önce temel örneklerle çalışacağız.";
    byId(10).formulas[4] = "Can I have a cup of tea? = Bir fincan çay alabilir miyim?";
    byId(10).final[4].q = "‘Can I have a cup of tea, please?’ ne demek?";
    byId(10).final[4].options[byId(10).final[4].answer] = "Bir fincan çay alabilir miyim lütfen?";
    byId(11).formulas[4] = "There aren't any... = Hiç ... yok";
    const shirt = byId(15).vocab.find(item => item.en === "shirt");
    if (shirt) shirt.tr = "gömlek";
    byId(24).explain[2] = "'Mustn't' yasak anlamındadır: You mustn't smoke here = Burada sigara içmek yasak. 'Don't have to' ise zorunda değilsin demektir ve aynı anlamda değildir.";
    byId(30).goal = "Öğrenilen temel konuları birleştirip genişletilmiş A2 modülüne hazırlanmak.";
    byId(30).explain[2] = "Bu bölümden sonra A2 modülünde çoğullar, ayrıntılı sorular, miktar ifadeleri, zamirler, gerçek hayat görevleri, deneyimler, telefon, seyahat ve yazma çalışmaları bulunur.";
  }

  globalThis.applyCourseUpgrade = function applyCourseUpgrade(course) {
    correctExistingContent(course);
    course.push(...EXTENDED_COURSE);
    rotateAnswers(course);
    return course;
  };
})();
