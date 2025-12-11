USE sportsstatstracker;

-- Allow truncating in FK order
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE Injury;
TRUNCATE TABLE `Match`;
TRUNCATE TABLE Player;
TRUNCATE TABLE Team;

SET FOREIGN_KEY_CHECKS = 1;

-- LEAGUE 1 - NBA 
-- TEAMS (30 NBA TEAMS)

INSERT INTO Team (team_id, name, league_id) VALUES
(1,  'Atlanta Hawks',          1),
(2,  'Boston Celtics',         1),
(3,  'Brooklyn Nets',          1),
(4,  'Charlotte Hornets',      1),
(5,  'Chicago Bulls',          1),
(6,  'Cleveland Cavaliers',    1),
(7,  'Dallas Mavericks',       1),
(8,  'Denver Nuggets',         1),
(9,  'Detroit Pistons',        1),
(10, 'Golden State Warriors',  1),
(11, 'Houston Rockets',        1),
(12, 'Indiana Pacers',         1),
(13, 'LA Clippers',            1),
(14, 'Los Angeles Lakers',     1),
(15, 'Memphis Grizzlies',      1),
(16, 'Miami Heat',             1),
(17, 'Milwaukee Bucks',        1),
(18, 'Minnesota Timberwolves', 1),
(19, 'New Orleans Pelicans',   1),
(20, 'New York Knicks',        1),
(21, 'Oklahoma City Thunder',  1),
(22, 'Orlando Magic',          1),
(23, 'Philadelphia 76ers',     1),
(24, 'Phoenix Suns',           1),
(25, 'Portland Trail Blazers', 1),
(26, 'Sacramento Kings',       1),
(27, 'San Antonio Spurs',      1),
(28, 'Toronto Raptors',        1),
(29, 'Utah Jazz',              1),
(30, 'Washington Wizards',     1);

--------------------
-- PLAYERS (5 "starters" per team) this can change from game to game. 
-- Pattern: Each postion will correspond to a ID. KEY BELOW: 
-- Starter1 = PG, Starter2 = SG, Starter3 = SF, Starter4 = PF, Starter5 = C
-- player_id 1–5 = Team 1, 6–10 = Team 2, ..., 146–150 = Team 30
--------------------
INSERT INTO Player (player_id, first_name, last_name, position, team_id) VALUES
-- Atlanta Hawks (1)
(1,  'Dyson', 'Daniels', 'PG', 1),
(2,  'Nickeli', 'Alexander-Walker', 'SG', 1),
(3,  'Zaccharie', 'Risacher', 'SF', 1),
(4,  'Jalen', 'Johnson', 'PF', 1),
(5,  'Onyeka', 'Okongwu', 'C',  1),

-- Boston Celtics (2)
(6,  'Jordan', 'Walsh', 'PG', 2),
(7,  'Payton', 'Pritchard', 'SG', 2),
(8,  'Jaylen', 'Brown', 'SF', 2),
(9,  'Derrick', 'White', 'PF', 2),
(10, 'Neemias', 'Queta', 'C',  2),

-- Brooklyn Nets (3)
(11, 'Egor', 'Demin', 'PG', 3),
(12, 'Terrance', 'Mann', 'SG', 3),
(13, 'Michael', 'Porter JR.', 'SF', 3),
(14, 'Noah', 'Clowney', 'PF', 3),
(15, 'Nic', 'Claxton', 'C',  3),

-- Charlotte Hornets (4)
(16, 'Kon', 'Knueppel', 'PG', 4),
(17, 'KJ', 'Simpson', 'SG', 4),
(18, 'Brandon', 'Miller', 'SF', 4),
(19, 'Miles', 'Bridges', 'PF', 4),
(20, 'Ryan', 'Kalkbrenner', 'C',  4),

-- Chicago Bulls (5)
(21, 'Cody', 'White', 'PG', 5),
(22, 'Ayo', 'Dosunmu', 'SG', 5),
(23, 'Josh', 'Giddey', 'SF', 5),
(24, 'Matas', 'Buzelis', 'PF', 5),
(25, 'Nikola', 'Vucevic', 'C',  5),

-- Cleveland Cavaliers (6)
(26, 'Jaylon', 'Tyson', 'PG', 6),
(27, 'Donovan', 'Mitchell', 'SG', 6),
(28, 'NaeQuwan', 'Tomlin', 'SF', 6),
(29, 'DeAndre', 'Hunter', 'PF', 6),
(30, 'Evan', 'Mobley', 'C',  6),

-- Dallas Mavericks (7)
(31, 'Ryan', 'Nembhard', 'PG', 7),
(32, 'Cooper', 'Flagg', 'SG', 7),
(33, 'Naji', 'Marshall', 'SF', 7),
(34, 'P.J', 'Washington', 'PF', 7),
(35, 'Anthony', 'Davis', 'C',  7),

-- Denver Nuggets (8)
(36, 'Jamal', 'Murray', 'PG', 8),
(37, 'Payton', 'Watson', 'SG', 8),
(38, 'Spencer', 'Jones', 'SF', 8),
(39, 'Cameron', 'Johnson', 'PF', 8),
(40, 'Nikola', 'Jokic', 'C',  8),

-- Detroit Pistons (9)
(41, 'Ausar', 'Thompson', 'PG', 9),
(42, 'Cade', 'Cunningham', 'SG', 9),
(43, 'Duncan', 'Robinson', 'SF', 9),
(44, 'Isaiah', 'Stewart', 'PF', 9),
(45, 'Jalen', 'Duran', 'C',  9),

-- Golden State Warriors (10)
(46, 'Will', 'Richard', 'PG', 10),
(47, 'Pat', 'Spencer', 'SG', 10),
(48, 'Buddy', 'Hield', 'SF', 10),
(49, 'Jimmy', 'Butler III', 'PF', 10),
(50, 'Quinten', 'Post', 'C',  10),

-- Houston Rockets (11)
(51, 'Amen', 'Thompson', 'PG', 11),
(52, 'Josh', 'Okogie', 'SG', 11),
(53, 'Kevin', 'Durant', 'SF', 11),
(54, 'Jabari', 'Smith Jr.', 'PF', 11),
(55, 'Clint', 'Capela', 'C',  11),

-- Indiana Pacers (12)
(56, 'Bennedict', 'Mathurin', 'PG', 12),
(57, 'Andrew', 'Nembhard', 'SG', 12),
(58, 'Ethan', 'Thompson', 'SF', 12),
(59, 'Pascal', 'Siakam', 'PF', 12),
(60, 'Jay', 'Huff', 'C',  12),

-- LA Clippers (13)
(61, 'Kendrick', 'Dunn', 'PG', 13),
(62, 'James', 'Harden', 'SG', 13),
(63, 'Kawhi', 'Leonard', 'SF', 13),
(64, 'John', 'Collins', 'PF', 13),
(65, 'Ivica', 'Zubac', 'C',  13),

-- Los Angeles Lakers (14)
(66, 'Luka', 'Doncic', 'PG', 14),
(67, 'Austin', 'Reaves', 'SG', 14),
(68, 'Rui', 'Hachimura', 'SF', 14),
(69, 'LeBron', 'James', 'PF', 14),
(70, 'DeAndre', 'Ayton', 'C',  14),

-- Memphis Grizzlies (15)
(71, 'Vince', 'Willams Jr.', 'PG', 15),
(72, 'Jaylen', 'Wells', 'SG', 15),
(73, 'Cedric', 'Coward', 'SF', 15),
(74, 'Jaren', 'Jackson Jr.', 'PF', 15),
(75, 'Zach', 'Edey', 'C',  15),

-- Miami Heat (16)
(76, 'Tyler', 'Herro', 'PG', 16),
(77, 'Davion', 'Mitchell', 'SG', 16),
(78, 'Norman', 'Powell', 'SF', 16),
(79, 'Aaron', 'Wiggins', 'PF', 16),
(80, 'Bam', 'Adebayo', 'C',  16),

-- Milwaukee Bucks (17)
(81, 'Ryan', 'Rollins', 'PG', 17),
(82, 'Kevin', 'Porter Jr.', 'SG', 17),
(83, 'Kyle', 'Kuzma', 'SF', 17),
(84, 'Jericho', 'Sims', 'PF', 17),
(85, 'Myles', 'Turner', 'C', 17),
-- Minnesota Timberwolves (18)
(86, 'Donte', 'DiVincenzo', 'PG', 18),
(87, 'Anthony', 'Edwards', 'SG', 18),
(88, 'Julius', 'Randle', 'SF', 18),
(89, 'Jaden', 'Mcdaniels', 'PF', 18),
(90, 'Rudy', 'Gobert', 'C',  18),

-- New Orleans Pelicans (19)
(91,  'Fears', 'Fears', 'PG', 19),
(92,  'Bryce', 'Mcgowens', 'SG', 19),
(93,  'Saddiq', 'Bey', 'SF', 19),
(94,  'Derrick', 'Queen', 'PF', 19),
(95,  'Trey', 'Murphy III', 'C',  19),

-- New York Knicks (20)
(96,  'Jalen', 'Brunson', 'PG', 20),
(97,  'Miles', 'Bridges', 'SG', 20),
(98,  'O.G', 'Anunoby', 'SF', 20),
(99,  'Josh', 'Hart', 'PF', 20),
(100, 'Karl', 'Anthony Towns', 'C',  20),

-- Oklahoma City Thunder (21)
(101, 'Shai', 'Gilgeous-Alexander', 'PG', 21),
(102, 'Lu', 'Dort', 'SG', 21),
(103, 'Jalen', 'Williams', 'SF', 21),
(104, 'Ousmane', 'Dieng', 'PF', 21),
(105, 'Chet', 'Holmgren', 'C',  21),

-- Orlando Magic (22)
(106, 'Jalen', 'Suggs', 'PG', 22),
(107, 'Desmond', 'Bane', 'SG', 22),
(108, 'Paolo', 'Banchero', 'SF', 22),
(109, 'Tristan', 'da Silva', 'PF', 22),
(110, 'Wendell', 'Carter Jr.', 'C',  22),

-- Philadelphia 76ers (23)
(111, 'Tyrese', 'Maxey', 'PG', 23),
(112, 'VJ', 'Edgecombe', 'SG', 23),
(113, 'Paul', 'George', 'SF', 23),
(114, 'Dominick', 'Barlow', 'PF', 23),
(115, 'Joel', 'Embiid', 'C',  23),

-- Phoenix Suns (24)
(116, 'Collin', 'Gillespie', 'PG', 24),
(117, 'Grayson', 'Allen', 'SG', 24),
(118, 'Dillon', 'Brooks', 'SF', 24),
(119, 'Royce', 'ONeal', 'PF', 24),
(120, 'Mark', 'Williams', 'C',  24),

-- Portland Trail Blazers (25)
(121, 'Sidy', 'Cissoko', 'PG', 25),
(122, 'Jerami', 'Grant', 'SG', 25),
(123, 'Toumani', 'Camara', 'SF', 25),
(124, 'Deni', 'Avdija', 'PF', 25),
(125, 'Yang', 'Hansen', 'C',  25),

-- Sacramento Kings (26)
(126, 'Zach', 'LaVine', 'PG', 26),
(127, 'Russell', 'Westbrook', 'SG', 26),
(128, 'Demar', 'DeRozan', 'SF', 26),
(129, 'Keegan', 'Murray', 'PF', 26),
(130, 'Maxime', 'Raynaud', 'C',  26),

-- San Antonio Spurs (27)
(131, 'Stephon', 'Castle', 'PG', 27),
(132, 'DeAaron', 'Fox', 'SG', 27),
(133, 'Devin', 'Vassell', 'SF', 27),
(134, 'Harrison', 'Barnes', 'PF', 27),
(135, 'Luke', 'Kornet', 'C',  27),

-- Toronto Raptors (28)
(136, 'Jakobe', 'Walter', 'PG', 28),
(137, 'Immanueal', 'Quickley', 'SG', 28),
(138, 'Brandon', 'Ingram', 'SF', 28),
(139, 'Scotty', 'Barnes', 'PF', 28),
(140, 'Jakob', 'Poeltl', 'C',  28),

-- Utah Jazz (29)
(141, 'Ace', 'Bailey', 'PG', 29),
(142, 'Keyonte', 'George', 'SG', 29),
(143, 'Svi', 'Mykhailiuk', 'SF', 29),
(144, 'Kyle', 'Filipowski', 'PF', 29),
(145, 'Jusuf', 'Nurkic', 'C',  29),

-- Washington Wizards (30)
(146, 'Bub', 'Carrington', 'PG', 30),
(147, 'CJ', 'Mccollum', 'SG', 30),
(148, 'Kyshawn', 'George', 'SF', 30),
(149, 'Justin', 'Champagnie', 'PF', 30),
(150, 'Marvin', 'Bagley III', 'C',  30);

-- MATCHES (MATCHES FROM DEC 10th - Dec 14th
INSERT INTO `Match` (match_id, team1_id, team2_id, score1, score2, status, match_date, match_time) VALUES
(1,  27, 14, 132, 119, 'finished',  '2025-12-10', '18:00'),  -- Spurs vs Lakers
(2,  24, 21, 89,  138, 'finished',  '2025-12-10', '20:00'),  -- Suns vs Thunder
(3, 13, 11,  0,  0, 'scheduled',    '2025-12-11', '19:00'),  -- Clippers vs Rockets
(4, 2,  17,   0,   0, 'scheduled',  '2025-12-11', '19:00'),  -- Celtics vs Bucks 
(5, 25, 19,  0,  0, 'scheduled',    '2025-12-11', '19:00'),  -- Trailblazers vs Pelicans 
(6, 8,  26, 0, 0, 'scheduled',  '2025-12-11', '21:00'),  -- Nuggets vs Kings
(7, 5, 4,  0,  0, 'scheduled',  '2025-12-12', '18:00'),  -- Bulls vs Hornets
(8, 1, 9,   0,   0, 'scheduled', '2025-12-12', '18:00'),  -- Hawks vs Pistons
(9, 12, 23,   0,   0, 'scheduled', '2025-12-12', '18:00'),  -- Pacers vs 76ers
(10, 6, 30,  0,  0, 'scheduled',     '2025-12-12', '18:00');  -- Cavaliers vs Wizards

-- INJURIES (active & resolved)

INSERT INTO Injury (injury_id, player_id, injury_type, description, return_date, status) VALUES
(1,  68, 'Ankle Sprain',  'Lakers Rui Hachimura tweaked ankle landing from a rebound.', '2025-12-17', 'active'),
(2,  50, 'Back Tightness','Warriors Quinten Post is dealing with back tightness.',       '2025-12-07', 'resolved'),
(3,  83, 'Knee Soreness', 'Bucks Kyle Kuzma resting due to knee soreness.',         '2025-12-06', 'resolved'),
(4, 111, 'Hamstring',     'Philly Tyrese Maxey pulled hamstring on fast break.',      '2026-01-20', 'active'),
(5, 146, 'Wrist Sprain',  'Wizards Bub Carrington fell on shooting wrist.',             '2025-12-19', 'active'),
(6,  21, 'Shoulder',      'Chicago Cody White shoulder soreness.',                  '2024-12-07', 'resolved');
