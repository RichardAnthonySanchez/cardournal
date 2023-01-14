var model = {
	numCards: 10,
	cardDrawings: [],
	subjects: 5,
	
cardNames: ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers",
"The Chariot", "Strength", "The Hermit", "The Wheel", "Justice", "The Hanged Man", "Death", "Temperance",
"The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World", " Ace of Wands",
" Two of Wands", " Three of Wands", "  Four of Wands", "  Five of Wands", "  Six of Wands",
"  Seven of Wands", "  Eight of Wands", "  Nine of Wands", "  Ten of Wands", "  Page of Wands",
"  Knight of Wands", "  Queen of Wands", "  King of Wands", "  Ace of Cups", "  Two of Cups",
"  Three of Cups", "   Four of Cups", "   Five of Cups", "  Six of Cups", "  Seven of Cups",
"  Eight of Cups", "  Nine of Cups", "  Ten of Cups", "  Page of Cups", "  Knight of Cups",
"  Queen of Cups", "  King of Cups", "  Ace of Swords", "  Two of Swords", "  Three of Swords",
"  Four of Swords", "  Five of Swords", "  Six of Swords", "  Seven of Swords", "  Eight of Swords",
"  Nine of Swords", "  Ten of Swords", "  Page of Swords", "  Knight of Swords", "  Queen of Swords",
"  King of Swords", "  Ace of Pentacles", " Two of Pentacles", "  Three of Pentacles", "  Four of Pentacles",
"  Five of Pentacles", "  Six of Pentacles", "  Seven of Pentacles", "  Eight of Pentacles", "  Nine of Pentacles",
"  Ten of Pentacles", "  Page of Pentacles", "  Knight of Pentacles", "  Queen of Pentacles", "  King of Pentacles"],

cardObjects: [
		{ name: "The Fool"
		, relationships: "There's a reason we say we fall in love! Each new romance makes us as giddy as a total beginner. Don't allow old habits to smother opportunities for growth. You can break rules without resorting to rash action and you don't have to be in control all the time."
		, work: "Leap over limits. Don't waver; now's the time to jump, even if you don't have all the facts in hand. Remember that once, every new direction was just another crazy idea. Be prepared, though. Later, your results will determine whether others deem you clever or crazy." 
		, spirituality: "You are old and young, wise and inexperienced. Life is a cycle of cycles; find your place in the dance and start dancing. Reinvention is the key to transformation. See who you are, but acknowledge, too, the person you can be. Grace abounds; embrace it. Consider Zen meditation."
		, personalGrowth: "Without falling for every scheme that comes your way, you can cultivate an openness to life. What are your limits? What boundaries define you? What might happen if you step outside those definitions? With eyes wide open, expand your world today."
		, fortuneTelling: "Watch for new projects and new beginnings. Prepare to take something on faith. Something new comes your way; go for it."
		},
		
		{ name: "The Magician"
		, relationships: "A relationship should empower you. Does yours generate positive change in your life? Do you feel happier and more fulfilled? A relationship that supports your goals is to be valued; a relationship that doesn't must be changed or cast aside."
		, work: "Exercise whatever authority you have. With the right resources, you'll succeed. But not everyone who appears empowered really is. With an eye toward growth, seek allies who focus on steak, not sizzle. Be a mentor ... or find one. Deploy tools and resources against well-defined goals." 
		, spirituality: "If others were to see you and your life as an expression of the Divine, what would their impression of the Divine be? How can you improve that perception? How can you better dedicate yourself to being a channel for positive energy in the world?"
		, personalGrowth: "Asserting yourself can be an important step toward wholeness. When your work or life experience has given you special insights or talents, shrug off self-doubt and apply them fearlessly. Act confidently, and feelings of confidence will follow."
		, fortuneTelling: "A powerful man may play a role in your day. Your current situation must be seen as one element of a much larger plan."
		},
		
		{ name: "The High Priestess"
		, relationships: "Your heart is your best source of information now; listen to it. Set, communicate, and respect sexual limits. Don't tell everything you know; one element of attraction is mystery. Still, don't be a puzzle; communicate your needs and the reasons for them. Watch and learn."
		, work: "Play your cards close to the vest. Reveal your insights to a chosen few. Rather than take rash action now, keep still and observe. Hold your tongue and learn by listening. Listen to your gut instincts. When the time comes for action, you'll know." 
		, spirituality: "The unconventional image of a papess recalls the legend of the heretical, cross-dressing Pope Joan, whose true gender was revealed when she unexpectedly gave birth. Consider alternative spiritual paths or nontraditional applications of your familiar faith."
		, personalGrowth: "Learning to listen can be the most difficult lesson of all. Invest energy in the transformational discipline of silence. Disengaging from the drive to respond will free you to reflect. As an observer, you will see patterns participants will overlook."
		, fortuneTelling: "A mysterious woman arrives. A sexual secret may surface. Someone knows more than he or she will reveal."
		},
		
		{ name: "The Empress"
		, relationships: "Without going overboard, revel in your sensuality. Take care you don't produce more than you intended; the moment is pregnant with possibility. Be lavish with demonstrations of affection. Watch for what a friend or partner needs, and then supply it in abundance."
		, work: "Now is the time to get things done. Wrap up projects. Ask for resources. Meet deadlines. Move ahead. During this time of growth and expansion, be sure you have the skills and training you need. In the meantime, don't mistake a headlong rush for focused, verifiable progress." 
		, spirituality: "Women are the figurative and literal door to this world. This moment, too, can be a door for youÑa threshold you cross into a new awareness. Watch for physical ways to express your spiritual insights. Reconnect with nurturing, feminine images of divinity, including nature."
		, personalGrowth: "Your attitudes toward women (and your insights into your own feminine qualities) are likely rooted in early experiences. How can you emulate the best female role models you've encountered? How can you transcend female influences that harm or hold you back?"
		, fortuneTelling: "Pregnancy is in the cards. An opportunity to be involved in luxurious sexuality is coming. Beware a tendency toward addiction."
		},
		
		{ name: "The Emperor"
		, relationships: "Without becoming false or deceptive, you can regulate your feelings and reactions. Beware the need to always be in control; a healthy relationship incorporates a fair division of labor. Be on the lookout for subtle and not-so-subtle efforts to wear the pants in the relationship."
		, work: "Efficient groups depend on centralized control. Seek ways to direct the flow without micromanaging the process. Encourage leaders (including yourself) to step up to the plate and embrace their obligations. Control what you can; don't worry about the rest." 
		, spirituality: "The stereotypical view of religion casts organized faith in restrictive terms. Rather than be constrained by structure, consider how structure and discipline might enhance your spiritual experience. Seek guidance and direction from those who have walked the path before you."
		, personalGrowth: "In what ways do your attitudes toward authority seem to be shaped by your relationship with your father? A mature person recognizes that structure and authority are a requirement of civilization. Some resist purely out of habit or stubbornness; when you buck the system, be sure you have good reason to do so."
		, fortuneTelling: "A father figure arrives. A new employer or authority figure will give you orders. Expect discipline or correction in the near future."
		},
		
		{ name: "The Hierophant"
		, relationships: "A relationship should be more than just going through the motions. Seek the deeper meaning of small gestures and daily chores. Emphasize signs that those involved have real faith in the partnership. If necessary, seek guidance from a spiritual leader or counselor."
		, work: "Seek training or a mentor, particularly if you are having difficulty understanding a complex assignment or when adjusting to new professional surroundings. See your daily work as an expression of your faith. Take traditional routes instead of innovative, unproven measures." 
		, spirituality: "See familiar spiritual symbols in a new light by pursuing a deeper understanding of them. If you're a lone practitioner, consider the value of joining a like-minded group or learning from a worthy teacher. What are the larger truths behind the rituals or stories you've learned?"
		, personalGrowth: "In time, everyone must deal with conflicts between experience and faith. Where do you find your personal center? Values dictate behavior, so work to define what you truly believe in. Don't shy away from the big questions, but be wary of gurus bearing quick answers."
		, fortuneTelling: "Expect to be caught in a misdeed and punished accordingly. Pray for forgiveness and confess wrongdoings. A more experienced man, spiritual leader, or father figure will come into your life."
		},
		
		{ name: "The Lovers"
		, relationships: "This is a time to celebrate unity, love, and romance in all its forms. Souls are coming together, and a unique opportunity exists for people to enjoy an unusual degree of interdependence and cooperation. Let your heart guide your choices today."
		, work: "Call group meetings, pursue mergers, and find solid business partners during this rare opportunity for successful cooperation. Pay special attention to opportunities to supply what others need. Lay a foundation for future success by watching for team members with skills you lack. Make choices based on what you truly enjoy doing." 
		, spirituality: "Open yourself to new and diverse spiritual experiences. See opportunities to love others (even romantically) as chances to be a channel for divine love. Every small blessing you receive is an expression of universal love; give thanks and embrace what life brings you."
		, personalGrowth: "Now is a good time to deal with outstanding issues related to sexuality and relationships. Rather than be overwhelmed with Hollywood-style passion, consider the extent to which your qualities might be balanced or enhanced by those of your potential partner. In other areas, find your passion and pursue it."
		, fortuneTelling: "A new personal or professional relationship blossoms. Sexual opportunities abound. Unexpectedly, a friend becomes a lover."
		},
		
		{ name: "The Chariot"
		, relationships: "Moving forward to mutual victory requires trust and cooperation. If you have this already, depend on it during an upcoming challenge. If you lack it, consider what choices have prevented forming this kind of bond. Don't rest on your laurels; successful romance is an ongoing commitment."
		, work: "What do you need to move forward? Now is the time to summon resources and plan for future success. Past successes might not be an indicator of current value. Remember that employers tend to ask What have you done for me lately? Work accordingly." 
		, spirituality: "Celebrate spiritual achievement, but be aware that a sense of having arrived can be the first step toward disastrous vanity. The goal is not to be a guru, but to achieve balance and stability. As you make progress, extend a helping hand to others who still await their chariot moment."
		, personalGrowth: "Reaching a new plane of maturity is exciting, so some celebration is in order. Every ending, though, is a new beginning; keep an eye fixed on further growth. Having reached the limits of mundane success, it's time to work on deeper transformation."
		, fortuneTelling: "Victory is a certainty. Move ahead with all plans. Beware the jealousy of others."
		},
		
		{ name: "Strength"
		, relationships: "You're in control. You can't tame others, but you can rein yourself in. Watch for old habits or weaknesses to surface, and use your wits to avoid upcoming pitfalls."
		, work: "Emotions and distractions can hinder progress. Identify the cause of dissention and take steps to moderate it. Allow people (including yourself) to do what they do best. An objective perspective yields more effective action." 
		, spirituality: "The spirit is willing, but the flesh is weak. Your own willpower may not be strong enough to resist the temptations that come your way. (That's okay; you're human.) Turn challenges over to a higher power, and allow yourself to be led."
		, personalGrowth: "Identify problematic habits and unhealthy tendencies, and weigh their overall impact on your life. Consider, too, the value of leaving these behind for healthier options. A good measure of maturity is the ability to forgo immediate gratification to reap benefits later."
		, fortuneTelling: "Your self-control will be tested. A woman will seek to change her partner or lover. You are a strong, capable person."
		},
		
		{ name: "The Hermit"
		, relationships: "Don't be afraid of being alone. Even the closest companions need some time apart. Being involved in a partnership does not eliminate your need to be your own person. To better please others, first learn how to please yourself."
		, work: "Sometimes, you have to close the door, forward calls to voice mail, and shut down your email client to get things done. Demand the space and time you need to get your assignment done. If you're overwhelmed, consider bringing in a consultant or an experienced aid." 
		, spirituality: "Learn to be still. Doing so is a challenge in today's hurly-burly world, but the skill offers many benefits. Focus on meditation; condition yourself to slow your thoughts and lower your blood pressure with a few measured breaths. Daily practice will make a huge difference in the quality of your life."
		, personalGrowth: "To be the best you can be, you must know who you really are. Reject the definitions others project on you. Search within. What do you really value? What do you really want to achieve? Empower yourself by embracing yourself, warts and all."
		, fortuneTelling: "A period of loneliness begins. One partner in a relationship departs. A search for love or money proves fruitless."
		},
		
		{ name: "The Wheel"
		, relationships: "You can't plan every moment. Be spontaneous. Rather than strive for control, let go of the reins and see where the relationship goes. Check your behaviors. Are you reliving mistakes of the past?"
		, work: "Feeling a little de-ja-vu? Return to old files; new solutions might be lying dormant there. Ask yourself what this new opportunity has in common with older challenges. In analysis, take into account all influences, including those beyond your control." 
		, spirituality: "Behold the delicate machinery of heaven! As you watch events unfold, keep your perspective. What seems impossible to understand today will make sense with the passing of time. Look for the larger patterns."
		, personalGrowth: "The actions you take today will influence your reality for days and years to come. Making wise choices now can free you from the unpleasant business of enduring repercussions further down the road."
		, fortuneTelling: "Some events are in the hands of heaven. You've lived through this before. What happened then?"
		},
		
		{ name: "Justice"
		, relationships: "Relationships are rarely 50/50 propositions, but the closer you come to an even division of responsibility, the better. What do you really need to be satisfied? Knowing your standards empowers you to evaluate your feelings more clearly."
		, work: "Work toward a more equitable division of labor. Learn to delegate. Evaluate your own work using the same standard you bring to bear on the work of others. Know what matters most, and prioritize accordingly." 
		, spirituality: "In all things, seek balance. When faced with a decision, quiet your mind and allow your heart to weigh the moment. Trust in the law of karma; avoid personal efforts to mete out universal justice."
		, personalGrowth: "Everyone faces limitations of some kind. Learn your own limits. Rather than allow them to define you, use what you know to better position yourself for success. Learn when to say yes; know when to say no."
		, fortuneTelling: "A legal verdict will be rendered soon. Someone is making a decision. You need to get the facts."
		},
		
		{ name: "The Hanged Man"
		, relationships: "What doesn't move forward isn't growing. If you're hanging by a thread, it might be time to grab the scissors. If you can learn from what's not working, do so, but don't equate learning with having to stay."
		, work: "Occasionally, no amount of effort will move a project to completion; progress simply isn't the cards, despite your best efforts. Learn from setbacks; turn disappointment into opportunity." 
		, spirituality: "Sometimes the best action is no action at all. Suspend your need to have a hand in things. Consider, too, the value of small sacrifices. What you give away will come back to you greatly multiplied."
		, personalGrowth: "One sign of maturity is your ability to deal effectively with the unexpected. Rather than be decimated, look for the lesson. If you're true to your own values, no disaster will get the best of you."
		, fortuneTelling: "A traitor is revealed. One of your friends is working against you. Change your ways or suffer the consequences."
		},
		
		{ name: "Death"
		, relationships: "Identify what's not working and put it behind you. Take stock, too, of the relationship itself. Dying flames can be rekindled with mutual effort, but embrace an ending if, in fact, an ending is what's best for you. Poets used to call orgasm the little death so, at times, this card can also point to a consummated relationship!"
		, work: "Close out lingering projects and tie up loose ends. Now is a good time to consider all your options, including the possibility of moving on. Alternatively, you could put an end to feelings of unrest by deciding, once and for all, to stay put. Do what's best for you." 
		, spirituality: "Spiritual scribes write of dying to the world realizing that the physical world and its concerns are illusory at best. For you, the Death card is a reminder to focus on what really matters. Alternatively, the card can suggest a need to contact or honor your ancestors."
		, personalGrowth: "Grasping the short, fleeting nature of life is one of life's hardest and most sobering lessons. Acknowledging your own impermanence can help you live your life more fully."
		, fortuneTelling: "A relationship or illness ends suddenly. Limit travel and risk-taking. General gloom and doom."
		},
		
		{ name: "Temperance"
		, relationships: "Set superficial relationships aside. Pursue trust and deep intimacy the subtle blending of two people into one. Bring people together. Commit to introductions, parties, or gatherings. Seek out groups."
		, work: "Many hands make work easier. Call meetings. Get input from every level at every step. If everyone has a hand in defining an effort, then everyone will feel ownership and investment. Moderate your tendency toward all-or-nothing work habits." 
		, spirituality: "Some spiritual advisors recommend extreme practices, from fasting to abstinence, as a means of boosting spiritual awareness. Consider the potential value of moderation in all things. You can value what is right here, right now, without craving more or surpassing healthy limits."
		, personalGrowth: "Young people want to toss out tradition and forge ahead. Older people are more conservative. Between these extremes lies a healthier middle ground. Define the polarities and then ask, What lies between?"
		, fortuneTelling: "Someone's using drugs or alcohol to excess. It's time to get back on that diet."
		},
		
		{ name: "The Devil"
		, relationships: "Avoid the temptation to blame everything on everyone else; own your own contribution to the relationship's success or failure. Doing what feels good is not always the best strategy. Take care that sexual attraction plays a healthy role; resist the tendency to be dominated by cravings."
		, work: "The bottom line is important, but not all-important. Do not allow material concerns to obscure human issues. There's nothing wrong with enjoying or being compensated for good workÑbut keep the money in perspective. Know when to say, Enough's enough." 
		, spirituality: "Many traditions position the body as bad or evil, something unclean. In your own spiritual practice, consider the wisdom of relishing the body and its spectrum of sensations. You can honor the pleasures of the body without being enslaved by them."
		, personalGrowth: "Be honest: what habit or attitude holds you back most? You might find that the qualities you most detest in others are, in fact, reflections of your darkest self. Rather than be chained to old attitudes or habits, embrace your shortcomings and strive to make more conscious choices."
		, fortuneTelling: "Adultery and unfaithfulness. A string of extremely bad luck is coming your way. Beware evil influences and wolves in sheep's clothing."
		},
		
		{ name: "The Tower"
		, relationships: "Extinguish old flames before they have an opportunity to dampen promising new relationships. Despite the pain involved, a clean break is healthier than a lingering, drawn-out departure. Break down the walls and communicate honestly about what's really happening."
		, work: "Sacrifice some sacred cows. Harsh criticism from above can clear ground for a new breakthrough. Something is blocking progress; identify it and boldly sweep it aside. Document everything; should the climate suddenly change, you want your ducks in a row." 
		, spirituality: "Loss clears away the debris of the past, opening up new ground for new growth. As your heart opens, let old scar tissue fall away. Rather than live in fear of sudden loss, recognize that none of us owns anything. Practice detachment."
		, personalGrowth: "Identify what holds you back and attack it. Embrace bold change. Criticism may come; if so, search each barbed word for a kernel of much-needed truth. Some of life's greatest lessons are tough ones! With time, a bruised ego can become fertile ground for personal growth and maturity."
		, fortuneTelling: "Impending disaster. Cancel plans and reverse decisions. Someone wants to take you down a notch or two. Don't hold back; say what you really mean."
		},
		
		{ name: "The Star"
		, relationships: "Give freely of yourself and expect the best. Don't hold back genuine emotions; express them without shame. Consider exploring spiritual goals together. Astrology can offer important insights into compatibility. Let your honesty and openness encourage others to reveal their deepest thoughts."
		, work: "Surround yourself with visual reminders of your goal because these can serve as guiding lights when you need a way to put the situation into perspective. Expect the best of yourself and your co-workers. You'll know when the time is right to take action; have confidence in your own judgment." 
		, spirituality: "Prayer and quiet time communicate your openness to guidance from above. Don't hesitate to share your spiritual side with those around you. Seek out oracles. Allow the power of spirit to flow through you; let your spirituality color all aspects of your life."
		, personalGrowth: "An optimist sees what is ... and what can be. Open yourself to possibility. Numbers never tell the whole story. Shed your ego; be yourself, no matter what others think. The only truly unique thing you have to share is the person you really are. Unmask!"
		, fortuneTelling: "Get an astrology chart drawn up. Someone is a little too starstruck. What's happening now has long been fore-ordained."
		},
		
		{ name: "The Moon"
		, relationships: "Moonlight becomes you, so don't be afraid to indulge in a little romantic lunacy. Navigating your way to a fulfilling relationship involves risks. Some people will say you're crazy. Pay attention to your instincts, surround yourself with loyal guides, and make your move."
		, work: "Avoid linear/logical approaches and go with your gut. Brainstorm. Put the rules aside and use your imagination. What would happen if restrictions were removed? What might happen? What could happen? A little lunacy can be a good thing; blow off steam, change your habits, and try working in a different light." 
		, spirituality: "How does your personal spiritual path incorporate the Divine Feminine? What qualities would a divine mother offer? Which aspects of your personal spirituality would benefit from a feminine touch? How might contact with the divine feminine benefit you today? How might you honor or invite that energy?"
		, personalGrowth: "Faced with an uncertain future, you might feel led to abandon your search for self and crawl back into your shell. You can move forward without tossing caution to the wind. Uncertainty can be the mother of great creativity. Listen your instincts, clarify your path, and keep going."
		, fortuneTelling: "Watch for problems at the end of the month. Someone you know needs to howl at the moon more often. Someone is about to change his or her mind about an important decision."
		},
		
		{ name: "The Sun"
		, relationships: "You're turning heads without realizing it. Attention is coming your way and you deserve it! The admiration of others is a warm glow, so bask in it while you can. As all things begin to revolve around you, take care you don't get blinded or burned by your own brilliance."
		, work: "With the proper strategy, you're all set to be the golden boy (or girl). Approval and praise are the order of the day. Accept all this admiration with humbleness; give credit where credit's due. Meanwhile, make hay while the sun shines. Remember: after noon, the rest of the day is a sunset!" 
		, spirituality: "As your meditative and spiritual practices hone your sensitivities, you begin to feel your connectedness to the energies around you. Branch out. Spread warmth, love, and joy through your attitudes and actions. Today, embody the universal light."
		, personalGrowth: "Learn to win gracefully. Accept compliments with a humble heart. You can acknowledge and celebrate your own achievements without falling prey to greediness. Be who you are. You've earned this moment, but don't let pride in your progress hinder further growth!"
		, fortuneTelling: "Everything's coming up roses (or sunflowers, whatever the case may be). Whatever's on your mind, go for it because you can't lose today."
		},
		
		{ name: "Judgement"
		, relationships: "Freshen your relationship by taking advantage of opportunities to reinvent yourself and each other. Swap roles. Seek out entertainment you would normally avoid. Shatter habits and breath new life into your partnerships. What you learn in the process could be a wake-up call for you both."
		, work: "If something or someone is holding you back, it's time for a Come to Jesus Meeting -- a time to air dirty laundry, read someone the riot act, or say out loud what, to this point, has only been said in private. Identify the problem and eliminate it before the decay spreads to other efforts. If things are going well, use this as an opportunity to define why, so you can replicate your success elsewhere." 
		, spirituality: "With a shock, we realize the impermanent nature of this world. Use this sudden insight to your advantage. Answer the trumpet call and reinvent yourself by refusing to cling to distractions. Set aside your stumbling blocks and embrace transformation."
		, personalGrowth: "The assessments of others cannot impact your true value. The only standard you must meet is being the very best version of yourself you can be. Identify your next steps ... and take them. Don't do this for others; do it for you."
		, fortuneTelling: "An old issue you thought was over will come up again today. Get ready for huge changes: break-ups, sudden calls from old friends, and unexpected setbacks. God's trying to get your attention."
		},
		
		{ name: "The World"
		, relationships: "With mutual trust and effort, very different people can come together to create a reality greater than the sum of its parts. Once you have a taste of what can be, settling for less will be difficult. Keep in mind, though, that a dream of perfection can foster dissatisfaction with an otherwise perfectly good relationship."
		, work: "Synergy! It's possible for everyone involved to work together in harmony to create something better than any one person could produce on his or her own. Encourage people to share ideas. Allow others to share in the investment and the glory. Unite and meet your goals." 
		, spirituality: "Enlightenment is a goal; reaching it is bliss. Rather than beat yourself up for falling short, celebrate your progress. Meantime, keep in mind the lesson of the Tarot: Even as we reach one level of enlightenment, we become a fool again."
		, personalGrowth: "For most challenges, both intuitive and logical approaches exist. Most of us favor one over the other, but the secret to true mastery involves learning to wield both with perfect facility. Identify your least favorite approach, and then speed your growth by giving it special attention."
		, fortuneTelling: "Winning the lottery. Getting your heart's desire. Having everything you ever imagined having."
		},
		
		{ name: "Ace of Wands"
		, relationships: "This could be the start of something big. It's time to evaluate what you really want; once you do, you can decide whether or not this opportunity can take you there. Be careful: overwhelming attraction can distort good judgment."
		, work: "The only way to stop moving in circles is to define clear criteria for success. What's the goal? What do you need in order to achieve it? What steps must be taken to get from A to B? This card heralds the need for absolute clarity. Anything less breeds confusion." 
		, spirituality: "Where does your spiritual path lead? Walking a path without direction amounts to wandering in the wilderness: you may have some amazing experiences, but there's no easy way to measure progress. What signs of evolution should you see as you grow?"
		, personalGrowth: "Where should you be in five years? In ten years? Rather than float like a leaf on the river, consider the value of setting standards for yourself. In addition to defining a direction, give yourself milestones to meet. Before you know it, your dreams will be realities."
		, fortuneTelling: "Someone has the hots for you. A new job offer is coming your way. Walk softly, and carry a big stick."
		},
		
		{ name: "Two of Wands"
		, relationships: "To what extent does everyone involved in your situation want the same thing? The actions people take reveal their true inclinations. To gain insight into the goals of others, study what they do. Are their actions in line with their stated goals? Are yours?"
		, work: "No one can serve two masters. Before proceeding, determine exactly how much authority you have in this matter. In addition, it's time to decide which To Do items move you closer to your personal goals...and which ones are merely consuming your limited time and energy." 
		, spirituality: "Others will have their opinions, but ultimately, you must decide what spiritual practices are right for you. Speak your mind and share your own views with courage and honesty. Answering the call of Spirit may dictate taking the road less traveled by."
		, personalGrowth: "While others become slaves to fashion and convention, you should work to express yourself. What sets you apart? What makes you unique? These are qualities worth celebrating. Rather than give in to brow-beating and peer pressure, set your own standards in all things."
		, fortuneTelling: "Beware false friends. Don't be mealy-mouthed; say what you think and do what you want to do."
		},
		
		{ name: "Three of Wands"
		, relationships: "Knowing what you want or need does you no good if you don't come up with a plan for achieving it! It's time to expand your horizons: go places you've never been, try sports you've never tried, meet people you've overlooked. As your world expands, so do your opportunities."
		, work: "Lead by doing. Forge ahead with your plans, but don't forget to show others what you're doing and why you're doing it. Be proactive, brainstorming obstacles and minting solutions before breakdowns occur. Define very clearly your criteria for success and measure progress daily." 
		, spirituality: "Rather than look for a guru or a well-worn path, take the spiritual initiative. If you could express your spirituality in any way, what form would you choose? If you could worship anywhere, where would you go? Break the mold. Remember: bearing new fruit takes time."
		, personalGrowth: "Routine is the enemy of growth. Take new roads. See new sights. Pick a new hobby. Order the menu items you don't recognize. Make a habit of blazing new trails."
		, fortuneTelling: "You'll be planning a trip soon. Be on the lookout: your ship is coming in."
		},
		
		{ name: "Four of Wands"
		, relationships: "Have you been together for ten years? Celebrate. Have you been together ten days? Celebrate. Do something to recognize the contribution of both partners. Alone? Celebrate yourself."
		, work: "Assign duties, delegate, and get out of the way. Allow others to contribute, even if their contributions aren't exactly up to your personal standards. When projects end, thank everyone involved in a meaningful way." 
		, spirituality: "It's easy to allow any ritual to become empty. Get back in touch with what your rituals were meant to teach or inspire. When you restore meaning to your spiritual practice, every prayer becomes a celebration."
		, personalGrowth: "You can amplify individual achievements by becoming part of a group. Without decreasing the importance of your own contribution, you'll achieve more...and have more to celebrate, too."
		, fortuneTelling: "Someone is watching and evaluating your work. You may get a wedding invitation soon."
		},
		
		{ name: "Five of Wands"
		, relationships: "Every relationship has its ups and downs; no two people can be together for any length of time without some friction. Without making things personal, air your grievances. Share how you feel. If you feel a confrontation coming on, ask yourself what triggers it and why."
		, work: "If your workplace lacks harmony, getting things done requires far more time and effort. Create an atmosphere where people feel free to share what they really think. Avoid the blame game; talk in terms of what should happen...and what happens when the system breaks down." 
		, spirituality: "It's easy to feel spiritually connected when meditating in a tranquil garden. But how can you maintain your balance when surrounded by emotionally-charged chaos? Remember: you are not your emotions. Withdraw. Breathe. Save anger for those few transgressions worthy of such a powerful emotion."
		, personalGrowth: "What makes you angry? How do you respond when you loose your cool? Going berserk isn't the answer. Swallowing your feelings won't work either. Find constructive, level-headed ways to say what you need to say before you reach the boiling point."
		, fortuneTelling: "Prepare for a fight with your best friend. Remember: once you let words loose, you can't take them back."
		},
		
		{ name: "Six of Wands"
		, relationships: "How often do you praise your friend or partner? You may be underestimating how effective a few words of sincere affirmation can be. Recognition doesn't have to be extravagant; often, all someone needs is a quiet expression of your appreciation."
		, work: "In the rush to get work done, your personal contributions may be celebrated or overlooked. Recognized or not, your skills have value. If you get a moment in the sun, bask in it. If not, don't allow yourself to be embittered when others get the recognition you feel you deserved." 
		, spirituality: "Offer service quietly, and accept recognition with the same modest spirit. You aren't working for the recognition, but there's nothing wrong with allowing others to express the joy they take in the labor you provide."
		, personalGrowth: "Ultimately, the opinions of others won't matter; you must, in the end, please yourself. What standards have you set? To what extent are you meeting them? Recognition is sweet...but meeting or exceeding your own personal criteria for success is even sweeter!"
		, fortuneTelling: "Someone is planning a party for you, but not everyone feels so good about your recent success. Watch out for envious friends."
		},
		
		{ name: "Seven of Wands"
		, relationships: "In a healthy relationship, each person feels secure. Partners and friends who constantly abuse others or tear people down must be confronted. Being in a relationship does not mean squelching your own unique insights; stand up for what you feel is right."
		, work: "The workplace tends to reward aggression. Defend yourself and your own work, making sure you have hard data to back up your claims. If you must become involved in unpleasantness, be sure those you investigate have no valid reason to feel attacked." 
		, spirituality: "Especially when you feel attacked, your spirituality should guide you. Don't be defensive; as a spiritual person, you know it's not about you. As dramas unfold, stand up for your beliefs, but avoid absorbing and reflecting the poisonous emotions of others."
		, personalGrowth: "Standing up for yourself is healthy and reasonable. Turning the other cheek doesn't mean making yourself into a doormat. It's okay to insist on respect. Apply this principle to your interactions with others, too; it's easier to get fair treatment when you're known for treating others fairly."
		, fortuneTelling: "Don't be surprised by a personal attack. Prepare to defend yourself or someone you love."
		},
		
		{ name: "Eight of Wands"
		, relationships: "People and situations are always changing; the key is deciding whether you want to grow together...or grow apart. What worked once might not work later; on the other hand, those you dismissed before might now be perfect mates. Embrace change, and you'll be surprised at how quickly good things happen."
		, work: "Yesterday's solutions aren't going to solve today's problems; in minutes, innovations become old news. Shake things up. Tap into a new stream of information. Bring in an expert from outside. Juggle your hours. Your adaptability will atrophy if you don't exercise it with new challenges." 
		, spirituality: "Become aware of patterns of change: the seasons, the phases of the moon, the steady progression of the Church calendar. Time is passing faster than you realize, and using your faith as a means to honor and appreciate that transition will help you better appreciate the time you have."
		, personalGrowth: "When things change, do you tend to procrastinate, or respond right away? Handling something nowÑtaking action as soon as possibleÑcan keep a small issue from becoming a large stumbling block. Resolve to handle challenges as soon as you possibly can."
		, fortuneTelling: "Watch for a surprising letter in the mail. Your whole world is about to be turned on its ear."
		},
		
		{ name: "Nine of Wands"
		, relationships: "Sometimes relationships of any kind are hard work. You and your partner must be able to count on each other when the going gets rough. If you've been unreliable, it's time to change your ways. If your partner doesn't seem to be in things for the long haul, you should plan accordingly."
		, work: "When there's hard work to be done, you learn who your real friends are. Call on others for support, especially if you feel overwhelmed. Take note of who responds. Recognize, too, when you've had enough; doggedly pressing on when you're broken benefits no one." 
		, spirituality: "Meaningful progress takes time. You'll be tempted to give up, to abandon your practices, to shrug off your faith. Stick with it. Your transformation is slow, but steady. Encourage yourself by looking back and seeing how far you've come."
		, personalGrowth: "Know when to be a hero. Coached by phrases like When the going gets tough, the tough get going, you'll be tempted to crawl ahead even when you're down. Some causes deserve your total dedication; some don't. Knowing the difference is an important component of maturity."
		, fortuneTelling: "Don't relax yet; there's more to come. The test you're facing now is happening for one reason: to show you who your real friends are."
		},
		
		{ name: "Ten of Wands"
		, relationships: "Some relationships become a burden. When this happens, have the presence of mind to put them aside. Relationships involve more than one person. When you've done all you can do to make a relationship a success, there's no shame in withdrawing from a bad situation."
		, work: "Over-extending yourself on a regular basis is not a sign of strength: it's evidence of poor judgment. You cannot perform at your best when exhausted. There are too many irons in the fire. Review your values and make tough choices, letting go of work that isn't critical." 
		, spirituality: "When we are exhausted, we tend to feel disconnected from Spirit. Restore yourself (and your spirit) by scheduling regular quiet time. Guard this appointment with contemplative silence as jealously as you would an appointment with a life-saving doctor. Disconnect and reconnect."
		, personalGrowth: "Knowing your own limits is a sign of maturity. Don't take on more than you can reliably handle. It's better to be respected for saying No than hated for saying Yes and failing to deliver. When unreasonable demands are made, point them out and sidestep them."
		, fortuneTelling: "You're worn out! Back off, take a time out, and let someone else handle things for a while."
		},
		
		{ name: "Page of Wands"
		, relationships: "Be eager to try new things, especially activities that fall outside your comfort zone. Don't hide your emotions: let eagerness show. Be vulnerable; if you don't know what to do, admit it. Learn from a more experienced lover, or take someone under your wing."
		, work: "Be honest about your ability or your lack of ability. When someone uses a term you don't know, ask for a definition. Watch for opportunities to be a student and to learn new programs and processes. Your ignorance can be a tool, helping you see what others will dismiss." 
		, spirituality: "Pledge to fully experience (or recapture) the thrill of exploring new spiritual horizons. Read a book for beginnersÑeven if you've been involved in your practice for decades. Consider teaching others; beginners should find a trustworthy teacher."
		, personalGrowth: "Make something happen! List your goals, determine what needs to be done, pick a target, and take those first steps. Learning new tricks keep the mind and body young. A mature soul sets ego aside and embraces the unknown with eagerness."
		, fortuneTelling: "This card represents a young man or woman with a fiery, enthusiastic demeanor, likely born a Cancer, Leo, or Virgo, who wants to start a new relationship with you."
		},
		
		{ name: "Knight of Wands"
		, relationships: "Ask someone out. Set up a romantic evening and make it happen. Speak your heart, and challenge others to do the same. Be feverishly romantic. Pull out all the stops. After making sure your motives are pure, use your charisma to bowl someone over."
		, work: "If you are not equipped to be a charismatic advocate for your ideas, find a champion and enlist his or her aid. Your focus today is more on sizzle than steak. Sell your ideas and skills as boldly as you can without distorting or exaggerating their value. Stress benefits and push for commitments." 
		, spirituality: "Without coming off as a fanatic, you can share your spiritual journey with others. Offer prayers. Mention important Truths you've learned to apply. Loan out your books. Mention your faith in a letter to a friend. Every time you share your Light, you aid in conquering Darkness."
		, personalGrowth: "Share yourself. Watch for opportunities to lend a hand, offer your skills, or lead an effort others will avoid. Prove yourself in small things, and others will be willing to follow you into larger battles."
		, fortuneTelling: "This card represents a man with a bold, passionate personality, likely born between July 12th and August 11th, who wants to sweep you off your feet."
		},
		
		{ name: "Queen of Wands"
		, relationships: "Pull together a group of friends and organize a group date. If in an argument, make a special effort to see all sides. Refrain from thinking the issue at hand is all about you. Understand the motives of everyone involved, then go for common ground."
		, work: "Progress is complicated by a lack of attention to details. Start from square one. Ask everyone involved to give a stamp of approval to the parts of a project they control. Get more people involved, and more people will be invested in the success of your project." 
		, spirituality: "A quiet mind is a sign of a focused spirit. When you're feeling distracted, your spirit is pulled in every direction; when you're focused, your energies flow naturally toward success. Take a deep breath, close your door, and invest a few minutes in calming yourself and your soul."
		, personalGrowth: "When you give someone your full and undivided attention, you give a rare and amazing gift. If you cultivate an ability to truly listen and respond, others will identify you as an intelligent, sensitive person they can trust with matters of real importance."
		, fortuneTelling: "This card represents a woman with an attractive, appealing personality, likely born between March 11th and April 20th, who wants to charm you into doing things her way."
		},
		
		{ name: "King of Wands"
		, relationships: "When it comes to your own relationships, you're in the driver's seat. What do you want? Are you getting it? If not, why not? While relationships are a two-way street, you ultimately decide whether or not you will continue to be involved. It could be time to lay down the law."
		, work: "Someone in authority needs to be calling the shots. There is a need for input from an experienced worker who has been empowered to cut through red tape and make things happen. If you're that person, step up. If you're not that person, step aside." 
		, spirituality: "Who's in control? We like to think we hold the reins of our lives, but all too often, the Universe reminds us that we are a very small cog in a very large machine. Consider today the role you play in larger plans, and make yourself available to be a means for accomplishing great things."
		, personalGrowth: "In order to achieve your goals, you must control what you can: your habits, your choices, your schedule. Without being rigid, you can put a structure in place that takes the craziness out of the most hectic days. That foundation will help you maintain the calmness of a King, even when the castle walls are falling down around you."
		, fortuneTelling: "This card represents an older man with a commanding, charismatic personality, likely born between November 13th and December 12th, who prefers to give directions and have them followed."
		},
		
		{ name: "King of Wands"
		, relationships: "When it comes to your own relationships, you're in the driver's seat. What do you want? Are you getting it? If not, why not? While relationships are a two-way street, you ultimately decide whether or not you will continue to be involved. It could be time to lay down the law."
		, work: "Someone in authority needs to be calling the shots. There is a need for input from an experienced worker who has been empowered to cut through red tape and make things happen. If you're that person, step up. If you're not that person, step aside." 
		, spirituality: "Who's in control? We like to think we hold the reins of our lives, but all too often, the Universe reminds us that we are a very small cog in a very large machine. Consider today the role you play in larger plans, and make yourself available to be a means for accomplishing great things."
		, personalGrowth: "In order to achieve your goals, you must control what you can: your habits, your choices, your schedule. Without being rigid, you can put a structure in place that takes the craziness out of the most hectic days. That foundation will help you maintain the calmness of a King, even when the castle walls are falling down around you."
		, fortuneTelling: "This card represents an older man with a commanding, charismatic personality, likely born between November 13th and December 12th, who prefers to give directions and have them followed."
		},
		
		{ name: "Ace of Cups"
		, relationships: "This is an opportunity to set logic aside and allow actions to be guided by feelings alone. Irrational? Perhaps. But in certain matters, logic does not apply. Be romantic. Be spiritual. This moment is a chance to see romance as an expression of spirituality, and vice-versa."
		, work: "How fulfilling is your work? If you're going through the motions, this card challenges you to get back in touch with what delights you. Find a way to integrate your labor with your dreams. If you're already fulfilled, watch for an opportunity to take your satisfaction to the next level." 
		, spirituality: "On rare occasions, Heaven opens, and the Hand of God offers us the opportunity to experience unexpected spiritual highs. Pay close attention to the events around you; one is a seedÑan opportunity to be uniquely and totally immersed in the work and power of Spirit."
		, personalGrowth: "How comfortable are you with expressions of emotion? Of faith? This card challenges you to be more open with both. A centered person freely shares what he or she feels, and a truly spiritual person can share his or her faith in natural, non-aggressive ways. Give both a try."
		, fortuneTelling: "Romance is in the cards! A new relationship or marriage is just around the corner. Prayers are answered."
		},
		
		{ name: "Two of Cups"
		, relationships: "In a healthy relationship, everyone involved feels safe enough to reveal how he or she really feels. Feeling attraction? Say so. Not invested? Say so. Reflected love is a balm for the soul, but hidden or repressed emotions will poison a relationship."
		, work: "Meet your goals more easily by recruiting others who see things your way. If what you're doing now doesn't thrill you, admit it. Do what delights you, or engineer a change of heart that allows you to enjoy what you're doing now." 
		, spirituality: "The idea that your spiritual practice must satisfy anyone other than yourself is an illusion. Do what you feel drawn to do. Find support and solace with like-minded individuals. Forgive spiritual abuse and rediscover the power of unity."
		, personalGrowth: "Rather than merely reflect the desires of others, identify what you want and be yourself. You can appreciate others without sacrificing your individuality. Honesty is power; be brave enough to admit what you really feel."
		, fortuneTelling: "Someone has a secret crush on you. Relationships should be mutual; get rid of a leech."
		},
		
		{ name: "Three of Cups"
		, relationships: "Be open to unconventional relationships that defy your dearly-held expectations. Saying what you feel may not be enough; sometimes, actions speak louder than words. Think beyond sex. What service can you render as a way of showing your love?"
		, work: "For insight into what you really love to do, monitor how you spend your time. We make time for what delights us. If your schedule is dominated by things you don't love doing, it's time to realign your priorities. Ask others how they manage their time." 
		, spirituality: "Especially when walking a solitary path, it's easy to neglect the rituals that are an integral part of living with Spirit. Become a part of a like-minded group. Celebrate the season. Seek outward, shared expressions of your inner faith."
		, personalGrowth: "To have more friends, be one. Look for opportunities to serve others or aid them in their pursuits. Shared success is sweeter, and you'll find your own success is multiplied when you're helping others achieve their goals, too."
		, fortuneTelling: "Unconventional romance is coming your way: a gay or lesbian relationship, or a love affair with someone you've always dismissed."
		},
		
		{ name: "Four of Cups"
		, relationships: "Without adequate attention, even the best relationships grow stale over time. Reignite the spark. Rediscover what brought you together. If on your own and unhappy about it, don't play the victim: get back in the game."
		, work: "Bored? It's time to ask for new challenges. When work fails to fulfill us, it quickly becomes drudgery. There's always plenty to do. You can shatter inertia by just getting started. Take that first step; others will follow." 
		, spirituality: "Unless you tap into a fresh reservoir, your spiritual well will eventually run dry. Replenish your Spirit with a dip into new experiences: meditation, drumming, fasting. Open yourself to new possibilities."
		, personalGrowth: "Boredom and ingratitude blind us to new opportunities. Don't fall into this trap! Alter your routine. Try new foods. Dress in different colors. Break the mold, and you'll never stop growing."
		, fortuneTelling: "A lover is getting restless. Find out what he or she needs, or new opportunities may lure your partner away."
		},
		
		{ name: "Five of Cups"
		, relationships: "Maintaining an affair with memories of past lovers will prevent you from appreciating lovers in the here and now. Burned by past friends or partners? Thank them for the lesson learned and offer your heart to those who deserve your affection."
		, work: "You can't look back. The good old days have given way to the here and now, and it's time to adjust your efforts accordingly. If you made mistakes, admit them, pick up the pieces, and return to work with renewed effort. Don't focus on losses; define new goals." 
		, spirituality: "Your faith, at first, may seem like cold comfort in times of loss. But if you accept that all things unfold according to a larger pattern, you must look for the role this loss plays in the grand scheme of things. Three cups remain upright. What do you still have to be thankful for?"
		, personalGrowth: "Perspective is everything. Each of us is predisposed to focus on the positive or the negative; if you tend toward the latter, condition yourself to be more optimistic by reviewing how apparently dark events of the past gave rise to greater strength or insight."
		, fortuneTelling: "A breakup looms. Don't cry over spilt milk. Take your lumps and get back in the saddle."
		},
		
		{ name: "Six of Cups"
		, relationships: "We like to say relationships involve give and take; this card invites you to focus on giving more than receiving. Watch for opportunities to take on chores that neither you nor your friends (or partners) enjoy. Surprise a loved one with an unexpected, unmerited gift."
		, work: "Most people focus on profit; what might happen if you focused on giving instead? A gift given with strings attached deserves a skeptical response. When charitable gestures are revealed (or perceived) as bribes, don't expect good results." 
		, spirituality: "Few things energize the weary spirit like service. Volunteer. Lend a helping hand to someone in need. Give of your time, your money, and your talentsÑall three. In helping others, you help yourself."
		, personalGrowth: "When you can give something without expecting anything in return, you've reached an important milestone. Accelerate your quest for maturity; practice giving with no thought of what's in it for you."
		, fortuneTelling: "A stingy spirit is strangling your enjoyment of life. Loosen up and think of others for once, why don't you?"
		},
		
		{ name: "Seven of Cups"
		, relationships: "Comparing your friendships and relationships to unrealistic, Hollywood-produced fantasies is a sure-fire formula for disappointment. Rather than imagine what things ought to be, face how things are...and then take the steps necessary to make your relationships more rewarding."
		, work: "Plan for contingencies. At the same time, don't allow what might be to distract you from what is. Unless it's your job to build castles in the sky, be sure to invest more effort in hard work than sweet dreams." 
		, spirituality: "Use meditation and prayer to build a clear vision of your spiritual goals, and call on this for inspiration in times of need. Pay attention to dreams; they have important messages for you."
		, personalGrowth: "Your imagination is a powerful tool, capable of shaping your experience and your world. Focus your thoughts. See life as it should be, and then take personal responsibility for making your dreams come true. Always link imagination with action!"
		, fortuneTelling: "You're being fed a line. Rather than be dazzled by fancy words and promises, demand something real."
		},
		
		{ name: "Eight of Cups"
		, relationships: "If a relationship fails to supply what you need, consider looking elsewhere. Occasionally, a little time apart can restore perspective and reveal true character. Don't be afraid to be alone; it's okay to be your own person."
		, work: "Threatening to quit is never productive. Dedicate yourself wholeheartedly to a task...or move on without fanfare. A persistent feeling that something's missing should tell you something. Know when to say No! to overbearing bosses." 
		, spirituality: "Consider the value a retreat might offer. Spend time alone in nature. By stepping outside of your daily routine, you automatically heighten your awareness. When you return to your every day world, you'll see it with fresh eyes."
		, personalGrowth: "As children, we ridicule quitters. As adults, we need to realize the time does come to throw in the towel. In your own life, what habits or attitudes need to be abandoned, cold turkey? Don't think of it as quitting; see quitting as a step toward a new beginning."
		, fortuneTelling: "Someone's stepping out on you, now or in the near future. Maybe it's time to quit talking about the problem and just move on."
		},
		
		{ name: "Nine of Cups"
		, relationships: "Appreciate what you have. When things are good, it's easy to take someone for granted. Today, emphasize the ways your friendships and relationships are working for you. What's working? What's comforting? What do you have to smile about?"
		, work: "Who should your work satisfy? What are the criteria used to evaluate your work's completeness? Knowing the answer to these questions is the key to success. Resist the urge to revise and revise; know when to be happy with your best effort." 
		, spirituality: "Finding your centerÑa still point, a place of peace insulated from outer disturbancesÑwill help you maintain an enlightened perspective. When pressured or rushed, remember to breathe. Pause, retreat, withdraw. Allow your spiritual discipline to yield practical results."
		, personalGrowth: "A life of constant luxury breeds dullness. Learn when to push back; you can be satisfied with less than you think. With a little restraint in place, you'll be better equipped to enjoy real luxury when the time for indulgence comes."
		, fortuneTelling: "Whatever you want, you'll get it."
		},
		
		{ name: "Ten of Cups"
		, relationships: "Having it all may be a matter of perspective. Rather than pursue a fantasy romance, decide what you really want and need. Your relationship doesn't require anyone else's stamp of approval. Do what delights you, and be grateful for what you have."
		, work: "Fulfilling work is rare indeed. Be careful how you define success; don't get so caught up in reaching the next goal that you forget to celebrate your achievements so far. Feeling overwhelmed? Take time out to count your blessings and realign your work with what matters most." 
		, spirituality: "While we may glimpse nirvana in meditation, maintaining a constant state of bliss may prove to be an unrealistic goal. Delight in the small steps you take along the Path. Don't be overly concerned with spiritual arrival; enjoy the journey."
		, personalGrowth: "Gratitude enhances success. While celebrating your achievements, remember to give credit to those who helped you achieve it. Overwhelm others with sincere recognition, and you'll find yourself surrounded by an army of eager supporters."
		, fortuneTelling: "Marriage and family are in the cards. Expect a friendship to blossom into a romance."
		},
		
		{ name: "Page of Cups"
		, relationships: "Fools rush in. Don't mistake the heady rush of infatuation for the enduring stability of true love. Why rush? You've got plenty of time to decide what works (and doesn't work) for you.  Before making commitments, learn the ropes."
		, work: "Be indulgent of beginners and channel their enthusiasm into useful projects. Be wary of those who overstate their skills. Keep your own skills sharp by pursuing every opportunity to be a student. Generate change by embodying enthusiasm." 
		, spirituality: "Embrace a new faith. In addition to pursuing what feels right, plumb the depths. Invest time pursuing the roots of your spiritual practice. Become well-grounded in what you believe, so you'll be well-prepared to explain your practice to others."
		, personalGrowth: "A gung-ho spirit goes a long way; be sure to pair it with due diligence. Pair your enthusiasm with practical preparation, and you'll find yourself maturing at a surprising rate."
		, fortuneTelling: "This card represents a young man or woman with a watery, dreamy demeanor, likely born a Libra, Scorpio, or Sagittarius, who wants to start a new relationship with you."
		},
		
		{ name: "Knight of Cups"
		, relationships: "A desire for a Hollywood-style romance may blunt your ability to appreciate the value of everyday, garden-variety love. There's a fine line between passion and obsession; if your relationship leaves you upset and exhausted, consider other options."
		, work: "Beware initiatives designed to do little more than stir everyone's emotions. Keep your own feelings in check, and don't hesitate to ask for details. Decisions may require more than the facts. What do your wisest advisors feel about your options?" 
		, spirituality: "Spirituality may incorporate extremes (speaking in tongues, intense rituals), but more modest spiritual experiences are also valid. Strive to find Spirit in everyday actions. When you do, the smallest gestures take on the aura of ministry."
		, personalGrowth: "Temper your inclination to be driven to extremes. Love can be passionate without overwhelming you. Spirituality can be deep without becoming bizarre. In all things, seek the balance of the middle ground."
		, fortuneTelling: "This card represents a man with an emotional, sensitive personality, likely born between October 13th and November 11th, who wants you to rally around his latest passionate cause."
		},
		
		{ name: "Queen of Cups"
		, relationships: "No amount of hand-wringing or self-pity will make things better. Stop second-guessing yourself! Strong feelings should tell you something, not render you helpless. Reflect on what you really need, then take action; otherwise, you'll get bogged down."
		, work: "Strong emotions in the workplace can distract people from their everyday goals. (Many may welcome such distraction!) Rather than get caught up in all the agony and ecstasy, keep an even keel. Don't fret; trust your intuition and take appropriate action." 
		, spirituality: "In truth, very few of us were meant for a life of constant contemplation. Most of us have to live in the real world! If you possess psychic abilities, be sure their deployment is regulated by your highest ethical standards."
		, personalGrowth: "Beating yourself up accomplishes nothing. Embracing your true feelings is one thing; wallowing in them is another. Pause to feel...and then move on, informed and enabled by your insights."
		, fortuneTelling: "This card represents a woman with an emotional, deeply spiritual nature, likely born between June 11th and July 11th, who uses emotional and spiritual appeals to sway others to her point of view."
		},
		
		{ name: "King of Cups"
		, relationships: "Without adopting a poker face, some situations call for a little restraint. Calm down. Consider the other side's arguments. Walk in the shoes of your partner or friend. Give strong emotions time to subside before taking action you may regret later."
		, work: "When everyone is running in circles and screaming, someone has to step forward, exercise restraint, and draw attention back to the work that remains. Refuse to be drawn into rumor-mongering and petty disagreements. Remain neutral, fair, and focused." 
		, spirituality: "A deeper sense of Spirit should move us to greater service. Let wisdom guide you to a ministry that makes sense in terms of your life and your world. Consider taking on the role of a counselor or mentor. Use your experiences to help others mature."
		, personalGrowth: "The time has come to assume a leadership role, using your experiences to guide others. Find a way to give back some of what you've been given. You have more wisdom than you know; draw on newfound maturity to come to the aid of a cause greater than yourself."
		, fortuneTelling: "This card represents an older man with a gentle, sensitive presence, likely born between February 9th and March 10th, who is known for his fairness and tolerance."
		},
		
		{ name: "Ace of Swords"
		, relationships: "Set your emotions aside for the moment and look at your relationship from an objective point of view. Would a judge or jury say this relationship is performing as it should? You're facing a difficult decision; make it with your head, not your heart."
		, work: "Cut through emotionalism and get to the facts. In this situation, the devil's in the details. What happened and when? Slay some sacred cows, stop the blame game, and get down to brass tacks. What are the objectives? Where are you in relationship to your goals?" 
		, spirituality: "Your relationship with Spirit should inform all your decisions. Here's an opportunity to apply what you've learned in your inner life to decisions that impact your outer life. If you were to make this decision for someone else, what verdict would you render?"
		, personalGrowth: "At some point, we must go from seeking advice to making our own decisions. Gather information, draw on the experience of mentors, and get the facts...but be prepared, as a mature individual, to make decisions and own the consequences."
		, fortuneTelling: "The time to make a choice is now. Stop wavering and do what you know is best."
		},
		
		{ name: "Two of Swords"
		, relationships: "You may be in denial; if so, you're only fooling yourself. You serve your own best interests by seeing things as they really are. Stop avoiding unpleasant confrontations. An honest disagreement is better than a false peace."
		, work: "Consider all the facts before making your decision. Once you've made your decision, be prepared to defend it with well-reasoned arguments. If others continue to reject your counsel, be aware that you may have to let go, sit back, and let time prove that you were right, after all." 
		, spirituality: "Spiritual maturity demands we see ourselves as we really are and love ourselves in spite of our shortcomings. Rather than debate whether or not you're good enough, be thankful for the progress you've made thus far. Avoid beating yourself up with high-minded standards of perfection."
		, personalGrowth: "What are you avoiding? Growth awaits the souls brave enough to cast aside blindfolds and see the situation for what it really is. Get past this personal stalemate by taking time to think clearly about what you want and where you're going."
		, fortuneTelling: "Sometimes, the only way to win is to refuse to fight. You're stuck for now; let time pass before taking action."
		},
		
		{ name: "Three of Swords"
		, relationships: "If things aren't turning out as planned, it's time to adjust your expectations...or look elsewhere. Don't allow rejection to deliver a fatal blow; you've lots to offer those who can appreciate it. It's okay to mourn the loss of a friend or lover but don't let mourning become a way of avoiding further growth and new experiences."
		, work: "You may find yourself playing the role of the lone wolf; for now, that's okay. Things don't always turn out as planned. Rather than pull out your hair, retrace your steps and identify objectively what went wrong. This information will come in handy in the future." 
		, spirituality: "In the midst of heartbreak, it's not always possible to sit back and ask, What lesson does Spirit have for me in this situation? Give yourself time to move past emotional responses; once you do, you can think in terms of what an event might teach you."
		, personalGrowth: "If at first you don't succeed, try again. It's an old clichŽ, but an important mantra for anyone determined to make the most of what he or she has been given. If recent efforts have fallen short, you must make a choice: despair...or embody the spirit of determination."
		, fortuneTelling: "Breakups and infidelity abound. What hurts now, though, will turn out to be good for you later on."
		},
		
		{ name: "Four of Swords"
		, relationships: "Taking a break from each other might restore some perspective. Rather than over-analyze everything, clear your mind and take things at face value for once. If you can't achieve peace together, there's no shame in saying you need a rest."
		, work: "Running at top speed all the time wears down the most capable individuals. Insist on time to recharge your creative batteries. On even the most hectic days, steal ten minutes to be still and disconnect. See time off as an investment in maintaining your sharp edge." 
		, spirituality: "Withdrawal from the world can help you achieve remarkable perspective. Schedule time for quiet contemplation. Rather than ponder solutions, just breatheÑand let Spirit sort things out."
		, personalGrowth: "A mature person knows the value of stillness. Before taking action, set aside time to simply be. Associate calmness and focus with specific postures or breathing patterns, and you'll be able to summon a clear state of mind on demand."
		, fortuneTelling: "Don't make any decision now. Wait, and you'll be glad you did."
		},
		
		{ name: "Five of Swords"
		, relationships: "It's crazy to think that one person in a relationship deserves more pleasure or power than the other. Balance must be restored. You're not thinking clearly now, so back off and rethink your approach. Take care of yourself, but try to do so without hurting those you love most."
		, work: "Occasionally, one person's success will bring about another person's loss. When you're the successful one, don't gloat; be humble. When you suffer the loss, don't despair; pick up the pieces and move on. Don't drive yourself crazy asking Why? Breaking a rule may prove to be the key to innovation." 
		, spirituality: "Suffering is a fact of life. How does your spiritual path deal with the reality of suffering or the pain of inequality? It's easy to be spiritual when all is well. Insulate yourself from instability by thinkingÑin advance of how you'll deal with adversity when it comes your way."
		, personalGrowth: "You can't win every fight. With this truth in mind, think in terms of how you want to win...and how you want to lose. Rather than be driven by emotion, make conscious choices in both situations. Resolve to be noble in both victory and defeat."
		, fortuneTelling: "Someone is stealing from you, financially or romantically. Be wary of friends who talk behind your back."
		},
		
		{ name: "Six of Swords"
		, relationships: "Relationships involve give and take. Prepare for some compromises. Someone may have to adjust expectations in order to be happy. Look around; you may find better options elsewhere. How long since you sat down and discussed what works and what doesn't?"
		, work: "Times change, and the wise businessperson changes with them. Reinvent yourself and your approach to work. Seeking inspiration, go places you don't normally go. Find out what's on the cutting edge. Now is a good time for business trips, seminars, and training sessions." 
		, spirituality: "Attend a workshop or seminar and learn new spiritual techniques. Consider taking a trip exclusively for the purpose of enhancing your spiritual perspective. If a discipline isn't helping you, abandon it, but not without defining what worked, what didn't work, and why."
		, personalGrowth: "Reaching out to others in need will rapidly advance your growth and maturity. Don't make the mistake of thinking everyone wants what you want; ask people what they need, and find a way to supply it without strings attached. Know why you do what you do."
		, fortuneTelling: "You'll soon go on a long journey over water. Actions have unexpected consequences, so be prepared."
		},
		
		{ name: "Seven of Swords"
		, relationships: "If you could cheat and get away with it, would you? Your answer says a lot about you...and your sense of commitment. Secrets are toxic to healthy relationships. Act with integrity, and demand integrity in those closest to you. If you've wronged someone, accept the consequences."
		, work: "Embody honesty in the workplace. The smallest dishonest indulgence numbs the conscience, opening the door to larger abuses. Reign in a tendency to do as little as you can. Rather than get by, do your best, even if it won't always be appreciated." 
		, spirituality: "While you must not obsess on darkness, you must confront your own Shadow from time to time. To what extent do you live up to your own highest standards? In what situations is your dedication to Spirit challenged most? To gain strength, learn from your weaknesses."
		, personalGrowth: "You may fool others, but you cannot fool yourself. When you're alone, how do you behave? Your answer will provide meaningful insights into your true character."
		, fortuneTelling: "Don't assume people around you are worthy of your trust. Ask for an accounting of where people have been, and what they've been doing."
		},
		
		{ name: "Eight of Swords"
		, relationships: "Feeling boxed in? You have exactly as many options as you imagine you do. There is a way out, but someone is refusing to see it. A relationship should broaden horizons, not limit them. If the rules are uncomfortable, perhaps it's time to re-examine them."
		, work: "Some restrictions are necessary; others are merely tradition. Ethics demand you play by the rules; sacred cows, however, are fair game. What are the obstacles, exactly? If your limits didn't exist, how might you move forward? Thinking freely will open unexpected options." 
		, spirituality: "The free spirit cannot be contained by the physical constraints. As you learn to cultivate balance and focus, you may find that most obstacles are self-imposed and most limits are strictly imaginary. When you focus your will, blindfolds and bonds will fall away."
		, personalGrowth: "Knowing your own limits is important; respect them. Whatever the issue, you're balking for a reason. There's no harm in refusing to move forward for now, and no shame in saying, No. A mature person communicates what he or she needs with absolute confidence."
		, fortuneTelling: "Get over playing the victim. Once you realize you are your own biggest obstacle, nothing can hold you back."
		},
		
		{ name: "Nine of Swords"
		, relationships: "Comparing your current relationship to past or fantasy relationships is a formula for discontent and depression. Rather than wring your hands, say what's on your mind. Don't allow your past mistakes to smother your delight in the present."
		, work: "The blame game can gobble up unlimited hours and energy; don't play it. Review errors only with an eye toward improving future performance. Instead of dwelling on missed opportunities, define what must be done to create new ones." 
		, spirituality: "Everyone has regrets. Rather than be strangled by them, use your regrets as a means of enhancing empathy for others. Understanding that we've all made mistakes can help us remember to cut everyone a little slack. Use your pain to gain insight into the pain others feel."
		, personalGrowth: "Worry wastes energy. If something happens, it happens; the energy expended on worry won't change a thing. Do what you can do, and let the Universe handle the rest. Maturity dictates letting go of unhealthy obsessions and learning to be happy with the here and now."
		, fortuneTelling: "If you take the action you're considering now, you'll be sorry in the future."
		},
		
		{ name: "Ten of Swords"
		, relationships: "Preserving a relationship or friendship shouldn't require self-destruction. There's a strong possibility it's time to let this one go. Examine the logic you're using to justify maintaining this connection. A healthy relationship produces peace, not insanity."
		, work: "Know when to say when. Continuing to take on more work and more responsibility is not the answer here. Be honest about your limits. If they've been exceeded, ask for relief. Diverting some of the work may mean eating some crow, but beats a complete systems failure later on." 
		, spirituality: "It's hard to keep your eyes on heaven when you're face-down on the ground. When darkness overwhelms us, we may be tempted to abandon Spirit entirely. Finding just one thing to be thankful for, though, may provide you with the key to turning things around."
		, personalGrowth: "Failure is a cruel but powerful teacher. When possible, make corrections before hitting bottom. If that time has passed, the mature thing to do is accept consequences, resolve to do better, and start the process of making amends. As they say: live one day at a time."
		, fortuneTelling: "Disaster. Put off plans and do not take action until omens are better."
		},
		
		{ name: "Page of Swords"
		, relationships: "Every relationship is an opportunity to learn about others and learn about yourself. Some relationships provide a lifetime of lessons; others run short of insights in a matter of weeks. Judge mistakes with kindness and affection; you're both learning."
		, work: "Get the training you need. Ask questions. Forget the stigma of not looking capable smart and worthy superiors know who's faking it. Be up front about what you need in order to move forward with confidence. Get clarification and point out contradiction." 
		, spirituality: "Spend time with whatever Scripture governs your path. Read books. Consult oracles. Ask a guide, priest, priestess, or other minister the questions that cloud your mind. Prayers for wisdom and patience can open doors to new insights and spiritual discoveries."
		, personalGrowth: "Keep your mind young by playing the role of the perpetual student. Enroll in a course. Visit a museum. See a movie you'd normally avoid. Ask someone who enjoys an art you find annoying to explain what he or she loves about it. Do all you can to shift perspective and see the world from new and exciting angles."
		, fortuneTelling: "This card represents a young man or woman with an airy, intellectual demeanor, likely born a Capricorn, Aquarius, or Pisces, who wants to learn something new from you or have a discussion with you."
		},
		
		{ name: "Knight of Swords"
		, relationships: "Words can hurt. In addition to knowing why you're saying what you're saying, think about how you're saying it. Don't read too much into the statements of others. If you aren't sure what someone means, ask for clarification. Resolve to be a better listener."
		, work: "Ask good questions. Before rendering judgment, be sure you have all the facts. Refrain from cutting others short; even if you've heard it all before, give others a chance to share their ideas. Resist the urge to correct; open the door to free-wheeling creativity before you become an editor." 
		, spirituality: "Consider the words that have been used to shape your understanding of yourself (and Spirit) over the years. If these terms have been poisoned by dogmatism and abusive spirituality, strive to find your own words for the higher powers and deeper realms you hope to explore."
		, personalGrowth: "Rather than be defensive, relax. Give criticism a chance. A mature person acknowledges his or her capacity for improvement, and isn't intimidated by the observations of others. Take what will help you; discard the rest."
		, fortuneTelling: "A blunder leads someone to say something he or she regrets. If this was you, be prepared to apologize and move on."
		},
		
		{ name: "Queen of Swords"
		, relationships: "You can't change other people, but you can provide gentle prompts designed to help them be the best they can be. Know the difference in supporting and nagging. Know, too, that requested advice is always prized more highly than unsolicited observations. Until you're invited to speak, hold your tongue."
		, work: "Harsh criticism crushes morale, but finely-tuned words of praise can enhance performance and elicit remarkable productivity. Identify what must be changed, but express that change in terms of growth and benefit. Instead of problems, see challenges. Instead of deficits, see opportunities." 
		, spirituality: "Practice the delivery of praise. When you receive blessings, voice your thanks. When others work for you, show your bright spirit by acknowledging their contributions. Whatever the situation, strive to be the soul of encouragement."
		, personalGrowth: "Your insights, opinions, and attitudes influence others more than you know. Express your thoughts with care, making sure you phrase your observations in ways that encourage growth. If you need encouragement, encourage others to give it."
		, fortuneTelling: "This card represents a woman with an artistic, intellectual nature, likely born between September 12th and October 12th, who uses clever, positive communication to sway others to her point of view."
		},
		
		{ name: "King of Swords"
		, relationships: "Say what you mean, and mean what you say. Your friends and partners need straightforward feedback; give it to them. Avoid trying to control what someone says or how he or she says it. When an argument's over, let it be over. Do what you said you would do."
		, work: "Don't waffle. Make commitments and stick to them. If you say you'll meet a deadline, do so. If called on to evaluate the work of others, don't sugar-coat the results; render a fair verdict. Strive to be known for your honesty; avoid brown-nosing and voicing empty praise." 
		, spirituality: "Listen for the still, small voice, and, when you've heard it, act on its advice with total confidence. DonÕt hesitate to confirm your verdict with a wise counselor whose opinions you respect. Be sure to let your spirituality temper your conversation, and match your words with deeds."
		, personalGrowth: "Strive to be consistent. Let your word be your bond. One measure of maturity is the ratio of words spoken vs. words listened to. Grow (and gain respect) by learning to hear what others are saying. Reserve judgment until after all the evidence has been heard."
		, fortuneTelling: "This card represents an older man with an insightful, deliberate spirit, likely born between May 11th and June 10th, who is known for his integrity and sharp decision-making ability."
		},
		
		{ name: "Ace of Coins"
		, relationships: "While money and sex can be used to buy attention, they cannot purchase true love. An opportunity to have what you've always wanted at least, in a physical sense may or may not satisfy your craving for genuine affection. The motive behind a gift means more than the gift itself."
		, work: "An opportunity to earn more money or work in better conditions may come your way. As always, though, you must balance this against the requirements and constraints of such a position. Money is important, but not all-important. Weigh all your options before making a choice." 
		, spirituality: "Your spiritual path should influence how you see the physical world, coloring attitudes about everything from possessions to your own body. Ponder the higher purpose your physical resources should play. What are you doing to use them to advance the greater good?"
		, personalGrowth: "The dream of the world offers us many shiny baubles and hypnotic pleasures, and most of us live in cultures that celebrate acquisition. An opportunity to possess more may come your way. To prevent imbalance, have your ethics clearly in mind, and be prepared to manage your new resources wisely."
		, fortuneTelling: "Your health will improve. The check you're looking for really is in the mail."
		},
		
		{ name: "Two of Coins"
		, relationships: "What does this relationship cost you? If this relationship were an investment, how profitable would it be? This card extends an invitation to consider the pros and cons of your relationship. Before taking action, consider what you have to gain ... and what you have to lose."
		, work: "How well do you balance demands of work and life? Remember: you should be working to live, not living to work. If the job is dominating your schedule, press back. If unfettered playtime is ruining your productivity, sober yourself by tallying up the time and money lost to distractions." 
		, spirituality: "Of the many options you have for service, which will ultimately do everyone the most good? Identify your skills and talents, and use these as a means of illuminating your own best contribution. Pair your resources with those of other, like-minded people and get twice as much done in half the time."
		, personalGrowth: "Be aware of how you determine value. What matters? What doesn't? Before you can answer these questions, you must have a firm grip on your own value system. Making a choice becomes infinitely easier when you have a firm grip on."
		, fortuneTelling: "It's time to balance the budget. Avoid the temptation to spend critical funds on frivolous goods."
		},
		
		{ name: "Three of Coins"
		, relationships: "What are the terms that govern your relationship? What have you agreed to do? What roles and responsibilities fall to your partner or friend? The health of any relationship is directly related to the effort both partners make to fulfill their obligations. If you haven't discussed terms, do so."
		, work: "It's time to review contracts and agreements. To what extent do you deliver an honest day's work? To what extent is this fairly compensated? If you agreed to work for a certain price, you should fulfill that agreement, even if you underestimated the time and effort involved in a project. A formula for success: know what you need, ask for it up front, and deliver more than promised." 
		, spirituality: "In return for dedicated pursuit, a spiritual path should yield focus, fulfillment, and peace. To what extent is your own spiritual practice delivering the promised changes in mind, body, and prosperity? It may be time to evaluate what you're giving ... and receiving."
		, personalGrowth: "Integrity is a fragile thing; one broken promise or one unmet commitment can shatter it forever. If you are out of integrity with someone, it's time to correct the situation by admitting fault and accepting consequences. If someone is out of integrity with you, you'll have to decide what value you place on giving them a second chance."
		, fortuneTelling: "A high-dollar contract is in your future. If you work hard, you'll succeed."
		},
		
		{ name: "Four of Coins"
		, relationships: "Seek balance in both physical and financial matters. Too much spending and too much sex leave everyone feeling exhausted and dazed. Too little spending and too little sex starve the soul, making everyone bitter. The healthier the relationship, the more generous the spirits of those involved."
		, work: "Conservation makes sense and can keep an effort afloat, even in difficult times. Taken to extremes, though, short-sighted savings can alienate customers and shatter opportunities. Every short-cut and every opportunity to save has a cost. Be sure your approach is appropriate for the time." 
		, spirituality: "A stingy spirit hampers growth. You simply cannot give more than the Universe can return! Let love, compassion, and interest in others flow freely. Share insights and personal stories. Open yourself to new experiences, new companions, and new points of view. Review your charitable contributions; is it possible to give more?"
		, personalGrowth: "A mature person elects to be responsible for both the body and the bottom line. Try to understand better how your actions impact both your health and your wealth. Rather than obsess on restriction, think in terms of your goal. With it in mind, what actions are appropriate? "
		, fortuneTelling: "A rainy day is comingÑit's time to save."
		},
		
		{ name: "Five of Coins"
		, relationships: "No matter how much is given, some people never feel they have enough. A relationship that drains your wallet and spirit may prove too expensive to maintain in the long run. If you accept offers of aid from loved ones, be sure you define and stick to the terms of repayment, or be prepared to lose the relationship."
		, work: "Too few customers. Too few innovations. Too few resources. All too often, we focus on what we lack. Turn this around by taking a fresh look at the resources you do have. Watch for offers of help. Consider mergers and partnerships. Rather than focus on the deficits, consider what could be." 
		, spirituality: "Faith can turn trial into triumph. Rather than give in to a depletion of spirit, turn to your faith for support. Turn a difficult situation over to your higher power. Pray for guidance. Be bold: ask the Universe for what you really need. The response may surprise you."
		, personalGrowth: "Whining achieves nothing. If the situation is unbearable, it's time to define exactly what resources you have on hand and what needs are critical. Prioritize! By focusing on what you can actually do, you'll avoid the trap of self-pity and depression."
		, fortuneTelling: "Finances are getting tighter. Prepare for a setback."
		},
		
		{ name: "Six of Coins"
		, relationships: "In a healthy relationship, partners help each other. Healthy partners agree on rules for dividing up chores, financial responsibilities, and social roles and then honor those commitments. Define what equality means for you, and help each other achieve it."
		, work: "Learn to delegate. Many people, working together, can achieve more than one person, working alone. So what if some people contribute less and still get credit? Good managers will recognize star contributors and reward them accordingly." 
		, spirituality: "A mature soul seeks to come to the aid of others. This may involve traditional charity: giving time, money, or effort. Don't forget, though, that prayers and compassionate meditation can also change the world for good. Whatever form of service your spiritual path encourages, offer it with sincerity and regularity."
		, personalGrowth: "Charity is based on a simple principle: we should all look out for each other. Self-interest comes naturally; interest in others and their well-being is the hallmark of maturity. Putting the needs of others first can ease your progress toward a balanced life."
		, fortuneTelling: "When you need help, ask for it. Remember, though: what you receive may be limited by what you've given to others in the past."
		},
		
		{ name: "Seven of Coins"
		, relationships: "When this relationship started, what did you imagine it could become? To what extent have your expectations been fulfilled? If it falls short, you have two options: confront the difference ... or revise your expectations. Which option is most likely to lead to happiness?"
		, work: "Fulfillment keeps work from becoming drudgery. What do you need in order to feel rewarded? To what extent is your current work providing this? A new project can breathe life back into a dull job. Be alert for opportunities to change your job without, necessarily, changing jobs." 
		, spirituality: "Which are you more likely to do: look back on wasted days or focus on a brighter future? The past is the past; let it go. If you haven't achieved, spiritually speaking, what you hoped to achieve by now, deepen your resolve, set new goals, and pray for the strength to achieve them."
		, personalGrowth: "You can waste an entire lifetime wrestling with regrets. Escape the trap. Shift your focus from the past to the future, and resolve to make the most of the here and now. No amount of looking back can rewrite history; by contrast, working in the here and now can radically alter tomorrow."
		, fortuneTelling: "Things won't work out as expected. Pick up the pieces and prepare to move on."
		},
		
		{ name: "Eight of Coins"
		, relationships: "Discover what your partner loves or needs and make a special effort to deliver those gifts, words, or service on a regular basis. Consider the value of a handmade gift. Partners should look for ways to demonstrate their dedication to each other. Busy? Make sure a request from your partner or friend rises to the top of your To-Do list."
		, work: "All too often, compressed schedules demand we do just enough. Today, try going beyond the bare minimum. Add that extra touch. Devote a little personal time to completing your work. Even if the task is an ordinary one, strive to make today's product extraordinary. Others may not notice the differenceÑbut you will." 
		, spirituality: "Rituals can feel silly, and formal prayer can feel stiff and unnatural. Today, though, invest a little extra time and energy into your spiritual observations. Choose something to wear that reflects your faith. Acquire a special item for a home altar. Be in the moment, devoting extra attention to the small details of your faith."
		, personalGrowth: "Instead of just getting by, a mature person recognizes that every project and every interaction is a reflection of character. What would recent projects say about you? With an eye toward improving your image and reputation, how might your work and speech need to change?"
		, fortuneTelling: "Stop over-analyzing, researching, and outlining. Buckle down and get the work done.  "
		},
		
		{ name: "Nine of Coins"
		, relationships: "We learn about love from our parents, but their examples may or may not be suitable for relationships we forge for ourselves. Everyone has something to learn about love. Model the level of love and patience you want your partner to provide."
		, work: "Many problems arise when people are assigned to tasks to which they are not suited by training or nature. Where's the disconnect? Identify what you don't know, and ask for appropriate training. When using unskilled workers to do an elaborate task, scale expectations accordingly." 
		, spirituality: "Wanting what you have can transform your world. All too often, we get caught up in the ruthless cycle of pursuing bigger and better, when, in fact, we could very easily make do. Today, consider how you can delight in what you've already been given."
		, personalGrowth: "Be patient with yourself. Seek advice from those who easily do what you must strive to do. Give yourself time to learn a new process. If you're hoping to engineer a change in your own behavior, recognize the value of little steps toward your goal."
		, fortuneTelling: "Until you appreciate what you have, you won't have any luck getting more."
		},
		
		{ name: "Ten of Coins"
		, relationships: "Being swept off your feet is one thing; being overwhelmed by sex or gifts is quite another. Keep a level head with regard to the importance of both presents and pleasure. Gifts and physical intimacy have an intensity all their own, but cannot compensate for genuine affection."
		, work: "Your skills are for sale not your soul. In the long run, will any amount of money compensate for the loss of your health or self-respect? Look carefully at the carrots being dangled before you. Know when to say no. Celebrate what you have; debate whether more is needed." 
		, spirituality: "Lots of stuff can blind us to or distract us from our deepest, most important needs. Lighten the load. Consider giving away some of the possessions that weight you down. When blessings overflow, share them with others."
		, personalGrowth: "You are not defined by your paycheck, by the size of your home, or by memberships in exclusive clubs. Behind all the possessions, behind the physical shell, there is only you; instead of focusing on the externals, make sure you're at peace with the person you really are."
		, fortuneTelling: "Big money is in the near future. Expect a powerful blessing to come your way."
		},
		
		{ name: "Page of Coins"
		, relationships: "Don't rush into sexual situations that make you uncomfortable or that push your limits. Give a relationship time to flourish before opening a joint checking account. Lending money is a sure way to poison friendships and relationships. Before starting something new, ask What's in this for me?"
		, work: "Accepting lower pay as a means of gaining experience makes sense when starting your careerÑbut experienced workers should view such arrangements with skepticism. Know what you're worth. Look for opportunities to learn while doing. Subject all work to the practicality test." 
		, spirituality: "Consider what role your faith should play in making financial and sexual decisions. To what extent would your financial or sexual activity differ if you were not on your current spiritual path? Your body is a precious gift; treat it as such. Keep material blessings in perspective."
		, personalGrowth: "Whatever our station in life, we can always be better stewards of the blessings we've received. Do old habits threaten your health? Set them aside. Today, make a point to take special care of whatever you've been given."
		, fortuneTelling: "This card represents a young man or woman with an earthy, practical demeanor, likely born an Aries, Taurus, or Gemini, who playfully encourages you to take financial or sexual risks."
		},
		
		{ name: "Knight of Coins"
		, relationships: "Relationships, like investments, should pay dividends. Your investment of time, attention, and affection should be returned by your friends and partners. Taking care of others is admirable; take care of yourself, too. Watch for creative ways to enjoy time together without spending money."
		, work: "Keep an eye on the bottom line. Some times call for penny-pinching. At other times, growth many depend on generosity. There's satisfaction in delivering a final, physical product. Keep an eye on the goal. Keep your commitments. Tackle big projects one step at a time." 
		, spirituality: "Avoid taking a guru's claims at face value. Weigh any guidance received on the scales of your heart. Take spiritual advice (including advice from this book) with great caution and deliberation. Find practical, physical, creative ways to express your spiritual insights."
		, personalGrowth: "There's a fine line between caution and pessimism. Believe in yourself and what you hope to achieve; at the same time, be sure to attend to the doing that leads to having. Encourage progress by keeping a physical reminder of upcoming rewards close at hand."
		, fortuneTelling: "A stingy person may chide you for spending money. Be prepared to defend an economic or sexual decision."
		},
		
		{ name: "Queen of Coins"
		, relationships: "Over time, passion may give way to comfort; both of these incarnations of love have their benefits. A luxury shared with others becomes even more luxurious. Don't over-think sex and relationships. Instead, set reasonable limits and embrace what your body yearns for."
		, work: "Strive to incorporate special touches and little extras in your products and services today. These may require more time or resources to complete, but the results will be well worth the investment. Don't be satisfied with anything less than the very best product possible." 
		, spirituality: "Cocoon yourself in spiritual protection. Say an extra prayer. Burn an expensive stick of incense and savor the sweet aroma. Light a scented candle. Enjoy a ritual dinner. Alternatively, heighten your appreciation for your blessings by engaging in a period of voluntary simplicity. What can you do without?"
		, personalGrowth: "How often do you cheat yourself by opting for the less expensive, the less suitable, or the less than perfect? There's great pleasure in sacrificing for, saving for, and acquiring something just right. You may find anticipating something is more pleasurable than having it."
		, fortuneTelling: "This card represents a woman with an expansive, sensual nature, likely born between December 13th and 31st, who uses sensual appeal and the promise of reward to sway others to her point of view."
		},
		
		{ name: "King of Coins"
		, relationships: "Money trouble can ruin romance; dedicate yourself to handling funds especially mutual ones responsibly. Planning for a future together can be exciting and even arousing. Express physical affection with boldness. When circumstances dictate, be prepared to speak up or take action in your partner's defense."
		, work: "This card points to a need for a conservative approach to making and spending money. Stay on budget. Find ways to reduce costs. These measures don't have to choke innovation and fun; they just call on you to be more creative with the resources you do have." 
		, spirituality: "Allow your spirituality to inspire financial and physical responsibility. Take great care to honor the money you've been given. Take special care of your body, and see it as an instrument of the Universal Will. Lend your resources to those who earnestly need your help."
		, personalGrowth: "Mature souls handle money and relationships responsibly. Before spending money, consider the consequences. Before becoming physical with someone, consider the potential outcome of your actions. Live in the moment, but cultivate an awareness of future events your present actions could call into being."
		, fortuneTelling: "This card represents an older man with a financially, socially, and politically conservative spirit, likely born between August 12th and September 11th, who is known for putting his money where his mouth is."
		},
	],
	
	generateCard: function() {
		
		
		for (var i = 0; i < this.numCards; i++) {
			var tempSelection = this.cardNames; //duplicate of all card names
			
			var randomNumber = Math.floor(Math.random()* this.cardNames.length);
			this.cardDrawings.push(randomNumber); //generate a random card and push it to ten card spread
			
			var originalNames = tempSelection[this.cardDrawings[i]]
			tempSelection.splice(randomNumber, 1); //the new card drawn is removed from the pool of remaining cards
			
			var strippedNames = originalNames.split(' ').join('');
			var lowerCaseNames = strippedNames.toLowerCase();
			console.log(lowerCaseNames + ".jpg"); //converts card names to the image file
			
	
			
			var image = document.getElementById('position' + i); 
			image.src= lowerCaseNames + ".jpg"	//adds the image file to the DOM			
		}
	}

};

var view = {
	
mouseMove: function () {
	for (var i = 0; i < model.numCards; i++) {
		var cardDescription = document.getElementById("position" + i);
		cardDescription.onmousemove = this.showDescription;
		cardDescription.onmouseout = this.descriptionReset;
		//console.log(cardDescription);
		}
	},
	
descriptionReset: function (eventObj) {
	var cardDescriptions = document.getElementById("description");
		cardDescriptions.innerHTML = "Move mouse over the cards to see their meanings"
		cardDescriptions.setAttribute("class", "redtext");
	},
	
showDescription: function (eventObj) {
		var positionArray = ["1. Your present atmosphere is: ", "2. Your immediate influence is: ", "3. Your destiny is: ", "4. Your distant past is: ", "5. Your recent past is: ", "6. Your future influence is: ", "7. Your present attitude is: ", "8. Your current influence is: ", "9. Your inner hopes are: ", "10. The culmination of results are embodied in:  "];
		var image = eventObj.target;
		var idElement = image.id;
		var elementNumber = document.getElementById(image);
		var cardDescriptions = document.getElementById("description");
	cardDescriptions.innerHTML = positionArray[idElement[idElement.length - 1]] + model.cardObjects[model.cardDrawings[idElement[idElement.length - 1]]][controller.subjectArray[0]]
		cardDescriptions.setAttribute("class", "redtext");
		//console.log(controller.subjectArray);	
	}
};

var controller = {
	
	subjectArray: [],
	
	buttonPressed: function() {
		var inputs = document.getElementsByTagName("input");
		for (var i = 0; i < inputs.length; i++) {
			inputs[i].onclick = controller.showSubject;
		}
				
	},
	
	showSubject: function(eventObj) {
		var cardDescriptions = document.getElementById("description");
		var subClick = controller.subjectArray[0];
		var subject = eventObj.target;
		var name = subject.id;
		
		if (name === "subject0") {
			controller.subjectArray.splice(subClick, 1);
			controller.subjectArray.push("relationships");
		} else if (name === "subject1"){
			controller.subjectArray.splice(subClick, 1);
			controller.subjectArray.push("work");
		} else if (name === "subject2"){
			controller.subjectArray.splice(subClick, 1);
			controller.subjectArray.push("spirituality");
		} else if (name === "subject3"){
			controller.subjectArray.splice(subClick, 1);
			controller.subjectArray.push("personalGrowth");
		}else if (name === "subject4"){
			controller.subjectArray.splice(subClick, 1);
			controller.subjectArray.push("fortuneTelling");
		} else {
			cardDescriptions.innerHTML = "Click a subject below"
		}
		view.mouseMove();
		//console.log(controller.subjectArray);
	}
	
}

window.onload = Init;
 function Init() {
 model.generateCard();
 controller.buttonPressed();
 //view.mouseMove();
 //console.log(model.cardConstructor);
}

 