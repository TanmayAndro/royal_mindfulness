// ==========================
// OPTIONS (UI)
// ==========================
export const OPTIONS = [
  "I feel mentally tired most days",
  "My mind keeps running, even when I want to rest",
  "I struggle to stay regular with habits",
  "My emotions feel harder to handle than before",
  "I find it hard to focus on one thing",
  "I feel pressure to hold everything together",
  "I’m doing okay, but inside I feel unsettled",
  "I want to understand my mind better",
  "It's Something else",
];

// ==========================
// GROUP MAPPING (0–8 indexes)
// ==========================
export const GROUP_MAP = {
  // Group A – Mental Overload
  0: "A",
  1: "A",
  4: "A",

  // Group B – Emotional Pressure
  3: "B",
  5: "B",

  // Group C – Discipline / Inner Drift
  2: "C",
  6: "C",

  // Group D – Growth / Curiosity
  7: "D",

  // Group E – Something Else
  8: "E",
};

// ==========================
// RESPONSE COPY
// ==========================
export const RESPONSES = {
  A: [
  "Thank you for sharing this When the mind feels tired, noisy, or unfocused, it usually means it’s been working continuously without proper mental rest or training",
  "In the free consultation, we gently explore how to bring clarity and steadiness back without forcing calm."
  ],
  
  B: [
    "What you’re experiencing is more common than people realize.",
    "When emotions feel close to the surface, it often means you’ve been carrying a lot internally without space to pause.",
  ],
  C: [
    
    "Starting with intention but struggling to stay regular is usually not a motivation problem — it’s a training problem.",
    "In the consultation, we look at how to build consistency without self-pressure.",
  ],
  D: [
    "Many people come not because something is ‘wrong,’ but because they want more clarity and ease in daily life.",
    "The consultation helps you understand how mental fitness training can support that.",
  ],
  E: [
    "That awareness itself is important.",
    "The consultation gives you space to explore what’s happening internally, without labels or judgment."
  ],
};

export const GROWTH_LINE =
  "Wanting to understand your mind better is a strong starting point — it shows readiness for meaningful change.";

// ==========================
// CORE LOGIC (FINAL RULE ENGINE)
// ==========================
export function getFinalResponse(selectedIndexes) {
  // Rule 6: Option 9 alone
  if (selectedIndexes.length === 1 && selectedIndexes[0] === 8) {
    return [...RESPONSES.E];
  }

  // Ignore Option 9 for grouping
  const filtered = selectedIndexes.filter(i => i !== 8);
  const groups = filtered.map(i => GROUP_MAP[i]);
  const uniqueGroups = [...new Set(groups)];

  // Rule 4: High load (3+ selections across multiple groups)
  if (filtered.length >= 3 && uniqueGroups.length > 1) {
    return [
      "Thank you for sharing this.",
      "When several areas feel heavy at the same time, it usually means you’ve been carrying a lot internally without space to slow down.",
      "In the free consultation, we gently explore how to bring clarity, balance, and steadiness back.",
    ];
  }

  // Count group frequency
  const count = {};
  groups.forEach(g => (count[g] = (count[g] || 0) + 1));

  // Sort by dominance, tie-break by first selection
  const sortedGroups = Object.keys(count).sort((a, b) => {
    if (count[b] !== count[a]) return count[b] - count[a];
    return groups.indexOf(a) - groups.indexOf(b);
  });

  let response = [];

  // Rule 1: Single selection
  if (filtered.length === 1) {
    response = [...RESPONSES[sortedGroups[0]]];
  }

  // Rule: 2 selections, SAME group → show both lines
  else if (filtered.length === 2 && uniqueGroups.length === 1) {
    response = [...RESPONSES[sortedGroups[0]]];
  }

  // Rule: ≤ 3 selections, different groups → ordered blending
  else if (filtered.length <= 3) {
    sortedGroups.forEach((groupKey, index) => {
      if (index === 0) {
        response.push(RESPONSES[groupKey][0]); // dominant group
      } else {
        response.push(RESPONSES[groupKey][1]); // secondary / third
      }
    });
  }

  // Rule 5: Growth override (Option 8)
  if (selectedIndexes.includes(7) && selectedIndexes.length <= 3) {
    response.push(GROWTH_LINE);
  }

  // Max 3 lines now (no universal closing)
  return response.slice(0, 3);
}

