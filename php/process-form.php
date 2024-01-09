<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy giá trị từ biểu mẫu
    $name = $_POST['name'];
    $email = $_POST['email'];
    // Lấy giá trị từ các trường input khác

    // Gửi email
    $to = "photh.21it@vku.udn.vn"; // Địa chỉ email của bạn
    $subject = "New Form Submission";
    $message = "Name: $name\nEmail: $email\n"; // Thêm các trường input khác vào nội dung email

    // Sử dụng hàm mail để gửi email
    mail($to, $subject, $message);

    // Có thể thêm xử lý khác sau khi gửi email thành công
}
?>
