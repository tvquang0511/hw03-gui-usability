import pandas as pd
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side

# Đọc danh sách 54 items và kết quả test
data = [
    # CHK-01 -> CHK-14 (IA-01)
    ["CHK-01", "IA-01", "Product List", "Bố cục lưới sản phẩm (Grid Alignment)", "Các thẻ card có chiều cao bằng nhau, căn thẳng hàng.", "Passed", "Hiển thị lưới Tailwind CSS grid-cols-3 đều đặn.", "AI", "N/A"],
    ["CHK-02", "IA-01", "Product List", "Phân cấp thị giác tiêu đề và giá", "Tên SP rõ ràng, giá tiền nổi bật màu đỏ font đậm.", "Passed", "Giá tiền hiển thị màu đỏ text-red-500 font-bold nổi bật.", "AI", "N/A"],
    ["CHK-03", "IA-01", "Product List", "Định dạng tiền tệ hiển thị", "Giá hiển thị có dấu phân cách hàng nghìn VND.", "Passed", "Hiển thị định dạng chuẩn qua toLocaleString() VND.", "AI", "N/A"],
    ["CHK-04", "IA-01", "Product Detail", "Tỷ lệ và khung hiển thị ảnh sản phẩm", "Ảnh đúng tỷ lệ aspect ratio, không bị méo mó.", "Passed", "Ảnh sử dụng class object-cover hiển thị rõ ràng.", "AI", "N/A"],
    ["CHK-05", "IA-01", "Product Detail", "Bố cục thông tin chi tiết", "Phân vùng ảnh và thông tin chi tiết cân đối.", "Passed", "Bố cục chia 2 cột md:flex-row tỷ lệ 50-50 cân đối.", "AI", "N/A"],
    ["CHK-06", "IA-01", "Shopping Cart", "Căn lề bảng giỏ hàng", "Bảng căn thẳng hàng các cột Tên, Giá, SL, Thành tiền.", "Passed", "Bảng table hiển thị chuẩn lề ngang.", "AI", "N/A"],
    ["CHK-07", "IA-01", "Shopping Cart", "Nổi bật tổng thanh toán", "Khu vực Tổng tạm tính nổi bật.", "Passed", "Tổng tạm tính in đậm chữ lớn màu đỏ text-red-600.", "AI", "N/A"],
    ["CHK-08", "IA-01", "Checkout", "Bố cục trang thanh toán 2 cột", "Cột trái thông tin giao hàng, cột phải tóm tắt đơn.", "Failed", "Thiếu hoàn toàn form thông tin giao hàng, chỉ có 1 cột đơn điệu.", "AI", "N/A"],
    ["CHK-09", "IA-01", "Toàn hệ thống", "Tính nhất quán màu sắc & Font chữ", "Màu thương hiệu xanh dương nhất quán toàn site.", "Passed", "Toàn site dùng chung theme Tailwind Blue/Green/Red.", "AI", "N/A"],
    ["CHK-10", "IA-01", "Toàn hệ thống", "Khả năng co giãn trên Mobile View", "Thu nhỏ 375px chuyển 1 cột mượt mà, không thanh cuộn ngang.", "Passed", "Tailwind responsive sm:, md: hoạt động tốt.", "AI", "N/A"],
    ["CHK-11", "IA-01", "Product List", "Tràn chữ tiếng Việt có dấu (Text Truncation)", "Tên SP dài dùng truncate không làm vỡ card.", "Passed", "Tiêu đề có sử dụng class truncate của Tailwind.", "Human", "AI chỉ test chuỗi ngắn tiếng Anh, bỏ qua độ dài UTF-8 tiếng Việt."],
    ["CHK-12", "IA-01", "Toàn hệ thống", "Độ tương phản màu sắc tiếp cận (WCAG Contrast)", "Độ tương phản chữ với nền đạt tối thiểu 4.5:1.", "Failed", "Dòng số lượng SP ở đáy trang dùng màu xám quá nhạt text-gray-400 trên nền xám nhạt khó đọc.", "Human", "AI xử lý token chữ nên không đo giá trị độ chìm màu hex code thực tế."],
    ["CHK-13", "IA-01", "Toàn hệ thống", "Khả năng hiển thị khi Zoom 200%", "Khi zoom 200% bố cục reflow, không bị che mất nút.", "Passed", "Trang web tự co giãn tốt khi phóng to.", "Human", "Prompt ban đầu không nhắc tiêu chuẩn WCAG Zoom 200%."],
    ["CHK-14", "IA-01", "Product Detail", "Ký hiệu tiền tệ không bị ngắt dòng", "Ký hiệu tiền tệ không bị rơi xuống dòng đứng trơ trọi.", "Passed", "Hiển thị liền mạch cùng chuỗi số tiền.", "Human", "Đặc thù tiếng Việt cần kiểm tra vị trí ngắt từ."],

    # CHK-15 -> CHK-27 (IA-02)
    ["CHK-15", "IA-02", "Product List", "Ô tìm kiếm có placeholder và nút xóa", "Có placeholder gợi ý và nút xóa nhanh từ khóa.", "Failed", "Có placeholder nhưng thiếu nút xóa trắng nhanh (x) trong ô tìm kiếm.", "AI", "N/A"],
    ["CHK-16", "IA-02", "Product Detail", "Bộ chọn số lượng (Quantity Input)", "Chỉ cho nhập số nguyên dương, có nút tăng giảm.", "Failed", "Chỉ có ô input thô, không có nút bấm tăng giảm (+) và (-).", "AI", "N/A"],
    ["CHK-17", "IA-02", "Product Detail", "Giới hạn số lượng mua theo tồn kho", "Không cho phép nhập hoặc bấm quá số lượng tồn kho.", "Failed", "Giao diện không kiểm tra tồn kho, nhập số lượng 9999 vẫn nhận.", "AI", "N/A"],
    ["CHK-18", "IA-02", "Shopping Cart", "Thay đổi số lượng trực tiếp trong giỏ", "Cho phép sửa số lượng ngay trong giỏ hàng.", "Failed", "Cột số lượng trong giỏ là văn bản tĩnh, không cho sửa số lượng.", "AI", "N/A"],
    ["CHK-19", "IA-02", "Checkout", "Đánh dấu trường bắt buộc", "Các trường bắt buộc có dấu sao đỏ (*).", "Failed", "Thiếu hoàn toàn form thông tin giao hàng nên không có nhãn (*).", "AI", "N/A"],
    ["CHK-20", "IA-02", "Checkout", "Kiểm tra tính hợp lệ số điện thoại", "Báo lỗi khi nhập sai định dạng số điện thoại.", "Failed", "Không có trường nhập số điện thoại trên trang Checkout.", "AI", "N/A"],
    ["CHK-21", "IA-02", "Checkout", "Kiểm tra định dạng Email giao hàng", "Báo lỗi khi nhập sai cấu trúc email.", "Failed", "Không có trường nhập email giao hàng trên trang Checkout.", "AI", "N/A"],
    ["CHK-22", "IA-02", "Checkout", "Giữ lại dữ liệu đã nhập khi submit lỗi", "Không xóa trắng các ô hợp lệ khi submit lỗi.", "Passed", "React State giữ nguyên các giá trị đã nhập.", "AI", "N/A"],
    ["CHK-23", "IA-02", "Coupon", "Ô nhập mã giảm giá", "Có ô nhập mã và nút áp dụng, tự động viết hoa.", "Passed", "Có ô nhập tự động viết hoa uppercase và nút Áp dụng.", "AI", "N/A"],
    ["CHK-24", "IA-02", "Checkout", "Lựa chọn phương thức thanh toán", "Có radio button chọn COD, Thẻ, Chuyển khoản.", "Failed", "Thiếu hoàn toàn phần chọn phương thức thanh toán.", "AI", "N/A"],
    ["CHK-25", "IA-02", "Checkout", "Chặn tự động hoàn thành đè CSS", "Màu autofill không làm mất màu viền input.", "Passed", "Trường input hiển thị bình thường.", "Human", "AI không tính đến tác động can thiệp của trình duyệt bên ngoài."],
    ["CHK-26", "IA-02", "Product Detail", "Ngăn chặn nhập số âm hoặc chữ 'e'", "Không cho gõ ký tự e, E, dấu trừ (-) vào ô số lượng.", "Failed", "Người dùng vẫn gõ được ký tự 'e', 'E', dấu trừ (-) hoặc số 0 vào ô số lượng.", "Human", "HTML5 input number mặc định cho gõ e, AI không biết nếu không test thực tế."],
    ["CHK-27", "IA-02", "Checkout", "Tự động cắt khoảng trắng mã coupon (Trim)", "Tự động loại bỏ dấu cách thừa ở đầu cuối mã.", "Passed", "Code có sử dụng .trim().toUpperCase() khi gửi API.", "Human", "AI bỏ qua thói quen copy-paste dính khoảng trắng của người dùng."],

    # CHK-28 -> CHK-41 (IA-03)
    ["CHK-28", "IA-03", "Toàn hệ thống", "Thanh điều hướng chính (Navbar)", "Navbar hiển thị Logo, liên kết Giỏ hàng, Đăng nhập.", "Passed", "Header cố định màu xanh hiển thị rõ các liên kết chính.", "AI", "N/A"],
    ["CHK-29", "IA-03", "Toàn hệ thống", "Badge hiển thị số lượng giỏ hàng", "Biểu tượng Giỏ hàng có huy hiệu đếm số lượng SP.", "Failed", "Header chỉ có chữ 'Giỏ hàng' dạng link thông thường, không có Badge số lượng.", "AI", "N/A"],
    ["CHK-30", "IA-03", "Product List", "Thanh điều hướng phân cấp (Breadcrumb)", "Trang chi tiết hiển thị Breadcrumb quay lại danh mục.", "Failed", "Trang chi tiết sản phẩm thiếu hoàn toàn thanh Breadcrumb.", "AI", "N/A"],
    ["CHK-31", "IA-03", "Product List", "Phân trang (Pagination)", "Có nút phân trang hoặc tải thêm khi danh sách dài.", "Failed", "Tất cả sản phẩm đổ dồn vào 1 trang, không có thanh phân trang.", "AI", "N/A"],
    ["CHK-32", "IA-03", "Product Detail", "Nút 'Tiếp tục mua hàng' / 'Quay lại'", "Có nút quay lại danh sách sản phẩm tiện lợi.", "Failed", "Không có nút Quay lại trên trang chi tiết, buộc bấm nút Back trình duyệt.", "AI", "N/A"],
    ["CHK-33", "IA-03", "Shopping Cart", "Nút chuyển đến trang Thanh toán", "Nút 'Tiến hành đặt hàng' điều hướng chính xác.", "Passed", "Bấm nút chuyển hướng chính xác sang /checkout.", "AI", "N/A"],
    ["CHK-34", "IA-03", "Checkout", "Nút quay lại giỏ hàng", "Có nút quay lại kiểm tra giỏ hàng từ Checkout.", "Failed", "Không có nút quay lại giỏ hàng, chỉ có nút Quay lại trang chủ sau khi xong.", "AI", "N/A"],
    ["CHK-35", "IA-03", "Toàn hệ thống", "Tính toàn vẹn liên kết Logo", "Bấm vào Logo EShop chuyển về trang chủ an toàn.", "Passed", "Logo là Link to='/' chuyển về trang chủ đúng chuẩn.", "AI", "N/A"],
    ["CHK-36", "IA-03", "Toàn hệ thống", "Tương thích nút Back/Forward trình duyệt", "Bấm Back/Forward chuyển route mượt mà.", "Passed", "React Router DOM xử lý lịch sử duyệt trang chuẩn.", "AI", "N/A"],
    ["CHK-37", "IA-03", "Toàn hệ thống", "Kiểm tra liên kết gãy (Broken links)", "Không có link nào trỏ tới trang lỗi 404.", "Passed", "Các liên kết trên menu đều trỏ tới trang hợp lệ.", "AI", "N/A"],
    ["CHK-38", "IA-03", "Toàn hệ thống", "Điều hướng bằng bàn phím tuần tự (Tab order)", "Bấm phím Tab di chuyển tuần tự qua các nút.", "Passed", "Các thẻ a, button nhận focus tuần tự theo chuẩn HTML.", "Human", "AI chỉ quan sát chuột click, không đánh giá trải nghiệm điều hướng bàn phím."],
    ["CHK-39", "IA-03", "Toàn hệ thống", "Đóng Modal bằng phím Escape", "Bấm phím Esc đóng modal nhanh chóng.", "Passed", "Hệ thống không dùng modal phức tạp.", "Human", "Prompt không nhắc sự kiện lắng nghe bàn phím keydown."],
    ["CHK-40", "IA-03", "Shopping Cart", "Bẫy tiêu điểm bàn phím trong Modal", "Tiêu điểm Tab không lọt ra ngoài nền khi mở modal.", "Passed", "Trang giỏ hàng hiển thị dạng bảng trực tiếp, không dùng popup.", "Human", "Tiêu chuẩn WCAG Focus Trap ít khi được AI chủ động đề xuất."],
    ["CHK-41", "IA-03", "Toàn hệ thống", "Cuộn lên đầu trang khi chuyển trang (Scroll to Top)", "Chuyển trang tự động cuộn lên đầu.", "Failed", "React Router không tự cuộn lên top, khi chuyển trang vẫn giữ vị trí cuộn cũ.", "Human", "Đặc thù Single Page Application React thường xuyên bị lỗi này."],

    # CHK-42 -> CHK-54 (IA-04)
    ["CHK-42", "IA-04", "Product Detail", "Phản hồi khi thêm vào giỏ hàng", "Bấm 1 lần thêm vào giỏ hàng có phản hồi ngay.", "Failed", "BUG NGHIÊM TRỌNG: Bấm lần 1 không có phản ứng gì, phải bấm lần 2 mới thêm vào giỏ.", "AI", "N/A"],
    ["CHK-43", "IA-04", "Product Detail", "Trạng thái nút khi hết hàng", "Nút bị vô hiệu hóa khi tồn kho bằng 0.", "Failed", "Giao diện không hiển thị số lượng tồn kho và không disable nút khi hết hàng.", "AI", "N/A"],
    ["CHK-44", "IA-04", "Shopping Cart", "Trạng thái giỏ hàng trống (Empty State)", "Hiển thị thông báo giỏ hàng trống kèm nút mua sắm.", "Passed", "Hiển thị chữ 'Giỏ hàng của bạn đang trống' kèm link 'Tiếp tục mua sắm'.", "AI", "N/A"],
    ["CHK-45", "IA-04", "Shopping Cart", "Xác nhận trước khi xóa sản phẩm", "Bấm Xóa hiển thị hộp thoại xác nhận.", "Failed", "Bấm Xóa là sản phẩm biến mất ngay lập tức, không hề có thông báo xác nhận.", "AI", "N/A"],
    ["CHK-46", "IA-04", "Coupon", "Phản hồi áp mã giảm giá thành công", "Báo màu xanh hiển thị số tiền tiết kiệm.", "Passed", "Hiển thị thông báo màu xanh có biểu tượng ✅ và số tiền giảm rõ ràng.", "AI", "N/A"],
    ["CHK-47", "IA-04", "Coupon", "Phản hồi khi mã coupon sai hoặc hết hạn", "Báo lỗi màu đỏ rõ ràng cạnh ô nhập.", "Passed", "Hiển thị thông báo lỗi màu đỏ 'Không thể áp dụng mã' hoặc lỗi từ API.", "AI", "N/A"],
    ["CHK-48", "IA-04", "Checkout", "Trạng thái gửi đơn hàng (Loading / Submitting)", "Nút hiển thị Đang xử lý... và bị disable.", "Passed", "Nút hiển thị 'Đang xử lý...' và bị disabled tránh double-click.", "AI", "N/A"],
    ["CHK-49", "IA-04", "Checkout", "Màn hình đặt hàng thành công", "Hiển thị màn hình cảm ơn và nút quay về.", "Passed", "Hiển thị trang 'Thanh toán thành công!' màu xanh và lời cảm ơn.", "AI", "N/A"],
    ["CHK-50", "IA-04", "Product List", "Phản hồi tìm kiếm không có kết quả", "Hiển thị thông báo khi không tìm thấy SP.", "Failed", "Khi gõ từ khóa không khớp, trang hiển thị lưới trống không có câu thông báo nào.", "AI", "N/A"],
    ["CHK-51", "IA-04", "Toàn hệ thống", "Trạng thái tải trang (Skeleton / Loading)", "Hiển thị loading spinner hoặc skeleton.", "Passed", "Hiển thị chữ 'Đang tải...' khi đang lấy dữ liệu sản phẩm.", "AI", "N/A"],
    ["CHK-52", "IA-04", "Shopping Cart", "Duy trì giỏ hàng khi F5 / Reload trang", "Giỏ hàng không bị mất khi làm mới trình duyệt.", "Failed", "LỖI LỚN: Bấm F5 là mất sạch toàn bộ giỏ hàng do chỉ lưu trong React State tạm thời.", "Human", "AI không chạy thử F5 nên không phát hiện giỏ hàng chưa lưu LocalStorage."],
    ["CHK-53", "IA-04", "Product Detail", "Chống spam bấm nhanh nút tăng giảm", "Click liên tục không làm đơ giao diện.", "Passed", "Không có nút tăng giảm nên không bị lỗi spam click.", "Human", "AI tư duy tuần tự từng bước, không tính đến hành vi spam click của người dùng."],
    ["CHK-54", "IA-04", "Checkout", "Hủy áp dụng mã giảm giá (Remove Coupon)", "Cung cấp nút gỡ bỏ mã giảm giá đã áp dụng.", "Failed", "Không có nút hủy mã coupon sau khi đã áp dụng thành công.", "Human", "AI chỉ chú ý luồng xuôi (áp mã), quên luồng ngược (hủy mã để đổi mã khác)."]
]

columns = [
    "ID", "Aspect", "Screen", "Checkpoint Description", 
    "Expected Result", "Status", "Notes (Why Failed / Details)", 
    "Source", "Why AI Missed It"
]

df = pd.DataFrame(data, columns=columns)

# Tạo Excel Writer
file_path = "checklists/GUI_Checklist.xlsx"
with pd.ExcelWriter(file_path, engine="openpyxl") as writer:
    df.to_excel(writer, sheet_name="GUI_Checklist", index=False)
    
    # Sheet Test Summary
    summary_data = [
        ["Tổng số Checkpoints thiết kế", len(df)],
        ["Số lượng mục Passed (Đạt)", len(df[df["Status"] == "Passed"])],
        ["Số lượng mục Failed (Không đạt / Bugs)", len(df[df["Status"] == "Failed"])],
        ["Tỷ lệ Đạt (Pass Rate)", f"{len(df[df['Status'] == 'Passed']) / len(df) * 100:.1f}%"],
        ["Số lượng do AI sinh ban đầu", len(df[df["Source"] == "AI"])],
        ["Số lượng do Con người bổ sung", len(df[df["Source"] == "Human"])],
        ["Tổng số Bugs đã ghi nhận", 10]
    ]
    df_summary = pd.DataFrame(summary_data, columns=["Chỉ số (Metric)", "Giá trị (Value)"])
    df_summary.to_excel(writer, sheet_name="Test_Summary", index=False)

# Định dạng đẹp cho file Excel bằng openpyxl
wb = openpyxl.load_workbook(file_path)
ws = wb["GUI_Checklist"]

# Header style
header_fill = PatternFill(start_color="1F4E78", end_color="1F4E78", fill_type="solid")
header_font = Font(name="Arial", size=11, bold=True, color="FFFFFF")

for col in range(1, len(columns) + 1):
    cell = ws.cell(row=1, column=col)
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)

# Styling data rows
pass_fill = PatternFill(start_color="E2EFDA", end_color="E2EFDA", fill_type="solid")
pass_font = Font(name="Arial", size=10, color="375623", bold=True)

fail_fill = PatternFill(start_color="FCE4D6", end_color="FCE4D6", fill_type="solid")
fail_font = Font(name="Arial", size=10, color="C65911", bold=True)

thin_border = Border(
    left=Side(style='thin', color='D9D9D9'),
    right=Side(style='thin', color='D9D9D9'),
    top=Side(style='thin', color='D9D9D9'),
    bottom=Side(style='thin', color='D9D9D9')
)

for row in range(2, len(df) + 2):
    status_cell = ws.cell(row=row, column=6)
    status_val = status_cell.value
    
    for col in range(1, len(columns) + 1):
        c = ws.cell(row=row, column=col)
        c.border = thin_border
        c.font = Font(name="Arial", size=10)
        c.alignment = Alignment(vertical="center", wrap_text=True)
        if col in [1, 2, 6, 8]:
            c.alignment = Alignment(horizontal="center", vertical="center")
            
    if status_val == "Passed":
        status_cell.fill = pass_fill
        status_cell.font = pass_font
    elif status_val == "Failed":
        status_cell.fill = fail_fill
        status_cell.font = fail_font

# Set column widths
ws.column_dimensions['A'].width = 12
ws.column_dimensions['B'].width = 10
ws.column_dimensions['C'].width = 16
ws.column_dimensions['D'].width = 32
ws.column_dimensions['E'].width = 38
ws.column_dimensions['F'].width = 12
ws.column_dimensions['G'].width = 45
ws.column_dimensions['H'].width = 10
ws.column_dimensions['I'].width = 45

# Định dạng sheet Test_Summary
ws_sum = wb["Test_Summary"]
for col in range(1, 3):
    cell = ws_sum.cell(row=1, column=col)
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = Alignment(horizontal="center", vertical="center")
ws_sum.column_dimensions['A'].width = 35
ws_sum.column_dimensions['B'].width = 15

wb.save(file_path)
print("Xuat file Excel thanh cong tai checklists/GUI_Checklist.xlsx")
