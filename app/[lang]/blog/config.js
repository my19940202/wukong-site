// 目前先配置两个页面的数据
// 后面网站规模上来了 考虑动态博客

const classNameMap = {
    h1: 'text-2xl font-bold text-gray-800 mb-4',
    h2: 'text-xl font-bold text-gray-800 mb-4',
    p: 'text-gray-700 leading-relaxed py-3'
};

// 参考信息 https://baike.baidu.com/item/%E5%9B%9B%E5%A4%A7%E9%83%A8%E6%B4%B2/1899808#4
// https://xiyouji.fandom.com/zh/wiki/%E4%B8%96%E7%95%8C%E8%A7%82?variant=zh-hk#%E5%9C%B0%E7%90%86%E5%88%86%E5%B8%83
export const journey_to_west_worldview = {
    poster: {
        url: '/blog/worldview.map.jpg',
        w: 800,
        h: 563
    },
    list_zh: [
        {
            attr: 'h1',
            classname: classNameMap.h1,
            content: '西游记的世界观设定'
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                《西游记》的世界观十分有意思，它实际上是佛道儒三家的混合体，不仅有着修仙的神仙，同样也有修禅的佛祖。
                在这种混杂的世界观中有着不同的位面，包括人界、天庭和冥界。
            `
        },
        {
            attr: 'h2',
            classname: classNameMap.h2,
            content: '西游记背景'
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                故事基于唐朝僧人玄奘西天取经的真实历史事件。唐太宗贞观元年（627 年），25岁的玄奘法师从长安出发，途经中亚、阿富汗、巴基斯坦等地，历经艰难险阻，最终到达印度。
                在那里学习佛法两年多后，于贞观十九年（645 年）带回佛经 657 部。后来玄奘口述西行见闻，
                由弟子辩机辑录成《大唐西域记》，其弟子慧立、彦琮撰写的《大唐大慈恩寺三藏法师传》则为玄奘的经历增添了许多神话色彩，
                从此，唐僧取经的故事便开始在民间广为流传。
            `
        },
        {
            attr: 'h2',
            classname: classNameMap.h2,
            content: '地理分布'
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                《西游记》的世界主要分三个层次：天庭、凡间和幽冥界。
                天庭为大部分神仙的居所，存在着一个如同古代封建帝国朝廷的机制，掌管着整个世界的一切重要事务。
                凡间则是人类和动物居住的地方，同时也存在着妖怪、佛门神灵和部分神仙。
                幽冥界为掌管世间生灵死后魂魄的机关，其官员皆为神仙和佛门神灵，同样归天庭管制。
            `
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                在原始佛教的基本经典《阿含经》中，人间有四个大洲，分别在须弥山四方的咸海之中，亦即四大部洲，东胜神洲，南赡部洲，西牛贺洲和北俱卢洲，
                分别代表着人类社会里面四类社会阶层里，在《西游记》中被作者吴承恩借用，作为小说的世界观设定。
            `
        },
        {
            attr: 'img',
            classname: 'w-1/2 m-auto',
            src: 'https://636c-cloud1-5g5eyjtze161c202-1319072486.tcb.qcloud.la/static/wukong/blog/world.webp'
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                东胜神洲：位于须弥山之东，其土东狭西广，形如半月，人身长八肘，人寿二百五十岁。该洲有三事殊胜：土地极广、极大、极妙 。
            `
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                西牛贺洲：位于须弥山之西，其土形如满月，人面亦如满月，人身长十六肘，人寿五百岁。该洲有殊胜三事：多牛、多羊、多珠玉 。
            `
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                南赡部洲：位于须弥山之南，其土南狭北广，形如车厢，人身长四肘，人寿百岁，但多有夭折者。该洲人民勇猛强记而能造业行、能修梵行、有佛出世其土地中，因此三事胜于其他三洲及诸天 。
            `
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                北俱芦洲：位于须弥山之北，其土正方，犹如池沼，人身长三十二肘，人寿一千岁，无夭折者。该洲人民生活平等安乐，没有忧虑。
            `
        },
        {
            attr: 'h2',
            classname: classNameMap.h2,
            content: '种族情况'
        },
        // 妖精鬼怪，神佛仙
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                人：指的是凡间的人类，他们生活在南赡部洲的一个国家，即东土大唐。在《西游记》的世界观中，人处于较为弱势的地位，需要面对各种妖魔鬼怪的威胁，同时也受到神仙和佛祖的庇护和指引。
            `
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                妖精/妖怪：通常指由动植物或无生命物体通过修炼或某种特殊机缘而获得灵性，幻化成具有人形且具备一定法术能力的存在。例如，狐狸精、树妖等。它们的修行往往不那么正统，可能会为了自身利益而危害人间
            `
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                鬼怪:鬼一般是指人死后的灵魂所化，常被认为是阴森、恐怖的存在。怪则多是一些形状怪异、行为诡异的生灵。比如，吊死鬼、山怪等。
            `
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                神：包括天仙、地仙、神仙、人仙和鬼仙五类。其中，玉帝、太上老君、托塔天王等都是天仙；居住在蓬莱仙境的福禄寿三星，是神仙的代表；地仙之祖是五庄观的镇元大仙；想霸占唐僧锦斓袈裟的金池长老，属于人仙；城隍土地是鬼仙的代表。
            `
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                佛：在《西游记》构建的神佛世界中，分为横竖三世佛。竖三世佛，指时间维度上的三佛，分别是过去佛燃灯佛、现在佛释迦牟尼佛（如来）、未来佛弥勒佛；横三世佛，指空间维度上的三佛，分别是东方净琉璃世界的药师如来、中央娑婆世界的释迦牟尼佛、西方极乐世界的阿弥陀佛。
            `
        }
    ],
    list_en: [
        {
            attr: 'h1',
            classname: classNameMap.h1,
            content: 'Worldview setting'
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                The worldview of Journey to the West is very interesting as it is actually a mixture of Buddhism, Taoism and Confucianism, with not only immortals practicing immortality, but also Buddhists practicing Zen. There are different realms in this mixed worldview, including the human realm, the heavenly realm and the underworld.
            `
        },
        {
            attr: 'h2',
            classname: classNameMap.h2,
            content: 'Background'
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                The story is based on the real historical events of the Tang Dynasty monk Xuanzang's journey to the West. In the first year of Emperor Tang Taizong's reign (627), the 25-year-old Venerable Xuanzang set off from Chang'an and traveled through Central Asia, Afghanistan, Pakistan and other places, and finally arrived in India after enduring hardships and dangers.
                After studying Buddhism there for more than two years, he brought back 657 Buddhist scriptures in the 19th year of Zhenguan (645). Later, Xuanzang oral account of his journey to the west, his disciples Hui Li, Yen-Tsang wrote the “Great Tang Ci'en Temple Sanzang Venerable Master Biography” for Xuanzang's experience adds a lot of mythological color, and the story of the Tang monk to obtain the scriptures, the Tang monk to obtain the scriptures of the world.
                From then on, the story of the Tang monk fetching scriptures began to be widely circulated in the folklore.
            `
        },
        {
            attr: 'h2',
            classname: classNameMap.h2,
            content: 'Map'
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                The world of Journey to the West is divided into three main levels: the Heavenly Court, the Mortal World and the Underworld.
                The Heavenly Court is the residence of most of the gods and immortals, and there exists a mechanism like the court of an ancient feudal empire, which is in charge of all the important affairs of the whole world.
                The Mortal World is where humans and animals live, and there are also demons, Buddhist deities and some immortals.
                The Underworld is the organ in charge of the souls of the world's living beings after death, and its officials are all immortals and Buddhist deities, also under the control of the Heavenly Court.
            `
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                In the basic classic of primitive Buddhism, “Ahan Sutra”, there are four continents on earth, respectively, in the four directions of Mount Sumeru in the Aral Sea, that is, the four great continents, Dongsheng Divine Continent, South Alimony, West Niuga Continent and North Juruzhou, respectively.
                Respectively represents the human society inside the four social classes, in the “Journey to the West” by the author Wu Chengen borrowed, as the novel's worldview setting.
            `
        },
        {
            attr: 'img',
            classname: 'w-1/2 m-auto',
            src: 'https://636c-cloud1-5g5eyjtze161c202-1319072486.tcb.qcloud.la/static/wukong/blog/world.webp'
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                The Eastern Victory Divine Continent: Located in the east of Mount Sumeru, the land is narrow in the east and wide in the west, shaped like a half-moon, with a human body eight elbows long and a life span of 250 years. The continent is characterized by three things: the land is extremely wide, extremely large and extremely wonderful.
            `
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                Sai Niuga Continent: Located in the west of Mount Sumeru, its soil is shaped like a full moon, and the human face is also like a full moon; the human body is sixteen elbows long, and the human life span is five hundred years. The continent has three things that make it special: many cows, many sheep, and many jewels.
            `
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                South Alimony: located in the south of the Sumeru Mountains, its land south narrow north wide, shaped like a carriage, the human body is four elbows long, life expectancy of a hundred years, but there are many premature deaths. The people of the continent is brave and strong memory and can make karma line, can practice Brahma line, there is a Buddha in its land, so the three things are better than the other three continents and the heavens.
            `
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                The North Club Continent: Located north of Mount Sumeru, the land is square, like a pond, with a human body 32 elbows long and a life expectancy of 1,000 years, with no premature deaths. The people of this continent live equally and happily, with no worries.
            `
        },
        {
            attr: 'h2',
            classname: classNameMap.h2,
            content: 'Races'
        },
        // 妖精鬼怪，神佛仙
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                People: refers to the mortal human beings, who live in a country in South Jambudvipa, that is, the Eastern Land of the Great Tang. In the worldview of Journey to the West, people are in a more vulnerable position, need to face the threat of various demons and monsters, but also sheltered and guided by the gods and Buddha.
            `
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                Demon: Usually refers to the existence of animals, plants or inanimate objects that have gained spirituality through cultivation or some special chance, and have been transformed into a being with human form and certain spellcasting ability. Examples include fox spirits and tree demons. Their cultivation is often not so orthodox and they may endanger the earth for their own interests.
            `
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                Ghosts and Monsters:Ghosts generally refer to the souls of people who have died, and are often considered to be eerie and terrifying beings. Monsters, on the other hand, are spirits with strange shapes and bizarre behaviors. For example, hanged ghosts and mountain monsters.
            `
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                Gods: These include the five categories of Heavenly Immortals, Earth Immortals, Divine Immortals, Human Immortals and Ghost Immortals. Among them, the Jade Emperor, the Supreme Lord Laojun and the Pagoda Heavenly King are all heavenly immortals; the three stars of blessing, fortune and longevity, who live in the fairyland of Penglai, are the representatives of the gods; the ancestor of the earthly immortals is Zhen Yuan Daxian of the Wujuang Guan; the Golden Pond Elder, who wants to take over the Tang Monk's brocade robes, belongs to the Human Immortals; and the City God and Land are the representatives of the Ghost Immortals.
            `
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                Buddha: In the world of gods and Buddhas constructed in Journey to the West, it is divided into the horizontal and vertical three Buddhas. The Vertical Three Buddhas, referring to the three Buddhas in the dimension of time, are the past Buddha, the Burning Lamp Buddha, the present Buddha, Shakyamuni Buddha (Rudra), and the future Buddha, Maitreya Buddha; and the Horizontal Three Buddhas, referring to the three Buddhas in the dimension of space, are the Yakshi Rudra in the Eastern Pure Glazed World, the Shakyamuni Buddha in the Central Saha World, and the Amitabha Buddha in the Western World of Ultimate Bliss.
            `
        }
    ]
};

export const why_monster_wants_to_be_human = {
    poster: {
        url: '/blog/monster_want_be_human.jpg',
        w: 800,
        h: 563
    },
    list_zh: [
        {
            attr: 'h1',
            classname: classNameMap.h1,
            content: '为什么妖怪想要变成人'
        },
        {
            attr: 'p',
            classname: classNameMap.p,
            content: `
                
            `
        }
    ],
    list_en: [
        {
            attr: 'h1',
            classname: classNameMap.h1,
            content: '为什么妖怪想要变成人'
        },
    ]
};