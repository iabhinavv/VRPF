const fs = require('fs');
const path = '/Users/abhinavverma/Downloads/Claude/VRPF/VRPF International/index.html';
let content = fs.readFileSync(path, 'utf8');

// Global Backgrounds
content = content.replace(/bg-slate-50/g, 'bg-slate-950');
content = content.replace(/bg-white/g, 'bg-slate-900');
content = content.replace(/bg-slate-100/g, 'bg-slate-800');
content = content.replace(/bg-gray-50/g, 'bg-slate-950');
content = content.replace(/bg-gray-100/g, 'bg-slate-800');

// Borders
content = content.replace(/border-slate-100/g, 'border-slate-800');
content = content.replace(/border-slate-200/g, 'border-slate-700');
content = content.replace(/border-white\/20/g, 'border-slate-700');

// Text Colors
content = content.replace(/text-slate-900/g, 'text-white');
content = content.replace(/text-slate-800/g, 'text-slate-100');
content = content.replace(/text-slate-700/g, 'text-slate-300');
content = content.replace(/text-slate-600/g, 'text-slate-400');
content = content.replace(/text-slate-500/g, 'text-slate-400');

// Navigation specifics / specific styling 
// Let's also check for 'Dashboard' rename
content = content.replace(/>Dashboard</g, '>Client Portal<');
content = content.replace(/>Dashboard<\/a>/g, '>Client Portal</a>');

fs.writeFileSync(path, content);
console.log("Transformation complete.");
