---
title: "Understanding Astro Project Structure: Data, Content, and Lib Directories"
pubDate: 2024-02-21
author: "Christian Bueno"
categories: ["astro", "web-development", "tutorial"]
description: "Learn how to organize your Astro project using src/data/, src/content/, and src/lib/ directories effectively"
---

## **📁 Recommended Project Structure**

In an Astro project, the `src/` directory is the main source folder where most of your project's logic, components, and content reside. Within `src/`, you'll often see the following directories:

```typescript
src/
├── 📂 content/           # Content Collections
│   ├── 📁 blog/
│   └── 📁 projects/
├── 📂 data/             # Static data
│   ├── 📄 site-config.ts
│   └── 📄 navigation.ts
└── 📂 lib/             # Utilities and helpers
    ├── 📁 utils/
    ├── 📁 hooks/
    └── 📁 types/
```

## **📂 `src/data/` → Static & Structured Data**
The `data` directory is used for storing structured data that doesn’t change dynamically but is still separate from your content files. This is useful for things like:
- JSON, YAML, TOML, or CSV files containing site-wide information.
- Hardcoded lists of features, pricing plans, team members, etc.
- Any data fetched from external sources and stored locally for performance reasons.

🔹 **Example**
```json:src/data/team.json
[
  { "name": "Alice", "role": "Developer" },
  { "name": "Bob", "role": "Designer" }
]
```
🔹 **Usage in Astro**
```astro:src/pages/team.astro
---
import team from "../data/team.json";
---
<ul>
  {team.map(person => (
    <li>{person.name} - {person.role}</li>
  ))}
</ul>
```

---

## **📂 `src/content/` → Content Collections**
This is the **recommended** place for Markdown-based content collections, such as:
- Blog posts
- Documentation pages
- FAQs
- Any structured content that’s meant to be written in Markdown, MDX, JSON, or YAML.

Astro’s **Content Collections API** uses this directory to define and validate structured content.

🔹 **Example**
```md:src/content/blog/my-first-post.md
---
title: "My First Blog Post"
date: "2025-02-21"
author: "Christian"
---
This is my first blog post in Astro!
```
🔹 **Usage in Astro**
```astro:src/pages/blog.astro
---
import { getCollection } from "astro:content";
const posts = await getCollection("blog");
---
<ul>
  {posts.map(post => (
    <li><a href={post.slug}>{post.data.title}</a></li>
  ))}
</ul>
```

🔹 **Config**
```ts:src/content/config.ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string(),
  }),
});

export const collections = { blog };
```

📌 **Why use `src/content/` instead of `src/data/`?**
- `src/content/` is optimized for **Markdown-based content**.
- The **Content Collections API** allows **validation, type safety, and querying**.
- `src/data/` is better for purely structured **non-content data** like JSON lists.

---

## **📂 `src/lib/` → Utility & Helper Functions**
This is where you store **reusable functions, scripts, and utilities** that don’t belong to any specific page or component. It’s useful for:
- **Remark/Rehype plugins** for Markdown processing.
- **Utility functions** (e.g., formatting dates, fetching APIs).
- **Custom hooks** or helpers used across multiple components.

### Formatters
Common utilities include date and string formatters:

```typescript:src/lib/formatters.ts
export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};
```

### Metadata Utilities
Helper functions for managing page metadata:

```typescript:src/lib/metadata.ts
interface PageMeta {
  title: string;
  description: string;
  image?: string;
}

export const generateMeta = ({ title, description, image }: PageMeta) => ({
  title: `${title} | My Site`,
  description,
  ogImage: image || '/default-og.png',
  // Add more metadata as needed
});
```

🔹 **Example**
```ts:src/lib/formatDate.ts
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
```

🔹 **Usage in an Astro Component**
```astro:src/pages/blog.astro
---
import { formatDate } from "../lib/formatDate";
import { getCollection } from "astro:content";
const posts = await getCollection("blog");
---
<ul>
  {posts.map(post => (
    <li>{formatDate(post.data.date)} - {post.data.title}</li>
  ))}
</ul>
```

---

## **🚀 Final Takeaways**
| Directory  | Purpose |
|------------|---------|
| **`src/data/`**  | Stores **structured data** (JSON, YAML, CSV, etc.) for things like team members, pricing, etc. |
| **`src/content/`** | Stores **Markdown-based content collections** (blogs, docs, FAQs) with type validation. |
| **`src/lib/`** | Stores **reusable utility functions** and custom plugins/helpers. |

Each directory serves a specific purpose in an Astro project, helping maintain a clean and organized structure.

Let me know if you need further clarification! 🚀