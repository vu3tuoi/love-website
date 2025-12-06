export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const data = req.body;

    console.log("❤️ Someone clicked YES at:", data.time);

    return res.status(200).json({
        status: "received",
        message: "YES clicked logged",
        data: data
    });
}
