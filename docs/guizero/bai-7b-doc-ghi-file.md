# BÀI GIẢNG 7b: Đọc – ghi file với ListBox và TextBox trong guizero

## 1. Mục tiêu

Kết hợp:

* **TextBox** để nhập dữ liệu
* **ListBox** để hiển thị danh sách dữ liệu
* **File (txt)** để lưu và đọc lại dữ liệu

Ứng dụng thực tế: danh sách việc cần làm, danh bạ, danh sách sản phẩm…

---

## 2. Ghi dữ liệu từ TextBox vào file

```python
with open("data.txt", "a") as f:
    f.write(textbox.value + "\n")
```

**Lưu ý:**

* Sử dụng `"a"` để **thêm** vào cuối file
* Mỗi mục 1 dòng

---

## 3. Đọc dữ liệu từ file vào ListBox

```python
listbox.clear()
with open("data.txt", "r") as f:
    for line in f:
        listbox.append(line.strip())
```

---

## 4. Xóa mục được chọn và cập nhật lại file

```python
selected = listbox.value
listbox.remove(selected)

# Ghi lại toàn bộ listbox vào file
with open("data.txt", "w") as f:
    for item in listbox.items:
        f.write(item + "\n")
```

---

## 5. Ví dụ đầy đủ – Danh sách việc cần làm

```python
from guizero import App, TextBox, ListBox, PushButton, Text

FILE = "todo.txt"

def load_data():
    listbox.clear()
    try:
        with open(FILE, "r") as f:
            for line in f:
                listbox.append(line.strip())
    except:
        pass

def add_item():
    if txt.value:
        listbox.append(txt.value)
        with open(FILE, "a") as f:
            f.write(txt.value + "\n")
        txt.value = ""

def delete_item():
    if listbox.value:
        item = listbox.value
        listbox.remove(item)

        # Ghi lại file mới
        with open(FILE, "w") as f:
            for i in listbox.items:
                f.write(i + "\n")

app = App(title="Todo List")

Text(app, "Nhập việc cần làm:")
txt = TextBox(app, width=30)

PushButton(app, text="Thêm", command=add_item)

listbox = ListBox(app, width=30, height=10)

PushButton(app, text="Xóa mục đang chọn", command=delete_item)

load_data()

app.display()
```

---

# 🎯 BÀI TẬP LUYỆN TẬP

## **Bài tập 1 – Ghi chú cá nhân**

Yêu cầu:

* TextBox để nhập ghi chú
* ListBox để hiển thị danh sách ghi chú
* Nút “Lưu” → thêm TextBox vào file
* Nút “Tải lại” → đọc lại mọi ghi chú từ file

Tập trung: đọc file và cập nhật ListBox.

---

## **Bài tập 2 – Danh sách học sinh**

Tạo ứng dụng với:

* TextBox nhập tên học sinh
* ListBox hiển thị danh sách
* Nút “Thêm”
* Nút “Xóa”
* Khi khởi động → tự động đọc danh sách từ `students.txt`
* Khi thay đổi → ghi lại vào file

---

## **Bài tập 3 – Tìm kiếm trong file**

Tạo:

* ListBox hiển thị dữ liệu từ file
* TextBox để nhập từ khóa tìm kiếm
* Nút “Tìm” → lọc và chỉ hiển thị các dòng chứa từ khóa
* Nút “Hiển thị tất cả” → tải lại toàn bộ file

Gợi ý: dùng `if keyword in line.lower():`


