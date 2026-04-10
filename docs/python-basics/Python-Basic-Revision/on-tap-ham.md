# 5 bài tập ôn tập Hàm trong python

## **Bài 1 – Quản lý điểm kiểm tra**

**Mô tả:**
Cho danh sách điểm của các học sinh, mỗi học sinh có 3 điểm kiểm tra. Cần xử lý để tính toán thông tin học tập.

**Input:**
Một danh sách gồm các tuple `(tên, điểm1, điểm2, điểm3)`, ví dụ:

```
[
    ("Nam", 6, 7, 8),
    ("Lan", 9, 9, 9),
    ("Bình", 4, 5, 5)
]
```

**Yêu cầu:**

1. Tính điểm trung bình của từng học sinh (làm tròn đến 2 chữ số).
2. Xác định **tên học sinh có điểm trung bình cao nhất**.
3. Liệt kê danh sách các học sinh **đạt** (điểm trung bình ≥ 5).

**Output:**

* Danh sách `(tên, điểm_trung_bình)`
* Tên học sinh điểm trung bình cao nhất
* Danh sách học sinh đạt

---

## **Bài 2 – Thống kê sản phẩm bán hàng**

**Mô tả:**
Một cửa hàng có danh sách các sản phẩm với giá và số lượng bán ra.

**Input:**
Một danh sách gồm các tuple `(tên, giá, số_lượng)`, ví dụ:

```
[
    ("Bút", 5000, 3),
    ("Vở", 12000, 15),
    ("Tẩy", 3000, 1)
]
```

**Yêu cầu:**

1. Tính tổng tiền thu được từ tất cả sản phẩm.
2. Tìm **sản phẩm bán được nhiều nhất** (theo số lượng).
3. Liệt kê các sản phẩm có tổng giá trị (giá × số\_lượng) ≥ 100.000đ.

**Output:**

* Tổng tiền thu được (số nguyên)
* Tên sản phẩm bán nhiều nhất
* Danh sách tên sản phẩm giá trị cao

---

## **Bài 3 – Phân loại số nguyên**

**Mô tả:**
Cho một danh sách số nguyên, cần phân loại theo đặc điểm số học.

**Input:**
Một danh sách các số nguyên, ví dụ:

```
[1, 2, 3, 4, 5, 6, 7]
```

**Yêu cầu:**

1. Tìm danh sách các số nguyên tố.
2. Tìm danh sách các số chẵn.
3. Tính tổng các số lẻ.

**Output:**

* Danh sách số nguyên tố
* Danh sách số chẵn
* Tổng các số lẻ (số nguyên)

---

## **Bài 4 – Quản lý danh sách lớp**

**Mô tả:**
Một trường có danh sách học sinh gồm tên, tuổi và điểm trung bình.

**Input:**
Một danh sách gồm các tuple `(tên, tuổi, điểm)`, ví dụ:

```
[
    ("Nam", 15, 8),
    ("Lan", 14, 9),
    ("Bình", 16, 7)
]
```

**Yêu cầu:**

1. Liệt kê tên các học sinh **từ 15 tuổi trở lên**.
2. Sắp xếp danh sách theo điểm **giảm dần**.
3. Tính điểm trung bình của cả lớp.

**Output:**

* Danh sách tên học sinh từ 15 tuổi trở lên
* Danh sách `(tên, tuổi, điểm)` sắp xếp giảm dần theo điểm
* Điểm trung bình của lớp (số thực)

---

## **Bài 5 – Phân tích tin nhắn**

**Mô tả:**
Cho một tin nhắn dạng chuỗi văn bản, cần phân tích từ vựng trong tin.

**Input:**
Một chuỗi ký tự, ví dụ:

```
"Học Python vui lắm học hoài không chán học mãi"
```

**Yêu cầu:**

1. Đếm tổng số từ trong tin nhắn.
2. Xác định từ xuất hiện nhiều nhất (không phân biệt hoa/thường).
3. Trả về danh sách các từ không trùng nhau (không phân biệt hoa/thường).

**Output:**

* Số lượng từ (số nguyên)
* Từ xuất hiện nhiều nhất (chuỗi)
* Danh sách từ không trùng nhau


