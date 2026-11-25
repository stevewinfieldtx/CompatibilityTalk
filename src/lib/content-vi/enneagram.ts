import type { FrameworkTranslation } from '../types';

export const enneagramVi: FrameworkTranslation = {
  name: "Enneagram",
  description: "Enneagram là hệ thống gồm chín kiểu tính cách liên kết với nhau, mô tả những khuôn mẫu trong cách con người nhìn nhận thế giới và xử lý cảm xúc của mình.",
  types: {
    type1: {
      name: "Người cầu toàn",
      description: "Có nguyên tắc, có mục đích, biết tự kiềm chế và cầu toàn. Người Kiểu 1 luôn nỗ lực làm mọi thứ tốt hơn và sợ bản thân có khiếm khuyết.",
      communicationStyle: "Chính xác và có nguyên tắc. Người Kiểu 1 giao tiếp rõ ràng và mong đợi những tiêu chuẩn cao. Họ đánh giá cao sự kỹ lưỡng và tính đúng đắn.",
      strengths: ["Có đạo đức", "Đáng tin cậy", "Làm việc năng suất", "Sáng suốt", "Giàu lý tưởng"],
      challenges: ["Hay chỉ trích", "Cứng nhắc", "Hay phán xét", "Thiếu kiên nhẫn", "Hay lo lắng"]
    },
    type2: {
      name: "Người giúp đỡ",
      description: "Hào phóng, giàu biểu cảm, thích làm hài lòng người khác và hay muốn chiếm hữu. Người Kiểu 2 muốn được yêu thương và được cần đến.",
      communicationStyle: "Ấm áp và biết nâng đỡ. Người Kiểu 2 giao tiếp bằng sự quan tâm và chú ý đến nhu cầu của người khác. Họ sẵn lòng giúp đỡ.",
      strengths: ["Biết quan tâm", "Hào phóng", "Ấm áp", "Biết nâng đỡ", "Dễ thích nghi"],
      challenges: ["Hay chiếm hữu", "Hay can thiệp", "Hay thao túng", "Dễ bám víu", "Hay tự hy sinh"]
    },
    type3: {
      name: "Người thành đạt",
      description: "Linh hoạt, hướng đến thành công, chú trọng hình ảnh và thích cạnh tranh. Người Kiểu 3 muốn được ngưỡng mộ và nổi bật.",
      communicationStyle: "Hiệu quả và gây ấn tượng. Người Kiểu 3 giao tiếp tự tin và tập trung vào kết quả. Họ điều chỉnh phong cách của mình cho phù hợp với người nghe.",
      strengths: ["Tham vọng", "Sôi nổi", "Quyến rũ", "Tự tin", "Hiệu quả"],
      challenges: ["Quá chú trọng hình ảnh", "Nghiện công việc", "Hiếu thắng", "Hời hợt", "Dễ giả tạo"]
    },
    type4: {
      name: "Người cá tính",
      description: "Giàu biểu cảm, kịch tính, hay chìm vào thế giới riêng và dễ thay đổi tâm trạng. Người Kiểu 4 muốn mình độc đáo và được thấu hiểu.",
      communicationStyle: "Sâu sắc và đậm chất cá nhân. Người Kiểu 4 giao tiếp bằng cảm xúc và sự chân thực. Họ tìm kiếm những mối kết nối có ý nghĩa.",
      strengths: ["Sáng tạo", "Chân thực", "Giàu trực giác", "Biết cảm thông", "Giàu biểu cảm"],
      challenges: ["Thất thường", "Hay chìm vào bản thân", "Hay ghen tị", "Dễ kịch tính hóa", "Hay thu mình"]
    },
    type5: {
      name: "Người tìm tòi",
      description: "Nhạy bén, giàu đổi mới, kín tiếng và hay tách biệt khỏi mọi người. Người Kiểu 5 muốn thấu hiểu thế giới.",
      communicationStyle: "Thấu đáo và chính xác. Người Kiểu 5 thích những cuộc trò chuyện giàu trí tuệ và cần thời gian để suy xét. Họ coi trọng chuyên môn.",
      strengths: ["Nhạy bén", "Giàu sáng kiến", "Khách quan", "Ham tìm hiểu", "Sâu sắc"],
      challenges: ["Xa cách", "Biệt lập", "Kín tiếng", "Hay khiêu khích", "Hay dè sẻn"]
    },
    type6: {
      name: "Người trung thành",
      description: "Tận tâm, đề cao sự an toàn, hay lo âu và đa nghi. Người Kiểu 6 tìm kiếm sự an toàn và chỗ dựa.",
      communicationStyle: "Hay đặt câu hỏi và kỹ lưỡng. Người Kiểu 6 hỏi nhiều để hiểu thấu đáo mọi điều. Họ coi trọng sự đáng tin cậy và niềm tin.",
      strengths: ["Trung thành", "Có trách nhiệm", "Đáng tin", "Chăm chỉ", "Dễ gần"],
      challenges: ["Hay lo âu", "Đa nghi", "Hay lưỡng lự", "Dễ phản ứng thái quá", "Hay phòng thủ"]
    },
    type7: {
      name: "Người nhiệt huyết",
      description: "Tự phát, đa năng, dễ phân tán và ham có thêm nhiều thứ. Người Kiểu 7 muốn được hạnh phúc và tránh nỗi đau.",
      communicationStyle: "Lạc quan và nhanh nhẹn. Người Kiểu 7 là những người kể chuyện cuốn hút, hay nhảy từ chủ đề này sang chủ đề khác. Họ giữ cho mọi thứ luôn nhẹ nhàng.",
      strengths: ["Lạc quan", "Đa năng", "Ngẫu hứng", "Vui tươi", "Thực tế"],
      challenges: ["Dễ phân tán", "Ngại gắn bó", "Thiếu kiên nhẫn", "Hay trốn tránh", "Hay đặt mình lên trước"]
    },
    type8: {
      name: "Người thách thức",
      description: "Tự tin, quyết đoán, hay đối đầu và thích chi phối. Người Kiểu 8 muốn nắm quyền kiểm soát.",
      communicationStyle: "Thẳng thắn và mạnh mẽ. Người Kiểu 8 nói điều mình nghĩ mà không nói giảm nói tránh. Họ tôn trọng sức mạnh và sự trung thực.",
      strengths: ["Mạnh mẽ", "Biết che chở", "Quyết đoán", "Tự tin", "Tháo vát"],
      challenges: ["Hay áp đặt", "Hay đối đầu", "Dễ gây e ngại", "Thiếu tinh tế", "Hay trả đũa"]
    },
    type9: {
      name: "Người hòa giải",
      description: "Dễ tiếp nhận, biết trấn an, dễ an phận và hay buông xuôi. Người Kiểu 9 tìm kiếm sự bình yên trong lẫn ngoài.",
      communicationStyle: "Dịu dàng và dễ đồng thuận. Người Kiểu 9 là người biết lắng nghe và tránh xung đột. Họ có thể khó nói ra nhu cầu của chính mình.",
      strengths: ["Hiền hòa", "Dễ tính", "Bao dung", "Biết nâng đỡ", "Kiên nhẫn"],
      challenges: ["Thụ động", "Bướng bỉnh", "Dễ an phận", "Hay thờ ơ", "Hay quên mất bản thân"]
    }
  }
};
