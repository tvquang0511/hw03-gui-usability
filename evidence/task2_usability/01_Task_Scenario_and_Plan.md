# KẾ HOẠCH & KỊCH BẢN ĐÁNH GIÁ USABILITY (TASK 2)

> **Mã bài tập:** HW03 - Task 2 (Usability Evaluation)  
> **Sinh viên thực hiện:** Trần Vũ Quang – MSSV: **23120346**  
> **Hệ thống kiểm thử (SUT):** EShop Web Application (`http://localhost:5173/`)  
> **Luồng kiểm thử (End-to-End Flow):** Tìm kiếm sản phẩm $\rightarrow$ Xem chi tiết $\rightarrow$ Thêm vào giỏ hàng $\rightarrow$ Áp mã giảm giá $\rightarrow$ Đặt hàng (Checkout).

---

## 1. MỤC TIÊU ĐÁNH GIÁ (EVALUATION OBJECTIVES)

1. **Xác định các điểm nghẽn điều hướng (Navigation Bottlenecks):** Đo lường mức độ dễ dàng khi người dùng di chuyển từ trang chủ tìm kiếm sản phẩm đến trang thanh toán.
2. **Đánh giá phản hồi trạng thái (Feedback & Error Recovery):** Quan sát phản ứng và sự bối rối của người dùng khi gặp lỗi giao diện (như nút Thêm vào giỏ phải bấm 2 lần mới ăn, F5 mất giỏ hàng, hoặc nhập sai mã giảm giá).
3. **Đo lường mức độ hài lòng & tin cậy (Usability & Trust):** Thu thập định lượng chỉ số **SUS (System Usability Scale)** và phỏng vấn định tính về tốc độ, độ rõ ràng và mức độ tin cậy để mua hàng thật.

---

## 2. KỊCH BẢN TÁC VỤ (GOAL-ORIENTED TASK SCENARIO)

> [!IMPORTANT]
> **Quy tắc quan sát:** Không hướng dẫn người tham gia click chuột vào nút nào. Hãy đọc đoạn văn kịch bản dưới đây cho người tham gia và để họ tự do thao tác:

**Lời dặn người tham gia (Briefing):**  
*"Chào bạn, hôm nay mình đang thử nghiệm đánh giá mức độ thân thiện của giao diện website bán hàng EShop. Lưu ý là mình đang kiểm tra trang web chứ hoàn toàn không phải kiểm tra bạn, nên bất kỳ lúc nào bạn thấy khó dùng, bấm không ăn hay thấy vô lý thì hãy nói to suy nghĩ trong đầu ra nhé (Think Aloud)."*

**Nội dung kịch bản giao việc:**  
> *"Giả sử bạn đang cần mua một món đồ điện tử/công nghệ trên trang web EShop với ngân sách dưới 10.000.000 ₫. Bạn hãy tìm một sản phẩm phù hợp, xem thông tin chi tiết và thêm sản phẩm đó vào giỏ hàng. Sau đó, bạn hãy vào giỏ hàng, tiến hành thanh toán và áp dụng mã giảm giá `SALE10` (hoặc `GIAM20`) để hoàn tất đơn hàng."*

---

## 3. BỘ CÔNG CỤ ĐO LƯỜNG (EVALUATION INSTRUMENTS)

### Phần A: Thang đo Usability chuẩn SUS (10 câu hỏi Likert 1-5)
*Người tham gia chấm điểm từ **1: Hoàn toàn không đồng ý** đến **5: Hoàn toàn đồng ý**.*

1. Tôi nghĩ rằng tôi sẽ thích sử dụng trang web này thường xuyên.
2. Tôi thấy trang web này phức tạp một cách không cần thiết.
3. Tôi thấy trang web này rất dễ sử dụng.
4. Tôi nghĩ rằng tôi sẽ cần sự hỗ trợ của một chuyên gia kỹ thuật để có thể sử dụng trang web này.
5. Tôi thấy các chức năng trên trang web này được tích hợp rất ăn khớp với nhau.
6. Tôi thấy có quá nhiều sự bất nhất (mâu thuẫn) trên trang web này.
7. Tôi nghĩ rằng hầu hết mọi người sẽ học cách sử dụng trang web này rất nhanh chóng.
8. Tôi thấy trang web này rất cồng kềnh/phiền toái khi thao tác.
9. Tôi cảm thấy rất tự tin khi thao tác trên trang web này.
10. Tôi cần phải học hỏi thêm rất nhiều điều trước khi có thể sử dụng thành thạo trang web này.

---

### Phần B: 4 Câu hỏi phỏng vấn mở sau phiên (Probe Questions)
1. **Độ rõ ràng (Clarity):** *Có nhãn nút bấm, thông báo hay bước nào trong quá trình đặt hàng khiến bạn thấy bối rối hoặc khó hiểu không?*
2. **Khả năng khắc phục lỗi (Error Recovery):** *Khi bạn nhập sai mã coupon hoặc thao tác nhầm, hệ thống có giúp bạn nhận biết và sửa lỗi dễ dàng không?*
3. **Tốc độ (Speed):** *Bạn cảm thấy tốc độ hoàn tất từ lúc tìm hàng đến lúc đặt hàng nhanh hay chậm so với kỳ vọng? Khâu nào làm bạn mất thời gian nhất?*
4. **Độ tin cậy (Trust):** *Giao diện, giá cả và thông tin đơn hàng có đủ minh bạch để bạn yên tâm thanh toán bằng tiền thật trên trang này không?*
