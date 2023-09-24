---
layout: page
category: repositories
title: Arkanoid
description: classic  arkanoid game using java and swing
date: 2021-11-25 08:45:06 
last_modified_at: 2023-09-15 21:28:17 
url: https://github.com/ammahmoudi/Arkanoid
importance: 1
img: https://raw.githubusercontent.com/ammahmoudi/Arkanoid/main/screenshots/cover.png
tags: [arkanoid, java, swing]
categories: ["Repository", Java]
---
<div id="open-in-github" > <table class="table-cv list-group-table"> <tbody> <tr>    <td class="list-group-name"><b>   <a href="https://github.com/ammahmoudi/Arkanoid" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-github"></i> This page is auto-generated. For more info and materials take a look at the original repository.</a> </b></td></tr> </tbody> </table></div>
---
classic  arkanoid game using java and swing

## Features:
- Bricks:
  - Glass Bricks: They are destroyed when the ball hits them the first time.
  - Wooden Bricks: They are destroyed by hitting the ball twice.
  - Invisible Bricks: Cannot be seen and are made of glass.
  - Flashing Bricks: Flashing and are destroyed by the ball while they are visible, and the ball passes through them when they are not seen.
  -Bonus Bricks: Have bonus and with the ball to them the Brick is destroyed and its bonus moves down.
- Bonuses:
  - Fireball: After hitting and destroying the bricks, the ball continues its path in the same direction and does not change direction until it reaches the wall.The fireball also destroys wooden bricks with one hit.
  - Multiple balls: After receiving this award by the player, 2 more balls will be added to the playing field. When there are more than 1 balls in the game, the player does not die when the balls are lost. Unlike other awards, the effect of this award does not disappear after some time and is permanent.
  - Vig board: By receiving this award, the width of the board increases. The middle and side parts of the board should be changed accordingly.
  - Small board: Similar to the previous case, the width of the board decreases.
  - Fast ball: While this bonus is active, the ball moves faster.
  - Slow ball: While this bonus is active, the ball moves at a slower speed.
  - Puzzle board: As long as the effect of this bonus is not lost, the board moves against the usual direction. For example, if the player presses the left key, the board will move to the right.
  - Random prize: Until the player receives the prize, it is not known what the effect of the prize will be. Once the player receives the prize, one of the other prizes will be randomly applied.
- Score Borad
- Save and Load Game
## Screenshots
{% include figure.html path="https://raw.githubusercontent.com/ammahmoudi/Arkanoid/main/screenshots/cover.png" alt="main screen" class="img-fluid rounded z-depth-1" zoomable=true %}
{% include figure.html path="https://raw.githubusercontent.com/ammahmoudi/Arkanoid/main/screenshots/game.png" alt="game play" class="img-fluid rounded z-depth-1" zoomable=true %}
{% include figure.html path="https://raw.githubusercontent.com/ammahmoudi/Arkanoid/main/screenshots/scores.png" alt="score borad" class="img-fluid rounded z-depth-1" zoomable=true %}
