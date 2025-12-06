const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", async () => {

    // Gửi dữ liệu về server để lưu log
    await fetch("/api/answer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            answer: "yes",
            time: new Date().toISOString()
        })
    });

    // Chuyển trang ngay lập tức
    window.location.href = "thankyou.html";
});
