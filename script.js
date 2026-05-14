const CATEGORIES = [
  { id: 'all', label: '🎬 Tất cả' },
  { id: 'vn', label: '🇻🇳 Việt Nam' },
  { id: 'us', label: '🇺🇸 Âu Mỹ' },
  { id: 'thai', label: '🇹🇭 Thái Lan' },
  { id: 'kr', label: '🇰🇷 Hàn Quốc' },
  { id: 'cn', label: '🇨🇳 Hoa ngữ' },
  { id: 'hh', label: '🦎 Hoạt hình' },
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
  document.getElementById('statsBar').innerHTML = `
        <div class="stat-pill"><i class="fa-solid fa-film" style="color:var(--accent)"></i> Tổng: <strong>${movies.length}</strong> phim</div>
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
  if (!confirm('Xóa phim này khỏi danh sách?')) return;
  movies = movies.filter(m => m.id !== id);
  closeModal('detailModal');
  toast('Đã xóa phim 🗑️');
  render();
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