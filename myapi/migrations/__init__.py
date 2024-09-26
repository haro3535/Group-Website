import sqlite3

conn = sqlite3.connect("db.sqlite3")

cursor = conn.cursor()


cursor.execute("""CREATE TABLE ContactMessages (
    message_id INTEGER PRIMARY KEY AUTOINCREMENT,
    subject TEXT DEFAULT 'No Subject',
    message TEXT DEFAULT 'No Message',
    from_email TEXT NOT NULL,
    full_name TEXT DEFAULT 'Anonymous',
    company_name TEXT DEFAULT 'N/A'
);""")