export default async function handler(req, res) {
    if (req.method === "POST") {
        console.log("Ai đó vừa bấm YES:", req.body);
        return res.status(200).json({ message: "OK" });
    }

    res.status(405).json({ message: "Method not allowed" });
}
