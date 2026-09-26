// Transcribed verbatim from "MENU MAJESTIC INDIA.pdf" (12 pages). Source of truth — do not edit prices here without the printed menu.
// An item has either `price` (string, as printed) or `prices` ([{ label, value }]) when the menu lists several sizes.

export const menu = [
  {
    id: 'aperitifs',
    nav: 'Apéritifs',
    title: 'Apéritifs',
    groups: [
      {
        items: [
          { name: 'Kir (12cl)', desc: 'Framboise, cassis, mûre, pêche, fraise, melon', price: '6,00 €' },
          { name: 'Kir Royal (12cl)', price: '10,00 €' },
          { name: 'Coupe de Champagne (12cl)', price: '10,00 €' },
          { name: 'Martini (blanco, rosso, rose) (6cl)', price: '6,00 €' },
          { name: 'Ricard (3cl), Porto (5 cl)', price: '6,00 €' },
          { name: 'J&B, Johnny Walker Red label (5cl)', price: '8,00 €' },
          { name: 'Jack Daniels, Chivas Regal, Johnny Walker Black Label (5cl)', price: '10,00 €' },
        ],
      },
      {
        title: 'Cocktails',
        items: [
          { name: 'Long Island', desc: 'Rhum, Gin, Vodka, triple sec, Pulco vert et Coca', price: '11,00 €' },
          { name: 'Kamasutra', desc: "Soho litchi, liqueur de fraise et jus d'ananas", price: '10,00 €' },
          { name: 'Hurricane', desc: "Rhum, Pulco vert, fruit de la passion, jus d'orange et grenadine", price: '10,00 €' },
          { name: 'Mojito', desc: 'Rhum – Havana 3 ans, menthe, citron vert, sucre de canne', price: '11,00 €' },
          { name: 'Caïrapinha', desc: 'cachaca, citron vert, sucre de canne et soda', price: '11,00 €' },
          { name: 'Mai Tai', desc: "Rhum triple sec, jus d'ananas, citron vert, limonade", price: '10,00 €' },
          { name: 'Spritz Aperol avec prosecco', price: '10,00 €' },
          { name: 'Cuba Libra', desc: 'Rhum blanc, coca, citron', price: '10,00 €' },
          { name: 'Gin Tonic', desc: 'gin, Schweppes et citron vert', price: '10,00 €' },
          { name: 'Tequilla Sunrise', desc: "tequilla, Jus d'orange et grenadine", price: '10,00 €' },
          { name: 'Green Eyes', desc: "vodka, curaçao bleu et Jus d'orange", price: '10,00 €' },
        ],
      },
    ],
  },
  {
    id: 'entrees',
    nav: 'Entrées',
    title: 'Entrées',
    groups: [
      {
        items: [
          { name: 'Raita de concombre', desc: 'Yaourt battu au concombre et aux tomates / yogourt mixed with cucumbers and tomatoes', price: '6,00 €' },
          { name: 'Salade Mumbai', desc: 'Concombre, tomates, oignons et poivrons', price: '8,00 €' },
          { name: 'Salade aux crevettes / Shrimps Salad', desc: 'Salade verte et cocktail de crevettes', price: '9,00 €' },
          { name: 'Salade poulet tikka / Chicken tikka Salad', desc: 'Salade verte, concombre, tomate et poulet grillé', price: '9,00 €' },
        ],
      },
      {
        title: 'Beignets – Fritters',
        items: [
          { name: 'Samosa', desc: 'Chausson fourré aux légumes (vegetables) finement épicés', price: '9,00 €' },
          { name: 'Pakora', desc: 'Beignets de pomme de terre (potatoes) ou aubergine (egg plant) ou aux oignons', price: '7,00 €' },
          { name: 'Chicken Pakora', desc: 'Beignets de poulet parfumés aux herbes fraîches et épices', price: '8,00 €' },
          { name: 'Crevettes Pakora / Shrimps Pakora', desc: 'Beignets de crevettes à la farine de pois chiche parfumé aux herbes fraîches, épices', price: '9,00 €' },
          { name: 'Mix pakoda (pour 2 personnes)', desc: 'Beignets de poulet, crevettes pakoda, pomme de terre, oignon et aubergines', price: '12,00 €' },
          { name: 'Mix pakoda (pour 4 personnes)', price: '24,00 €' },
          { name: 'Chilli paneer', price: '12,00 €' },
        ],
      },
    ],
  },
  {
    id: 'tandoori',
    nav: 'Tandoori',
    title: "Hors d'œuvre Tandoori",
    subtitle: 'Tandoori appetizers',
    groups: [
      {
        items: [
          { name: 'Poulet Tandoori / Chicken Tandoori', desc: 'Cuisse de poulet marinée dans une sauce au yaourt et aux herbes fraîches', price: '9,00 €' },
          { name: 'Poulet Tikka / Chicken Tikka', desc: 'Blanc de poulet mariné aux herbes fraîches', price: '9,00 €' },
          { name: 'Sheek Kabab / Lamb Kabab', desc: "Viande d'agneau haché aux oignons, épices et herbes fraîches", price: '9,00 €' },
          { name: 'Agneau Tikka / Lamb Tikka', desc: "Morceaux de gigot d'agneau marinés aux herbes fraîches", price: '9,00 €' },
          { name: 'Saumon Tikka / Salmon Tikka', desc: 'Saumon mariné dans une sauce maison', price: '10,00 €' },
          { name: 'Gambas Tandoori / Prawns (3 pieces) Tandoori', desc: 'Gambas marinées dans une sauce maison aux herbes', price: '16,00 €' },
          { name: 'Tandoori Gourmand (pour une personne)', desc: 'Assortiments de grillades (saumon, poulet, agneau, gambas)', price: '24,00 €' },
        ],
      },
    ],
  },
  {
    id: 'plats',
    nav: 'Plats',
    title: 'Plats',
    subtitle: 'Main course',
    note: 'Tous nos plats sont servis avec du Riz basmati et salade / All main course dishes are served with Basmati rice and salad',
    groups: [
      {
        title: 'Volaille / Chicken',
        items: [
          { name: 'Poulet Curry / Chicken Curry', desc: "Poulet préparé dans une sauce à base de tomates et d'oignons", price: '17,00 €' },
          { name: 'Poulet Vindaloo / Chicken Vindaloo', desc: 'Poulet à la mode de Goa préparé dans une sauce pimentée avec des pommes de terre', price: '18,00 €' },
          { name: 'Poulet Madras / Chicken Madras', desc: "Poulet à mode de l'Inde du Sud, dans une sauce relevée", price: '18,00 €' },
          { name: 'Poulet Shahi Korma / Chicken Shahi Korma', desc: "Morceaux de poulet préparés dans une sauce à base de crème fraîche, d'amandes et de noix de cajou", price: '19,00 €' },
          { name: 'Poulet Tikka Masala / Chicken Tikka Masala', desc: 'Poulet grillé, servis dans une sauce épicée aux poivrons', price: '19,00 €' },
          { name: 'Butter Chicken', desc: 'Poulet grillé servi dans une sauce à base de crème fraîche et herbes aromatiques', price: '19,00 €' },
          { name: 'Poulet Saagwala / Chicken with Spinach', desc: 'Poulet préparé avec des épinards et des herbes fraîches', price: '19,00 €' },
        ],
      },
      {
        title: 'Agneau / Lamb',
        items: [
          { name: 'Agneau Curry / Lamb Curry', desc: "Agneau préparé dans une sauce à base de tomates et d'oignons", price: '20,00 €' },
          { name: 'Agneau Vindaloo / Lamb Vindaloo', desc: 'Agneau à la mode de Goa préparée dans une sauce pimentée avec des pommes de terre', price: '21,00 €' },
          { name: 'Agneau Madras / Lamb Madras', desc: "Agneau à mode de l'Inde du Sud, dans une sauce relevée", price: '21,00 €' },
          { name: 'Agneau Shahi Korma / Lamb Shahi Korma', desc: "Morceaux d'agneau préparés dans une sauce à base de crème fraîche, d'amandes et de noix de cajou", price: '22,00 €' },
          { name: 'Agneau Tikka Masala / Lamb Tikka Masala', desc: 'Agneau grillé, servi dans une sauce épicée aux poivrons', price: '22,00 €' },
          { name: 'Agneau Saagwala / Lamb Spinach', desc: 'Agneau préparé avec des épinards et des herbes fraîches', price: '22,00 €' },
          { name: 'Keema matar', desc: 'curry de agneau hachee avec petit pois', price: '21,00 €' },
        ],
      },
      {
        title: 'Poisson (dos de cabillaud) / Fish (Cod fillet)',
        items: [
          { name: 'Poisson Curry / Fish Curry', desc: "Poisson préparé dans une sauce à base de tomates et d'oignons", price: '17,00 €' },
          { name: 'Poisson Madras / Fish Madras', desc: "Poisson à mode de l'Inde du Sud, dans une sauce relevée", price: '18,00 €' },
          { name: 'Poisson Korma / Fish Korma', desc: 'Poisson servi dans une sauce maison au lait de coco, subtilement épicé', price: '19,00 €' },
        ],
      },
      {
        title: 'Crevettes & Gambas / Shrimps & Prawns',
        items: [
          { name: 'Crevettes Curry / Shrimps Curry', desc: "Crevettes préparées dans une sauce à base de tomates et d'oignons", price: '18,00 €' },
          { name: 'Crevettes Madras / Shrimps Masala', desc: "Crevettes servies dans une sauce à base de tomate, d'oignons et d'herbes", price: '19,00 €' },
          { name: 'Crevettes Korma / Shrimps Korma', desc: "Crevettes préparées dans une sauce à base de crème fraîche, d'amandes et de noix de cajou", price: '20,00 €' },
          { name: 'Gambas Curry / Prawns Curry', desc: "Gambas servies dans une sauce à base de tomate, d'oignons et d'herbes", price: '28,00 €' },
          { name: 'Gambas Shahi Korma / Prawns Shahi Korma', desc: "Gambas servies dans une sauce à base de crème fraîche, d'amandes et de noix de cajou", price: '30,00 €' },
        ],
      },
    ],
  },
  {
    id: 'vegetarien',
    nav: 'Végétarien',
    title: 'Légumes',
    subtitle: 'Vegetables Curry',
    note: 'Servi sans riz basmati',
    groups: [
      {
        items: [
          { name: 'Chana Masala / Chick Peas Masala', desc: 'Pois chiche dans une sauce curry', price: '11,00 €' },
          { name: 'Jeera Aloo / Caraway Potatoes', desc: 'Pommes de terre au cumin', price: '11,00 €' },
          { name: 'Rajmah / Kidney Beans', desc: 'Haricots rouges préparés dans une sauce maison', price: '11,00 €' },
          { name: 'Aloo Palak / Spinach Potatoes', desc: 'Epinards hachés avec des pommes de terre.', price: '11,00 €' },
          { name: 'Mix Légumes Curry / Mix Vegetables', desc: 'Légumes variés dans une sauce curry', price: '11,00 €' },
          { name: 'Daal Masala / Lentils Masala', desc: 'Lentilles mijotées dans une sauce maison', price: '11,00 €' },
          { name: 'Palak Paneer / Cheese Spinach', desc: 'Epinard hachés servis avec des dés de fromage indien', price: '13,00 €' },
          { name: 'Kadai Paneer massala / Indian Cheese', desc: 'Fromage Indien servi dans une sauce à base de poivrons, crème, herbes et noix de cajou', price: '14,00 €' },
          { name: 'Matar Paneer / Indian Cheese with green peas', desc: 'Fromage Indien servi avec des petit pois dans sauce maison aux herbes fraîches', price: '14,00 €' },
          { name: "Curry d'aubergine / Eggplant Curry", desc: 'Aubergines préparées avec des oignons et tomates', price: '13,00 €' },
          { name: 'Navratna Légumes Korma / Vegetable Korma', desc: 'Légumes préparés dans une sauce à base de crème fraîche et noix de cajou', price: '13,00 €' },
          { name: 'Paneer au chilli / Chilli paneer', desc: 'Indien cheese cooked with green peppers, green chillis oignons and tomatoes', price: '14,00 €' },
        ],
      },
    ],
  },
  {
    id: 'biryanis',
    nav: 'Biryanis',
    title: 'Biryanis',
    note: "Plat complet particulièrement prisé par les empereurs et les rois Moghols préparé délicatement dans une sauce d'amande et de noix de cajou, accompagné de riz Basmati safrané ajouté en cours de cuisson.",
    groups: [
      {
        items: [
          { name: 'Biryani aux légumes / vegetables', price: '18,00 €' },
          { name: 'Biryani au Poulet / chicken', price: '20,00 €' },
          { name: "Biryani à l'Agneau / Lamb", price: '22,00 €' },
          { name: 'Biryani aux Crevettes / Shrimps', price: '22,00 €' },
          { name: 'Biryani Mumbai special', price: '26,00 €' },
        ],
      },
    ],
  },
  {
    id: 'naans',
    nav: 'Naans',
    title: 'Nans',
    subtitle: 'Breads',
    note: '(Pains Indiens faits maison) Les pains traditionnels sont cuits au Tandoor (four traditionnel indien en terre cuite). Ils accompagnent délicieusement les mets.',
    groups: [
      {
        items: [
          { name: 'Nan Nature / Simple Nan', desc: 'Galette de farine de blé légèrement levée', price: '3,50 €' },
          { name: 'Butter Nan', desc: 'Galette de farine avec beurre doux / soft butter', price: '5,50 €' },
          { name: "Nan à l'ail / Garlic Nan", desc: "Galette de farine de blé fourrée à l'ail", price: '4,50 €' },
          { name: 'Nan au Fromage / Cheese Nan', desc: 'Galette de farine de blé fourrée au fromage', price: '5,00 €' },
          { name: 'Kulcha Nan / Vegetable Nan', desc: 'Galette fourrée aux légumes', price: '5,50 €' },
          { name: 'Keema Nan / Meat Nan', desc: "Galette fourrée à la viande d'agneau/lamb", price: '5,50 €' },
          { name: 'Peshawari Nan', desc: 'Galette fourrée aux fruits secs', price: '5,50 €' },
          { name: 'Chapati', desc: 'Galette de farine de blé complet', price: '3,50 €' },
          { name: 'Paratha', desc: 'Galette feuilletée de farine de blé au beurre', price: '5,00 €' },
          { name: 'Garlic Cheese Nan', desc: "Galette farine de blé fourrée avec fromage et à l'ail", price: '5,50 €' },
        ],
      },
    ],
  },
  {
    id: 'menus',
    nav: 'Menus',
    title: 'Assortiments & Menus',
    groups: [
      {
        title: 'Assortiments de plats',
        items: [
          { name: 'Assortiment Mysore', desc: 'Poulet tandoori, salade, mixte légumes curry, riz et nan fromage', descEn: 'Chicken tandoori, salad, mix vegetable curry, rice and cheese nan', price: '20,00 €' },
          { name: 'Assortiment Delhi', desc: 'Agneau tikka, salade, mixte legumes curry, riz et nan fromage', descEn: 'Lamb tikka, salad, mix vegetable curry, rice and cheese nan', price: '22,00 €' },
          { name: 'Assortiment Goa', desc: "Gambas Tandoori, Salade, Caviar d'Aubergine, Riz et Nan Fromage", descEn: 'Prawns Tandoori, salad, egg plant curry, Rice and Cheese Nan', price: '30,00 €' },
        ],
      },
    ],
    sets: [
      {
        name: 'Menu Végétarien',
        price: '27,00 €',
        summary: '1 Entrée 1 Plat 1 Dessert au Choix et un café',
        courses: [
          {
            title: 'Entrée',
            items: [
              { name: 'Pakora (pomme de terre, aubergine et oignons)', desc: 'Beignets de légumes frits à la farine de pois chiches parfumés aux herbes fraîches, épices' },
              { name: 'Raita', desc: 'Yaourt battu au concombre et aux tomates, délicatement parfumé avec de la coriandre' },
            ],
            note: "L'entrée est servie avec un nan nature ou un nan au fromage",
          },
          {
            title: 'Plat principal',
            subtitle: 'servi avec du Riz Basmati',
            items: [
              { name: 'Mix Légume Curry / Vegetable curry', desc: 'Haricots verts, petits pois, carottes, choux fleur et pommes de terres préparés avec des tomates et des épices' },
              { name: 'Daal Masala / Lentils Massala', desc: 'Lentilles mijotées dans une sauce maison' },
              { name: 'Aloo Palak / Spinach Potatoes', desc: 'Epinards hachés avec des pommes de terre' },
              { name: 'Paneer makhni', desc: 'Fromage indien servi dans une sauce a la base de creme fraiche et herbes aromatique' },
            ],
          },
          {
            title: 'Desserts',
            items: [{ name: 'Gulab Jamun' }, { name: 'ou Halwa de semoule' }, { name: 'ou glace/sorbet 2 boules (au choix)' }],
          },
        ],
      },
      {
        name: 'Menu Maison',
        price: '35,00 €',
        summary: '1 Entrée 1 Plat 1 Dessert au Choix et un café',
        courses: [
          {
            title: 'Entrée',
            items: [
              { name: 'Sheek Kabab / Lamb Kabab', desc: "Viande d'agneau haché avec des oignons, des épices et des herbes fraîches" },
              { name: 'Chicken Pakora', desc: 'Beignets de poulet à la farine de pois chiche parfumé aux herbes fraîches et épices' },
              { name: 'Poulet Tandoori / Chicken Tandoori', desc: 'Cuisse de poulet marinée dans une sauce au yaourt et aux herbes fraîches' },
            ],
            note: "L'entrée est servie avec un nan nature ou nan au fromage ou nan à l'ail",
          },
          {
            title: 'Plat principal',
            subtitle: 'servi avec du Riz Basmati',
            items: [
              { name: 'Agneau Curry / Lamb Curry', desc: "Agneau préparé dans une sauce à base de tomates et d'oignons" },
              { name: 'Poulet Shahi Korma / Chicken Korma', desc: "Morceaux de poulet préparés dans une sauce à base de crème fraîche, d'amandes et de noix de cajou" },
              { name: 'Biryani aux légumes / vegetables' },
            ],
          },
          {
            title: 'Desserts',
            items: [{ name: 'Kulfi Mangue ou Pistache (fait maison)' }, { name: 'ou Sorbet / Glace 2 boules' }, { name: 'ou Gulab jamun' }, { name: 'Halwa de semoule' }],
          },
        ],
      },
      {
        name: "Menu Enfant / Childrens' Menu",
        price: '15,00 €',
        courses: [
          {
            items: [
              { name: 'Poulet shahi korma ou Butter chicken avec du riz basmati', desc: '1 verre de jus de fruit (au choix) et une boule de glace (au choix)' },
              { name: 'Chicken shahi korma or butter chicken with Basmati rice', desc: '1 Glass of juice and one ice-cream scoop of your choice.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'desserts',
    nav: 'Desserts',
    title: 'Desserts',
    groups: [
      {
        items: [
          { name: 'Halwa de semoule (fait maison) / semolina cake', price: '7,00 €' },
          { name: 'Gulab Jamun', desc: 'Bonbons de lait au sirop parfumés à la cardamome', price: '7,00 €' },
          { name: 'Nougat glacé aux fruits confits', price: '7,00 €' },
          { name: 'Fondant au chocolat et glace vanille', price: '8,00 €' },
          { name: 'Café gourmand', desc: 'café servi avec des friandises maison', price: '9,00 €' },
          { name: 'Kulfi à la pistache ou à la mangue (fait maison)', desc: 'glace traditionnelle indienne', price: '8,00 €' },
          { name: 'Café Liégeois', price: '8,00 €' },
          { name: 'Coupe Colonel', desc: 'sorbet citron vert avec vodka', price: '9,00 €' },
          { name: 'Mango Punch', desc: 'glace vanille, sorbet mangue et rhum', price: '9,00 €' },
          { name: 'Glaces (2 boules)', desc: 'Parfums : caramel au beurre sale, chocolat, café, vanille', price: '7,00 €' },
          { name: 'Sorbets (2 boules)', desc: 'Parfums : fraise (strawberry), mangue, citron vert', price: '7,00 €' },
        ],
      },
    ],
  },
  {
    id: 'boissons',
    nav: 'Boissons',
    title: 'Boissons',
    groups: [
      {
        title: 'Boissons sans Alcool (alcohol free)',
        items: [
          { name: 'Sharbat', desc: 'Boisson traditionnelle au sirop de rose', price: '8,00 €' },
          { name: 'Nimbu Paani', desc: "Boisson traditionnelle à l'eau citronnée aux épices douces", price: '8,00 €' },
          { name: 'Bombay Beach', desc: "Jus d'orange, ananas, sirop de rose", price: '8,00 €' },
        ],
      },
      {
        title: 'Mocktails (alcohol free)',
        items: [
          { name: 'Pineapple Sunshine', desc: "Jus d'ananas, jus d'orange, sirop fruit de la passion et limonade", price: '8,00 €' },
          { name: 'California', desc: "Jus d'ananas, jus d'orange, jus de pamplemousse et sirop de grenadine", price: '8,00 €' },
        ],
      },
      {
        title: 'Boissons Traditionnelles (33cl)',
        note: 'Le lassi est un yaourt battu et aromatisé, servi glacé.',
        items: [
          { name: 'Lassi nature ou salé', price: '6,00 €' },
          { name: 'Lassi sucré', price: '7,00 €' },
          { name: 'Lassi mangue ou rose', price: '8,00 €' },
        ],
      },
      {
        title: 'Bières (33cl) (Bouteille)',
        items: [
          { name: 'King Fisher 4.5% alc/vol', desc: 'Bières Blonde indiennes', price: '7,00 €' },
          { name: 'Taj Mahal 5.0% alc/vol', desc: 'Bières Blonde indiennes', price: '7,00 €' },
          { name: 'Heineken 5.0% alc/vol', price: '7,00 €' },
        ],
      },
      {
        title: 'Boissons',
        items: [
          { name: 'Coca, Coca Zero', price: '6,50 €' },
          { name: 'Orangina, Fanta (33 cl)', price: '5,00 €' },
          { name: 'Schweppes agrumes (33 cl)', price: '5,00 €' },
          { name: "Jus d'Orange, Jus d'Ananas, Jus d'Mangue (25 cl)", price: '6,00 €' },
        ],
      },
      {
        title: 'Eaux Minérales',
        columns: ['Demi (50 cl)', '1 Litre'],
        items: [
          { name: 'Evian', prices: ['4,50 €', '8,00 €'] },
          { name: 'San Pellegrino', prices: ['4,50 €', '8,00 €'] },
        ],
      },
      {
        title: 'Boissons Chaudes',
        items: [
          { name: 'Café / Décaféiné', price: '2,50 €' },
          { name: 'Café crème', price: '4,50 €' },
          { name: 'Cappuccino', price: '6,00 €' },
          { name: 'Thé nature / Thé vert (green tea)', price: '5,00 €' },
          { name: 'Thé à la menthe fraîche', price: '6,00 €' },
          { name: 'Thé aux épices Indien', price: '6,00 €' },
          { name: 'Tchai, thé Indien aux épices avec du lait / milk', price: '7,00 €' },
          { name: 'Infusion / Herbal tea', desc: 'Tilleul, Verveine, Camomille (Lime, Verbena, Chamomile)', price: '5,00 €' },
        ],
      },
      {
        title: 'Digestifs',
        items: [
          { name: 'Liqueurs Indiennes', desc: 'mangue, gingembre, Cardamone (mango, ginger, cardamom)', price: '7,00 €' },
          { name: 'Get 27, Get 31, Baileys', price: '8,00 €' },
          { name: 'Cognac, Armagnac, Calvados', price: '8,00 €' },
        ],
      },
    ],
  },
  {
    id: 'vins',
    nav: 'Vins',
    title: 'La Cave de Majestic India',
    note: "« L'abus de l'alcool est dangereux pour la santé, à consommer avec modération »",
    groups: [
      {
        title: 'Vins Rouges',
        columns: ['Demi-Bouteille (375 ml)', 'Bouteille (750 ml)'],
        items: [
          { name: 'Bordeaux AOC', prices: ['16,00 €', '30,00 €'] },
          { name: 'Brouilly AOC', prices: ['17,00 €', '32,00 €'] },
          { name: 'Saint-Emilion AOC', prices: ['19,00 €', '36,00 €'] },
          { name: 'Saumur Champigny', prices: ['17,00 €', '32,00 €'] },
          { name: 'Grover vin souvignon', prices: [null, '30,00 €'] },
          { name: 'Pauillac AOC', prices: [null, '60,00 €'] },
          { name: 'Margaux AOC', prices: [null, '90,00 €'] },
        ],
      },
      {
        title: 'Vins Rosés',
        columns: ['Demi-Bouteille (375 ml)', 'Bouteille (750 ml)'],
        items: [
          { name: 'Côtes de Provence-Note Bleu AOC', prices: ['16,00 €', '30,00 €'] },
          { name: 'Mateus the original', prices: ['17,00 €', '32,00 €'] },
          { name: 'Sancerre AOC', prices: ['19,00 €', '36,00 €'] },
        ],
      },
      {
        title: 'Vins Blancs',
        columns: ['Demi-Bouteille (375 ml)', 'Bouteille (750 ml)'],
        items: [
          { name: 'Riesling AOC', prices: ['17,00 €', '32,00 €'] },
          { name: 'Sancerre AOC', prices: ['19,00 €', '36,00 €'] },
        ],
      },
      {
        title: 'Vins en Pichet',
        columns: ['Verre / glass', 'Quart (25 ml)', 'Demi (50 ml)'],
        items: [
          { name: 'Rouge', prices: ['5,00 €', '9,00 €', '16,00 €'] },
          { name: 'Rosé', prices: ['5,00 €', '9,00 €', '16,00 €'] },
          { name: 'Blanc', prices: ['5,00 €', '9,00 €', '16,00 €'] },
        ],
      },
      {
        title: 'Champagne (750 ml)',
        items: [
          { name: 'Nicolas Feuillatte', price: '60,00 €' },
          { name: 'Ruinart', price: '95,00 €' },
        ],
      },
    ],
  },
]

// Homepage highlights — every entry references a real dish above by category id + exact name.
export const signatures = [
  { category: 'tandoori', name: 'Poulet Tikka / Chicken Tikka', image: 'tikka' },
  { category: 'plats', name: 'Poulet Shahi Korma / Chicken Shahi Korma', image: 'korma' },
  { category: 'plats', name: 'Agneau Curry / Lamb Curry', image: 'lamb' },
  { category: 'plats', name: 'Poulet Madras / Chicken Madras', image: 'madras' },
  { category: 'biryanis', name: 'Biryani Mumbai special', image: 'biryani' },
  { category: 'entrees', name: 'Samosa', image: 'samosa' },
]

export function findDish(categoryId, name) {
  const cat = menu.find((c) => c.id === categoryId)
  const dish = cat?.groups.flatMap((g) => g.items).find((i) => i.name === name)
  if (!dish) throw new Error(`Signature dish not in menu: ${categoryId} / ${name}`)
  return dish
}
