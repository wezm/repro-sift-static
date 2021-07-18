import {
    serve,
    serveStatic,
} from "https://deno.land/x/sift@0.3.4/mod.ts";

const html = `<html><head><title>Static Files Example</title><link rel="stylesheet" href="style.css" /></head>
<body><h1>Sans-serif and centred</h1><img src="image.png"></body></html>`;

serve({
    "/":  () => new Response(html, { headers: { "content-type": "text/html; charset=UTF-8", } }),
    "/image.png": serveStatic("image.png", { baseUrl: import.meta.url }),
    "/style.css": serveStatic("style.css", { baseUrl: import.meta.url }),
})
