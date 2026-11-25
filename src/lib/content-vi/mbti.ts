import type { FrameworkTranslation } from '../types';

export const mbtiVi: FrameworkTranslation = {
  name: "MBTI",
  description:
    "Chỉ số phân loại tính cách Myers-Briggs (MBTI) xác định 16 kiểu tính cách dựa trên sở thích ở bốn chiều: năng lượng, thông tin, cách ra quyết định và lối sống.",
  types: {
    intj: {
      name: "INTJ - Nhà kiến trúc",
      description:
        "Những nhà tư duy chiến lược luôn có kế hoạch cho mọi việc. Giàu trí tưởng tượng, nhiều hoài bão và kín đáo.",
      communicationStyle:
        "Thẳng thắn và logic. INTJ ưa sự hiệu quả và chiều sâu trong trao đổi. Họ coi trọng năng lực và những cuộc trò chuyện giàu trí tuệ.",
      strengths: ["Có tư duy chiến lược", "Độc lập", "Quyết đoán", "Chăm chỉ", "Kiên định"],
      challenges: ["Kiêu ngạo", "Hay gạt bỏ ý kiến người khác", "Quá khắt khe", "Hiếu thắng", "Vụng về chuyện tình cảm"],
    },
    intp: {
      name: "INTP - Nhà tư duy",
      description:
        "Những nhà phát minh sáng tạo với niềm khao khát tri thức không bao giờ vơi. Logic và độc đáo.",
      communicationStyle:
        "Trừu tượng và chính xác. INTP thích khám phá ý tưởng và lý thuyết. Họ nghiêng về lý trí hơn cảm xúc.",
      strengths: ["Giỏi phân tích", "Độc đáo", "Cởi mở", "Tò mò", "Khách quan"],
      challenges: ["Thiếu tinh tế", "Hay tỏ vẻ bề trên", "Đãng trí", "Cầu toàn", "Vụng về trong giao tiếp xã hội"],
    },
    entj: {
      name: "ENTJ - Nhà chỉ huy",
      description:
        "Những nhà lãnh đạo táo bạo, giàu trí tưởng tượng, luôn tìm hoặc tự mở ra con đường. Người chỉ huy bẩm sinh.",
      communicationStyle:
        "Quyết đoán và tự tin. ENTJ chủ động dẫn dắt cuộc trò chuyện và hướng mọi thứ về mục tiêu.",
      strengths: ["Hiệu quả", "Tràn đầy năng lượng", "Tự tin", "Ý chí mạnh mẽ", "Có tư duy chiến lược"],
      challenges: ["Cứng đầu", "Thiếu khoan dung", "Thiếu kiên nhẫn", "Kiêu ngạo", "Quá cứng rắn"],
    },
    entp: {
      name: "ENTP - Nhà tranh biện",
      description:
        "Những người thông minh, ham tò mò, yêu thích các thử thách trí tuệ.",
      communicationStyle:
        "Dí dỏm và thích tranh luận. ENTP mê tranh biện và có thể bảo vệ bất kỳ lập trường nào. Họ tư duy rất nhanh nhạy.",
      strengths: ["Hiểu biết rộng", "Tư duy nhanh", "Độc đáo", "Cuốn hút", "Tràn đầy năng lượng"],
      challenges: ["Hay cãi lý", "Thiếu tinh tế", "Thiếu khoan dung", "Dễ mất tập trung", "Ngại những thói quen cố định"],
    },
    infj: {
      name: "INFJ - Người che chở",
      description:
        "Trầm lặng và huyền bí, nhưng là những người theo đuổi lý tưởng đầy cảm hứng. Hiếm gặp và phức tạp.",
      communicationStyle:
        "Chu đáo và sâu sắc. INFJ thích những cuộc trò chuyện sâu về ý tưởng và cảm xúc.",
      strengths: ["Sáng tạo", "Sâu sắc", "Có nguyên tắc", "Đam mê", "Vị tha"],
      challenges: ["Nhạy cảm", "Cầu toàn", "Kín đáo", "Hay né tránh xung đột", "Dễ kiệt sức"],
    },
    infp: {
      name: "INFP - Người hòa giải",
      description:
        "Những tâm hồn thi vị, tốt bụng và vị tha, luôn sẵn lòng giúp đỡ cho một mục đích tốt đẹp.",
      communicationStyle:
        "Dịu dàng và chân thật. INFP giao tiếp bằng sự ấm áp và luôn tìm kiếm sự kết nối thật lòng.",
      strengths: ["Lý tưởng hóa", "Đồng cảm", "Cởi mở", "Sáng tạo", "Đam mê"],
      challenges: ["Thiếu thực tế", "Hay tự cô lập mình", "Dễ mất tập trung", "Dễ tổn thương về cảm xúc", "Quá muốn làm hài lòng người khác"],
    },
    enfj: {
      name: "ENFJ - Người dẫn dắt",
      description:
        "Những nhà lãnh đạo đầy sức hút và truyền cảm hứng, khiến người nghe say mê.",
      communicationStyle:
        "Ấm áp và thuyết phục. ENFJ là người giao tiếp bẩm sinh, biết truyền cảm hứng và thúc đẩy người khác.",
      strengths: ["Bao dung", "Đáng tin cậy", "Cuốn hút", "Vị tha", "Có tố chất lãnh đạo"],
      challenges: ["Quá lý tưởng hóa", "Hay tỏ vẻ bề trên", "Quá mãnh liệt", "Lòng tự trọng thất thường", "Khó đưa ra quyết định"],
    },
    enfp: {
      name: "ENFP - Người truyền lửa",
      description:
        "Những tâm hồn tự do đầy nhiệt huyết và sáng tạo, luôn tìm được lý do để mỉm cười.",
      communicationStyle:
        "Tràn đầy năng lượng và giàu trí tưởng tượng. ENFP thích cùng nhau nghĩ ý tưởng và sẻ chia cảm xúc.",
      strengths: ["Tò mò", "Tinh ý", "Tràn đầy năng lượng", "Nhiệt tình", "Thân thiện"],
      challenges: ["Khó tập trung", "Hay nghĩ ngợi quá nhiều", "Dễ xúc động", "Độc lập đến mức cực đoan", "Hay bồn chồn"],
    },
    istj: {
      name: "ISTJ - Người hậu cần",
      description:
        "Những người thực tế, coi trọng sự thật, với độ đáng tin cậy khó ai sánh bằng.",
      communicationStyle:
        "Rõ ràng và dựa trên sự thật. ISTJ thích những cuộc trò chuyện thẳng thắn và thiết thực.",
      strengths: ["Trung thực", "Thẳng thắn", "Ý chí mạnh mẽ", "Tận tụy", "Có trách nhiệm"],
      challenges: ["Cứng đầu", "Thiếu tinh tế", "Hay phán xét", "Cứng nhắc", "Hay đổ lỗi"],
    },
    isfj: {
      name: "ISFJ - Người bảo vệ",
      description:
        "Những người che chở tận tâm và ấm áp, luôn sẵn sàng bảo vệ những người thân yêu.",
      communicationStyle:
        "Biết hỗ trợ và thực tế. ISFJ lắng nghe rất tốt và giúp đỡ bằng những việc làm cụ thể.",
      strengths: ["Biết hỗ trợ", "Đáng tin cậy", "Kiên nhẫn", "Tinh ý", "Nhiệt tình"],
      challenges: ["Nhút nhát", "Hay để bụng", "Hay tự ôm việc quá sức", "Ngại thay đổi", "Quá hy sinh bản thân"],
    },
    estj: {
      name: "ESTJ - Người điều hành",
      description:
        "Những nhà quản lý xuất sắc, không ai sánh bằng trong việc điều hành công việc và con người.",
      communicationStyle:
        "Thẳng thắn và có tổ chức. ESTJ giao tiếp với sự quyết đoán và rõ ràng.",
      strengths: ["Tận tâm", "Ý chí mạnh mẽ", "Thẳng thắn", "Trung thực", "Trung thành"],
      challenges: ["Thiếu linh hoạt", "Khó thoải mái với điều khác thường", "Hay phán xét", "Cứng đầu", "Khó thư giãn"],
    },
    esfj: {
      name: "ESFJ - Người chăm lo",
      description:
        "Những người vô cùng chu đáo, hòa đồng và được yêu mến, luôn sẵn lòng giúp đỡ.",
      communicationStyle:
        "Ấm áp và hòa nhã. ESFJ luôn để mọi người được lắng nghe và cảm thấy thoải mái.",
      strengths: ["Kỹ năng thực tế tốt", "Trung thành", "Nhạy cảm", "Ấm áp", "Giỏi kết nối với người khác"],
      challenges: ["Hay lo lắng về vị thế", "Thiếu linh hoạt", "Dễ tổn thương trước lời chê", "Hay cần được quan tâm", "Hy sinh quá mức"],
    },
    istp: {
      name: "ISTP - Bậc thầy thực hành",
      description:
        "Những người thích thử nghiệm, táo bạo và thực tế, là bậc thầy trong việc sử dụng công cụ.",
      communicationStyle:
        "Kiệm lời và thực tế. ISTP thích hành động hơn những cuộc bàn luận dài dòng.",
      strengths: ["Lạc quan", "Sáng tạo", "Thực tế", "Ngẫu hứng", "Lý trí"],
      challenges: ["Cứng đầu", "Thiếu tinh tế", "Kín đáo", "Dễ chán", "Hay liều lĩnh"],
    },
    isfp: {
      name: "ISFP - Người phiêu lưu",
      description:
        "Những nghệ sĩ linh hoạt và duyên dáng, luôn sẵn sàng khám phá.",
      communicationStyle:
        "Dịu dàng và tinh ý. ISFP thể hiện bản thân qua hành động và sự sáng tạo.",
      strengths: ["Duyên dáng", "Nhạy cảm", "Giàu trí tưởng tượng", "Đam mê", "Tò mò"],
      challenges: ["Độc lập mạnh mẽ", "Khó đoán", "Dễ căng thẳng", "Quá thích cạnh tranh", "Lòng tự trọng thất thường"],
    },
    estp: {
      name: "ESTP - Nhà khởi nghiệp",
      description:
        "Những người thông minh, năng động và tinh tường, thực sự thích sống ở ranh giới.",
      communicationStyle:
        "Thẳng thắn và năng động. ESTP hướng đến hành động và rất có sức thuyết phục.",
      strengths: ["Táo bạo", "Lý trí", "Thực tế", "Độc đáo", "Tinh tường"],
      challenges: ["Thiếu tinh tế", "Thiếu kiên nhẫn", "Hay liều lĩnh", "Thiếu nề nếp", "Hay chống đối"],
    },
    esfp: {
      name: "ESFP - Người trình diễn",
      description:
        "Những người biểu diễn ngẫu hứng, tràn đầy năng lượng và nhiệt huyết, yêu cuộc sống.",
      communicationStyle:
        "Sôi nổi và cuốn hút. ESFP mang năng lượng và niềm vui đến mọi cuộc trò chuyện.",
      strengths: ["Táo bạo", "Độc đáo", "Có gu thẩm mỹ", "Thực tế", "Tinh ý"],
      challenges: ["Nhạy cảm", "Ngại xung đột", "Dễ chán", "Dễ mất tập trung", "Kém lập kế hoạch dài hạn"],
    },
  },
};
