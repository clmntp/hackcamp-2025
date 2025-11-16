import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5174;

app.use(cors());
app.use(express.json());

const dataDir = path.join(__dirname, 'src', 'data');
const studentsPath = path.join(dataDir, 'students.json');
const clubsPath = path.join(dataDir, 'clubs.json');

function readJson(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Failed to read ${filePath}`, err);
    return [];
  }
}

function writeJson(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error(`Failed to write ${filePath}`, err);
    return false;
  }
}

function generateId(prefix) {
  const random = Math.random().toString(36).slice(2, 8);
  return `${prefix}_${Date.now()}_${random}`;
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.get('/api/students', (_req, res) => {
  const students = readJson(studentsPath);
  res.json(students);
});

app.get('/api/clubs', (_req, res) => {
  const clubs = readJson(clubsPath);
  res.json(clubs);
});

// Create a club (demo: name, email, password)
app.post('/api/clubs', (req, res) => {
  const { name, email, password } = req.body ?? {};
  if (!name) {
    return res.status(400).json({ error: 'name is required' });
  }
  const clubs = readJson(clubsPath);
  const newClub = {
    id: generateId('club'),
    name,
    // Store simple contact details; expand later as needed
    contact: {
      email: email ?? '',
      website: ''
    },
    // For demo purposes only; do NOT store plain passwords in production.
    password: password ?? '',
    category: '',
    description: '',
    leaders: [],
    members: [],
    meetings: {
      day: '',
      time: '',
      location: ''
    }
  };
  clubs.push(newClub);
  const ok = writeJson(clubsPath, clubs);
  if (!ok) {
    return res.status(500).json({ error: 'Failed to persist club' });
  }
  return res.status(201).json(newClub);
});

app.post('/api/students', (req, res) => {
  const { firstName, lastName, email, password, gradYear, major, clubs } = req.body ?? {};

  if (!firstName || !lastName) {
    return res.status(400).json({ error: 'firstName and lastName are required' });
  }

  const students = readJson(studentsPath);

  const newStudent = {
    id: generateId('stu'),
    firstName,
    lastName,
    email: email ?? '',
    // For demo purposes only; do NOT store plain passwords in production.
    password: password ?? '',
    gradYear: Number.isInteger(gradYear) ? gradYear : null,
    major: major ?? '',
    clubs: Array.isArray(clubs) ? clubs : []
  };

  students.push(newStudent);
  const ok = writeJson(studentsPath, students);
  if (!ok) {
    return res.status(500).json({ error: 'Failed to persist student' });
  }
  return res.status(201).json(newStudent);
});

// Basic login for demo purposes ONLY (plain-text password comparison)
app.post('/api/login', (req, res) => {
  const { email, password } = req.body ?? {};
  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required' });
  }
  const students = readJson(studentsPath);
  const normalizedEmail = String(email).toLowerCase().trim();
  const user = students.find(
    (s) => String(s.email || '').toLowerCase().trim() === normalizedEmail
  );
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  if ((user.password || '') !== String(password)) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  const token = generateId('sess');
  return res.json({
    ok: true,
    token,
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    }
  });
});

// Startup diagnostics
const nodeVersion = process.version;
console.log('[startup] Node version:', nodeVersion);
console.log('[startup] Expected data directory:', dataDir);
console.log('[startup] students.json:', studentsPath, fs.existsSync(studentsPath) ? '(exists)' : '(missing)');
console.log('[startup] clubs.json:', clubsPath, fs.existsSync(clubsPath) ? '(exists)' : '(missing)');

const server = app.listen(PORT, () => {
  console.log(`[startup] Backend listening on http://localhost:${PORT}`);
});

server.on('error', (err) => {
  console.error('[startup] Server failed to start:', err?.code || err?.message, err);
});

process.on('uncaughtException', (err) => {
  console.error('[fatal] Uncaught exception:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('[fatal] Unhandled promise rejection:', reason);
});


