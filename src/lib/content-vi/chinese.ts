import type { FrameworkTranslation } from '../types';

export const chineseVi: FrameworkTranslation = {
  name: "12 con giáp",
  description:
    "Dựa trên chu kỳ 12 năm, mỗi năm được đại diện bởi một con vật. Con giáp năm sinh của bạn ảnh hưởng đến tính cách, mức độ hòa hợp với người khác và con đường cuộc đời.",
  types: {
    rat: {
      name: "Tý (Chuột)",
      description:
        "Nhanh trí, tháo vát và linh hoạt. Chuột là những người sống sót khôn ngoan, thích nghi được với mọi hoàn cảnh.",
      communicationStyle:
        "Duyên dáng và hòa đồng. Chuột là bậc thầy kết nối, có thể trò chuyện với bất kỳ ai. Họ có sức thuyết phục và biết cách đạt được điều mình muốn.",
      strengths: ["Khôn khéo", "Nhanh trí", "Thành đạt", "Duyên dáng", "Thực tế"],
      challenges: ["Bướng bỉnh", "Tham lam", "Kín đáo", "Hay toan tính", "Quá khắt khe"],
    },
    ox: {
      name: "Sửu (Trâu)",
      description:
        "Cần mẫn, đáng tin cậy và mạnh mẽ. Trâu là những người làm việc bền bỉ, đạt được thành quả nhờ sự kiên trì.",
      communicationStyle:
        "Thẳng thắn và chân thành. Trâu nói đúng điều mình nghĩ, không tô vẽ. Họ thích hành động hơn lời nói.",
      strengths: ["Chân thật", "Cần mẫn", "Đáng tin cậy", "Mạnh mẽ", "Kiên định"],
      challenges: ["Bướng bỉnh", "Giao tiếp vụng về", "Hướng nội", "Cứng nhắc", "Chậm thích nghi"],
    },
    tiger: {
      name: "Dần (Hổ)",
      description:
        "Dũng cảm, tự tin và ham cạnh tranh. Hổ là nhà lãnh đạo bẩm sinh, biết truyền cảm hứng và che chở cho người khác.",
      communicationStyle:
        "Táo bạo và đầy uy quyền. Hổ nói với sự tự tin và mong được lắng nghe. Họ có thể truyền cảm hứng nhưng cũng dễ khiến người khác e ngại.",
      strengths: ["Dũng cảm", "Tự tin", "Ham cạnh tranh", "Đầy bất ngờ", "Cuốn hút"],
      challenges: ["Kiêu ngạo", "Nóng tính", "Liều lĩnh", "Hung hăng", "Thiếu kiên nhẫn"],
    },
    rabbit: {
      name: "Mão (Mèo)",
      description:
        "Dịu dàng, thanh lịch và giàu lòng trắc ẩn. Thỏ là những tâm hồn yêu hòa bình, luôn biết tạo nên sự hài hòa. Ở Việt Nam, con giáp này là Mèo và cũng mang những nét tính cách ấy.",
      communicationStyle:
        "Nhẹ nhàng và khéo léo. Thỏ tránh xung đột và nói năng tế nhị. Họ biết lắng nghe và luôn cân nhắc cảm xúc của người khác.",
      strengths: ["Dịu dàng", "Trầm lặng", "Thanh lịch", "Nhạy bén", "Giàu lòng trắc ẩn"],
      challenges: ["Rụt rè", "Bảo thủ", "Thiếu tự tin", "Bi quan", "Hay lẩn tránh thực tại"],
    },
    dragon: {
      name: "Thìn (Rồng)",
      description:
        "Mạnh mẽ, đầy hoài bão và lôi cuốn. Rồng là những nhà lãnh đạo bẩm sinh, sinh ra để làm nên điều lớn lao.",
      communicationStyle:
        "Đầy uy lực và truyền cảm hứng. Rồng nói với sự quyền uy và tầm nhìn xa. Họ có thể tập hợp mọi người quanh mình nhưng đôi khi lấn át cuộc trò chuyện.",
      strengths: ["Tự tin", "Thông minh", "Nhiệt huyết", "Đầy hoài bão", "Lôi cuốn"],
      challenges: ["Kiêu ngạo", "Thiếu tế nhị", "Thiếu kiên nhẫn", "Thiếu khoan dung", "Thiếu thực tế"],
    },
    snake: {
      name: "Tỵ (Rắn)",
      description:
        "Thông thái, bí ẩn và giàu trực giác. Rắn là những người suy nghĩ sâu sắc, nhìn thấu những điều ẩn sau bề mặt.",
      communicationStyle:
        "Điềm tĩnh và quan sát tinh tường. Rắn nói năng thận trọng và ít bộc lộ. Họ lắng nghe nhiều hơn nói và nhớ rất lâu.",
      strengths: ["Thông thái", "Giàu trực giác", "Thanh lịch", "Chu đáo", "Kiên định"],
      challenges: ["Hay ghen", "Đa nghi", "Xảo quyệt", "Lười nhác", "Lạnh lùng"],
    },
    horse: {
      name: "Ngọ (Ngựa)",
      description:
        "Tràn đầy năng lượng, tự do và ấm áp. Ngựa là những tâm hồn độc lập, luôn trân trọng sự tự do của mình.",
      communicationStyle:
        "Sôi nổi và giàu biểu cảm. Ngựa nói nhiều và rất vui tính. Họ thích giao lưu nhưng đôi khi thiếu kiên nhẫn khi lắng nghe.",
      strengths: ["Sôi nổi", "Năng động", "Đầy sức sống", "Thẳng thắn", "Được yêu mến"],
      challenges: ["Thiếu kiên nhẫn", "Cái tôi lớn", "Thiếu trách nhiệm", "Thiếu tế nhị", "Hay thay đổi"],
    },
    goat: {
      name: "Mùi (Dê)",
      description:
        "Dịu dàng, sáng tạo và giàu đồng cảm. Dê là những tâm hồn nghệ sĩ, biết thưởng thức cái đẹp.",
      communicationStyle:
        "Nhẹ nhàng và chu đáo. Dê thích những cuộc trò chuyện êm ái về cảm xúc và sáng tạo. Họ không thích xung đột hay bị thúc ép.",
      strengths: ["Dịu dàng", "Sáng tạo", "Giàu đồng cảm", "Có gu thẩm mỹ", "Điềm tĩnh"],
      challenges: ["Hay do dự", "Rụt rè", "Bi quan", "Thất thường", "Ý chí chưa vững"],
    },
    monkey: {
      name: "Thân (Khỉ)",
      description:
        "Lanh lợi, tò mò và tinh nghịch. Khỉ là những người nhanh trí, thích giải quyết vấn đề.",
      communicationStyle:
        "Dí dỏm và vui tươi. Khỉ thích đùa vui và những cuộc đấu trí. Họ có thể khéo ăn khéo nói để thoát khỏi mọi tình huống.",
      strengths: ["Lanh lợi", "Tò mò", "Vui tươi", "Linh hoạt", "Hòa đồng"],
      challenges: ["Lắm mưu mẹo", "Ích kỷ", "Kiêu ngạo", "Hay ghen", "Đa nghi"],
    },
    rooster: {
      name: "Dậu (Gà)",
      description:
        "Tinh ý, chăm chỉ và tự tin. Gà là những người cầu toàn, luôn tự hào về công việc của mình.",
      communicationStyle:
        "Thẳng thắn và tỉ mỉ. Gà nói thẳng suy nghĩ của mình một cách đầy đủ. Họ coi trọng sự chính xác và đôi khi hơi khắt khe.",
      strengths: ["Chân thật", "Sáng dạ", "Giỏi giao tiếp", "Đầy hoài bão", "Giỏi giang"],
      challenges: ["Thích phô trương", "Kiêu ngạo", "Hay chỉ trích", "Nhạy cảm", "Hẹp hòi"],
    },
    dog: {
      name: "Tuất (Chó)",
      description:
        "Trung thành, chân thật và thủy chung. Chó là người bạn tận tụy, coi trọng công bằng và lòng trung nghĩa.",
      communicationStyle:
        "Chân thành và trực tiếp. Chó nghĩ sao nói vậy. Họ coi trọng những cuộc trao đổi thành thật và rõ ràng.",
      strengths: ["Trung thành", "Chân thật", "Thủy chung", "Can đảm", "Có trách nhiệm"],
      challenges: ["Hay lo âu", "Bi quan", "Bướng bỉnh", "Nhạy cảm", "Hay phán xét"],
    },
    pig: {
      name: "Hợi (Heo)",
      description:
        "Hào phóng, nhân hậu và chăm chỉ. Heo là những tâm hồn tốt bụng, biết tận hưởng cuộc sống.",
      communicationStyle:
        "Ấm áp và chân thành. Heo biết lắng nghe và khiến người khác cảm thấy thoải mái. Họ cởi mở và dễ tin người.",
      strengths: ["Nhân hậu", "Hào phóng", "Chăm chỉ", "Hòa đồng", "Giàu lòng tin"],
      challenges: ["Ngây thơ", "Hay ỷ lại", "Dễ buông thả", "Cả tin", "Coi trọng vật chất"],
    },
  },
};
