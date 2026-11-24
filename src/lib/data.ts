import { Framework, CompatibilityResult } from './types';

export const frameworks: Framework[] = [
  {
    id: 'zodiac',
    name: 'Western Astrology',
    icon: 'Star',
    color: '#8b5cf6',
    gradient: ['#7c3aed', '#4f46e5'],
    description: 'Western astrology uses the position of the sun at your birth to determine your zodiac sign, which reveals core personality traits, emotional patterns, and life tendencies.',
    types: [
      {
        id: 'aries',
        name: 'Aries',
        symbol: '♈',
        description: 'Bold, ambitious, and confident. Aries are natural leaders who dive headfirst into challenges. They are passionate and motivated, with a competitive spirit.',
        communicationStyle: 'Direct and energetic. Aries prefer straightforward conversations without beating around the bush. They appreciate honesty and quick responses.',
        strengths: ['Courageous', 'Determined', 'Confident', 'Enthusiastic', 'Optimistic'],
        challenges: ['Impatient', 'Moody', 'Short-tempered', 'Impulsive', 'Aggressive'],
        partnershipInsights: 'As a partner, Aries brings passionate devotion and unwavering loyalty. They protect those they love fiercely and inspire with their confidence. Their spontaneity keeps relationships exciting, and their enthusiasm creates vibrant shared experiences. They make exciting, devoted partners who lead with their heart.',
        loverInsights: 'As a lover, Aries is bold, passionate, and intensely present. They bring raw sexual energy and aren\'t afraid to express desire. Their need for excitement means they\'ll keep intimacy adventurous and spontaneous. They make passionate, uninhibited lovers who crave intensity and mutual enthusiasm.'
      },
      {
        id: 'taurus',
        name: 'Taurus',
        symbol: '♉',
        description: 'Reliable, patient, and devoted. Taurus values stability and sensory pleasures. They are grounded individuals who appreciate the finer things in life.',
        communicationStyle: 'Calm and deliberate. Taurus prefers thoughtful discussions and dislikes being rushed. They communicate best in comfortable, relaxed settings.',
        strengths: ['Reliable', 'Patient', 'Practical', 'Devoted', 'Responsible'],
        challenges: ['Stubborn', 'Possessive', 'Uncompromising', 'Materialistic', 'Resistant to change'],
        partnershipInsights: 'As a partner, Taurus offers stability, reliability, and deep sensuality. They create a safe haven through consistent care and genuine commitment. Their loyalty runs bone-deep, and they invest in building something lasting. They make grounded, sensual partners who create security through dedication.',
        loverInsights: 'As a lover, Taurus is sensual, patient, and deeply affectionate. They love slow, connected intimacy with all five senses engaged. Touch is everything to them—they\'re generous with affection and crave physical closeness. They make devoted, earthy lovers who turn intimacy into an art form.'
      },
      {
        id: 'gemini',
        name: 'Gemini',
        symbol: '♊',
        description: 'Expressive, curious, and adaptable. Geminis are social butterflies who thrive on intellectual stimulation and variety.',
        communicationStyle: 'Witty and versatile. Geminis love engaging conversations on multiple topics. They enjoy wordplay, humor, and exchanging ideas.',
        strengths: ['Gentle', 'Affectionate', 'Curious', 'Adaptable', 'Quick learners'],
        challenges: ['Nervous', 'Inconsistent', 'Indecisive', 'Superficial', 'Restless'],
        partnershipInsights: 'As a partner, Gemini brings intellectual stimulation, humor, and emotional lightness. They keep relationships fresh with curiosity and adaptability. Their wit makes partnership feel like an adventure, and they\'re endlessly interested in their partner\'s thoughts. They make engaging, intellectually compatible partners.',
        loverInsights: 'As a lover, Gemini is playful, curious, and mentally stimulating. They enjoy variety and love exploring intimacy with creativity and humor. Communication is foreplay for them—they\'re aroused by wit and mental connection. They make adventurous, witty lovers who turn intimacy into an exciting game.'
      },
      {
        id: 'cancer',
        name: 'Cancer',
        symbol: '♋',
        description: 'Intuitive, emotional, and protective. Cancers are deeply connected to home and family, with strong nurturing instincts.',
        communicationStyle: 'Empathetic and nurturing. Cancers communicate through emotional connection. They prefer intimate conversations and respond well to warmth.',
        strengths: ['Tenacious', 'Loyal', 'Emotional', 'Sympathetic', 'Persuasive'],
        challenges: ['Moody', 'Pessimistic', 'Suspicious', 'Manipulative', 'Insecure'],
        partnershipInsights: 'As a partner, Cancer offers profound emotional depth, nurturing care, and fierce protectiveness. They create emotional intimacy and safety through vulnerable connection. Their intuition lets them sense needs before they\'re spoken. They make deeply attuned, nurturing partners who love with their whole being.',
        loverInsights: 'As a lover, Cancer is tender, emotionally bonded, and deeply sensual. They need emotional intimacy to truly connect physically. Vulnerability turns them on—they want to merge emotionally and spiritually with their partner. They make loving, intuitive lovers who create safe, emotionally intimate experiences.'
      },
      {
        id: 'leo',
        name: 'Leo',
        symbol: '♌',
        description: 'Creative, passionate, and generous. Leos are natural performers who love being in the spotlight and inspiring others.',
        communicationStyle: 'Dramatic and warm. Leos express themselves with flair and enthusiasm. They appreciate being heard and respond to admiration.',
        strengths: ['Creative', 'Passionate', 'Generous', 'Warm-hearted', 'Cheerful'],
        challenges: ['Arrogant', 'Stubborn', 'Self-centered', 'Lazy', 'Inflexible'],
        partnershipInsights: 'As a partner, Leo brings passion, generosity, and genuine admiration. They make their partner feel celebrated and cherished. Their loyalty is absolute, and they invest in making life grand and beautiful. They make devoted, generous partners who put their loved one on a pedestal.',
        loverInsights: 'As a lover, Leo is bold, generous, and deeply passionate. They love being admired and making their partner feel special. Physical intimacy is a stage for them to show affection and dominance. They make confident, theatrical lovers who make their partner feel like royalty.'
      },
      {
        id: 'virgo',
        name: 'Virgo',
        symbol: '♍',
        description: 'Analytical, practical, and kind. Virgos are detail-oriented perfectionists who find joy in helping others improve.',
        communicationStyle: 'Precise and thoughtful. Virgos prefer clear, logical discussions. They appreciate attention to detail and well-organized thoughts.',
        strengths: ['Loyal', 'Analytical', 'Kind', 'Hardworking', 'Practical'],
        challenges: ['Shy', 'Overly critical', 'Anxious', 'All work no play', 'Perfectionist'],
        partnershipInsights: 'As a partner, Virgo offers thoughtful care, practical support, and genuine devotion. They show love through helpful action and attention to detail. Their reliability means you can count on them completely. They make devoted, attentive partners who love through service.',
        loverInsights: 'As a lover, Virgo is attentive, considerate, and sensually aware. They notice every detail about their partner and want to get everything right. Intimacy improves with time and trust as they become less inhibited. They make dedicated, thoughtful lovers who master their craft through attention and care.'
      },
      {
        id: 'libra',
        name: 'Libra',
        symbol: '♎',
        description: 'Diplomatic, fair, and social. Libras seek harmony and balance in all things, with a strong appreciation for beauty and partnership.',
        communicationStyle: 'Charming and balanced. Libras are natural mediators who consider all perspectives. They value pleasant, harmonious exchanges.',
        strengths: ['Cooperative', 'Diplomatic', 'Gracious', 'Fair-minded', 'Social'],
        challenges: ['Indecisive', 'Avoids confrontation', 'Self-pitying', 'Carries grudges', 'People-pleasing'],
        partnershipInsights: 'As a partner, Libra brings balance, romance, and genuine partnership. They\'re committed to creating harmony and fairness in the relationship. Their charm makes partnership feel effortless, and they\'re naturally skilled at compromise. They make romantic, balanced partners who prioritize connection.',
        loverInsights: 'As a lover, Libra is graceful, romantic, and aesthetically aware. They want intimacy to be beautiful and balanced. They\'re attentive to their partner\'s pleasure and enjoy sensual connection. They make artistic, considerate lovers who create romantic atmospheres and smooth, refined experiences.'
      },
      {
        id: 'scorpio',
        name: 'Scorpio',
        symbol: '♏',
        description: 'Passionate, resourceful, and powerful. Scorpios are intense individuals who seek deep, transformative experiences.',
        communicationStyle: 'Intense and probing. Scorpios prefer meaningful, deep conversations. They value honesty and can sense when someone is being insincere.',
        strengths: ['Resourceful', 'Brave', 'Passionate', 'Stubborn', 'True friend'],
        challenges: ['Distrusting', 'Jealous', 'Secretive', 'Violent tendencies', 'Manipulative'],
        partnershipInsights: 'As a partner, Scorpio offers intense devotion, deep understanding, and passionate commitment. They bond at profound levels and protect their partner fiercely. Their intensity creates genuine intimacy, and their loyalty is absolute. They make intensely devoted, deeply connected partners.',
        loverInsights: 'As a lover, Scorpio is intense, magnetic, and deeply passionate. They bring raw sexuality and magnetic power to intimacy. They want complete surrender and profound emotional-physical connection. They make transformative, intensely connected lovers who merge body, mind, and soul with their partner.'
      },
      {
        id: 'sagittarius',
        name: 'Sagittarius',
        symbol: '♐',
        description: 'Adventurous, optimistic, and philosophical. Sagittarians are freedom-loving explorers who seek truth and meaning.',
        communicationStyle: 'Open and philosophical. Sagittarians enjoy discussing big ideas and future possibilities. They appreciate humor and intellectual freedom.',
        strengths: ['Generous', 'Idealistic', 'Great humor', 'Adventurous', 'Optimistic'],
        challenges: ['Promises more than can deliver', 'Impatient', 'Tactless', 'Restless', 'Inconsistent'],
        partnershipInsights: 'As a partner, Sagittarius brings adventure, optimism, and genuine enthusiasm. They inspire growth and expanded horizons. Their honesty creates trust, and their humor keeps things light. They make adventurous, optimistic partners who champion their loved one\'s dreams.',
        loverInsights: 'As a lover, Sagittarius is adventurous, fun, and openly passionate. They bring playfulness and spontaneity to intimacy. They love trying new things and exploring with enthusiasm. They make adventurous, joyful lovers who turn physical connection into an exciting exploration.'
      },
      {
        id: 'capricorn',
        name: 'Capricorn',
        symbol: '♑',
        description: 'Disciplined, responsible, and ambitious. Capricorns are master planners who steadily work toward their goals.',
        communicationStyle: 'Professional and structured. Capricorns prefer practical, goal-oriented discussions. They value respect and appreciate preparation.',
        strengths: ['Responsible', 'Disciplined', 'Self-control', 'Good managers', 'Ambitious'],
        challenges: ['Know-it-all', 'Unforgiving', 'Condescending', 'Pessimistic', 'Workaholic'],
        partnershipInsights: 'As a partner, Capricorn offers steadfast commitment, genuine respect, and long-term vision. They build something lasting through dedication and responsibility. Their reliability means they show up consistently. They make committed, steady partners who invest for the future.',
        loverInsights: 'As a lover, Capricorn is sensual, controlled, and deeply committed. They approach intimacy seriously and want lasting connection. Their reserved nature hides passionate depths that unfold over time. They make loyal, physically attentive lovers who strengthen intimacy through consistency and devotion.'
      },
      {
        id: 'aquarius',
        name: 'Aquarius',
        symbol: '♒',
        description: 'Progressive, original, and humanitarian. Aquarians are innovative thinkers who march to the beat of their own drum.',
        communicationStyle: 'Intellectual and unconventional. Aquarians enjoy discussions about ideas and social causes. They appreciate originality and independence.',
        strengths: ['Progressive', 'Original', 'Independent', 'Humanitarian', 'Visionary'],
        challenges: ['Aloof', 'Temperamental', 'Uncompromising', 'Emotionally detached', 'Rebellious'],
        partnershipInsights: 'As a partner, Aquarius brings intellectual connection, respect for independence, and unique loyalty. They see their partner clearly and accept them fully. They offer friendship alongside romance. They make innovative, accepting partners who celebrate individuality.',
        loverInsights: 'As a lover, Aquarius is unconventional, intellectually stimulating, and emotionally detached. They enjoy exploring new experiences and unconventional approaches. Mental connection often precedes physical attraction. They make imaginative, experimental lovers who prioritize freedom and intellectual compatibility.'
      },
      {
        id: 'pisces',
        name: 'Pisces',
        symbol: '♓',
        description: 'Intuitive, compassionate, and artistic. Pisces are dreamy souls with deep emotional intelligence and creative gifts.',
        communicationStyle: 'Gentle and intuitive. Pisces communicate through feeling and imagery. They appreciate artistic expression and emotional authenticity.',
        strengths: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Wise'],
        challenges: ['Fearful', 'Overly trusting', 'Sad', 'Desire to escape reality', 'Victim mentality'],
        partnershipInsights: 'As a partner, Pisces offers emotional depth, spiritual connection, and creative romance. They merge emotionally and spiritually with their partner. Their empathy creates genuine understanding. They make deeply romantic, intuitively connected partners.',
        loverInsights: 'As a lover, Pisces is dreamy, romantic, and deeply intuitive. They create spiritual and emotional connection alongside physical intimacy. They\'re generous, imaginative, and attuned to their partner\'s needs. They make romantic, intuitive lovers who create transcendent intimate experiences.'
      }
    ]
  },
  {
    id: 'chinese',
    name: 'Chinese Zodiac',
    icon: 'Moon',
    color: '#ef4444',
    gradient: ['#dc2626', '#b91c1c'],
    description: 'Based on a 12-year cycle, each year is represented by an animal. Your birth year animal influences your personality, compatibility with others, and life path.',
    types: [
      {
        id: 'rat',
        name: 'Rat',
        symbol: '🐀',
        description: 'Quick-witted, resourceful, and versatile. Rats are clever survivors who can adapt to any situation.',
        communicationStyle: 'Charming and social. Rats are excellent networkers who can talk to anyone. They are persuasive and know how to get what they want.',
        strengths: ['Clever', 'Quick thinking', 'Successful', 'Charming', 'Practical'],
        challenges: ['Stubborn', 'Greedy', 'Secretive', 'Scheming', 'Overly critical']
      },
      {
        id: 'ox',
        name: 'Ox',
        symbol: '🐂',
        description: 'Diligent, dependable, and strong. Oxen are steady workers who achieve through persistence.',
        communicationStyle: 'Straightforward and honest. Oxen say what they mean without embellishment. They prefer actions over words.',
        strengths: ['Honest', 'Diligent', 'Dependable', 'Strong', 'Determined'],
        challenges: ['Stubborn', 'Poor communication', 'Introverted', 'Rigid', 'Slow to adapt']
      },
      {
        id: 'tiger',
        name: 'Tiger',
        symbol: '🐅',
        description: 'Brave, confident, and competitive. Tigers are natural leaders who inspire and protect.',
        communicationStyle: 'Bold and authoritative. Tigers speak with confidence and expect to be heard. They can be inspiring but also intimidating.',
        strengths: ['Brave', 'Confident', 'Competitive', 'Unpredictable', 'Charming'],
        challenges: ['Arrogant', 'Short-tempered', 'Reckless', 'Aggressive', 'Impatient']
      },
      {
        id: 'rabbit',
        name: 'Rabbit',
        symbol: '🐇',
        description: 'Gentle, elegant, and compassionate. Rabbits are peace-loving souls who create harmony.',
        communicationStyle: 'Soft and diplomatic. Rabbits avoid conflict and speak with tact. They are good listeners who consider others\' feelings.',
        strengths: ['Gentle', 'Quiet', 'Elegant', 'Alert', 'Compassionate'],
        challenges: ['Timid', 'Conservative', 'Insecure', 'Pessimistic', 'Escapist']
      },
      {
        id: 'dragon',
        name: 'Dragon',
        symbol: '🐉',
        description: 'Powerful, ambitious, and charismatic. Dragons are natural born leaders destined for greatness.',
        communicationStyle: 'Commanding and inspiring. Dragons speak with authority and vision. They can rally others but may dominate conversations.',
        strengths: ['Confident', 'Intelligent', 'Enthusiastic', 'Ambitious', 'Charismatic'],
        challenges: ['Arrogant', 'Tactless', 'Impatient', 'Intolerant', 'Unrealistic']
      },
      {
        id: 'snake',
        name: 'Snake',
        symbol: '🐍',
        description: 'Wise, mysterious, and intuitive. Snakes are deep thinkers who see beyond the surface.',
        communicationStyle: 'Calculated and observant. Snakes speak carefully and reveal little. They listen more than they talk and remember everything.',
        strengths: ['Wise', 'Intuitive', 'Elegant', 'Attentive', 'Determined'],
        challenges: ['Jealous', 'Suspicious', 'Cunning', 'Lazy', 'Cold']
      },
      {
        id: 'horse',
        name: 'Horse',
        symbol: '🐎',
        description: 'Energetic, free-spirited, and warm. Horses are independent souls who value their freedom.',
        communicationStyle: 'Animated and expressive. Horses are talkative and entertaining. They enjoy socializing but can be impatient listeners.',
        strengths: ['Animated', 'Active', 'Energetic', 'Straightforward', 'Popular'],
        challenges: ['Impatient', 'Self-centered', 'Irresponsible', 'Tactless', 'Fickle']
      },
      {
        id: 'goat',
        name: 'Goat',
        symbol: '🐐',
        description: 'Gentle, creative, and empathetic. Goats are artistic souls who appreciate beauty.',
        communicationStyle: 'Soft and thoughtful. Goats prefer peaceful conversations about feelings and creativity. They dislike conflict or pressure.',
        strengths: ['Gentle', 'Creative', 'Empathetic', 'Tasteful', 'Calm'],
        challenges: ['Indecisive', 'Timid', 'Pessimistic', 'Moody', 'Weak-willed']
      },
      {
        id: 'monkey',
        name: 'Monkey',
        symbol: '🐒',
        description: 'Clever, curious, and mischievous. Monkeys are quick thinkers who love to solve problems.',
        communicationStyle: 'Witty and playful. Monkeys enjoy humor and intellectual sparring. They can talk their way out of anything.',
        strengths: ['Clever', 'Curious', 'Playful', 'Versatile', 'Sociable'],
        challenges: ['Cunning', 'Selfish', 'Arrogant', 'Jealous', 'Suspicious']
      },
      {
        id: 'rooster',
        name: 'Rooster',
        symbol: '🐓',
        description: 'Observant, hardworking, and confident. Roosters are perfectionists who take pride in their work.',
        communicationStyle: 'Frank and detailed. Roosters speak their mind directly and thoroughly. They appreciate precision and may be critical.',
        strengths: ['Honest', 'Bright', 'Communicative', 'Ambitious', 'Capable'],
        challenges: ['Vain', 'Arrogant', 'Critical', 'Sensitive', 'Narrow-minded']
      },
      {
        id: 'dog',
        name: 'Dog',
        symbol: '🐕',
        description: 'Loyal, honest, and faithful. Dogs are devoted friends who value justice and loyalty.',
        communicationStyle: 'Sincere and direct. Dogs say what they mean and mean what they say. They value honest, straightforward exchanges.',
        strengths: ['Loyal', 'Honest', 'Faithful', 'Courageous', 'Responsible'],
        challenges: ['Anxious', 'Pessimistic', 'Stubborn', 'Sensitive', 'Judgmental']
      },
      {
        id: 'pig',
        name: 'Pig',
        symbol: '🐷',
        description: 'Generous, compassionate, and diligent. Pigs are kind-hearted souls who enjoy life.',
        communicationStyle: 'Warm and sincere. Pigs are good listeners who make others feel comfortable. They are trusting and open.',
        strengths: ['Compassionate', 'Generous', 'Diligent', 'Sociable', 'Trusting'],
        challenges: ['Naive', 'Over-reliant', 'Self-indulgent', 'Gullible', 'Materialistic']
      }
    ]
  },
  {
    id: 'enneagram',
    name: 'Enneagram',
    icon: 'Hexagon',
    color: '#06b6d4',
    gradient: ['#0891b2', '#0e7490'],
    description: 'A system of nine interconnected personality types that describes patterns in how people interpret the world and manage their emotions.',
    types: [
      {
        id: 'type1',
        name: 'The Perfectionist',
        symbol: '1',
        description: 'Principled, purposeful, self-controlled, and perfectionistic. Ones strive to improve everything and fear being flawed.',
        communicationStyle: 'Precise and principled. Ones communicate with clarity and expect high standards. They appreciate thoroughness and correctness.',
        strengths: ['Ethical', 'Reliable', 'Productive', 'Wise', 'Idealistic'],
        challenges: ['Critical', 'Rigid', 'Judgmental', 'Impatient', 'Worrying']
      },
      {
        id: 'type2',
        name: 'The Helper',
        symbol: '2',
        description: 'Generous, demonstrative, people-pleasing, and possessive. Twos want to be loved and needed.',
        communicationStyle: 'Warm and supportive. Twos communicate with care and attention to others\' needs. They offer help readily.',
        strengths: ['Caring', 'Generous', 'Warm', 'Supportive', 'Adaptable'],
        challenges: ['Possessive', 'Intrusive', 'Manipulative', 'Needy', 'Martyr-like']
      },
      {
        id: 'type3',
        name: 'The Achiever',
        symbol: '3',
        description: 'Adaptable, success-oriented, image-conscious, and competitive. Threes want to be admired and stand out.',
        communicationStyle: 'Efficient and impressive. Threes communicate with confidence and focus on results. They adapt their style to their audience.',
        strengths: ['Ambitious', 'Energetic', 'Charming', 'Confident', 'Efficient'],
        challenges: ['Image-conscious', 'Workaholic', 'Competitive', 'Superficial', 'Deceptive']
      },
      {
        id: 'type4',
        name: 'The Individualist',
        symbol: '4',
        description: 'Expressive, dramatic, self-absorbed, and temperamental. Fours want to be unique and understood.',
        communicationStyle: 'Deep and personal. Fours communicate emotionally and authentically. They seek meaningful connections.',
        strengths: ['Creative', 'Authentic', 'Intuitive', 'Compassionate', 'Expressive'],
        challenges: ['Moody', 'Self-absorbed', 'Envious', 'Dramatic', 'Withdrawn']
      },
      {
        id: 'type5',
        name: 'The Investigator',
        symbol: '5',
        description: 'Perceptive, innovative, secretive, and isolated. Fives want to understand the world.',
        communicationStyle: 'Thoughtful and precise. Fives prefer intellectual conversations and need time to process. They value expertise.',
        strengths: ['Perceptive', 'Innovative', 'Objective', 'Curious', 'Insightful'],
        challenges: ['Detached', 'Isolated', 'Secretive', 'Provocative', 'Miserly']
      },
      {
        id: 'type6',
        name: 'The Loyalist',
        symbol: '6',
        description: 'Committed, security-oriented, anxious, and suspicious. Sixes seek safety and support.',
        communicationStyle: 'Questioning and thorough. Sixes ask many questions to understand fully. They value reliability and trust.',
        strengths: ['Loyal', 'Responsible', 'Trustworthy', 'Hardworking', 'Engaging'],
        challenges: ['Anxious', 'Suspicious', 'Indecisive', 'Reactive', 'Defensive']
      },
      {
        id: 'type7',
        name: 'The Enthusiast',
        symbol: '7',
        description: 'Spontaneous, versatile, scattered, and acquisitive. Sevens want to be happy and avoid pain.',
        communicationStyle: 'Upbeat and fast-paced. Sevens are engaging storytellers who jump between topics. They keep things light.',
        strengths: ['Optimistic', 'Versatile', 'Spontaneous', 'Playful', 'Practical'],
        challenges: ['Scattered', 'Uncommitted', 'Impatient', 'Escapist', 'Self-centered']
      },
      {
        id: 'type8',
        name: 'The Challenger',
        symbol: '8',
        description: 'Self-confident, decisive, confrontational, and dominating. Eights want to be in control.',
        communicationStyle: 'Direct and powerful. Eights say what they think without softening. They respect strength and honesty.',
        strengths: ['Strong', 'Protective', 'Decisive', 'Confident', 'Resourceful'],
        challenges: ['Dominating', 'Confrontational', 'Intimidating', 'Insensitive', 'Vengeful']
      },
      {
        id: 'type9',
        name: 'The Peacemaker',
        symbol: '9',
        description: 'Receptive, reassuring, complacent, and resigned. Nines seek inner and outer peace.',
        communicationStyle: 'Calming and agreeable. Nines are good listeners who avoid conflict. They may struggle to express their own needs.',
        strengths: ['Peaceful', 'Easygoing', 'Accepting', 'Supportive', 'Patient'],
        challenges: ['Passive', 'Stubborn', 'Complacent', 'Disengaged', 'Self-forgetting']
      }
    ]
  },
  {
    id: 'lovelang',
    name: 'Love Languages',
    icon: 'Heart',
    color: '#ec4899',
    gradient: ['#db2777', '#be185d'],
    description: 'The five love languages describe five ways that people express and experience love. Understanding these helps create deeper connections.',
    types: [
      {
        id: 'words',
        name: 'Words of Affirmation',
        symbol: '💬',
        description: 'People with this love language value verbal acknowledgments including compliments, expressions of appreciation, and verbal encouragement. They thrive on hearing that they matter, that they\'re doing well, and that they\'re loved.',
        communicationStyle: 'Express appreciation verbally and often. Compliments, love notes, and verbal affirmations deeply resonate. Say what you mean and mean what you say.',
        strengths: ['Encouraging', 'Expressive', 'Appreciative', 'Articulate', 'Supportive'],
        challenges: ['Hurt by criticism', 'Need constant reassurance', 'Take words literally', 'Sensitive to tone', 'May seek validation'],
        partnershipInsights: 'As a partner, Words of Affirmation people bring genuine encouragement and verbal support to the relationship. They celebrate their partner\'s achievements and aren\'t shy about expressing pride and admiration. They build confidence through consistent compliments and verbal appreciation. They make partners feel genuinely valued through the power of their words.',
        loverInsights: 'As a lover, Words of Affirmation people use verbal expression to heighten intimacy. They love pillow talk, expressing desire through words, and hearing their partner\'s appreciation. Dirty talk and verbal enthusiasm deeply arouse them. They want to hear how attractive and desirable they are throughout intimacy.'
      },
      {
        id: 'acts',
        name: 'Acts of Service',
        symbol: '🤝',
        description: 'Actions speak louder than words for these people. They feel loved when others do helpful things for them. It\'s not about perfection—it\'s about effort and thoughtfulness removing obstacles from their life.',
        communicationStyle: 'Show love through actions and helpfulness. Pitch in without being asked. Follow through on commitments. Show you care by making their life easier.',
        strengths: ['Helpful', 'Responsible', 'Practical', 'Thoughtful', 'Action-oriented'],
        challenges: ['May feel unloved without help', 'Can become resentful', 'Overwhelmed by laziness', 'Difficulty asking for help', 'May feel taken for granted'],
        partnershipInsights: 'As a partner, Acts of Service people express love through tangible help and removing life\'s burdens. They wake up early to make breakfast, handle the stressful tasks, and show care through consistent action. They prove devotion through reliability and follow-through. They make partners feel cared for through thoughtful service.',
        loverInsights: 'As a lover, Acts of Service people approach intimacy as a form of caring action. They love preparing the bedroom, setting the mood through thoughtful gestures, and physically expressing care through touch. Service during intimacy—prioritizing their partner\'s pleasure—is deeply arousing to them. They show love through attentive, generous physical care.'
      },
      {
        id: 'gifts',
        name: 'Receiving Gifts',
        symbol: '🎁',
        description: 'Gift giving and receiving is a meaningful expression of love. It\'s the thought and effort that counts, not the price. Gifts are visual symbols of love—a tangible reminder that they were remembered and thought of.',
        communicationStyle: 'Show thoughtfulness through meaningful gifts. Remember special occasions. The gesture matters more than the cost. Give gifts that show you understand them.',
        strengths: ['Thoughtful', 'Generous', 'Symbolic', 'Celebratory', 'Appreciative'],
        challenges: ['May seem materialistic', 'Hurt by forgotten occasions', 'Can overvalue objects', 'May keep score', 'Disappointed by generic gifts'],
        partnershipInsights: 'As a partner, Receiving Gifts people show their love through thoughtful gift-giving that demonstrates genuine understanding. Gifts represent time and attention spent thinking about their partner\'s needs and desires. They remember important dates and create meaningful moments through symbolic presents. They make partners feel cherished through the language of thoughtful gift-giving.',
        loverInsights: 'As a lover, Receiving Gifts people appreciate intimate gifts and symbolic gestures before and after physical intimacy. Luxurious items, romantic gifts, and tokens of desire deeply affect their arousal. They love partners who invest in the romantic experience—special lingerie, sensual products, or meaningful symbols of sexual commitment. Gifts create emotional connection that enhances physical intimacy.'
      },
      {
        id: 'time',
        name: 'Quality Time',
        symbol: '⏰',
        description: 'Full, undivided attention is the most profound expression of love. Being fully present matters most. It\'s about giving someone your full focus and making them feel like they\'re the most important thing in your world.',
        communicationStyle: 'Give undivided attention. Put away distractions. Engage in meaningful activities together. Show through presence that they matter deeply to you.',
        strengths: ['Present', 'Attentive', 'Good listeners', 'Create memories', 'Value connection'],
        challenges: ['Hurt by distractions', 'Need lots of togetherness', 'May feel neglected', 'Sensitive to postponements', 'Require focused attention'],
        partnershipInsights: 'As a partner, Quality Time people show love through undivided presence and shared experiences. They create meaningful moments through genuine conversation, eye contact, and active listening. They prioritize spending real time together without distractions. They make partners feel genuinely seen and valued through the gift of their full attention.',
        loverInsights: 'As a lover, Quality Time people need presence and connection during intimacy. They want eye contact, emotional engagement, and full presence from their partner. Distracted or rushed intimacy feels rejecting to them. Slow, connected sex where partners truly focus on each other is what turns them on—quality over speed. Intimate moments are sacred connection time.'
      },
      {
        id: 'touch',
        name: 'Physical Touch',
        symbol: '🤗',
        description: 'Physical expressions of love like hugging, holding hands, and thoughtful touches feel deeply meaningful. Touch is their primary language—it communicates comfort, security, desire, and connection in ways words cannot.',
        communicationStyle: 'Express affection through appropriate physical touch. Hugs, pats, hand-holding, and physical presence communicate love. Prioritize physical connection in all interactions.',
        strengths: ['Affectionate', 'Comforting', 'Warm', 'Physical presence', 'Nurturing'],
        challenges: ['Feel unloved without touch', 'May be clingy', 'Physical distance is painful', 'Need regular affection', 'Touch deprivation affects mood'],
        partnershipInsights: 'As a partner, Physical Touch people show and receive love through physical affection. Hand-holding, hugs, back rubs, and casual touching throughout the day communicate constant love. They need regular physical contact to feel secure and valued. They make partners feel loved through the language of touch.',
        loverInsights: 'As a lover, Physical Touch people are highly sensual and tactile. Touch is the primary way they both express and receive desire. They love prolonged foreplay, sensual massage, skin-to-skin contact, and constant physical connection during intimacy. Physical affection before, during, and after sex is essential to them. They\'re naturally generous with touch and crave reciprocal physical affection.'
      }
    ]
  },
  {
    id: 'mbti',
    name: 'MBTI',
    icon: 'Brain',
    color: '#f59e0b',
    gradient: ['#d97706', '#b45309'],
    description: 'The Myers-Briggs Type Indicator identifies 16 personality types based on preferences in four dimensions: energy, information, decisions, and lifestyle.',
    types: [
      {
        id: 'intj',
        name: 'INTJ - Architect',
        symbol: '🏛️',
        description: 'Strategic thinkers with a plan for everything. Imaginative, ambitious, and private.',
        communicationStyle: 'Direct and logical. INTJs prefer efficiency and depth. They value competence and intellectual discourse.',
        strengths: ['Strategic', 'Independent', 'Decisive', 'Hardworking', 'Determined'],
        challenges: ['Arrogant', 'Dismissive', 'Overly critical', 'Combative', 'Romantically clueless']
      },
      {
        id: 'intp',
        name: 'INTP - Thinker',
        symbol: '🔬',
        description: 'Innovative inventors with an unquenchable thirst for knowledge. Logical and original.',
        communicationStyle: 'Abstract and precise. INTPs enjoy exploring ideas and theories. They prefer logic over emotion.',
        strengths: ['Analytical', 'Original', 'Open-minded', 'Curious', 'Objective'],
        challenges: ['Insensitive', 'Condescending', 'Absent-minded', 'Perfectionist', 'Socially awkward']
      },
      {
        id: 'entj',
        name: 'ENTJ - Commander',
        symbol: '👑',
        description: 'Bold, imaginative leaders who find or make a way. Natural commanders.',
        communicationStyle: 'Decisive and confident. ENTJs take charge of conversations and drive toward goals.',
        strengths: ['Efficient', 'Energetic', 'Self-confident', 'Strong-willed', 'Strategic'],
        challenges: ['Stubborn', 'Intolerant', 'Impatient', 'Arrogant', 'Ruthless']
      },
      {
        id: 'entp',
        name: 'ENTP - Debater',
        symbol: '⚡',
        description: 'Smart and curious thinkers who love intellectual challenges.',
        communicationStyle: 'Witty and argumentative. ENTPs enjoy debates and can argue any side. Quick-thinking.',
        strengths: ['Knowledgeable', 'Quick thinker', 'Original', 'Charismatic', 'Energetic'],
        challenges: ['Argumentative', 'Insensitive', 'Intolerant', 'Unfocused', 'Dislike routines']
      },
      {
        id: 'infj',
        name: 'INFJ - Advocate',
        symbol: '🌟',
        description: 'Quiet and mystical, yet inspiring idealists. Rare and complex.',
        communicationStyle: 'Thoughtful and meaningful. INFJs prefer deep conversations about ideas and feelings.',
        strengths: ['Creative', 'Insightful', 'Principled', 'Passionate', 'Altruistic'],
        challenges: ['Sensitive', 'Perfectionistic', 'Private', 'Avoiding conflict', 'Burnout prone']
      },
      {
        id: 'infp',
        name: 'INFP - Mediator',
        symbol: '🦋',
        description: 'Poetic, kind and altruistic souls, always eager to help a good cause.',
        communicationStyle: 'Gentle and authentic. INFPs communicate with warmth and seek genuine connection.',
        strengths: ['Idealistic', 'Empathetic', 'Open-minded', 'Creative', 'Passionate'],
        challenges: ['Unrealistic', 'Self-isolating', 'Unfocused', 'Emotionally vulnerable', 'Desperate to please']
      },
      {
        id: 'enfj',
        name: 'ENFJ - Protagonist',
        symbol: '🎭',
        description: 'Charismatic and inspiring leaders who mesmerize their listeners.',
        communicationStyle: 'Warm and persuasive. ENFJs are natural communicators who inspire and motivate.',
        strengths: ['Tolerant', 'Reliable', 'Charismatic', 'Altruistic', 'Natural leaders'],
        challenges: ['Overly idealistic', 'Condescending', 'Intense', 'Fluctuating self-esteem', 'Struggle with decisions']
      },
      {
        id: 'enfp',
        name: 'ENFP - Campaigner',
        symbol: '🎪',
        description: 'Enthusiastic, creative free spirits who find reason to smile.',
        communicationStyle: 'Energetic and imaginative. ENFPs love brainstorming and emotional sharing.',
        strengths: ['Curious', 'Observant', 'Energetic', 'Enthusiastic', 'Friendly'],
        challenges: ['Poor focus', 'Overthinking', 'Emotional', 'Independent to a fault', 'Restless']
      },
      {
        id: 'istj',
        name: 'ISTJ - Logistician',
        symbol: '📋',
        description: 'Practical and fact-minded individuals whose reliability is unmatched.',
        communicationStyle: 'Clear and factual. ISTJs prefer straightforward, practical conversations.',
        strengths: ['Honest', 'Direct', 'Strong-willed', 'Dutiful', 'Responsible'],
        challenges: ['Stubborn', 'Insensitive', 'Judgmental', 'Rigid', 'Blame-prone']
      },
      {
        id: 'isfj',
        name: 'ISFJ - Defender',
        symbol: '🛡️',
        description: 'Dedicated and warm protectors, always ready to defend loved ones.',
        communicationStyle: 'Supportive and practical. ISFJs listen well and offer concrete help.',
        strengths: ['Supportive', 'Reliable', 'Patient', 'Observant', 'Enthusiastic'],
        challenges: ['Shy', 'Take things personally', 'Overload themselves', 'Reluctant to change', 'Too selfless']
      },
      {
        id: 'estj',
        name: 'ESTJ - Executive',
        symbol: '💼',
        description: 'Excellent administrators, unsurpassed at managing things or people.',
        communicationStyle: 'Direct and organized. ESTJs communicate with authority and clarity.',
        strengths: ['Dedicated', 'Strong-willed', 'Direct', 'Honest', 'Loyal'],
        challenges: ['Inflexible', 'Uncomfortable with unconventional', 'Judgmental', 'Stubborn', 'Difficulty relaxing']
      },
      {
        id: 'esfj',
        name: 'ESFJ - Consul',
        symbol: '🤝',
        description: 'Extraordinarily caring, social and popular people, eager to help.',
        communicationStyle: 'Warm and inclusive. ESFJs ensure everyone is heard and comfortable.',
        strengths: ['Strong practical skills', 'Loyal', 'Sensitive', 'Warm', 'Connecting with others'],
        challenges: ['Worried about status', 'Inflexible', 'Vulnerable to criticism', 'Needy', 'Selfless to a fault']
      },
      {
        id: 'istp',
        name: 'ISTP - Virtuoso',
        symbol: '🔧',
        description: 'Bold and practical experimenters, masters of tools.',
        communicationStyle: 'Reserved and factual. ISTPs prefer action over lengthy discussions.',
        strengths: ['Optimistic', 'Creative', 'Practical', 'Spontaneous', 'Rational'],
        challenges: ['Stubborn', 'Insensitive', 'Private', 'Easily bored', 'Risk-prone']
      },
      {
        id: 'isfp',
        name: 'ISFP - Adventurer',
        symbol: '🎨',
        description: 'Flexible and charming artists, always ready to explore.',
        communicationStyle: 'Gentle and observant. ISFPs express themselves through actions and creativity.',
        strengths: ['Charming', 'Sensitive', 'Imaginative', 'Passionate', 'Curious'],
        challenges: ['Fiercely independent', 'Unpredictable', 'Easily stressed', 'Overly competitive', 'Fluctuating self-esteem']
      },
      {
        id: 'estp',
        name: 'ESTP - Entrepreneur',
        symbol: '🎯',
        description: 'Smart, energetic and perceptive people who truly enjoy living on the edge.',
        communicationStyle: 'Direct and dynamic. ESTPs are action-oriented and persuasive.',
        strengths: ['Bold', 'Rational', 'Practical', 'Original', 'Perceptive'],
        challenges: ['Insensitive', 'Impatient', 'Risk-prone', 'Unstructured', 'Defiant']
      },
      {
        id: 'esfp',
        name: 'ESFP - Entertainer',
        symbol: '🎉',
        description: 'Spontaneous, energetic, and enthusiastic entertainers who love life.',
        communicationStyle: 'Lively and engaging. ESFPs bring energy and fun to every conversation.',
        strengths: ['Bold', 'Original', 'Aesthetic', 'Practical', 'Observant'],
        challenges: ['Sensitive', 'Conflict-averse', 'Easily bored', 'Unfocused', 'Poor long-term planning']
      }
    ]
  },
  {
    id: 'bazi',
    name: 'BaZi',
    icon: 'Compass',
    color: '#10b981',
    gradient: ['#047857', '#065f46'],
    description: 'BaZi, also called the Four Pillars of Destiny, reads the year, month, day, and hour of your birth. This guide uses your Day Master, the heavenly stem of your birth day, which describes your core nature through the five elements and yin and yang. A free BaZi calculator will show you yours.',
    types: [
      {
        id: 'jia',
        name: 'Yang Wood (Jia)',
        symbol: '甲',
        description: 'Upright, ambitious, and principled. Like a tall tree, Yang Wood grows steadily toward its goals and offers shelter to others.',
        communicationStyle: 'Direct and honest. Yang Wood says what it believes and expects the same in return. They prefer clear plans and meaningful goals over small talk, and can be slow to bend on a point.',
        strengths: ['Principled', 'Ambitious', 'Confident', 'Protective', 'Honest'],
        challenges: ['Stubborn', 'Inflexible', 'Proud', 'Overly serious', 'Hard to persuade'],
        partnershipInsights: 'As a partner, Yang Wood is loyal, protective, and committed to building a future together. They lead by example and want a relationship with shared direction and integrity. They make steady, dependable partners who grow alongside the people they love.',
        loverInsights: 'As a lover, Yang Wood is warm, sincere, and quietly intense. They show desire through devotion and attention rather than flash, and they value trust before vulnerability. They make faithful, generous lovers who want intimacy that feels honest and lasting.'
      },
      {
        id: 'yi',
        name: 'Yin Wood (Yi)',
        symbol: '乙',
        description: 'Graceful, flexible, and resourceful. Like a vine or flower, Yin Wood bends without breaking and finds a way around any obstacle.',
        communicationStyle: 'Gentle and diplomatic. Yin Wood reads the room, softens hard messages, and looks for common ground. They may hint at a hard truth instead of saying it outright.',
        strengths: ['Graceful', 'Adaptable', 'Charming', 'Diplomatic', 'Resilient'],
        challenges: ['Indecisive', 'Clingy', 'Conflict-avoidant', 'Easily influenced', 'Anxious'],
        partnershipInsights: 'As a partner, Yin Wood is attentive, supportive, and good at keeping the peace. They adapt to their partner\'s needs and make home feel warm and welcoming. They make caring, cooperative partners who thrive when they feel secure and appreciated.',
        loverInsights: 'As a lover, Yin Wood is tender, romantic, and sensitive to mood. They enjoy gentle affection, thoughtful gestures, and a relaxed pace that builds connection. They make attentive, affectionate lovers who respond beautifully to reassurance.'
      },
      {
        id: 'bing',
        name: 'Yang Fire (Bing)',
        symbol: '丙',
        description: 'Radiant, generous, and optimistic. Like the sun, Yang Fire lights up a room and wants everyone to feel included.',
        communicationStyle: 'Warm and expressive. Yang Fire speaks openly, tells stories, and lifts the mood. They are honest about their feelings and may talk before thinking things through.',
        strengths: ['Radiant', 'Generous', 'Confident', 'Optimistic', 'Inspiring'],
        challenges: ['Impulsive', 'Impatient', 'Attention-seeking', 'Prone to burnout', 'Careless with details'],
        partnershipInsights: 'As a partner, Yang Fire is loving, loyal, and openly affectionate. They celebrate their partner in public and bring joy to ordinary days. They make enthusiastic, generous partners who need appreciation in return.',
        loverInsights: 'As a lover, Yang Fire is passionate, playful, and confident. They enjoy visible desire, laughter, and spontaneous romance. They make warm, energetic lovers who want their partner to feel wanted and adored.'
      },
      {
        id: 'ding',
        name: 'Yin Fire (Ding)',
        symbol: '丁',
        description: 'Warm, perceptive, and refined. Like a candle flame, Yin Fire gives focused light and comfort to those close by.',
        communicationStyle: 'Intimate and insightful. Yin Fire prefers one-on-one conversation and notices what others miss. They speak thoughtfully, and may go quiet when hurt rather than say so.',
        strengths: ['Warm', 'Perceptive', 'Intuitive', 'Focused', 'Refined'],
        challenges: ['Moody', 'Brooding', 'Sensitive to criticism', 'Possessive', 'Slow to forgive'],
        partnershipInsights: 'As a partner, Yin Fire is devoted, attentive, and emotionally aware. They notice small needs and respond with care, and they invest deeply in the few people they choose. They make loyal, caring partners who want closeness and trust.',
        loverInsights: 'As a lover, Yin Fire is sensual, intuitive, and intense. They love private, focused intimacy and a partner who is fully present. They make deeply attuned lovers who turn quiet moments into something memorable.'
      },
      {
        id: 'wu',
        name: 'Yang Earth (Wu)',
        symbol: '戊',
        description: 'Steady, trustworthy, and strong. Like a mountain, Yang Earth is a reliable presence that others lean on.',
        communicationStyle: 'Calm and measured. Yang Earth listens before speaking and keeps promises. They prefer practical talk and can be slow to share feelings or change their mind.',
        strengths: ['Steady', 'Reliable', 'Capable', 'Protective', 'Patient'],
        challenges: ['Stubborn', 'Reserved', 'Slow to change', 'Overly cautious', 'Dismissive of feelings'],
        partnershipInsights: 'As a partner, Yang Earth is solid, protective, and committed for the long haul. They provide security and keep their word, and they show love through steady action. They make dependable partners who create a safe home base.',
        loverInsights: 'As a lover, Yang Earth is warm, grounded, and steady. They take time to open up, but once trust is built they are affectionate and generous. They make patient, devoted lovers who value comfort and reliability.'
      },
      {
        id: 'ji',
        name: 'Yin Earth (Ji)',
        symbol: '己',
        description: 'Nurturing, practical, and humble. Like fertile garden soil, Yin Earth helps people and projects grow.',
        communicationStyle: 'Considerate and supportive. Yin Earth listens closely and offers practical help. They may downplay their own needs and need encouragement to speak up.',
        strengths: ['Nurturing', 'Practical', 'Dependable', 'Adaptable', 'Humble'],
        challenges: ['Anxious', 'Self-doubting', 'Overgiving', 'Indirect', 'Overthinking'],
        partnershipInsights: 'As a partner, Yin Earth is caring, attentive, and quietly devoted. They look after the details of shared life and make their partner feel looked after. They make supportive partners who flourish when their effort is noticed.',
        loverInsights: 'As a lover, Yin Earth is gentle, affectionate, and responsive. They show desire through care and closeness, and they relax most when they feel safe and appreciated. They make tender, giving lovers who value emotional security.'
      },
      {
        id: 'geng',
        name: 'Yang Metal (Geng)',
        symbol: '庚',
        description: 'Decisive, courageous, and fair-minded. Like raw steel or a sword, Yang Metal cuts through confusion and defends what is right.',
        communicationStyle: 'Blunt and efficient. Yang Metal gets to the point and values loyalty and clear commitments. They can sound harsh without meaning to, and respect people who answer plainly.',
        strengths: ['Decisive', 'Courageous', 'Confident', 'Loyal', 'Fair'],
        challenges: ['Blunt', 'Rigid', 'Competitive', 'Quick to anger', 'Guarded'],
        partnershipInsights: 'As a partner, Yang Metal is loyal, protective, and direct. They defend their people and keep commitments, and they want honesty above all. They make strong, faithful partners who show love through action and loyalty.',
        loverInsights: 'As a lover, Yang Metal is confident, intense, and straightforward. They say what they want and appreciate a partner who does the same. They make bold, committed lovers who bring strength and focus to intimacy.'
      },
      {
        id: 'xin',
        name: 'Yin Metal (Xin)',
        symbol: '辛',
        description: 'Refined, perceptive, and discerning. Like a polished jewel, Yin Metal values quality, beauty, and high standards.',
        communicationStyle: 'Articulate and precise. Yin Metal chooses words carefully and notices flaws quickly. They appreciate respect and can come across as critical or sharp-tongued.',
        strengths: ['Refined', 'Articulate', 'Elegant', 'Perceptive', 'Discerning'],
        challenges: ['Critical', 'Perfectionistic', 'Thin-skinned', 'Vain', 'Hard to please'],
        partnershipInsights: 'As a partner, Yin Metal is loyal, thoughtful, and attentive to the little things. They care about making the relationship beautiful and meaningful, and they hold high standards for it. They make devoted, elegant partners who need to feel valued and respected.',
        loverInsights: 'As a lover, Yin Metal is sensual, selective, and romantic. They love atmosphere, detail, and a partner who makes an effort. They make passionate, discerning lovers who reward care and attention.'
      },
      {
        id: 'ren',
        name: 'Yang Water (Ren)',
        symbol: '壬',
        description: 'Free-flowing, intelligent, and adventurous. Like a great river or ocean, Yang Water is expansive and always moving.',
        communicationStyle: 'Open-minded and wide-ranging. Yang Water enjoys big ideas, travel, and lively debate. They adapt quickly to new topics but may avoid settling on one point.',
        strengths: ['Intelligent', 'Adventurous', 'Free-spirited', 'Adaptable', 'Resourceful'],
        challenges: ['Restless', 'Scattered', 'Commitment-shy', 'Overwhelming', 'Emotionally distant'],
        partnershipInsights: 'As a partner, Yang Water is generous, curious, and fun. They bring variety and big-picture thinking and give their partner plenty of room to be themselves. They make exciting, easygoing partners who need freedom to feel committed.',
        loverInsights: 'As a lover, Yang Water is adventurous, fluid, and open to new experiences. They enjoy exploring together and keep intimacy fresh. They make imaginative, passionate lovers who thrive on variety and trust.'
      },
      {
        id: 'gui',
        name: 'Yin Water (Gui)',
        symbol: '癸',
        description: 'Intuitive, empathic, and imaginative. Like rain or morning mist, Yin Water works quietly and sees what lies beneath the surface.',
        communicationStyle: 'Soft-spoken and perceptive. Yin Water picks up on unspoken feelings and prefers quiet, private conversation. They may keep their thoughts to themselves until they feel safe.',
        strengths: ['Intuitive', 'Empathic', 'Imaginative', 'Gentle', 'Wise'],
        challenges: ['Secretive', 'Moody', 'Oversensitive', 'Withdrawn', 'Easily drained'],
        partnershipInsights: 'As a partner, Yin Water is deeply caring, intuitive, and emotionally attuned. They sense their partner\'s mood and offer quiet comfort and insight. They make loyal, empathic partners who need gentleness and patience.',
        loverInsights: 'As a lover, Yin Water is dreamy, sensitive, and deeply responsive. They love emotional closeness that flows into physical connection and need a safe, unhurried setting. They make intuitive, romantic lovers who create deep and tender intimacy.'
      }
    ]
  }
];

export function getCompatibilityResult(
  framework: Framework,
  yourType: string,
  theirType: string
): CompatibilityResult {
  const yourPersonality = framework.types.find(t => t.id === yourType);
  const theirPersonality = framework.types.find(t => t.id === theirType);

  if (!yourPersonality || !theirPersonality) {
    return {
      overallScore: 0,
      communicationTips: [],
      intimacyInsights: [],
      loverInsights: [],
      challenges: [],
      strengths: [],
      hisInsights: [],
      herInsights: []
    };
  }

  // Generate a consistent score based on type combination
  const combinedIds = [yourType, theirType].sort().join('-');
  let hash = 0;
  for (let i = 0; i < combinedIds.length; i++) {
    const char = combinedIds.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  const score = 60 + Math.abs(hash % 35); // Score between 60-95

  const isSameType = yourType === theirType;

  const communicationTips = isSameType
    ? [
        `You share the same ${framework.name} type, which creates instant understanding.`,
        `Be mindful of shared blind spots - you may reinforce each other's challenges.`,
        `Use your mutual understanding to build deeper trust.`,
        `Remember to appreciate your partner's unique expression of your shared type.`
      ]
    : [
        `Appreciate that ${theirPersonality.name} communicates differently: ${theirPersonality.communicationStyle.split('.')[0]}.`,
        `When they seem ${theirPersonality.challenges[0].toLowerCase()}, remember it comes from their core nature.`,
        `Lead with their strengths: they are naturally ${theirPersonality.strengths.slice(0, 2).join(' and ').toLowerCase()}.`,
        `Avoid triggering their sensitivities around ${theirPersonality.challenges[1].toLowerCase()}.`
      ];

  const intimacyInsights = isSameType
    ? [
        `Same-type couples often experience profound understanding in intimate moments.`,
        `You intuitively know each other's needs and rhythms.`,
        `Watch for falling into routines - keep surprising each other.`,
        `Your shared ${yourPersonality.strengths[0].toLowerCase()} nature creates a safe space for vulnerability.`
      ]
    : [
        `Your ${yourPersonality.name} approach meets their ${theirPersonality.name} energy in fascinating ways.`,
        `They express intimacy through their ${theirPersonality.strengths[0].toLowerCase()} nature.`,
        `Create space for their need to feel ${theirPersonality.strengths[2].toLowerCase()}.`,
        `Your differences can create exciting polarity when embraced with curiosity.`
      ];

  const challenges = isSameType
    ? [
        `You may amplify each other's ${yourPersonality.challenges[0].toLowerCase()} tendencies.`,
        `Both being ${yourPersonality.challenges[1].toLowerCase()} can create standoffs.`,
        `Remember to grow beyond your comfort zone together.`
      ]
    : [
        `Your ${yourPersonality.challenges[0].toLowerCase()} may clash with their ${theirPersonality.challenges[0].toLowerCase()}.`,
        `They might perceive your ${yourPersonality.strengths[0].toLowerCase()} as threatening.`,
        `Different communication rhythms may require patience.`
      ];

  const strengths = isSameType
    ? [
        `Deep mutual understanding and acceptance.`,
        `Shared values around being ${yourPersonality.strengths.slice(0, 2).join(' and ').toLowerCase()}.`,
        `Natural empathy for each other's experiences.`
      ]
    : [
        `Your ${yourPersonality.strengths[0].toLowerCase()} balances their ${theirPersonality.strengths[0].toLowerCase()}.`,
        `They can help you grow in areas of ${theirPersonality.strengths[1].toLowerCase()}.`,
        `Together you cover each other's blind spots.`
      ];

  return {
    overallScore: score,
    communicationTips,
    intimacyInsights,
    loverInsights: [],
    challenges,
    strengths,
    hisInsights: [],
    herInsights: []
  };
}

export function getGenderedCompatibilityResult(
  framework: Framework,
  hisType: string,
  herType: string
): CompatibilityResult {
  const hisPersonality = framework.types.find(t => t.id === hisType);
  const herPersonality = framework.types.find(t => t.id === herType);

  if (!hisPersonality || !herPersonality) {
    return {
      overallScore: 0,
      communicationTips: [],
      intimacyInsights: [],
      loverInsights: [],
      challenges: [],
      strengths: [],
      hisInsights: [],
      herInsights: []
    };
  }

  // Generate a consistent score based on type combination
  const combinedIds = [hisType, herType].sort().join('-');
  let hash = 0;
  for (let i = 0; i < combinedIds.length; i++) {
    const char = combinedIds.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  const score = 60 + Math.abs(hash % 35);

  const isSameType = hisType === herType;

  // His-specific insights (how he expresses this type)
  const hisInsights = isSameType
    ? [
        `As a ${hisPersonality.name} man, he expresses the ${hisPersonality.strengths[0].toLowerCase()} nature through action and protection.`,
        `He may show his ${hisPersonality.strengths[1].toLowerCase()} side less openly, but it runs deep.`,
        `His ${hisPersonality.challenges[0].toLowerCase()} tendencies may surface when he feels his role is challenged.`,
        `He needs space to process emotions in his own ${hisPersonality.name} way.`
      ]
    : [
        `As a ${hisPersonality.name} man, he leads with ${hisPersonality.strengths[0].toLowerCase()} energy.`,
        `His masculine expression of ${hisPersonality.name} makes him naturally ${hisPersonality.strengths[1].toLowerCase()}.`,
        `He may struggle to express vulnerability due to his ${hisPersonality.challenges[0].toLowerCase()} nature.`,
        `He shows love through actions aligned with his ${hisPersonality.strengths[2].toLowerCase()} traits.`
      ];

  // Her-specific insights (how she expresses this type)
  const herInsights = isSameType
    ? [
        `As a ${herPersonality.name} woman, she expresses the ${herPersonality.strengths[0].toLowerCase()} nature through nurturing and intuition.`,
        `She openly embraces her ${herPersonality.strengths[1].toLowerCase()} qualities.`,
        `Her ${herPersonality.challenges[0].toLowerCase()} tendencies may appear when she feels emotionally unsafe.`,
        `She needs emotional validation to feel secure in the relationship.`
      ]
    : [
        `As a ${herPersonality.name} woman, she radiates ${herPersonality.strengths[0].toLowerCase()} energy.`,
        `Her feminine expression of ${herPersonality.name} makes her naturally ${herPersonality.strengths[1].toLowerCase()}.`,
        `She may need reassurance when her ${herPersonality.challenges[0].toLowerCase()} side emerges.`,
        `She shows love through emotional connection and her ${herPersonality.strengths[2].toLowerCase()} nature.`
      ];

  const communicationTips = isSameType
    ? [
        `You share the same ${framework.name} type, creating deep understanding.`,
        `He may express it more externally, she more internally - honor both.`,
        `Use your shared language to resolve conflicts quickly.`,
        `Appreciate how differently the same type can manifest in him vs her.`
      ]
    : [
        `His ${hisPersonality.name} directness meets her ${herPersonality.name} approach - find the balance.`,
        `She needs him to understand: ${herPersonality.communicationStyle.split('.')[0]}.`,
        `He needs her to know: ${hisPersonality.communicationStyle.split('.')[0]}.`,
        `Bridge the gap by leading with each other's strengths.`
      ];

  const intimacyInsights = isSameType
    ? [
        `Same-type couples have natural chemistry once they understand gender expression differences.`,
        `He brings the masculine ${hisPersonality.strengths[0].toLowerCase()} energy to intimacy.`,
        `She brings the feminine ${herPersonality.strengths[0].toLowerCase()} energy to intimacy.`,
        `Together, you create a dynamic polarity within shared understanding.`
      ]
    : [
        `His ${hisPersonality.name} passion meets her ${herPersonality.name} receptivity in powerful ways.`,
        `He craves ${hisPersonality.strengths[2].toLowerCase()} expressions of desire.`,
        `She needs to feel ${herPersonality.strengths[2].toLowerCase()} to fully open up.`,
        `Create space for both his assertive and her receptive energies.`
      ];

  const challenges = isSameType
    ? [
        `His ${hisPersonality.challenges[0].toLowerCase()} may clash with her ${herPersonality.challenges[0].toLowerCase()} - same issue, different expressions.`,
        `Power struggles can emerge when both want to express the dominant ${hisPersonality.name} trait.`,
        `He may retreat, she may pursue - recognize this pattern.`
      ]
    : [
        `His ${hisPersonality.challenges[0].toLowerCase()} may trigger her ${herPersonality.challenges[0].toLowerCase()}.`,
        `She might find his ${hisPersonality.challenges[1].toLowerCase()} difficult to navigate.`,
        `He might struggle with her ${herPersonality.challenges[1].toLowerCase()} moments.`
      ];

  const strengths = isSameType
    ? [
        `Deep intuitive understanding of each other's core needs.`,
        `His ${hisPersonality.strengths[0].toLowerCase()} protects, her ${herPersonality.strengths[0].toLowerCase()} nurtures.`,
        `You speak the same emotional language fluently.`
      ]
    : [
        `His ${hisPersonality.strengths[0].toLowerCase()} complements her ${herPersonality.strengths[0].toLowerCase()} beautifully.`,
        `She softens his ${hisPersonality.challenges[0].toLowerCase()} tendencies.`,
        `He grounds her ${herPersonality.challenges[0].toLowerCase()} moments.`
      ];

  const loverInsights = isSameType
    ? [
        `As lovers, you share the same passionate language of desire.`,
        `He expresses his masculine ${hisPersonality.name} sensuality, she expresses her feminine ${herPersonality.name} allure.`,
        `Your mutual understanding allows for deeper vulnerability and exploration.`,
        `The challenge is balancing sameness with creating complementary energies in intimacy.`
      ]
    : [
        `His ${hisPersonality.name} lover energy brings ${hisPersonality.loverInsights ? hisPersonality.loverInsights.split('.')[0].toLowerCase() : 'passion'} to the connection.`,
        `Her ${herPersonality.name} lover nature brings ${herPersonality.loverInsights ? herPersonality.loverInsights.split('.')[0].toLowerCase() : 'sensuality'} to the relationship.`,
        `He needs ${hisPersonality.strengths[2].toLowerCase()} expressions from her to feel desired.`,
        `She needs him to understand her need for ${herPersonality.strengths[2].toLowerCase()} before physical intimacy deepens.`
      ];

  return {
    overallScore: score,
    communicationTips,
    intimacyInsights,
    loverInsights,
    challenges,
    strengths,
    hisInsights,
    herInsights
  };
}
