# Agent Skills — HW03

Hai skill tái sử dụng cho bài này. Mỗi skill là một thư mục có `SKILL.md` + templates/references đi kèm.

| Skill ID | Dùng để | File |
| :--- | :--- | :--- |
| `gui-checklist-tester` | Thiết kế và thực thi GUI checklist > 40 item phủ IA-01…IA-04, chụp evidence item Failed, xuất bug report | `gui-checklist-tester/SKILL.md` |
| `usability-evaluation` | Thiết kế & phân tích usability test nhỏ (7 người, moderated, SUS, probe, severity) | `usability-evaluation/SKILL.md` |

## Cài đặt (OpenCode V2)

OpenCode tìm skill trong các thư mục sau (theo thứ tự ưu tiên tăng dần):

```text
~/.config/opencode/skills/<skill-id>/SKILL.md   # global
.opencode/skills/<skill-id>/SKILL.md            # project (ưu tiên cao hơn)
```

Trong repo này:

```powershell
# Cài cho mọi project
Copy-Item -Recurse skills\gui-checklist-tester  "$env:USERPROFILE\.config\opencode\skills\"
Copy-Item -Recurse skills\usability-evaluation "$env:USERPROFILE\.config\opencode\skills\"

# Hoặc chỉ cho project hiện tại
New-Item -ItemType Directory -Force .opencode\skills | Out-Null
Copy-Item -Recurse skills\gui-checklist-tester  .opencode\skills\
Copy-Item -Recurse skills\usability-evaluation .opencode\skills\
```

Kiểm tra: mở OpenCode, gõ `/skills` (hoặc xem danh sách skill khả dụng) — phải thấy `gui-checklist-tester` và `usability-evaluation`.

> Skill ID lấy từ **tên thư mục**, không phải frontmatter `name`. Không đổi tên thư mục khi copy.

## Cấu trúc

```text
skills/
├── gui-checklist-tester/
│   ├── SKILL.md
│   ├── references/ia-taxonomy.md
│   └── templates/
│       ├── checklist_row.md
│       ├── execution_row.md
│       └── bug_entry.md
└── usability-evaluation/
    ├── SKILL.md
    └── templates/
        ├── plan.md
        ├── scenario.md
        ├── sus_vi.md
        ├── probe_questions.md
        ├── session_notes.md
        └── participants.csv
```

## Cách dùng trong một prompt

```text
@skill-gui-checklist-tester Hãy thiết kế checklist cho flow Cart → Checkout của SUT ở http://localhost:5173.
Phạm vi: Cart, Checkout, Login, Register. Dùng SRS FR-21…FR-24. Sinh 60 item, có Expected và Method.
```

```text
@skill-usability-evaluation Thiết kế usability test cho flow đăng ký → mua hàng → xem đơn,
7 người ngoài lớp, 25 phút/phiên. Xuất scenario, consent, SUS tiếng Việt và probe questions.
```

Skill **không tự chạy test** — nó ép quy trình (inventory → generate → review → gap-fill; objectives → scenario → instruments → pilot → conduct → analyse) và cung cấp template. Việc thực thi, chụp evidence và review vẫn do sinh viên làm.

## Demo video (YouTube unlisted)

Kịch bản quay 3–5 phút:

1. **0:00–0:30** — Giới thiệu 2 skill, vị trí file, lý do tách thành skill (tái sử dụng, ép quy trình, có guardrail chống bịa kết quả).
2. **0:30–1:30** — Cài skill vào `.opencode/skills/`, mở OpenCode, gõ prompt `@skill-gui-checklist-tester ...`, cho thấy agent đọc `SKILL.md` + `references/ia-taxonomy.md`.
3. **1:30–2:30** — Chạy `node scripts/checklist_runner.js`, mở `GUI_Checklist.xlsx` + một screenshot Failed, giải thích guardrail "chỉ chụp item Failed" và "không bịa kết quả".
4. **2:30–3:30** — Gõ prompt `@skill-usability-evaluation ...`, mở `usability/scenario.md` + `sus_vi.md` để thấy template được sinh đúng.
5. **3:30–4:00** — Nêu giới hạn: skill không thay thế người tham gia thật, không tự quyết severity; kết luận.

Video link điền vào `README.md` §5 và `Main_Report.md` §5.
