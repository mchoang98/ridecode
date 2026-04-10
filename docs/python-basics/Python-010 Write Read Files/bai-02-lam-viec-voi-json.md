# 🧾 10-2: LÀM VIỆC VỚI JSON TRONG PYTHON

### 🔎 1. JSON là gì?

**JSON (JavaScript Object Notation)** là một định dạng nhẹ dùng để lưu trữ và trao đổi dữ liệu.
Nó rất phổ biến khi làm việc với API, web và lưu trữ dữ liệu cấu trúc.

Ví dụ JSON:

```json
{
    "name": "Alice",
    "age": 25,
    "skills": ["Python", "HTML"]
}
```

---

### 🧰 2. Thư viện `json` trong Python

Python cung cấp sẵn thư viện **`json`** để làm việc với dữ liệu JSON:

| Chức năng     | Hàm sử dụng                    |
| ------------- | ------------------------------ |
| Python → JSON | `json.dumps()` / `json.dump()` |
| JSON → Python | `json.loads()` / `json.load()` |

---

### 🔄 3. Chuyển đổi giữa Python và JSON

#### a. Python → JSON (Serialize)

```python
import json

person = {
    "name": "Alice",
    "age": 25,
    "skills": ["Python", "HTML"]
}

# Chuyển đổi thành chuỗi JSON
json_string = json.dumps(person)
print(json_string)
```

#### b. JSON → Python (Deserialize)

```python
import json

json_string = '{"name": "Alice", "age": 25, "skills": ["Python", "HTML"]}'

# Chuyển về đối tượng Python
person = json.loads(json_string)
print(person["name"])
```

---

### 📁 4. Đọc và ghi file JSON

#### a. Ghi vào file (`json.dump()`)

```python
import json

data = {"user": "admin", "password": "123456"}

with open("data.json", "w") as f:
    json.dump(data, f)
```

#### b. Đọc từ file (`json.load()`)

```python
import json

with open("data.json", "r") as f:
    data = json.load(f)

print(data["user"])
```

---

### ⚠️ 5. Một số lưu ý

* JSON chỉ hỗ trợ kiểu dữ liệu: `str`, `int`, `float`, `bool`, `None`, `list`, `dict`.
* Khi đọc file JSON cần đảm bảo file đúng định dạng.
* Có thể thêm `indent` để format đẹp:

```python
json.dump(data, f, indent=4)
```

---

### 🧪 6. Bài tập thực hành

**Yêu cầu:**
Viết chương trình lưu danh sách sinh viên vào file `students.json`, mỗi sinh viên gồm `name` và `age`. Sau đó, đọc lại file và in ra danh sách sinh viên theo dòng.

**Gợi ý thực hiện:**

1. Tạo danh sách sinh viên là một list các dict.
2. Ghi danh sách vào file JSON.
3. Đọc lại file JSON.
4. Duyệt và in ra từng sinh viên.

```python
# Bước 1: Tạo danh sách sinh viên

# Bước 2: Ghi danh sách vào file students.json

# Bước 3: Đọc lại từ file

# Bước 4: In ra thông tin từng sinh viên


