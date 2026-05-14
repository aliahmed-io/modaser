/**
 * 🌸 BIRTHDAY BLOOM - EMOTIONAL NARRATIVE TEMPLATES
 * -----------------------------------------
 * Authored by: NABORAJ SARKAR
 * High-fidelity emotional content for cinematic surprises.
 * 
 * Enhanced Configuration System for Birthday Bloom v2.1
 * Supports multiple templates based on gender, age, relationship, and theme
 */

export type Gender = "male" | "female" | "other";
export type Relationship = "partner" | "friend" | "family" | "colleague" | "mentor";
export type TemplateTheme = "romantic" | "fun" | "energetic" | "elegant" | "playful" | "nostalgic";
export type AgeGroup = "teen" | "young-adult" | "adult" | "senior";

export interface BirthdayConfig {
  // Basic Information
  name: string;
  age: number;
  gender: Gender;
  relationship: Relationship;
  theme: TemplateTheme;

  // Personalization
  customMessage: string;
  favoriteColor: string;
  favoriteEmoji: string[];

  // Media
  photos: string[];
  backgroundMusic?: string;
  soundEffects: boolean;

  // Experience Settings
  animationIntensity: "low" | "medium" | "high";
  particleEffects: boolean;
  showSkipButton: boolean;
  duration: "quick" | "normal" | "extended";

  // Accessibility
  reducedMotion: boolean;
  textSize: "small" | "normal" | "large";
  highContrast: boolean;
}

/**
 * Emotional Letters for Different Themes
 * Crafted with deep emotion and poetic depth - "Super OP" Quality
 */
export const EMOTIONAL_LETTERS = {
  partner: {
    male: `My King, My Strength, My Forever $رندا,

In a world that often moves too fast, you are the stillness where my heart finds peace. Today isn't just about celebrating the day you were born; it's about celebrating every heartbeat you've shared with me. You aren't just my partner; you are the architect of my happiness, the guardian of my dreams, and the soul that mirrors my own.

Your presence is the sun that breaks through my darkest clouds. Your kindness is a melody that plays in the background of my life, making everything more beautiful. I promise to stand by you through every storm, to laugh with you in every sunbeam, and to love you more with every breath I take.

Happy Birthday, my love. You are my greatest adventure and my home.

Forever Yours,
[Your Name]`,

    female: `The time is now 12:00 on 17/5. I love you and I want to say 
Happy birthday, my love, and I want to tell you on this day 🥹🎂
عيد ميلادك مش مجرد يوم عادي بيعدي زي أي يوم…
17/5/2008 ده اليوم اللي الدنيا فيه اتغيرت من غير ما حد حس، اليوم اللي النور زاد فيه شوية، اليوم اللي ربنا بعت فيه ملاك على الأرض… ملاك بعيون خضرا تاخد العقل من أول نظرة، وملامح هادية كده تخلي أي حد يشوفها يبتسم غصب عنه.

أنا مش عارف أبدأ منين… بجد بقالي 3 سنين مستني اللحظة دي، مستني اليوم ده عشان أكتبلك، وكل مرة كنت بحاول أقول كلام يليق بيكي وبجمالك وبقلبك… كنت بحس إن مفيش كلام كفاية، إن أي حرف ممكن أكتبه أقل بكتير من اللي جوايا ليكي.
كنت بسكت، مش لأني مش حاسس… بالعكس، لأني حاسس بزيادة لدرجة مش عارف أترجم ده لكلام.

بس النهارده… مش هسكت.
النهارده لازم أقولك كل حاجة.

أنا بحبك يا رندا…
بحبك يا رورو…
بحبك يا رنوده…

بحبك بكل أساميكي اللي على قلبي أخف من أي حاجة في الدنيا.
بحب ضحكتك اللي بتخليني أنسى أي حاجة وحشة، بحب طريقتك في الكلام، بحب عفويتك، بحب قلبك اللي نضيف بطريقة نادرة.
بحب تفاصيلك الصغيرة قبل الكبيرة… بحبك وإنتي زعلانة، وإنتي فرحانة، وإنتي ساكتة، وإنتي بتتكلمي كتير… بحبك في كل حالاتك من غير استثناء.

يمكن أنا مش بعرف أعبر دايمًا، وممكن أوقات تباني ساكت أو مش بقول اللي جوايا، بس الحقيقة إن جوايا كلام كتير جدًا ليكي… كلام أكبر من أي رسالة، وأعمق من أي وصف.

أنا مش شايفك بس حبيبتي…
أنا شايفك الأمان، والراحة, والحاجة الوحيدة اللي لما بفكر فيها بحس إن الدنيا لسه فيها خير.
وجودك في حياتي فرق معايا بطريقة عمري ما كنت متخيلها، خلتني أحس بحاجات أول مرة أحسها، وخليت لأي يوم طعم تاني خالص.

ووعد مني ليكي…
إني عمري ما هسيبك، مهما حصل، ومهما الدنيا لفت بينا، هفضل جنبك، في ضهرك، ومعاكي في كل خطوة.
هفضل الشخص اللي تلاقيه وقت ما تحتاجي، اللي يسمعك قبل ما تتكلمي، واللي يحاول يسعدك حتى لو على حساب نفسه.

ويمكن الوعد ده كبير… بس انتي تستاهلي كل حاجة كبيرة.

ووعد تاني… خليه في بالك كويس 💍
عيد ميلادك اللي بعد اللي جاي، دبلتي هتكون في إيدك… ومش مجرد كلام بيتقال، ده وعد من قلبي أنا مستني اليوم ده زي ما استنيت إني أكتبلك الرسالة دي.

أنا بجد ممتن إنك موجودة في حياتي… ممتن لكل لحظة جمعتني بيكي، لكل كلمة بينا، لكل ذكرى حتى لو كانت صغيرة.

كل سنة وانتي طيبة…
كل سنة وانتي أجمل وأحن وأقرب لقلبي من أي حد.
كل سنة وانتي النور اللي في حياتي…
وكل سنة وأنا محظوظ بيكي.

بحبك… وهفضل أحبك أكتر كل يوم ❤️


فاكرة أول يوم شفتك؟
أنا مستحيل أنساه… من اللحظة دي وانتي ماطلعتيش من بالي ثانية واحدة. كان في حاجة كده شدتني ليكي من غير ما أفهمها، بس كنت متأكد إنك مش شبه أي حد.

وفاكر أول مرة اتكلمت معاكي فيها…
لما سألتك على الامتحان محافظة القاهرة، وقولتيلي “صفحة 173”… يمكن كانت حاجة بسيطة جدًا، كلمة عادية، بس بالنسبة لي كانت بداية لحاجة كبيرة أوي، بداية إني أبقى متعلق بكل تفصيلة فيكي.

وفاكر اليوم اللي اتأكدت فيه إني بحبك بجد…
13/9/2023
اليوم ده محفور جوايا، مش مجرد تاريخ وخلاص، ده اليوم اللي قلبي فيه قال خلاص… دي هي، دي البنت اللي أنا عايزها، اللي حبيتها بجد من غير خوف ولا تردد.

وفاكر كل حاجة…
حتى صورة التيك توك، في ممشى شيري، بالطقم الأسود في رصاصي…
ده كان أول شكل ليكي شوفته، ومن ساعتها وأنا كل ما بشوفك بتأكد أكتر إني واقع فيكي يوم ورا يوم.

أنا بحب تفاصيلك…
بحب حيائك اللي بيخليكي مختلفة عن أي حد، بحب طيبتك اللي بتظهر في أبسط تصرفاتك، بحب قلبك اللي مليان حب للناس، بحب حلاوتك اللي مش بس في شكلك… دي في روحك وكلامك وطريقتك.

كل مرة بشوفك فيها، أو حتى بفتكرك…
بتأكد إني بحبك أكتر من اللي قبلها، وكأن مفيش حد في الدنيا غيرك قادر يعمل الإحساس ده جوايا.

انتي مش مجرد ذكرى حلوة…
انتي كل الذكريات الحلوة، وكل التفاصيل اللي أنا متمسك بيها ومش عايز أنساها أبدًا.

أنا بجد ممتن لكل لحظة بدأت بينا من أول “صفحة 173” لحد دلوقتي…
وممتن إن كل الحاجات الصغيرة دي كبرت وبقت حب كبير جوايا ليكي.

بحبك يا رورو…
حب حقيقي، حب مليان تفاصيل، حب مش بيتنسي ولا بيقل…
وهفضل أحبك كده، وأكتر كمان مع كل يوم بيعدي ❤️`
  },

  friend: {
    romantic: `To the Most Radiant Soul I Know, $رندا,

From the very first moment our paths crossed, the world seemed to shift into focus. You have this magical way of making everything feel possible, of turning the mundane into the miraculous. Your eyes hold galaxies I want to explore, and your smile is the only map I'll ever need.

You are a masterpiece in progress, a blend of kindness, fire, and grace. Today, I celebrate the incredible woman you are and the even more amazing person you are becoming. My heart beats a little faster whenever you're near, and my world is infinitely more vibrant because you exist in it.

Happy Birthday, beautiful. May this year be as breathtaking as you are.

Thinking of Only You,
[Your Name]`,

    friendly: `To My Unbiological Sister & Best Friend, $رندا,

Happy Birthday to the one who knows all my secrets and still hasn't run away! 😂 You are the laughter in my life when things get tough and the logic I need when I'm being a mess. People like you don't just happen; you're a rare gem that I'm so lucky to have found.

Thank you for being the person I can call at 3 AM, the one who celebrates my wins like they're your own, and the one who tells me the truth even when I don't want to hear it. Here's to more chaotic adventures, endless inside jokes, and a lifetime of being 'that' duo.

Love you to the moon and back, Bestie! ✨

Your Partner in Crime,
[Your Name]`,

    legend: `To The Absolute Legend, $رندا,

Happy Birthday to the man who makes life feel like an epic adventure! You've always been the one with the best stories, the loudest laughs, and the most loyal heart. People like you are the reason 'best friend' was even a term invented.

Whether we're conquering new challenges or just hanging out, every moment is better with you in the mix. Thank you for always having my back, for the endless support, and for being the kind of friend anyone would be lucky to have. Today, the first round is on me (well, in spirit! 🍻).

Keep killing it, you absolute icon. The world isn't ready for what you're doing next!

Cheers to You,
[Your Name]`
  },

  love: `My Heart's Only Desire, $رندا,

If I could gather every star in the sky and place them at your feet, it still wouldn't be enough to show you how much I love you. You are the 'why' behind everything I do. In the chaos of this world, you are my sanctuary, my anchor, and my ultimate destination.

Your love has rewritten my history and redefined my future. You see the parts of me I tried to hide and loved them anyway. Today, I want to wrap you in all the warmth and joy you give to everyone else. You deserve a universe of happiness, and I will spend my life trying to give it to you.

Happy Birthday, my forever. My heart is, and will always be, yours.

Eternally Yours,
[Your Name]`,

  emotional: `To My Most Precious $رندا,

There are moments when I just stop and realize how lucky I am to have you in my life. You are the kind of person who leaves a mark on everyone you meet, but the mark you've left on my heart is permanent and profound. 

Your journey hasn't always been easy, but the way you've handled every challenge with such grace and courage is nothing short of heroic. Today, I want you to feel seen, heard, and deeply, unconditionally loved. You are a gift to this world, and especially to me.

Happy Birthday. Take a moment to see yourself through my eyes—you are absolutely magnificent.

With Deepest Love,
[Your Name]`,

  family: `The time is now 12:00 on 17/5. I love you and I want to say 
Happy birthday, my love, and I want to tell you on this day 🥹🎂
عيد ميلادك مش مجرد يوم عادي بيعدي زي أي يوم…
17/5/2008 ده اليوم اللي الدنيا فيه اتغيرت من غير ما حد حس، اليوم اللي النور زاد فيه شوية، اليوم اللي ربنا بعت فيه ملاك على الأرض… ملاك بعيون خضرا تاخد العقل من أول نظرة، وملامح هادية كده تخلي أي حد يشوفها يابتسم غصب عنه.

أنا مش عارف أبدأ منين… بجد بقالي 3 سنين مستني اللحظة دي، مستني اليوم ده عشان أكتبلك، وكل مرة كنت بحاول أقول كلام يليق بيكي وبجمالك وبقلبك… كنت بحس إن مفيش كلام كفاية، إن أي حرف ممكن أكتبه أقل بكتير من اللي جوايا ليكي.
كنت بسكت، مش لأني مش حاسس… بالعكس، لأني حاسس بزيادة لدرجة مش عارف أترجم ده لكلام.

بس النهارده… مش هسكت.
النهارده لازم أقولك كل حاجة.

أنا بحبك يا رندا…
بحبك يا رورو…
بحبك يا رنوده…

بحبك بكل أساميكي اللي على قلبي أخف من أي حاجة في الدنيا.
بحب ضحكتك اللي بتخليني أنسى أي حاجة وحشة، بحب طريقتك في الكلام، بحب عفويتك، بحب قلبك اللي نضيف بطريقة نادرة.
بحب تفاصيلك الصغيرة قبل الكبيرة… بحبك وإنتي زعلانة، وإنتي فرحانة، وإنتي ساكتة، وإنتي بتتكلمي كتير… بحبك في كل حالاتك من غير استثناء.

يمكن أنا مش بعرف أعبر دايمًا، وممكن أوقات تباني ساكت أو مش بقول اللي جوايا، بس الحقيقة إن جوايا كلام كتير جدًا ليكي… كلام أكبر من أي رسالة، وأعمق من أي وصف.

أنا مش شايفك بس حبيبتي…
أنا شايفك الأمان، والراحة, والحاجة الوحيدة اللي لما بفكر فيها بحس إن الدنيا لسه فيها خير.
وجودك في حياتي فرق معايا بطريقة عمري ما كنت متخيلها، خلتني أحس بحاجات أول مرة أحسها، وخليت لأي يوم طعم تاني خالص.

ووعد مني ليكي…
إني عمري ما هسيبك, مهما حصل، ومهما الدنيا لفت بينا، هفضل جنبك، في ضهرك، ومعاكي في كل خطوة.
هفضل الشخص اللي تلاقيه وقت ما تحتاجي، اللي يسمعك قبل ما تتكلمي، واللي يحاول يسعدك حتى لو على حساب نفسه.

ويمكن الوعد ده كبير… بس انتي تستاهلي كل حاجة كبيرة.

ووعد تاني… خليه في بالك كويس 💍
عيد ميلادك اللي بعد اللي جاي، دبلتي هتكون في إيدك… ومش مجرد كلام بيتقال، ده وعد من قلبي أنا مستني اليوم ده زي ما استنيت إني أكتبلك الرسالة دي.

أنا بجد ممتن إنك موجودة في حياتي… ممتن لكل لحظة جمعتني بيكي، لكل كلمة بينا، لكل ذكرى حتى لو كانت صغيرة.

كل سنة وانتي طيبة…
كل سنة وانتي أجمل وأحن وأقرب لقلبي من أي حد.
كل سنة وانتي النور اللي في حياتي…
وكل سنة وأنا محظوظ بيكي.

بحبك… وهفضل أحبك أكتر كل يوم ❤️


فاكرة أول يوم شفتك؟
أنا مستحيل أنساه… من اللحظة دي وانتي ماطلعتيش من بالي ثانية واحدة. كان في حاجة كده شدتني ليكي من غير ما أفهمها، بس كنت متأكد إنك مش شبه أي حد.

وفاكر أول مرة اتكلمت معاكي فيها…
لما سألتك على الامتحان محافظة القاهرة، وقولتيلي “صفحة 173”… يمكن كانت حاجة بسيطة جدًا، كلمة عادية، بس بالنسبة لي كانت بداية لحاجة كبيرة أوي، بداية إني أبقى متعلق بكل تفصيلة فيكي.

وفاكر اليوم اللي اتأكدت فيه إني بحبك بجد…
13/9/2023
اليوم ده محفور جوايا، مش مجرد تاريخ وخلاص، ده اليوم اللي قلبي فيه قال خلاص… دي هي، دي البنت اللي أنا عايزها، اللي حبيتها بجد من غير خوف ولا تردد.

وفاكر كل حاجة…
حتى صورة التيك توك، في ممشى شيري، بالطقم الأسود في رصاصي…
ده كان أول شكل ليكي شوفته، ومن ساعتها وأنا كل ما بشوفك بتأكد أكتر إني واقع فيكي يوم ورا يوم.

أنا بحب تفاصيلك…
بحب حيائك اللي بيخليكي مختلفة عن أي حد، بحب طيبتك اللي بتظهر في أبسط تصرفاتك، بحب قلبك اللي مليان حب للناس، بحب حلاوتك اللي مش بس في شكلك… دي في روحك وكلامك وطريقتك.

كل مرة بشوفك فيها، أو حتى بفتكرك…
بتأكد إني بحبك أكتر من اللي قبلها، وكأن مفيش حد في الدنيا غيرك قادر يعمل الإحساس ده جوايا.

انتي مش مجرد ذكرى حلوة…
انتي كل الذكريات الحلوة، وكل التفاصيل اللي أنا متمسك بيها ومش عايز أنساها أبدًا.

أنا بجد ممتن لكل لحظة بدأت بينا من أول “صفحة 173” لحد دلوقتي…
وممتن إن كل الحاجات الصغيرة دي كبرت وبقت حب كبير جوايا ليكي.

بحبك يا رورو…
حب حقيقي، حب مليان تفاصيل، حب مش بيتنسي ولا بيقل…
وهفضل أحبك كده، وأكتر كمان مع كل يوم بيعدي ❤️`,

  sibling: `To My Amazing Sibling, $رندا,

From fighting over the TV remote to having each other's backs when it really matters, we've shared a lifetime of memories. You're the one person who knows all my embarrassing childhood stories and still chooses to be seen in public with me! 😂

But jokes aside, I couldn't have asked for a better partner in navigating life's ups and downs. Your strength, your humor, and your heart inspire me more than you know. No matter where life takes us, you will always be my first friend and my forever ally.

Happy Birthday. Let's make this year the best one yet.

Love Always,
[Your Name]`,

  colleague: `To an Incredible Colleague, $رندا,

Working with you is a daily reminder that the people make the place. Your dedication, your brilliant ideas, and your positive energy transform even the most stressful days into something manageable—and often, genuinely fun.

Thank you for being the kind of teammate everyone hopes for. You bring so much value not just to the work we do, but to the atmosphere we share. I hope you take today to celebrate yourself, step away from the screen, and enjoy every moment.

Happy Birthday! Wishing you a year of huge success and even bigger moments of joy.

Warmly,
[Your Name]`,

  mentor: `To My Valued Mentor, $رندا,

Some people teach by telling, but you teach by being. Your guidance, patience, and unwavering belief in my potential have shaped my journey in ways I can't fully express. You've not only shown me the path but given me the confidence to walk it.

Today, on your birthday, I want to take a moment to thank you for your generosity of spirit. The impact you have on those around you is profound and lasting. May this year bring you as much inspiration and success as you've freely given to others.

Happy Birthday, and thank you for everything.

With Deep Gratitude,
[Your Name]`,

  milestone: `To the Incredible $رندا, on Your Milestone Birthday,

Today isn't just another birthday; it's a celebration of a major milestone! It's a moment to pause, look back at the incredible journey you've traveled, and look forward to the unwritten chapters still waiting for your brilliance.

You've collected wisdom, forged unforgettable memories, and touched so many lives along the way. Embrace this new era with the same passion and grace that has defined your story so far. The best is yet to come, and I am so excited to see where you go next.

Happy Milestone Birthday! Let's celebrate this epic moment in style!

Cheers to the Journey,
[Your Name]`
};

/**
 * Special Quotes & Shayari for Interactive Elements
 * Targeted by Relationship and Gender
 */
export const SPECIAL_QUOTES = {
  partner: {
    male: [
      "You are the king of my heart, the man of my dreams, and the soul I choose to walk with forever.",
      "In your arms, I've found my sanctuary. You are my greatest strength and my softest comfort.",
      "Tere sang bitaye har pal ek shayari hai, tu hi mera junoon, tu hi meri tishnagi hai. ❤️"
    ],
    female: [
      "To the woman who turned my world into a garden of joy—you are my muse, my love, and my everything.",
      "Your grace is my inspiration, your love is my anchor. Happy Birthday to my beautiful soulmate.",
      "Tumhari muskurahat hi meri khushi ka raaz hai, tum hi mera kal aur tum hi mera aaj ho. 🌹"
    ]
  },
  friend: {
    legend: [
      "To the legend who turns every regular day into an epic story. Stay wild, stay real.",
      "Brother from another mother, loyal as a shadow, bright as a star. Keep shining.",
      "Dosti ka naam ho toh tum jaisa, har mushkil mein saath dene wala yaar tum jaisa. 🔥"
    ],
    friendly: [
      "To my soul-sister—thank you for being the person who knows my silence as well as my laughter.",
      "You aren't just a friend; you're the family I got to choose. Here's to a lifetime of adventures.",
      "Yaara teri yaari ko maine toh khuda maana, tujh jaisa yaar hai meri sabse badi khushnasibi. ✨"
    ]
  },
  family: [
    "The roots of our family tree are strengthened by your love. You are our pride and joy.",
    "Every memory we share is a treasure. Thank you for being the heart of our home.",
    "Parivaar ka garv ho tum, hamari khushiyon ki wajah ho tum. Sada khush raho. 🙏"
  ]
};

/**
 * Template Presets
 * Automatically adjust messages, colors, emojis based on gender, age, and relationship
 */
export const TEMPLATE_PRESETS = {
  romantic: {
    female: {
      young_adult: {
        colors: ["#FF1493", "#FF69B4", "#FFB6C1"],
        emojis: ["💖", "✨", "💫", "🌹", "💝"],
        messageTemplate: "Happy Birthday Beautiful! 🌹",
        vibration: true,
      },
      adult: {
        colors: ["#DC143C", "#FF69B4", "#FF4500"],
        emojis: ["💕", "🌹", "✨", "💎", "👑"],
        messageTemplate: "Happy Birthday to the Love of My Life! 💕",
        vibration: true,
      },
    },
    male: {
      young_adult: {
        colors: ["#1E90FF", "#00CED1", "#FFD700"],
        emojis: ["💙", "✨", "🎊", "⭐", "🚀"],
        messageTemplate: "Happy Birthday Legend! 🎉",
        vibration: true,
      },
      adult: {
        colors: ["#0047AB", "#1E90FF", "#FF6347"],
        emojis: ["💙", "⭐", "🎯", "👑", "💪"],
        messageTemplate: "Happy Birthday King! 👑",
        vibration: true,
      },
    },
  },
  fun: {
    friend: {
      teen: {
        colors: ["#00FF00", "#00FFFF", "#FF00FF"],
        emojis: ["😎", "🍻", "🎮", "🎸", "🔥"],
        messageTemplate: "Hey Birthday Buddy! Let's Party! 🎉",
        vibration: true,
      },
      young_adult: {
        colors: ["#FFD700", "#FF6347", "#00CED1"],
        emojis: ["🥳", "🍕", "🎊", "🎈", "⭐"],
        messageTemplate: "Another Year Older, Still Awesome! 🎉",
        vibration: true,
      },
    },
  },
  family: {
    young_adult: {
      colors: ["#FFD700", "#FF69B4", "#87CEEB"],
      emojis: ["👨‍👩‍👧‍👦", "❤️", "🎂", "🎁", "✨"],
      messageTemplate: "Happy Birthday to Our Precious One! 🎉",
      vibration: true,
    },
    adult: {
      colors: ["#8B4513", "#DAA520", "#CD5C5C"],
      emojis: ["❤️", "👪", "🎂", "✨", "🌟"],
      messageTemplate: "Happy Birthday to Our Beloved! 💕",
      vibration: true,
    },
  },
};

/**
 * Default Configuration
 */
export const DEFAULT_CONFIG: BirthdayConfig = {
  name: "YOU",
  age: 25,
  gender: "other",
  relationship: "friend",
  theme: "fun",
  customMessage: "Have an Amazing Birthday! 🎉",
  favoriteColor: "#FF6B6B",
  favoriteEmoji: ["🎉", "✨", "🎊", "🎈", "🥳"],
  photos: [
    "https://images.unsplash.com/photo-1530103043960-ef38714abb15",
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
    "https://images.unsplash.com/photo-1513151233558-d860c5398176",
  ],
  soundEffects: true,
  animationIntensity: "high",
  particleEffects: true,
  showSkipButton: true,
  duration: "normal",
  reducedMotion: false,
  textSize: "normal",
  highContrast: false,
};

/**
 * Color Palettes for Different Templates
 */
export const COLOR_PALETTES = {
  romantic: {
    primary: "#FF1493",
    secondary: "#FFB6C1",
    accent: "#FF69B4",
    light: "#FFE4E1",
    dark: "#8B0A50",
  },
  fun: {
    primary: "#FFD700",
    secondary: "#FF6347",
    accent: "#00CED1",
    light: "#FFFACD",
    dark: "#FF4500",
  },
  energetic: {
    primary: "#FF4500",
    secondary: "#00FF00",
    accent: "#00FFFF",
    light: "#FFE4B5",
    dark: "#DC143C",
  },
  elegant: {
    primary: "#C0C0C0",
    secondary: "#DAA520",
    accent: "#696969",
    light: "#F5F5DC",
    dark: "#2F4F4F",
  },
  playful: {
    primary: "#FF69B4",
    secondary: "#00FFFF",
    accent: "#FFD700",
    light: "#FFEFD5",
    dark: "#FF1493",
  },
  nostalgic: {
    primary: "#8B4513",
    secondary: "#DAA520",
    accent: "#CD5C5C",
    light: "#F5DEB3",
    dark: "#654321",
  },
};

/**
 * Message Templates by Gender, Age, and Relationship
 */
export const MESSAGE_TEMPLATES = {
  romantic_female_young: "Happy Birthday Beautiful! You make every day special. 💖",
  romantic_female_adult:
    "Happy Birthday to the Love of My Life! Forever grateful for you. 💕",
  romantic_male_young: "Happy Birthday Legend! Can't wait to celebrate with you. 💙",
  romantic_male_adult: "Happy Birthday King! You mean everything to me. 👑",
  fun_friend_teen: "Hey Birthday Buddy! Time to make some epic memories! 🎉",
  fun_friend_young:
    "Another year older, still awesome! Let's party like we're 21! 🥳",
  fun_colleague: "Happy Birthday! Cheers to another year of collaboration! 🎊",
  family_child: "Happy Birthday to our Precious One! We love you so much! 🎂",
  family_adult: "Happy Birthday to our Beloved! You make us so proud! ❤️",
  family_senior:
    "Happy Birthday to our Wonderful Parent! Thank you for everything! 🌟",
};
