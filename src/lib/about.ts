import type { Lang } from './types';

// The "What is it?" page for each framework: a plain explanation, how to find
// your own type, and outside links where people can take a test or use a
// calculator. Every link was opened and checked before it was added.

export interface AboutLink {
  label: string;
  url: string;
  note: string;
}

export interface AboutContent {
  whatIs: string[];
  howToFind: string[];
  // Rows are written as "Label: value" and shown as a two-column list.
  table?: { title: string; rows: string[] };
  links: AboutLink[];
}

export const about: Record<string, Record<Lang, AboutContent>> = {
  // ---------------------------------------------------------------- Western
  zodiac: {
    en: {
      whatIs: [
        'Western astrology is a system that connects the position of the sun, moon and planets at the moment you were born with your personality, your emotional patterns and the way you relate to other people. It grew out of ancient Babylonian and Greek sky watching and has been refined over about two thousand years. Today it is used mostly as a language for self reflection and for talking about relationships, not as a scientific prediction tool.',
        'The best known part is your sun sign, also called your zodiac sign. The sun passes through twelve sections of the sky during a year, and the one it was in when you were born is your sun sign. Each sign belongs to one of four elements (fire, earth, air and water) and one of three modes (cardinal, fixed and mutable), and those two labels shape how the sign is described. Fire signs tend to be energetic and bold, earth signs practical and steady, air signs curious and communicative, and water signs emotional and intuitive.',
        'A full birth chart goes further. It places the sun, moon and eight planets in the twelve signs and twelve houses, using your exact birth date, time and place. Your moon sign describes your inner emotional life, your rising sign describes the first impression you make, and Venus and Mars are often used to talk about love and desire. This app uses the sun sign because it is the easiest to find and the one most people already know.',
        'In relationships, astrology is used to look at how two signs mix: which elements support each other, where the styles clash, and what each person tends to need. Treat it as a conversation starter. Two people with the same sign can be very different, and no sign decides whether a couple will work.',
      ],
      howToFind: [
        'Your sun sign depends only on your birth date. Find your date in the list below.',
        'If you were born within a day or two of a change date, check with a birth chart, because the exact moment the sun changes sign moves slightly from year to year and depends on your birth time and place.',
        'To learn your moon sign, rising sign and the rest of your chart, use a free birth chart calculator. You will need your birth date, the time and the city.',
      ],
      table: {
        title: 'Sun signs by birth date',
        rows: [
          'Aries: March 21 to April 19',
          'Taurus: April 20 to May 20',
          'Gemini: May 21 to June 20',
          'Cancer: June 21 to July 22',
          'Leo: July 23 to August 22',
          'Virgo: August 23 to September 22',
          'Libra: September 23 to October 22',
          'Scorpio: October 23 to November 21',
          'Sagittarius: November 22 to December 21',
          'Capricorn: December 22 to January 19',
          'Aquarius: January 20 to February 18',
          'Pisces: February 19 to March 20',
        ],
      },
      links: [
        {
          label: 'Astro-Seek free birth chart',
          url: 'https://horoscopes.astro-seek.com/birth-chart-horoscope-online',
          note: 'Free. Enter your birth date, time and city.',
        },
        {
          label: 'Astrodienst (astro.com) free horoscopes and charts',
          url: 'https://www.astro.com/horoscope',
          note: 'Free. A long established astrology site.',
        },
      ],
    },
    vi: {
      whatIs: [
        'Chiêm tinh phương Tây là hệ thống liên kết vị trí của Mặt Trời, Mặt Trăng và các hành tinh vào khoảnh khắc bạn chào đời với tính cách, cảm xúc và cách bạn gắn kết với người khác. Nó bắt nguồn từ việc quan sát bầu trời của người Babylon và Hy Lạp cổ đại, và đã được hoàn thiện suốt khoảng hai nghìn năm. Ngày nay, người ta dùng chiêm tinh chủ yếu như một ngôn ngữ để suy ngẫm về bản thân và trò chuyện về các mối quan hệ, chứ không phải một công cụ dự đoán khoa học.',
        'Phần được biết đến nhiều nhất là cung Mặt Trời, hay còn gọi là cung hoàng đạo của bạn. Trong một năm, Mặt Trời đi qua mười hai phần của bầu trời, và phần nó đang ở khi bạn sinh ra chính là cung của bạn. Mỗi cung thuộc một trong bốn nguyên tố (Lửa, Đất, Khí, Nước) và một trong ba tính chất (Tiên phong, Cố định, Biến đổi), và hai nhãn này định hình cách mô tả cung đó. Cung Lửa thường mạnh mẽ và táo bạo, cung Đất thực tế và vững vàng, cung Khí tò mò và giỏi giao tiếp, cung Nước giàu cảm xúc và trực giác.',
        'Một lá số đầy đủ đi xa hơn nữa. Nó đặt Mặt Trời, Mặt Trăng và tám hành tinh vào mười hai cung và mười hai nhà, dựa trên ngày, giờ và nơi sinh chính xác của bạn. Cung Mặt Trăng mô tả đời sống cảm xúc bên trong, cung Mọc mô tả ấn tượng đầu tiên bạn tạo ra, còn sao Kim và sao Hỏa thường được dùng để nói về tình yêu và ham muốn. Ứng dụng này dùng cung Mặt Trời vì đó là cung dễ tìm nhất và hầu như ai cũng đã biết.',
        'Trong các mối quan hệ, chiêm tinh được dùng để xem hai cung kết hợp với nhau ra sao: nguyên tố nào hỗ trợ nhau, phong cách nào dễ va chạm, và mỗi người thường cần gì. Hãy xem đó là chuyện để mở đầu cuộc trò chuyện. Hai người cùng cung vẫn có thể rất khác nhau, và không cung nào quyết định một cặp đôi có hợp hay không.',
      ],
      howToFind: [
        'Cung Mặt Trời của bạn chỉ phụ thuộc vào ngày sinh dương lịch. Hãy tìm ngày sinh của bạn trong bảng bên dưới.',
        'Nếu bạn sinh trong khoảng một hai ngày quanh ngày chuyển cung, hãy kiểm tra bằng lá số, vì thời điểm Mặt Trời đổi cung lệch nhẹ giữa các năm và còn phụ thuộc giờ và nơi sinh.',
        'Muốn biết cung Mặt Trăng, cung Mọc và phần còn lại của lá số, hãy dùng công cụ lập lá số miễn phí. Bạn cần ngày, giờ và thành phố nơi sinh.',
      ],
      table: {
        title: 'Cung hoàng đạo theo ngày sinh',
        rows: [
          'Bạch Dương: 21/3 đến 19/4',
          'Kim Ngưu: 20/4 đến 20/5',
          'Song Tử: 21/5 đến 20/6',
          'Cự Giải: 21/6 đến 22/7',
          'Sư Tử: 23/7 đến 22/8',
          'Xử Nữ: 23/8 đến 22/9',
          'Thiên Bình: 23/9 đến 22/10',
          'Bọ Cạp: 23/10 đến 21/11',
          'Nhân Mã: 22/11 đến 21/12',
          'Ma Kết: 22/12 đến 19/1',
          'Bảo Bình: 20/1 đến 18/2',
          'Song Ngư: 19/2 đến 20/3',
        ],
      },
      links: [
        {
          label: 'Astro-Seek: lập lá số miễn phí',
          url: 'https://horoscopes.astro-seek.com/birth-chart-horoscope-online',
          note: 'Miễn phí. Nhập ngày, giờ và thành phố nơi sinh.',
        },
        {
          label: 'Astrodienst (astro.com): tử vi và lá số miễn phí',
          url: 'https://www.astro.com/horoscope',
          note: 'Miễn phí. Một trang chiêm tinh lâu đời.',
        },
      ],
    },
  },

  // ---------------------------------------------------------------- Chinese
  chinese: {
    en: {
      whatIs: [
        'The Chinese zodiac is a twelve year cycle in which each year is named for an animal: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog and Pig. People believe the animal of your birth year colors your personality, your luck and how well you get along with others. It has been part of daily life in China, Vietnam, Korea, Japan and across East Asia for more than two thousand years.',
        'Unlike Western astrology, the animal belongs to the whole year, not to a month. The year is counted by the lunar calendar, so it begins at Lunar New Year, which falls between late January and mid February. Each animal is also paired with one of the five elements (wood, fire, earth, metal and water) in a sixty year cycle, so a Wood Dragon and a Fire Dragon are described differently.',
        'Compatibility is a big part of the tradition. Animals are grouped in four friendly triangles (Rat, Dragon and Monkey; Ox, Snake and Rooster; Tiger, Horse and Dog; Rabbit, Goat and Pig), and each animal has a natural opposite six years away. Families often check these matches before a wedding. In this app the animal descriptions focus on character and relationships.',
        'A note for Vietnamese readers: the Vietnamese zodiac uses the Cat in the place of the Rabbit. The traits are shared, so the Rabbit entry applies to the Cat as well.',
      ],
      howToFind: [
        'Your animal depends on your birth year, but only if you were born after Lunar New Year. If your birthday is in January or February, check the date of Lunar New Year for that year. Before it, you belong to the previous animal.',
        'Find your year in the list below. To go further back, subtract 12 years at a time.',
        'For a birthday in January or February, use a calculator that converts your exact date to the lunar calendar. The Hong Kong Observatory publishes the official conversion table.',
      ],
      table: {
        title: 'Animal years',
        rows: [
          'Rat: 1960, 1972, 1984, 1996, 2008, 2020, 2032',
          'Ox: 1961, 1973, 1985, 1997, 2009, 2021, 2033',
          'Tiger: 1962, 1974, 1986, 1998, 2010, 2022',
          'Rabbit: 1963, 1975, 1987, 1999, 2011, 2023',
          'Dragon: 1964, 1976, 1988, 2000, 2012, 2024',
          'Snake: 1965, 1977, 1989, 2001, 2013, 2025',
          'Horse: 1966, 1978, 1990, 2002, 2014, 2026',
          'Goat: 1967, 1979, 1991, 2003, 2015, 2027',
          'Monkey: 1968, 1980, 1992, 2004, 2016, 2028',
          'Rooster: 1969, 1981, 1993, 2005, 2017, 2029',
          'Dog: 1970, 1982, 1994, 2006, 2018, 2030',
          'Pig: 1971, 1983, 1995, 2007, 2019, 2031',
        ],
      },
      links: [
        {
          label: 'Travel China Guide Chinese zodiac calculator',
          url: 'https://www.travelchinaguide.com/intro/social_customs/zodiac/calculator.htm',
          note: 'Free. Enter your birth date and it accounts for Lunar New Year.',
        },
        {
          label: 'Hong Kong Observatory date conversion',
          url: 'https://www.hko.gov.hk/en/gts/time/conversion1_text.htm',
          note: 'Free. The official table that converts a date to the lunar calendar.',
        },
      ],
    },
    vi: {
      whatIs: [
        '12 con giáp là chu kỳ mười hai năm, mỗi năm mang tên một con vật: Tý (Chuột), Sửu (Trâu), Dần (Hổ), Mão (Mèo), Thìn (Rồng), Tỵ (Rắn), Ngọ (Ngựa), Mùi (Dê), Thân (Khỉ), Dậu (Gà), Tuất (Chó) và Hợi (Heo). Người ta tin rằng con giáp của năm sinh tô màu tính cách, vận may và cách bạn hòa hợp với người khác. Hệ thống này đã gắn bó với đời sống ở Trung Quốc, Việt Nam, Hàn Quốc, Nhật Bản và khắp Đông Á hơn hai nghìn năm.',
        'Khác với chiêm tinh phương Tây, con giáp thuộc về cả năm chứ không phải một tháng. Năm được tính theo âm lịch, nên bắt đầu từ Tết Nguyên Đán, rơi vào khoảng cuối tháng 1 đến giữa tháng 2 dương lịch. Mỗi con giáp còn đi cùng một trong năm hành (Mộc, Hỏa, Thổ, Kim, Thủy) trong chu kỳ sáu mươi năm, vì vậy Rồng Mộc và Rồng Hỏa được mô tả khác nhau.',
        'Sự hợp tuổi là phần rất quan trọng của truyền thống này. Các con giáp được chia thành bốn nhóm tam hợp (Tý, Thìn, Thân; Sửu, Tỵ, Dậu; Dần, Ngọ, Tuất; Mão, Mùi, Hợi) và mỗi con giáp có một con xung khắc cách sáu năm. Nhiều gia đình xem tuổi trước khi cưới. Trong ứng dụng này, phần mô tả từng con giáp tập trung vào tính cách và các mối quan hệ.',
        'Lưu ý cho người Việt: con giáp Việt Nam dùng Mèo thay cho Thỏ. Tính cách tương đồng, nên phần Mão (Mèo) cũng chính là phần dành cho tuổi Thỏ.',
      ],
      howToFind: [
        'Con giáp của bạn phụ thuộc vào năm sinh, nhưng chỉ khi bạn sinh sau Tết Nguyên Đán. Nếu sinh nhật của bạn vào tháng 1 hoặc tháng 2, hãy kiểm tra ngày Tết Nguyên Đán của năm đó. Nếu sinh trước Tết, bạn thuộc con giáp của năm trước.',
        'Hãy tìm năm sinh của bạn trong bảng bên dưới. Muốn lùi xa hơn, hãy trừ đi 12 năm mỗi lần.',
        'Với sinh nhật trong tháng 1 hoặc tháng 2, hãy dùng công cụ đổi chính xác ngày sinh sang âm lịch. Đài thiên văn Hồng Kông công bố bảng quy đổi chính thức.',
      ],
      table: {
        title: 'Các năm sinh theo con giáp',
        rows: [
          'Tý (Chuột): 1960, 1972, 1984, 1996, 2008, 2020, 2032',
          'Sửu (Trâu): 1961, 1973, 1985, 1997, 2009, 2021, 2033',
          'Dần (Hổ): 1962, 1974, 1986, 1998, 2010, 2022',
          'Mão (Mèo): 1963, 1975, 1987, 1999, 2011, 2023',
          'Thìn (Rồng): 1964, 1976, 1988, 2000, 2012, 2024',
          'Tỵ (Rắn): 1965, 1977, 1989, 2001, 2013, 2025',
          'Ngọ (Ngựa): 1966, 1978, 1990, 2002, 2014, 2026',
          'Mùi (Dê): 1967, 1979, 1991, 2003, 2015, 2027',
          'Thân (Khỉ): 1968, 1980, 1992, 2004, 2016, 2028',
          'Dậu (Gà): 1969, 1981, 1993, 2005, 2017, 2029',
          'Tuất (Chó): 1970, 1982, 1994, 2006, 2018, 2030',
          'Hợi (Heo): 1971, 1983, 1995, 2007, 2019, 2031',
        ],
      },
      links: [
        {
          label: 'Travel China Guide: tính con giáp',
          url: 'https://www.travelchinaguide.com/intro/social_customs/zodiac/calculator.htm',
          note: 'Miễn phí. Nhập ngày sinh, công cụ tính cả Tết Nguyên Đán.',
        },
        {
          label: 'Đài thiên văn Hồng Kông: đổi ngày sang âm lịch',
          url: 'https://www.hko.gov.hk/en/gts/time/conversion1_text.htm',
          note: 'Miễn phí. Bảng chính thức đổi ngày dương lịch sang âm lịch.',
        },
      ],
    },
  },

  // -------------------------------------------------------------- Enneagram
  enneagram: {
    en: {
      whatIs: [
        'The Enneagram (say it as ANY-uh-gram) describes nine personality types, each with its own way of seeing the world, its own core fear and its own core desire. The word comes from the Greek for nine (ennea) and drawing (grammos). It is shown as a circle with nine points joined by lines that show how each type moves under stress and when it feels secure.',
        'Modern Enneagram teaching grew in the twentieth century from the work of Oscar Ichazo and Claudio Naranjo, and was developed further by writers such as Don Riso and Russ Hudson. It is not tied to a birth date. It is about motivation: why you do what you do, not only what you do.',
        'The nine types are usually numbered: 1 the Perfectionist, 2 the Helper, 3 the Achiever, 4 the Individualist, 5 the Investigator, 6 the Loyalist, 7 the Enthusiast, 8 the Challenger and 9 the Peacemaker. You have one dominant type for life, but you can show traits of the two types beside it (called wings), and you move between types in stress and in growth. Many people find their type is the one that describes what they fear and want most, not the one that sounds nicest.',
        'In relationships, the Enneagram is useful for understanding conflict. It shows what each person needs to feel safe and valued, and what triggers them. Use it to get curious about your partner, not to put them in a box.',
      ],
      howToFind: [
        'You find your type by taking a test, but no test is perfect. The official one is the RHETI (Riso-Hudson Enneagram Type Indicator) from the Enneagram Institute, which is paid. A good free option is the Eclectic Energies test.',
        'Treat the result as a starting guess. Read the descriptions of your top two or three types and notice which one describes your motivations and your fears, not only your habits. Asking a close friend or your partner which one sounds like you also helps.',
      ],
      links: [
        {
          label: 'Eclectic Energies Enneagram test',
          url: 'https://www.eclecticenergies.com/enneagram/test',
          note: 'Free. A good first test.',
        },
        {
          label: 'Enneagram Institute RHETI (official test)',
          url: 'https://enneagraminstitute.com/rheti',
          note: 'Paid. The official Riso-Hudson test.',
        },
      ],
    },
    vi: {
      whatIs: [
        'Enneagram (đọc là ê-ni-a-gram) mô tả chín kiểu tính cách, mỗi kiểu có cách nhìn thế giới riêng, nỗi sợ cốt lõi riêng và mong muốn cốt lõi riêng. Tên gọi bắt nguồn từ tiếng Hy Lạp: ennea là chín và grammos là hình vẽ. Hệ thống được vẽ thành một vòng tròn có chín điểm, nối với nhau bằng các đường cho thấy mỗi kiểu thay đổi ra sao khi căng thẳng và khi cảm thấy an toàn.',
        'Enneagram hiện đại phát triển trong thế kỷ hai mươi từ công trình của Oscar Ichazo và Claudio Naranjo, rồi được các tác giả như Don Riso và Russ Hudson phát triển thêm. Nó không gắn với ngày sinh mà nói về động lực: vì sao bạn làm điều bạn làm, chứ không chỉ bạn làm gì.',
        'Chín kiểu thường được đánh số: 1 Người cầu toàn, 2 Người giúp đỡ, 3 Người thành đạt, 4 Người cá tính, 5 Người tìm tòi, 6 Người trung thành, 7 Người nhiệt huyết, 8 Người thách thức và 9 Người hòa giải. Bạn có một kiểu chủ đạo suốt đời, nhưng vẫn có thể mang nét của hai kiểu bên cạnh (gọi là cánh), và sẽ di chuyển giữa các kiểu khi căng thẳng hoặc khi phát triển. Nhiều người nhận ra kiểu của mình là kiểu mô tả điều họ sợ và mong muốn nhất, chứ không phải kiểu nghe dễ chịu nhất.',
        'Trong các mối quan hệ, Enneagram giúp hiểu xung đột. Nó cho thấy mỗi người cần gì để cảm thấy an toàn và được trân trọng, và điều gì khiến họ bị kích động. Hãy dùng nó để tò mò hơn về người bạn đời, đừng dùng để nhốt họ vào một chiếc hộp.',
      ],
      howToFind: [
        'Bạn xác định kiểu của mình bằng cách làm một bài kiểm tra, nhưng không bài nào hoàn hảo. Bài chính thức là RHETI (Riso-Hudson Enneagram Type Indicator) của Enneagram Institute, có thu phí. Một lựa chọn miễn phí tốt là bài kiểm tra của Eclectic Energies.',
        'Hãy xem kết quả như một phỏng đoán ban đầu. Đọc phần mô tả của hai hoặc ba kiểu đứng đầu và để ý kiểu nào mô tả động lực và nỗi sợ của bạn, không chỉ thói quen. Hỏi một người bạn thân hoặc người bạn đời xem kiểu nào giống bạn cũng rất hữu ích.',
      ],
      links: [
        {
          label: 'Eclectic Energies: bài kiểm tra Enneagram',
          url: 'https://www.eclecticenergies.com/enneagram/test',
          note: 'Miễn phí. Một bài kiểm tra đầu tiên tốt.',
        },
        {
          label: 'Enneagram Institute: RHETI (bài kiểm tra chính thức)',
          url: 'https://enneagraminstitute.com/rheti',
          note: 'Có phí. Bài kiểm tra chính thức của Riso-Hudson.',
        },
      ],
    },
  },

  // ---------------------------------------------------------- Love Languages
  lovelang: {
    en: {
      whatIs: [
        'The five love languages are five ways people give and receive love: Words of Affirmation, Quality Time, Receiving Gifts, Acts of Service and Physical Touch. The idea comes from the book The 5 Love Languages by the counselor Gary Chapman, first published in 1992, and it has since sold millions of copies.',
        'The core idea is simple. People tend to feel most loved in one or two of these ways, and they tend to show love in the same way. Trouble starts when partners speak different languages. One person washes the car and cooks dinner to say I love you (acts of service), while the other is waiting to hear the words (words of affirmation). Both are loving, and both feel unloved.',
        'Learning your own language, and your partner\'s, gives you a practical map: what to do more of, what to ask for, and how to recognize the love that is already being offered. Research on whether people really have one fixed language is mixed, so use it as a helpful lens for conversation rather than a rule.',
      ],
      howToFind: [
        'Take the free official quiz from 5lovelanguages.com. It takes about ten minutes and asks you to choose between pairs of statements. It tells you your top language and ranks all five.',
        'Not sure? Ask yourself three questions. What does my partner do that makes me feel most loved? What do I ask for most often? What hurts me most when it is missing? The answers usually point to your language. Ask your partner to take the quiz too, then compare.',
      ],
      links: [
        {
          label: '5 Love Languages quiz',
          url: 'https://5lovelanguages.com/quizzes/love-language',
          note: 'Free. The official quiz, about ten minutes.',
        },
      ],
    },
    vi: {
      whatIs: [
        'Năm ngôn ngữ tình yêu là năm cách con người cho đi và đón nhận tình yêu: Lời khẳng định, Thời gian chất lượng, Nhận quà tặng, Hành động phục vụ và Sự đụng chạm cơ thể. Ý tưởng này đến từ cuốn sách The 5 Love Languages của chuyên gia tư vấn Gary Chapman, xuất bản lần đầu năm 1992 và đã bán được hàng triệu bản.',
        'Ý tưởng cốt lõi rất đơn giản. Mỗi người thường cảm thấy được yêu nhất qua một hoặc hai cách, và cũng thường thể hiện tình yêu theo đúng cách đó. Rắc rối bắt đầu khi hai người nói hai ngôn ngữ khác nhau. Một người rửa xe và nấu bữa tối để nói rằng anh yêu em (hành động phục vụ), trong khi người kia đang chờ nghe lời nói (lời khẳng định). Cả hai đều yêu thương, và cả hai đều cảm thấy chưa được yêu.',
        'Hiểu ngôn ngữ của mình và của người ấy cho bạn một tấm bản đồ thực tế: nên làm nhiều hơn điều gì, nên xin điều gì, và cách nhận ra tình yêu đã được trao. Các nghiên cứu về việc con người có thật sự có một ngôn ngữ cố định hay không cho kết quả trái chiều, vì vậy hãy xem đây là một lăng kính hữu ích để trò chuyện, không phải quy tắc.',
      ],
      howToFind: [
        'Hãy làm bài trắc nghiệm chính thức miễn phí trên 5lovelanguages.com. Bài mất khoảng mười phút và yêu cầu bạn chọn giữa từng cặp câu. Kết quả cho biết ngôn ngữ nổi bật nhất và xếp hạng cả năm.',
        'Chưa chắc chắn? Hãy tự hỏi ba câu. Người ấy làm điều gì khiến mình cảm thấy được yêu nhất? Mình hay xin điều gì nhất? Điều gì làm mình tổn thương nhất khi thiếu vắng? Câu trả lời thường chỉ ra ngôn ngữ của bạn. Hãy mời người ấy làm bài và so sánh kết quả.',
      ],
      links: [
        {
          label: '5 Love Languages: bài trắc nghiệm',
          url: 'https://5lovelanguages.com/quizzes/love-language',
          note: 'Miễn phí. Bài trắc nghiệm chính thức, khoảng mười phút.',
        },
      ],
    },
  },

  // ------------------------------------------------------------------- MBTI
  mbti: {
    en: {
      whatIs: [
        'The Myers-Briggs Type Indicator, or MBTI, sorts people into one of sixteen personality types based on four pairs of preferences. It was built by Katharine Briggs and her daughter Isabel Briggs Myers in the 1940s from the earlier ideas of the Swiss psychologist Carl Jung, and it is one of the most widely used personality tools in the world.',
        'The four pairs are: Extraversion or Introversion (where you get your energy), Sensing or Intuition (how you take in information), Thinking or Feeling (how you make decisions) and Judging or Perceiving (how you prefer to organize your life). Your choice in each pair gives a four letter code, such as INFJ or ESTP, and each code is a type with its own strengths and blind spots.',
        'Scientists debate how reliable the MBTI is, and a person\'s result can change between tests, especially when they sit close to the middle of one pair. It is best used as a language for describing preferences, not as a fixed label or a way to judge who is compatible.',
        'In relationships, it helps couples talk about their differences in how they recharge, communicate and decide, and why they sometimes misunderstand each other.',
      ],
      howToFind: [
        'The official MBTI assessment is paid and is given through certified practitioners and The Myers-Briggs Company. To find your four letter type for free, two popular tests are 16Personalities and the Truity TypeFinder. They are not the official MBTI, and their questions and results differ a little, but most people land on a similar type. 16Personalities adds a fifth letter (A or T), which you can ignore here.',
        'Tip: if the result does not feel right, read the descriptions of the types that differ from it by one letter. Many people sit close to the middle on one pair.',
      ],
      links: [
        {
          label: '16Personalities free test',
          url: 'https://www.16personalities.com/free-personality-test',
          note: 'Free. Popular and quick, but not the official MBTI.',
        },
        {
          label: 'Truity TypeFinder',
          url: 'https://www.truity.com/test/type-finder-personality-test-new',
          note: 'Free. Modeled on the same four pairs of preferences.',
        },
        {
          label: 'Official MBTI assessment',
          url: 'https://www.themyersbriggs.com/en-US/Explore-Solutions/MBTI',
          note: 'Paid. The official test from The Myers-Briggs Company.',
        },
      ],
    },
    vi: {
      whatIs: [
        'Myers-Briggs Type Indicator (MBTI) xếp con người vào một trong mười sáu kiểu tính cách dựa trên bốn cặp thiên hướng. Công cụ do Katharine Briggs và con gái Isabel Briggs Myers xây dựng vào thập niên 1940, dựa trên ý tưởng của nhà tâm lý học Thụy Sĩ Carl Jung, và là một trong những công cụ tính cách được dùng rộng rãi nhất thế giới.',
        'Bốn cặp là: Hướng ngoại (E) hoặc Hướng nội (I) cho biết bạn lấy năng lượng từ đâu; Giác quan (S) hoặc Trực giác (N) cho biết cách bạn tiếp nhận thông tin; Lý trí (T) hoặc Cảm xúc (F) cho biết cách bạn ra quyết định; Nguyên tắc (J) hoặc Linh hoạt (P) cho biết cách bạn thích sắp xếp cuộc sống. Lựa chọn của bạn trong mỗi cặp tạo thành mã bốn chữ cái, chẳng hạn INFJ hoặc ESTP, và mỗi mã là một kiểu với điểm mạnh và điểm mù riêng.',
        'Giới khoa học còn tranh luận về độ tin cậy của MBTI, và kết quả của một người có thể thay đổi giữa các lần làm bài, nhất là khi họ ở gần mức giữa của một cặp. Tốt nhất hãy dùng nó như một ngôn ngữ để mô tả thiên hướng, không phải một cái nhãn cố định hay thước đo để phán xét sự hợp nhau.',
        'Trong các mối quan hệ, MBTI giúp các cặp đôi nói về sự khác biệt trong cách nạp lại năng lượng, giao tiếp và ra quyết định, cũng như lý do vì sao đôi khi họ hiểu lầm nhau.',
      ],
      howToFind: [
        'Bài đánh giá MBTI chính thức có thu phí và được thực hiện qua các chuyên gia được chứng nhận cùng The Myers-Briggs Company. Muốn tìm miễn phí mã bốn chữ cái của mình, hai bài phổ biến là 16Personalities và Truity TypeFinder. Chúng không phải MBTI chính thức, câu hỏi và kết quả có khác đôi chút, nhưng đa số mọi người đều ra một kiểu tương tự. 16Personalities thêm chữ thứ năm (A hoặc T), bạn có thể bỏ qua chữ này.',
        'Mẹo: nếu kết quả không thấy đúng, hãy đọc mô tả của các kiểu chỉ khác một chữ cái. Nhiều người ở gần mức giữa của một cặp.',
      ],
      links: [
        {
          label: '16Personalities: bài kiểm tra miễn phí',
          url: 'https://www.16personalities.com/free-personality-test',
          note: 'Miễn phí. Phổ biến và nhanh, nhưng không phải MBTI chính thức.',
        },
        {
          label: 'Truity TypeFinder',
          url: 'https://www.truity.com/test/type-finder-personality-test-new',
          note: 'Miễn phí. Dựa trên cùng bốn cặp thiên hướng.',
        },
        {
          label: 'Bài đánh giá MBTI chính thức',
          url: 'https://www.themyersbriggs.com/en-US/Explore-Solutions/MBTI',
          note: 'Có phí. Bài kiểm tra chính thức của The Myers-Briggs Company.',
        },
      ],
    },
  },

  // ------------------------------------------------------------------- BaZi
  bazi: {
    en: {
      whatIs: [
        'BaZi (八字) means eight characters. It is also called the Four Pillars of Destiny. It is a Chinese system, more than a thousand years old, that reads the moment you were born as four pairs of characters: one pair for the year, one for the month, one for the day and one for the hour. Each pair has a heavenly stem and an earthly branch, which gives eight characters in total.',
        'The ten heavenly stems are the heart of the system. They are the five elements (Wood, Fire, Earth, Metal and Water), each in a Yang form and a Yin form: Jia and Yi (Wood), Bing and Ding (Fire), Wu and Ji (Earth), Geng and Xin (Metal), Ren and Gui (Water). Yang is the outward, active form, such as a tall tree or a bright sun. Yin is the inward, subtle form, such as a flower or a candle flame.',
        'The most important of the eight characters is the stem of your birth day. It is called your Day Master. It stands for you, your core nature, and everything else in the chart is read in relation to it. That is why this app gives you ten Day Master types. It is the simplest and most useful starting point for understanding yourself and your partner.',
        'A full BaZi reading looks at all eight characters, how the elements balance, and ten year cycles called luck pillars. Here we keep it simple: your Day Master and what it says about how you love, communicate and handle conflict.',
      ],
      howToFind: [
        'To find your Day Master you need your birth date. The day stem comes from a repeating 60 day cycle in the Chinese calendar, so you cannot work it out from the month or year alone. Use a free BaZi calculator, enter your birth date (and the time and place if you know them), and look at the chart it draws.',
        'In the chart, the four pillars are shown as four columns. Find the column for the day. The top character in that column is your Day Master, and it will be one of the ten stems: Jia, Yi, Bing, Ding, Wu, Ji, Geng, Xin, Ren or Gui. Some calculators list the year first and some list the hour first, so read the column labels.',
        'Two notes. If you were born between 11 pm and midnight, schools differ on which day you belong to, so check the calculator\'s setting. Also enter the date and time as they were in the place you were born, not where you live now.',
      ],
      links: [
        {
          label: 'Master Sean Chan BaZi calculator',
          url: 'https://www.masterseanchan.com/bazi-calculator/',
          note: 'Free. Adjusts for solar time and shows all four pillars.',
        },
        {
          label: 'MiniWebtool BaZi calculator',
          url: 'https://miniwebtool.com/bazi-calculator/',
          note: 'Free. Shows the four pillars and your Day Master.',
        },
        {
          label: 'Synthesis Astrology BaZi calculator',
          url: 'https://synthesisastrology.com/en/bazi-calculator',
          note: 'Free. Works even if you do not know your birth time.',
        },
      ],
    },
    vi: {
      whatIs: [
        'Bát Tự (BaZi, 八字) nghĩa là tám chữ, còn gọi là Tứ Trụ. Đây là hệ thống của Trung Hoa, lâu đời hơn một nghìn năm, đọc khoảnh khắc bạn sinh ra thành bốn cặp chữ: một cặp cho năm, một cặp cho tháng, một cặp cho ngày và một cặp cho giờ. Mỗi cặp gồm một Thiên Can và một Địa Chi, cho ra tổng cộng tám chữ.',
        'Mười Thiên Can là trái tim của hệ thống. Đó là năm hành (Mộc, Hỏa, Thổ, Kim, Thủy), mỗi hành có một dạng Dương và một dạng Âm: Giáp và Ất (Mộc), Bính và Đinh (Hỏa), Mậu và Kỷ (Thổ), Canh và Tân (Kim), Nhâm và Quý (Thủy). Dương là dạng hướng ngoại, chủ động, như cây cổ thụ hay mặt trời rực rỡ. Âm là dạng hướng nội, tinh tế, như bông hoa hay ngọn nến.',
        'Chữ quan trọng nhất trong tám chữ là Thiên Can của ngày sinh, gọi là Nhật Chủ. Nó đại diện cho chính bạn, bản chất cốt lõi của bạn, và mọi thứ khác trong lá số đều được đọc trong mối liên hệ với nó. Vì vậy ứng dụng này đưa ra mười kiểu Nhật Chủ. Đây là điểm khởi đầu đơn giản và hữu ích nhất để hiểu bản thân và người bạn đời.',
        'Một lá số Bát Tự đầy đủ xem xét cả tám chữ, sự cân bằng của các hành và những chu kỳ mười năm gọi là đại vận. Ở đây chúng tôi giữ cho đơn giản: Nhật Chủ của bạn và điều nó nói về cách bạn yêu, giao tiếp và xử lý mâu thuẫn.',
      ],
      howToFind: [
        'Để tìm Nhật Chủ, bạn cần ngày sinh. Can của ngày đến từ chu kỳ sáu mươi ngày lặp lại của lịch Trung Hoa, nên không thể suy ra chỉ từ tháng hay năm. Hãy dùng công cụ lập Bát Tự miễn phí, nhập ngày sinh (và giờ, nơi sinh nếu biết), rồi xem lá số mà công cụ vẽ ra.',
        'Trong lá số, bốn trụ hiện ra thành bốn cột. Hãy tìm cột của ngày. Chữ ở trên cùng của cột đó là Nhật Chủ của bạn, và sẽ là một trong mười can: Giáp, Ất, Bính, Đinh, Mậu, Kỷ, Canh, Tân, Nhâm hoặc Quý. Một số công cụ xếp năm lên trước, số khác xếp giờ lên trước, nên hãy xem kỹ nhãn của cột.',
        'Hai lưu ý. Nếu bạn sinh từ 23 giờ đến nửa đêm, các trường phái khác nhau về việc tính bạn thuộc ngày nào, nên hãy xem cài đặt của công cụ. Ngoài ra, hãy nhập ngày giờ theo múi giờ nơi bạn sinh, không phải nơi bạn đang sống.',
      ],
      links: [
        {
          label: 'Master Sean Chan: công cụ lập Bát Tự',
          url: 'https://www.masterseanchan.com/bazi-calculator/',
          note: 'Miễn phí. Có hiệu chỉnh giờ mặt trời và hiện đủ bốn trụ.',
        },
        {
          label: 'MiniWebtool: công cụ lập Bát Tự',
          url: 'https://miniwebtool.com/bazi-calculator/',
          note: 'Miễn phí. Hiện bốn trụ và Nhật Chủ của bạn.',
        },
        {
          label: 'Synthesis Astrology: công cụ lập Bát Tự',
          url: 'https://synthesisastrology.com/en/bazi-calculator',
          note: 'Miễn phí. Vẫn dùng được nếu bạn không biết giờ sinh.',
        },
      ],
    },
  },
};
