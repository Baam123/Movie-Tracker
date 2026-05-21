const CATEGORIES = [
  { id: 'all', label: '🎬 Tất cả' },
  { id: 'vn', label: '🇻🇳 Việt Nam' },
  { id: 'us', label: '🇺🇸 Âu Mỹ' },
  { id: 'thai', label: '🇹🇭 Thái Lan' },
  { id: 'kr', label: '🇰🇷 Hàn Quốc' },
  { id: 'tq', label: '🇨🇳 Trung Quốc' },
  { id: 'hh', label: '🦎 Hoạt hình' },
  { id: 'jp', label: '🇯🇵 Nhật Bản' },
  { id: 'horror', label: '👻 Kinh dị' },
];

let movies = [
  { id: 1, name: 'Ma Da Hàn Quốc: Hồ Nuốt Người', year: 2026, cat: ['kr', 'horror'], rating: 5, poster: 'https://i.ibb.co/6RgLnCyX/ho-nuot-nguoi.jpg', note: 'Ẩn sau vẻ bình lặng của hồ Salmokji là nơi trú ngụ của một thế lực quỷ dữ. Quyết tâm tìm hiểu những vụ án bí ẩn tại đây, một nhóm phóng viên đã dấn thân điều tra mà không biết mình đang tự dẫn xác vào bẫy tử thần. Không chỉ săn lùng mạng sống, con ác ma dưới lòng hồ còn thao túng nạn nhân bằng những lời thì thầm đầy ám ảnh. Khi đêm xuống, mặt hồ tĩnh lặng chính thức trở thành nấm mồ không lối thoát cho những kẻ đã lọt vào tầm ngắm của nó.' },
  { id: 2, name: 'Lầu Chú Hỏa', year: 2026, cat: ['vn', 'horror'], rating: 5, poster: 'https://i.ibb.co/TV8qw7S/lau-chu-hoa.jpg', note: 'một nhóm streamer livestream khám phá Lầu Chú Hỏa, dinh thự bỏ hoang gắn với truyền thuyết về con ma nhà họ Hứa. Nhưng ngay từ những phút đầu, mọi thứ đã vượt khỏi tầm kiểm soát. Hiện tượng siêu nhiên liên tiếp xảy ra, kéo cả nhóm vào vòng xoáy ám ảnh không lối thoát. Buổi livestream nhanh chóng biến thành nơi “tạo nghiệp - trả nghiệp”, khi từng người phải trả giá cho lòng tham và sự báng bổ trước linh hồn oan khuất của cô tiểu thư họ Hứa.' },
  { id: 3, name: 'Trại Buôn Người', year: 2026, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/qYYxnpbj/trai-buon-nguoi.png', note: 'Trại Buôn Người dựa trên câu chuyện có thật về nạn buôn người và cuộc vượt ngục tại Tịnh Biên năm 2022.' },
  { id: 4, name: 'Sợi Chỉ Đỏ', year: 2026, cat: ['vn', 'horror'], rating: 5, poster: 'https://i.ibb.co/zTJ5dJxt/soi-chi-do.jpg', note: 'Một kẻ cuồng tín sau cơn đau đầu dữ dội phát hiện ra mình có một con mắt dọc trên trán. Những vụ sát nhân hàng loạt. Những hồn ma bóng quỷ lẩn khuất trong đời sống. Những nỗi sợ rình rập từ ám ảnh quá khứ. Sợi Chỉ Đỏ là gì, và sẽ kết nối tất cả như thế nào?' },
  { id: 5, name: 'Nghỉ Hè Sợ Nghỉ Hưu', year: 2026, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/JFgYGcqv/nghi-he-so-nghi-huu.png', note: 'Phim xoay quanh người cháu trai thuộc thế hệ Z - Trí Bình và người ông nội là cựu chiến binh - ông Thời. Giữa hai ông cháu có sự đối lập rõ rệt khi một bên là vẻ hiện đại, thời thượng đặc trưng của người trẻ và một bên là nét truyền thống, nghiêm trang của người lính. Nếu ông Thời luôn trăn trở về những ký ức xưa và khát khao tìm được đồng đội thời chiến tranh, thì Trí Bình lại loay hoay đối mặt với khủng hoảng “đi tìm sự rực rỡ cho mình” ở đời sống hiện tại.' },
  { id: 6, name: 'Người Được Chọn', year: 2026, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/HvrQBVx/nguoi-duoc-chon.jpg', note: '"Mất sạch sành sanh mới đc manh áo đỏ".<br>Phim điện ảnh đầu tiên của Việt Nam về hầu đồng. Bộ phim Người Được Chọn sẽ đi sâu vào thế giới nội tâm của con người khi đứng trước niềm tin, danh phận và những đánh đổi không thể quay đầu.' },
  { id: 7, name: 'Cận Kề Cái Chết', year: 2027, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/n88kgGjR/can-ke-cai-chet.png', note: 'Lấy cảm hứng từ những cuộc vượt ngục huyền thoại của cuộc kháng chiến chống Mỹ, phim sẽ là hành trình sinh tồn đầy cam go với những thử thách đặt bản thân nhân vật vào lằn ranh sinh-tử.' },
  { id: 8, name: 'Mật Mã Đông Dương', year: 2027, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/HLrF2MHP/mmdd.png', note: '' },
  { id: 9, name: 'Phí Phông: Quỷ Máu Rừng Thiên', watched: true, year: 2026, cat: ['vn', 'horror'], rating: 5, poster: 'https://i.ibb.co/zT2g0GrY/phi-phong.jpg', note: 'Phim tạo được cảm giác ám ảnh đến từ câu chuyện và dư âm cảm xúc nhiều hơn là những cú giật mình tức thời.' },
  { id: 10, name: 'Heo 5 Móng', year: 2026, cat: ['vn', 'horror'], rating: 4, poster: 'https://i.ibb.co/6c4m90Pn/heo-5-mong.jpg', note: 'Phim kinh dị năng đô kết hợp cùng nhiều yếu tố bất ngờ, khai thác văn hóa dân gian một cách sâu sắc.' },
  { id: 11, name: 'Đại Tiệc Trăng Máu 8', year: 2026, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/7dtJHT7Z/dai-tiec-trang-mau.jpg', note: 'Phim hài, nhây, cà khịa không chừa một ai, từ thị trường điện ảnh, đến tên tuổi trong ngành, cho tới chính bản thân nó, mà vẫn giữ được chiều sâu ở câu chuyện cha con và tình yêu đối với nghề làm phim.' },
  { id: 12, name: 'Trùm Sò', year: 2026, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/NgyynjRr/trum-so.jpg', note: 'Phim mang tính giải trí an toàn, phù hợp với khán giả gia đình và trẻ nhỏ. Phim có những điểm sáng về cảm xúc và thông điệp.' },
  { id: 13, name: 'Hoppers: Cú Nhảy Kỳ Diệu', watched: true, year: 2026, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/TBMy4rhT/hoppers.jpg', note: 'phim sở hữu “Animal Magnetism” (sức hút động vật) không thể cưỡng lại. Nó vừa có sự hài hước để các bạn nhỏ phấn khích, vừa có những tầng nghĩa sâu sắc để người lớn phải suy ngẫm.' },
  { id: 14, name: 'Đội Thám Tử Cừu: Án Mạng Lúc Nửa Đêm', year: 2026, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/4RHTZ3x6/sheep-detective.jpg', note: 'Phim không chỉ dừng lại ở yếu tố giải trí mà còn truyền tải thông điệp ý nghĩa về sự thông minh và khả năng vượt qua thử thách của mọi sinh vật.' },
  { id: 15, name: 'Thiên Đường Máu', watched: true, year: 2025, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/m5qpkFXk/thien-duong-mau.jpg', note: 'Phim tuyên truyền và nâng cao cảnh giác về những chiêu trò đào lửa mà bất cứ ai đều có thể mắc phải. Phim cũng nhấn mạnh một hệ luỵ xã hội đáng suy ngẫm: người từng là nạn nhân của “đào lửa” có thể trở thành kẻ tiếp tay cho chính bi kịch ấy, từ một nạn nhân rồi sẽ kéo theo hàng trăm nạn nhân khác.' },
  { id: 16, name: 'Cục Vàng Của Ngoại', watched: true, watched: true, year: 2025, cat: ['vn'], rating: 4, poster: 'https://i.ibb.co/KzSf7LNS/cuc-vang-cua-ngoai.jpg', note: 'Phim ca ngợi sự hy sinh và tình yêu thương vĩ đại của người mẹ dành cho con cái, của người bà dành cho các cháu.' },
  { id: 17, name: 'Anh Hùng', year: 2026, cat: ['vn'], rating: 4, poster: 'https://i.ibb.co/TDwV4SMr/anh-hung.jpg', note: 'Nội dung phim Anh Hùng tập trung vào bi kịch của Hùng, khi con gái út My của anh bị bệnh suy gan. Trước tình thế gấp rút của cô bé, Hùng nghĩ ra nhiều kế sách kiếm tiền chữa bệnh cho con, trong đó có việc dàn dựng một phi vụ giải cứu để thu hút sự chú ý và đóng góp của dư luận.' },
  { id: 18, name: 'Song Hỷ Lâm Nguy', year: 2026, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/20qjKnsf/song-hy-lam-nguy.png', note: 'Phim về tình cảm gia đình, hôn nhân, những khúc mắc thường gặp trong cuộc sống, phim đáng suy ngẫm, kịch bản đời thường, diễn viên diễn tốt dễ làm khán giả đồng cảm.Phim hoạt hình tuyệt vời về tình bạn và dũng cảm.' },
  { id: 19, name: 'Thẩm Mỹ Viện Âm Phủ', year: 2026, cat: ['vn', 'horror'], rating: 4, poster: 'https://i.ibb.co/Vpr3YVwp/tham-my-vien-am-phu.png', note: 'Khi con người quá ám ảnh với vẻ đẹp thì điều gì sẽ xảy ra?' },
  { id: 20, name: 'Ma Xó', year: 2026, cat: ['vn', 'horror'], rating: 5, poster: 'https://i.ibb.co/931HNDL0/ma-xo.jpg', note: 'Ma xó được truyền miệng là linh hồn không siêu thoát, bị giữ lại trong nhà và có thể trở thành mối nguy nếu bị “nuôi” sai cách. Không chỉ là yếu tố tâm linh kinh dị, phim còn gợi mở câu chuyện về cái giá của sự sống qua thông điệp đầy ám ảnh.</br> "CỨU MỘT SINH MẠNG - PHẢN MỘT LINH HỒN"' },
  { id: 21, name: 'Nhà Ma Xó', year: 2025, cat: ['vn', 'horror'], rating: 4, poster: 'https://i.ibb.co/LXHqX8sD/nha-ma-xo.png', note: 'Nhà Ma Xó không chỉ là một bộ phim kinh dị tâm linh đơn thuần mà còn là một câu chuyện gia đình đậm chất Việt Nam, lồng ghép khéo léo những yếu tố dân gian miền quê Nam Bộ.' },
  { id: 22, name: 'Địa Đạo: Mặt Trời Trong Bóng Tối', watched: true, year: 2025, cat: ['vn'], rating: 4, poster: 'https://i.ibb.co/4gtzq4Vp/dia-dao.png', note: 'Phim đưa khán giả quay trở về năm 1967, khi chiến trường Bình An Đông, Củ Chi bạc màu khói từ từng đợt dội bom như trút của Mỹ hòng phá hủy bức tường thành kiên cố bảo vệ Sài Gòn. Đội du kích 21 người do Bảy Theo chỉ huy vẫn bám trụ lại nơi đây.' },
  { id: 23, name: 'Thỏ Ơi', year: 2026, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/tTZMvRRL/tho-oi.jpg', note: 'Từ tiền đề một cô gái trẻ có biệt danh Thỏ xuất hiện trong talkshow tư vấn tình cảm của “Chị bờ vai” Hải Linh (LyLy), Thỏ Ơi!! dần mở ra không gian căng thẳng như một phiên đối chất. Thỏ là nạn nhân của gã bạn trai bạo hành, đồng thời vướng vào mối quan hệ với người đã có gia đình. Nhân vật đứng ở ranh giới nhập nhằng giữa đáng thương và đáng trách. Khi câu chuyện được kể trước công chúng, talkshow không còn là nơi chữa lành mà trở thành nơi mọi quan điểm đạo đức bị mổ xẻ.' },
  { id: 24, name: 'Mưa Đỏ', watched: true, year: 2025, cat: ['vn'], rating: 4, poster: 'https://i.ibb.co/xSf4t2NB/mua-do.png', note: 'Mưa đỏ là phim truyện điện ảnh về đề tài chiến tranh cách mạng với kịch bản của nhà văn Chu Lai. Phim lấy cảm hứng và hư cấu từ sự kiện 81 ngày đêm năm 1972 khi nhân dân, cán bộ và các chiến sĩ đã anh dũng, kiên cường chiến đấu bảo vệ Thành cổ Quảng Trị.' },
  { id: 25, name: 'Đèn Âm Hồn', watched: true, year: 2025, cat: ['vn', 'horror'], rating: 4, poster: 'https://i.ibb.co/3yyJmDh1/den-am-hon.jpg', note: 'Lấy cảm hứng từ “Chuyện Người Con Gái Nam Xương”, Đèn Âm Hồn kể câu chuyện xảy ra tại một ngôi làng miền Bắc thời phong kiến. Thương, một người mẹ đơn thân, ở lại làng cùng con trai Lĩnh trong khi chờ chồng đi lính trở về. Một ngày, Lĩnh nhặt được một cây đèn kỳ lạ và bắt đầu gọi chiếc bóng in trên tường là cha khán giả. Tuy nhiên, cô đồng trong làng cảnh báo rằng đây là “đèn âm hồn”, có khả năng triệu hồi ác linh quay lại báo thù. Từ đó, hàng loạt hiện tượng kỳ bí, rùng rợn liên tiếp xảy ra, cuốn Thương và dân làng vào một chuỗi sự kiện ma quái.' },
  { id: 26, name: 'Nhà Gia Tiên', watched: true, year: 2025, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/NgPD92qb/nha-gia-tien.jpg', note: 'Phim nhắc nhở về tầm quan trọng của gia đình và nguồn cội. Bộ phim là lời kêu gọi thế hệ trẻ hãy trân trọng những phút giây bên người thân và duy trì những nghi lễ truyền thống tốt đẹp.' },
  { id: 27, name: 'Quỷ Nhập Tràng 2', year: 2026, cat: ['vn', 'horror'], rating: 4, poster: 'https://i.ibb.co/wkPDLYh/quy-nhap-trang-2.jpg', note: 'Phim xoay quanh quá khứ của Minh Như (Khả Như) khi cô quay về xưởng nhuộm của gia đình sau nhiều năm bị đuổi và dần phát hiện ra nhiều bí mật đáng sợ: cái chết bí ẩn của mẹ, giao kèo đẫm máu với quỷ và hàng loạt hiện tượng tâm linh ngày càng khó giải thích diễn ra trong căn nhà. Càng về cuối phim thì mọi sự kiện tâm linh & mức độ kịch tính càng được đẩy lên cao.' },
  { id: 28, name: 'Quỷ Nhập Tràng', watched: true, year: 2025, cat: ['vn', 'horror'], rating: 4, poster: 'https://i.ibb.co/TMz7qw2R/quy-nhap-trang.jpg', note: 'Phim lấy cảm hứng từ câu chuyện có thật và “truyền thuyết kinh dị nhất về người chết sống lại” - Ở một ngôi làng vùng cao, cặp vợ chồng Quang và Như sống bằng nghề mai táng. Cuộc sống yên bình của họ bị xáo trộn khi phát hiện một cỗ quan tài vô chủ trên mảnh đất nhà mình. Từ đây, những hiện tượng kỳ lạ bắt đầu xảy ra và ám ảnh cả ngôi làng.' },
  { id: 29, name: 'Âm Dương Lộ', year: 2025, cat: ['vn', 'horror'], rating: 5, poster: 'https://i.ibb.co/WWZNT1vh/am-duong-lo.jpg', note: 'Âm Dương Lộ là bộ phim kinh dị hành trình đầu tiên của Việt Nam. Vì mưu sinh, một cử nhân thất nghiệp (Bạch Công Khanh thủ vai) lén cha chở một thi thể nữ về Tây Nguyên ngay giữa đêm khuya. Trên hành trình, anh buộc phải đối mặt với một thế giới siêu nhiên đầy rẫy vong linh, một cô gái bí ẩn anh đem lòng tơ tưởng và một sự thật hắc ám gắn liền với chiếc xe cứu thương mà anh đang cầm lái.' },
  { id: 30, name: 'Nhà Không Bán', year: 2022, cat: ['vn', 'horror'], rating: 4, poster: 'https://i.ibb.co/DPKSgwSD/nha-khong-ban.png', note: 'Phim kể về tội ác trong quá khứ của ông Cả nhưng đã bị chôn vùi nhiều năm tại căn nhà xây từ thời Pháp thuộc của gia đình ông. Sau khi ông Cả mất đã để lại căn nhà cho 2 đứa con Ngọc và Ngà. Bà Ngọc sang Mỹ định cư, khi trở về Việt Nam muốn bàn chuyện bán căn nhà cũ với em trai Ngà thì lại phát hiện có rất nhiều chuyện kỳ lạ, ma quái xảy ra ngăn cản ý định của họ.' },
  { id: 31, name: 'Dưới Đáy Hồ', year: 2025, cat: ['vn', 'horror'], rating: 5, poster: 'https://i.ibb.co/8D3jwFPQ/duoi-day-ho.jpg', note: 'Nhiều ác sự lẫn các lời đồn từ truyền thuyết về cái hồ siêu nhiên kì lạ đã xuất hiện. Có lẽ, những kẻ dưới đáy hồ không bao giờ ngủ yên, chúng chỉ đợi chờ thời khắc thay thế phiên bản tồn tại trên bờ đang lẩn trốn. Bạn có dám đối diện song trùng của chính mình?' },
  { id: 32, name: 'Lật Mặt 8: Vòng Tay Nắng', watched: true, year: 2025, cat: ['vn'], rating: 4, poster: 'https://i.ibb.co/CpG1wMkq/lat-mat-8.jpg', note: 'Phim xoay quanh câu chuyện theo đuổi đam mê trở thành ca sĩ thần tượng của một nhóm bạn trẻ tại vùng quê miền Trung đầy nắng và gió. Mỗi thành viên trong nhóm lại có mỗi hoàn cảnh khác nhau, từ một đại tiểu thư nhà giàu đến một cô nàng rong ruổi bán dừa kiếm sống qua ngày' },
  { id: 33, name: 'Út Lan: Oán Linh Giữ Của', watched: true, year: 2025, cat: ['vn', 'horror'], rating: 5, poster: 'https://i.ibb.co/XxxzVYvc/ut-lan.jpg', note: 'Bí mật của chiếc chum lớn nằm giữa căn hầm tối không chỉ là thứ đã bị chôn vùi - mà còn là oán linh chưa từng siêu thoát.' },
  { id: 34, name: 'Tìm Xác: Ma Không Đầu', year: 2025, cat: ['vn', 'horror'], rating: 3, poster: 'https://i.ibb.co/Pvp1rMKV/ma-khong-dau.jpg', note: 'Phim hướng đến câu chuyện mang tính nhân văn thay vì đào sâu vấn đề tâm linh, ma quỷ.' },
  { id: 35, name: 'Mang Mẹ Đi Bỏ', year: 2025, cat: ['vn'], rating: 4, poster: 'https://i.ibb.co/27VxKcX7/mang-me-di-bo.jpg', note: 'Phim kể về số phận của Hoan - một chàng trai trẻ ngày ngày hóa thân thành “thằng hề đường phố” với ngón nghề cắt tóc vỉa hè để kiếm tiền lo cho mẹ. Mẹ Hoan là bà Lê Thị Hạnh (Hồng Đào), mắc bệnh Alzheimer và cư xử như một đứa trẻ con. Căn bệnh của mẹ không chỉ là gánh nặng mưu sinh, mà còn lấy đi của Hoan một cuộc đời tự do với những ước mơ chưa thể thực hiện. Một ngày, Hoan quyết định mang mẹ “đi bỏ” cho người anh trai ở Hàn Quốc, người mà chính Hoan còn không biết mặt mũi ra sao.' },
  { id: 36, name: 'Bộ Tứ Báo Thủ', year: 2025, cat: ['vn'], rating: 4, poster: 'https://i.ibb.co/fGt4DjgT/bo-tu-bao-thu.jpg', note: 'Quốc Anh và Quỳnh Anh dần chìm vào mối quan hệ “cơm không lành, canh không ngọt”, nghi án xuất hiện người thứ 3. Để giúp cháu mình, bạn mình, Bộ Tứ Báo Thủ ra tay “xử trí” cái mối tình này. Bộ tứ báo thủ chính thức xuất hiện cùng với phi vụ báo thế kỉ.' },
  { id: 37, name: 'Làm Giàu Với Ma', watched: true, year: 2024, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/FLFTLCxG/lam-giau-voi-ma.jpg', note: 'Phim kể về hành trình của Lanh - một thanh niên lêu lổng, ngỗ ngược, dính vào cờ bạc nợ nần. Trên quãng đường chạy trốn khỏi đám giang hồ chủ nợ hung hăng, anh vô tình "đụng" phải ma nữ Na và bị cô nàng nhờ vả giúp mình tìm gặp đứa con mà cô đã phải lìa xa từ lúc chào đời. Đổi lại, cô sẽ dùng quyền năng tâm linh để giúp anh "làm giàu".' },
  { id: 38, name: 'Làm Giàu Với Ma 2: Cuộc Chiến Hột Xoàn', watched: true, year: 2025, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/jv7y5M0S/lam-giau-voi-ma-2.jpg', note: 'Hành trình đầy bi hài của 5 con người với những toan tính khác nhau nhằm đưa thi thể minh tinh Anh Thư về quê nhà, đổi lại hồn ma của cô hứa sẽ trả cho họ chiếc nhẫn kim cương trị giá 9 tỷ.' },
  { id: 39, name: 'Khế Ước Bán Dâu', year: 2025, cat: ['vn', 'horror'], rating: 4, poster: 'https://i.ibb.co/h18zxNmt/khe-uoc-ban-dau.jpg', note: 'Lấy cảm hứng từ tiểu thuyết tâm linh của nhà văn Thục Linh kể về Nhài - một cô dâu trẻ được gả vào gia tộc họ Vũ và vô tình bị cuốn vào một “khế ước” kinh hoàng với quỷ dữ.' },
  { id: 40, name: 'Tử Chiến Trên Không', watched: true, year: 2025, cat: ['vn'], rating: 4, poster: 'https://i.ibb.co/gZNJyhjJ/tu-chien-tren-khong.jpg', note: 'Tử Chiến Trên Không lấy cảm hứng từ những vụ cướp máy bay chấn động Việt Nam thời hậu chiến.' },
  { id: 41, name: 'Cải Mã', year: 2025, cat: ['vn', 'horror'], rating: 4, poster: 'https://i.ibb.co/Vpm12SSy/cai-ma.jpg', note: 'Khi đại gia đình ông Quang trở về quê để thực hiện nghi lễ cải táng đã bị trì hoãn quá lâu, họ không chỉ đối diện với những nghi thức tâm linh, mà còn vô tình khơi dậy vòng xoáy nghiệp báo truyền đời.' },
  { id: 42, name: 'Phá Đám Sinh Nhật Mẹ', year: 2025, cat: ['vn'], rating: 4, poster: 'https://i.ibb.co/93b68dC5/pha-dam-sinh-nhat-me.jpg', note: 'Bị giang hồ đe doạ, một người con trai đã làm đám ma giả cho mẹ mình để lừa tiền bảo hiểm. Nhưng kế hoạch bất hiếu điên rồ của anh liên tục bị phá đám bởi từ người lạ đến người quen, nhất là khi ngày anh đưa mẹ vào hòm lại tình cờ là ngày sinh nhật 60 tuổi của bà.' },
  { id: 43, name: 'ParaNorman', watched: true, year: 2012, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/3m3Zb780/paranorman.jpg', note: 'Trong bộ phim ly kỳ hài hước ParaNorman, một thị trấn nhỏ bị vây hãm bởi các thây ma. Họ biết kêu gọi ai? Chỉ có một cậu bé luôn bị hiểu lầm trong thị trấn tên là Norman (Kodi Smit-McPhee lồng tiếng) mới có thể nói chuyện được với người chết. Ngoài các thây ma ra, cậu phải chịu trách nhiệm với bọn ma quỷ, phù thủy, và tệ hơn cả là bọn người lớn khờ khạo để giải cứu thị trấn khỏi lời nguyền hàng trăm năm. Nhưng cậu bé nói chuyện với người chết này có thể sẽ thấy năng lực huyền bí của mình chạm đến những giới hạn của thế giới bên kia.' },
  { id: 44, name: 'Quỷ Dữ Từ Luyện Ngục', year: 2026, cat: ['thai', 'horror'], rating: 5, poster: 'https://i.ibb.co/39qX3F1Y/quy-du-tu-luyen-nguc.jpg', note: 'Kingkaew - một phụ nữ mắc bệnh tâm thần - bị kết án tử hình trong một vụ án chấn động dù luôn kêu oan. Sau khi chết, linh hồn cô quay lại nhà tù để báo thù, gieo rắc nỗi ám ảnh với câu nói “Tôi vô tội”.' },
  { id: 45, name: 'Buôn Thần Bán Thánh', year: 2025, cat: ['thai'], rating: 5, poster: 'https://i.ibb.co/DP0HfDQP/buon-than-ban-thanh.png', note: 'Ake - một chàng trai trẻ sống cùng người cha đang mắc bệnh hiểm nghèo - quyết định bán lại bộ sưu tập bùa cổ của cha để có tiền điều trị cho ông. Ngay lúc đó, cậu vô tình phát hiện ra lá bùa cực kỳ quý hiếm liên quan đến cái chết bí ẩn của một ông trùm tội phạm cách đây hàng chục năm lại nằm trong căn nhà cũ kỹ của mình. Phát hiện này đưa Ake vào thế giới ngầm của thị trường bùa chú và bắt đầu hành trình “buôn thần bán thánh” đi kèm những nguy hiểm khôn lường.' },
  { id: 46, name: 'Hoàng Tử Quỷ', year: 2025, cat: ['vn', 'horror'], rating: 5, poster: 'https://i.ibb.co/gbChRqDw/hoang-tu-quy.png', note: 'Hoàng Tử Quỷ xoay quanh Thân Đức - một hoàng tử được sinh ra nhờ tà thuật. Trốn thoát khỏi cung cấm, Thân Đức tham vọng giải thoát Quỷ Xương Cuồng khỏi Ải Mắt Người để khôi phục Xương Cuồng Giáo. Nhưng kế hoạch của Thân Đức chỉ thành hiện thực khi hắn có đủ cả hai “nguyên liệu” - Du Hồn Giả và Bạch Hổ Nguyên Âm. Đội lốt một lang y hiền lành, muốn chữa bệnh cứu người, Thân Đức lên đường đến làng Hủi và đụng độ trưởng làng Lỗ Đạt mạnh mẽ, liệu hắn có thể đạt được âm mưu tà ác của mình?' },
  { id: 47, name: 'Mùi Phở', year: 2026, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/SDP9pmX7/mui-pho.png', note: 'Câu chuyện về sự xung đột thế hệ và những va chạm giữa quan niệm cũ và lối sống hiện đại, xoay quanh món Phở - biểu tượng ẩm thực Việt. Đằng sau những mâu thuẫn và tranh cãi ấy, từng bí mật dần được hé lộ, mở ra hành trình tìm lại sự ấm áp của tình thân qua những tình tiết hài hước, dí dỏm và đầy duyên dáng.' },
  { id: 48, name: 'Cuốc Xe Âm Phủ', year: 2026, cat: ['vn', 'horror'], rating: 5, poster: 'https://i.ibb.co/d0RFJrHz/cuoc-xe-am-phu.jpg', note: 'Hùng - tài xế taxi, kinh hoàng phát hiện vị khách cuối cùng trong ngày lại là một xác chết, kèm bọc tiền nhờ đi hỏa táng. Cứ tưởng chỉ là sự tình cờ xui xẻo, nhưng đó lại là một "nghiệp báo" đáng sợ.' },
  { id: 49, name: 'BUS: Chuyến Xe Một Chiều', year: 2026, cat: ['vn', 'horror'], rating: 5, poster: 'https://i.ibb.co/PGJTRbvZ/bus.jpg', note: 'Những gương mặt hoang mang, những ánh nhìn thất thần. Họ đang chạy trốn điều gì? Một thế lực tâm linh oán hận đang đòi mạng, hay một tội ác chôn vùi trong quá khứ nay quay về báo thù?' },
  { id: 50, name: 'Báu Vật Trời Cho', year: 2026, cat: ['vn'], rating: 4, poster: 'https://i.ibb.co/1tVQd865/bau-vat-troi-cho.png', note: 'Ngọc (Phương Anh Đào) là mẹ đơn thân, có con nhờ thụ tinh nhân tạo từ tinh trùng hiến tặng. Trong chuyến đi biển để đổi gió và trốn chạy quá khứ, cô & Tô chạm mặt Hồng (Tuấn Trần) – chàng trai làng chài phóng khoáng, cũng chính là người góp phần tạo nên sự ra đời của Tô. Cuộc gặp gỡ tréo ngoe ấy kéo ba con người xa lạ vào hàng loạt tình huống dở khóc dở cười lẫn căng thẳng, khi mọi thứ bắt đầu vượt ngoài kế hoạch.' },
  { id: 51, name: 'Nhà Bà Nữ', watched: true, year: 2023, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/hqPtC51/nha-ba-nu.png', note: 'Phim xoay quanh gia đình của bà Nữ (nghệ sĩ Lê Giang đảm nhận) - người làm nghề bán bánh canh. Truyện phim khắc họa mối quan hệ phức tạp, đa chiều xảy ra với các thành viên trong gia đình' },
  { id: 52, name: 'Nhà Ba Tôi Một Phòng', year: 2026, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/jv529GVr/nha-ba-toi-mot-phong.png', note: 'Lấy bối cảnh một khu chung cư cũ với căn nhà chỉ vỏn vẹn một phòng, Nhà Ba Tôi Một Phòng khắc họa mối quan hệ “lệch pha” giữa người cha bảo thủ và cô con gái Gen Z đầy mơ ước. Khi những khác biệt thế hệ va chạm trong không gian chật chội, tình thân dần được thử thách và hàn gắn. Bộ phim mang đến một lát cắt gần gũi về gia đình Việt hiện đại, nơi yêu thương đôi khi bắt đầu từ sự thấu hiểu.' },
  { id: 53, name: 'Cảm Ơn Người Đã Thức Cùng Tôi', year: 2026, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/bRsNGH6P/cam-on-nguoi-da-thuc-cung-toi.jpg', note: 'Phim là một hành trình cảm xúc của những người trẻ đi tìm đáp án cho câu hỏi “Ước mơ của bạn là gì?”, để rồi chính họ khi bước vào thế giới trưởng thành dần nhận ra câu hỏi quan trọng nhất là “Mình muốn thực hiện ước mơ đó cùng ai?”' },
  { id: 54, name: 'Quỷ Bắt Hồn', year: 2026, cat: ['vn', 'horror'], rating: 5, poster: 'https://i.ibb.co/1YghkrxP/quy-bat-hon.jpg', note: 'nơi một gia đình tưởng chừng bình thường dần bị bao vây bởi những hiện tượng quỷ dị. Khi nỗi sợ không còn dừng lại ở cảm giác… mà trở thành thứ có thể nghe thấy, có thể gọi tên<br>"ĐÚNG THÁNG ĐÚNG NGÀY, HỒN VỀ THEO QUỶ"' },
  { id: 55, name: 'Trấn Yểm', year: 2026, cat: ['vn'], rating: 5, poster: 'https://i.ibb.co/chWrfdqp/tran-yem.jpg', note: 'Sau cái chết bí ẩn của cha mình trong chính ngôi nhà mới xây, Nguyễn Văn Ân, một thanh niên trẻ sống cùng người mẹ suy sụp tinh thần, quyết định quay lại toàn bộ những gì đang xảy ra trong căn nhà của mình bằng một series vlog mang tên “Chuyện tâm linh trong nhà mình”. Nhưng rất nhanh, những hiện tượng tâm linh kỳ lạ liên tục xuất hiện và đặc biệt là người mẹ của Ân ngày càng trở nên bất thường. Khi Ân phát hiện một lá bùa cổ bị chôn dưới nền nhà, mọi thứ dần hé lộ: ngôi nhà là một phần trong một nghi thức yểm bùa Lỗ Ban, một loại bùa cổ truyền được truyền miệng trong giới thợ xây, với quy luật đen tối “xây chín căn, yểm căn thứ mười”.' },
  { id: 56, name: 'Monster House', watched: true, year: 2013, cat: ['us', 'hh', 'horror'], rating: 5, poster: 'https://i.ibb.co/xKzJXf7p/monster-house.png', note: 'Quái vật dưới gầm giường đủ đáng sợ, nhưng điều gì sẽ xảy ra khi cả một ngôi nhà chạy ra ngoài để bắt bạn? Ba thanh thiếu niên nhằm mục đích tìm ra khi họ đối đầu với một ngôi nhà lân cận mục nát và mở khóa những bí mật đáng sợ của nó.' },
  { id: 57, name: 'Pac-Man And The Ghostly Adventures', watched: true, year: 2013, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/CKt8St2L/pacman.png', note: 'Thiếu niên Pac và nhóm bạn trung thành phải đối mặt với những thăng trầm của tuổi mới lớn và bảo vệ Thế giới Pac khỏi đội quân ma quái do tên Betrayus độc ác cầm đầu.' },
  { id: 58, name: 'Randy Cunningham: 9th Grade Ninja', watched: true, year: 2012, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/VchF4Sct/randy.png', note: 'Một thị trấn tên là Norrisville đã được bảo vệ bởi một ninja trong 800 năm, nhưng điều mà người dân Norrisville không biết là cứ bốn năm lại có một ninja mới. Randy Cunningham, một cậu bé tuổi teen đang là sinh viên năm nhất tại trường trung học Norrisville, là ninja tiếp theo. Bây giờ, Randy phải bảo vệ Norrisville khỏi kế hoạch xấu xa của Phù thủy, đồng minh của anh ta là Hannibal McFist và trợ lý của Hannibal là Willem Viceroy.' },
  { id: 59, name: 'Ninja Hattori', watched: true, year: 1981, cat: ['hh'], rating: 4, poster: 'https://i.ibb.co/nM4W10tm/ninja-hattori.png', note: 'Bộ phim xoay quanh tình bạn đẹp giữa 2 cậu bé 10 tuổi: một người là cậu ninja nhỏ tên Hattori Kanzo, người còn lại là cậu bé Kenichi Mitsuba luôn phải vật lộn với bài tập và học hành. Hattori hiện đã là một thành viên của gia đình Mitsuba, cùng với anh trai Shinzo và chú chó ninja Shishi-Maru của mình. Nhờ sự xuất hiện của Hattori mà Kenichi có thêm một người bạn thân thiết và nhiều lần được giúp đỡ để vượt qua những tình huống rắc rối.' },
  { id: 60, name: 'Mai', watched: true, year: 2024, cat: ['vn'], rating: 4, poster: 'https://i.ibb.co/F4bGqp65/mai.png', note: 'Mai, một nhân viên massage 37 tuổi có quá khứ nhiều vết xước, sống khép kín và bị xã hội dị nghị. Cuộc sống cô thay đổi khi gặp Dương - chàng trai trẻ đào hoa, quyết tâm chinh phục cô. Tình yêu cháy bỏng của họ gặp sóng gió bởi định kiến xã hội, khoảng cách tuổi tác và nỗi sợ hãi của chính Mai.' },
  { id: 61, name: 'Đào, Phở Và Piano', watched: true, year: 2024, cat: ['vn'], rating: 4, poster: 'https://i.ibb.co/LzFrHHHJ/dao-pho-piano.png', note: 'Phim lấy bối cảnh trận chiến đông xuân kéo dài 60 ngày đêm từ cuối năm 1946 đến đầu năm 1947 ở Hà Nội, câu chuyện theo chân chàng dân quân Văn Dân và chuyện tình với nàng tiểu thư đam mê dương cầm Thục Hương. Khi những người khác đã di tản lên chiến khu, họ quyết định cố thủ lại mảnh đất thủ đô đã tan hoang vì bom đạn, mặc cho những hiểm nguy đang chờ đợi trước mắt.' },
  { id: 62, name: 'Móng Vuốt', watched: true, year: 2024, cat: ['vn', 'horror'], rating: 4, poster: 'https://i.ibb.co/PZsg7XZ1/mong-vuot.png', note: 'Bảy người bạn dựng trại ở một khu vực cấm trong rừng. Nhưng sự háo hức tắt ngúm khi một con gấu hung dữ bắt đầu gieo rắc kinh hoang cho họ.' },
  { id: 63, name: 'Oddbods Và Những Người Bạn', watched: true, year: 2015, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/DPCYxhj6/oddbods.png', note: 'Những người bạn kỳ lạ kể về cuộc sống hàng ngày của bảy người bạn đặc biệt, sống trong ngôi làng nhỏ mang tên Oddsville. Họ khoác lên mình những bộ áo lông sặc sỡ, luôn sẵn sàng tham gia vào các cuộc phiêu lưu vui nhộn và những trò nghịch ngợm đầy sáng tạo. Bộ phim tập trung vào tinh thần đoàn kết, sự tò mò và những khoảnh khắc hài hước, giúp khán giả trẻ học hỏi về tình bạn và cách khám phá thế giới. ' },
  { id: 64, name: 'Quyết Chiến Đền Tiếu Lâm', watched: true, year: 2003, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/RpbVRJBc/quyet-chien-den-tieu-lam.png', note: 'Lấy bối cảnh trong một thế giới nơi các trận chiến võ thuật và phép thuật phương Đông là phổ biến, bộ truyện kể về bốn chiến binh trẻ trong quá trình huấn luyện chiến đấu với thế lực xấu xa. Họ làm điều này bằng cách bảo vệ Shen Gong Wu khỏi những kẻ phản diện sẽ sử dụng họ để chinh phục thế giới.' },
  { id: 65, name: 'Thế Giới Kì Diệu Của Gumball', watched: true, year: 2011, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/nN3JTWXS/gumball.png', note: 'Phim xoay quang cuộc đời của Gumball Watterson, một chú mèo 12 tuổi học trung học cơ sở ở Elmore. Đi cùng với thú cưng, anh trai nuôi và người bạn thân nhất Darwin Watterson, anh thường xuyên tham gia vào nhiều trò tai quái khác nhau xung quanh thành phố, trong đó anh tương tác với nhiều thành viên khác nhau trong gia đình: Anais, Richard và Nicole Watterson, và nhiều công dân khác nhau.' },
  { id: 66, name: 'Regular Show', watched: true, year: 2010, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/4nmJ8jRm/regular-show.png', note: 'Bộ phim xoay quanh cuộc sống hàng ngày của hai người bạn Mordecai và Rigby. Họ làm việc như những người trông coi tại một công viên và dành nhiều ngày cố gắng tránh làm việc và giải trí bằng mọi cách. Điều này gây ra nhiều phiền toái cho người quản lý - ông chủ Benson và đồng nghiệp của họ Skips.' },
  { id: 67, name: 'Steven Universe', watched: true, year: 2013, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/1Gp0ZsZP/steven-universe.png', note: 'Một cậu bé thay thế mẹ mình trong một nhóm sinh vật dựa trên đá quý, và phải học cách kiểm soát sức mạnh của mình.' },
  { id: 68, name: 'Giờ Phiêu Lưu', watched: true, year: 2010, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/sJCdmBCn/adventure-time.png', note: 'Cuộc phiêu lưu của cậu bé Finn và chú chó có thể thay đổi hình dạng Jake' },
  { id: 69, name: 'Chúng tôi đơn giản là gấu', watched: true, year: 2015, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/fYgnym4y/we-bare-bears.png', note: 'Cuộc sống đời thường của 3 anh em nhà gấu' },
  { id: 70, name: 'Boyster', watched: true, year: 2014, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/sps8jGFM/boyster.png', note: 'Bộ truyện tập trung vào cuộc phiêu lưu của một dị nhân nửa người nửa hàu tên là "Boyster", người được sinh ra từ một vụ tràn chất độc và được một cặp người nhận nuôi và lớn lên cùng với người anh trai vỏ bọc Shelby của mình. Đương nhiên, Boyster phải giữ kín khía cạnh hàu của mình, nhưng anh ấy sẽ sử dụng nhiều khả năng giống hàu của mình để cứu lấy thế giới.' },
  { id: 71, name: 'Kick Buttowski', watched: true, year: 2010, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/SXdmK7NC/kick.png', note: 'Clarence Buttowski một cậu bé khao khát trở thành kẻ liều lĩnh vĩ đại nhất thế giới, khi anh nhận được sự giúp đỡ từ Gunther, người bạn trung thành và đồng phạm tội phạm của anh ta.' },
  { id: 72, name: 'Clarence', watched: true, year: 2014, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/LXzxG4SZ/clarence.png', note: 'Trong một thế giới ồn ào, Clarence là một lọ ánh nắng mặt trời, thuần khiết và đơn giản. Anh ấy chỉ nhìn thế giới bằng những màu sắc yêu thích của mình: nho ngốc nghếch và xanh neon. Clarence coi trọng những người bạn Jeff và Sumo và mẹ Mary hơn vàng. Bất kể điều gì xảy ra, tốt hay xấu, không có gì khiến Clarence thất vọng.' },
  { id: 73, name: 'Chowder', watched: true, year: 2007, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/271k1yTV/chowder.png', note: 'Một đầu bếp trẻ đầy tham vọng tên là Chowder có những cuộc phiêu lưu như một người học việc trong công ty cung cấp dịch vụ ăn uống của Mung Daal. ' },
  { id: 74, name: 'Teen Titans Go!', watched: true, year: 2013, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/6c1NNWmd/teen-titan-go.png', note: 'Robin, Starfire, Raven, Beast Boy và Cyborg trở lại trong những cuộc phiêu lưu hài hước hoàn toàn mới. Họ có thể là những siêu anh hùng giải cứu thế giới mỗi ngày ... Nhưng ai đó vẫn phải giặt giũ!' },
  { id: 75, name: 'Ben 10', watched: true, year: 2005, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/m5kT4Ktb/ben-10.png', note: 'Nhờ một thiết bị huyền bí có tên Omnitrix, cậu bé Ben Tennyson tinh nghịch có khả năng biến hình thành những siêu anh hùng ngoài hành tinh.' },
  { id: 76, name: 'Courage: Chú Chó Nhút Nhát', watched: true, year: 1999, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/xSCKsVvx/courage.png', note: 'Những cuộc phiêu lưu kỳ lạ của một chú chó nhút nhát nhưng dũng cảm tên là Courage và những người chủ lớn tuổi của nó trong một trang trại ở Nowhere, Kansas.' },
  { id: 77, name: 'Vòng Quay Vô Cực', watched: true, year: 2012, cat: ['tq', 'hh'], rating: 4, poster: 'https://i.ibb.co/dSxyq5J/infinity-nado.png', note: 'Phim xoay quanh cuộc chiến của các con quay Nado, với nhân vật chính là Jin. Anh và bạn bè sử dụng những con quay có khả năng biến hình, kết hợp các yếu tố như đất, lửa, nước và gió để chiến đấu. Các trận đấu không chỉ là sự so tài về kỹ năng mà còn là cuộc chiến về tinh thần và chiến thuật.' },
  { id: 78, name: 'Robo Trái Cây', watched: true, year: 2010, cat: ['tq', 'hh'], rating: 4, poster: 'https://i.ibb.co/FqBRkbqP/robo-fruit.png', note: 'Với loạt nhân vật robot mang hình dạng của những trái cây quen thuộc như: Táo, Quýt, Thơm, Dừa, Măng Cụt, Dâu, Chuối... Robo Trái Cây nói về câu chuyện ly kỳ về Thế giới Trái Cây. Nơi đó những Robo trái cây biết bảo vệ lẽ phải, bảo vệ quê hương và đồng loại. Biết đoàn kết, yêu thương nhau tạo nên những sức mạnh siêu nhiên phi thường và đầy lòng quả cảm.' },
  { id: 79, name: 'Zinba', watched: true, year: 2013, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/nNgsWFXm/zinba.png', note: 'Câu chuyện về Kan, một cậu bé chiến đấu với những con quái vật được gọi là Zinba.' },
  { id: 80, name: 'Chiến Cơ Siêu Hạng', watched: true, year: 2010, cat: ['tq', 'hh'], rating: 5, poster: 'https://i.ibb.co/VW5kksjv/chien-co-sieu-hang.png', note: '' },
  { id: 81, name: 'Sấm Chớp Và Tốc Độ', watched: true, year: 2007, cat: ['tq', 'hh'], rating: 4, poster: 'https://i.ibb.co/20Pf1j8P/flash-and-dash.png', note: '' },
  { id: 82, name: 'Huyền Thoại Sân Cỏ CGO', watched: true, year: 2010, cat: ['tq', 'hh'], rating: 5, poster: 'https://i.ibb.co/G4FNN4NC/cgo.jpg', note: '' },
  { id: 83, name: 'Tuyệt Đỉnh YOYO', watched: true, year: 2006, cat: ['tq', 'hh'], rating: 4, poster: 'https://i.ibb.co/QFz8G7yR/yoyo.png', note: '' },
  { id: 84, name: 'Oggy và những chú gián', watched: true, year: 1999, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/fdcxxPtf/oggy.png', note: 'Chú mèo xanh nhút nhát Oggy chẳng thích gì ngoài việc ngủ, nhưng chú ta luôn bị làm phiền bởi ba con gián xấu xí xâm chiếm nhà của mình.' },
  { id: 85, name: 'Lucky Luke', watched: true, year: 1984, cat: ['us', 'hh'], rating: 3, poster: 'https://i.ibb.co/SX2b2VRK/lucky-luke.png', note: 'Người đàn ông bắn nhanh hơn cái bóng của bản thân.' },
  { id: 86, name: 'Wander Chu Du', watched: true, year: 2013, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/j9z93Zby/wander-over-yonder.png', note: 'Cuộc phiêu lưu của Wander, một du khách luôn luôn lạc quan giữa các thiên hà và luôn làm việc tốt cùng với con ngựa nóng nảy nhưng trung thành và là người bạn thân nhất của anh ấy Sylvia. ' },
  { id: 87, name: 'Chuck Chicken', watched: true, year: 2010, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/nMVkw1g6/chuck-chicken.png', note: '' },
  { id: 88, name: 'Boboiboy', watched: true, year: 2011, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/21Ry0RHr/boboiboy.png', note: 'Một đứa trẻ tên boboiboy phát hiện ra có một người ngoài hành tinh đang cố gắng xâm chiếm hành tinh của họ. Một tên robot ochobot cho Boboiboy và bạn của anh ta một sức mạnh để cứu hành tinh của họ' },
  { id: 89, name: 'Upin & Ipin', watched: true, year: 2007, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/zTF145Z4/upin-ipin.png', note: 'Phim tập trung vào một cặp sinh đôi 5 tuổi, Upin và Ipin, những người kể những câu chuyện về cuộc sống hàng ngày của họ thông qua những hành động vui vẻ và thú vị với bạn bè đồng thời học hỏi những điều mới trong các hoạt động hàng ngày của họ.' },
  { id: 90, name: 'Đấu Sĩ LBX', watched: true, year: 2011, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/00Q0Cwn/lbx.png', note: '' },
  { id: 91, name: 'Penn Zero: Part-Time Hero', watched: true, year: 2014, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/0Vc4DgY8/pen-zero.png', note: 'Mỗi ngày anh ấy được đưa vào một chiều không gian khác với bạn bè của mình để giải cứu thế giới.' },
  { id: 92, name: 'Định Luật Milo Murphy', watched: true, year: 2016, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/mCGCF1wS/milo-murphy-law.png', note: '“Mọi điều tồi tệ có thể xảy ra, sẽ xảy ra”.<br> Được thừa hưởng Định Luật Murphy với mức độ cao nhất, Milo luôn luôn chuẩn bị đối mặt với mọi tình huống cùng với sự lạc quan và hăng hái. Cùng với bạn bè của cậu ấy, đối mặt với mọi tình huống tồi tệ nhất với sự lạc quan yên đời thì không gì là không thể.' },
  { id: 93, name: 'Danny Phantom', watched: true, year: 2004, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/5hBcCRwh/danny-phantom.png', note: 'Phim hay cực' },
  { id: 94, name: 'Chị Dâu', watched: true, year: 2024, cat: ['vn'], rating: 4, poster: 'https://i.ibb.co/RkXNkCZG/chi-dau.png', note: 'Bà Nhị - con dâu cả của gia đình quyết định nhân dịp đám giỗ của mẹ chồng, tụ họp cả bốn chị em gái - con ruột trong nhà lại để thông báo chuyện sẽ tự bỏ tiền túi ra sửa sang căn nhà từ đường cũ kỹ trước khi bão về. Vấn đề này khiến cho nội bộ gia đình bắt đầu có những lục đục, chị dâu và các em chồng cũng xảy ra mâu thuẫn, bất hoà. Dần dà những sự thật đằng sau việc "bằng mặt mà không bằng lòng" giữa các chị em cũng dần được hé lộ, những bí mật, nỗi đau sâu thẳm nhất trong mỗi cá nhân cũng dần được bóc tách.' },
  { id: 95, name: 'Lật Mặt 7: Một Điều Ước', watched: true, year: 2024, cat: ['vn'], rating: 4, poster: 'https://i.ibb.co/1Yzhn0C5/lat-mat-7.png', note: 'Thông qua những cảnh đan xen, ẩn chứa vô số nụ cười và nước mắt, Lật Mặt 7: Một Điều Ước là câu chuyện cảm động về người mẹ già 73 tuổi - một bà mẹ đơn thân một mình nuôi 5 đứa con khôn lớn. Khi lớn lên, mỗi người đều tự xây dựng cuộc sống, gia đình cho riêng mình. Đột nhiên, một cơn khủng hoảng ập đến, bộc lộ những góc khuất, những nỗi buồn, lo lắng, gánh nặng hằn sâu trong lòng người mẹ. Trách nhiệm thuộc về ai?' },
  { id: 96, name: 'Mèo Máy Kuro', watched: true, year: 1999, cat: ['hh'], rating: 4, poster: 'https://i.ibb.co/JDdz6jY/kuro.png', note: 'Phim xoay quanh một chú mèo nhà bị một ông tiến sĩ điên rồ bắt và biến nó thành một con mèo máy với mưu đồ sẽ tạo ra một binh đoàn robot thâu tóm thế giới. May thay con chip điều khiển của Kuro hỏng, nó trốn thoát khỏi ông tiến sĩ và trở thành một con mèo bảo vệ mọi người. Kuro có nhiều kĩ năng khác nhau như giúp mọi người thoát khỏi những tình huống khó khăn, di chuyển trong không gian hoặc vũ trụ và chiến đấu với những con robot khác.' },
  { id: 97, name: 'Chú Mèo Máy Rocky', watched: true, year: 1983, cat: ['hh'], rating: 4, poster: 'https://i.ibb.co/Z6xbmMsw/rocky.png', note: 'Nhờ phép thuật của mình, Pokonyan đã giúp đỡ mọi người và đặc biệt là giúp Miki đã có những chuyến phiêu lưu, khám phá thú vị, bất ngờ. Nhưng cô bé Miki cũng không ít lần gặp rắc rối với chính phép thuật của Pokonyan.' },
  { id: 98, name: 'Giải Mã Mê Cung', watched: true, year: 2014, cat: ['us'], rating: 5, poster: 'https://i.ibb.co/CpzHQmYc/maze-runner.png', note: '"Khi đáp án nằm sau cửa tử."<br> Phim nói về nhóm bạn trẻ bị giam giữ trong "Trảng" với một trí nhớ không rõ ràng, và cuộc vật lộn tìm lối thoát. Làm thế nào họ sống sót được giữa một mê cung khổng lồ đầy những sinh vật nguy hiểm và thay đổi lời giải hằng đêm? Ai sẽ là người sống sót cuối cùng sau những bí mật chết người kia?' },
  { id: 99, name: 'Đấu Trường Ảo', watched: true, year: 2018, cat: ['us'], rating: 4, poster: 'https://i.ibb.co/twbKVr1T/ready-player-one.png', note: 'Phim kể về bối cảnh năm 2044, khi con người có thể trốn tránh thế giới thực ảm đạm bằng việc hòa mình vào không giản ảo mang tên OASIS. Từ đây, xuất hiện anh chàng Wade Watts. Anh đã tới với OASIS và lấy tên cho nhân vật của mình là Parzival. Một ngày nọ, người sáng lập ra Oasis đã thách thức tất cả những người chơi đi tìm Easter Eggs - Trứng phục sinh. Phần thưởng dành cho người chiến thắng là những tài sản vô cùng quý báu mà ông để lại. Wade Watts đã tìm ra được những gợi ý đầu tiên trong cuộc tìm kiếm và bắt đầu hành trình của mình. Tuy nhiên, chàng trai Wade Watts sớm thấy mình bị xoáy sâu vào vòng luẩn quẩn của những bí ẩn, những sự kiện điên rồ giật dây dưới tay tổ chức Innovative Online Industries.' },
  { id: 100, name: 'Percy Jackson Và Các Vị Thần Trên Đỉnh Olympus', watched: true, year: 2023, cat: ['us'], rating: 4, poster: 'https://i.ibb.co/b5B2rPgP/percy-jackson.png', note: 'Percy Jackson đang thực hiện một nhiệm vụ nguy hiểm. Vượt qua quái vật và đánh lừa các vị thần, anh ta phải hành trình khắp nước Mỹ để trả lại tia chớp chủ nhân của Zeus và ngăn chặn một cuộc chiến tranh toàn diện. Với sự giúp đỡ của những người bạn Annabeth và Grover, cuộc hành trình của Percy sẽ dẫn anh ta đến gần hơn với câu trả lời mà anh ta tìm kiếm: làm thế nào để phù hợp với một thế giới mà anh ta cảm thấy lạc lõng và anh ta được định sẵn để trở thành ai.' },
  { id: 101, name: 'Harry Potter Và Hòn Đá Phú Thủy', watched: true, year: 2001, cat: ['us'], rating: 5, poster: 'https://i.ibb.co/20Q6XYGk/harry-potter-1.png', note: 'Vào sinh nhật thứ 11 của Harry, một người lai khổng lồ là Rubeus Hagrid đã đến tìm cậu bé để đưa cậu về trường Pháp Thuật Hogwarts. Lúc này, Harry mới biết được mình là phù thủy và một phần câu chuyện về cha mẹ mình, những người đã bị Voldemort giết hại. Cùng với trí thông minh và lòng dũng cảm, cậu bé đã cùng những người bạn của mình khám phá những điều bí mật nguy hiểm về thế giới của phép thuật' },
  { id: 102, name: 'Harry Potter Và Phòng Chứa Bí Mật', watched: true, year: 2002, cat: ['us'], rating: 5, poster: 'https://i.ibb.co/Xx6xgjsr/harry-potter-2.png', note: 'Harry trở lại năm thứ hai tại Hogwarts, nhưng phát hiện ra rằng những điều tồi tệ đang xảy ra bởi vì một Phòng chứa bí mật đã được người thừa kế của Slytherin mở ra và sẽ khiến những đứa trẻ của Muggles, những kẻ không thuần chủng biến mất một cách bí ẩn bởi một con vật quái dị.' },
  { id: 103, name: 'Harry Potter Và Tù Nhân Ngục Azkaban', watched: true, year: 2004, cat: ['us'], rating: 5, poster: 'https://i.ibb.co/MDfVcL11/harry-potter-3.png', note: 'Harry đang mong chờ đến cuối mùa hè để bắt đầu một khóa học mới tại Hogwarts, và rời khỏi ngôi nhà của người dì và người chú đáng khinh của mình, Dursley, càng sớm càng tốt. Điều Harry không biết là anh sẽ phải rời khỏi Privet Drive sớm và bất ngờ sau khi biến dì Marge của mình thành một quả bóng bay khổng lồ. Một chiếc xe buýt đêm, và tất nhiên là mê hoặc, sẽ đưa anh ta đến quán rượu Leaky Cauldron, nơi không ai khác ngoài Cornelius Fudge, Bộ trưởng Bộ Pháp thuật, đang chờ anh ta.' },
  { id: 104, name: 'Harry Potter Và Chiếc Cốc Lửa', watched: true, year: 2005, cat: ['us'], rating: 5, poster: 'https://i.ibb.co/ccb3NJ4g/harry-potter-4.png', note: 'Khi giải Quidditch Thế giới bị cắt ngang bởi những kẻ ủng hộ Chúa tể Voldemort và sự trở lại của Dấu hiệu hắc ám khủng khiếp, Harry ý thức được rõ ràng rằng, Chúa tể Voldemort đang ngày càng mạnh hơn. Và để trở lại thế giới phép thuật, Chúa tể hắc ám cần phải đánh bại kẻ duy nhất sống sót từ lời nguyền chết chóc của hắn - Harry Potter. Vì lẽ đó, khi Harry bị buộc phải bước vào giải đấu Tam Pháp thuật uy tín nhưng nguy hiểm, cậu nhận ra rằng trên cả chiến thắng, cậu phải giữ được mạng sống của mình.' },
  { id: 105, name: 'Harry Potter Và Hội Phượng Hoàng', watched: true, year: 2007, cat: ['us'], rating: 5, poster: 'https://i.ibb.co/m5dfksyL/harry-potter-5.png', note: 'Harry tức giận vì bị bỏ rơi ở nhà Dursley trong dịp hè, cậu ngờ rằng Chúa tể hắc ám Voldemort đang tập hợp lực lượng, và vì cậu có nguy cơ bị tấn công, những người Harry luôn coi là bạn đang cố che giấu tung tích cậu. Cuối cùng, sau khi được giải cứu, Harry khám phá ra rằng giáo sư Dumbledore đang tập hợp lại Hội Phượng Hoàng - một đoàn quân bí mật đã được thành lập từ những năm trước nhằm chống lại Chúa tể Voldemort. Tuy nhiên, Bộ Pháp thuật không ủng hộ Hội Phượng Hoàng, những lời bịa đặt nhanh chóng được đăng tải trên Nhật báo Tiên tri – một tờ báo của giới phù thủy, Harry lo ngại rằng rất có khả năng cậu sẽ phải gánh vác trách nhiệm chống lại cái ác một mình.' },
  { id: 106, name: 'Harry Potter Và Hoàng Tử Lai', watched: true, year: 2009, cat: ['us'], rating: 5, poster: 'https://i.ibb.co/27ypBnfL/harry-potter-6.png', note: 'Đây là năm thứ 6 của Harry Potter tại trường Hogwarts. Trong lúc những thế lực hắc ám của Voldemort gieo rắc nỗi kinh hoàng và sợ hãi ở khắp nơi, mọi chuyện càng lúc càng trở nên rõ ràng hơn đối với Harry, cậu sẽ sớm phải đối diện với định mệnh của mình. Draco Malfoy, kẻ thù không đội trời chung của Harry, có nhiều hành động khả nghi, luôn lén lút đi khắp trường. Vì thế, Harry cho rằng Draco là nội gián của Voldermort và quyết tâm tìm hiểu chính xác chuyện gì đang xảy ra' },
  { id: 107, name: 'Harry Potter và Bảo Bối Tử Thần: Phần 1', watched: true, year: 2010, cat: ['us'], rating: 5, poster: 'https://i.ibb.co/bgtSW350/harry-potter-7.png', note: 'Chúa tể Voldemort cùng đám tay chân của hắn đang âm mưu tấn công Harry Potter khi cậu rời khỏi ngôi nhà của gia đình Dursley lần cuối cùng. Ngay trước khi phép bảo vệ cho Harry tại gia đình Dursley hết hiệu lực vào thời điểm Harry bước qua tuổi 17, người của Hội Phượng hoàng đến để hộ tống cậu tới một nơi ở mới an toàn. Mặc dù đã dùng sáu người nguỵ trang thành Harry, Harry thật vẫn bị Voldemort cùng các Tử thần Thực tử phát hiện ra trên đường đi và bị tấn công' },
  { id: 108, name: 'Harry Potter và Bảo Bối Tử Thần: Phần 2', watched: true, year: 2011, cat: ['us'], rating: 5, poster: 'https://i.ibb.co/KpT1X6wB/harry-potter-8.png', note: 'Kết thúc phần 1 là khi nhóm bạn Harry Potter, Ron và Hermione quay trở lại trường Hogwarts để tìm và tiêu diệt Trường Sinh Linh Giá cuối cùng của Voldemort. Nhưng Voldemort đã phát hiện ra nhiệm vụ của họ, và trận chiến pháp thuật lớn nhất trong lịch sử đã diễn ra ở đây, nơi mà biết bao người ngã xuống, nơi mà tất cả các pháp sư dũng cảm sẵn sàng đánh đổi cuộc sống của mình để tiêu diệt tận cùng thế lực hắc ám.' },
  { id: 109, name: 'Sinh Vật Huyền Bí Và Nơi Tìm Ra Chúng', watched: true, year: 2016, cat: ['us'], rating: 5, poster: 'https://i.ibb.co/MDv657B7/sinh-vat-huyen-bi-1.png', note: 'Lấy bối cảnh trước Harry Potter, Fantastic Beasts And Where To Find Them kể về hành trình khám phá thế giới kỳ bí của pháp sư Newt Scamander do nam diễn viên Eddie Redmayne tài năng đảm nhận. Anh lên đường tới New York vào năm 1926 và bắt đầu quá trình đúc kết những tư liệu về các loài sinh vật mà về sau trường Hogwarts dùng để giảng dạy. Đây cũng là một trong những cuốn sách giáo khoa được nhắc tới trong tập 1 của Harry Potter và Hòn đá phù thủy.' },
  { id: 110, name: 'Sinh Vật Huyền Bí: Tội Ác Của Grindelwald', watched: true, year: 2018, cat: ['us'], rating: 5, poster: 'https://i.ibb.co/W48V8rKH/sinh-vat-huyen-bi-2.png', note: 'Sau khi bị bắt ở phần một, sang phần 2 phù thủy hắc ám Gellert Grindelwald (Johnny Depp) đã thoát ra như tuyên bố và bắt đầu kêu gọi tay sai đi theo mình. Người duy nhất có thể ngăn chặn hắn là người mà hắn từng coi là bạn thân nhất Albus Dumblerdore (Jude Law), ông sẽ phải nhờ đến sự giúp đỡ của Newt Scamander, người học trò cũ của mình.' },
  { id: 111, name: 'Sinh Vật Huyền Bí: Những Bí Mật Của Dumbledore', year: 2022, cat: ['us'], rating: 5, poster: 'https://i.ibb.co/n8Rt2pww/sinh-vat-huyen-bi-3.png', note: 'Câu chuyện của phần phim thứ ba này xoay quanh việc Giáo sư Albus Dumbledore (Jude Law) phát hiện ra việc Phù thủy Bóng tối quyền năng Gellert Grindelwald (Mads Mikkelsen) đang âm mưu chiếm lấy quyền kiểm soát Thế giới Phù thủy. Không thể một mình ngăn chặn đoàn quân hùng mạnh của của Grindelwald, Dumbledore đặt niềm tin vào Nhà nghiên cứu sinh vật huyền bí Newt Scamander (Eddie Redmayne) cùng đồng đội thực hiện nhiệm vụ đầy hiểm nguy này. Trong tình thế ngàn cân treo sợi tóc như vậy, liệu thầy Dumbledore có thể đứng ngoài được bao lâu?' },
  { id: 112, name: 'Bí Kíp Luyện Rồng 1', watched: true, year: 2010, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/wrKMQtpm/bi-kip-luyen-rong-1.png', note: 'Thiếu niên nhút nhát Hiccup phải chứng minh với bố và làng của mình rằng cậu vẫn có thể là chiến binh Viking ngay cả khi cậu muốn kết bạn với rồng hơn là giết rồng.' },
  { id: 113, name: 'Bí Kíp Luyện Rồng 1.1: Legend Tf the BoneKnapper Dragon', watched: true, year: 2010, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/rG9m6Gcz/bi-kip-luyen-rong-2.png', note: 'Hiccup và những người bạn đồng hành cùng người cố vấn của họ, Gobber, trong nhiệm vụ tiêu diệt Boneknapper Dragon huyền thoại.' },
  { id: 114, name: 'Bí Kíp Luyện Rồng 1.2: Book Of Dragon', watched: true, year: 2011, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/JwZxtBvq/bi-kip-luyen-rong-3.png', note: 'Bạn muốn trở thành một huấn luyện viên rồng phải không? Chuẩn bị tinh thần cho cuộc phiêu lưu, phấn khích và huấn luyện khi Hiccup, Astrid, Toothless và Gobber kể về truyền thuyết đằng sau Book of Dragons và tiết lộ bí mật huấn luyện nội bộ về những con rồng mới, chưa từng thấy trước đây.' },
  { id: 115, name: 'Bí Kíp Luyện Rồng 1.3: Gift Of The Night Fury', watched: true, year: 2011, cat: ['us'], rating: 4, poster: 'https://i.ibb.co/s9wBzjCt/bi-kip-luyen-rong-4.png', note: 'Câu chuyện bắt đầu khi một đàn rồng bí ẩn bất ngờ rời khỏi đảo, để lại những người Viking bối rối. Hiccup (tên tiếng Việt là Hiccup) phát hiện ra rằng những chú rồng đã đi đến một hòn đảo mới để đẻ trứng. Tuy nhiên, Toothless (tên tiếng Việt là Sún Răng) không thể bay một mình đến đó vì một vết thương cũ. Hiccup đã giúp Toothless bay đến hòn đảo và sau đó phát hiện ra rằng những chú rồng đã đẻ trứng và chúng đã nở.' },
  { id: 116, name: 'Bí Kíp Luyện Rồng 1.4: Riders Of Berk', watched: true, year: 2012, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/gM1M0G8c/bi-kip-luyen-rong-5.png', note: 'Hành trình phiêu lưu của Hiccup và Toothless.' },
  { id: 117, name: 'Bí Kíp Luyện Rồng 2', watched: true, year: 2014, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/LDBJN9S9/bi-kip-luyen-rong-6.png', note: 'Hiccup, Răng Sún và một kỵ sĩ rồng bí ẩn hợp lực để bảo vệ đảo Berk khỏi một chiến binh thèm khát quyền lực cùng đội quân rồng của riêng hắn.' },
  { id: 118, name: 'Bí Kíp Luyện Rồng 3: Vùng Đất Bí Ẩn', watched: true, year: 2019, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/R1drPHN/bi-kip-luyen-rong-7.png', note: 'Một năm sau khi bảo vệ Berk khỏi Drago, Răng Sún và Nấc Cụt cùng với những bạn của họ, tiếp tục giải cứu các con rồng bị bắt để đưa chúng trở lại Berk và tạo cho các loài rồng một môi trường nhộn nhịp. Nhưng nỗ lực giải cứu những con rồng đã khiến hòn đảo trở nên quá đông với một lượng lớn số rồng. Để xử lí tình trạng quá tải này, Nấc Cụt quyết định tìm một "vùng đất bí ẩn", nơi trú ngụ mà cậu thấy là an toàn nhất cho các con rồng mà người cha quá cố, Stoick đã nói với cậu. Trong khi đó, một con Fury trắng bị giam cầm bởi các lãnh chúa, sau nó được trao lại cho thợ săn rồng khét tiếng Grimmel làm mồi nhử.' },
  { id: 119, name: 'Bí Kíp Luyện Rồng 4: Trở Về Nhà', watched: true, year: 2019, cat: ['us','hh'], rating: 4, poster: 'https://i.ibb.co/PvZZR5G2/bi-kip-luyen-rong-8.png', note: 'Đã mười năm kể từ khi những con rồng chuyển đến Thế giới ẩn, và mặc dù Toothless không sống ở New Berk nữa, Hiccup vẫn tiếp tục truyền thống kỳ nghỉ mà anh từng chia sẻ với người bạn thân nhất của mình. Nhưng những người Viking ở New Berk đã bắt đầu quên đi tình bạn của họ với rồng. Hiccup, Astrid và Gobber không biết phải làm gì để giữ những con rồng trong lòng dân làng. Và trên biển, những con rồng có một kế hoạch của riêng mình.' },
  { id: 120, name: 'Sự Trỗi Dậy Của Các Vệ Thần', watched: true, year: 2012, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/6JFcQzN0/su-troi-day-cua-cac-ve-than.png', note: 'Ông già Noel, Thỏ Phục Sinh, Bà Tiên Răng cùng các nhân vật khác phải chiến đấu chống lại một tên ác quỷ muốn phá hủy niềm tin và ước mơ thơ ngây của lũ trẻ.' },
  { id: 121, name: 'Megamind', watched: true, year: 2010, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/C4NZMRc/megamind.png', note: 'Siêu ác nhân xảo quyệt Megamind vô tình giết chết gã người hùng không đội trời chung của hắn, để rồi tạo ra một kẻ thù mới muốn phá hủy thế giới.' },
  { id: 122, name: 'Monsters VS Aliens', watched: true, year: 2009, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/938kg48D/monsters-vs-aliens.png', note: 'một tai nạn bất ngờ đã xảy ra ngay trong lễ cưới của Susan Murphy. Một thiên thạch rơi xuống Trái đất đã va vào cô khiến cho cơ thể Susan bỗng phát triển thành một người khổng lồ cao tới 15m. Quân đội ngay lập tức bắt giữ Susan và giam lỏng cô tại một trung tâm nghiên cứu bí mật của chính phủ. Tại đây, Susan được đổi tên thành Ginormica và gia nhập vào nhóm Quái vật đang được nghiên cứu. Cùng lúc đó, rô-bốt bí ẩn do Gallaxhar - kẻ mắc chứng hoang tưởng điều động đáp xuống Trái đất. Con rô-bốt này mang âm mưu thôn tính thế giới và đã ra tay bắn phá khắp nơi. ' },
  { id: 123, name: 'Exhuma: Quật Mộ Trùng Ma', watched: true, year: 2024, cat: ['kr', 'horror'], rating: 5, poster: 'https://i.ibb.co/cS0zFfSf/exhuma.png', note: 'Hai pháp sư, một thầy phong thuỷ và một chuyên gia khâm liệm cùng hợp lực khai quật ngôi mộ bị nguyền rủa của một gia đình giàu có, nhằm cứu lấy sinh mạng hậu duệ cuối cùng trong dòng tộc. Bí mật hắc ám của tổ tiên được đánh thức.' },
  { id: 124, name: 'Incantation: Chú Nguyền', watched: true, year: 2021, cat: ['tq', 'horror'], rating: 5, poster: 'https://i.ibb.co/8gygCTnT/incantation.png', note: 'Sáu năm trước, Lý Nhược Nam bị nguyền rủa vì phạm phải điều cấm kị trong tôn giáo. Giờ đây, cô phải bảo vệ con gái trước hậu quả của những hành động mình gây ra.' },
  { id: 125, name: 'The Wailing: Tiếng Than', year: 2016, cat: ['kr', 'horror'], rating: 4, poster: 'https://i.ibb.co/PsXHwtXR/the-wailing.png', note: 'Lấy bối cảnh tại một ngôi làng hẻo lánh ở vùng nông thôn Hàn Quốc, phim bắt đầu khi hàng loạt vụ án m:ạng và cái ch:ết bí ẩn liên tục xảy ra sau sự xuất hiện của một người đàn ông Nhật Bản. Dân làng tin rằng lão là hiện thân của q:u:ỷ d:ữ vì thường xuất hiện với đôi mắt đỏ rực cùng những nghi thức tà thuật đáng sợ.' },
  { id: 126, name: 'The Medium', watched: true, year: 2021, cat: ['thai', 'horror'], rating: 5, poster: 'https://i.ibb.co/B5Hy5rWD/the-medium.png', note: 'Phim xoay quanh câu chuyện về người đàn ông Rang Song một vị pháp sư tài năng, anh đã đi đến tại vùng nông thôn Isan Thái Lan. Tại đây, Rang Song gặp gỡ được cô cháu gái của Shaman tên là Ming, không những vậy cô gái đó còn là một người thừa kế nghề thầy cúng của cha mình. Trong tại lễ tang của cha, Ming bắt đầu xảy ra những hiện tượng đầy kỳ lạ, giống như bị thế lực xấu xa chiếm giữ lấy linh hồn. Lúc này Rang Song bắt đầu cuộc hành trình ngăn chặn và giải cứu cô bé trước khi mọi chuyện diễn ra quá muộn.' },
  { id: 127, name: 'Naruto', year: 2002, cat: ['jp', 'hh'], rating: 5, poster: 'https://i.ibb.co/WWMXYSk1/naruto.png', note: 'Bộ phim kể về cậu về quá trình lớn lên và cuộc đời của cậu bé những nguy hiểm mà cậu đã gặp phải kèm theo đó là một động lực và niềm tin phi thường , một tâm hồn trong sáng chứa đựng những trò nghịch ngợm bướng bỉnh nhưng đầy hồn nhiên . Cùng với việc xoay quanh những người đã bỏ mạng do tranh giành quyền lực cộng với sự đau thương , mất mát mà Naruto đã trải qua.' },
  { id: 128, name: 'Naruto Movie 1: Cuộc Chiến Ở Tuyết Quốc', watched:true, year: 2004, cat: ['jp', 'hh'], rating: 5, poster: 'https://i.ibb.co/rVFsnLc/naruto-movie-1.png', note: 'Bộ phim mở đầu với công chúa Fuun cùng ba anh lính trung thành là trợ lí đắc lực của cô. Họ đã định bỏ cuộc khi phải chiến đấu mệt mỏi với Mao-tay bạo chúa già. Nhưng công chú Fuun nhất quyết không bỏ cuộc và trong lúc tức giận đã hiện lên chakra bảy màu để chống lại Mao. Cả ba trợ lí quyết định cũng sử dụng nguồn chakra của mình để hợp sức cùng công chúa Fuun và đã chống lại Mao. Cuối cùng họ cũng đã thắng và quyết định quay về nơi hiện lên cầu vồng.' },
  { id: 129, name: 'Naruto Movie 2: Huyền Thoại Đá Gelel', year: 2005, cat: ['jp', 'hh'], rating: 5, poster: 'https://i.ibb.co/Fb0BHXWd/naruto-movie-2.png', note: 'Câu chuyện mở đầu với trận chiến tại một bờ biển hoang vắng vào ban đêm giữa ninja làng Cát và những tên khổng lồ mặc chiếc áo giáp nâu. Những ninja làng Cát đang hoàn toàn bị thất thế trước những tên to lớn này. Một trận chiến mới của Naruto bắt đầu.' },  
  { id: 130, name: 'Naruto Movie 3: Những Lính Gác Của Nguyệt Quốc', watched:true, year: 2006, cat: ['jp', 'hh'], rating: 5, poster: 'https://i.ibb.co/tMTrWs8H/naruto-movie-3.png', note: 'Câu chuyện bắt đầu từ việc bộ tứ Naruto, Sakura, Rock Lee và Kakashi nhận nhiệm vụ bảo vệ vị hoàng tử béo hay ham chơi Michiru và cậu con trai với cặp kính cận to Hikaru bắn mũi tên đầu cao su vào băng bảo vệ trán của Naruto và cho rằng những Ninja này thật vô dụng. Theo lời của Tsunade, đây là một nơi du lịch khá nổi tiếng với hòn đảo hình mặt trăng liềm cùng với biển đẹp luôn khiến bà bị cuốn hút bởi nó và rất mong một ngày nào đó sẽ được đến đây. Bộ tứ này phải chống lại bọn cướp tấn công những du khách theo cảnh báo của Tsunade. ' },
  { id: 131, name: 'Naruto Shippuden', watched:true, year: 2007, cat: ['jp', 'hh'], rating: 5, poster: 'https://i.ibb.co/93kYJVFM/naruto-shippuden.png', note: 'Lấy bối cảnh hai năm rưỡi sau khi Naruto rời làng Lá. Naruto Shippuden tiếp tục theo chân chàng ninja trẻ tuổi Naruto Uzumaki trong cuộc hành trình luyện tập cực khổ để trở thành ninja giỏi nhất. Trong khi đó, Akatsuki, một tổ chức bí ẩn tập hợp những ninja phản diện tài giỏi bậc nhất, đang từng bước thực hiện kế hoạch lớn của chúng, đe dọa sự an toàn của thế giới ninja. Naruto sẽ làm gì để bảo vệ làng Lá và những người mà cậu yêu quý?' },
  { id: 132, name: 'Naruto Shippuden Movie 1: Cái Chết Tiên Đoán', watched:true, year: 2007, cat: ['jp', 'hh'], rating: 5, poster: 'https://i.ibb.co/21j7c0LD/naruto-shippuden-movie-1.png', note: 'Những con quỷ đã từng gần như phá hủy thế giới, được hồi sinh bởi một ai đó. Để ngăn chặn thế giới bị hủy diệt, con quỷ phải bị phong ấn và người duy nhất có thể làm điều đó là cô gái đền thờ Shion từ đất nước của quỷ, người có hai sức mạnh; Một người đang phong ấn quỷ và người kia dự đoán về cái chết của con người. Lần này, nhiệm vụ của Naruto là bảo vệ Shion, nhưng cô dự đoán cái chết của Naruto. ' },
  { id: 133, name: 'Naruto Shippuden Movie 2: Nhiệm Vụ Bí Mật', watched:true, year: 2008, cat: ['jp', 'hh'], rating: 5, poster: 'https://i.ibb.co/qLQ0GSWS/naruto-shippuden-movie-2.png', note: 'Phim kể về cuộc tấn công bất ngờ của nhóm ninja Sora-Nin từ Vùng đất Bầu trời vào làng Konoha.' },
  { id: 134, name: 'Naruto Shippuden Movie 3: Người Kế Thừa Hỏa Chí', watched:true, year: 2009, cat: ['jp', 'hh'], rating: 5, poster: 'https://i.ibb.co/w8MFZG5/naruto-shippuden-movie-3.png', note: 'Nói về nguy cơ nổ ra Đại chiến Ninja lần thứ 4 khi các ninja có huyết kế giới hạn ở các làng sương mù, làng đá, làng mây và làng cát bỗng nhiên bắt đầu biến mất. Các quốc gia nghi ngờ làng lá - làng duy nhất không bị ảnh hưởng - đã gây ra tai nạn trên và tung tin đồn về việc Konoha đang có kế hoạch tạo phản. Đồng thời họ điều động quân đội đến biên giới Hỏa Quốc chuẩn bị phát động tấn công. Những người đứng đầu Hỏa Quốc phải chứng minh sự trong sạch của Konoha - tìm ra nguyên nhân vụ việc, nếu không họ sẽ phải xóa xổ cả làng để giữ hòa bình thế giới.' },
  { id: 135, name: 'Naruto Shippuden Movie 4: Tòa Tháp Bị Mất', watched:true, year: 2010, cat: ['jp', 'hh'], rating: 5, poster: 'https://i.ibb.co/8gFB44kw/naruto-shippuden-movie-4.png', note: 'Được giao nhiệm vụ một để đi bắt Mukade, một ninja bỏ trốn. Uzumaki Naruto đc sắp đặt vào di tích lịch sử vẻ vang đã bị tàn phá: Ouran, nơi Naruto truy đuổi các ninja đang làm việc cho Mukade và Mukade. Mục tiêu của Mukade đã được tiết lộ là để có một leyline hoạt động bên trong những sự tàn phá và hắn sẽ giải phóng sức mạnh của leyline, gây ra một ánh sáng để bao bọc Naruto và gửi Nar vào quá khứ 20 năm trước khi mọi chuyện bắt đầu. Khi Naruto thức dậy trong quá khứ, Nar đã đc nói chuyện và chiến đấu cùng Người Cha Vĩ Đại, Hokage Đệ Tứ' },
  { id: 136, name: 'Naruto Shippuden Movie 5: Huyết Ngục', watched:true, year: 2011, cat: ['jp', 'hh'], rating: 5, poster: 'https://i.ibb.co/ym2f6Zmj/naruto-shippuden-movie-5.png', note: 'Naruto bị bắt sau khi bị kết tội mưu đồ ám sát Raikage, lãnh đạo tối cao của làng Mây cũng như sát hại các ninja Thượng đẳng của làng Sương Mù và làng Đá, Naruto sau đó bị giam vào ngục Hozukijou (còn được gọi là Huyết Ngục).' },
  { id: 137, name: 'Naruto Shippuden Movie 6: Đường Tới Ninja', watched:true, year: 2012, cat: ['jp', 'hh'], rating: 5, poster: 'https://i.ibb.co/jvCXrNVv/naruto-shippuden-movie-6.png', note: 'Naruto và Sakura đang chơi trong công viên thì gặp Obito-thành viên tổ chức Akatsuki bắt vào trong một thế giới khác song song với thế giới Naruto đang sống. Ở thế giới này tất cả mọi người đều thay đổi và Naruto không có tên như cũ mà bị gọi là Memma. Tính cách mọi người thay đổi và cái bất ngờ nhất là bố mẹ Naruto vẫn còn sống và không làm Hokage mà thay vào đó là bố của Sakura làm Hokage và đã hi sinh. Cái bất ngờ hơn nữa là Akatsuki lại là tổ chức đánh thuê. Trong thế giới này Naruto phải đánh lại với chính mình là Memma và hợp sức với Cửu Vĩ...' },
  { id: 138, name: 'Naruto Shippuden Movie 7: Trận Chiến Cuối Cùng', watched:true, year: 2014, cat: ['jp', 'hh'], rating: 5, poster: 'https://i.ibb.co/XZdQPCVs/naruto-shippuden-movie-7.png', note: 'Hai năm sau khi các sự kiện của cuộc Chiến tranh Thế giới Thứ tư Shinobi, mặt trăng bắt đầu đi xuống về phía Trái đất. Với trăng bây giờ là một ngôi sao băng đó sẽ phá hủy tất cả mọi thứ về tác động, Naruto phải đối phó với mối đe dọa này. Trong khi đó, Toneri Ōtsutsuki, một hậu duệ của Hamura Ōtsutsuki xác định thực hiện về di sản tổ tiên mình, xuất hiện và bắt cóc Hanabi Hyuga sau khi thất bại trong việc bắt lấy Hinata. Naruto, Hinata, Sakura, Sai, và Shikamaru được triển khai để đi giải cứu Hanabi.' },
  { id: 139, name: 'Liêu Trai: Lan Nhược Tự', watched:true, year: 2025, cat: ['tq', 'hh'], rating: 5, poster: 'https://i.ibb.co/JRvJBmD4/lieu-trai-lan-nhuoc-tu.png', note: 'Phim mở đầu tại ngôi chùa cổ Lan Nhược Tự, nơi thư sinh Bồ Tùng Linh bất ngờ rơi xuống một cái giếng hoang và gặp hai linh thú: một con ếch và một con rùa, cả hai đều có sức mạnh siêu nhiên và yêu thích văn chương. Bồ Tùng Linh được buộc làm trọng tài để phán xét câu chuyện của hai linh thú, từ đó dần lấy lại niềm đam mê kể chuyện và tự kể câu chuyện thứ năm.' },
  { id: 140, name: 'Breaking Bad', watched:true, year: 2008, cat: ['us'], rating: 5, poster: 'https://i.ibb.co/d0G8zpt7/breaking-bad.png', note: 'Một giáo viên dạy hóa ở trường trung học mắc bệnh ung thư bắt tay với một cựu học sinh để bảo vệ tương lai của gia đình bằng cách sản xuất và bán ma túy đá.' },
  { id: 141, name: 'Gặp Gỡ Gia Đình Robinson', watched:true, year: 2007, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/BV0NhSRR/meet-the-robinson.png', note: 'Là một cậu bé tài năng, Lewis sở hữu trong tay hàng chục phát minh, trong đó có một công cụ giúp con người tìm lại ký ức đã qua của mình. Dự định tìm lại người mẹ thất lạc năm xưa của Lewis dựa vào phát minh này chưa kịp thực hiện thì nó đã bị đánh cắp. Không còn cách nào khác, Lewis đành bắt tay với Wilbur Robinson, một người lạ mặt, và cả hai người họ bắt đầu cuộc phiêu lưu mang đầy sự bất ngờ.' },
  { id: 142, name: 'Fish Hooks', watched:true, year: 2010, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/NdT2Y74H/fish-hooks.png', note: 'Bộ phim xoay quanh chú cá tuổi teen Milo cùng anh trai Oscar và người bạn cá vàng nhiều chuyện Bea Goldfishberg. Bối cảnh của bộ phim chủ yếu liên quan tới các câu chuyện khi bộ ba đi học ở trường Fresh Water High ở bể cá trong một cửa hàng thú cưng. Ngoài ra, bộ phim cũng nhắc tới cuộc sống bên ngoài trường học của lứa tuổi teen, như là chuyện tình cảm, làm bài tập hay là những lần đi nghịch ngợm.' },
  { id: 143, name: 'Gravity Falls', watched:true, year: 2012, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/pjFHkLgt/gravity-falls.png', note: 'Bộ phim kể về những cuộc phiêu lưu của hai anh em sinh đôi Dipper và Mabel Pines, khi mà bố mẹ cho họ đến chơi với chú Stan ở một thị trấn của Gravity Falls.' },
  { id: 144, name: 'Kim Possible', watched:true, year: 2002, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/YTLLLzPh/kim-possible.png', note: 'Nếu có nguy hiểm hoặc rắc rối, Kim Possible sẽ ở đó để cứu thế giới khỏi những kẻ phản diện... và vẫn về nhà kịp thời để luyện tập cổ vũ!' },
  { id: 145, name: 'Phineas và Ferb', watched:true, year: 2007, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/JjPHrwj0/phineas-and-ferb.png', note: 'Phineas và Ferb là những cậu bé thông minh và tháo vát. Cả hai cậu đã dành thời gian cả mùa hè để thực hiện những kế hoạch khó tin (dựng đường xe trượt quanh thành phố, làm bãi biển ở sân sau, trở thành ca sĩ…) với sự trợ giúp của cô bé Isabella và nhóm bạn của cô. Tuy nhiên Candace lại thường không đồng tình với những việc làm của hai đứa em và cô luôn tìm cách mách mẹ cho bằng được. Thế nhưng khi mẹ của ba chị em về đến nơi thì tất cả mọi dấu vết đều bị xóa sạch một cách ngẫu nhiên và chưa lần nào Candace thành công trong việc vạch tội hai cậu em cả.' },
  { id: 146, name: 'Star Vs The Forces Of Evil', watched:true, year: 2015, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/HfDttVCn/star-vs-the-force-of-evil.png', note: 'Chiến binh giữa các thiên hà Star Butterfly đến Trái đất để sống với gia đình Diaz. Cô tiếp tục chiến đấu với những kẻ phản diện trên khắp vũ trụ và trường trung học, chủ yếu để bảo vệ cây đũa phép cực kỳ mạnh mẽ của mình, một vật thể vẫn khiến cô bối rối.' },
  { id: 147, name: 'Shaun The Sheep', watched:true, year: 2007, cat: ['us', 'hh'], rating: 4, poster: 'https://i.ibb.co/SXg5HrQq/shaun-the-sheep.png', note: 'Nội dung xoay quanh cuộc sống nông trại hàng ngày của đám cừu do Shaun, một chú cừu nhỏ con nhưng thông minh lãnh đạo. Cùng với ông chủ nông trại, chú chó Bitzer, và đám thú còn lại (trâu, bò, gà, lợn…), mỗi ngày với đàn cừu là những trò nghịch ngợm và tình huống hài hước vô tận.' },
  { id: 148, name: 'The 7D', watched:true, year: 2014, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/dw0mpVYq/the-7D.png', note: 'Bảy chú lùn bảo vệ vương quốc Jollywood khỏi hai phù thủy Grim và Hildy Gloom, những người muốn truất ngôi nữ hoàng Hạnh Phúc (Queen Delightful) và thống trị Jollywood.' },
  { id: 149, name: 'Mighty Magiswords', watched:true, year: 2016, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/7dSQRxnb/mighty-magiswords.png', note: 'Bộ phim là về Vambre và Prohyas, anh em sinh đôi của"Warriors for Hire", những người đi vào cuộc phiêu lưu vui nhộn và nhiệm vụ điên khắp thế giới để tìm và thu thập thanh kiếm thần.' },
  { id: 150, name: 'Bóng Ma Anh Quốc', year: 2013, cat: ['us'], rating: 5, poster: 'https://i.ibb.co/YTPyQm3M/bong-ma-anh-quoc.png', note: 'Được đặt trong bối cảnh nước Anh đầu thế kỷ 19, Peaky Blinders nói về gia đình Shelby, những người cầm đầu băng đảng Peaky Blinders khét tiếng trong thế giới ngầm với bộ não là Tommy Shelby, đứa con trai thứ hai. Bộ phim là hành trình thăng tiến trong thế giới ngầm của Tommy bằng những mưu mô, thủ đoạn tàn nhẫn. Ngoài ra, người xem cũng sẽ được gặp lại nhiều nhân vật và sự kiện lịch sử có thật như Winston Churchill, cuộc kháng chiến đòi độc lập của Ai-len với Anh Quốc ...' },
  { id: 151, name: 'Xì Trum', watched: true, year: 1981, cat: ['us'], rating: 5, poster: 'https://i.ibb.co/1GMMPwzt/the-smurfs.png', note: 'Loạt phim thiếu nhi theo dấu cuộc phiêu lưu của các cô cậu Xì Trum, những cư dân màu xanh bé nhỏ sống ở ngôi làng yên bình và đang tìm cách đánh bại kẻ ác Gargamel.' },
  { id: 152, name: 'Shin - Cậu bé bút chì', watched:true,  year: 1992, cat: ['jp'], rating: 5, poster: 'https://i.ibb.co/cXQjN7JZ/shin.png', note: 'Nhân vật chính của bộ phim là Shin (tên viết tắt của Shinnosuke) - một cậu bé 5 tuổi sống trong một gia đình Nhật Bản bình thường, có bố là trưởng nhóm công ty Futaba, mẹ là Misae - một bà nội trợ. Chú bé Shin và gia đình có thể coi là một gia đình biểu tượng cho tầng lớp trung lưu ở Nhật Bản, một gia đình được lấy hình mẫu từ bất kỳ gia đình nào trong xã hội Nhật Bản thời nay.' },
  { id: 153, name: 'Sakura Thủ Lĩnh Thẻ Bài', watched:true,  year: 1998, cat: ['jp'], rating: 5, poster: 'https://i.ibb.co/39j2NZRf/sakura.png', note: 'Vô tình giải phóng bộ thẻ bài ma thuật được niêm phong nhiều năm trong một quyển sách, cô bé Sakura phát hiện ra mình đang nắm giữ một sức mạnh kì diệu. Sau đó cô bé được giao nhiệm vụ thu phục lại tất cả các thẻ bài đã chạy thoát, nhằm ngăn chặn chúng phá huỷ thế giới.' },
  { id: 154, name: 'Vua Sư Tử', year: 2011, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/9mPL1Dfx/the-lion-king.png', note: 'Lấy bối cảnh là khu vực rừng hoang Phi Châu, bộ phim đã xây dựng nên cả một xã hội có tổ chức của thế giới loài vật. Trong xã hội ấy cũng có những mâu thuẫn, cũng có tranh chấp và có cả tình yêu như thế giới loài người. Nhân vật chính của Vua sư tử là chú sư tử con Simba, con trai của Mufasa vị vua đang thống trị thế giới hoang dã ở đây. Cuộc sống hạnh phúc yêu đời bên cạnh cha mẹ và cô bạn Nala của cậu sớm chấm dứt khi người chú ruột Scar có âm mưu cướp ngai vàng của cha cậu....' },
  { id: 155, name: 'Vua Sư Tử 2: Niềm Kiêu Hãnh Của Simba', year: 2013, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/Z6QZMSSn/the-lion-king-2.png', note: 'Ở đoạn cuối của phần 1, Simba đánh bại ông chú Scar độc ác, đồng thời giành lại ngai vàng ở vùng đất Pride Land. Sau khi lên ngôi vua, Simba và hoàng hậu Nala có một cô con gái tên Kiara. Khi trưởng thành, Kiara kết bạn với Kovu, hậu duệ của một nhóm sư tử từng bị Simba trục xuất khỏi vương quốc vì tội trung thành với Scar. Sau một lần suýt bị nuốt chửng bởi đàn cá sấu, chúng trở nên vô cùng thân thiết. Zira, mẹ của Kovu, từ lâu đã ấp ủ ý định báo thù cho Scar nên huấn luyện để Kovu trở thành một sát thủ...' },
  { id: 156, name: 'Thằng Gù Ở Nhà Thờ Đức Bà', watched:true, year: 1996, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/4wk7vLgs/thang-gu-o-nha-tho-duc-ba.png', note: 'Nội dung nói lên mối tình tuyệt vọng được cho là bất diệt của một con người xấu xí như một quái vật tên Quasimodo, đối với một cô gái du mục Gypsi xinh đẹp tên Esméralda.' },
  { id: 157, name: 'Bạch Tuyết Và Bảy Chú Lùn', watched:true, year: 1939, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/RTvDgzTN/bach-tuyet-va-bay-chu-lun.png', note: 'Câu chuyện kể về một người mẹ kế đã đang tâm tìm mọi cách để hãm hại con chồng. Vì ghen tị với sắc đẹp của Bạch Tuyết, bà hoàng hậu độc ác đã không từ mọi thủ đoạn xấu xa nhất. Mở đầu cho loạt âm mưu thâm độc của bà hoàng hậu là việc sắp đặt cho người thợ săn đưa người con chồng vào rừng để giết chết.May mắn thay, nhờ lòng tốt của người thợ săn, Bạch Tuyết đã được giải thoát. Lạc vào rừng sâu, cô tìm thấy nhà của bảy chú tốt bụng. Sự hiện diện của Bạch Tuyết trong ngôi nhà vốn thiếu bàn tay chăm sóc đã khiến cho cuộc sống của những chú lùn này thay đổi hoàn toàn.' },
  { id: 158, name: 'Nàng Tiên Cá', watched:true, year: 1989, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/m5qZmkJY/nang-tien-ca.png', note: 'Nàng tiên cá Ariel là con út của vua Biển Cả được hết mực yên mến. Khi nàng bước sang tuổi 15, trong một lần đi khám giá thế giới mặt đất, nàng đã cứu được 1 hoàng tử đang bị đắm tàu. Hoàng tử nhầm tưởng một cô gái khác đã cứu mình. Nàng tiên cá vì yêu chàng đã hy sinh giọng nói để đổi lấy đôi chân.' },
  { id: 159, name: 'Cô Bé Lọ Lem', watched:true, year: 1950, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/CKQnR7Rn/co-be-lo-lem.png', note: 'Cô bé Lọ Lem tin rằng ước mơ về một cuộc sống tốt đẹp hơn sẽ thành hiện thực. Với sự giúp đỡ từ những người bạn chuột trung thành của cô ấy và một làn sóng đũa phép của Fairy Godmother, những miếng giẻ rách của Cinderella được biến thành một chiếc áo choàng lộng lẫy một cách kỳ diệu và cô ấy đi đến Royal Ball. Nhưng khi đồng hồ điểm nửa đêm, câu thần chú bị phá vỡ, để lại một chiếc dép thủy tinh duy nhất... chìa khóa duy nhất cho kết thúc câu chuyện cổ tích cuối cùng!' },
  { id: 160, name: 'Người Đẹp Và Quái Vật', watched:true, year: 1991, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/N25HppBJ/nguoi-dep-va-quai-vat.png', note: 'Một chàng hoàng tử trẻ sống trong một tòa lâu đài nguy nga tráng lệ. Chàng có tất cả nhưng kiêu ngạo, tàn nhẫn và không biết đến tình yêu thương... Chàng sẽ sống ra sao khi bị biến thành một con quái vật xấu xí? Lời nguyền chỉ được hóa giải, khi chàng học được cách yêu ai đó, và cũng được người đó đáp lại trước khi cánh hoa hồng cuối cùng rơi xuống!' },
  { id: 161, name: 'Aladdin Và Cây Đèn Thần', watched:true, year: 1992, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/pjN50rjG/aladdin.png', note: 'Bộ phim kể về Aladdin, một thanh niên vô gia cư sống lang thang bên đường phố Agrabah. vô tình có được cây đèn thần kỳ diệu. Nhờ có vị thần đèn vui tính, Aladdin từ một kẻ mồ côi, lang thang đã có tất cả nhưng gì anh mơ ước như của cải và cô công chúa xinh đẹp. Nhưng một tên phù thủy gian ác đang âm mưu phá hoại cuộc sống của Aladdin bằng cách chiếm đoạt lại cây đèn thần này, và bắt công chúa người nah yêu đi. Aladdin sẽ phải làm gì đây?' },
  { id: 162, name: 'Hoa Mộc Lan', watched:true, year: 1998, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/bj8QFFdJ/mulan.png', note: 'Nội dung bộ phim hoạt hình dựa theo một câu chuyện dân gian nổi tiếng của Trung Quốc kể về cô gái giả trai ra trận thường được biết đến dưới cái tên Hoa Mộc Lan' },
  { id: 163, name: 'Công Chúa Và Chàng Ếch', watched:true, year: 2009, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/pvBR5pgS/cong-chua-va-chang-ech.png', note: 'Tiana là một cô gái chăm chỉ, tự lập, và quyến rũ. Cô không có thời gian dành cho sự mơ mộng lãng mạn, mà thay vào đó là một niềm đam mê nấu nướng và cô mong muốn sẽ trở thành một người quản lý nhà hàng thành đạt, kế thừa từ người cha mình. Nhưng dù cho có cần cù và siêng năng đến mấy thì những trở ngại vẫn khiến cho mong ước đó của Tiana còn khá xa vời.' },
  { id: 164, name: 'Công Chúa Ngủ Trong Rừng', watched:true, year: 1959, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/4nqx8nDh/cong-chua-ngu-trong-rung.png', note: 'Sau khi công chúa xinh đẹp, Aurora sinh ra, hoàng gia mời mọi người tập hợp để trao đổi quà tặng. Mọi thứ đều ổn cho đến khi một vị khách không mời xuất hiện, Maleficent. Maleficent thực hiện một câu thần chú lên công chúa trẻ và thông báo rằng cô sẽ chết bằng cách đâm ngón tay vào trục quay của bánh xe quay vào tối ngày sinh nhật thứ 16 của cô. May mắn thay, một trong những nàng tiên tốt bụng, Merryweather, thay đổi câu thần chú để Aurora sẽ ngủ, và cách duy nhất để đánh thức cô khỏi giấc ngủ là nụ hôn của tình yêu đích thực. Cuối cùng ngày đó cũng đến' },
  { id: 165, name: 'Công Chúa Tóc Mây', watched:true, year: 2010, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/VYpXxfL6/cong-chua-toc-may.png', note: 'Rapunzel - nàng công chúa có mái tóc dài thần kì bị nhốt suốt 18 năm trời trên ngọn tháp cao chót vót bởi một mụ phù thủy. Mọi chuyện trở nên kịch tính khi tên trộm tinh quái và quyến rũ nhất vương quốc - Flynn Rider - trong cuộc chạy trốn khỏi binh lính triều đình, tình cờ rơi vào ngọn tháp của Rapunzel. Từ đây cô công chúa thơ dại đã bắt đầu chuyến phiêu lưu trốn chạy khỏi ngọn tháp u tối để tìm lại cuộc sống đích thực của chính mình.' },
  { id: 166, name: 'Ratatouille', watched:true, year: 2007, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/Nd7zTqXb/ratatouille.png', note: 'Remy là một chú chuột có lòng yêu thích ẩm thực và mong muốn được đến Paris để thực hiện ước mơ trở thành đầu bếp nổi tiếng. Tuy bị gia đình ngăn cản nhưng cuối cùng Remy cũng đặt chân được đến kinh đô ánh sáng và bắt đầu cuộc phiêu lưu của mình. Tại đây, Remy quen Linguini - cậu con trai của thần tượng đồng thời là bếp trưởng nổi tiếng của nhà hàng Gusteau. Remy và Linguini trở thành cặp bài trùng trong việc chế biến các món ăn mới lạ, đồng thời chứng mình quan niệm của Gusteau: "Ai cũng có thể nấu ăn ngon".' },
  { id: 167, name: '101 Chú Chó Đốm', watched:true, year: 1961, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/0j5htnfp/101-chu-cho-dom.png', note: ' phim kể về gia đình của hai chú chó đốm - Pongo và Purdy sống cùng hai người chủ tốt bụng là Roger - Anita. Khi Purdy sinh ra 15 chú chó đốm xinh xắn thì người bạn cũ của Anita là Cruella De Ville muốn mua lại cả ổ để lột da làm áo lông.Bị từ chối, Cruella đã cử tay sai đi bắt trộm các chú chó đốm con Pongo và Purdy quyết vượt đường xa vạn dặm đi tìm lại các con. Trên đường đi, cả hai còn phát hiện ra có rất nhiều chó đốm con khác cũng bị “mụ phù thủy” Cruella bắt trộm. Sau một hành trình gian nan và hiểm nguy, 101 chú chó đốm đàn tụ với hai người chủ Roger và Anita vào đúng dịp Giáng sinh ấm áp.' },
  { id: 168, name: 'Chú Chuột Siêu Quậy', watched:true, year: 1999, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/kgZtJrbw/stuart-little.png', note: 'Khi bố mẹ nhận nuôi một bạn chuột thay vì một cậu bé, George nhận ra anh em trai có thể có muôn hình vạn trạng. Nhưng bạn mèo Snowbell lại không mấy chào đón thành viên mới này.' },
  { id: 169, name: 'Chú Chuột Siêu Quậy 2', watched:true, year: 2002, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/XrvdDyzj/stuart-little-2.png', note: 'Rắc rối ập đến với bạn chuột thành phố đầy nhiệt huyết Stuart và bạn mèo Snowbell của gia đình khi bạn mới là chim hoàng yến gặp nguy hiểm trước chim ưng tàn nhẫn.' },
  { id: 170, name: 'Cô Bé Coraline', watched:true, year: 2009, cat: ['us', 'hh'], rating: 5, poster: 'https://i.ibb.co/cdt9qFj/coraline.png', note: 'Khi Coraline chuyển đến một ngôi nhà cũ, cô cảm thấy buồn chán và bị cha mẹ bỏ rơi. Cô tìm thấy một cánh cửa ẩn với một lối đi bằng gạch. Trong đêm, cô băng qua hành lang và tìm thấy một thế giới song song, nơi mọi người đều có nút thay vì mắt, với cha mẹ chăm sóc và tất cả ước mơ của cô đều trở thành sự thật. Khi Người Mẹ khác mời Coraline ở lại thế giới của mình mãi mãi, cô gái từ chối và thấy rằng thực tế thay thế nơi cô bị mắc kẹt chỉ là một thủ thuật để thu hút cô.' },
];

let nextId = Math.max(...movies.map(m => m.id)) + 1;
let currentCat = 'all';
let currentRating = 0;
let editingId = null;

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('themeIcon').className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  document.getElementById('themeIcon').className = saved === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
}

function renderStats() {
  const ratedMovies = movies.filter(m => m.rating > 0);
  const avgRating = ratedMovies.reduce((a, m) => a + m.rating, 0) / (ratedMovies.length || 1);
  const top5 = movies.filter(m => m.rating === 5).length;
  const watchedCount = movies.filter(m => m.watched).length;
  document.getElementById('statsBar').innerHTML = `
        <div class="stat-pill"><i class="fa-solid fa-film" style="color:var(--accent)"></i> Tổng: <strong>${movies.length}</strong> phim</div>
        <div class="stat-pill"><i class="fa-solid fa-eye" style="color:#22c55e"></i> Đã xem: <strong>${watchedCount}</strong> phim</div>
        <div class="stat-pill"><i class="fa-solid fa-star" style="color:var(--gold)"></i> TB: <strong>${avgRating.toFixed(1)}</strong> / 5</div>
        <div class="stat-pill"><i class="fa-solid fa-trophy" style="color:var(--gold)"></i> 5 sao: <strong>${top5}</strong> phim</div>
    `;
}

function renderCats() {
  const counts = {};
  movies.forEach(m => {
    const cats = Array.isArray(m.cat) ? m.cat : [m.cat];
    cats.forEach(c => { counts[c] = (counts[c] || 0) + 1; });
  });
  const total = movies.length;
  document.getElementById('catTabs').innerHTML = CATEGORIES.map(c => {
    const cnt = c.id === 'all' ? total : (counts[c.id] || 0);
    return `<button class="cat-btn ${currentCat === c.id ? 'active' : ''}" onclick="setCat('${c.id}')">
            ${c.label} <span class="count">${cnt}</span>
        </button>`;
  }).join('');
}

function filterMovies() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const filtered = movies.filter(m => {
    const cats = Array.isArray(m.cat) ? m.cat : [m.cat];
    const matchCat = currentCat === 'all' || cats.includes(currentCat);
    const matchQ = !q || m.name.toLowerCase().includes(q) || (m.note || '').toLowerCase().includes(q);
    return matchCat && matchQ;
  }).sort((a, b) => (b.year || 0) - (a.year || 0));
  renderGrid(filtered);
}

function renderGrid(filtered) {
  const container = document.getElementById('sectionContainer');
  if (!filtered.length) {
    container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-film"></i>
                <h3>Không có phim nào</h3>
                <p>Hãy thêm phim mới hoặc thử danh mục khác</p>
            </div>`;
    return;
  }
  container.innerHTML = `<div class="movie-grid">${filtered.map(movieCard).join('')}</div>`;
}

function movieCard(m) {
  const cats = Array.isArray(m.cat) ? m.cat : [m.cat];
  const starsBadge = m.rating > 0
    ? `<div class="rating-badge"><i class="fa-solid fa-star"></i> ${m.rating}.0</div>` : '';
  const posterImg = m.poster
    ? `<img src="${m.poster}" alt="${m.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">` : '';
  const placeholder = `<div class="poster-placeholder" style="${m.poster ? 'display:none' : ''}">
        <i class="fa-solid fa-clapperboard"></i><small>Chưa có ảnh</small></div>`;
  const tagsHtml = cats
    .map(c => `<span class="tag">${CATEGORIES.find(x => x.id === c)?.label || c}</span>`)
    .join('');
  const watchedBadge = m.watched
    ? `<div class="watched-badge" title="Đã xem"><i class="fa-solid fa-check"></i></div>` : '';
  return `
        <div class="movie-card" onclick="openDetail(${m.id})">
            <div class="poster-wrap">
                ${posterImg}${placeholder}${starsBadge}${watchedBadge}
                <div class="poster-overlay">
                    <div class="overlay-actions">
                        <button class="overlay-btn" onclick="event.stopPropagation();toggleWatched(${m.id})" title="${m.watched ? 'Bỏ đánh dấu đã xem' : 'Đánh dấu đã xem'}">
                            <i class="fa-solid ${m.watched ? 'fa-eye-slash' : 'fa-eye'}"></i>
                        </button>
                        <button class="overlay-btn" onclick="event.stopPropagation();openEdit(${m.id})" title="Sửa"><i class="fa-solid fa-pen"></i></button>
                        <button class="overlay-btn" onclick="event.stopPropagation();deleteMovie(${m.id})" title="Xóa"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
            <div class="card-body-custom">
                <div class="card-title">${m.name}</div>
                <div class="card-year">${m.year || ''}</div>
                <div class="card-tags">${tagsHtml}</div>
            </div>
        </div>`;
}

function toggleWatched(id) {
  const m = movies.find(x => x.id === id);
  if (!m) return;
  m.watched = !m.watched;
  toast(m.watched ? 'Đã đánh dấu đã xem 👁️' : 'Đã bỏ đánh dấu đã xem');
  render();
}

function render() { renderStats(); renderCats(); filterMovies(); }
function setCat(id) { currentCat = id; render(); }

function populateCatCheckboxes(selectedCats = []) {
  const wrap = document.getElementById('f_cat_wrap');
  wrap.innerHTML = CATEGORIES
    .filter(c => c.id !== 'all')
    .map(c => {
      const checked = selectedCats.includes(c.id) ? 'checked' : '';
      return `
                <label style="
                    display:flex;align-items:center;gap:6px;
                    background:var(--input-bg);border:1px solid var(--input-border);
                    border-radius:10px;padding:5px 10px;cursor:pointer;
                    font-size:0.82rem;color:var(--text2);white-space:nowrap;transition:all 0.2s;"
                    onmouseover="this.style.borderColor='var(--accent)'"
                    onmouseout="this.style.borderColor='var(--input-border)'">
                    <input type="checkbox" value="${c.id}" ${checked}
                        style="accent-color:var(--accent);width:14px;height:14px;cursor:pointer;">
                    ${c.label}
                </label>`;
    }).join('');
}

function getSelectedCats() {
  return [...document.querySelectorAll('#f_cat_wrap input[type=checkbox]:checked')]
    .map(cb => cb.value);
}

function setRating(n) {
  currentRating = n;
  document.querySelectorAll('#starRating .star-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i < n);
  });
}

function openAddModal() {
  editingId = null; currentRating = 0;
  document.getElementById('modalTitle').textContent = 'Thêm phim mới';
  document.getElementById('f_name').value = '';
  document.getElementById('f_year').value = new Date().getFullYear();
  document.getElementById('f_poster').value = '';
  document.getElementById('f_note').value = '';
  setRating(0);
  populateCatCheckboxes([]);
  openModal('addModal');
}

function openEdit(id) {
  const m = movies.find(x => x.id === id);
  if (!m) return;
  editingId = id; currentRating = m.rating;
  document.getElementById('modalTitle').textContent = 'Sửa phim';
  document.getElementById('f_name').value = m.name;
  document.getElementById('f_year').value = m.year || '';
  document.getElementById('f_poster').value = m.poster || '';
  document.getElementById('f_note').value = m.note || '';
  setRating(m.rating);
  const cats = Array.isArray(m.cat) ? m.cat : [m.cat];
  populateCatCheckboxes(cats);
  openModal('addModal');
}

function saveMovie() {
  const name = document.getElementById('f_name').value.trim();
  if (!name) { toast('Vui lòng nhập tên phim!', 'error'); return; }
  const selectedCats = getSelectedCats();
  if (!selectedCats.length) { toast('Vui lòng chọn ít nhất 1 danh mục!', 'error'); return; }
  const data = {
    name,
    year: parseInt(document.getElementById('f_year').value) || null,
    cat: selectedCats,
    rating: currentRating,
    poster: document.getElementById('f_poster').value.trim(),
    note: document.getElementById('f_note').value.trim(),
  };
  if (editingId) {
    const idx = movies.findIndex(m => m.id === editingId);
    movies[idx] = { ...movies[idx], ...data };
    toast('Đã cập nhật phim ✅');
  } else {
    movies.push({ id: nextId++, ...data });
    toast('Đã thêm phim mới 🎉');
  }
  closeModal('addModal');
  render();
}

function deleteMovie(id) {
  const m = movies.find(x => x.id === id);
  if (!m) return;
  const overlay = document.getElementById('confirmModal');
  document.getElementById('confirmMovieName').textContent = `"${m.name}"`;
  overlay.classList.add('show');
  overlay._pendingId = id;
}

function confirmDelete() {
  const overlay = document.getElementById('confirmModal');
  const id = overlay._pendingId;
  movies = movies.filter(m => m.id !== id);
  overlay.classList.remove('show');
  closeModal('detailModal');
  toast('Đã xóa phim 🗑️');
  render();
}

function cancelDelete() {
  document.getElementById('confirmModal').classList.remove('show');
}

function openDetail(id) {
  const m = movies.find(x => x.id === id);
  if (!m) return;
  const cats = Array.isArray(m.cat) ? m.cat : [m.cat];
  const stars = '★'.repeat(m.rating) + '☆'.repeat(5 - m.rating);
  const poster = m.poster
    ? `<img src="${m.poster}" alt="${m.name}" style="width:100%;height:100%;object-fit:cover"
               onerror="this.parentElement.innerHTML='<div class=no-img><i class=\\'fa-solid fa-clapperboard\\'></i></div>'">`
    : `<div class="no-img"><i class="fa-solid fa-clapperboard"></i></div>`;
  const tagsHtml = cats
    .map(c => `<span class="tag">${CATEGORIES.find(x => x.id === c)?.label || c}</span>`)
    .join('');
  document.getElementById('detailContent').innerHTML = `
        <div class="detail-header">
            <div class="detail-poster">${poster}</div>
            <div class="detail-info">
                <div class="detail-title">${m.name}</div>
                <div class="detail-meta">
                    ${m.year ? `<span><i class="fa-solid fa-calendar"></i> ${m.year}</span>` : ''}
                </div>
                <div class="detail-tags" style="margin-top:8px">${tagsHtml}</div>
                ${m.rating > 0
      ? `<div class="detail-rating-big"><i class="fa-solid fa-star"></i> ${m.rating}.0 <small>/ 5 sao</small></div>
                       <div style="color:var(--gold);font-size:1.2rem;margin-top:4px">${stars}</div>`
      : `<div style="color:var(--text3);margin-top:8px;font-size:0.85rem">Chưa đánh giá</div>`
    }
            </div>
        </div>
        ${m.note ? `<div class="detail-note"><i class="fa-solid fa-quote-left" style="color:var(--accent);margin-right:8px"></i>${m.note}</div>` : ''}
        <div class="detail-actions">
            <button class="btn-watched ${m.watched ? 'watched-active' : ''}" onclick="toggleWatched(${m.id});closeModal('detailModal')">
                <i class="fa-solid ${m.watched ? 'fa-eye-slash' : 'fa-eye'}"></i> ${m.watched ? 'Bỏ đã xem' : 'Đánh dấu đã xem'}
            </button>
            <button class="btn-edit" onclick="closeModal('detailModal');openEdit(${m.id})"><i class="fa-solid fa-pen"></i> Sửa</button>
            <button class="btn-delete" onclick="deleteMovie(${m.id})"><i class="fa-solid fa-trash"></i> Xóa</button>
        </div>`;
  openModal('detailModal');
}

function openModal(id) { document.getElementById(id).classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('show'); document.body.style.overflow = ''; }

document.querySelectorAll('.modal-overlay').forEach(el => {
  el.addEventListener('click', e => { if (e.target === el) closeModal(el.id); });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal('addModal'); closeModal('detailModal'); }
});

function toast(msg, type = 'success') {
  const wrap = document.getElementById('toastWrap');
  const el = document.createElement('div');
  el.className = 'toast-msg';
  if (type === 'error') el.style.borderLeftColor = '#e74c3c';
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

initTheme();
populateCatCheckboxes([]);
render();