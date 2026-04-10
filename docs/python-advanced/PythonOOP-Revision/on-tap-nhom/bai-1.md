# QUẢN LÝ ĐIỂM SỐ TRẬN ĐẤU THỂ THAO

### 1. Mục tiêu

Thiết kế chương trình quản lý điểm số cho các trận đấu thể thao, cho phép người dùng nhập thông tin các đội, vận động viên, sự kiện ghi điểm và thống kê kết quả trận đấu. Yêu cầu sử dụng đầy đủ các khái niệm của Lập trình Hướng đối tượng.

---

### 2. Danh sách class cần tạo

#### Class `Player`

**Mục đích**: Quản lý thông tin từng vận động viên.

**Thuộc tính**:

* `player_id`: int – Mã vận động viên
* `name`: str – Tên vận động viên
* `number`: int – Số áo
* `position`: str – Vị trí thi đấu
* `dob`: str – Ngày sinh
* `performance_score`: float – Điểm phong độ

**Phương thức**:

* `__init__()`: khởi tạo thông tin vận động viên
* `update_performance(score: float)`: cập nhật điểm phong độ
* `get_age()`: trả về tuổi dựa trên ngày sinh

---

#### Class `Team`

**Mục đích**: Quản lý thông tin đội bóng và danh sách vận động viên.

**Thuộc tính**:

* `team_id`: int – Mã đội
* `name`: str – Tên đội
* `coach`: str – Tên huấn luyện viên
* `players`: List\[Player] – Danh sách cầu thủ

**Phương thức**:

* `__init__()`: khởi tạo đội
* `add_player(player: Player)`: thêm cầu thủ vào đội
* `remove_player(player_id: int)`: xóa cầu thủ khỏi đội theo mã
* `get_player_by_number(number: int)`: trả về cầu thủ có số áo tương ứng
* `get_total_players()`: trả về tổng số cầu thủ trong đội

---

#### Class `ScoreEvent`

**Mục đích**: Ghi nhận một sự kiện ghi điểm trong trận đấu.

**Thuộc tính**:

* `minute`: int – Thời điểm ghi điểm (phút)
* `team`: Team – Đội ghi điểm
* `player`: Player | None – Người ghi điểm (nếu có)
* `score_type`: str – Loại điểm: goal, point, spike, v.v.
* `points`: int – Số điểm ghi được

**Phương thức**:

* `__init__()`: khởi tạo sự kiện ghi điểm
* `get_description()`: trả về chuỗi mô tả sự kiện

---

#### Class `Match`

**Mục đích**: Quản lý thông tin và kết quả một trận đấu.

**Thuộc tính**:

* `match_id`: int – Mã trận đấu
* `team1`: Team – Đội thứ nhất
* `team2`: Team – Đội thứ hai
* `date`: str – Ngày thi đấu
* `location`: str – Địa điểm
* `score_events`: List\[ScoreEvent] – Danh sách sự kiện ghi điểm

**Phương thức**:

* `__init__()`: khởi tạo trận đấu
* `add_score_event(event: ScoreEvent)`: thêm sự kiện ghi điểm vào danh sách
* `get_score()`: trả về tổng điểm của hai đội dạng tuple (score\_team1, score\_team2)
* `get_winner()`: trả về tên đội thắng, hoặc "Draw"
* `print_match_summary()`: in thông tin tổng hợp trận đấu

---

#### Class `SportMatchManager`

**Mục đích**: Quản lý toàn bộ hệ thống các trận đấu thể thao.

**Thuộc tính**:

* `teams`: List\[Team] – Danh sách đội
* `matches`: List\[Match] – Danh sách trận đấu

**Phương thức**:

* `add_team(team: Team)`: thêm đội mới
* `get_team_by_name(name: str)`: tìm đội theo tên
* `schedule_match(match: Match)`: thêm trận mới
* `list_matches()`: hiển thị danh sách các trận đã diễn ra
* `get_top_scorer()`: tìm vận động viên ghi nhiều điểm nhất (bonus)
* `get_highest_scoring_match()`: trận đấu có tổng điểm cao nhất (bonus)

---

### 3. Yêu cầu lập trình

* Sử dụng `@property` để truy cập dữ liệu hợp lý (ví dụ: tuổi của cầu thủ).
* Dùng kế thừa để mở rộng `Match` thành `FootballMatch`, `BasketballMatch`, v.v. (tuỳ chọn).
* Có thể dùng dictionary hoặc danh sách để lưu trữ các đối tượng.

---

### 4. Gợi ý triển khai

#### Ví dụ sử dụng:

```python
# Khởi tạo cầu thủ
player1 = Player(1, "John", 10, "Striker", "2000-01-01", 8.5)
player2 = Player(2, "Mike", 7, "Midfielder", "1998-03-22", 7.0)

# Tạo đội và thêm cầu thủ
teamA = Team(1, "Lions", "Coach A")
teamA.add_player(player1)
teamA.add_player(player2)

# Tạo trận đấu
match = Match(1001, teamA, teamB, "2025-07-20", "National Stadium")

# Ghi sự kiện điểm
event = ScoreEvent(12, teamA, player1, "goal", 1)
match.add_score_event(event)

# Tính kết quả
print(match.get_score())  # (1, 0)
print(match.get_winner())  # Lions
```

---

### 5. Đầu ra mong muốn

* Hiển thị trận đấu với đầy đủ thông tin đội, điểm số, người ghi điểm.
* Hiển thị danh sách các trận đấu, thống kê tổng điểm.
* Chạy chương trình qua console hoặc menu văn bản (nếu muốn).



--------------------------------


Sure. Below is the **English version of the detailed OOP assignment requirements** for the topic **"Sports Match Score Management"**. It includes a clear breakdown of the required classes, attributes, and methods for use in teaching, assignments, or system design.

---

## DETAILED REQUIREMENTS – SPORTS MATCH SCORE MANAGEMENT

### 1. Objective

Design an object-oriented program to manage scores of sports matches. The system should allow users to input teams, players, scoring events, and generate results/statistics. Object-Oriented Programming principles must be properly applied.

---

### 2. Required Classes

#### Class `Player`

**Purpose**: Manage player information.

**Attributes**:

* `player_id`: int – Player ID
* `name`: str – Player name
* `number`: int – Jersey number
* `position`: str – Playing position
* `dob`: str – Date of birth
* `performance_score`: float – Performance rating

**Methods**:

* `__init__()`: initialize player info
* `update_performance(score: float)`: update performance rating
* `get_age()`: calculate player age from date of birth

---

#### Class `Team`

**Purpose**: Manage team information and player list.

**Attributes**:

* `team_id`: int – Team ID
* `name`: str – Team name
* `coach`: str – Head coach
* `players`: List\[Player] – List of players

**Methods**:

* `__init__()`: initialize team
* `add_player(player: Player)`: add a player to the team
* `remove_player(player_id: int)`: remove a player by ID
* `get_player_by_number(number: int)`: find player by jersey number
* `get_total_players()`: return number of players in team

---

#### Class `ScoreEvent`

**Purpose**: Represent a scoring event during a match.

**Attributes**:

* `minute`: int – Time of scoring (in minutes)
* `team`: Team – The team that scored
* `player`: Player | None – Player who scored (if applicable)
* `score_type`: str – Type of score: goal, point, spike, etc.
* `points`: int – Number of points scored

**Methods**:

* `__init__()`: initialize event
* `get_description()`: return a description string of the event

---

#### Class `Match`

**Purpose**: Represent a sports match and manage its outcome.

**Attributes**:

* `match_id`: int – Match ID
* `team1`: Team – First team
* `team2`: Team – Second team
* `date`: str – Date of match
* `location`: str – Match location
* `score_events`: List\[ScoreEvent] – List of scoring events

**Methods**:

* `__init__()`: initialize match
* `add_score_event(event: ScoreEvent)`: add a scoring event
* `get_score()`: return total score of both teams as a tuple (team1\_score, team2\_score)
* `get_winner()`: return the name of the winning team or "Draw"
* `print_match_summary()`: print a match summary with all events

---

#### Class `SportMatchManager`

**Purpose**: Manage all teams and matches in the system.

**Attributes**:

* `teams`: List\[Team] – List of teams
* `matches`: List\[Match] – List of matches

**Methods**:

* `add_team(team: Team)`: add a new team
* `get_team_by_name(name: str)`: find a team by name
* `schedule_match(match: Match)`: add a new match
* `list_matches()`: display all recorded matches
* `get_top_scorer()`: return the top-scoring player (optional)
* `get_highest_scoring_match()`: return the match with the highest total score (optional)

---

### 3. Programming Requirements

* Apply the 4 core OOP principles: **Encapsulation, Inheritance, Polymorphism, Abstraction**.
* Use `@property` decorators where appropriate (e.g., for calculating age).
* Allow future expansion through subclassing (e.g., `FootballMatch`, `BasketballMatch`).
* Use lists or dictionaries to manage collections of objects.

---

### 4. Sample Usage

```python
# Create players
player1 = Player(1, "John", 10, "Striker", "2000-01-01", 8.5)
player2 = Player(2, "Mike", 7, "Midfielder", "1998-03-22", 7.0)

# Create team and add players
teamA = Team(1, "Lions", "Coach A")
teamA.add_player(player1)
teamA.add_player(player2)

# Create match
match = Match(1001, teamA, teamB, "2025-07-20", "National Stadium")

# Record a scoring event
event = ScoreEvent(12, teamA, player1, "goal", 1)
match.add_score_event(event)

# Output match result
print(match.get_score())  # (1, 0)
print(match.get_winner())  # Lions
```

---

### 5. Expected Output Format

```
Match: Lions vs Tigers
Date: 2025-07-20
Location: National Stadium

Score Events:
- 00:12: Lions - Goal by #10 John
- 00:45: Tigers - Goal by #7 Kim
- 00:89: Lions - Goal by #10 John

Final Score:
Lions 2 - 1 Tigers
Winner: Lions
```

---

If you need a UML diagram, full Python implementation, command-line UI, or teaching slides based on this spec — just say the word.
