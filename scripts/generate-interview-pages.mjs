import fs from "node:fs";
import path from "node:path";
import { interviewMetadata } from "./interview-metadata.mjs";

const SITE_URL = "https://bettermangalore.com";

const distPath = path.resolve("dist");
const templatePath = path.join(distPath, "index.html");

if (!fs.existsSync(templatePath)) {
  throw new Error(
    "dist/index.html not found. Run Vite build before generating interview pages.",
  );
}

const template = fs.readFileSync(templatePath, "utf8");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function removeExistingMeta(html) {
  // Remove metadata that will be replaced with interview-specific values.
  return html
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(
      /<meta[^>]+(?:name|property)=["'](?:description|og:title|og:description|og:type|og:url|og:image|og:image:alt|twitter:card|twitter:title|twitter:description|twitter:image)["'][^>]*>/gi,
      "",
    );
}

for (const interview of interviewMetadata) {
  const title = `${interview.headline} | Better Mangalore`;

  const pageUrl =
    `${SITE_URL}/interviews/${interview.slug}/`;

  const imageUrl =
    `${SITE_URL}${interview.socialImage}`;

  const metadata = `
    <title>${escapeHtml(title)}</title>

    <meta
      name="description"
      content="${escapeHtml(interview.description)}"
    />

    <meta
      property="og:title"
      content="${escapeHtml(title)}"
    />

    <meta
      property="og:description"
      content="${escapeHtml(interview.description)}"
    />

    <meta
      property="og:type"
      content="article"
    />

    <meta
      property="og:url"
      content="${pageUrl}"
    />

    <meta
      property="og:image"
      content="${imageUrl}"
    />

    <meta
      name="twitter:card"
      content="summary_large_image"
    />

    <meta
      name="twitter:title"
      content="${escapeHtml(title)}"
    />

    <meta
      name="twitter:description"
      content="${escapeHtml(interview.description)}"
    />

    <meta
      name="twitter:image"
      content="${imageUrl}"
    />
`;

  let html = removeExistingMeta(template);

  html = html.replace("</head>", `${metadata}\n</head>`);

  const outputDirectory = path.join(
    distPath,
    "interviews",
    interview.slug,
  );

  fs.mkdirSync(outputDirectory, {
    recursive: true,
  });

  const outputFile = path.join(
    outputDirectory,
    "index.html",
  );

  fs.writeFileSync(outputFile, html, "utf8");

  console.log(
    `✓ Generated /interviews/${interview.slug}/index.html`,
  );
}

console.log(
  `\nGenerated ${interviewMetadata.length} interview page(s).`,
);
