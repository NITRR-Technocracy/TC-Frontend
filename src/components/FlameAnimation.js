import React, { useEffect, useRef } from "react";

// Utility function for random range
const randomRange = (from, to, seed) =>
    Math.floor((seed ? seed : Math.random()) * (to - from + 1) + from);

const FireAnimation = () => {
    const canvasContainerRef = useRef(null);
    const canvasRef = useRef(null);
    const bufferRef = useRef(null);
    let C = 0;
    let angle = 0;
    let A = [];

    class Ash {
        constructor(o = {}, W, H) {
            const m = Math.random();
            const p = randomRange(4, 8, m);

            this.x = o.x || m * W;
            this.y = o.y || m * H;
            this.a = o.a || m * (p - 4) + 1;
            this.r = randomRange(233, 255, m);
            this.g = randomRange(181, 192, m);
            this.b = randomRange(72, 88, m);
            this.dp = o.dp || [{ x: 0, y: 0 }];
            for (let i = 1; i < p; i++) {
                const j = i === 0 || p / 2 > i ? 1 : -1;
                this.dp.push({
                    x: this.dp[i - 1].x + randomRange(5, 30) * j,
                    y: this.dp[i - 1].y + randomRange(5, 30) * j,
                });
            }
        }
    }

    const draw = (ctx, W, H) => {
        if (C === 0) {
            canvasRef.current.style.visibility = "visible";
            bufferRef.current.style.visibility = "hidden";
            C = 1;
        } else {
            bufferRef.current.style.visibility = "visible";
            canvasRef.current.style.visibility = "hidden";
            C = 0;
        }

        ctx.clearRect(0, 0, W, H);

        A.forEach((p) => {
            const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.a);
            grad.addColorStop(0, `rgba(${p.r}, ${p.g}, ${p.b}, 1)`);
            grad.addColorStop(
                0.9,
                `rgba(${p.r}, ${p.g}, ${p.b}, ${randomRange(1, 10) / 10})`
            );
            grad.addColorStop(1, `rgba(${p.r}, ${p.g}, ${p.b}, 0)`);

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            p.dp.forEach((point) => ctx.lineTo(p.x + point.x, p.y + point.y));
            ctx.closePath();
            ctx.fillStyle = grad;
            ctx.globalAlpha = 0.7;
            ctx.fill();
        });

        update(W, H);
    };

    const update = (W, H) => {
        angle += 0.01;
        A = A.map((p) => {
            p.y += Math.cos(angle + A.length) + 1 + p.a / 2;
            p.x += Math.sin(angle) * 2;

            if (p.x > W + 5 || p.x < -5 || p.y > H) {
                return Math.random() % 3 > 0
                    ? new Ash({ y: -10, a: p.a, dp: p.dp }, W, H)
                    : new Ash(
                          {
                              x: Math.sin(angle) > 0 ? -5 : W + 5,
                              a: p.a,
                              dp: p.dp,
                          },
                          W,
                          H
                      );
            }
            return p;
        });
    };

    useEffect(() => {
        const W = canvasContainerRef.current.offsetWidth;
        const H = canvasContainerRef.current.offsetHeight;

        canvasRef.current.width = W;
        canvasRef.current.height = H;
        bufferRef.current.width = W;
        bufferRef.current.height = H;

        const ctxs = [
            canvasRef.current.getContext("2d"),
            bufferRef.current.getContext("2d"),
        ];

        for (let i = 0; i < 50; i++) {
            A.push(new Ash({}, W, H));
        }

        const animate = () => {
            draw(ctxs[C], W, H)
            requestAnimationFrame(animate)
        }

        requestAnimationFrame(animate)
    }, []);

    return (
        <div
            id="canvascontainer"
            ref={canvasContainerRef}
            style={{
                position: "relative",
                color: "white",
                width: "100%",
                height: "100%",
            }}
        >
            <canvas
                id="buffer"
                ref={bufferRef}
                style={{ position: "absolute", top: 0, left: 0 }}
            ></canvas>
            <canvas
                id="canvas"
                ref={canvasRef}
                style={{ position: "absolute", top: 0, left: 0 }}
            ></canvas>
        </div>
    );
};

export default FireAnimation;
