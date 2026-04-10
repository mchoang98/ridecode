# Bài tập tự luyện

### Bài tập 1: Phương tiện giao thông

**Yêu cầu:**

1. Tạo abstract class `Vehicle` có các abstract method: `start_engine()` và `move()`.
2. Tạo các lớp con `Car`, `Bike`, `Boat` kế thừa từ `Vehicle`, implement đầy đủ các phương thức.
3. Tạo danh sách chứa các đối tượng khác nhau và gọi phương thức `start_engine()` và `move()` cho mỗi đối tượng.

---

### Bài tập 2: Hình học cơ bản

**Yêu cầu:**

1. Tạo abstract class `Shape` với các abstract method: `area()` và `perimeter()`.
2. Tạo các lớp `Circle`, `Rectangle`, `Square`, `Triangle` kế thừa từ `Shape`, mỗi lớp có constructor riêng để nhận thông tin hình học.
3. Viết chương trình in ra diện tích và chu vi của từng hình.

---

### Bài tập 3: Hệ thống thanh toán

**Yêu cầu:**

1. Tạo abstract class `PaymentMethod` có các abstract method: `authenticate()` và `pay(amount)`.
2. Tạo các lớp con `CreditCard`, `PayPal`, `CryptoWallet` và override các phương thức.
3. Viết chương trình giả lập quá trình thanh toán bằng các phương thức khác nhau.

---

### Bài tập 4: Quản lý nhân sự

**Yêu cầu:**

1. Tạo abstract class `Employee` có:

   * Thuộc tính: `name`, `id`
   * Abstract method: `calculate_salary()`
2. Tạo các lớp con `FullTimeEmployee`, `PartTimeEmployee`, `Freelancer`
3. Mỗi lớp tự tính lương theo công thức khác nhau.
4. Tạo danh sách nhân viên, in ra tên và lương từng người.

---

### Bài tập 5: Trình phát media

**Yêu cầu:**

1. Tạo abstract class `MediaPlayer` với các abstract method: `play()`, `pause()`, `stop()`.
2. Tạo các lớp con `MP3Player`, `VideoPlayer`, `StreamingPlayer`.
3. Tạo menu điều khiển đơn giản qua terminal cho người dùng chọn loại media và thao tác.

---

### Bài tập 6: Trình quản lý plugin

**Yêu cầu:**

1. Tạo abstract class `Plugin` với các abstract method: `load()`, `execute()`, `unload()`.
2. Viết một plugin tên `SpellCheckPlugin` và một cái khác là `AutoSavePlugin`.
3. Viết trình quản lý (plugin manager) cho phép:

   * Đăng ký plugin
   * Gọi `load`, `execute`, `unload` tuần tự

