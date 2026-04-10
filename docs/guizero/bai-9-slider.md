# Bài 9: Slider trong guizero

## 1. Slider là gì?

`Slider` là thanh kéo dùng để chọn một giá trị số trong khoảng cho trước.
Ứng dụng trong chọn mức âm lượng, độ sáng, kích thước, giá trị từ 0–100, v.v.

---

## 2. Cú pháp tạo Slider

```python
from guizero import App, Slider

app = App()
slider = Slider(app)
app.display()
```

Slider mặc định có giá trị từ **0 đến 100**.

---

## 3. Các thuộc tính quan trọng

### ➤ Lấy và đặt giá trị

```python
value = slider.value
slider.value = 50
```

### ➤ Thay đổi khoảng giá trị

```python
slider = Slider(app, start=1, end=10)
```

### ➤ Thay đổi hướng Slider

```python
slider = Slider(app, horizontal=False)   # dọc
```

### ➤ Kiểm soát kích thước

```python
slider.width = 200
slider.height = 20
```

---

## 4. Sự kiện khi giá trị thay đổi

```python
def changed():
    print("Giá trị:", slider.value)

slider = Slider(app, command=changed)
```

---

## 5. Ví dụ đầy đủ

```python
from guizero import App, Slider, Text

app = App(title="Demo Slider")

Text(app, "Chọn mức âm lượng:")
vol = Slider(app, start=0, end=100)

def show_value():
    print("Âm lượng:", vol.value)

vol.repeat(100, show_value)  # Cập nhật liên tục

app.display()
```

---

# 🎯 BÀI TẬP LUYỆN TẬP

## **Bài tập 1 – Điều chỉnh độ sáng**

Tạo Slider từ 0 → 100.
Hiển thị giá trị mỗi khi người dùng kéo.
Gợi ý: dùng `command=` để in giá trị ra console.

---

## **Bài tập 2 – Tăng giảm kích thước chữ**

* Tạo Text hiển thị `"Xin chào"`.
* Tạo Slider (10 → 50).
* Khi kéo Slider → thay đổi kích thước font chữ của Text theo giá trị Slider.

---

## **Bài tập 3 – Tính toán tự động**

Tạo 2 Slider:

* Slider A: 0 → 50
* Slider B: 0 → 50
  Tạo Text hiển thị **A + B = ?**
  Khi thay đổi bất kỳ Slider nào → tự động cập nhật kết quả.
