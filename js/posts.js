const divider = `
  <div class="handwritten-divider">
    <img src="/images/handwriting/floral-divider.png" alt="">
  </div>
`;


const sourdoughStarterTimeline = [
	{
		date: "2026-03-02",
		title: "Day 1: Conception",
		text: "To start your starter, mix together 50g of flour with 50ml water. Then abandon it with a loose lid for ~24 hours."
	},
	{
		date: "2026-03-03",
		title: "Day 2-6: Nurturing",
		text: "To grow your doughy lump into a strong bubbly starter you need to feed it daily. It wants equal parts starter, flour and water (e.g. 50g starter mixed with 50g flour & 50ml water).<br>When it inevitably gets too big you'll want to remove some starter before adding the flour and water, this is called sourdough discard & can be used for multiple recipes (pancakes, crumpets, wraps, etc - just don't expect your discard to act as a raising agent the way an active starter will!) "
	},
	{
		date: "2026-03-09",
		title: "Day 7+: Maturity",
		text: "After about a week of daily feeding, your sourdough starter is ready to explore the wide world of <a href='/post/sourdough-bread'>making bread</a>! You should be seeing the starter increase in size after its daily feeding and then partially collapse back down again. Timing your baking to use the starter at peak growth (~4 hours after it's last feeding) will set you up for maximum success."
	}
];

const sourdoughBreadTimeline = [
	{
		date: "step-1",
		title: "Feed Starter",
		text: "Feed your starter and wait until it is bubbly and roughly doubled in volume (~4 hours)."
	},
	{
		date: "step-2",
		title: "Mix Flour & Water",
		text: "Mix flour and water, then leave for 20-60 minutes."
	},
	{
		date: "step-3",
		title: "Add Starter & Salt",
		text: "Mix in the starter and salt, then let the dough rest ~30 minutes."
	},
	{
		date: "step-4",
		title: "Stretch & Folds",
		text: "Do at least 3 rounds of stretch and folds, roughly 30 minutes apart."
	},
	{
		date: "step-5",
		title: "Overnight: Fridge Proof",
		text: "Shape if desired, then leave in the fridge overnight."
	},
	{
		date: "step-6",
		title: "Day 2: Bake",
		text: "Bake at 220°C fan for 20 minutes covered, then 20-25 minutes uncovered."
	}
];

const posts = [
	{
		id: "choosing-a-puppy-breed",
		date: "2026-07-16",
		title: "🐶 Choosing a Puppy: Finding the Right Breed",
		metaTitle: "How to Choose the Right Puppy Breed | MoSCoW Decision Method",
		metaDescription:
			"Choosing a puppy is exciting but overwhelming. Here's how we used the MoSCoW method to compare breeds, challenge our assumptions and narrow down the perfect match.",
		image: "/images/journal/breed-analysis.png",
		imageAlt: "Handwritten comparison of puppy breeds scored using personal selection criteria.",
		category: "Life",
		tags: ["decision-making", "dog-approved"],
		excerpt:
			"The time getting a puppy began not with puppies, but with a notebook full of questions.",
		content: `
		<section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>Before falling in love with a puppy, make sure you're ready for the commitment. Then use a <a href="#moscow">simple decision framework</a> to separate your must-haves from your nice-to-haves, <a href="#breed-comparison">compare breeds</a> objectively, and be prepared to change your mind as you learn more.</p>
	  </section>
		<figure class="post-image">
		  <img src="/images/puppies-in-basket.jpg" alt="Basket of cute puppies">
    </figure>
		<p>Congratulations, you've decided to get a puppy! (Or we're pretending you have for the sake of this article.)<br>
		Before we get carried away imagining tiny balls of fluff and puppy zoomies, here are the three things that stopped me getting a puppy for years so please make sure you've thoroughly considered the following:
		<ul>
		<li><b>Stable environment:</b> are you in a place where you don't intend to move for a while, and have enough space for a dog?<br>(I've heard of flats working but do consider the fact you'll need to let your dog out very regularly, especially as a puppy!)<br>(Living in shared accommodation and then abroad was why I failed this criterion for many years.)</li>
		<li><b>Stable finances:</b> dogs may not be as expensive as children but the costs still add up! Food, vets, toys, treats, the list goes on.</li>
		<li><b>Stable commitment:</b> are you able to commit time to your new dog? You will be their whole world and, especially for a puppy, abandoning them for 8 hours while you go to work just isn't fair. Granted you can find ways around that, but make sure you really are able and willing to put in the time, love and training consistently to raise a pet.</li>
		</ul>
		<p>Okay with all the responsible caveats out of the way, let's try that again. Congratulations you've decided to get a puppy!<br>
		...<br>
		Now what?</p>
		<br>
		<h2>The How, What & When of Puppies</h2>
		<p>When James first turned to me and said yes we can get a dog together, it took me a while to get down from cloud nine. Fortunately I'm pretty sure my main love language is over-planning so my excitement was soon channelled into answering every question I could think of.</p>
		<p><b>When?</b> This was fairly simple for us as we were already planning to move in together in Woking in the summer of 2025, getting a puppy before we had found a dog friendly new home and had properly settled in, was impractical. Mild spoiler: despite that my brain still made attempts to convince myself it was doable and a slightly desperate email may have been sent to my London landlord asking if there was any conceivable universe in which a puppy might be allowed for the final few weeks of my tenancy.<p>

		<div class="bio bio--reverse">
      <img class="bio-image bio-image--not-square" src="/images/echo/sofa-affection.png" />

      <div class="bio-text--left">
        <p>
          <b>What?</b> Given we had already decided on a puppy rather than... hang on Echo has commandeered one of my hands in the name of pets.<br>
					Where was I? Ah yes, we had chosen a puppy over a rescue given this was our first dog together and I was planning my sabbatical so would have extra time to commit to raising and training the puppy so we wanted to make the most of that. This then narrowed our 'what' question down to 'which breed', and I had the perfect journal decision tool for the job.
        </p>
      </div>
    </div>

		<br>
		<h2 id="moscow">Decision Making: MoSCoW Method</h2>
		<p>Yes I know the name is a little awkward given the state of the world but bear with me, this is actually a really useful way to make big decisions! Moscow stands for Must, Should, Could & Want. In the case of dog breeds, James and I both listed what characteristics our future dog must have, should have, could have and which we just wanted them to have. If you're still a little lost, fear not I come armed with my journal!</p>
		<figure class="post-image">
		  <img src="/images/journal/dog-moscow.png" alt="">
		  <figcaption>In case you're wondering: puffballs is our euphemism for babies/toddlers, 'ick factor' refers to my hand eczema disliking certain fur types, and 'w/' is my shorthand for with.</figcaption>
    </figure>
		<p>One advantage of breaking down your desires this way, is that it allows you to better prioritise what is truly important to you (the musts) while allowing for the shoulds and emotional wants. The could section is an opportunity to brainstorm out of the box options you would be okay with, though it didn't really apply in our situation as much. (Heads up: this can be particularly insightful when completing it separately and then exchanging answers, if you're doing this with another person.)</p>

		<p id="breed-comparison">While this is useful, the real magic comes afterwards. You can score possible solutions/decisions according to the criteria you've created within the MoSCoW categories. In our example we combined and refined our answers and then scored potential dog breeds to get a total overall score for each breed. Each tick counted as one point, and half marks were introduced very quickly for maybe cases. Normally I would recommend weighing the musts more heavily than the wants so that a breed which failed an important criterion couldn't make up for it just by being fluffy, but at the time of creating the table I just counted all the ticks up for a total score.</p>
		<figure class="post-image">
		  <img src="/images/journal/breed-analysis.png" alt="">
    </figure>
		<p>Looking at the results, you may realise that there were things you missed in your initial MoSCoW analysis. For example, James realised he preferred a rarer breed after I'd sent him the umpteenth link to a Cavapoo litter. You may also discover that you hadn't researched a breed as thoroughly as you thought.</p>
		<p>The table above is actually the final version of our analysis. Earlier on, the Dutch Kooikerhondje scored much higher. Maybe it was because it was the first breed we researched, maybe I'd always loved the idea of owning a Dutch breed, or maybe I was simply captivated by a dog with earrings. Whatever the reason, I became rather attached to the idea of owning one. That's how we found ourselves standing on the doorstep of a Kooikerhondje litter in East London. But that story deserves a post of its own.</p>
		`
	},
	{
		id: "soft-alchemy",
		date: "2026-06-30",
		title: "🌐 Soft Alchemy: The Beginning",
		metaTitle: "Building Soft Alchemy: How My Personal Blog Became a Virtual House",
		metaDescription:
			"The story of building Soft Alchemy: from abandoned portfolio site to virtual house complete with gardens, dogs, analytics obsession, Pinterest mishaps and an alarming amount of structured data.",
		image: "/images/website/homepage-june-2026.png",
		imageAlt: "The Soft Alchemy homepage after two months of development.",
		category: "Study",
		tags: ["goals", "coding", "data analysis"],
		excerpt:
			"The time a curiosity-driven experiment turned into a virtual house complete with garden, dog, analytics obsession and the discovery that my biggest Pinterest fan was me.",
		content: `
		<section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>Behind the screen of the first two full months of creating Soft Alchemy:<br><a href=#journey>the journey</a>, <a href=#analytics-data>analytics</a>, <a href=#lessons>lessons learned</a>, <a href=#fav-creations>favourite creations</a> and <a href=#worth-it>was it worth it?</a></p>
	  </section>
		<ul class="picture-list picture-rectangle">
      <li><img class="lightbox-image" src="/images/website/homepage-oct-2025.png">Oct 2025</a></li>
      <li><img class="lightbox-image" src="/images/website/homepage-april-2026.png">Apr 2026</a></li>
      <li><img class="lightbox-image" src="/images/website/homepage-may-2026.png">May 2026</a></li>
      <li><img class="lightbox-image" src="/images/website/homepage-june-2026.png">Jun 2026</a></li>
    </ul>
		<br>
		<h2 id="journey">October 2025: In The Beginning...</h2>
		<div class="bio bio--reverse">
      <img class="bio-image bio-image--not-square lightbox-image" src="/images/website/homepage-oct-2025.png" />

      <div class="bio-text">
        <p>
          October was a month that saw me emerge from my post job sofa gremlin state to investigate the ChatGPT fuss by indulging the temptation of creating a blog. With my own coding knowledge & AI's help, my GitHub account was put to use, this time with 3 files, GitHub Pages, and a basic template appearance. Curiosity satisfied, that is how it stayed until the following year when my growth areas saw potential.
        </p>
      </div>
    </div>
		<img class="lightbox-image" src="/images/website/github-oct-2025.png" alt="">
		<br>
    <h2>April 2026: In The Beginning (Attempt #2)</h2>
		<div class="bio">
      <img class="bio-image bio-image--not-square lightbox-image" src="/images/website/blog-growth-area-plan-april-2026.png" />
      <div class="bio-text">
        <p>
          The goal was set and the plan was made. I started off strong Wednesday 1st April: the previous code repository was found, dusted off and three new pages were added - 100% increase! I now had a homepage, a blog page, and a js file ready to be populated with more than just the world's least useful mushroom burger recipe.
					<br>
					Naturally it wasn't until 22nd April that I realised there was only so long I could procrastinate following through, and finally created my first post: <a href="https://softalchemy.uk/post/mushroom-wellington/">mushroom wellington recipe</a>.
        </p>
      </div>
    </div>
		<p>Ultimately April finished with 5 completed posts, an about page, and most importantly, an official name complete with its own URL. Satisfied with my progress, I decided to pivot my attention to other growth areas for May, and see if I could make the occasional post in the background.</p>
		<img class="lightbox-image" src="/images/website/github-april-2026.png" alt="">
		<br>
		<h2>May 2026: Building Soft Alchemy, One Room at a Time</h2>
		<p>Turns out Soft Alchemy was not content to let me focus on other growth areas, and similarly to my tomato plants, it decided to take over. The library emerged originally as a post mid May, and the other rooms swiftly followed the day after.<br>
		My casual personal blog was transforming into a full-time job building a virtual house. It wasn't unusual for me to still be up coding past 3am, or for James to come home from work to find me in my dressing gown on the sofa, having not moved from my laptop all day.</p>
		<ul class="chaos-list">
      <li>✅ Fix footer</li>
      <li>✅ Set up HTTPS for new url</li>
      <li>✅ Sourdough Starter Post</li>
      <li>✅ Add bios</li>
      <li>✅ Add Currently Reading to Homepage</li>
      <li>✅ Add Latest Post to Homepage</li>
      <li>✅ Library Post</li>
      <li>✅ Find a Pretty Background</li>
      <li>✅ Create Kitchen, Study & Garden Pages</li>
      <li>✅ Update Navigation</li>
      <li>✅ Decide James has Contributed Enough to Warrant a Bio</li>
      <li>✅ Quotes Post</li>
      <li>✅ Create "Follow the Paw Prints" Start Here Guide</li>
      <li>✅ Ask Feedback from ChatGPT</li>
      <li>✅ Add Recipe Pantry to the Kitchen</li>
      <li>✅ Add Navigation Info in About Page</li>
      <li>✅ More Recipe Posts!</li>
      <li>✅ Add Recommended Next Post Section</li>
      <li>✅ Create Garden Timeline</li>
      <li>✅ Use IDE Instead of Notepad++</li>
    </ul>
		<p>Alongside all this, dreams of no longer writing merely for an audience of me drove me into the strange and confusing world of marketing & analytics.</p>		${divider}
		<h2 id="analytics-data">The Data: An Introduction to Analytics</h2>
		<p>Having had ChatGPT crush my dreams of a simple secret tracker page only 2 days after writing my first post, it didn't actually occur to me to set up Google Analytics till almost a full month later. What followed was:</p>
		<ul>
		<li>Unexpected visits from a random stranger in Andorra.</li>
		<li>A surprisingly long-winded battle to remove myself from the data.</li>
		<li>A deep dive into what exactly is Organic Social (spoiler: it means I sent my friend a link over Messenger instead of Whatsapp!).</li>
		<li>A questionable amount of time spent staring at user counts rather than writing posts.</li>
		</ul>
		<p>On this final day of June, I am proud to announce that:<p>
		<ul>
		<li>I have yet to break the upper threshold of 6 users in a single day.
		<img class="small-post-image lightbox-image" src="/images/website/google-analytics-may-june-2026.png" alt="">
		</li>
		<li>I now have a method of removing myself from the analytics so robust it took a full hour to add myself back in again for the sake of testing a new scroll tracking feature... and despite that it turns out I was still being tracked while writing this post!
		<img class="small-post-image lightbox-image" src="/images/website/google-analytics-post-visit-june-2026.png" alt="">
		</li>
		<li>I have no idea how all the people from these countries found me, unless friends and family I sent links to use an impressive array of VPN countries.
		<img class="small-post-image lightbox-image" src="/images/website/google-analytics-country-may-june-2026.png" alt="">
		</li>
		</ul>
		<br>
		<h2>The Data: Building a Pinterest Audience</h2> 
		<p>Having used Pinterest for many years, it was always in the plan to use it as my main method of audience generation. Hence 20th May saw the creation of a new Soft Alchemy Pinterest Business Account, and the creation of my first pin! Many satisfying milestones followed: first 100 views on a pin, first total 1000 impressions, clicks on pins going up. Motivation was high and my obsession of watching the eye symbol on my pins go up was growing.</p>
		<img class="post-image lightbox-image" src="/images/website/pinterest-impressions-june-2026.png" alt="">
		<p>Denial, supported by both wishful thinking and repeated consultations with ChatGPT, finally met its match in the undeniable evidence provided by going on holiday. Most notably, my glorious pinterest streak ground to zero on the two days I didn't look at my account. Even more damning was the spike on the day I couldn't resist having a quick peek. All the milestones I'd been celebrating were me looking at my own pins.</p>
		<p>Accepting that pinterest has yet to recognise my glory, I look forward to celebrating the first ever outbound click should it happen, and the growing total audience number that I know I cannot corrupt.</p>
		<ul class="picture-list picture-rectangle">
		<li><a href="https://uk.pinterest.com/pin/1123577807060789333/" target="_blank" rel="noopener noreferrer"><img src="/images/pinterest/echo-pigeon.jpg"></a></li>
		<li><a href="https://uk.pinterest.com/pin/1123577807061145996/" target="_blank" rel="noopener noreferrer"><img src="/images/pinterest/labneh-balls.png"></a></li>
		<li><a href="https://uk.pinterest.com/pin/1123577807061063513/" target="_blank" rel="noopener noreferrer"><img src="/images/pinterest/echo-macaw.png"></a></li>
		<li><a href="https://uk.pinterest.com/pin/1123577807059780388/" target="_blank" rel="noopener noreferrer"><img src="/images/pinterest/mushroom-burger.png"></a></li>
		<li><a href="https://uk.pinterest.com/pin/1123577807060865068/" target="_blank" rel="noopener noreferrer"><img src="/images/pinterest/brownie-original.png"></a></li>
			<li><a href="https://uk.pinterest.com/pin/1123577807061511135/" target="_blank" rel="noopener noreferrer"><img src="/images/pinterest/frankie-cake.png"></a></li>
			<li><a href="https://uk.pinterest.com/pin/1123577807060221425/" target="_blank" rel="noopener noreferrer"><img src="/images/pinterest/garden-timeline.jpg"></a></li>
			<li><a href="https://uk.pinterest.com/pin/1123577807060401528/" target="_blank" rel="noopener noreferrer"><img src="/images/pinterest/echo-window.jpg"></a></li>
    </ul>
		<br>
		<h2>The Data: Google Search</h2>
		<p>Google Search is a slow burn, but a satisfying one as I celebrate reaching over 100 impressions across 25 different queries. Watching the number of indexed pages slowly increase to the 27 I have today, along with learning about sitemaps, and the usefulness of structured data, gives me hope that this will be the main way I am able to connect to strangers in the future.</p>
		<img class="post-image lightbox-image" src="/images/website/google-search-june-2026.png" alt="">
		<p>Of course the one click was me trying it out the first time, so I wait with bated breath for that particular number to jump to 2...</p>
		${divider}
		<h2 id="lessons">Lessons Learned</h2>
		<ol class="instructions">
		  <li>You are your own worst enemy when interpreting small datasets.</li>
			<li>Publishing imperfect things beats endlessly planning perfect things.</li>
			<li>AI is an excellent assistant but a terrible architect.</li>
			<li>I enjoy building infrastructure as much as writing content.</li>
			<li>Documenting experiences makes them more meaningful.</li>
			<li>Building a place on the internet feels fundamentally different from using one.</li>
	  </ol>
		<br>
		<h2 id="fav-creations">Favourite Creations</h2>
		<div class="qa-board">
      <details class="qa-card qa-card">
	    <summary class="qa-click-area">
        <span class="qa-label">Favourite Posts</span>
		</summary>
        <ul>
				<li><b>Overall:</b> Without a doubt <a href="/post/echo-collage">Echo's Collage</a>, going back through his puppy photos brought me so much joy plus it's easily the post I send to friends the most!</li>
				<li><b>Kitchen:</b> That's a tough one but I'd say <a href="/post/sourdough-bread">Sourdough Bread</a>. It's been a goal that I've been intimidated by for a while so being able to smash it and now help others too makes it extra satisfying.</li>
				<li><b>Study:</b> It's ultimately a simple idea but <a href="/post/growth-areas">Growth Areas</a>, for the progress they have brought me so far this year.</li>
				</ul>
      </details>
			
			<details class="qa-card qa-card">
	    <summary class="qa-click-area">
        <span class="qa-label">Things I Built That Nobody Asked For</span>
		</summary>
        <ul>
				<li>The timeline infrastructure to record my full garden story, which then got shamelessly stolen across multiple rooms within Soft Alchemy.</li>
				<li>A method to record my handwriting, though so far only the logo feels extra enough for that treatment!</li>
				<li>The equivalent of plant pokemon cards in the <a href="/garden/residents">Garden Residents</a> page.</li>
				<li>Special randomised paw button for the archive, because why not?</li>
				</ul>
      </details>
    </div>
		<br>
		<h2 id="worth-it">Was It Worth It?</h2>
		<div class="two-column-layout equal">

		<section>
      <p>Absolutely. Soft Alchemy is my proudest achievement of the year so far, and I spend a non-trivial amount of time looking at random pages with a manic grin and "I did a thing!" screeching in my brain. 
		<br>
		Even if I were to stop now, I would have created a wonderful record of my sabbatical, an opportunity to learn more about structured data than anyone with under 10 daily users probably should, and a place that feels like mine.
		<br>
		As of now the audience may still be small, but the house will keep getting bigger.</p>
    </section>

    <section class="table">
  <table>
    <thead>
      <tr>
        <th>Metric</th>
        <th>Value</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Posts</td>
        <td>16</td>
      </tr>
			<tr>
        <td>Pinterest Pins</td>
        <td>32</td>
      </tr>
			<tr>
        <td>Google Impressions</td>
        <td>103</td>
      </tr>
			<tr>
        <td>Indexed Pages</td>
        <td>27</td>
      </tr>
			<tr>
        <td>Daily Users Record</td>
        <td>6</td>
      </tr>
			<tr>
        <td>ChatGPT Queries</td>
        <td><del>hundreds</del> classified</td>
      </tr>
			<tr>
        <td>Hours Spent</td>
        <td>Best not to ask!</td>
      </tr>
    </tbody>
  </table>
</section>
  </div>
		`
	},
	{
		id: "garden-plan",
		date: "2026-06-05",
		title: "🪴 Crafting A Garden",
		metaTitle: "How I Planned a Renter-Friendly UK Container Garden",
		metaDescription:
			"A beginner-friendly guide to planning a UK container garden, from identifying goals and limitations to choosing plants, creating layouts, and avoiding common mistakes.",
		image: "/images/garden/garden-plan-layout-01-2026.jpg",
		imageAlt: "Hand-drawn garden planning layout showing planting zones, containers and growing areas",
		category: "Garden",
		tags: ["goals", "planning"],
		excerpt:
			"The time a vague desire to grow tomatoes spiralled into spreadsheets, sketches, plant research, and an unexpectedly comprehensive master plan.",
		content: `
		<section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>"You can get more done with a good idea and a plan than you can with just the good idea." - Soft Alchemy</p>
		<p>This approach is most useful for anyone starting a new garden from scratch, working with limited space, growing in containers, or simply feeling overwhelmed by the sheer number of possible plants.</p>
	  </section>
		<p>
	Back in January, with a year of potential stretching ahead of me, I decided to get serious about gardening.
	</p>
	<p>
	At the time, my credentials consisted mainly of keeping a handful of houseplants alive since university. Even then, their continued survival owed more to regular holidays at my parents' house and my mother's experienced care than any particular skill on my part.
	</p>
	<p>
	Nevertheless, a combination of boredom, a love of cooking, misplaced frugality, and a gentle nudge from YouTube tipped my brain into full planning mode. What follows is a structured version of the winding path my research and reflections took me down.
	</p>
		${divider}
	<h2>Claire's Plan</h2>
	<h3>Identify your goals & passions:</h3>
	<p>No two gardens are alike, and neither are any two gardeners. What do you actually care about for your garden? Is it to keep it super simple with a single mint plant on the kitchen windowsill (in which case a full plan is probably overkill), is it a beautifully ordered vegetable allotment that gives you full self-sufficiency, or else is it to create your own personal rainforest jungle?
	<ul class="chaos-list">
      <li>Annuals vs Perennials vs Trees</li>
      <li>Pretty Flowers</li>
      <li>Low maintanence</li>
      <li>Vegetable garden: what do you actually eat?</li>
      <li>Quick Wins</li>
      <li>Maximum growth/harvest</li>
      <li>Orderly appearance/structure</li>
      <li>Natural looking</li>
      <li>Bright colours</li>
      <li>Attracting wildlife/pollinators</li>
      <li>Companion planting</li>
      <li>Non-toxic plants</li>
      <li>Self-sufficiency</li>
    </ul>
		<p>My main goals were:</p>
	<ul>
	<li>Produce useful ingredients for my cooking</li>
	<li>Reasonably low effort</li>
	<li>Ability to still go on holiday</li>
	<li>Interesting variety</li>
	<li>Learn how to garden successfully/Run small plant experiments</li>
	</ul>
	<br>
	<h3>Identify your limitations:</h3>
	<p>Limitations are blessings in disguise, they reduce your options from everything to something a little more manageable. They also provide a challenge for your creativity to really get its teeth into.</p>
	<ul class="chaos-list">
      <li>Bought vs Renting</li>
      <li>Garden vs Balcony vs Allotment</li>
      <li>Size of potential garden space</li>
      <li>Potential plant threats 🐶</li>
      <li>Expected sun levels</li>
      <li>Location & Climate</li>
      <li>Exposed vs Wind-sheltered</li>
      <li>Expected rain levels</li>
      <li>Any walls/features to work around</li>
      <li>Any physical restrictions</li>
      <li>Your reasonable time commitments</li>
      <li>Budget</li>
    </ul>
	<p>My limitations were as follows:</p>
	<ul>
	<li>Renting & want to take plants with me when I leave -> Container Garden</li>
	<li>North east facing medium sized garden split into 3 sections</li>
	<li>Most of said garden is unsafe for small plants due to Echo's assistance (please note this was a limitation I learned after the planning stage, though fortunately with only minor casualties).</li>
	<li>South England based with reasonably mild summers (in theory) and plenty of rain</li>
	<li>Fencing and multiple existing structures provide a lot of wind-sheltered space and vertical walls</li>
	<li>First-year knowledge gap</li>
	</ul>
	<p>Combining this with my goals, I wanted to create a beautiful, productive, renter-friendly container garden that teaches gardening skills, supplies ingredients for the kitchen, and makes everyday life a little interesting.</p>
	<br>
	<h3>Identify plants:</h3>
	<p>This is the fun part when you get to allocate plants to your identified zones based on how well they meet your criteria. The two main questions are: does this plant align with my goals (does it spark joy?) and work within my limitations (does it have a decent survival rate?). Strategies for how best to do this vary considerably:</p>
	<ul>
	<li>a first come first served approach, where you continue through plants you can think of till you're out of space.</li>	
	<li>a full grading system based on how well it meets each specific goal and limitation, then ranked by total score (I may have done this for choosing dog breeds, but that's a story for another time).</li>	
	<li>asking AI for help, either in the form of asking for plant suggestions based on your criteria, or giving it a list of plants you like the sound of and having it judge which ones actually will work for your space.</li>
	</ul>

	<div class="qa-board">
      <details class="qa-card qa-card">
	    <summary class="qa-click-area">
        <span class="qa-label">Bear in mind...</span>
		</summary>
        <p>Different varieties of the same general plant can vary dramatically, for example I was able to justify getting aubergine plants because the Patio Baby F1 variety works well in containers and is supposedly easier to keep alive in the UK (a claim still under investigation).
				<br>
				Additionally I highly recommend leaving room for later additions, as you progress down the gardening rabbit hole you'll encounter new plants & ideas. Leaving yourself future options now, saves you from a full planning rejuggle later!</p>
      </details>

    </div>
	<h3>Identify tasks:</h3>
	<p>The final main planning step is to consider the key tasks required for each of your chosen plants. This will include tasks such as any prep required beforehand; when to purchase plant, bare root, or seeds; roughly when to pot & re-pot; when to harden off seedlings; any fertilising needs; harvesting etc. The easiest method I've found for this is to have an overarching timeline with monthly tasks across all my plants. This is also where existing gardening experience is extremely useful as you'd be better at judging tasks and any missing gaps. Since I, for reasons still beyond me, didn't ask my mother for assistance, I learned the hard way and the majority of the first plan I created has since been edited by reality. Nonetheless I will include it here as an example.</p>
	<img class="small-post-image lightbox-image" src="/images/garden/garden-plan-tasks-01-2026.jpg" alt="">
	<br>
	<h3>(Opt) Identify zones & microclimates:</h3>
	<p>For the planning lovers: this step is optional but useful because a garden is rarely universally consistent. You may have sunnier patio areas that can get very warm so are better suited for tomatoes, or perhaps an area that forms a wind tunnel and would therefore benefit from sturdier plants. Activities you may want to consider depending on your level of planning enjoyment:<p>
	<ul>
	<li>Taking photos of your garden morning, noon & afternoon to track the sun's path.</li>
	<figure class="post-image">
	  <img class="small-post-image lightbox-image" src="/images/garden/sunpath-05-2026.png" alt="">
	  <figcaption>AI generated from three garden photographs</figcaption>
  </figure>
	<li>Drawing a layout of your garden and allocating rough positions for plants.</li>
	<figure class="post-image">
	  <img class="journal" src="/images/garden/garden-plan-layout-01-2026.jpg" alt="">
	  <figcaption>This was my original back when I thought plants took up way more space than they actually do, and when I was delusional enough to think Echo & plants go well together!</figcaption>
    </figure>
	<li>Measuring any existing garden beds, pots & planters, and anticipating which plants will need the premium space.</li>
	<img class="post-image journal" src="/images/garden/pot-allocation-02-2026.jpg" alt="">
	</ul>

	<h2>Echo's Plan</h2>
	<ol class="instructions">
	<li>Find parts of the garden Claire has changed.</li>
	<li>Make sure they are marked as new territory.</li>
	<li>Eat anything vaguely grass like.</li>
	</ol>

	<h2>James' Plan</h2>
	<ol class="instructions">
	<li>Attempt to curtail the ever-increasing plant commitments by encouraging Claire to restrict herself to one extra plant per month.</li>
	<li>Fail miserably in this attempt and support her anyway with trips to the garden centre and carrying an unhealthy amount of compost bags.</li>
	<li>Get invested in multiple DIY garden projects.</li>
	</ol> 
	${divider}
	`,
	},
	{
		id: "brownie",
		date: "2026-06-04",
		title: "🤎 The Brownie Recipe Worth Asking For",
		metaTitle: "Best Fudgy Brownie Recipe: The One People Always Ask For",
		metaDescription: "A rich, reliable brownie recipe discovered in a café beside Britain's highest railway station. Fudgy, adaptable, and thoroughly tested over many years of enthusiastic baking.",
		image: "/images/brownie-pan.png",
		imageAlt: "Freshly baked chocolate brownies cooling in a cast iron pan",
		category: "Recipe",
		tags: ["sweet", "vegetarian"],
		excerpt: "The time a scrap of paper became one of my most treasured recipes.",
		content: `
      <img class="card-image" src="/images/brownie-pan.png">
	  <section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>I believe the power of a tried-and-true, fail-safe brownie recipe is underrated. I found mine in the Scottish Highlands, and I invite you to make it yours too.</p>
	  </section>
		<p>Beside the highest railway station in Britain there is a little cafe that serves the best brownie I've ever tasted. During the two days I spent there on a trekking adventure, I somehow managed to justify three separate visits. On the final visit I had the audacity to ask the chef for the recipe. The following scrap of paper will forever hold pride of place in my culinary collection.</p>
		<img class="card-image" src="/images/brownie-recipe.png">
		<br>
		<h2>Ingredients</h2>
    <ul>
		  <li>3 Eggs</li>
		  <li>275g Caster Sugar</li>
		  <li>1 tsp Vanilla Extract</li>
		  <li>225g Butter</li>
		  <li>200g Dark Chocolate</li>
		  <li>135g Plain Flour</li>
		  <li>100g Chocolate Chips (I recommend milk, white or a mix of both!)</li>
	  </ul>

    <h2>Instructions</h2>
    <ol class="instructions">
		  <li>Preheat the oven to 180°C.</li>
		  <li>In a bowl, whisk together the eggs, sugar and vanilla.</li>
		  <li>Melt the butter and dark chocolate together in a pan until smooth, then add to the bowl.</li>
		  <li>Sieve in the flour, stirring gently.</li>
		  <li>Add the chocolate chips and transfer to a prepped/lined oven dish of your choice.</li>
		  <li>Bake in oven until just a light jiggle (~10-15 mins)</li>
    </ol>
	  ${divider}
	  <p>Enjoy! Over the years, this recipe has been adapted:</p>
		<ul>
		<li>to include white chocolate chips (though James insists that's <b>his</b> thing)</li>
		<li>into a brownie/cheesecake combo (that I completely forgot to take a photo of!)</li>
		<li>into this enthusiastic attempt at a dessert for an "Ode to the mushroom" dinner party last year...</li>
		</ul>
		<figure class="post-image">
		  <img src="/images/brownie-mushroom-comparison.png">
		  <figcaption>Lesson learned the hard way: red water-based food colouring with white chocolate does not work. (Here's the <a href="https://pin.it/2vmLpngqo" target="_blank" rel="noopener noreferrer">original inspiration</a> if you want to try it out for yourself!)</figcaption>
    </figure>
</section>
    `,
	},
	{
		id: "mushroom-burger",
		date: "2026-06-04",
		title: "🍔 Mushroom Burger",
		metaTitle: "Homemade Mushroom Burger Recipe | Vegetarian BBQ Idea",
		metaDescription:
			"A rich homemade mushroom burger recipe packed with mushrooms, garlic, stock and cheese. Smoky, satisfying, and capable of putting many restaurant veggie burgers to shame.",
		image: "/images/mushroom-burger-square.png",
		imageAlt: "Homemade mushroom burger in a toasted brioche bun with lettuce, cheese, pea fritter and crispy onions",
		category: "Recipe",
		tags: ["BBQ", "mushrooms", "vegetarian"],
		excerpt: "The time restaurant veggie burgers were put to shame.",
		content: `
      <img class="card-image" src="/images/mushroom-burger.jpeg">
	  <section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>Mushrooms are amazing and while there are plenty of great veggie burgers out there, nothing beats making your own. If you don't already keep sherry in the pantry as a convenient alternative to wine, I highly recommend it.<br>
		Recipe makes 4 small, 3 medium or 2 monster burgers.</p>
	  </section>
		<p>Most veggie burgers lean heavily on beans, lentils or processed meat substitutes. This one lets mushrooms do what mushrooms do best: become gloriously savoury.</p>
	  <h2>Ingredients</h2>
    <ul>
		  <li>1 Onion</li>
		  <li>400g Mushrooms</li>
		  <li>4 cloves Garlic</li>
		  <li>1 Stock Cube (My absolute favourite is <a href="https://www.sainsburys.co.uk/gol-ui/product/oxo-meat-free-vegan-beef-flavour-stock-cubes-x12-71g?deeplink=true&gclsrc=aw.ds&&cmpid=cpc&utm_source=Google&utm_medium=cpc&utm_campaign=20333793068&utm_content=shopping&utm_term={sku}&utm_custom1=&utm_custom2=759-449-0952&gad_source=1&gad_campaignid=19663891335&gbraid=0AAAAAD17J_DABdILB7a0BNLxkOquI0xvt&gclid=CjwKCAjwxITRBhBYEiwA6mZm7YC1b3zzdKWZDZtN9m2UqhM41cdI6YZLRNyRkmMYxhyy7llBZper5hoCzBEQAvD_BwE">vegan beef stock</a></li>
		  <li>(Opt) 2 tbsp Sherry or White Wine</li>
			<li>1 tbsp Soy Sauce</li>
		  <li>(Opt) 1 tbsp Liquid Smoke</li>
		  <li>1 Egg</li>
		  <li>60g Breadcrumbs<br>(less works fine if you run out - just a bit more likely to fall apart!)</li>
		  <li>30g Cheese (grated)</li>
	  </ul>
		
    <h2>Instructions</h2>
    <ol class="instructions">
		    <li>Prep: finely chop the onion, mushrooms & garlic. Fry in a pan over medium heat until nicely browned (~10 mins).</li>
				<li>Crumble in the stock cube with either the sherry/white wine or a splash of water.</li>
				<li>Mix in the soy sauce and liquid smoke (if using) and season to taste.</li>
				<li>Transfer the mixture to a bowl, and mix in the egg, breadcrumbs and grated cheese.</li>
				<li>Spoon the mixture into a hot frying pan and shape into patties of desired size.</li>
				<li>Fry until the bottom is golden (~ 4 mins), then flip the burgers (good luck!).</li>
				<li>Add a glug of water to the pan and cover with a lid - the steam helps ensure the burgers are cooked all the way through.</li>
      </ol>
	  ${divider}
	  <p>Enjoy! We had ours for our traditional rainy-day indoor British BBQ and served it with toasted brioche buns, lettuce, mozzarella, a fried slice of pineapple, crispy onions and a mix of mayo & BBQ sauce. Yes, we went very extra. No, I don't regret a moment of it.<br>
		I also highly recommend crispy onions as a pantry staple, they make an excellent garnish for almost every meal!</p>
</section>
    `,
	},
	{
		id: "echo-collage",
		date: "2026-05-26",
		title: "📸 A Completely Normal Amount of Dog Photos",
		metaTitle: "Echo the Papillon | A Completely Normal Amount of Dog Photos",
		metaDescription:
			"A totally reasonable collection of Echo photos featuring dramatic ear floofs, suspicious levels of cuteness, and ongoing small supervisor energy.",
		image: "/images/echo/echo-cute.jpg",
		imageAlt: "A collage of Echo the papillon playing, exploring and looking adorable",
		category: "Life",
		tags: ["dog-approved"],
		excerpt: "The time I used blogging as an excuse to create an entirely necessary archive of puppy photos...",
		content: `<section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>A joyful and perfectly reasonable collection of Echo photos.
		    Frankly, withholding these feels unethical.</p>
	  </section>
		<div class="photo-collage photo-collage--3-column" id="echo-gallery"></div>
		<p>Echo would like it noted that this archive remains ongoing.</p>
		${divider}
	`,
	},
	{
		id: "chocolate-milkshake",
		date: "2026-05-25",
		title: "🥤 Mint Chocolate Milkshake",
		metaTitle: "Mint Chocolate Milkshake Recipe with Aero Chocolate",
		metaDescription:
			"A ridiculously indulgent homemade mint chocolate milkshake recipe made with Aero, vanilla ice cream, and chocolate spread. Easily adapted into Biscoff, Banoffee, Honeycomb and more.",
		image: "/images/milkshake-portrait.jpg",
		imageAlt:
			"Homemade mint chocolate milkshake topped with crushed Aero chocolate",
		category: "Recipe",
		tags: ["quick", "sweet", "vegetarian"],
		excerpt: "The time a milkshake earned an instant second order and a homemade remake.",
		content: `
      <img class="card-image" src="/images/milkshake-cover.jpg">
	  <section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>This is the best milkshake flavour. Yes, I will die on this hill.<br>
		Recipe makes two small portions, or one large depending on the level of indulgence required.</p>
	  </section>
	  <h2>Ingredients</h2>
    <ul>
		  <li>40g Aero Mint Chocolate</li>
		  <li>500g Vanilla Ice Cream</li>
		  <li>Splash of Milk</li>
		  <li>1 tbsp Chocolate Spread</li>
		  <li>(Opt) 1 tbsp Double Cream</li>
	  </ul>
		
    <h2>Instructions</h2>
    <ol class="instructions">
		    <li>Blitz the Aero mint chocolate in a blender/food processor till fine, check for larger lumps and place to one side.<br>
				You can also use a pestle & mortar but, fair warning, lack of a blender/food processor is going to make the rest of this recipe a workout!</li>
				<li>Separately blend 500g vanilla ice cream with a glug of milk (depending on your preferred milkshake thickness) until smooth.<br>
				For this milkshake in particular, thicker is better as it stops the Aero sinking to the bottom as much!</li>
				<li>Add a very enthusiastic tablespoon of chocolate spread to the ice cream mixture & blend.</li>
				<li>Final thickness check: add more ice cream if too thin, or milk if too thick. Also add the optional double cream if you want full indulgence.</li>
				<li>Add back in most of the crushed Aero and give everything one final mix.</li>
				<li>Pour into your fanciest available drink vessel and garnish with a sprinkle of the remaining Aero chocolate!</li>
				<figure class="post-image">
		      <img src="/images/milkshake-pour.jpg">
        </figure>
      </ol>
	  ${divider}
	  <p>Enjoy! The best part of this recipe is how easy it is to adapt, so while mint chocolate is undoubtedly my favourite, here are a few variations I'm planning to experiment with next:</p>
		<section class="table">
  <table>
    <thead>
      <tr>
        <th>Flavour</th>
        <th>Switch the Aero for...</th>
        <th>Replace the chocolate spread with...</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Biscoff</td>
        <td>Biscoff biscuits</td>
        <td>Biscoff spread</td>
      </tr>

      <tr>
        <td>Banoffee</td>
        <td>Banana</td>
        <td>Caramel sauce</td>
      </tr>

      <tr>
        <td>Reese's</td>
        <td>Peanut butter cups</td>
        <td>Peanut butter or keep it chocolate spread!</td>
      </tr>

      <tr>
        <td>Honeycomb</td>
        <td>Crunchie bar</td>
        <td>Golden syrup?<br>Might be too sweet. Then again, is that really a problem?</td>
      </tr>      
			
			<tr>
        <td>Gingerbread</td>
        <td>Sacrificial Gingerbread Men</td>
        <td>Gingerbread Syrup<br>(meant for coffee - better with hot chocolates & milkshakes!)</td>
      </tr>
    </tbody>
  </table>
</section>
    `,
	},
	{
		id: "affirmations",
		date: "2026-05-22",
		title: "💭 Tiny Stories We Tell Ourselves",
		metaTitle: "Do Affirmations Work? A Personal Reflection",
		metaDescription:
			"A reflective exploration of affirmations, attention, identity and the quiet ways repeated words may shape the person we become.",
		category: "Study",
		tags: ["reflection", "self-improvement"],
		excerpt: "The time I investigated the value of affirmations...",
		content: `
		<p>
		I must admit that the quote "if you open your mind too much, your brain will fall out" never fails to make me chuckle. Having said that, I prefer to lead with empathetic curiosity and so when I encountered the world of affirmations, especially given the cynicism it brings out in many, further exploration was required.
		</p>
		<p>
		Anyone who has ever wanted a specific dog breed and suddenly started seeing them everywhere already knows this feeling. The same thing happens with cars, hobbies, and (apparently) even baby names. What we objectively see with our eyes and what our brain chooses to pay attention to are very different things.<br>
		Filtering information is simply more efficient than trying to process everything at once. Otherwise we'd all end up admiring soap bubbles while the saucepan boils over. Where things become especially interesting is whether we can change what our brain views as important & therefore worthy of your attention. 
		</p>
		<br>
		<h3>Priming the Brain</h3>
		<p>
		My philosopher friend may find a way to disagree, but I'm going to start with the assumption that our worldview influences what we think, say & do. I would also argue that what we think, say & do, influence our worldview (especially when it has immediate physical or social feedback!).
		</p>
		<p>
		Note from a half forgotten statistics lesson: you can think of your current worldview as your brain's null hypothesis, and it's running constant tests to check if it needs adjusting. This means, you need some statistically significant evidence to make it reject that current worldview otherwise it will continue to default to that null hypothesis (i.e. your current worldview) rather than the new alternative.<br>
		Whether or not repeating affirmations or mantras to yourself daily is statistically significant enough, is for you to decide.
		</p>
		<p>
		The old adage "sticks and stones may break my bones, but words will never hurt me" makes sense up until the point you remember we're fundamentally social creatures, or until someone says "It's probably better if I do it myself".<br>
		In short, words have Power. This begs the question: would a phrase I repeat daily have power and, more specifically, would it have enough power to change my worldview & hence, my future thoughts, words & actions?
		</p>
		<p>
		Personally my curiosity is piqued enough to warrant experimentation...
		</p>
		<br>
		<h3>Using Affirmations</h3>
		<p>A reminder at this point: I am absolutely not an expert, but the following makes sense to me. Even if you come up with the world's best affirmation, it's going to be more effective if you think about or say it regularly rather than once. Think of it like teaching your brain something new (note to self: would spaced repetition work on affirmations?). This regular mental prompting can include:</p>
		<ul>
		<li>Visual prompting: leaving sticky notes around where you see them daily like the bathroom mirror or your phone background (just remember it'll lose novelty over time so changing up the location can help here).<br>
		I just realised my vision board as my laptop background could actually be considered a kind of "visual affirmation"!</li>
		<li>Meditative prompting: if you already have a meditation habit you can use your affirmation as an anchor in the same way you would your breath or sound.</li>
		<li>Written prompting: start each journal/diary entry with your affirmation (this worked especially well for me as it would then naturally encourage me to reflect on said affirmation).</li>
		<li>Verbal prompting: yes this is the traditional speaking to yourself in the mirror idea, and yes it makes me feel very silly so I'll stick to the other options!</li>
		</ul>
		<p>There are two types of thinking: active and passive. Active thinking is what you're doing when you're journaling, solving a maths problem without a calculator, or desperately trying to come up with a compliment on a first date (basically your conscious brain). Passive thinking is what happens when your brain wanders/daydreams (you can liken it to slow cooker mode), for example it's the source of that eureka moment in the shower, mid dog walk or while doing the dishes (basically your subconscious brain).
		</p>
		<p>
		Why this is relevant is that affirmations tap into both ways of thinking, by actively thinking about the affirmation during the regular prompting, you then encourage the brain to also think about it passively. This helps you come up with new ways to follow through on the affirmation, and new ways to interpret the world according to the affirmation - or at least that's my theory.</p>
		<br>
		<h3>Creating Affirmations</h3>
		<p>While I lived in London, I attended monthly GPS sessions hosted by Ingeniusly. These sessions were essentially group coaching to help create personal compass direction for the upcoming month. In hindsight, I've realised they were a form of monthly affirmation, and so I suddenly feel slightly more justified in giving the following guidance!</p>
		<ul>
		<li>Positive: focus on what you want to be true, not what you want to eliminate (after all if I tell you to not think about a purple elephant, what did you just think about?)</li>
		<li>Personal: starting with "I ..." is a safe bet, it keeps it relevant to you and your identity.</li>
		<li>Present: use the present tense! The future leaves far too much wiggle room.</li>
		<li>Concise: the simpler it is, the easier to remember (and yes I ran out of P words)</li>
		</ul>
		<p>You're looking for that gut response of "yes that's the one", and honestly crafting your own affirmation is a useful reflection exercise in itself. I'll give you some personal examples to get you started, but the real value comes from crafting one that genuinely resonates with you.<br>
		The promised examples:</p>
		<ul>
		<li>I give and receive kindness</li>
		<li>I build up from my foundations</li>
		<li>I'm excited to wait</li>
		<li>I live my life with intention</li>
		<li>I make time to express myself</li>
		<li>I nurture new possibilities</li>
		<li>I contribute value</li>
		</ul>

		<p>Regardless of any further debate around affirmations and their effectiveness; even if they're just tiny course corrections repeated often enough to matter. I suspect the stories we tell ourselves quietly shape the people we become, and that alone makes them worth experimenting with.</p>
		`,
	},
	{
		id: "roasted-aubergine",
		date: "2026-05-21",
		title: "🍆 Roasted Aubergine",
		metaTitle: "Sticky Roasted Aubergine with Bulgogi Glaze",
		metaDescription:
			"Sticky roasted aubergine with bulgogi glaze, crispy pak choi, noodles & vegetables. An easy vegetarian comfort recipe packed with savoury umami flavour.",
		image: "/images/roasted-aubergine.jpg",
		imageAlt:
			"Roasted glazed aubergine served with noodles, pak choi and vegetables",
		category: "Recipe",
		tags: ["asian", "vegan", "vegetarian"],
		excerpt: "The time I got hold of the Korean answer to barbecue sauce...",
		content: `
      <img class="card-image" src="/images/roasted-aubergine.jpg">
	  <section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>Easily my favourite way to cook aubergine, and it works beautifully with a variety of different flavours, so feel free to get creative. This latest iteration used bulgogi sauce, which made it sticky and sweeter than the umami punch miso provides. Bulgogi sauce, if you've never come across it before, is a sweet, savoury and garlicky Korean barbecue marinade.<br>As written, this recipe happily feeds 2 people.</p>
	  </section>
	  <h2>Ingredients</h2>
    <ul>
		  <li>1 Large Aubergine</li>
		  <li>Flavouring (Miso Paste, Hoisin Sauce, Bulgogi Sauce, etc.)</li>
		  <li>2 Pak Choi</li>
		  <li>Assorted Vegetables (We used green beans, sweetcorn & peas)</li>
		  <li>Noodles (Rice would also work)</li>
		  <li>(Opt) Sesame Seeds</li>
	  </ul>
		<p class="ingredient-section">Sauce:</p>
	  <ul>	
		  <li> 1 tbsp Sesame Oil</li>
		  <li> 6 tbsp Soy Sauce (Ketjap Manis also works well if you have it)</li>
		  <li> 1 garlic clove, finely minced or grated</li>
		  <li> Sprinkle of chilli flakes (depending on your spice tolerance)</li>
		</ul>
		
    <h2>Instructions</h2>
    <ol class="instructions">
		    <li>Preheat oven to 180°C.</li>
		    <li>Cut the aubergine lengthwise in half, and score into the flesh in a grid pattern (try not to break the skin).</li>
		    <li>Cut the pak choi lengthwise in half, brush both the pak choi and aubergine halves with oil, and season with salt and pepper.</li>
		    <li>Brush the aubergine with your flavouring of choice (try to get an even coat right up to the edges)</li>
		    <li>Place everything cut-side up on a baking tray and bake for 20 to 25 minutes.</li>
				<br>
		    <li>While it's baking, mix together the sesame oil, soy sauce, minced garlic & chilli flakes to make the sauce (this was inspired by the <a href="https://hungryhealthyhappy.com/roasted-pak-choi/"> Roasted Pak Choi</a> recipe, though we found it too enthusiastic with the sesame oil).</li>
		    <li>(Opt) Brush half the sauce over the pak choi halfway through cooking.</li>
		    <li>Fill a pan with boiling water, and boil the noodles & assorted vegetables (you may need to add some vegetables earlier depending on how quickly they cook).</li>
		    <li>Mix the sauce in with the noodles and vegetables, and plate up with some optional sesame seeds as garnish.</li>
      </ol>
	  ${divider}
	  <p>Enjoy! While writing this post I learned that bulgogi sauce is actually reasonably easy to make yourself according to <a href="https://www.chilipeppermadness.com/recipes/bulgogi-sauce/#wprm-recipe-container-26186">Chili Pepper Madness</a>. However with a name like that, and my personal spice tolerance hovering only just above "startled by black pepper", I'll definitely be making James taste any future attempts first. Bulgogi is apparently most commonly used with meat, but as a pescatarian all I heard was: "this would probably be incredible with mushrooms."</p>
    `,
	},
	{
		id: "quote-page",
		date: "2026-05-19",
		title: "💎 Verbal Treasures",
		metaTitle: "Favourite Quotes, Reflections & Verbal Treasures",
		metaDescription:
			"A playful collection of favourite quotes, thoughtful lines, and tiny reflections gathered in the Soft Alchemy quote aviary.",
		image: "/images/pinterest/quote-page-pin.jpg",
		imageAlt: "A screenshot of floating quotes",
		category: "Life",
		tags: ["books"],
		excerpt: "The time other people said it better...",
		content: `
	    <section class="summary-note">
	      <div class="summary-note-label"></div>
	 	  <p>I have a habit of hoarding good quotations whenever I come across them.<br>
			These have escaped! Catch one to reveal the full quote below.</p>
        </section>
	  
	    <div class="quote-filter">
          <select id="quoteCategoryFilter"></select>
        </div>
        <div class="flying-quotes" id="flyingQuotes"></div>
      
        <article class="quote-reveal" id="quoteReveal">
          <button class="close-quote" type="button">×</button>
          <p id="revealText" class="quote-text"></p>
          <p id="revealAuthor" class="quote-author"></p>
          <p id="revealCommentary" class="quote-commentary handwritten"></p>
        </article>
				<br>
			<h2>Favourite Treasures</h2>
<ul>
  <li>
    "Anything worth doing is worth doing badly." - <em>G.K. Chesterton</em>
  </li>

  <li>
    "The best time to plant a tree was 20 years ago. The second best time is now." - <em>Chinese proverb</em>
  </li>

  <li>
    "A trap is only a trap if you don't know about it. If you know about it, it's a challenge." - <em>King Rat, China Miéville</em>
  </li>

  <li>
    "The single biggest problem in communication is the illusion that it has taken place." - <em>George Bernard Shaw</em>
  </li>

  <li>
    "Life is what you share with others. Hoard it and you will die all the poorer for it." - <em>Practical Guide to Evil, ErraticErrata</em>
  </li>
</ul>
    `,
	},
	{
		id: "bingo-life",
		date: "2026-05-14",
		title: "🔢 A Bingo Life",
		metaTitle: "Personal Bingo Cards for Goals & Habits",
		metaDescription:
			"How to use personalised bingo cards to make goals, habits, dates, and monthly challenges more playful and achievable.",
		image: "/images/bingo-year.jpg",
		imageAlt: "A handwritten yearly bingo goal card",
		category: "Study",
		tags: ["goals", "self-improvement"],
		excerpt: "The time I gamified my goals and made bingo nerdy...",
		content: `
	<section class="summary-note">
	    <div class="summary-note-label"></div>
		<p>Create your own personalised bingo cards to make goals fun & set yourself a challenge. Make a grid to complete this week/month/year - you choose!</p>
      </section>
	  <p>
	  Do you struggle with an endless to-do list, or are you the type of person who doesn't know what they want? Interestingly this next framework helps for both! <br><br>
	  I'm assuming at this point, the concept of gamification is not new (turn your life into a game and things become more fun!), but how do you actually manage to do that successfully? 
	  The answer is by adapting an already existing game to make it suit your needs. In the case of bingo, you take a grid & fill it with your desires (large or small, all are welcome!), then you give yourself a deadline & see if you can get bingo. Simple enough? Here are some guidelines to flesh it out properly.
	  </p>
	  <br>
	  <h3>Choose your difficulty:</h3>
	  <ul>
	    <li>Easy Mode: Just aiming for a row, column or diagonal.</li>
	    <li>Hard Mode: Complete the full grid.</li>
	  </ul>
	  <h3>Choose your commitment:</h3>
	  <ul>
	    <li>5x5: This is the traditional size so you'll have 25 boxes to fill out.</li>
	  </ul>	
	  <ul class="picture-list picture-square">
        <li><img class="journal lightbox-image" src="/images/bingo-jan.jpg"></li>
        <li><img class="journal lightbox-image" src="/images/bingo-feb.jpg"></li>
        <li><img class="journal lightbox-image" src="/images/bingo-march.jpg"></li>
        <li><img class="journal lightbox-image" src="/images/bingo-april.jpg"></li>
        <li><img class="journal lightbox-image" src="/images/bingo-may.jpg"></li>
      </ul>
	  <ul>
	    <li>4x4: Easier to complete as it's only 16 boxes and might be a good way to try out "Hard Mode" without it getting too crazy.</li>
	  </ul>
	  <h3>Choose your duration:</h3>
	  <ul>
	    <li>Day: Wouldn't recommend as it's not the quickest setup, but I can't stop you!</li>
	    <li>Week: Yet to try but a good way to feel accomplished each week.</li>
	    <li>Month: Useful for specifying goals for the month, I keep mine in my bullet journal's monthly spreads.</li>
	    <li>Year: Think of it as new years resolutions but without the guilt!
		<figure class="post-image">
		  <img class="lightbox-image" src="/images/bingo-year.jpg">
		  <figcaption>I got creative with some friends & we each make one for the Chinese New Year - yes technically "Create a Blog" should be ticked off by now</figcaption>
        </figure>
		</li>
	  </ul>
	  <h3>Choose your goals:</h3>
	  <ul>
	    <li>Difficulty: Aim for a variety of easier & harder tasks, this lets you stretch yourself while also getting some quick wins.</li>
	    <li>Area: Unless it's topic specific like a relationship bingo card, try to choose goals across different areas (exercise, creative, social, financial, fun, work etc).
		<figure class="small-post-image">
		  <img src="/images/bingo-relationship.jpg">
		  <figcaption>Topic specific example: My partner & I made a relationship bingo card for dates/activities together</figcaption>
        </figure>
		</li>
	    <li>Placement: Either plop each goal wherever you like or get tactical so each column & row has a variety of difficulty level and different areas!</li>
	    <li>Blank Spaces: If you run out of goals before you run out of spaces consider having the middle point as a "free" space, adding some wacky things outside of your normal day-to-day, asking a friend, or looking at example bingo cards online.</li>
	  </ul>
	  ${divider}
	`,
	},
	{
		id: "sourdough-starter",
		date: "2026-05-12",
		title: "🥣 Starting a Sourdough Starter",
		metaTitle: "How to Start a Sourdough Starter | Beginner Guide",
		metaDescription:
			"A beginner-friendly guide to making a sourdough starter from flour, water, and a willingness to adopt a needy yeast pet.",
		image: "/images/sourdough-starter.jpg",
		imageAlt: "Homemade sourdough starter in a container",
		category: "Recipe",
		tags: ["fermentation", "sourdough", "vegan", "vegetarian"],
		excerpt:
			"The time I made a stinky, needy yeast pet and never looked back...",
		content: `
	  <img class="card-image" src="/images/sourdough-starter.jpg">
	  <section class="summary-note">
	    <div class="summary-note-label"></div>
		<p>All sourdough recipes call for a mysterious "starter", this is how you actually make your own: congrats on your new yeast baby! Yes it does take at least a week of daily feeding unless you can steal some from a friend or want to throw money at the problem.</p>
    </section>
    <h2>Ingredients</h2>
      <ul>
        <li>Flour (Which type? <a href="#qa">Check the Q&A below</a>)</li>
        <li>Water</li>
        <li>Patience</li>
      </ul>
    <h2>Instructions</h2>
		<div id="sourdoughStarterTimeline" class="timeline"></div>

		<br>
		<h2>Starter Experiments</h2>
		<p>Naturally, after learning the sensible method, I immediately started interfering.</p>
		<section class="table">
  <table>
    <thead>
      <tr>
        <th>Starter</th>
        <th>Details</th>
        <th>Result</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Phyllis</td>
        <td>Standard white bread flour starter</td>
        <td>First bread a bit dense, works great since</td>
      </tr>
			<tr>
        <td>Dax</td>
        <td>Rye flour starter with apple peel, left outside for ~24 hours</td>
        <td>Worked perfectly well, but tended to produce denser loaves than Phyllis</td>
      </tr>
		</tbody>
	</table>
	<p>Much to my disappointment, the sensible option won. I also had to deal with an alarming amount of discard from juggling two growing starters. Have since fed Dax to Phyllis (yes it felt wrong but not as wrong as throwing Dax away) and now continue on with white bread flour.</p>
	<br>

		<h2 id="qa">Queries & Starter Crises</h2>
	  <div class="qa-board">
	  <details class="qa-card">
	    <summary class="qa-click-area">
        <span class="qa-label">Does the container matter?</span>
		</summary>
        <p>Not really as long as it's food safe! I've got one starter in an old food processor container & another in a plastic ex-crispy onions pot. Glass mason jars seem to be the internet's go to favourite option. Ideally your container will have some form of lid that you can loosely place on top to allow for airflow while minimising things falling in. (Having said that, even with a loose lid my kitchen's fly population seem annoyingly interested in both starters - just do what you can! 😅)</p>
      </details>
	  <details class="qa-card">
	    <summary class="qa-click-area">
        <span class="qa-label">What type of flour should I use?</span>
		</summary>
        <p>The easiest (& usually cheapest) flour to start with is white bread flour, it keeps things civil & there are plenty of resources online to ask for help if things get sticky. You can also try using brown bread flour or rye flour. I would recommend sticking with one type while you're setting up your initial yeast colony & once it's mature you can change up what type you feed it based on what's available in the cupboard.<br>
		My first sourdough starter is now a combination of mostly white bread flour and occasionally brown bread flour. My second sourdough starter is pure rye flour (I also added some apple peel & left it outside for 24 hours as an experiment to see if that changes up the yeast & hence the bread flavour)</p>
      </details>
	  <details class="qa-card qa-card--long">
        <summary class="qa-click-area">
		<span class="qa-label">I have a life so can't feed daily - are my sourdough dreams ruined?</span>
		</summary>
        <p>No! Well... it depends, but probably not!<br>
		Ideally you will have a period of roughly a week where you can feed your starter daily, but after that your starter will be able to handle extended time alone provided you leave it in the fridge. This slows down the yeast & means it doesn't require feeding anywhere near as often - think of it as a time out for your starter. Once you're back and wanting to use it, take it back out of the fridge to room temperature & continue feeding daily as before. This is exactly what I do for both my starters if I'm gone for a long weekend or even if I'm just overwhelmed by the endless supply of discard dictating my lunch options because I refuse to throw away food.</p>
      </details>
	  <details class="qa-card">
	    <summary class="qa-click-area">
        <span class="qa-label">Why does it smell like nail varnish remover...?</span>
		</summary>
        <p>Don't worry - so do mine! 😅 It just means that your starter is hungry, and is still perfectly safe to bake with. Supposedly occasionally underfeeding a mature starter can improve the bread flavour but I may have just wanted to believe that as I naturally end up feeding inconsistently regardless!</p>
      </details>
      <details class="qa-card">
	    <summary class="qa-click-area">
        <span class="qa-label">My bread is dense - help!</span>
		</summary>
        <p>If your first loaf is a little dense fear not, your starter will continue to mature & improve over time (both of my starters first loaves were a bit dense). You can also add more starter to your recipe to help it along, just bear in mind you'll be changing the hydration proportion so your dough will likely be stickier unless you adjust the water/liquid to accommodate.<br>
		I also got a pretty dense loaf when I tried adding in a mix of whey & buttermilk instead of water, most likely I should have given it longer to rise to accommodate, another failed experiment to learn from!</p>
      </details>
	  <details class="qa-card qa-card--long">
	    <summary class="qa-click-area">
        <span class="qa-label">You make your starters sound like your babies - are you okay?</span>
		</summary>
        <p>It's perfectly normal to name your starters I'll have you know! The daily commitment and stinkiness of my starters just made the analogy inevitable, so there's nothing to read into. At all. So there.</p>
      </details>
    </div>
    `,
	},
	{
		id: "75-soft-challenge",
		date: "2026-05-06",
		title: "🏆 75 Soft Challenge",
		metaTitle:
			"75 Soft Challenge Plan: Gentle Habits & Fitness Goals",
		metaDescription:
			"My personalised 75 Soft Challenge plan, including meditation, reading, hydration, protein breakfasts and daily exercise, adapted for sustainable habits.",
		image: "/images/75-soft-plan.jpg",
		imageAlt: "Handwritten 75 Soft Challenge commitment notes",
		category: "Study",
		tags: ["challenge", "goals", "self-improvement"],
		excerpt:
			"The time I joined the self-improvement internet hype three years late...",
		content: `
	<section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>My 75 soft challenge daily commitment to a protein breakfast, meditation, reading, 6 glasses of water & 45 minutes of exercise. The plan is set in theory, time will tell how it works out in practice.</p>
	</section>
	<h2>What actually is a 75 Soft Challenge?</h2>
	<p>In case you missed the frenzy back in 2023; 75 Soft is the less harsh cousin of the 75 Hard Challenge. It focuses on building healthy routines rather than creating your own personal military bootcamp hell. <br>
	While the challenge spans 75 days, my hope is to create habits that are sustainable beyond that rather than collapsing in a drooling psychological heap 3 months from now. Typical rules/areas of focus include:</p>
    <ul>
      <li>🥑 Healthy eating/following some specific diet (this can also involve being mindful of alcohol & treats)</li>
      <li>💧 Hydration (drinking lots of water)</li>	
      <li>📖 Reading</li>	
      <li>🧘🏻‍♀️ Meditation</li>
      <li>💪 Daily exercise</li>	  
    </ul>
	<p> One of the main advantages of 75 Soft is that it allows for a lot of individual customisation, it also doesn't insist you restart the count to 75 if a day doesn't go as planned!</p>
	<h2>Planning my 75 Soft Commitments</h2>
	<ul>
	  <li>🍽️ <b>Diet:</b> Originally the plan was to reduce my snack addiction but after realising just how many snacks we have in the house after Easter & the latest bulk food shop I decided to leave that for a later challenge and switch gears.<br>
	  Generally I don't eat breakfast, and am powered by a combination of tea & sunshine. Having said that, I learned that unlike for men where intermittent fasting & a reduced eating window is very healthy; women's bodies are different to men's(!) and as a fairly skinny woman in her 30's I would majorly benefit from telling my body it doesn't need to panic and go into starvation mode each morning.<br>
	  ➜ Interested? Look up Dr. Stacy Sims <a href="https://www.youtube.com/watch?v=gZF-Ehfb3_o">Why Women Shouldn't Skip Breakfast</a></li><br>
	  <li>🫖 <b>Hydration:</b> I really don't want to spend all my time on the porcelain altar so rather than buying a mega water bottle & chugging 3L of water a day, I'm going to keep it simple. The NHS guidelines for adult women recommend 2 litres of fluid per day; my mugs & glasses contain roughly ~300-350ml, so I'm good as long as I have 6 drinks per day. Also notice how I said fluid rather than water? That means TEA COUNTS! 🎉🎉🎉 <br>
	  In short my goal is: glass of water as I wake up (~9am), morning English breakfast tea (~10am), water/drink with my lunch (~2pm), afternoon mint tea (~4pm), water/drink with dinner (~7.30pm), evening mint tea or even a celebratory chai/hot chocolate! (~9pm)
	  </li>
	  <br>
	  <li>🎧 <b>Reading:</b> I love reading, especially fantasy. Needless to say I'm not overly worried about this part. Having said that, I seem to have an existing to-do item in my backlog to actually read the many physical books gathering dust on the bookshelves, what's more I've had this to-do item for at least 6 years... 😅<br>
	  While I will happily add the daily commitment to either listen to 10 mins of audiobook or read 10 physical pages, I'm secretly hoping I won't always default to the audiobook and may actually finish a physical book or two!</li>
	  <br>
	  <li><img class="emoji" src="/images/medito-logo.png"><b>Meditation:</b> This is where I'm ahead of the game because one of last month's <a href="/post/growth-areas">growth areas</a> was learning how to meditate! (Yes I might have been paranoid about committing to so many things in the 75 soft challenge and figured I would set myself up for success as much as possible without cheating the system.)<br>
	  I currently am using the Medito app to follow daily guided meditations in the morning before my first tea (don't underestimate that specific caveat, it's a very powerful motivator for me!). The plan is to aim for 10 minutes with the option to increase or decrease the time as required by the day's commitments.</li>
	  <br>
	  <li>🏃🏻‍♀️ <b>Exercise:</b> Ah yes the final boss. Granted I would consider myself reasonably fit, and having a certain fluffball who insists on being walked certainly doesn't hurt when it comes to forcing myself to exercise. However, I want to actually challenge myself rather than just coasting through this on a 45 minute dog walk a day. I've also been wanting to improve my strength based exercise so that I might have visible abs sometime this year, and given bikinis are much better at showing off abs than Christmas jumpers, there's no time like the present to get started! Hence each day I get to take my pick of 45 minutes of the following exercise options:
	  <ul>
	    <li>Rucking while on a dog walk (fancy term for wearing a heavy backpack/weighted vest)</li>
	    <li>Jogging (with or without Echo)</li>
	    <li>Resistance/strength based work out</li>
	    <li>Tennis</li>
	    <li>Gentle recovery dog walk (aim for weekends only or if I really need it)</li>
	    <li>Any other legitimate exercise opportunity that comes up</li>
		</ul>
	  </li>
	</ul>
    <figure class="post-image">
	  <img class="journal" src="/images/75-soft-plan.jpg">
	  <figcaption>Commitment Summary Notes</figcaption>
    </figure>	
	<h2>Implementing my 75 Soft Commitments</h2>
	<p>Did you notice how the tracker in my 75 Soft journal plan started with 1st May? That was meant to be my test day before I start properly on Wednesday 6th May after getting back from my Devon trip (yes James & I went to Devon to celebrate our 2 year anniversary - more on that in a later post!). Did you also notice how that test day doesn't have a complete row of ticks, and just a normal walk as my exercise? Turns out I might have been wrong to be so confident in all my commitment areas... 😅<br>
	Now that I've been suitably humbled, it's Wednesday 6th May 2026 and just turned 3pm on my first proper day of 75 Soft, and I think it's time to actually have lunch & do some exercise before I have to go back and pretend I meant to start tomorrow all along!</p>
	`,
	},
	{
		id: "tuna-sweetcorn-dumplings",
		date: "2026-04-29",
		title: "🥟 Tuna Sweetcorn Dumplings",
		metaTitle: "Tuna Sweetcorn Dumplings | Easy Pierogi-Inspired Recipe",
		metaDescription:
			"A cosy pierogi-inspired tuna sweetcorn dumpling recipe with homemade dough, creamy filling, and freezer-friendly batch cooking potential.",
		image: "/images/tuna-sweetcorn-dumplings.jpg",
		imageAlt: "Homemade tuna sweetcorn dumplings served with garnish",
		category: "Recipe",
		tags: ["dinner-party", "fish"],
		excerpt:
			"The time I discovered pierogi and immediately made them less traditional...",
		content: `
      <img class="card-image" src="/images/tuna-sweetcorn-dumplings.jpg" alt="Nice view">
	  <section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>Polish dumplings meet tuna sweetcorn filling, very moreish! Time consuming but worth it, makes around 30 depending on size & they freeze well for batch cooking.<br>Recipe inspired by <a href="https://www.recipetineats.com/pierogi-ruskie-polish-dumplings/">Pierogi Ruskie Polish Dumplings</a></p>
	  </section>
	  <h2>Ingredients</h2>
	  <p class="ingredient-section">Dough:</p>
      <ul>
		<li>300g Plain Flour</li>
		<li>50g Butter, melted</li>
		<li>125ml Water</li>
		<li>1 Egg</li>
	  </ul>
		<p class="ingredient-section">Filling:</p>
	  <ul>	
		<li>1 can Tuna (160g)</li>
		<li>100g Sweetcorn</li>
		<li>4 tbsp Mayo or Cream Cheese</li>
		<li>(Opt) 1 tbsp Soy Sauce</li>
      </ul>
	  <p class="ingredient-section">Optional Garnishes:</p>
	  <ul>	
		<li>Melted butter</li>
		<li>Crispy Onions</li>
		<li>Spring Onions (chopped)</li>
		<li>Chives</li>
		<li>Parsley</li>
		<li>Some sort of dip (Mayo, Sweet Chilli, take your pick)</li>
      </ul>
      <h2>Instructions</h2>
      <ol class="instructions">
        <li class="section-title">Make the Dough:</li>
		<li>Mix the flour with the melted butter and a pinch of salt</li>
		<li>Add the water and egg, and mix till combined</li>
		<li>Knead the dough on a floured surface until smooth (~5 minutes depending on enthusiasm)</li>
        <li>Leave it to rest for 30 minutes while you make the filling.</li>
        <li class="section-title">Make the Filling:</li>
		<li>Drain the tuna and mix with the sweetcorn & mayonnaise/cream cheese</li>
		<li>Season and optionally add any additional desired flavourings such as the soy sauce</li>
		<li class="section-title">Assembly and Cook:</li>
		<li>Roll out the dough on a floured surface & cut out circles (can use a mug or any circular object - I used roughly 3 inch diameter)</li>
		<li>Repeat with the scraps until you have as many identical circles as possible</li>
		<li>
          Place 1–2 tsp filling in the centre of the circle, brush the edge with water & fold in half using your fingers as indents to seal.
          <br>
          ➤ Freeze any you don't want to eat at this point! ❄️
        </li>
		<li>Bring a large pan of water to the boil and place the dumplings in a few at a time. Cook until they float (~5 minutes)</li>
		<li>(Optional) pan fry in melted butter for a crispy texture <br>(the onion butter sauce from the inspirational recipe is also great)</li>
		<li>Serve with your pick of melted butter over the top, parsley/chives, crispy onions (always a favourite) or some chopped spring onions, alongside a dip of your choice</li>
      </ol>
	  ${divider}
	  <p>Enjoy! My partner & I made a mix of these and the traditional cheesy potato Pierogi filling, needless to say we lost track of which was which and had mystery dumplings for dinner 😂 We served them with butter, crispy onions & parsley; ate half and froze the rest for a dumpling soup.</p>
    `,
	},
	{
		id: "echo-first-birthday",
		date: "2026-04-27",
		title: "🎂 Do Dog Birthdays Count?",
		metaTitle: "Echo’s First Birthday: Wisley Gardens, Dog Ice Cream & Cake",
		metaDescription:
			"Echo the papillon celebrates his first birthday with Walkies at Wisley, dog ice cream, birthday cake, and a very serious dog review.",
		image: "/images/echo/echo-wisley.jpg",
		imageAlt: "Echo the papillon visiting RHS Wisley gardens",
		category: "Life",
		tags: ["dog-approved", "dog recipe", "recommendation"],
		excerpt:
			"The time my puppy turned one and somehow acquired an itinerary...",
		content: `
	<section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>Echo had his first birthday, <a href="#wisley">RHS Wisley gardens</a> do a dog event, he also got <a href="#ice-cream">dog ice cream</a> and his own <a href="#birthday-cake">birthday cake</a>!</p>
	</section>
	<p>
	It turns out for me dog birthdays definitely count. While I won't go as far as to organise a full-on birthday party, it is a wonderful excuse to crack out the dog cookbook I got for Christmas and give the dog approved birthday cake recipe a go. It is also the perfect excuse to upgrade the usual walk... 
	<h3 id="wisley">Exploring Wisley Gardens</h3>
	<img class="card-image" src="/images/echo/echo-wisley.jpg" alt="Nice view">
	<p>For those of you who live close enough to be interested: yes there is a special event <a href="https://www.rhs.org.uk/gardens/wisley/whats-on/walkies-at-wisley">Walkies at Wisley</a> where you can bring your favourite furry friends along to enjoy the beautiful scenery.
	</p>
	<p> Wisley Mini Review - the good: </p>
	<ul>
	<li>Gardens are gorgeous, especially the tulips during end of April (which sits close to my Dutch heart)</li>
	<li>Perfect dog exposure for puppies (to Echo's delight there were so many dogs there & he did his absolute best to say hello to all of them 😆). As an added bonus from a puppy perspective, all dogs need to stay on leads so you're able to control the interactions much more than you would on a normal walk, there's also likely to be a large variety of breeds so your puppy would get to meet big dogs, small dogs, old dogs, young dogs, the list goes on!</li>
	<li>Everyone was super friendly (granted this applies on most dog walks, there's just something about walking a dog that lets you open up to strangers in a wonderfully unique way)</li>
	</ul>
	<p>Wisley Mini Review - the bare in mind:</p>
	<ul>
	<li>There are only limited Walkies at Wisley events so make sure to plan ahead, this isn't something you can do on impulse but that also makes it more special</li>
	<li>The event only lasted 2 hours (6-8pm) which is a good chunk of time to see most of the gardens, but if your dog wants to sniff at every flower pot you'll want to look ahead at what parts of the garden you're specifically interested in seeing! (For me it was the wisteria walk and cherry blossoms - though I was sadly unsuccessful in finding the latter)</li>
	<li>Unlike your usual dog walks, there is a price for entry, though I would argue the effort put into the gardens fully justifies it & there is a membership option if you plan to go multiple times</li>
	</ul>
	<h3 id="ice-cream">Time to cool down</h3>
	<p>Another special event linked to Echo's birthday was his first introduction to dog ice cream! </p>
	<section class="dog-review">
      <div class="angled-title dog-title">Echo's Review - Ice Cream</div>
      <div class="dog-image">
 	   <img src="/images/echo/echo-ice-cream.jpg" alt="Dog Ice Cream">
 	   </div>
      <div class="dog-columns">
        <div class="dog-good">
          <h4>good</h4>
          <ul>
            <li class="loud">food!</li>
            <li>human hold pot</li>
            <li>tasty</li>
 	   	<li>human take extra home for dinner</li>
          </ul>
        </div>
      
        <div class="dog-bad">
          <h4>bad</h4>
          <ul>
            <li>too cold but must eat</li>
            <li class="sad">gone</li>
          </ul>
        </div>
      </div>
    </section>
	<h3 id="birthday-cake">Let them eat cake</h3>
    <div class="photo-collage">
      <img src="/images/cake-recipe.jpg">
      <img src="/images/frankie-cake.jpg">
      <img src="/images/dogs-birthday-cake-eating.jpg">
      <img src="/images/cake-mix.jpg">
      <img src="/images/dogs-impatient.jpg">
      <img src="/images/cake-cutting.jpg">
    </div>
	<div class="collage-caption">
      Recipe from <a href="https://www.amazon.co.uk/Tasty-Treats-Happy-Henrietta-Morrison/dp/1529105501/ref=asc_df_1529105501?mcid=6a48275ed91134a4b594982783c5be3e&th=1&psc=1&tag=googshopuk-21&linkCode=df0&hvadid=697222099338&hvpos=&hvnetw=g&hvrand=10954306607156466962&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9193746&hvtargid=pla-849129083265&psc=1&hvocijid=10954306607156466962-1529105501-&hvexpln=0&gad_source=1">Lily's Kitchen: Tasty Treats for Happy Dogs</a> 🐶🍰
    </div>

	`,
	},
	{
		id: "growth-areas",
		date: "2026-04-24",
		title: "🌿 Growth Areas",
		metaTitle: "Growth Areas: A Simple Monthly Self Improvement System",
		metaDescription:
			"A simple monthly planning system for choosing three growth areas, reducing overwhelm, and turning too many goals into a focused plan.",
		image: "/images/grow-area-summary.jpg",
		imageAlt: "A handwritten growth areas planning page",
		category: "Study",
		tags: ["goals", "self-improvement"],
		excerpt: "The time I learned how to not overcommit myself...",
		content: `
	<p>
	Have you ever felt overwhelmed & like you should be doing a thousand things, while each day ends with the disappointment of having done what feels like nothing? If so, then I empathise and have been there with you most of my adult life! Each day dawns with the potential of 24 glorious hours to be filled with...
	</p>
	<ul class="chaos-list">
      <li>Learn Spanish</li>
      <li>Play Piano</li>
      <li>Reply to Emails</li>
      <li>Journal</li>
      <li>Learn about Flower Arranging</li>
      <li>Walk the Dog</li>
      <li>Bake Something</li>
      <li>Resistance Workout</li>
      <li>Water the Plants</li>
      <li>Shower</li>
      <li>Learn how to stop killing my plants</li>
      <li>Book next holiday</li>
      <li>Sort Finances</li>
      <li>Get better at coding</li>
      <li>Watch Brooklyn 99</li>
      <li>Cook epic dinner</li>
      <li>Try out CAD Program for Interior Design</li>
      <li>Dog Training</li>
      <li>Practice Handstands</li>
      <li>Do Yoga</li>
      <li>Shave my legs</li>
      <li>Go Jogging</li>
      <li>Sell Unwanted Clothes on Vinted</li>
      <li>Learn to Meditate</li>
      <li>Tidy the Kitchen</li>
      <li><a href="/post/75-soft-challenge">Start 75 Soft Challenge</a></li>
      <li>Start the Bookclub Book</li>
    </ul>
	<p>Before you get overwhelmed, I present the answer: Growth Areas!</p>
	<h3>What are Growth Areas?</h3>
	<p>A growth area, is an area/topic you want to actively improve in. It's something where you want to focus intentional effort for a set period of time, in order to gain meaningful improvement. Most importantly I'm only allowed to have 3 growth areas per month (your own limit and time period you can of course choose for yourself!). The secret power in only having 3 is that every other potential growth area goes into a backlog list in my journal where it can no longer make me feel guilty for not giving it attention. The daily onslaught of "shoulds" goes <b>way</b> down to only the activities linked to the growth areas I've actively committed myself to (for example this month I'm focusing on daily meditation, this site and my garden).</p>
	<p> As a bonus if you enjoy planning, because you've actively committed to these specific growth areas you can also make a specific plan for what tasks you want to complete relating to that area, which reduces the overwhelm down even more to just the next action for each area.<br>
	<h3>Planning a Growth Area</h3>
	Some areas will be fairly simple:</p>
	<ul><li>Meditation plan: meditate daily using the Medito beginner course</li></ul>
	<p>Others will be a lot more complicated and can include:
	<ul>
	<li>Books to read</li> 
	<li>Things to buy (such as seeds & soil for my <a href="/post/garden-plan">future garden</a> growth area)</li>
	<li>General research (though I recommend being careful with this one as it's easy to fall down the "research" rabbit hole and come out the other end of the month wondering what you actually achieved. In short wherever possible be specific!)</li>
	<li>A list of tasks to do (I tend to keep mine in my monthly spread BuJo style given the growth areas span a month)</li>
	</ul>
	Here is my most complicated growth area plan to date: 
	</p>
	<figure class="small-post-image">
	  <img class="journal" src="/images/house-grow-area-plan.jpg" alt="House Grow Area Plan">
	  <figcaption>I tried combining cooking, interior design, and more into a home making monster growth area.<br> As you can see I overcommitted 😅 </figcaption>
    </figure>
	<p>
	If you've already heard of the concept of a personal curriculum where you build your own learning pathway outside of the structure of school/university, growth areas fit in perfectly as they essentially represent one module/subject each which can be combined together to create the ultimate personal learning semester! Assuming you're onboard and ready to give it a go (given you've read this far) this is what a summary page of your grow areas can look like (a list on your phone also works fine, I'm just addicted to my journal):
	</p>
	<figure class="small-post-image">
	  <img class="journal" src="/images/grow-area-summary.jpg" alt="Grow Area Overview">
    </figure>
	<div class="qa-board">
      <details class="qa-card qa-card--long">
	    <summary class="qa-click-area">
        <span class="qa-label">Can I still do tasks outside my planned growth areas?</span>
		</summary>
        <p>Of course! You can think of them as one off fun tasks to do alongside the growth areas without committing to a whole new project. In fact one off tasks are a great way to explore what future growth areas you might enjoy, for example playing a single song on an instrument for the fun of it without the pressure of needing to practice daily.</p>
      </details>
      <details class="qa-card qa-card--long">
	    <summary class="qa-click-area">
        <span class="qa-label">I'm doing a no-buy, would that count as a growth area?</span>
		</summary>
        <p>Unless your no-buy comes with learning about budgets & finance, it would count as a constraint not a growth area. Something is only a growth area if you are actively learning something (usually for the first time). Having said that, a no-buy is definitely something to keep in mind when deciding which growth areas to focus on so that those areas are possible without spending any money!</p>
      </details>
    </div>
	`,
	},
	{
		id: "sourdough-bread",
		date: "2026-04-23",
		title: "🍞 Sourdough Bread",
		metaTitle:
			"Simple Sourdough Bread Recipe | Beginner-Friendly Homemade Loaf",
		metaDescription:
			"A beginner-friendly sourdough bread recipe using simple ingredients, stretch and folds, overnight fridge proofing, and no fancy equipment.",
		image: "/images/sourdough-bread-half.jpg",
		imageAlt: "A homemade sourdough loaf cut in half",
		category: "Recipe",
		tags: ["sourdough", "vegan", "vegetarian"],
		excerpt:
			"The time I joined the 30 year old woman bandwagon and made sourdough bread...",
		content: `
	  <img class="card-image" src="/images/sourdough-bread-half.jpg" alt="Nice view">
	  <section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>Sourdough is epic and surprisingly less effort than traditional bread as it requires minimal kneading! I make mine over a 2 day period so heads up, it does take patience and some preplanning. Also note you don't need special equipment to make good bread: I use my hands, a bowl, weighing scales & my glass casserole dish - that's it!</p>
	  </section>
      <h2>Ingredients</h2>
	  <ul>
		<li>500g White Bread Flour (I'm sure you can use other bread flours I just haven't tried that yet!)</li>
		<li>350ml Water</li>
		<li>150g Sourdough Starter</li>
		<li>10g Salt</li>
      </ul>
			<p>That's it unless you want to have fun with fillings or flavourings!<br>
			Don't have a starter yet? <a href="/post/sourdough-starter">Here's how I made mine.</a></p>
			<br>
			<h2>Timeline Overview</h2>
			<div id="sourdoughBreadTimeline" class="timeline"></div>
      <h2>Instructions</h2>
      <ol class="instructions">
        <li class="section-title">Making the Dough (Day 1):</li>
		<li>First off feed your sourdough starter with an equal mix of flour and water, if you haven't already! You're aiming for your starter to be bubbly & have ideally doubled in volume (usually around 4 hours after feeding is best).</li>
		<li>Mix the flour and water together in a bowl</li>
		<li>Abandon it for a while to do something else, you're allowing for the autolyse process to happen which makes life easier for you. An hour is great, 20/30 mins if you are short on time will also work.</li>
        <li>Mix in sourdough starter and salt, and ideally leave for another 30 minutes</li>
        <li class="section-title">Stretch & Fold time (Still Day 1):</li>
		<li>
		Wet your hand (optional but helps dough stick less) then grab part of your dough and stretch it upwards, then plonk the stretched part on top.<br> 
		If that didn't make sense here is the video I used: <a href="https://www.youtube.com/shorts/_xdrLqeO9Bc">Stretch and Fold 101</a>
		</li>
		<li>Repeat this 4 times (though honestly I've done a couple more when I lost count)</li>
		<li>Leave for 30 minutes (a timer is highly recommended!)</li>
		<li>Repeat this process at least twice more (you're aiming for a minimum of 3 stretch and fold sessions, though more doesn't hurt especially if you've found a partner/minion to do it for you!)</li>
		<li>
		(Opt) Shape the dough (yes this is entirely optional!) but it helps the rise and makes it look prettier. You're essentially aiming to create tension within the dough surface without beating all the air out of it.<br>
		It's also hard to explain in text so here is the video I used: <a href="https://www.youtube.com/shorts/Z2Was_SY9Z0">How to Shape Sourdough</a>
		</li>
        <li>Place onto a floured banneton if you're fancy, or just straight into what you're going to bake it in (I use my circular glass caserole dish)</li>
		<li>Leave in the fridge overnight (or until you're ready to bake, I've left it up to 2 days before - it was slightly overproofed but still airy and tasty)</li>
		<li class="section-title">Bake (Day 2):</li>
		<li>Preheat oven to 220°C fan</li>
		<li>Transfer to desired baking vessel if not already done so & (opt) score the top with a knife</li>
		<li>Bake for 20 minutes with a lid (Dutch oven or casserole lid if you have it, otherwise tin foil will work too)</li>
		<li>Remove lid & bake for 20-25 more minutes</li>
		<li>Remove from oven and leave for 1 hour before slicing and eating (yes this is the hardest part)</li>
      </ol>
	  ${divider}
	  <p>Enjoy! I'm sure I don't need to tell you what to put on bread.<br> 
	  If you do get as obsessed with making sourdough as I have I highly recommend an electric bread knife!</p>
	  <img class="card-image" src="/images/sourdough-slices.jpg" alt="Nice view">
    `,
	},
	{
		id: "mushroom-wellington",
		date: "2026-04-22",
		title: "🍄 Mushroom Wellington",
		metaTitle:
			"Vegetarian Mushroom Wellington | Puff Pastry Dinner Party Centrepiece",
		metaDescription:
			"A vegetarian mushroom wellington with hoisin-style filling, puff pastry, rice paper anti-sog layer, and dinner party centrepiece energy.",
		image: "/images/mushroom-wellington-puff.jpg",
		imageAlt: "A golden vegetarian mushroom wellington wrapped in puff pastry",
		category: "Recipe",
		tags: ["dinner-party", "mushrooms", "vegetarian"],
		excerpt:
			"The time I took a beef wellington, turned it vegetarian and sent it off to Asia...",
		content: `
      <img class="card-image" src="/images/mushroom-wellington-puff.jpg" alt="Nice view">
	  <section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>Great pastry centre piece for a roast, I fed 7 people and had leftover filling for sandwiches so feel free to half the recipe if desired. Be sure to leave enough time as the recipe includes some cooling steps and 20 minutes in the fridge before final bake!<br>
		Secret weapon: Rice paper creates a moisture barrier between the filling and pastry.
		</p>
	  </section>
	  <h2>Ingredients</h2>
	  <p class="ingredient-section">Filling:</p>
      <ul>
		<li>2 tbsp Sesame Oil</li>
		<li>500g Mushrooms (finely chopped)</li>
		<li>6 cloves Garlic, minced</li>
		<li>1 tbsp Ginger, grated or minced</li>
		<li>6 Spring Onions, finely sliced</li>
		<li>(Opt) 2 tbsp Sherry, White Wine or Rice Wine</li>
        <li>300g Vegetarian Shredded “Duck” (Linda McCartney Vegetarian Shredded Hoisin Duck is my favourite)</li>
        <li>1 tin Water Chestnuts (drained + finely chopped)</li>
		<li>2 tbsp Soy Sauce</li>
		<li>2 tbsp Hoisin Sauce</li>
		<li>2 tsp Sesame Seeds</li>
	  </ul>
		<p class="ingredient-section">Structure:</p>
	  <ul>	
		<li>3 sheets Rice Paper (can do more if you want to double them)</li>
		<li>1–2 tsp Sesame Oil (for brushing)</li>
		<li>2 sheets Ready-rolled Puff Pastry</li>
		<li>1 egg or plant milk (for glazing)</li>
      </ul>
      <h2>Instructions</h2>
      <ol class="instructions">
        <li class="section-title">Make the Filling:</li>
		<li>Pan fry mushrooms in the sesame oil with a pinch of salt. Stir occasionally and cook till water completely cooked off and browned (expect 15-20 mins)</li>
		<li>Add garlic, ginger & spring onions, mix & cook for couple minutes</li>
		<li>Add vegetarian duck, water chestnuts, soy sauce & hoisin. Cook until hot & the liquid is all gone (we want the filling as dry as possible!)</li>
        <li>Mix in sesame seeds, taste & adjust as desired, then leave to cool</li>
        <li class="section-title">Make the Rice Paper Barrier (the anti-sog protection):</li>
		<li>Briefly dip each piece of rice paper in water and lay flat to let soften for ~30 seconds</li>
		<li>Lightly overlap 3 sheets to form a wide base & brush with sesame oil (I did this on top of baking paper to have extra control and reduce sticking)</li>
		<li>Pile filling onto rice paper and form a tight log, gently wrap the edges of the rice paper over the top to form a giant sausage shape (my rice paper broke a little but final wellington was still great so don't panic!)</li>
		<li>(Optional) cook in oven at 180°C for 10 minutes to improve the rice paper texture and let cool</li>
		<figure class="post-image">
		  <img src="/images/mushroom-wellington-prepuff.jpg" alt="Mushroom Wellington wrapped in rice paper coating">
		  <figcaption>If it looks anything like this, you're doing great! 🙌</figcaption>
        </figure>
		<li class="section-title">Final Assembly and Bake:</li>
		<li>Roll out the puff pastry, sealing the 2 sheets together with your fingers or a rolling pin</li>
		<li>Place the cooled log in the centre and wrap the pastry around it (decorate the top with any remaining pastry however you like, or place it seam down for minimalist look)</li>
		<li>Chill in fridge for 20 minutes</li>
		<li>Brush with egg wash or milk & bake 35 minutes at 180°C fan till deep golden</li>
      </ol>
	  ${divider}
	  <p>Enjoy! I served mine with a honey onion gravy, though if you want to fully embrace the Asian influence you can also use a soy & rice vinegar dip, or just more hoisin sauce!</p>
    `,
	},
	{
		id: "sabbatical-plans",
		date: "2026-03-01",
		title: "🌿 Sabbatical Plans",
		category: "Life",
		tags: ["goals", "reflection"],
		excerpt: "What I want to explore during my time off...",
		content: `
		<section class="summary-note">
	  <div class="summary-note-label"></div>
	  <p>
		The plan is a lie, as is this post.<br>
	  I use it as a shameless template, who knows maybe one day I'll actually fill in the details 😅</p>
	  </section>
		`,
	},
];
