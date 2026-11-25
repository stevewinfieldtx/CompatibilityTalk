import type { CompatibilityResult, Framework, PersonalityType } from './types';

// Vietnamese version of the his/her compatibility sentences. It mirrors the
// English templates in data.ts (same sections, same number of lines, same
// score) and fills them from the Vietnamese type text.

const lc = (s: string) => s.toLowerCase();
const first = (s: string) => s.split('.')[0];

export function buildGenderedResultVi(
  framework: Framework,
  his: PersonalityType,
  her: PersonalityType,
  score: number,
  isSameType: boolean
): CompatibilityResult {
  const hisInsights = isSameType
    ? [
        `Là một người đàn ông ${his.name}, anh ấy thể hiện bản chất ${lc(his.strengths[0])} qua hành động và sự che chở.`,
        `Anh ấy có thể ít bộc lộ mặt ${lc(his.strengths[1])} của mình, nhưng nó ăn sâu trong con người anh.`,
        `Xu hướng ${lc(his.challenges[0])} của anh ấy có thể trỗi dậy khi anh cảm thấy vai trò của mình bị thử thách.`,
        `Anh ấy cần không gian để xử lý cảm xúc theo cách ${his.name} của riêng mình.`,
      ]
    : [
        `Là một người đàn ông ${his.name}, anh ấy dẫn dắt bằng nguồn năng lượng ${lc(his.strengths[0])}.`,
        `Cách thể hiện ${his.name} đầy nam tính khiến anh ấy tự nhiên trở nên ${lc(his.strengths[1])}.`,
        `Anh ấy có thể khó bộc lộ sự mong manh vì bản tính ${lc(his.challenges[0])}.`,
        `Anh ấy thể hiện tình yêu bằng những hành động phù hợp với nét ${lc(his.strengths[2])} của mình.`,
      ];

  const herInsights = isSameType
    ? [
        `Là một người phụ nữ ${her.name}, cô ấy thể hiện bản chất ${lc(her.strengths[0])} qua sự chăm sóc và trực giác.`,
        `Cô ấy cởi mở đón nhận phẩm chất ${lc(her.strengths[1])} của mình.`,
        `Xu hướng ${lc(her.challenges[0])} của cô ấy có thể xuất hiện khi cô cảm thấy không an toàn về mặt cảm xúc.`,
        `Cô ấy cần được công nhận và thấu hiểu về mặt cảm xúc để cảm thấy yên tâm trong mối quan hệ.`,
      ]
    : [
        `Là một người phụ nữ ${her.name}, cô ấy toả ra nguồn năng lượng ${lc(her.strengths[0])}.`,
        `Cách thể hiện ${her.name} đầy nữ tính khiến cô ấy tự nhiên trở nên ${lc(her.strengths[1])}.`,
        `Cô ấy có thể cần được trấn an khi mặt ${lc(her.challenges[0])} của mình trỗi dậy.`,
        `Cô ấy thể hiện tình yêu qua sự kết nối cảm xúc và nét ${lc(her.strengths[2])} của mình.`,
      ];

  const communicationTips = isSameType
    ? [
        `Hai bạn cùng thuộc một loại trong hệ thống ${framework.name}, tạo nên sự thấu hiểu sâu sắc.`,
        `Anh ấy có thể thể hiện ra bên ngoài nhiều hơn, cô ấy thiên về bên trong, hãy trân trọng cả hai cách.`,
        `Hãy dùng ngôn ngữ chung của hai bạn để giải quyết xung đột nhanh hơn.`,
        `Hãy trân trọng việc cùng một loại tính cách có thể biểu hiện rất khác nhau ở anh ấy và ở cô ấy.`,
      ]
    : [
        `Sự thẳng thắn ${his.name} của anh ấy gặp cách tiếp cận ${her.name} của cô ấy, hãy tìm điểm cân bằng.`,
        `Cô ấy cần anh hiểu rằng: ${first(her.communicationStyle)}.`,
        `Anh ấy cần cô hiểu rằng: ${first(his.communicationStyle)}.`,
        `Hãy thu hẹp khoảng cách bằng cách bắt đầu từ điểm mạnh của nhau.`,
      ];

  const intimacyInsights = isSameType
    ? [
        `Các cặp đôi cùng loại thường có sự hòa hợp tự nhiên khi đã hiểu giới tính ảnh hưởng đến cách thể hiện như thế nào.`,
        `Anh ấy mang năng lượng ${lc(his.strengths[0])} đầy nam tính vào sự gần gũi.`,
        `Cô ấy mang năng lượng ${lc(her.strengths[0])} đầy nữ tính vào sự gần gũi.`,
        `Cùng nhau, hai bạn tạo nên sức hút năng động ngay trong sự thấu hiểu chung.`,
      ]
    : [
        `Niềm đam mê ${his.name} của anh ấy gặp sự đón nhận ${her.name} của cô ấy theo những cách đầy sức mạnh.`,
        `Anh ấy cần những biểu hiện ham muốn mang nét ${lc(his.strengths[2])}.`,
        `Cô ấy cần cảm thấy ${lc(her.strengths[2])} để có thể hoàn toàn mở lòng.`,
        `Hãy dành chỗ cho cả năng lượng chủ động của anh ấy lẫn sự đón nhận của cô ấy.`,
      ];

  const challenges = isSameType
    ? [
        `Tính ${lc(his.challenges[0])} của anh ấy có thể va chạm với tính ${lc(her.challenges[0])} của cô ấy: cùng một vấn đề nhưng biểu hiện khác nhau.`,
        `Tranh giành quyền chi phối có thể xuất hiện khi cả hai cùng muốn thể hiện nét ${his.name} nổi trội.`,
        `Anh ấy có thể rút lui, cô ấy có thể đuổi theo: hãy nhận ra mô thức này.`,
      ]
    : [
        `Tính ${lc(his.challenges[0])} của anh ấy có thể kích hoạt tính ${lc(her.challenges[0])} của cô ấy.`,
        `Cô ấy có thể thấy khó đối diện với tính ${lc(his.challenges[1])} của anh ấy.`,
        `Anh ấy có thể gặp khó khăn với những lúc ${lc(her.challenges[1])} của cô ấy.`,
      ];

  const strengths = isSameType
    ? [
        `Thấu hiểu trực giác sâu sắc những nhu cầu cốt lõi của nhau.`,
        `Nét ${lc(his.strengths[0])} của anh ấy che chở, nét ${lc(her.strengths[0])} của cô ấy nuôi dưỡng.`,
        `Hai bạn nói cùng một ngôn ngữ cảm xúc một cách trôi chảy.`,
      ]
    : [
        `Nét ${lc(his.strengths[0])} của anh ấy bổ sung tuyệt đẹp cho nét ${lc(her.strengths[0])} của cô ấy.`,
        `Cô ấy làm dịu xu hướng ${lc(his.challenges[0])} của anh ấy.`,
        `Anh ấy giúp cô ấy vững vàng hơn những lúc ${lc(her.challenges[0])}.`,
      ];

  const loverInsights = isSameType
    ? [
        `Là những người yêu nhau, hai bạn chung một ngôn ngữ đam mê và khao khát.`,
        `Anh ấy thể hiện sự quyến rũ ${his.name} đầy nam tính, cô ấy thể hiện nét mê hoặc ${her.name} đầy nữ tính.`,
        `Sự thấu hiểu lẫn nhau cho phép hai bạn mở lòng và khám phá sâu hơn.`,
        `Thách thức là cân bằng giữa sự giống nhau và việc tạo ra năng lượng bổ sung cho nhau trong chuyện gần gũi.`,
      ]
    : [
        `Năng lượng người yêu ${his.name} của anh ấy mang đến sự ${lc(his.strengths[1])} cho mối quan hệ.`,
        `Bản chất người yêu ${her.name} của cô ấy mang đến nét ${lc(her.strengths[1])} cho mối quan hệ.`,
        `Anh ấy cần cô ấy thể hiện những điều mang nét ${lc(his.strengths[2])} để cảm thấy được khao khát.`,
        `Cô ấy cần anh ấy hiểu rằng cô cần cảm thấy ${lc(her.strengths[2])} trước khi sự gần gũi thể xác trở nên sâu sắc hơn.`,
      ];

  return {
    overallScore: score,
    communicationTips,
    intimacyInsights,
    loverInsights,
    challenges,
    strengths,
    hisInsights,
    herInsights,
  };
}
