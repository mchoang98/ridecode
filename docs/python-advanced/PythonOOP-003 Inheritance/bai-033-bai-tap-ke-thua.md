# Bài 033 - Bài tập kế thừa

**Đề bài:**

Hãy xây dựng hệ thống quản lý thư viện với các yêu cầu sau:

1. Tạo một lớp `Item` gồm các thuộc tính:

   * `id`: mã tài liệu
   * `title`: tiêu đề
   * `author`: tác giả

2. Tạo lớp `Book` kế thừa từ `Item`, có thêm:

   * `pages`: số trang

3. Tạo lớp `DVD` kế thừa từ `Item`, có thêm:

   * `duration`: thời lượng (phút)

4. Tạo lớp `Magazine` kế thừa từ `Item`, có thêm:

   * `issue`: số phát hành

5. Tất cả các lớp đều có phương thức `printInfo()` để in ra đầy đủ thông tin.

**Yêu cầu:**

* Sử dụng `super()` để tái sử dụng constructor lớp cha.
* Ghi đè phương thức `printInfo()` tại các lớp con.
* Tạo danh sách chứa nhiều đối tượng (book, dvd, magazine) và in ra toàn bộ thông tin bằng vòng lặp.

---

**Gợi ý đầu ra mong đợi:**

```
Book: [ID: B001] Title: Lập trình Python | Author: Nguyễn Văn A | Pages: 320
DVD: [ID: D101] Title: Học Python qua phim | Author: Lê Thị B | Duration: 90 minutes
Magazine: [ID: M301] Title: Công nghệ hôm nay | Author: Trần C | Issue: #45
```

---

### **Bài tập 2: Mô phỏng hệ thống giáo dục**

**Đề bài:**

Thiết kế một hệ thống phân cấp cho các loại người trong trường học:

1. Lớp `Person`: có thuộc tính `name`, `age`, và phương thức `introduce()`.

2. Lớp `Student` kế thừa từ `Person`, thêm thuộc tính `student_id`, `major`, và ghi đè `introduce()` để hiển thị thông tin sinh viên.

3. Lớp `Teacher` kế thừa từ `Person`, thêm thuộc tính `teacher_id`, `subject`, và cũng ghi đè `introduce()`.

4. Lớp `TeachingAssistant` kế thừa **đa cấp** từ `Student` và `Teacher`. Đây là sinh viên có vai trò trợ giảng.

**Yêu cầu:**

* Cài đặt đầy đủ constructor với `super()`.
* Áp dụng `Method Resolution Order (MRO)` khi gọi `introduce()` từ `TeachingAssistant`.
* Khởi tạo một vài đối tượng cho mỗi lớp và gọi phương thức `introduce()` để kiểm tra kết quả.

---

**Gợi ý đầu ra mong đợi:**

```
Hi, I'm Nam, 20 years old. I'm a Computer Science student, ID: SV123.
Hi, I'm Cô Hương, 35 years old. I teach Mathematics, ID: GV456.
Hi, I'm An, 22 years old. I'm a Computer Science student and also a teaching assistant for the course Programming 101.
```


