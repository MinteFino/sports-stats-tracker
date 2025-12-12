CREATE DATABASE IF NOT EXISTS sportsstatstracker;
USE sportsstatstracker;

-- TABLE FOR TEAM
CREATE TABLE IF NOT EXISTS Team (
    team_id   INT AUTO_INCREMENT PRIMARY KEY,
    name      VARCHAR(100) NOT NULL,
    league_id INT NULL
);

-- TABLE FOR PLAYER
CREATE TABLE IF NOT EXISTS Player (
    player_id  INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name  VARCHAR(100) NOT NULL,
    position   VARCHAR(50),
    team_id    INT,
    CONSTRAINT fk_player_team
        FOREIGN KEY (team_id)
        REFERENCES Team(team_id)
        ON UPDATE CASCADE
        ON DELETE SET NULL
);

-- TABLE FOR INJURY
CREATE TABLE IF NOT EXISTS Injury (
    injury_id   INT AUTO_INCREMENT PRIMARY KEY,
    player_id   INT NOT NULL,
    injury_type VARCHAR(100) NOT NULL,
    description TEXT,
    return_date DATE,
    status      VARCHAR(20) DEFAULT 'active',
    CONSTRAINT fk_injury_player
        FOREIGN KEY (player_id)
        REFERENCES Player(player_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

-- TABLE FOR MATCH have to use 'MATCH' because in mySQL match causes an error.
CREATE TABLE IF NOT EXISTS `Match` (
    match_id   INT AUTO_INCREMENT PRIMARY KEY,
    team1_id   INT NOT NULL,
    team2_id   INT NOT NULL,
    score1     INT DEFAULT 0,
    score2     INT DEFAULT 0,
    status     VARCHAR(20) DEFAULT 'scheduled',
    match_date DATE,
    match_time VARCHAR(20),
    CONSTRAINT fk_match_team1
        FOREIGN KEY (team1_id)
        REFERENCES Team(team_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_match_team2
        FOREIGN KEY (team2_id)
        REFERENCES Team(team_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);
