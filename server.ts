import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json({ limit: '10mb' }));

// Student Inquiry & Admission Registration
app.post('/api/submit-inquiry', (req, res) => {
  const { name, phone, course, timing, message } = req.body;
  if (!name || !phone || !course) {
    return res.status(400).json({ error: 'Name, phone, and course are required.' });
  }

  const tokenNumber = `AR-${Math.floor(100000 + Math.random() * 900000)}`;
  const timestamp = new Date().toISOString();

  const formattedWhatsAppText = encodeURIComponent(
    `Hello A.R Computer Institute,\nI want admission/inquiry for *${course}*.\nName: ${name}\nPhone: ${phone}\nBatch Time: ${timing || 'Flexible'}\nRegistration Ref: ${tokenNumber}\nAddress: Jankipuram Extension, Near DPS School, Lucknow.`
  );

  return res.json({
    success: true,
    tokenNumber,
    timestamp,
    message: 'Inquiry received successfully! Our admission desk will call you shortly.',
    whatsAppUrl: `https://wa.me/918957409508?text=${formattedWhatsAppText}`,
  });
});

// Setup Vite or static serving
async function setupServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${port}`);
  });
}

setupServer().catch((err) => {
  console.error('Failed to start server:', err);
});
