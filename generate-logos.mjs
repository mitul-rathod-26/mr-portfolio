// Script to generate webp logo files for the tech stack balls
import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';

// Just copy the webp logo approach: create PNGs from scratch using canvas
// and save them - Three.js can load PNGs just fine

const SIZE = 256;

const logos = {
    android: {
        color: '#3DDC84',
        draw: (ctx, s) => {
            ctx.fillStyle = '#3DDC84';
            // Simple Android robot head shape
            ctx.beginPath();
            ctx.arc(s / 2, s / 2 + 10, s / 3.5, 0, Math.PI, true);
            ctx.fill();
            ctx.fillRect(s / 2 - s / 4, s / 2 - 10, s / 2, s / 2.5);
            // Eyes
            ctx.fillStyle = '#1a1a2e';
            ctx.beginPath();
            ctx.arc(s / 2 - 20, s / 2 + 5, 7, 0, Math.PI * 2);
            ctx.arc(s / 2 + 20, s / 2 + 5, 7, 0, Math.PI * 2);
            ctx.fill();
            // Antennas
            ctx.strokeStyle = '#3DDC84';
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(s / 2 - 22, s / 2 - 8);
            ctx.lineTo(s / 2 - 35, s / 2 - 30);
            ctx.moveTo(s / 2 + 22, s / 2 - 8);
            ctx.lineTo(s / 2 + 35, s / 2 - 30);
            ctx.stroke();
        }
    }
};

console.log('This script requires the canvas package. Please run: npm install canvas');
console.log('Then run: node generate-logos.mjs');
