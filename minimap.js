// minimap.js

function drawMiniMap(ctx, map, player, rays, enemies, tileSize = 8) {
    const rows = map.length;
    const cols = map[0].length;
    const mapWidth = cols * tileSize;
    const mapHeight = rows * tileSize;

    // Draw map
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            ctx.fillStyle = map[y][x] === 1 ? '#444' : '#eee';

            if (map[y][x] === 3) ctx.fillStyle = 'green';

            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }

    // Draw player
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(player.x * tileSize, player.y * tileSize, 3, 0, Math.PI * 2);
    ctx.fill();

    // Draw enemies (red dots)
    ctx.fillStyle = 'red';
    enemies.forEach(enemy => {
        ctx.beginPath();
        ctx.arc(enemy.x * tileSize, enemy.y * tileSize, 3, 0, Math.PI * 2);
        ctx.fill();
    });

    // Draw rays
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.3)';
    rays.forEach(ray => {
        if(ray.hitX && ray.hitY){
            ctx.beginPath();
            ctx.moveTo(player.x * tileSize, player.y * tileSize);
            ctx.lineTo(ray.hitX * tileSize, ray.hitY * tileSize);
            ctx.stroke();
        }
    });

    // Border
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0, 0, mapWidth, mapHeight);
}