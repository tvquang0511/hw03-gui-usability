# ĐỀ BÀI: HW03 – GIAO DIỆN & KHẢ NĂNG SỬ DỤNG (GUI & USABILITY)

## 1. THÔNG TIN CHUNG (General Information)
- **Mã bài tập:** HW03-AI
- **Thời lượng:** 10 giờ
- **Hạn nộp:** Vui lòng xem link nộp bài trên Moodle
- **Hình thức:** Bài tập cá nhân (Individual Assignment)
- **Nơi nộp:** Moodle (Báo cáo)
- **Giảng viên & Trợ giảng:**
  - TS. Lâm Quang Vũ / TS. Trần Duy Hoàng / ThS. Trần Thị Bích Hạnh / ThS. Trương Phước Lộc / ThS. Hồ Tuấn Thanh
- **Email liên hệ:**
  - `lqvu@fit.hcmus.edu.vn` / `tdhoang@fit.hcmus.edu.vn` / `ttbhanh@fit.hcmus.edu.vn` / `tploc@fit.hcmus.edu.vn` / `hthanh@fit.hcmus.edu.vn`
- **Chính sách sử dụng AI:** Mở — bắt buộc phải có phần Tuyên bố sử dụng AI và đính kèm Báo cáo Kiểm toán AI (AI Audit Report).
- **Cấp độ Bloom-AI yêu cầu:** G9.1 → G9.6, tùy thuộc vào từng bài tập (xem bảng CLO Mapping).

---

## 2. CÁC NGUYÊN TẮC HƯỚNG DẪN (Guiding Principles)
Những nguyên tắc này định hình cách bạn làm việc trong chuỗi bài tập của môn học. Hãy đọc kỹ trước khi bắt đầu, vì bài nộp của bạn sẽ được đánh giá dựa trên các nguyên tắc này:
- **Chiến lược Ưu tiên AI (AI-First strategy):** Bạn được yêu cầu ứng dụng AI vào các kỹ thuật kiểm thử đã học trên lớp. Tuy nhiên, điều này không có nghĩa là đưa ra một câu lệnh (prompt) đơn lẻ, chung chung kiểu như *"hãy tạo một GUI checklist và tìm các lỗi usability trong app này"*. Thay vào đó, bạn phải dẫn dắt AI qua từng bước của kỹ thuật kiểm thử đúng như đã được dạy, sử dụng AI như một trợ lý có kỷ luật chứ không phải là một "hộp đen".
- **Sự rà soát của Con người (Human review):** Mọi kết quả do AI tạo ra đều phải được chính bạn (sinh viên) rà soát cẩn thận. Bạn chịu trách nhiệm hoàn toàn về tính chính xác của các kết quả này. Bạn phải thực hiện các hiệu chỉnh và tinh chỉnh cần thiết — việc nộp nguyên kết quả thô của AI mà không qua rà soát là không thể chấp nhận được.
- **Báo cáo Kiểm toán AI (AI Audit Report):** Toàn bộ quá trình sử dụng AI phải được ghi lại thành một nhật ký (log) hoàn chỉnh. Bạn được khuyến khích xây dựng các Agent Skills có khả năng tự động thực hiện các hoạt động này trên các bài tập tương tự. Nếu bạn không sử dụng AI, bạn vẫn phải tuyên bố điều này một cách rõ ràng.
- **Tài liệu hóa (Documentation):** Toàn bộ quá trình làm việc phải được ghi nhận dưới định dạng văn bản (text-based) chẳng hạn như Markdown.
- **Chất lượng hơn số lượng hoàn thành (Quality over completion):** Bài làm của bạn sẽ được chấm không chỉ dựa trên việc bạn có hoàn thành hay không, mà còn dựa trên số lượng và chất lượng của các sản phẩm bàn giao (deliverables): bản checklist, bản thiết kế & phân tích đánh giá usability, các báo cáo lỗi (bug reports), ảnh chụp màn hình, danh sách người tham gia, và các liên kết tham chiếu.

---

## 3. MỤC TIÊU HỌC TẬP (Learning Outcomes)
Sau khi hoàn thành bài tập này, bạn sẽ có khả năng:
- Thiết kế và áp dụng một GUI checklist cùng với việc đánh giá usability dựa trên các yêu cầu giao diện người dùng của hệ thống được kiểm thử (SUT).
- Thu thập và phân tích phản hồi về khả năng sử dụng từ người dùng thật.
- Thực hiện kiểm thử đa trình duyệt (cross-browser) và đa nền tảng (cross-platform) trên giao diện web và ứng dụng di động của SUT.
- Thể hiện năng lực Bloom-AI ở cấp độ G9.3 (Phân tích - Analyse) và G9.4 (Cộng tác với AI trong kiểm thử khám phá - Collaborate with AI for exploratory testing).

---

## 4. HỆ THỐNG ĐƯỢC KIỂM THỬ (System Under Test - SUT)
- **SUT:** **EShop** — một ứng dụng thương mại điện tử demo của Việt Nam được thiết kế phục vụ thực hành kiểm thử.
- **Repository:** https://github.com/ttbhanh/eshop-sut

Các tính năng của ứng dụng được tổ chức thành các nhóm (Pool) sau:

### Pool A — Xác thực, Danh mục và Sản phẩm (Authentication, Categories, and Products)
- **FR-01:** Đăng ký tài khoản (Account registration)
- **FR-02:** Đăng nhập và khóa tài khoản (Login and account lockout)
- **FR-03:** Quên mật khẩu và đặt lại mật khẩu - 2 bước (Forgot password and password reset)
- **FR-04:** Quản lý hồ sơ cá nhân (Personal profile management)
- **FR-05:** Danh sách sản phẩm và tìm kiếm (Product listing and search)
- **FR-06:** Xem chi tiết sản phẩm (Product detail view)

### Pool B — Giỏ hàng và Thanh toán (Shopping Cart and Checkout)
- **FR-07:** Giỏ hàng (Shopping cart)
- **FR-08:** Thanh toán / Đặt hàng (Checkout)
- **FR-09:** Mã giảm giá (Discount coupons)
- **FR-10:** Máy trạng thái đơn hàng (Order state machine)
- **FR-11:** Xem lịch sử đơn hàng của người dùng (Order history view - user)

### Pool C — Quản trị Web (Web Admin)
- **FR-12:** Kiểm soát quyền truy cập (Access control)
- **FR-13:** Bảng điều khiển (Dashboard)
- **FR-14:** Quản lý danh mục - CRUD (Category management)
- **FR-15:** Quản lý sản phẩm - CRUD (Product management)
- **FR-16:** Nhập sản phẩm từ file CSV (Product import from CSV)
- **FR-17:** Quản lý mã giảm giá - CRUD (Coupon management)
- **FR-18:** Quản lý đơn hàng của admin (Order management - admin)
- **FR-19:** Quản lý người dùng của admin (User management - admin)

### Pool D — Ứng dụng Di động (Mobile App)

Bên cạnh các yêu cầu chức năng kể trên, bài tập này tập trung vào **giao diện người dùng (UI)**. Bản đặc tả không gán mã FR cho các vấn đề giao diện, nên trong bài tập này chúng được tổ chức thành các **Khía cạnh Giao diện (Interface Aspects - IA)**. Các mã này được định nghĩa ở đây để bạn tham chiếu trong checklist; chúng là các khía cạnh giao diện cần kiểm thử, không phải là yêu cầu chức năng được đánh số:
- **IA-01:** Các tiêu chuẩn UI chung (General UI standards)
- **IA-02:** Biểu mẫu nhập liệu (Forms)
- **IA-03:** Điều hướng (Navigation)
- **IA-04:** Phản hồi / Trạng thái (Feedback / state)

---

## 5. LỰA CHỌN PHẠM VI (Scope Selection)
Bài tập này nhắm vào giao diện người dùng của SUT. Bạn có thể tự chọn màn hình và luồng người dùng (user flow) để thực hiện, nhưng phải đáp ứng mức tối thiểu được quy định trong từng tác vụ:
- **Đối với GUI Checklist:** Bạn có thể chọn một hoặc nhiều màn hình của SUT (ví dụ: Trang chủ, Giỏ hàng, Thanh toán, Bảng điều khiển Admin, hoặc một màn hình Mobile). Mức tối thiểu là một màn hình, **nhưng một màn hình đơn lẻ trên thực tế sẽ không thể tạo ra đủ 40 mục checklist có ý nghĩa**; bạn được đặc biệt khuyến khích chọn **nhiều màn hình** để đạt độ bao phủ giao diện đầy đủ. Kiểm thử một màn hình duy nhất vẫn được chấp nhận nhưng nhiều khả năng sẽ cho ra các mục kiểm thử nông hoặc lặp đi lặp lại.
- **Đối với Đánh giá Usability:** Chọn một luồng xuyên suốt từ đầu đến cuối (End-to-End flow, ví dụ: *Đăng ký → Thêm vào giỏ → Thanh toán áp mã giảm giá*); luồng này sẽ trở thành kịch bản tác vụ (task scenario) mà người tham gia sẽ thực hiện trong Task 2.
- **Quy định tránh trùng lặp trong nhóm:** Trong từng nhóm bài tập, hãy đảm bảo lựa chọn của bạn **không bị trùng lặp với các thành viên khác trong nhóm**: không có hai thành viên nào được chọn cùng một màn hình chính cho GUI checklist hoặc cùng một luồng usability.

---

## 6. YÊU CẦU CHI TIẾT CÁC TÁC VỤ (Requirements)
Với mỗi tác vụ sau đây, bạn hãy ghi chép lại toàn bộ quá trình thực hiện trong báo cáo chính (Markdown) và đính kèm đầy đủ bằng chứng yêu cầu.

### Task 1 — GUI Checklist (30 điểm)
- **Thiết kế checklist gồm hơn 40 mục** bao phủ cả 4 khía cạnh giao diện của SUT: tiêu chuẩn UI chung (`IA-01`), biểu mẫu (`IA-02`), điều hướng (`IA-03`), và phản hồi/trạng thái (`IA-04`). Xem lại bài giảng liên quan về GUI checklist trước khi bắt đầu. Hãy dùng công cụ AI để sinh ra bộ danh mục ban đầu, sau đó tự rà soát và tự bổ sung thêm các mục của riêng bạn. Bạn được khuyến khích làm vượt mức tối thiểu: độ bao phủ càng kỹ lưỡng và không bị trùng lặp thì bài làm càng được đánh giá cao.
- **Phản biện các mục do AI sinh ra** và bổ sung vào checklist bất kỳ mục nào mà AI đã bỏ sót. Với mỗi mục bạn bổ sung, hãy **giải thích vì sao AI lại bỏ sót** — ví dụ: do chất lượng của câu lệnh (prompt) bạn đưa vào, do hạn chế của mô hình AI, hay do đặc thù riêng của giao diện bạn chọn kiểm thử. Những khía cạnh AI thường hay bỏ sót gồm có: khả năng tiếp cận (Accessibility - a11y), bố cục từ phải qua trái (RTL - Right-to-Left), chế độ tối (Dark mode)... nhưng đây chỉ là ví dụ; bạn hoàn toàn có thể bổ sung bất kỳ khía cạnh nào AI bỏ sót.
- **Thực thi checklist trên SUT** (giai đoạn chạy test), đánh dấu mỗi mục là **Passed** (Đạt) hoặc **Failed** (Không đạt). Thêm cột **Notes** vào checklist để ghi lại nguyên nhân thất bại cho mỗi mục Failed. Đính kèm ảnh chụp màn hình **chỉ cho các mục Failed**.
- **Báo cáo tất cả các lỗi (bugs) tìm được** trong cả Báo cáo Markdown VÀ trên trang **GitHub Issues** của bạn. Hãy nhớ đính kèm ảnh chụp màn hình lỗi vào từng issue trên GitHub.

### Task 2 — Đánh giá Khả năng sử dụng (Usability Evaluation - 40 điểm)
Bạn sẽ tiến hành một đợt đánh giá usability có điều phối (moderated) với cỡ mẫu nhỏ trên **luồng E2E duy nhất** mà bạn đã chọn ở §5, với **bảy (7) người tham gia thật** (bảy phiên kiểm thử riêng biệt, mỗi người một phiên). Xem lại bài giảng liên quan về đánh giá usability trước khi bắt đầu.

#### Giai đoạn 1 — Lập kế hoạch & Chuẩn bị (Plan & prepare)
- **Xác định mục tiêu:** Nêu rõ bạn muốn tìm hiểu điều gì — ví dụ: người dùng gặp nút thắt cổ chai về điều hướng ở đâu trên luồng đã chọn, hoặc họ cảm thấy tự tin như thế nào khi hoàn thành luồng đó.
- **Viết kịch bản tác vụ (Task scenario):** Biến luồng đã chọn thành một kịch bản thực tế, hướng đến mục tiêu (ví dụ: *"Hãy tìm một chiếc áo khoác mùa đông dưới 500.000 ₫ và thanh toán có sử dụng mã giảm giá"*) — **hãy giao cho người tham gia một mục tiêu, chứ không phải hướng dẫn từng bước click chuột**.
- **Chuẩn bị công cụ đo lường:**
  - Một thang đo usability chuẩn để người tham gia điền sau mỗi phiên: **SUS** (System Usability Scale) hoặc **UEQ-S** (User Experience Questionnaire - Short) (hoặc thang đo tùy chỉnh có lập luận giải thích rõ ràng).
  - Kèm theo một bộ câu hỏi mở ngắn gọn sau phiên, tối thiểu phải bao quát: **Độ rõ ràng (Clarity)**, **Khả năng phục hồi sau lỗi (Error recovery)**, **Tốc độ (Speed)**, và **Độ tin cậy (Trust)**.
- **Tuyển 7 người tham gia thật:** Phù hợp với hồ sơ người dùng mục tiêu, có thông tin liên lạc xác minh được (Zalo, email, hoặc số điện thoại — **che 4 số ở giữa**, ví dụ `091****567`). Người tham gia phải là **những người bên ngoài lớp học này** — sinh viên hiện đang học môn HW03 không đủ điều kiện tham gia. Khuyến khích chọn người không làm trong ngành IT / không làm tester để có phản hồi tự nhiên và chân thực nhất, dù đây không phải là yêu cầu bắt buộc tuyệt đối.
- **Chạy một phiên thử nghiệm (Pilot session):** Thực hiện trước với một người để phát hiện kịch bản chưa rõ ràng, luồng bị gãy hoặc vấn đề về thời gian; tinh chỉnh lại trước khi bước vào các phiên thật.

#### Giai đoạn 2 — Tiến hành các phiên (Một phiên cho mỗi người)
- **Thiết lập tâm lý (Set the stage):** Nói rõ với người tham gia rằng bạn đang kiểm thử sản phẩm chứ không phải đang đánh giá họ, và nhờ họ **suy nghĩ thành tiếng (Think aloud)** trong suốt quá trình thao tác.
- **Quan sát trung lập (Observe neutrally):** Không đưa ra gợi ý dẫn dắt hay giải thích giao diện; chỉ can thiệp khi người tham gia hoàn toàn bị mắc kẹt không thể đi tiếp.
- **Ghi lại bằng chứng (Capture evidence):** Quay video màn hình (và âm thanh, nếu người tham gia đồng ý) và ghi chép có cấu trúc về các điểm gây khó chịu (friction points), lỗi thao tác, sự ngập ngừng do dự và những lời phàn nàn bộc phát.
- **Kết thúc phiên (Close the session):** Cho người tham gia điền bảng thang đo SUS / UEQ-S, sau đó hỏi các câu hỏi mở để đào sâu vào những khó khăn mà bạn đã quan sát thấy.

#### Giai đoạn 3 — Phân tích & Báo cáo (Analyse & report)
- Tính điểm kết quả thang đo SUS / UEQ-S trên cả 7 người tham gia.
- Tổng hợp các ghi chú: gom nhóm các điểm khó chịu (pain points) tương tự nhau lại, và **tách bạch giữa lỗi phần mềm đơn lẻ (isolated bugs) với các vấn đề thiết kế mang tính hệ thống (systemic design issues)**.
- Ưu tiên sắp xếp theo mức độ nghiêm trọng (Severity) (ví dụ: lỗi chặn đứng hoàn toàn việc hoàn thành tác vụ đối chiếu với những lời phàn nàn nhỏ về mặt thị giác).
- Báo cáo các lỗi thực sự cả trong Báo cáo Markdown VÀ trên trang GitHub Issues của bạn, có đính kèm ảnh chụp màn hình vào mỗi issue.
- **Lưu ý đặc biệt:** Trợ giảng (TA) có thể gọi điện ngẫu nhiên cho hai (2) người tham gia để xác minh. **Hành vi giả mạo người tham gia sẽ bị 0 điểm toàn bộ Task 2**.

### Task 3 — Đa trình duyệt / Đa nền tảng (Cross-Browser / Cross-Platform - 20 điểm)
- Thực hiện lại Task 1 trên **ít nhất ba (3) nền tảng**.
- Sử dụng tài khoản dùng thử của **BrowserStack** hoặc **LambdaTest** (rất khuyến khích). Nếu gói dùng thử đã hết hạn, bạn có thể thay thế bằng công cụ cloud testing khác (ví dụ: Sauce Labs, CrossBrowserTesting) hoặc sử dụng **các thiết bị vật lý thật**, miễn là ảnh chụp màn hình thể hiện rõ ràng **tên Trình duyệt / Hệ điều hành / Thiết bị** nằm cạnh **địa chỉ URL `localhost` của SUT**. Bạn tự chịu trách nhiệm về việc tiếp cận các tài khoản dùng thử này.
- Bao phủ giao diện web trên: **Chrome**, **Firefox**, và **Safari** (hoặc Android Chrome).
- Bạn cũng có thể kiểm thử ứng dụng di động của SUT thông qua **Expo Go** trên điện thoại thật. Expo Go được tính là một nền tảng hợp lệ và có thể thay thế một trong ba nền tảng trình duyệt bắt buộc (ví dụ: dùng thay cho Safari); đây không chỉ là điểm cộng — đưa nó vào sẽ tính là thỏa mãn 1 trong 3 nền tảng.
- **YÊU CẦU BẮT BUỘC:** Mỗi ảnh chụp màn hình **phải phủ (overlay) hoặc chứa tên người dùng của bạn dưới dạng email sinh viên**.

---

## 7. AGENT SKILL (10 điểm)
- Bạn được khuyến khích xây dựng các **Agent Skills** có khả năng áp dụng các hoạt động tạo GUI-checklist và đánh giá usability, để có thể tái sử dụng chúng trên các màn hình và luồng khác trong các tác vụ kiểm thử tương lai.
- Nộp các skills này cùng với **các video minh họa (đường link YouTube)** thể hiện từ đầu đến cuối cách bạn đã sử dụng các skills này trên một màn hình hoặc luồng hoàn chỉnh.

---

## 8. CÔNG CỤ ĐƯỢC PHÉP VÀ CẤP ĐỘ BLOOM-AI (Allowed Tools and Bloom-AI Level)
Bạn có thể sử dụng các công cụ sau và bắt buộc phải khai báo chúng trong Báo cáo Kiểm toán AI:
- Bất kỳ công cụ AI nào bạn chọn (ví dụ: ChatGPT, Claude, Gemini, Copilot, Cursor).
- Gói dùng thử BrowserStack hoặc LambdaTest.
- Cấp độ Bloom-AI yêu cầu cho bài tập này là **G9.3 (Phân tích - Analyse)** và **G9.4 (Cộng tác - Collaborate)**.

---

## 9. BÁO CÁO KIỂM TOÁN AI (AI Audit Report - Phụ lục bắt buộc)
Đính kèm Báo cáo Kiểm toán AI như một phụ lục. Sử dụng nội dung của AI Templates được cung cấp nếu cần.
- Nếu bạn **không dùng AI**, hãy tuyên bố: *"Tôi không sử dụng bất kỳ sự trợ giúp nào của AI trong bài tập này."*
- Nếu bạn **có dùng AI**, hãy tuyên bố: *"Tôi sử dụng các công cụ AI cho các tác vụ sau,"* và bao gồm các thông tin sau cho mỗi lần tương tác:
  1. Tên công cụ AI
  2. Ngày và giờ
  3. Câu lệnh bạn nhập vào (Prompt)
  4. Kết quả đầu ra của AI (Output)
- Để đơn giản hóa quá trình này, bạn được khuyến khích tạo một skill hoặc rule để tự động trích xuất các thông tin trên sau mỗi phiên làm việc với AI.

---

## 10. BÀI PHÊ BÌNH AI (AI Critique - 200–300 từ, Bắt buộc)
Viết một đoạn văn dài từ **200 đến 300 từ** để phê bình, phản biện AI. Đoạn văn phải trả lời được các câu hỏi sau:
1. *AI đã làm sai, bị thiên kiến (biased) hoặc làm thiếu sót ở điểm nào?*
2. *Tại sao AI lại không phát hiện ra vấn đề đó?*
3. *Bạn đã rút ra được nguyên tắc gì về việc cộng tác với AI trong suốt bài tập này?*

---

## 11. CÁC RÀNG BUỘC CHỐNG GIAN LẬN AI (Anti-AI-Cheat Constraints)
Bài tập này phụ thuộc vào những **người tham gia bằng xương bằng thịt thật** và các lần chạy thực tế trên đa nền tảng. Những nội dung sau **tuyệt đối không được để AI tự tạo ra hoặc bịa đặt**, và các Trợ giảng sẽ kiểm tra xác minh khi chấm điểm:
1. **Danh sách 7 người tham gia:** Họ tên kèm Zalo / Số điện thoại (che 4 số giữa). **Trợ giảng có thể gọi ngẫu nhiên 2 người bất kỳ.**
2. **Ảnh chụp màn hình đa nền tảng:** Phải hiển thị **Mã số sinh viên (MSSV)** và **Họ tên đầy đủ** của bạn xuất hiện ngay trên biểu mẫu/màn hình.

---

## 12. NHẬT KÝ GIT COMMIT (Git Commit Log)
- Hãy tạo một Git commit mới cho **mỗi bước của quy trình kiểm thử** (ví dụ: thiết kế checklist, thực thi checklist, ghi nhận bug, từng phiên usability, và phân tích kết quả).
- Cung cấp nhật ký commit Git dưới định dạng file văn bản (text file, ví dụ `git_commit_log.txt`).

---

## 13. VẤN ĐÁP BẢO VỆ (Oral Defense)
Một nhóm ngẫu nhiên gồm **30% số sinh viên** có thể sẽ được mời tham gia một buổi vấn đáp ngắn từ **5–7 phút** trong tuần kế tiếp sau hạn nộp bài để giải thích cách bạn đã hoàn thành bài tập này.

---

## 14. QUY ĐỊNH NỘP BÀI (Submission Regulations)
- **Định dạng tên file nộp:**  
  `<MãSinhViên>_HW03_AI_GUIUsability_<ĐiểmTựChấm>.zip`  
  *(Trong đó `ĐiểmTựChấm` là một số gồm 3 chữ số từ [000, 100]. Ví dụ: `25127001_HW03_AI_GUIUsability_090.zip`)*
- **Các nội dung bắt buộc phải có bên trong file `.zip`:**
  1. **Báo cáo chính (Markdown + PDF):** Bao gồm báo cáo GUI checklist và báo cáo đánh giá usability.
  2. **Báo cáo lỗi (Bug report):** Có ảnh chụp màn hình các lỗi trên trang GitHub Issues.
  3. **Báo cáo AI Critique và AI Audit Report (Markdown + PDF).**
  4. **Nhật ký Git commit (File text).**
  5. **Bảng checklist bằng Excel (hơn 40 mục)** và bản tóm tắt kiểm thử (Test Summary).
  6. **Bằng chứng của các phiên usability:** Kịch bản tác vụ, ghi chú quan sát, câu trả lời thang đo SUS / UEQ-S, các phát hiện được xếp hạng mức độ nghiêm trọng, video quay màn hình (nếu có), kèm theo bảng danh sách 7 người tham gia.
  7. **Ảnh chụp màn hình đa trình duyệt / đa nền tảng.**
  8. **File `README.md`:** Chứa bảng tự đánh giá điểm và báo cáo tóm tắt kiểm thử.
  9. Bất kỳ tài liệu hỗ trợ nào khác.

---

## 15. BẢNG TIÊU CHÍ CHẤM ĐIỂM (Assessment Template)

| STT | Tiêu chí | Điểm tối đa | Điểm tự chấm (Self-Assessed Grade) |
| :-: | :--- | :-: | :-: |
| **1** | **Task 1 — GUI Checklist** (Thiết kế + Thực thi + Báo cáo Bug) | 30 | |
| **2** | **Task 2 — Usability Evaluation** (Kịch bản tác vụ + 7 phiên test + Phân tích) | 40 | |
| **3** | **Task 3 — Cross-Browser / Cross-Platform** ($\ge 3$ nền tảng) | 20 | |
| **4** | **Agent Skills** | 10 | |
| **Tổng** | | **100** | |

---

## 16. CÁC QUY ĐỊNH KHÁC (Other Regulations)
- Không chấp nhận nộp trễ hạn dưới bất kỳ hình thức nào.
- Thiếu bất kỳ tài liệu bắt buộc nào nêu trong danh mục nộp bài sẽ bị 0 điểm.
- Sao chép giữa các sinh viên — bao gồm cả việc sao chép câu lệnh (prompt) — sẽ dẫn đến điểm 0 cho cả hai bên.
