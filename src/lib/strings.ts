// Interface text for the app, in English and Vietnamese.
// {n} and {name} are filled in by the t() helper in i18n.ts.

const en = {
  appName: 'Compatibility Talk',
  homeTitle: 'Understand & Connect',
  homeSubtitle:
    'Discover how personality frameworks can help you communicate better and build deeper relationships.',
  chooseFramework: 'Choose a Framework',
  typesToExplore: '{n} types to explore',
  homeInfo:
    'Each framework offers unique insights into how people think, communicate, and connect. Tap any card to explore definitions, communication tips, and compatibility insights.',
  whatIsIt: 'What is it?',

  frameworkNotFound: 'Framework not found',
  typesCount: '{n} Types',
  learnAbout: 'What is {name}? Learn and find your type',

  typeNotFound: 'Type not found',
  asPartner: 'As a Partner',
  asLover: 'As a Lover',
  definition: 'Definition',
  communicationStyle: 'Communication Style',
  strengths: 'Strengths',
  challenges: 'Challenges',
  checkCompat: 'Check Compatibility',

  compatTitle: 'His & Hers Compatibility',
  compatIntro:
    'Select his type and her type below. Gender affects how personality traits are expressed: the same sign can manifest differently in men and women.',
  his: 'His',
  hers: 'Hers',
  selectHis: 'Select his type',
  selectHer: 'Select her type',
  compatibility: 'Compatibility',
  understandingHim: 'Understanding Him',
  understandingHer: 'Understanding Her',
  connectionStrengths: 'Connection Strengths',
  communicationTips: 'Communication Tips',
  asLovers: 'As Lovers',
  potentialChallenges: 'Potential Challenges',
  intimacyInsights: 'Intimacy Insights',
  remember: 'Remember',
  rememberText:
    'These insights reflect general patterns of how men and women express their personality types. Every individual is unique: use these as a starting point for deeper understanding, not rigid rules.',
  selectBoth: 'Select His & Her Types',
  selectBothText:
    'Choose his type (blue) and her type (pink) above to see gender-specific compatibility insights.',

  aboutWhatItIs: 'What it is',
  aboutFindType: 'How to find your type',
  aboutLinks: 'Find out your type',
  aboutOutside: 'Opens an outside website',
  aboutSeeTypes: 'See all the types',
  aboutNotFound: 'Page not found',
  language: 'Language',
};

export type UiKey = keyof typeof en;

const vi: Record<UiKey, string> = {
  appName: 'Compatibility Talk',
  homeTitle: 'Thấu hiểu & Kết nối',
  homeSubtitle:
    'Khám phá cách các hệ thống tính cách giúp bạn giao tiếp tốt hơn và xây dựng những mối quan hệ sâu sắc hơn.',
  chooseFramework: 'Chọn một hệ thống',
  typesToExplore: '{n} loại để khám phá',
  homeInfo:
    'Mỗi hệ thống mang đến những góc nhìn riêng về cách con người suy nghĩ, giao tiếp và kết nối. Chạm vào bất kỳ thẻ nào để xem định nghĩa, mẹo giao tiếp và thông tin về sự tương hợp.',
  whatIsIt: 'Đây là gì?',

  frameworkNotFound: 'Không tìm thấy hệ thống này',
  typesCount: '{n} loại',
  learnAbout: '{name} là gì? Tìm hiểu và xác định loại của bạn',

  typeNotFound: 'Không tìm thấy loại này',
  asPartner: 'Là bạn đời',
  asLover: 'Là người yêu',
  definition: 'Định nghĩa',
  communicationStyle: 'Phong cách giao tiếp',
  strengths: 'Điểm mạnh',
  challenges: 'Thách thức',
  checkCompat: 'Kiểm tra độ tương hợp',

  compatTitle: 'Tương hợp của anh ấy và cô ấy',
  compatIntro:
    'Chọn loại của anh ấy và loại của cô ấy bên dưới. Giới tính ảnh hưởng đến cách thể hiện tính cách: cùng một loại có thể biểu hiện khác nhau ở nam và nữ.',
  his: 'Anh ấy',
  hers: 'Cô ấy',
  selectHis: 'Chọn loại của anh ấy',
  selectHer: 'Chọn loại của cô ấy',
  compatibility: 'Tương hợp',
  understandingHim: 'Hiểu về anh ấy',
  understandingHer: 'Hiểu về cô ấy',
  connectionStrengths: 'Điểm mạnh của mối quan hệ',
  communicationTips: 'Mẹo giao tiếp',
  asLovers: 'Là người yêu của nhau',
  potentialChallenges: 'Thách thức có thể gặp',
  intimacyInsights: 'Góc nhìn về sự gần gũi',
  remember: 'Lưu ý',
  rememberText:
    'Những nhận định này phản ánh các khuôn mẫu chung về cách nam và nữ thể hiện loại tính cách của mình. Mỗi người là duy nhất: hãy xem đây là điểm khởi đầu để hiểu nhau sâu hơn, không phải quy tắc cứng nhắc.',
  selectBoth: 'Chọn loại của anh ấy và cô ấy',
  selectBothText:
    'Chọn loại của anh ấy (màu xanh) và loại của cô ấy (màu hồng) ở trên để xem các nhận định tương hợp theo giới tính.',

  aboutWhatItIs: 'Đây là gì',
  aboutFindType: 'Cách xác định loại của bạn',
  aboutLinks: 'Tìm hiểu loại của bạn',
  aboutOutside: 'Mở trang web bên ngoài',
  aboutSeeTypes: 'Xem tất cả các loại',
  aboutNotFound: 'Không tìm thấy trang này',
  language: 'Ngôn ngữ',
};

export const ui = { en, vi };
