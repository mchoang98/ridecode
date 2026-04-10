# BÀI 10-1: ĐỌC VÀ GHI FILE TRONG PYTHON (CHI TIẾT)

---

## 1. Giới thiệu về file trong Python

File là nơi lưu trữ dữ liệu trên ổ đĩa cứng hoặc bộ nhớ ngoài. Python cung cấp các phương thức để **đọc** (lấy dữ liệu từ file) và **ghi** (lưu dữ liệu vào file) rất thuận tiện.

---

## 2. Mở file bằng hàm `open()`

* Cú pháp:

```python
file = open("ten_file.txt", "mode")
```

* `mode` (chế độ) có các dạng phổ biến:

| Mode  | Ý nghĩa                                                                      |
| ----- | ---------------------------------------------------------------------------- |
| `"r"` | Mở file để đọc (read)                                                        |
| `"w"` | Mở file để ghi, nếu file tồn tại sẽ xóa dữ liệu cũ (write)                   |
| `"a"` | Mở file để ghi thêm (append), dữ liệu cũ được giữ lại                        |
| `"b"` | Mở file ở chế độ nhị phân (binary), kết hợp với các mode trên (ví dụ `"rb"`) |

---

## 3. Cách đọc file trong Python

### 3.1. Đọc toàn bộ nội dung file

```python
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
```

* Hàm `read()` đọc toàn bộ dữ liệu trong file thành một chuỗi (string).
* Câu lệnh `with` đảm bảo sau khi đọc xong file sẽ được tự động đóng, tránh lỗi không đóng file.

### 3.2. Đọc từng dòng một với `readline()`

```python
with open("example.txt", "r") as file:
    line1 = file.readline()
    print(line1)
    line2 = file.readline()
    print(line2)
```

* Mỗi lần gọi `readline()` đọc một dòng trong file.

### 3.3. Đọc tất cả dòng và trả về danh sách bằng `readlines()`

```python
with open("example.txt", "r") as file:
    lines = file.readlines()
    for line in lines:
        print(line.strip())  # strip() để bỏ ký tự xuống dòng
```

---

## 4. Cách ghi file trong Python

### 4.1. Ghi đè file (viết mới)

```python
with open("output.txt", "w") as file:
    file.write("Dòng đầu tiên.\n")
    file.write("Dòng thứ hai.\n")
```

* `"w"` sẽ tạo file mới nếu chưa có hoặc xóa hết nội dung cũ nếu file đã tồn tại.
* `\n` dùng để xuống dòng.

### 4.2. Ghi thêm vào file (không xóa dữ liệu cũ)

```python
with open("output.txt", "a") as file:
    file.write("Dòng mới được thêm vào.\n")
```

---

## 5. Một số lưu ý khi làm việc với file

* Luôn sử dụng cú pháp `with open(...) as file:` để tự động đóng file sau khi thao tác.
* Nếu mở file với `"r"` mà file không tồn tại sẽ báo lỗi `FileNotFoundError`.
* Khi đọc file, dữ liệu trả về là kiểu chuỗi (string).
* Khi ghi file, dữ liệu phải là chuỗi. Nếu muốn ghi các kiểu dữ liệu khác (số, list...), cần chuyển thành chuỗi bằng hàm `str()`.

---

## 6. Ví dụ tổng hợp

```python
# Viết dữ liệu vào file
with open("data.txt", "w") as f:
    f.write("Hello Python!\n")
    f.write("Học cách đọc ghi file.\n")

# Đọc dữ liệu từ file
with open("data.txt", "r") as f:
    content = f.read()
    print("Nội dung file:")
    print(content)
```

---

## 7. Bài tập thực hành

### Bài tập 1: Ghi câu hỏi do người dùng nhập vào file

Viết chương trình cho phép người dùng nhập 3 câu hỏi, lưu chúng vào file `questions.txt`.

### Bài tập 2: Đọc và in ra câu hỏi

Viết chương trình đọc file `questions.txt` và in từng câu hỏi ra màn hình, mỗi câu trên một dòng.

---

**Gợi ý cách làm bài tập:**

```python
# Bài tập 1: Ghi 3 câu hỏi vào file
with open("questions.txt", "w") as f:
    for i in range(3):
        q = input(f"Nhập câu hỏi thứ {i+1}: ")
        f.write(q + "\n")

# Bài tập 2: Đọc và in câu hỏi
with open("questions.txt", "r") as f:
    lines = f.readlines()
    for line in lines:
        print(line.strip())
```

---

## 8. Tóm tắt

| Công việc           | Cú pháp                   | Mô tả                                   |
| ------------------- | ------------------------- | --------------------------------------- |
| Mở file để đọc      | `open("file.txt", "r")`   | Mở file để đọc dữ liệu                  |
| Mở file để ghi      | `open("file.txt", "w")`   | Ghi đè nội dung file                    |
| Mở file để ghi thêm | `open("file.txt", "a")`   | Thêm dữ liệu vào cuối file              |
| Đọc toàn bộ file    | `file.read()`             | Đọc hết nội dung file                   |
| Đọc một dòng        | `file.readline()`         | Đọc từng dòng một                       |
| Đọc tất cả dòng     | `file.readlines()`        | Trả về list các dòng                    |
| Ghi nội dung        | `file.write("chuỗi")`     | Ghi chuỗi vào file                      |
| Đóng file tự động   | `with open(...) as file:` | Quản lý file an toàn, tự động đóng file |

