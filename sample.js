// In /api/example.js on Vercel
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle POST request
    const data = req.body;
    // Process data
    res.status(200).json({ message: 'Data received', data });
  } else {
    // Handle other request methods if needed
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
