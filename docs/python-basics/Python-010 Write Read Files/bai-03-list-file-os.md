# 🧾 10-3: ĐỌC – GHI FILE TRONG PYTHON (KẾT HỢP MODULE `os`)

## 1. Tổng quan

Trong Python, làm việc với file thường đi kèm 3 nhóm thao tác chính:

* Kiểm tra và quản lý file/thư mục (module `os`)
* Đọc và ghi nội dung file (file I/O)
* Tìm kiếm và xử lý file dựa trên điều kiện (`in`, `not in`)

---

## 2. Module `os` – Quản lý file và thư mục

### 2.1 Import module `os`

```python
import os
```

---

### 2.2 Liệt kê file trong thư mục

```python
files = os.listdir("data")
print(files)
```

* Trả về danh sách **tên file và thư mục con**
* Không phân biệt file hay folder

---

### 2.3 Kiểm tra file / thư mục có tồn tại hay không

```python
if os.path.exists("data/users.txt"):
    print("File tồn tại")
else:
    print("File không tồn tại")
```

---

### 2.4 Phân biệt file và thư mục

```python
os.path.isfile("data/users.txt")
os.path.isdir("data")
```

---

### 2.5 Xóa file

```python
if os.path.exists("temp.txt"):
    os.remove("temp.txt")
```

Lưu ý: `os.remove()` chỉ xóa file, không xóa thư mục.

---

## 3. Membership Operator: `in` và `not in`

### 3.1 Kiểm tra phần tử trong danh sách

```python
files = os.listdir("data")

if "users.txt" in files:
    print("Tìm thấy file users.txt")
```

---

### 3.2 Kiểm tra chuỗi trong nội dung file

```python
if "admin" in content:
    print("Có chứa từ admin")
```

---

### 3.3 `not in`

```python
if "error" not in content:
    print("Không có lỗi")
```

---

## 4. Đọc file trong Python

### 4.1 Mở và đọc toàn bộ file

```python
with open("data/users.txt", "r", encoding="utf-8") as f:
    content = f.read()
```

---

### 4.2 Đọc từng dòng

```python
with open("data/users.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())
```

---

### 4.3 Đọc file thành danh sách dòng

```python
with open("data/users.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()
```

---

## 5. Ghi file trong Python

### 5.1 Ghi mới (ghi đè)

```python
with open("log.txt", "w", encoding="utf-8") as f:
    f.write("Hello Python\n")
```

---

### 5.2 Ghi nối tiếp

```python
with open("log.txt", "a", encoding="utf-8") as f:
    f.write("New line\n")
```

---

## 6. Thực hành: Tìm kiếm file và nội dung

### 6.1 Tìm file theo tên trong thư mục

```python
keyword = "user"
files = os.listdir("data")

for file in files:
    if keyword in file:
        print("Tìm thấy:", file)
```

---

### 6.2 Tìm nội dung trong nhiều file

```python
folder = "data"
keyword = "admin"

for file in os.listdir(folder):
    path = os.path.join(folder, file)

    if os.path.isfile(path):
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
            if keyword in content:
                print("File chứa keyword:", file)
```

---

### 6.3 Tìm file không chứa keyword

```python
if keyword not in content:
    print("File KHÔNG chứa:", file)
```

---

## 7. Tổng kết kiến thức

* `os.listdir()` dùng để liệt kê file
* `os.path.exists()` kiểm tra tồn tại
* `os.remove()` xóa file
* `in / not in` dùng để tìm chuỗi hoặc phần tử
* `with open()` là cách đọc/ghi file an toàn nhất

---

## 8. Câu hỏi thực hành (5 câu)

1. Viết chương trình kiểm tra file `config.txt` có tồn tại không, nếu không thì tạo file đó.
2. Liệt kê tất cả file `.txt` trong thư mục `logs`.
3. Đọc file `users.txt` và in ra các dòng **có chứa** từ `"admin"`.
4. Tìm tất cả file trong thư mục `data` **không chứa** từ `"error"`.
5. Ghi chương trình xóa tất cả file `.log` trong thư mục nếu file đó tồn tại.

