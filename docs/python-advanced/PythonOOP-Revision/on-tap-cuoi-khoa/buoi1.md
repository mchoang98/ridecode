# Bài tập 1: Quản lý kênh YouTube

**Mô tả:**
YouTube là một nền tảng chia sẻ video trực tuyến, cho phép người dùng tải lên, xem và chia sẻ video miễn phí. Một công ty truyền thông cần xây dựng hệ thống để quản lý thông tin các kênh YouTube. Công ty có 2 loại kênh chính: **kênh âm nhạc** và **kênh nấu ăn**.

### Yêu cầu chi tiết

1. **Lớp cha (Kênh YouTube):**

   * Thuộc tính:

     * Tên kênh
     * Tên chủ kênh
     * Số lượng người đăng ký

   * Phương thức:

     * Hàm khởi tạo
     * Hàm hiển thị thông tin kênh

2. **Lớp con Kênh Âm Nhạc (MusicChannel):**

   * Thuộc tính bổ sung:

     * Số lượng bài hát đạt trên 1 triệu lượt xem
     * Số lượng hợp đồng quảng cáo

   * Phương thức:

     * Tính doanh thu theo công thức:

       $$
       Doanh\ thu = (số\ bài\ hát\ trên\ 1\ triệu\ view \times 1000) + (số\ hợp\ đồng\ quảng\ cáo \times 500)
       $$
     * Hiển thị thông tin chi tiết kênh (kế thừa từ lớp cha và thêm doanh thu).

3. **Lớp con Kênh Nấu Ăn (CookingChannel):**

   * Thuộc tính bổ sung:

     * Tổng lượt xem của kênh

   * Phương thức:

     * Hiển thị thông tin chi tiết kênh (kế thừa từ lớp cha).

4. **Chương trình chính:**

   * Tạo một danh sách chứa nhiều kênh YouTube (bao gồm cả âm nhạc và nấu ăn).
   * Cho phép nhập dữ liệu cho từng kênh.
   * Hiển thị danh sách thông tin tất cả các kênh.
   * Đối với kênh âm nhạc, hiển thị thêm doanh thu tính được.

