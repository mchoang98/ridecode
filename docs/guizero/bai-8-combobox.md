

# Bài 8: ComboBox trong guizero

## 1. ComboBox là gì?

`ComboBox` là ô chọn dạng thả xuống (dropdown).
Người dùng có thể chọn **một mục** từ danh sách các lựa chọn.
Thường dùng trong form chọn quốc gia, giới tính, loại dữ liệu…

---

## 2. Cú pháp tạo ComboBox

```python
from guizero import App, ComboBox

app = App()
combo = ComboBox(app, options=["A", "B", "C"])
app.display()
```

---

## 3. Các thuộc tính quan trọng

### ➤ Lấy và đặt giá trị

```python
value = combo.value
combo.value = "B"
```

### ➤ Thay đổi danh sách lựa chọn

```python
combo.options = ["Red", "Green", "Blue"]
```

### ➤ Lấy tất cả mục trong ComboBox

```python
all_items = combo.options
```

### ➤ Không cho nhập tay (chỉ cho chọn)

```python
combo = ComboBox(app, options=["A", "B"], editable=False)
```

---

## 4. Sự kiện khi chọn mục

```python
def on_select():
    print("Bạn chọn:", combo.value)

combo = ComboBox(app, options=["A", "B"], command=on_select)
```

---

## 5. Ví dụ đầy đủ

```python
from guizero import App, ComboBox, Text, PushButton, info

app = App(title="Demo ComboBox")

Text(app, "Chọn quốc gia:")

combo = ComboBox(app, options=["Vietnam", "Japan", "USA", "UK"])

def show():
    info("Kết quả", f"Bạn chọn: {combo.value}")

PushButton(app, text="Xác nhận", command=show)

app.display()
```

---

# 🎯 BÀI TẬP LUYỆN TẬP

## **Bài tập 1 – Chọn giới tính**

Tạo ComboBox với các lựa chọn: `"Nam", "Nữ", "Khác"`.
Nút “Xem kết quả” → hiện thông báo sau khi chọn.

---

## **Bài tập 2 – Chọn tháng**

Tạo ComboBox chứa danh sách 12 tháng.
Khi chọn tháng → in ra màn hình console:
**"Tháng bạn chọn là: X"**
(dùng `command=`).

---

## **Bài tập 3 – Thêm mục mới vào ComboBox**

Tạo giao diện gồm:

* TextBox để nhập mục mới
* ComboBox
* Nút “Thêm” → thêm mục vào ComboBox
* Nút “Xoá mục đang chọn” → xóa mục hiện tại khỏi ComboBox

Gợi ý:

```python
combo.options = combo.options + [textbox.value]
```

