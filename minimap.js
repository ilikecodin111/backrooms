function drawMiniMap(ctx, map, player, rays, enemies, tileSize = 8) {

    const rows = map.length;
    const cols = map[0].length;

    const mapWidth = cols * tileSize;
    const mapHeight = rows * tileSize;

    // Draw map
    for(let y=0;y<rows;y++){
        for(let x=0;x<cols;x++){

            ctx.fillStyle = "#eee";

            if(map[y][x] === 1)
                ctx.fillStyle = "#444";

            if(map[y][x] === 3)
                ctx.fillStyle = "green";

            if(map[y][x] === 4)
                ctx.fillStyle = "#d4aa00";

            ctx.fillRect(
                x * tileSize,
                y * tileSize,
                tileSize,
                tileSize
            );
        }
    }

    // Player
    ctx.fillStyle = "blue";

    ctx.beginPath();

    ctx.arc(
        player.x * tileSize,
        player.y * tileSize,
        3,
        0,
        Math.PI * 2
    );

    ctx.fill();

    // Facing direction
    ctx.strokeStyle = "blue";

    ctx.beginPath();

    ctx.moveTo(
        player.x * tileSize,
        player.y * tileSize
    );

    ctx.lineTo(
        (player.x + Math.cos(player.angle)*1.5) * tileSize,
        (player.y + Math.sin(player.angle)*1.5) * tileSize
    );

    ctx.stroke();

    // Enemies
    ctx.fillStyle = "red";

    enemies.forEach(enemy=>{

        ctx.beginPath();

        ctx.arc(
            enemy.x * tileSize,
            enemy.y * tileSize,
            3,
            0,
            Math.PI*2
        );

        ctx.fill();

    });

    // Border
    ctx.strokeStyle = "black";

    ctx.strokeRect(
        0,
        0,
        mapWidth,
        mapHeight
    );
}