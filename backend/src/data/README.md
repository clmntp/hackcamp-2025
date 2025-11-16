# Data directory

This folder stores simple JSON data files used by the backend.

Files:
- `students.json`: List of student records
- `clubs.json`: List of club records
- Note: There are older placeholders `student-ifno.json` and `club-info.json` that were empty; prefer the new files above.

## Students schema (students.json)
Each entry:
```json
{
  "id": "stu_001",
  "firstName": "Alice",
  "lastName": "Nguyen",
  "email": "alice@example.edu",
  "gradYear": 2026,
  "major": "Computer Science",
  "clubs": ["club_cs", "club_ai"]
}
```

## Clubs schema (clubs.json)
Each entry:
```json
{
  "id": "club_cs",
  "name": "Computer Science Club",
  "category": "Academic",
  "description": "Weekly talks, hack nights, and collaborative projects.",
  "leaders": ["stu_001"],
  "members": ["stu_001", "stu_002"],
  "meetings": {
    "day": "Wednesday",
    "time": "18:00",
    "location": "Room 101"
  },
  "contact": {
    "email": "csclub@example.edu",
    "website": "https://example.edu/csclub"
  }
}
```

IDs should be unique. Club `leaders` and `members` reference student IDs. Student `clubs` reference club IDs.

