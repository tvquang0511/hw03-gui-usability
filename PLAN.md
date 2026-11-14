# KẾ HOẠCH THỰC HIỆN CHI TIẾT: HW03 – GUI & USABILITY TESTING

> **Mã bài tập:** HW03-AI  
> **Thời lượng ước tính:** 10 giờ  
> **Hình thức:** Cá nhân (Individual Assignment)  
> **Hệ thống kiểm thử (SUT):** EShop (`https://github.com/ttbhanh/eshop-sut`)  
> **Mức độ Bloom-AI yêu cầu:** G9.3 (Analyse) & G9.4 (Collaborate with AI for exploratory testing)  
> **Định dạng file nộp:** `<StudentID>_HW03_AI_GUIUsability_<SelfAssessedGrade>.zip` (Ví dụ: `22120001_HW03_AI_GUIUsability_095.zip`)

---

## 1. TỔNG QUAN CƠ CẤU ĐIỂM & TIÊU CHÍ ĐÁNH GIÁ (100 ĐIỂM)

| STT | Hạng mục (Criteria) | Điểm tối đa | Trọng tâm đánh giá & Điều kiện đạt điểm tối đa |
| :-: | :--- | :-: | :--- |
| **1** | **Task 1 — GUI Checklist** (Design + Execution + Bug Report) | **30** | • **> 40 checklist items** (mục tiêu: **52–60 items**) phủ đủ 4 khía cạnh: `IA-01`, `IA-02`, `IA-03`, `IA-04` trên nhiều màn hình.<br>• Phản biện kết quả của AI: Bổ sung các mục AI bỏ sót kèm giải thích chi tiết **tại sao AI bỏ sót**.<br>• Thực thi kiểm thử: Đánh dấu `Passed`/`Failed`, ghi rõ `Notes` cho mục `Failed`, chụp screenshot cho mục `Failed`.<br>• Báo cáo toàn bộ bug trong Markdown Report **VÀ** tạo issue trên **GitHub Issues** (đính kèm ảnh chụp). |
| **2** | **Task 2 — Usability Evaluation** (Task Scenario + 7 Sessions + Analysis) | **40** | • Chọn 1 luồng End-to-End (E2E flow), xác định Objectives, viết Task Scenario hướng mục tiêu (không hướng dẫn từng bước).<br>• Chuẩn bị công cụ đo **SUS** hoặc **UEQ-S** + bộ câu hỏi mở (**Clarity, Error recovery, Speed, Trust**).<br>• Chạy **1 phiên Pilot** + **7 phiên chính thức** với **7 người thật ngoài lớp học** (có SĐT/Zalo che 4 số giữa).<br>• Tính điểm SUS/UEQ-S, tổng hợp pain points, tách lỗi đơn lẻ vs. lỗi hệ thống, xếp hạng Severity và log bug lên GitHub Issues. |
| **3** | **Task 3 — Cross-Browser / Cross-Platform** ($\ge 3$ Platforms) | **20** | • Thực thi Task 1 trên **ít nhất 3 nền tảng**: Chrome, Firefox, và Safari (hoặc Android Chrome / Mobile App qua Expo Go).<br>• Sử dụng BrowserStack / LambdaTest hoặc thiết bị thật (ảnh chụp phải rõ Browser/OS/Device + URL `localhost`).<br>• **Bắt buộc:** Mọi ảnh chụp phải hiển thị **MSSV + Họ tên + Email sinh viên** ngay trong form hoặc overlay trên ảnh. |
| **4** | **Agent Skills** | **10** | • Xây dựng **Agent Skills** tái sử dụng được cho GUI Checklist, Usability Evaluation và trích xuất AI Audit.<br>• Quay **video demo (YouTube link)** trình diễn quá trình dùng Skill end-to-end trên một màn hình hoặc luồng hoàn chỉnh. |
| **-** | **Hồ sơ bắt buộc đi kèm** (Mandatory Appendices & Logs) | **Điều kiện cần** | • **AI Audit Report** (Log đầy đủ: Tên AI, Ngày giờ, Prompt, Output) + **AI Critique (200–300 từ)**.<br>• **Git Commit Log** (`git_commit_log.txt`) với lịch sử commit theo từng bước thực hiện.<br>• Đầy đủ định dạng **Markdown + PDF**, bảng **Excel Checklist**, và **README.md** tổng hợp. |

---

## 2. CÁC QUY TẮC BẮT BUỘC & CHỐNG GIAN LẬN (ANTI-AI-CHEAT)

1. **Không trùng lặp phạm vi (Scope) trong nhóm:**
   * Không được chọn trùng **màn hình chính (Primary Screen)** ở Task 1 hoặc trùng **luồng người dùng (Usability Flow)** ở Task 2 với bất kỳ thành viên nào khác trong cùng nhóm.
2. **Xác minh người tham gia thật ở Task 2:**
   * 7 người tham gia phải là người thật, **không học lớp HW03 này** (ưu tiên người không làm IT/Tester).
   * Bảng danh sách phải có Họ tên + SĐT/Zalo (che 4 số giữa, ví dụ: `090****123`).
   * **Trợ giảng (TA) sẽ gọi ngẫu nhiên 2 người để xác minh.** Nếu giả mạo sẽ bị **0 điểm toàn bộ Task 2**.
3. **Bằng chứng chính chủ ở Task 3:**
   * Ảnh chụp màn hình đa nền tảng bắt buộc phải chứa thông tin định danh của sinh viên (**MSSV, Họ tên, Email sinh viên**) hiển thị trong trường nhập liệu (form) trên màn hình kèm thông tin trình duyệt/thiết bị và địa chỉ `localhost`.
4. **Quy định điểm 0:**
   * Nộp trễ hạn, thiếu bất kỳ tài liệu bắt buộc nào, hoặc sao chép bài/prompt giữa các sinh viên đều bị **0 điểm**.

---

## 3. LỰA CHỌN PHẠM VI KIỂM THỬ (SCOPE SELECTION)

Hệ thống **EShop** gồm 4 Pool tính năng (`Pool A`, `Pool B`, `Pool C`, `Pool D`) và 4 khía cạnh giao diện (`IA-01: General UI standards`, `IA-02: Forms`, `IA-03: Navigation`, `IA-04: Feedback / state`). Dưới đây là **3 phương án Scope mẫu** (chọn 1 phương án không trùng với nhóm):

### Phương án A: Luồng Mua hàng Khách hàng (Khuyên dùng - Nhiều tương tác UI nhất)
* **Màn hình cho Task 1 (GUI Checklist):**
  1. **Product Listing, Search & Filter (`FR-05`) + Product Detail (`FR-06`)**: Kiểm tra bố cục lưới sản phẩm, bộ lọc, tìm kiếm, phân trang, chi tiết sản phẩm.
  2. **Shopping Cart (`FR-07`)**: Kiểm tra cập nhật số lượng, xóa sản phẩm, tính tạm tính, trạng thái giỏ hàng trống.
  3. **Checkout & Discount Coupons (`FR-08`, `FR-09`)**: Kiểm tra form địa chỉ giao hàng, chọn phương thức thanh toán, áp dụng mã giảm giá, thông báo lỗi/thành công.
* **Luồng End-to-End cho Task 2 (Usability Flow):**
  * `Tìm kiếm & Lọc sản phẩm` $\rightarrow$ `Xem chi tiết & Thêm vào giỏ hàng` $\rightarrow$ `Áp dụng mã giảm giá (Coupon)` $\rightarrow$ `Điền thông tin & Hoàn tất thanh toán (Checkout)`.

### Phương án B: Luồng Quản lý Tài khoản & Đơn hàng cá nhân
* **Màn hình cho Task 1 (GUI Checklist):**
  1. **Authentication (`FR-01` Register, `FR-02` Login & Lockout, `FR-03` Forgot/Reset Password)**.
  2. **Personal Profile Management (`FR-04`)**.
  3. **User Order History & Order State View (`FR-10`, `FR-11`)**.
* **Luồng End-to-End cho Task 2 (Usability Flow):**
  * `Đăng ký tài khoản mới` $\rightarrow$ `Cập nhật thông tin hồ sơ cá nhân` $\rightarrow$ `Đặt mua nhanh 1 sản phẩm` $\rightarrow$ `Tra cứu và kiểm tra trạng thái đơn hàng trong Lịch sử đơn hàng`.

### Phương án C: Luồng Quản trị viên Web Admin (Pool C)
* **Màn hình cho Task 1 (GUI Checklist):**
  1. **Admin Dashboard (`FR-13`) & Category Management (`FR-14`)**.
  2. **Product Management CRUD & CSV Import (`FR-15`, `FR-16`)**.
  3. **Coupon Management (`FR-17`) & Order Management (`FR-18`)**.
* **Luồng End-to-End cho Task 2 (Usability Flow):**
  * `Đăng nhập Admin` $\rightarrow$ `Tạo danh mục & Thêm sản phẩm mới (hoặc Import CSV)` $\rightarrow$ `Tạo mã giảm giá mới` $\rightarrow$ `Kiểm tra và cập nhật trạng thái đơn hàng của khách`.

---

## 4. CẤU TRÚC THƯ MỤC BÀI NỘP CHUẨN

Toàn bộ quá trình làm việc sẽ được tổ chức theo cấu trúc thư mục dưới đây để sẵn sàng đóng gói thành file `.zip`:

```text
<StudentID>_HW03_AI_GUIUsability_<SelfAssessedGrade>/
│
├── README.md                                  # Bảng tự đánh giá điểm, Test Summary Report, Link YouTube demo
├── PLAN.md                                    # Bản kế hoạch chi tiết thực hiện bài tập
│
├── reports/
│   ├── Main_Report.md                         # Báo cáo chính (Task 1, Task 2, Task 3)
│   ├── Main_Report.pdf                        # Bản xuất PDF của Báo cáo chính
│   ├── Bug_Report.md                          # Danh sách chi tiết các Bug + Link GitHub Issues + Ảnh
│   ├── AI_Audit_and_Critique.md               # Bài phê bình AI (200-300 từ) + Nhật ký sử dụng AI đầy đủ
│   └── AI_Audit_and_Critique.pdf              # Bản xuất PDF của AI Audit & Critique
│
├── checklists/
│   └── GUI_Checklist.xlsx                     # File Excel chứa >40 checklist items + Sheet Test Summary
│
├── evidence/
│   ├── task1_failed_screenshots/              # Ảnh chụp màn hình cho các mục Failed ở Task 1
│   ├── task2_usability/
│   │   ├── 01_Task_Scenario_and_Plan.md       # Mục tiêu, Kịch bản, Bộ câu hỏi SUS & câu hỏi mở
│   │   ├── 02_Participants_List.md            # Bảng 7 người tham gia (che 4 số giữa SĐT/Zalo) + 1 Pilot
│   │   ├── 03_Session_Observation_Notes/      # Ghi chú quan sát chi tiết của từng phiên (P01 -> P07 + Pilot)
│   │   ├── 04_SUS_Raw_Responses_and_Scores.csv# Điểm thô 10 câu SUS của 7 người và kết quả tính điểm
│   │   └── 05_Recordings_Links.md             # Link video/audio ghi hình các buổi test (nếu có)
│   └── task3_cross_platform/
│       ├── platform1_chrome/                  # Ảnh chụp trên Chrome (có MSSV + Họ tên + Email trong form)
│       ├── platform2_firefox/                 # Ảnh chụp trên Firefox (có MSSV + Họ tên + Email trong form)
│       └── platform3_safari_or_mobile/        # Ảnh chụp trên Safari/Android/Expo Go (có thông tin SV)
│
├── skills/                                    # Các Agent Skills phục vụ Task 4
│   ├── gui-checklist-auditor/
│   │   ├── SKILL.md
│   │   └── scripts/
│   ├── usability-eval-analyzer/
│   │   ├── SKILL.md
│   │   └── scripts/
│   └── ai-audit-extractor/
│       ├── SKILL.md
│       └── scripts/
│
└── git_commit_log.txt                         # Xuất từ lệnh git log theo từng bước làm bài
```

---

## 5. LỘ TRÌNH THỰC HIỆN CHI TIẾT TỪNG BƯỚC (7 GIAI ĐOẠN)

### GIAI ĐOẠN 1: Chuẩn bị Môi trường, SUT & Git (0.5 giờ)
- [ ] **Bước 1.1:** Fork repository `https://github.com/ttbhanh/eshop-sut` về tài khoản GitHub cá nhân và bật tab **Issues** trên repo đã fork (để tạo bug reports có URL công khai).
- [ ] **Bước 1.2:** Clone `eshop-sut` về máy, cài đặt dependencies, khởi chạy Backend, Web Frontend (và Mobile app qua Expo nếu dùng cho Task 3).
- [ ] **Bước 1.3:** Khởi tạo Git repository cho thư mục làm bài `hw03`, tạo cấu trúc thư mục chuẩn.
- [ ] **Git Commit #1:** `chore: initialize HW03 project structure and test environment`

---

### GIAI ĐOẠN 2: Xây dựng Agent Skills – Hoàn thành Task 4 (1.5 giờ)
> *Chiến lược:* Xây dựng Agent Skills trước để dùng chính các Skills này hỗ trợ thực hiện Task 1, Task 2 và trích xuất AI Audit Report.

- [ ] **Bước 2.1:** Thiết kế Skill 1 — `gui-checklist-auditor`:
  * **Mục đích:** Tự động phân tích màn hình SUT, sinh danh sách kiểm thử theo 4 khía cạnh (`IA-01` $\rightarrow$ `IA-04`), đồng thời rà soát các góc khuất mà LLM thường bỏ sót (Accessibility/WCAG, Keyboard navigation, Focus trap, RTL layout, Dark mode, Text truncation với tiếng Việt, định dạng tiền tệ `₫`).
- [ ] **Bước 2.2:** Thiết kế Skill 2 — `usability-eval-analyzer`:
  * **Mục đích:** Tự động tạo kịch bản Usability không định hướng (non-leading scenario), tạo biểu mẫu khảo sát SUS 10 câu chuẩn + 4 câu hỏi mở, chạy script Python tính điểm SUS trung bình, độ lệch chuẩn và phân nhóm lỗi theo mức độ nghiêm trọng (Severity).
- [ ] **Bước 2.3:** Thiết kế Skill 3 — `ai-audit-extractor`:
  * **Mục đích:** Tự động trích xuất và định dạng lịch sử prompt/output thành bảng báo cáo AI Audit Report chuẩn.
- [ ] **Git Commit #2:** `feat(skills): implement agent skills for GUI checklist, usability analysis, and AI audit`

---

### GIAI ĐOẠN 3: Thực hiện Task 1 — GUI Checklist Design, Review & Execution (2.5 giờ)

#### 3.1. Thiết kế Checklist ban đầu bằng AI (AI Generation)
- [ ] Hướng dẫn AI từng bước (theo nguyên lý AI-First) để sinh khoảng **40 checklist items** ban đầu trải đều trên các màn hình đã chọn và phủ đủ 4 khía cạnh:
  * **`IA-01` (General UI standards - ~10–12 items):** Bố cục (layout alignment), hệ thống phân cấp thị giác (typography, font size), màu sắc & độ tương phản, tính nhất quán của icon/button, hiển thị giá tiền VNĐ, khả năng đáp ứng (responsive breakpoints).
  * **`IA-02` (Forms - ~10–12 items):** Nhãn trường bắt buộc (`*`), placeholder, kiểm tra hợp lệ đầu vào (inline validation), thông báo lỗi rõ ràng, giữ lại dữ liệu khi submit lỗi, trạng thái disable/enable nút Submit, định dạng dữ liệu (SĐT, email, mã giảm giá).
  * **`IA-03` (Navigation - ~10 items):** Thanh điều hướng (Navbar), Breadcrumbs, hoạt động của nút Back/Forward trình duyệt, điều hướng bằng bàn phím (`Tab` / `Shift+Tab` / `Enter` / `Esc`), liên kết gãy (broken links), đồng bộ URL khi lọc/chuyển trang.
  * **`IA-04` (Feedback / State - ~10 items):** Trạng thái tải (Loading spinner/skeleton), trạng thái rỗng (Empty states cho giỏ hàng/tìm kiếm), thông báo Toast/Alert, xác nhận trước hành động xóa, vô hiệu hóa nút khi đang gửi request (tránh double-submit), cập nhật badge số lượng giỏ hàng theo thời gian thực.
- [ ] **Git Commit #3:** `docs(task1): generate initial 40-item GUI checklist using AI`

#### 3.2. Phản biện của Con người & Bổ sung Checklist (Human Critical Review)
- [ ] Rà soát từng mục do AI sinh ra, chỉnh sửa các mục chung chung và **bổ sung thêm 12–18 items** do con người phát hiện (tổng cộng **52–58 items**).
- [ ] Với mỗi mục bổ sung, ghi rõ cột **"Source (AI / Human)"** và **"Why AI Missed It"** dựa trên 3 nhóm nguyên nhân:
  1. **Giới hạn của Prompt đầu vào (Prompt limitation):** Chưa mô tả chi tiết đặc thù văn hóa/ngôn ngữ (tiếng Việt có dấu dễ gây vỡ khung hoặc lỗi font).
  2. **Giới hạn của Mô hình AI (Model limitation):** AI thiên về sinh các test case "happy path" hoặc quy chuẩn bề nổi, thường bỏ qua **Accessibility (WCAG contrast, ARIA labels, Screen reader)**, **Keyboard focus trap trong Modal**, **Dark mode / High contrast mode**, và **Right-to-Left (RTL) / Zoom 200% layout**.
  3. **Đặc thù thực tế của giao diện SUT (SUT-specific nuance):** Các hành vi trạng thái động trên EShop chỉ lộ ra khi tương tác thực tế (ví dụ: áp mã coupon hết hạn xong xóa đi nhưng tổng tiền không tính lại, hoặc bấm nhanh nút `+` số lượng gây lệch state).
- [ ] **Git Commit #4:** `docs(task1): critically review AI checklist and add human-identified GUI items`

#### 3.3. Thực thi Kiểm thử & Báo cáo Bug (Execution & Bug Reporting)
- [ ] Chạy từng mục trong tổng số >50 items trên hệ thống EShop.
- [ ] Ghi kết quả `Passed` / `Failed`. Với mọi mục `Failed`:
  * Điền lý do chi tiết vào cột `Notes`.
  * Chụp ảnh màn hình minh họa lỗi, lưu vào `evidence/task1_failed_screenshots/`.
- [ ] Tạo **GitHub Issues** cho toàn bộ các bug phát hiện được (có Tiêu đề chuẩn, Steps to Reproduce, Expected Result, Actual Result, Severity, Environment, và **ảnh chụp màn hình đính kèm**).
- [ ] Xuất bảng kết quả ra file Excel `checklists/GUI_Checklist.xlsx` (gồm 2 sheet: `GUI_Checklist` và `Test_Summary`).
- [ ] **Git Commit #5:** `test(task1): execute GUI checklist against EShop SUT and capture failure screenshots`
- [ ] **Git Commit #6:** `docs(bugs): document Task 1 GUI bugs and link to GitHub Issues`

---

### GIAI ĐOẠN 4: Thực hiện Task 3 — Cross-Browser / Cross-Platform Testing (1.5 giờ)

- [ ] **Bước 4.1:** Thiết lập ít nhất **3 nền tảng kiểm thử**:
  1. **Nền tảng 1:** Google Chrome trên Windows (Desktop).
  2. **Nền tảng 2:** Mozilla Firefox trên Windows (Desktop).
  3. **Nền tảng 3:** Safari trên macOS/iOS (thông qua tài khoản dùng thử **BrowserStack** hoặc **LambdaTest** kết nối Local Tunnel) **HOẶC** Chrome trên Android thật / Mobile App chạy qua **Expo Go** trên điện thoại thật.
- [ ] **Bước 4.2:** Thực thi bộ GUI Checklist của Task 1 trên cả 3 nền tảng, ghi nhận sự khác biệt về hiển thị (CSS lệch, vỡ khung mobile, sự kiện cảm ứng/hover, lỗi font/input date/number trên Firefox/Safari).
- [ ] **Bước 4.3 (CỰC KỲ QUAN TRỌNG):** Chụp ảnh bằng chứng trên từng nền tảng:
  * Nhập trực tiếp vào một ô input/form trên màn hình chuỗi: `<MSSV> - <Họ Tên> - <Email SV>` (và/hoặc chèn watermark thông tin sinh viên lên ảnh).
  * Khung ảnh phải thấy rõ: **Tên trình duyệt / Hệ điều hành / Thiết bị** + **Thanh URL `localhost`** + **Thông tin sinh viên trong form**.
- [ ] **Git Commit #7:** `test(task3): perform cross-browser and cross-platform testing across 3 platforms`

---

### GIAI ĐOẠN 5: Thực hiện Task 2 — Usability Evaluation với 7 Người Thật (2.5 giờ)

#### Phase 1: Lập kế hoạch & Chuẩn bị (Plan & Prepare)
- [ ] **Bước 5.1 — Xác định Objectives:** Nêu rõ 3–4 mục tiêu cần tìm hiểu (ví dụ: tìm điểm nghẽn điều hướng khi tìm sản phẩm & áp mã giảm giá, đánh giá độ rõ ràng của phản hồi lỗi trong form thanh toán, đo thời gian hoàn thành đơn hàng và mức độ tin cậy của người dùng).
- [ ] **Bước 5.2 — Viết Task Scenario:** Xây dựng kịch bản đóng vai thực tế, hướng mục tiêu, **tuyệt đối không chỉ dẫn từng bước click nút nào**.
  * *Ví dụ mẫu:* *"Bạn đang muốn mua tặng bạn bè một món đồ trên cửa hàng EShop với ngân sách tối đa 500.000 ₫. Hãy tìm một sản phẩm phù hợp, sử dụng mã khuyến mãi hiện có để được giảm giá, và hoàn tất việc đặt hàng về địa chỉ của bạn."*
- [ ] **Bước 5.3 — Chuẩn bị Công cụ đo (Instruments):**
  * **Thang đo SUS (System Usability Scale):** 10 câu hỏi tiêu chuẩn chấm điểm Likert từ `1 (Hoàn toàn không đồng ý)` đến `5 (Hoàn toàn đồng ý)`.
  * **4 câu hỏi phỏng vấn mở sau phiên (Post-session Probe Questions):**
    1. **Clarity (Độ rõ ràng):** *Có thông tin, nhãn nút bấm hay bước nào trên trang khiến bạn thấy bối rối hoặc phải đoán ý nghĩa không?*
    2. **Error recovery (Khả năng phục hồi sau lỗi):** *Khi bạn nhập sai hoặc gặp thông báo lỗi, hệ thống có giúp bạn nhận biết và sửa lỗi dễ dàng không?*
    3. **Speed (Tốc độ):** *Bạn cảm thấy tốc độ hoàn thành toàn bộ quá trình đặt hàng nhanh hay chậm so với kỳ vọng? Khâu nào làm bạn mất nhiều thời gian nhất?*
    4. **Trust (Độ tin cậy):** *Giao diện và thông tin hiển thị (giá cả, phí, xác nhận đơn) có đủ rõ ràng để bạn yên tâm thanh toán thật không?*
- [ ] **Bước 5.4 — Tuyển chọn 7 người tham gia + 1 người chạy Pilot:**
  * Người thật ngoài lớp học, ưu tiên người không học CNTT/Kiểm thử.
  * Lập bảng thông tin gồm: Mã (`Pilot`, `P01` $\rightarrow$ `P07`), Họ và tên, Độ tuổi/Nghề nghiệp, Thông tin liên hệ (SĐT/Zalo đã che 4 số giữa, ví dụ `091****456`).
- [ ] **Bước 5.5 — Chạy phiên Pilot (Pilot Session):**
  * Chạy thử với 1 người để kiểm tra kịch bản có dễ hiểu không, dữ liệu sản phẩm/coupon trên SUT đã sẵn sàng chưa, thời lượng có hợp lý không $\rightarrow$ Ghi nhận các tinh chỉnh sau Pilot.
- [ ] **Git Commit #8:** `docs(task2): create usability test plan, scenario, SUS survey, and pilot refinements`

#### Phase 2: Tiến hành 7 Phiên Kiểm thử (Conduct 7 Sessions)
- [ ] Với mỗi người tham gia (`P01` $\rightarrow$ `P07`):
  1. **Set the stage:** Giải thích đang kiểm thử phần mềm chứ không đánh giá người dùng; hướng dẫn người dùng vừa thao tác vừa nói suy nghĩ trong đầu (*Think Aloud*). Xin phép ghi hình màn hình & âm thanh.
  2. **Observe neutrally:** Quan sát trung lập, không gợi ý cách bấm, chỉ can thiệp khi người dùng bị kẹt hoàn toàn (blocker).
  3. **Capture evidence:** Ghi hình màn hình và ghi chú có cấu trúc: Thời gian hoàn thành, hoàn thành hay thất bại, các điểm khựng lại (hesitations), thao tác sai (errors), biểu cảm/lời phàn nàn (frustrations).
  4. **Close the session:** Cho người tham gia điền bảng 10 câu SUS và trả lời 4 câu hỏi mở.
- [ ] **Git Commit #9 $\rightarrow$ #15 (hoặc commit theo đợt phiên test):** `test(task2): record usability session notes and SUS responses for participants P01-P07`

#### Phase 3: Phân tích & Báo cáo (Analyse & Report)
- [ ] **Bước 5.6 — Tính điểm SUS cho 7 người tham gia:**
  * Công thức tính điểm SUS cho từng người:
    $$\text{SUS} = 2.5 \times \left( \sum_{i \in \{1,3,5,7,9\}} (X_i - 1) + \sum_{i \in \{2,4,6,8,10\}} (5 - X_i) \right)$$
  * Tính điểm trung bình (Mean), Trung vị (Median), Độ lệch chuẩn (SD), và đối chiếu thang xếp hạng (ví dụ: `< 50` Không đạt, `50–68` Cần cải thiện, `>= 68` Khá/Tốt, `>= 80.3` Xuất sắc).
- [ ] **Bước 5.7 — Tổng hợp & Phân loại vấn đề:**
  * Gom nhóm các pain points trùng lặp (Affinity Mapping).
  * Tách biệt rõ ràng giữa **Isolated Bugs** (lỗi kỹ thuật đơn lẻ) và **Systemic Design Issues** (lỗi thiết kế luồng/trải nghiệm hệ thống).
  * Xếp hạng theo mức độ nghiêm trọng (**Severity 1 - Critical/Blocker**, **Severity 2 - Major**, **Severity 3 - Minor**, **Severity 4 - Cosmetic**).
- [ ] **Bước 5.8 — Log Bug lên GitHub Issues:** Đẩy toàn bộ các bug thực sự phát hiện trong quá trình Usability lên trang GitHub Issues kèm ảnh chụp màn hình.
- [ ] **Git Commit #16:** `docs(task2): complete SUS scoring, qualitative synthesis, and usability bug logging`

---

### GIAI ĐOẠN 6: Quay Video Demo Skills & Viết AI Audit + AI Critique (1 giờ)

- [ ] **Bước 6.1 — Quay Video Demo Agent Skills (Task 4):**
  * Quay video màn hình (khoảng 2–5 phút) trình diễn cảnh kích hoạt và chạy các **Agent Skills** end-to-end trên một màn hình/luồng thực tế của EShop.
  * Upload video lên YouTube (chế độ *Public* hoặc *Unlisted*) và dán link vào `README.md` cũng như `Main_Report.md`.
- [ ] **Bước 6.2 — Viết đoạn AI Critique (Bắt buộc 200–300 từ):**
  * Trả lời 3 câu hỏi cốt lõi:
    1. *AI đã làm sai, thiên kiến (biased) hoặc thiếu sót ở điểm nào?* (Ví dụ: AI sinh checklist lý thuyết chung chung, bỏ sót lỗi tràn chữ tiếng Việt, giả định sai về DOM thực tế của EShop, hoặc đánh giá quá lạc quan khả năng tự hiểu của người dùng phổ thông).
    2. *Tại sao AI lại không bắt được các vấn đề đó?* (Do thiếu ngữ cảnh thị giác thực tế ở các độ phân giải khác nhau, không trải nghiệm được áp lực tâm lý/sự bối rối của người dùng thật).
    3. *Nguyên tắc rút ra khi cộng tác với AI là gì?* (AI là trợ lý mở rộng độ phủ ban đầu, nhưng con người phải giữ vai trò kiểm chứng thực nghiệm, thiết kế edge-cases văn hóa/ngữ cảnh và đánh giá sự thấu cảm người dùng).
  * Đếm số từ chính xác để đảm bảo nằm строго trong khoảng **200–300 từ**.
- [ ] **Bước 6.3 — Hoàn thiện AI Audit Report:**
  * Đảm bảo mọi tương tác với AI đều có đầy đủ: Tên công cụ AI, Ngày giờ, Prompt đã nhập, và Output của AI.
- [ ] **Git Commit #17:** `docs(audit): add AI Audit Report, 250-word AI Critique, and Agent Skill demo links`

---

### GIAI ĐOẠN 7: Hoàn thiện Tài liệu, Xuất PDF/Excel & Đóng gói Nộp bài (0.5 giờ)

- [ ] **Bước 7.1:** Hoàn thiện file `README.md` gồm:
  * Thông tin sinh viên & Link GitHub Repo / GitHub Issues.
  * **Bảng tự đánh giá điểm (Self-Assessment Table)** theo đúng mẫu Mục 15 của đề bài.
  * **Test Summary Report:** Số màn hình/luồng đã test; Số checklist items đã thiết kế, đã thực thi, số Passed, số Failed; Tổng số bugs đã báo cáo; Số người tham gia Usability; Link YouTube video demo Agent Skills.
- [ ] **Bước 7.2:** Xuất các file Markdown quan trọng (`Main_Report.md`, `AI_Audit_and_Critique.md`) sang định dạng **PDF**.
- [ ] **Bước 7.3:** Xuất lịch sử Git commit ra file văn bản:
  ```powershell
  git log --stat --date=iso > git_commit_log.txt
  ```
- [ ] **Bước 7.4:** Đối chiếu danh sách kiểm tra lần cuối (Final Submission Checklist) và nén thành file `<StudentID>_HW03_AI_GUIUsability_<SelfAssessedGrade>.zip`.

---

## 6. CHECKLIST KIỂM TRA TRƯỚC KHI NỘP BÀI (FINAL VERIFICATION)

- [ ] Tên file `.zip` đúng chuẩn `<StudentID>_HW03_AI_GUIUsability_<SelfAssessedGrade>.zip` (điểm có 3 chữ số, ví dụ `095`).
- [ ] `Main_Report.md` và `Main_Report.pdf` đầy đủ cả 3 Task.
- [ ] `Bug_Report.md` có link trỏ tới **GitHub Issues** và mọi GitHub Issue đều có **ảnh chụp màn hình**.
- [ ] `AI_Audit_and_Critique.md` và `.pdf` có tuyên bố sử dụng AI, bảng log đầy đủ (Tool, Date/Time, Prompt, Output) và đoạn **AI Critique dài từ 200 đến 300 từ**.
- [ ] `GUI_Checklist.xlsx` có **> 40 items** (phủ đủ `IA-01`, `IA-02`, `IA-03`, `IA-04`), có giải thích lý do AI bỏ sót, có trạng thái `Passed`/`Failed`, cột `Notes` cho mục `Failed`, và sheet `Test Summary`.
- [ ] Ảnh chụp cho mọi mục `Failed` ở Task 1 đã được đính kèm đầy đủ.
- [ ] Hồ sơ Task 2 có đủ: Objectives, Task Scenario, phiếu SUS/UEQ-S + 4 câu hỏi mở, ghi chú quan sát 7 phiên + 1 Pilot, bảng điểm SUS, danh sách **7 người tham gia thật** (có SĐT/Zalo che 4 số giữa), phân loại lỗi theo Severity.
- [ ] Ảnh chụp Task 3 trên **$\ge 3$ nền tảng** thấy rõ Browser/OS/Device + URL `localhost` + **MSSV/Họ tên/Email sinh viên hiển thị trong form**.
- [ ] Thư mục `skills/` chứa đầy đủ các **Agent Skills** kèm link **YouTube video demo** hoạt động end-to-end.
- [ ] File `git_commit_log.txt` thể hiện rõ các commit theo từng bước thực hiện.
- [ ] File `README.md` có bảng tự chấm điểm (Self-Assessment Table) và bảng tổng hợp kết quả kiểm thử (Test Summary Report).
