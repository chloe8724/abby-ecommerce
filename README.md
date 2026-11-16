# Abby – Delivery & Store Pickup UI

Prototype giao diện lựa chọn giao hàng hoặc nhận tại cửa hàng, phục vụ bài tập môn Phát triển ứng dụng WEB/TMĐT. Đây **không phải website chính thức của Abby**; trang không gửi đơn hàng, thanh toán, gọi API hay đọc tồn kho thực tế.

## Chạy website

1. Giải nén hoặc mở thư mục `abby-pickup-ui`.
2. Mở `index.html` trực tiếp bằng Chrome, Edge hoặc Firefox. Không cần cài đặt, server, backend hay cơ sở dữ liệu.
3. Có thể ngắt Internet sau khi tải trang; font chữ sẽ dùng font dự phòng nếu Google Fonts không truy cập được.

## Cấu trúc

- `index.html`: cấu trúc semantic, giỏ hàng, lựa chọn phương thức nhận, biểu mẫu và tóm tắt đơn.
- `css/style.css`: màu sắc, bố cục, trạng thái tương tác và responsive cho desktop/mobile.
- `js/script.js`: dữ liệu demo sản phẩm/cửa hàng, render giao diện, lọc/tìm cửa hàng, chọn phương thức, cập nhật tóm tắt và xác thực.
- `images/`: bốn hình minh họa SVG tự tạo cho các sản phẩm mẫu.
- `AI_USAGE.md`: ghi chú phạm vi nội dung có AI hỗ trợ và các điểm cần kiểm tra.

## Dữ liệu demo

Giá và số lượng sản phẩm là dữ liệu minh họa, không phải giá Abby đã xác minh. Danh sách cửa hàng, địa chỉ, điện thoại và giờ hoạt động dùng đúng dữ liệu được cung cấp cho bài tập. Dữ liệu này chỉ phục vụ hiển thị prototype và không phản ánh tồn kho hoặc hoạt động thực tế.

## Các tương tác chính

- Chọn radio card để chuyển giữa giao hàng và nhận tại cửa hàng.
- Nhập thông tin giao hàng; số điện thoại được kiểm tra theo định dạng số Việt Nam 10 chữ số, bắt đầu bằng `0`.
- Chọn khu vực TP. Hồ Chí Minh hoặc Hà Nội, tìm cửa hàng theo tên/địa chỉ, rồi chọn hoặc bấm lại để bỏ chọn.
- Nhấn **Xác nhận thông tin nhận hàng** để xem phản hồi inline. Xác nhận thành công chỉ là thông báo demo, không phát sinh đơn.

## Checklist kiểm tra trên Chrome

### Desktop

- [ ] Mở `index.html`, xác nhận CSS, JavaScript và bốn SVG hiển thị.
- [ ] Giỏ hàng có bốn sản phẩm; tổng hàng là **253.000₫**.
- [ ] Chuyển qua lại hai phương thức; chỉ biểu mẫu tương ứng hiển thị và tóm tắt cập nhật.
- [ ] Thử tìm tên/địa chỉ cửa hàng ở từng khu vực; kiểm tra kết quả rỗng.
- [ ] Chọn một cửa hàng, kiểm tra trạng thái được chọn và địa chỉ trong tóm tắt; bấm lần nữa để bỏ chọn.
- [ ] Xác nhận khi thiếu trường/cửa hàng; kiểm tra lỗi hiển thị. Thử số điện thoại hợp lệ và không hợp lệ.
- [ ] Điền thông tin hợp lệ cho mỗi phương thức; xác nhận chỉ hiện thông báo demo.

### Mobile

- [ ] Trong DevTools, chọn chế độ điện thoại (ví dụ 375px); xác nhận không có cuộn ngang.
- [ ] Kiểm tra giỏ hàng, form và cửa hàng xếp một cột; nút đủ lớn để chạm.
- [ ] Thử nhập bằng bàn phím điện thoại và hoàn tất các luồng xác nhận tương tự desktop.

## Giải thích để trình bày

- **HTML:** các vùng nội dung được chia bằng `header`, `main`, `section`, `aside`, `nav` và `footer`; radio input điều khiển hai lựa chọn; form có nhãn liên kết qua `for`/`id`; thông báo trạng thái sử dụng `aria-live`.
- **CSS:** biến trong `:root` giúp quản lý bảng màu; Grid/Flexbox tạo bố cục; các media query tại 800px và 560px đưa trang về một cột và tối ưu form cho màn hình hẹp.
- **JavaScript:** mảng `products` và `stores` là dữ liệu tĩnh. Hàm `renderStores()` lọc theo khu vực/từ khóa và tạo card DOM. Đối tượng `state` ghi nhớ phương thức, khu vực và cửa hàng đang chọn. Hàm `updateSummary()` đồng bộ lựa chọn với phần tóm tắt; `validateDelivery()` kiểm tra trường bắt buộc và số điện thoại trước khi hiển thị phản hồi demo.
