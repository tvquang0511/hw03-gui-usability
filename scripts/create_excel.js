const ExcelJS = require('exceljs');
const path = require('path');

async function generateChecklistExcel() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Tran Vu Quang - 23120346';
  workbook.created = new Date();

  // Sheet 1: GUI_Checklist
  const ws = workbook.addWorksheet('GUI_Checklist', {
    views: [{ state: 'frozen', ySplit: 1 }]
  });

  ws.columns = [
    { header: 'ID', key: 'id', width: 12 },
    { header: 'Khía cạnh', key: 'aspect', width: 12 },
    { header: 'Màn hình', key: 'screen', width: 16 },
    { header: 'Tiêu chí kiểm tra (Checkpoint)', key: 'checkpoint', width: 34 },
    { header: 'Kết quả kỳ vọng (Expected Result)', key: 'expected', width: 40 },
    { header: 'Kết quả (Status)', key: 'status', width: 14 },
    { header: 'Ghi chú lý do lỗi (Notes)', key: 'notes', width: 45 },
    { header: 'Nguồn', key: 'source', width: 12 },
    { header: 'Lý do AI bỏ sót (Why AI Missed It)', key: 'whyMissed', width: 48 },
  ];

  const data = [
    // CHK-01 -> CHK-14 (IA-01)
    { id: 'CHK-01', aspect: 'IA-01', screen: 'Product List', checkpoint: 'Bố cục lưới sản phẩm (Grid Alignment)', expected: 'Các thẻ card có chiều cao bằng nhau, căn thẳng hàng.', status: 'Passed', notes: 'Hiển thị lưới Tailwind CSS grid-cols-3 đều đặn.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-02', aspect: 'IA-01', screen: 'Product List', checkpoint: 'Phân cấp thị giác tiêu đề và giá', expected: 'Tên SP rõ ràng, giá tiền nổi bật màu đỏ font đậm.', status: 'Passed', notes: 'Giá tiền hiển thị màu đỏ text-red-500 font-bold nổi bật.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-03', aspect: 'IA-01', screen: 'Product List', checkpoint: 'Định dạng tiền tệ hiển thị', expected: 'Giá hiển thị có dấu phân cách hàng nghìn VND.', status: 'Passed', notes: 'Hiển thị định dạng chuẩn qua toLocaleString() VND.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-04', aspect: 'IA-01', screen: 'Product Detail', checkpoint: 'Tỷ lệ và khung hiển thị ảnh sản phẩm', expected: 'Ảnh đúng tỷ lệ aspect ratio, không bị méo mó.', status: 'Passed', notes: 'Ảnh sử dụng class object-cover hiển thị rõ ràng.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-05', aspect: 'IA-01', screen: 'Product Detail', checkpoint: 'Bố cục thông tin chi tiết', expected: 'Phân vùng ảnh và thông tin chi tiết cân đối.', status: 'Passed', notes: 'Bố cục chia 2 cột md:flex-row tỷ lệ 50-50 cân đối.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-06', aspect: 'IA-01', screen: 'Shopping Cart', checkpoint: 'Căn lề bảng giỏ hàng', expected: 'Bảng căn thẳng hàng các cột Tên, Giá, SL, Thành tiền.', status: 'Passed', notes: 'Bảng table hiển thị chuẩn lề ngang.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-07', aspect: 'IA-01', screen: 'Shopping Cart', checkpoint: 'Nổi bật tổng thanh toán', expected: 'Khu vực Tổng tạm tính nổi bật.', status: 'Passed', notes: 'Tổng tạm tính in đậm chữ lớn màu đỏ text-red-600.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-08', aspect: 'IA-01', screen: 'Checkout', checkpoint: 'Bố cục trang thanh toán 2 cột', expected: 'Cột trái thông tin giao hàng, cột phải tóm tắt đơn.', status: 'Failed', notes: 'Thiếu hoàn toàn form thông tin giao hàng, chỉ có 1 cột đơn điệu.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-09', aspect: 'IA-01', screen: 'Toàn hệ thống', checkpoint: 'Tính nhất quán màu sắc & Font chữ', expected: 'Màu thương hiệu xanh dương nhất quán toàn site.', status: 'Passed', notes: 'Toàn site dùng chung theme Tailwind Blue/Green/Red.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-10', aspect: 'IA-01', screen: 'Toàn hệ thống', checkpoint: 'Khả năng co giãn trên Mobile View', expected: 'Thu nhỏ 375px chuyển 1 cột mượt mà, không thanh cuộn ngang.', status: 'Passed', notes: 'Tailwind responsive sm:, md: hoạt động tốt.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-11', aspect: 'IA-01', screen: 'Product List', checkpoint: 'Tràn chữ tiếng Việt có dấu (Text Truncation)', expected: 'Tên SP dài dùng truncate không làm vỡ card.', status: 'Passed', notes: 'Tiêu đề có sử dụng class truncate của Tailwind.', source: 'Human', whyMissed: 'AI chỉ test chuỗi ngắn tiếng Anh, bỏ qua độ dài UTF-8 tiếng Việt.' },
    { id: 'CHK-12', aspect: 'IA-01', screen: 'Toàn hệ thống', checkpoint: 'Độ tương phản màu sắc tiếp cận (WCAG Contrast)', expected: 'Độ tương phản chữ với nền đạt tối thiểu 4.5:1.', status: 'Failed', notes: 'Dòng số lượng SP ở đáy trang dùng màu xám quá nhạt text-gray-400 trên nền xám nhạt khó đọc.', source: 'Human', whyMissed: 'AI xử lý token chữ nên không đo giá trị độ chìm màu hex code thực tế.' },
    { id: 'CHK-13', aspect: 'IA-01', screen: 'Toàn hệ thống', checkpoint: 'Khả năng hiển thị khi Zoom 200%', expected: 'Khi zoom 200% bố cục reflow, không bị che mất nút.', status: 'Passed', notes: 'Trang web tự co giãn tốt khi phóng to.', source: 'Human', whyMissed: 'Prompt ban đầu không nhắc tiêu chuẩn WCAG Zoom 200%.' },
    { id: 'CHK-14', aspect: 'IA-01', screen: 'Product Detail', checkpoint: 'Ký hiệu tiền tệ không bị ngắt dòng', expected: 'Ký hiệu tiền tệ không bị rơi xuống dòng đứng trơ trọi.', status: 'Passed', notes: 'Hiển thị liền mạch cùng chuỗi số tiền.', source: 'Human', whyMissed: 'Đặc thù tiếng Việt cần kiểm tra vị trí ngắt từ.' },

    // CHK-15 -> CHK-27 (IA-02)
    { id: 'CHK-15', aspect: 'IA-02', screen: 'Product List', checkpoint: 'Ô tìm kiếm có placeholder và nút xóa', expected: 'Có placeholder gợi ý và nút xóa nhanh từ khóa.', status: 'Failed', notes: 'Có placeholder nhưng thiếu nút xóa trắng nhanh (x) trong ô tìm kiếm.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-16', aspect: 'IA-02', screen: 'Product Detail', checkpoint: 'Bộ chọn số lượng (Quantity Input)', expected: 'Chỉ cho nhập số nguyên dương, có nút tăng giảm.', status: 'Failed', notes: 'Chỉ có ô input thô, không có nút bấm tăng giảm (+) và (-).', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-17', aspect: 'IA-02', screen: 'Product Detail', checkpoint: 'Giới hạn số lượng mua theo tồn kho', expected: 'Không cho phép nhập hoặc bấm quá số lượng tồn kho.', status: 'Failed', notes: 'Giao diện không kiểm tra tồn kho, nhập số lượng 9999 vẫn nhận.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-18', aspect: 'IA-02', screen: 'Shopping Cart', checkpoint: 'Thay đổi số lượng trực tiếp trong giỏ', expected: 'Cho phép sửa số lượng ngay trong giỏ hàng.', status: 'Failed', notes: 'Cột số lượng trong giỏ là văn bản tĩnh, không cho sửa số lượng.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-19', aspect: 'IA-02', screen: 'Checkout', checkpoint: 'Đánh dấu trường bắt buộc', expected: 'Các trường bắt buộc có dấu sao đỏ (*).', status: 'Failed', notes: 'Thiếu hoàn toàn form thông tin giao hàng nên không có nhãn (*).', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-20', aspect: 'IA-02', screen: 'Checkout', checkpoint: 'Kiểm tra tính hợp lệ số điện thoại', expected: 'Báo lỗi khi nhập sai định dạng số điện thoại.', status: 'Failed', notes: 'Không có trường nhập số điện thoại trên trang Checkout.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-21', aspect: 'IA-02', screen: 'Checkout', checkpoint: 'Kiểm tra định dạng Email giao hàng', expected: 'Báo lỗi khi nhập sai cấu trúc email.', status: 'Failed', notes: 'Không có trường nhập email giao hàng trên trang Checkout.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-22', aspect: 'IA-02', screen: 'Checkout', checkpoint: 'Giữ lại dữ liệu đã nhập khi submit lỗi', expected: 'Không xóa trắng các ô hợp lệ khi submit lỗi.', status: 'Passed', notes: 'React State giữ nguyên các giá trị đã nhập.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-23', aspect: 'IA-02', screen: 'Coupon', checkpoint: 'Ô nhập mã giảm giá', expected: 'Có ô nhập mã và nút áp dụng, tự động viết hoa.', status: 'Passed', notes: 'Có ô nhập tự động viết hoa uppercase và nút Áp dụng.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-24', aspect: 'IA-02', screen: 'Checkout', checkpoint: 'Lựa chọn phương thức thanh toán', expected: 'Có radio button chọn COD, Thẻ, Chuyển khoản.', status: 'Failed', notes: 'Thiếu hoàn toàn phần chọn phương thức thanh toán.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-25', aspect: 'IA-02', screen: 'Checkout', checkpoint: 'Chặn tự động hoàn thành đè CSS', expected: 'Màu autofill không làm mất màu viền input.', status: 'Passed', notes: 'Trường input hiển thị bình thường.', source: 'Human', whyMissed: 'AI không tính đến tác động can thiệp của trình duyệt bên ngoài.' },
    { id: 'CHK-26', aspect: 'IA-02', screen: 'Product Detail', checkpoint: "Ngăn chặn nhập số âm hoặc chữ 'e'", expected: "Không cho gõ ký tự e, E, dấu trừ (-) vào ô số lượng.", status: 'Failed', notes: "Người dùng vẫn gõ được ký tự 'e', 'E', dấu trừ (-) hoặc số 0 vào ô số lượng.", source: 'Human', whyMissed: 'HTML5 input number mặc định cho gõ e, AI không biết nếu không test thực tế.' },
    { id: 'CHK-27', aspect: 'IA-02', screen: 'Checkout', checkpoint: 'Tự động cắt khoảng trắng mã coupon (Trim)', expected: 'Tự động loại bỏ dấu cách thừa ở đầu cuối mã.', status: 'Passed', notes: 'Code có sử dụng .trim().toUpperCase() khi gửi API.', source: 'Human', whyMissed: 'AI bỏ qua thói quen copy-paste dính khoảng trắng của người dùng.' },

    // CHK-28 -> CHK-41 (IA-03)
    { id: 'CHK-28', aspect: 'IA-03', screen: 'Toàn hệ thống', checkpoint: 'Thanh điều hướng chính (Navbar)', expected: 'Navbar hiển thị Logo, liên kết Giỏ hàng, Đăng nhập.', status: 'Passed', notes: 'Header cố định màu xanh hiển thị rõ các liên kết chính.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-29', aspect: 'IA-03', screen: 'Toàn hệ thống', checkpoint: 'Badge hiển thị số lượng giỏ hàng', expected: 'Biểu tượng Giỏ hàng có huy hiệu đếm số lượng SP.', status: 'Failed', notes: "Header chỉ có chữ 'Giỏ hàng' dạng link thông thường, không có Badge số lượng.", source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-30', aspect: 'IA-03', screen: 'Product List', checkpoint: 'Thanh điều hướng phân cấp (Breadcrumb)', expected: 'Trang chi tiết hiển thị Breadcrumb quay lại danh mục.', status: 'Failed', notes: 'Trang chi tiết sản phẩm thiếu hoàn toàn thanh Breadcrumb.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-31', aspect: 'IA-03', screen: 'Product List', checkpoint: 'Phân trang (Pagination)', expected: 'Có nút phân trang hoặc tải thêm khi danh sách dài.', status: 'Failed', notes: 'Tất cả sản phẩm đổ dồn vào 1 trang, không có thanh phân trang.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-32', aspect: 'IA-03', screen: 'Product Detail', checkpoint: "Nút 'Tiếp tục mua hàng' / 'Quay lại'", expected: 'Có nút quay lại danh sách sản phẩm tiện lợi.', status: 'Failed', notes: 'Không có nút Quay lại trên trang chi tiết, buộc bấm nút Back trình duyệt.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-33', aspect: 'IA-03', screen: 'Shopping Cart', checkpoint: 'Nút chuyển đến trang Thanh toán', expected: "Nút 'Tiến hành đặt hàng' điều hướng chính xác.", status: 'Passed', notes: 'Bấm nút chuyển hướng chính xác sang /checkout.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-34', aspect: 'IA-03', screen: 'Checkout', checkpoint: 'Nút quay lại giỏ hàng', expected: 'Có nút quay lại kiểm tra giỏ hàng từ Checkout.', status: 'Failed', notes: 'Không có nút quay lại giỏ hàng, chỉ có nút Quay lại trang chủ sau khi xong.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-35', aspect: 'IA-03', screen: 'Toàn hệ thống', checkpoint: 'Tính toàn vẹn liên kết Logo', expected: 'Bấm vào Logo EShop chuyển về trang chủ an toàn.', status: 'Passed', notes: "Logo là Link to='/' chuyển về trang chủ đúng chuẩn.", source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-36', aspect: 'IA-03', screen: 'Toàn hệ thống', checkpoint: 'Tương thích nút Back/Forward trình duyệt', expected: 'Bấm Back/Forward chuyển route mượt mà.', status: 'Passed', notes: 'React Router DOM xử lý lịch sử duyệt trang chuẩn.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-37', aspect: 'IA-03', screen: 'Toàn hệ thống', checkpoint: 'Kiểm tra liên kết gãy (Broken links)', expected: 'Không có link nào trỏ tới trang lỗi 404.', status: 'Passed', notes: 'Các liên kết trên menu đều trỏ tới trang hợp lệ.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-38', aspect: 'IA-03', screen: 'Toàn hệ thống', checkpoint: 'Điều hướng bằng bàn phím tuần tự (Tab order)', expected: 'Bấm phím Tab di chuyển tuần tự qua các nút.', status: 'Passed', notes: 'Các thẻ a, button nhận focus tuần tự theo chuẩn HTML.', source: 'Human', whyMissed: 'AI chỉ quan sát chuột click, không đánh giá trải nghiệm điều hướng bàn phím.' },
    { id: 'CHK-39', aspect: 'IA-03', screen: 'Toàn hệ thống', checkpoint: 'Đóng Modal bằng phím Escape', expected: 'Bấm phím Esc đóng modal nhanh chóng.', status: 'Passed', notes: 'Hệ thống không dùng modal phức tạp.', source: 'Human', whyMissed: 'Prompt không nhắc sự kiện lắng nghe bàn phím keydown.' },
    { id: 'CHK-40', aspect: 'IA-03', screen: 'Shopping Cart', checkpoint: 'Bẫy tiêu điểm bàn phím trong Modal', expected: 'Tiêu điểm Tab không lọt ra ngoài nền khi mở modal.', status: 'Passed', notes: 'Trang giỏ hàng hiển thị dạng bảng trực tiếp, không dùng popup.', source: 'Human', whyMissed: 'Tiêu chuẩn WCAG Focus Trap ít khi được AI chủ động đề xuất.' },
    { id: 'CHK-41', aspect: 'IA-03', screen: 'Toàn hệ thống', checkpoint: 'Cuộn lên đầu trang khi chuyển trang (Scroll to Top)', expected: 'Chuyển trang tự động cuộn lên đầu.', status: 'Failed', notes: 'React Router không tự cuộn lên top, khi chuyển trang vẫn giữ vị trí cuộn cũ.', source: 'Human', whyMissed: 'Đặc thù Single Page Application React thường xuyên bị lỗi này.' },

    // CHK-42 -> CHK-54 (IA-04)
    { id: 'CHK-42', aspect: 'IA-04', screen: 'Product Detail', checkpoint: 'Phản hồi khi thêm vào giỏ hàng', expected: 'Bấm 1 lần thêm vào giỏ hàng có phản hồi ngay.', status: 'Failed', notes: 'BUG NGHIÊM TRỌNG: Bấm lần 1 không có phản ứng gì, phải bấm lần 2 mới thêm vào giỏ.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-43', aspect: 'IA-04', screen: 'Product Detail', checkpoint: 'Trạng thái nút khi hết hàng', expected: 'Nút bị vô hiệu hóa khi tồn kho bằng 0.', status: 'Failed', notes: 'Giao diện không hiển thị số lượng tồn kho và không disable nút khi hết hàng.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-44', aspect: 'IA-04', screen: 'Shopping Cart', checkpoint: 'Trạng thái giỏ hàng trống (Empty State)', expected: 'Hiển thị thông báo giỏ hàng trống kèm nút mua sắm.', status: 'Passed', notes: "Hiển thị chữ 'Giỏ hàng của bạn đang trống' kèm link 'Tiếp tục mua sắm'.", source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-45', aspect: 'IA-04', screen: 'Shopping Cart', checkpoint: 'Xác nhận trước khi xóa sản phẩm', expected: 'Bấm Xóa hiển thị hộp thoại xác nhận.', status: 'Failed', notes: 'Bấm Xóa là sản phẩm biến mất ngay lập tức, không hề có thông báo xác nhận.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-46', aspect: 'IA-04', screen: 'Coupon', checkpoint: 'Phản hồi áp mã giảm giá thành công', expected: 'Báo màu xanh hiển thị số tiền tiết kiệm.', status: 'Passed', notes: 'Hiển thị thông báo màu xanh có biểu tượng ✅ và số tiền giảm rõ ràng.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-47', aspect: 'IA-04', screen: 'Coupon', checkpoint: 'Phản hồi khi mã coupon sai hoặc hết hạn', expected: 'Báo lỗi màu đỏ rõ ràng cạnh ô nhập.', status: 'Passed', notes: "Hiển thị thông báo lỗi màu đỏ 'Không thể áp dụng mã' hoặc lỗi từ API.", source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-48', aspect: 'IA-04', screen: 'Checkout', checkpoint: 'Trạng thái gửi đơn hàng (Loading / Submitting)', expected: 'Nút hiển thị Đang xử lý... và bị disable.', status: 'Passed', notes: "Nút hiển thị 'Đang xử lý...' và bị disabled tránh double-click.", source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-49', aspect: 'IA-04', screen: 'Checkout', checkpoint: 'Màn hình đặt hàng thành công', expected: 'Hiển thị màn hình cảm ơn và nút quay về.', status: 'Passed', notes: "Hiển thị trang 'Thanh toán thành công!' màu xanh và lời cảm ơn.", source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-50', aspect: 'IA-04', screen: 'Product List', checkpoint: 'Phản hồi tìm kiếm không có kết quả', expected: 'Hiển thị thông báo khi không tìm thấy SP.', status: 'Failed', notes: 'Khi gõ từ khóa không khớp, trang hiển thị lưới trống không có câu thông báo nào.', source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-51', aspect: 'IA-04', screen: 'Toàn hệ thống', checkpoint: 'Trạng thái tải trang (Skeleton / Loading)', expected: 'Hiển thị loading spinner hoặc skeleton.', status: 'Passed', notes: "Hiển thị chữ 'Đang tải...' khi đang lấy dữ liệu sản phẩm.", source: 'AI', whyMissed: 'N/A' },
    { id: 'CHK-52', aspect: 'IA-04', screen: 'Shopping Cart', checkpoint: 'Duy trì giỏ hàng khi F5 / Reload trang', expected: 'Giỏ hàng không bị mất khi làm mới trình duyệt.', status: 'Failed', notes: 'LỖI LỚN: Bấm F5 là mất sạch toàn bộ giỏ hàng do chỉ lưu trong React State tạm thời.', source: 'Human', whyMissed: 'AI không chạy thử F5 nên không phát hiện giỏ hàng chưa lưu LocalStorage.' },
    { id: 'CHK-53', aspect: 'IA-04', screen: 'Product Detail', checkpoint: 'Chống spam bấm nhanh nút tăng giảm', expected: 'Click liên tục không làm đơ giao diện.', status: 'Passed', notes: 'Không có nút tăng giảm nên không bị lỗi spam click.', source: 'Human', whyMissed: 'AI tư duy tuần tự từng bước, không tính đến hành vi spam click của người dùng.' },
    { id: 'CHK-54', aspect: 'IA-04', screen: 'Checkout', checkpoint: 'Hủy áp dụng mã giảm giá (Remove Coupon)', expected: 'Cung cấp nút gỡ bỏ mã giảm giá đã áp dụng.', status: 'Failed', notes: 'Không có nút hủy mã coupon sau khi đã áp dụng thành công.', source: 'Human', whyMissed: 'AI chỉ chú ý luồng xuôi (áp mã), quên luồng ngược (hủy mã để đổi mã khác).' },
  ];

  // Format header
  const headerRow = ws.getRow(1);
  headerRow.height = 28;
  headerRow.eachCell(cell => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF1F4E78' }
    };
    cell.font = { name: 'Arial', size: 11, bold: true, color: { argb: 'FFFFFFFF' } };
    cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  });

  // Add rows
  data.forEach((item, idx) => {
    const row = ws.addRow(item);
    row.height = 24;

    const statusCell = row.getCell('status');
    if (item.status === 'Passed') {
      statusCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE2EFDA' } };
      statusCell.font = { name: 'Arial', size: 10, bold: true, color: { argb: 'FF375623' } };
    } else {
      statusCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFCE4D6' } };
      statusCell.font = { name: 'Arial', size: 10, bold: true, color: { argb: 'FFC65911' } };
    }

    row.eachCell(cell => {
      cell.border = {
        top: { style: 'thin', color: { argb: 'FFD9D9D9' } },
        left: { style: 'thin', color: { argb: 'FFD9D9D9' } },
        bottom: { style: 'thin', color: { argb: 'FFD9D9D9' } },
        right: { style: 'thin', color: { argb: 'FFD9D9D9' } }
      };
      cell.alignment = { vertical: 'middle', wrapText: true };
    });

    row.getCell('id').alignment = { horizontal: 'center', vertical: 'middle' };
    row.getCell('aspect').alignment = { horizontal: 'center', vertical: 'middle' };
    row.getCell('status').alignment = { horizontal: 'center', vertical: 'middle' };
    row.getCell('source').alignment = { horizontal: 'center', vertical: 'middle' };
  });

  // Sheet 2: Test_Summary
  const wsSum = workbook.addWorksheet('Test_Summary');
  wsSum.columns = [
    { header: 'Chỉ số kiểm thử (Test Metric)', key: 'metric', width: 38 },
    { header: 'Giá trị (Value)', key: 'val', width: 16 }
  ];

  const sumHeader = wsSum.getRow(1);
  sumHeader.height = 28;
  sumHeader.eachCell(cell => {
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1F4E78' } };
    cell.font = { name: 'Arial', size: 11, bold: true, color: { argb: 'FFFFFFFF' } };
    cell.alignment = { horizontal: 'center', vertical: 'middle' };
  });

  const passedCount = data.filter(d => d.status === 'Passed').length;
  const failedCount = data.filter(d => d.status === 'Failed').length;
  const aiCount = data.filter(d => d.source === 'AI').length;
  const humanCount = data.filter(d => d.source === 'Human').length;

  const summaryRows = [
    { metric: 'Tổng số Checkpoint items thiết kế', val: data.length },
    { metric: 'Số lượng Passed (Đạt tiêu chuẩn)', val: passedCount },
    { metric: 'Số lượng Failed (Phát hiện lỗi / Bugs)', val: failedCount },
    { metric: 'Tỷ lệ Đạt (Pass Rate)', val: `${((passedCount / data.length) * 100).toFixed(1)}%` },
    { metric: 'Số lượng mục do AI sinh ban đầu', val: aiCount },
    { metric: 'Số lượng mục do Con người bổ sung', val: humanCount },
    { metric: 'Tổng số Bugs chính thức đã báo cáo', val: 10 },
  ];

  summaryRows.forEach(item => {
    const r = wsSum.addRow(item);
    r.height = 22;
    r.eachCell(cell => {
      cell.border = {
        top: { style: 'thin', color: { argb: 'FFD9D9D9' } },
        left: { style: 'thin', color: { argb: 'FFD9D9D9' } },
        bottom: { style: 'thin', color: { argb: 'FFD9D9D9' } },
        right: { style: 'thin', color: { argb: 'FFD9D9D9' } }
      };
      cell.alignment = { vertical: 'middle' };
    });
    r.getCell('val').alignment = { horizontal: 'center', vertical: 'middle' };
  });

  const outPath = path.join(__dirname, '..', 'checklists', 'GUI_Checklist.xlsx');
  await workbook.xlsx.writeFile(outPath);
  console.log('Tao thanh cong file Excel tai:', outPath);
}

generateChecklistExcel().catch(console.error);
