const currentBubbling = [
  {
    title: "Pineapple Tepache",
    author: "Started 3/6/26<br>Finished 7/6/26",
    image: "/images/pineapple-tepache.png",
    status: "Complete",
    note: "A little too sour for my liking, but nothing sugar can't fix!",
    url: "/kitchen/fermentation/index.html#pineapple-tepache"
  },
  {
    title: "Preserved Satsumas",
    author: "Started 23/4/26",
    status: "In Progress",
    image: "/images/preserved-satsumas.jpg",
    url: "/kitchen/fermentation/index.html#preserved-satsumas"
  },
  {
    title: "Garlic Honey",
    author: "Started 31/3/26",
    status: "Aging Gracefully",
    image: "/images/honey-garlic.jpg",
    url: "/kitchen/fermentation/index.html#garlic-honey"
  },
  {
    title: "Kombucha SCOBY",
    author: "Started 16/4/26",
    status: "Deceased",
    project: "kombucha",
    image: "/images/kombucha-scoby.jpg",
    note: "The heat mat was not enough."
  },
  {
    title: "Satsuma Vinegar",
    author: "Started 3/3/26",
    status: "Almost Ready?",
    image: "/images/satsuma-vinegar.jpg",
    note: "Taking much longer than normal vinegars, may need to try again.",
    url: "/kitchen/fermentation/index.html#satsuma-vinegar"
  },
];

const fermentationTimeline = [

  {
    id: "sourdough-one",
    title: "A yeast pet is born",
    date: "2026-03-02",
    type: "photo",
    image: "/images/journal/start-sourdough-todo.png",
    imageSize: "landscape",
    text: "With the dream of my own sourdough firmly in mind, I mix together flour & water for a <a href='/post/sourdough-starter'>sourdough starter</a>.<br>It immediately gets named in honour of my dwarven chef DnD character: introducing Phyllis!",
  },
  {
    title: "🍊 A use for satsuma peels",
    date: "2026-03-03",
    type: "note",
    text: "So you're saying I literally just add peels to water, stir it daily for a while, then leave it be and I'll get vinegar?",
  },
  {
    title: "Phyllis outgrows her pot",
    date: "2026-03-04",
    type: "note",
    text: "A desperate search of the house reveals the remains of a broken food processor which is somehow deemed most appropriate.",
  },
  {
    date: "2026-03-09",
    type: "photo",
    title: "6 Months vs 6 Weeks",
    image: "/images/journal/lentil-soy-sauce-recipe.png",
    imageSize: "square",
    text: "Having found a much faster way to make 'soy sauce', I decide it is a worthy way to use up lentils. Between halving the recipe, then forgetting half way through, desperately googling what 250g of dried lentils should come to when cooked, running out of jars, and having to use a flower vase - the implementation could have gone better...",
  },
  {
    title: "🍞 First bread started",
    date: "2026-03-10",
    type: "note",
    text: "After a week of starter feeding and strange pancakes (courtesy of not wasting the discard), my first <a href='/post/sourdough-bread'>sourdough bread</a> is underway!<br>Spoiler: it was deemed a bit dense but generally tasty. I was also not smart enough to take a photo.",
  },
  {
    date: "2026-03-10",
    type: "note",
    text: "The first batch of mason jars is ordered...",
  },
  {
    date: "2026-03-13",
    type: "photo",
    image: "/images/satsuma-vinegar.jpg",
    imageSize: "square",
    text: "Satsuma peels are strained from the vinegar to be, and the jar is returned to its corner to await chemical magic.",
  },
  {
    title: "🍞 Round two",
    date: "2026-03-15",
    type: "note",
    text: "Sourdough amount increased from the original recipe & the second bread is judged successful by both James & his parents. No, I still didn't take a photo.",
  },
  {
    title: "A foray into dairy",
    date: "2026-03-17",
    type: "photo",
    image: "/images/journal/yogurt-recipe.png",
    imageSize: "landscape",
    text: "Despite a distinct lack of any dedicated equipment beyond a pan, thermometer, and a very briefly turned on oven that doesn't have a setting below 60°C; the first new mason jar is successfully converted into a jar of yogurt.<br>It turns out Echo approves of yogurt and must henceforth always be permitted to lick the yogurt spoon after serving.",
  },
  {
    date: "2026-03-19",
    type: "photo",
    image: "/images/journal/cordial-recipe.png",
    imageSize: "landscape",
    text: "I create my own cordial from further satsuma peels. For some reason I then don't use it, and it still remains in the fridge untouched 3 months later... wait does that say keeps 2-3 weeks? 😅",
  },
  {
    title: "Homemade cultured butter anyone?",
    date: "2026-03-23",
    type: "note",
    text: "An attempt at cultured butter is made. Twenty-four hours later, and after a considerable amount of manual shaking delegated to James, I present butter. It looks and tastes exactly like supermarket butter. Whether this is an impressive success or a spectacular waste of effort remains unclear.",
  },
  {
    id: "kombucha-one",
    title: "Starting a kombucha SCOBY - attempt #1",
    date: "2026-03-23",
    type: "photo",
    image: "/images/journal/kombucha-recipe.png",
    imageSize: "landscape",
    text: "Oh how simple the instructions seemed. How naive I was back then to think I wouldn't still be stuck on the SCOBY three months later... (Spoiler: this recipe is a lie, it does not go well.)"
  },
  {
    title: "A satisfying finale",
    date: "2026-03-25",
    type: "note",
    text: "A meal fit for kings: homemade sourdough bread, homemade butter, two types of homemade cheese, and chestnut soup.<br>What a satisfying end to a successful month of learning about fermentation. What do you mean there's more?",
  },
  {
    id: "garlic-honey",
    title: "Garlic Honey",
    date: "2026-03-31",
    type: "photo",
    image: "/images/honey-garlic.jpg",
    imageSize: "square",
    markerImage: "/images/handwriting/bee-icon.png",
    text: "Thank you, Molly, for kindly donating raw honey from your farm's hive. It has since been entrusted with the important task of fermenting garlic."
  },
  {
    title: "🔥 Let it burn",
    date: "2026-04-01",
    type: "photo",
    image: "/images/journal/chilli-recipe.png",
    imageSize: "landscape",
    text: "My hands burned for the rest of the day despite many many washes, I don't even like spicy food, why did I do this?"
  },
  {
    title: "RIP Kombucha",
    date: "2026-04-02",
    type: "note",
    markerImage: "/images/handwriting/skull-icon.png",
    text: "Mould claims its first meal."
  },
  {
    date: "2026-04-04",
    type: "note",
    text: "Made sourdough not-crossed buns for Easter (yes apparently piping two strips of white flour paste on each bun is too much effort).",
  },
  {
    title: "Starting a kombucha SCOBY - attempt #2",
    date: "2026-04-15",
    type: "photo",
    image: "/images/kombucha-scoby.jpg",
    imageSize: "portrait",
    text: "A different supermarket kombucha was chosen, and a good amount of lemon juice added to deter any mouldy repeats."
  },
  {
    title: "When the koji rice is delivered",
    date: "2026-04-15",
    type: "photo",
    image: "/images/journal/koji-recipes.png",
    imageSize: "square",
    text: "<b>Shio Koji:</b> Successful and since used in multiple dishes, but not distinctive enough to warrant a remake once it's gone.<br><b>Amazake:</b> Tasted odd, and I was secretly not devastated when I accidentally spilled half of it on the kitchen floor. In fairness, mistaking a water bottle for a thermos may not have helped the 'keep warm' stage of fermentation.<br><b>Miso:</b> I ran out of jars, so it ended up split between three increasingly small pots. So far, so good, but only time will tell.",
  },
  {
    id: "satsuma-vinegar",
    title: "How long should vinegar take again?",
    date: "2026-04-15",
    type: "note",
    text: "Realise the vinegar has supposedly been fermenting for around four weeks since straining. A taste test confirms it is definitely not vinegar. The kitchen's 18°C temperature is blamed, and a little sugar and sherry are stirred in to encourage progress.",
  },
  {
    title: "The jar of death",
    date: "2026-04-16",
    type: "photo",
    image: "/images/jar-of-death.jpeg",
    imageSize: "square",
    markerImage: "/images/handwriting/skull-icon.png",
    text: "After a quick scoop of mould that was definitely not floating on top, the fermented chilli sauce is finally ready. Both James and I immediately deemed it alarmingly spicy and christened it the 'Jar of Death'.<br>Spoiler: several friends have since tried it and appeared entirely unthreatened. The name may require revision."
  },
  {
    title: "Introducing Dax",
    date: "2026-04-17",
    type: "note",
    text: "Began a second <a href='/post/sourdough-starter'>sourdough starter</a> in the name of science. Decided to leave him outside for a couple of hours just to see what would happen. He remained there somewhat longer than intended and was rescued the following morning.",
  },
  {
    id: "preserved-satsumas",
    title: "Preserved <s>lemons</s> satsumas",
    date: "2026-04-23",
    type: "photo",
    image: "/images/preserved-satsumas.jpg",
    imageSize: "portrait",
    text: "I like satsumas more than lemons. The logical conclusion was obvious."
  },
  {
    title: "What are labneh balls?",
    date: "2026-04-27",
    type: "photo",
    image: "/images/labneh-balls.jpg",
    imageSize: "portrait",
    text: "My favourite cheese to make. All it takes is a bowl, a sieve, a sacrificial t-shirt from James' wardrobe, and some yogurt. Leave it for 24 hours and you have a delicious cream cheese-style spread. Leave it for 48, and you can roll it into cheese balls and preserve them in olive oil. (The current flavour of choice is honey and chilli.)"
  },
  {
    title: "The beauty of hindsight...",
    date: "2026-05-01",
    type: "photo",
    image: "/images/fake-soy-sauce.jpg",
    imageSize: "square",
    text: "Around this date is the point when I should have strained my fake soy sauce and ticked off another successful project, alas."
  },
  {
    date: "2026-05-07",
    type: "note",
    text: "When in doubt, order more jars...",
  },
  {
    date: "2026-05-07",
    type: "note",
    text: "While I'm at it I should probably get some proper fermentation weights (justification: mould grew on my plastic substitute) and a proper cheese cloth (justification: more labneh) and some fermentation lids (justification: pretty colours)",
  },
  {
    title: "RIP 'Soy' Sauce",
    date: "2026-05-08",
    type: "photo",
    image: "/images/fake-soy-sauce-mould.png",
    imageSize: "square",
    markerImage: "/images/handwriting/skull-icon.png",
    text: "Post-mortem: Possibly too much air space above the mixture & left it too long."
  },
  {
    date: "2026-05-11",
    type: "note",
    markerImage: "/images/handwriting/skull-icon.png",
    text: "After multiple bread attempts with Dax, the rye flour starter, Phyllis is declared the superior yeast pet and starter cannibalism occurs. RIP Dax. I can only hope the D&D player who inspired your name never reads this.",
  },
  {
    title: "You had me at mushroom",
    date: "2026-05-13",
    type: "photo",
    image: "/images/mushroom-garum.png",
    imageSize: "portrait",
    text: "I don't need to know what a garum is. I just need to know it contains mushrooms.<br>Finally googles it for the sake of this timeline: 'Garum was the ancient Roman world's most popular and prized condiment, created by layering whole fish (like mackerel, sardines, or anchovies), their entrails, and herbs inside a large terracotta vat'.<br>Well. That wasn't what I was expecting."
  },
  {
    title: "Throw money at the problem!",
    date: "2026-05-14",
    type: "note",
    text: "The day has come. No longer shall my ferments languish at 18°C. I don't care that summer is almost here and will likely solve this problem for free. I shall have my heat mat, sir!",
  },
  {
    title: "Maybe I shouldn't fix what isn't broken...",
    date: "2026-05-26",
    type: "note",
    markerImage: "/images/handwriting/skull-icon.png",
    text: "Committed fully to the cheese making life and bought a cheese cloth. Used it for making a mega amount of labneh. Multiple failed attempts to roll it into balls later, I finally forgot about it in the fridge and mould claims another meal.",
  },
  {
    title: "Mozzarella time",
    date: "2026-06-01",
    type: "photo",
    image: "/images/mozzarella-half.png",
    imageSize: "landscape",
    text: "Did it taste the same as the supermarket? Yes. Is it somehow slightly more expensive to make at home? Yes. Do I regret it? Course not - the ball was so big, James had to cut it in half to get it back out of the jar!"
  },
  {
    id: "pineapple-tepache",
    title: "Getting exotic",
    date: "2026-06-07",
    type: "photo",
    image: "/images/pineapple-tepache.png",
    imageSize: "square",
    text: "Pineapple tepache: the ultimate scraps into gold transformation!<br>And it only took a small amount of panicked consultation before the white stuff on top was declared harmless yeast rather than mould 😅"
  },


];