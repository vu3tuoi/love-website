const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// 🟢 Khi bấm YES → gửi dữ liệu lên server + chuyển trang
yesBtn.addEventListener("click", async () => {

    // Gửi dữ liệu lên server API Vercel
    await fetch("/api/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            answer: "yes",
            time: new Date().toISOString()
        })
    });

    // Chuyển sang trang khác
    window.location.href = "love.html";
});

// 🔴 Nút NO chạy trốn mỗi khi di chuột vào
noBtn.addEventListener("mouseenter", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
});
