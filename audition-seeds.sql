USE audition_db;
SELECT * FROM scores

INSERT INTO scores (judge_number, candidate_number, comments, intonation, rhythm, tone, musicality, vote, createdAt, updatedAt)
VALUES (1, 20, "Great job!", 80, 70, 90, 85, true, "2020-07-27 01:38:10", "2020-07-28 02:38:10");

INSERT INTO scores (judge_number, candidate_number, comments, intonation, rhythm, tone, musicality, vote, createdAt, updatedAt)
VALUES (2, 20, "Not bad!", 70, 60, 50, 65, true, "2020-07-27 01:38:10", "2020-07-28 02:38:10");

INSERT INTO scores (judge_number, candidate_number, comments, intonation, rhythm, tone, musicality, vote, createdAt, updatedAt)
VALUES (3, 20, "Not quite ready yet.", 50, 40, 60, 45, false, "2020-07-27 01:38:10", "2020-07-28 02:38:10")