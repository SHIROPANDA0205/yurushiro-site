import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { works } from "@/data/works";
import { dayJobWorks } from "@/data/dayjob";
import { repositories, repoPath } from "@/data/lab";

/**
 * サイトマップ。
 * 実績の詳細は works.ts / dayjob.ts から、
 * Labの作品詳細は lab.ts の repositories から自動で増えます。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: site.url, lastModified, priority: 1, changeFrequency: "monthly" },
    {
      url: `${site.url}/services`,
      lastModified,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${site.url}/works`,
      lastModified,
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${site.url}/lab`,
      lastModified,
      priority: 0.7,
      changeFrequency: "weekly",
    },
    {
      url: `${site.url}/company`,
      lastModified,
      priority: 0.6,
      changeFrequency: "yearly",
    },
    {
      url: `${site.url}/contact`,
      lastModified,
      priority: 0.8,
      changeFrequency: "yearly",
    },
  ];

  const workPages: MetadataRoute.Sitemap = [...works, ...dayJobWorks]
    .filter((work) => !work.comingSoon)
    .map((work) => ({
      url: `${site.url}/works/${work.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const labRepoPages: MetadataRoute.Sitemap = repositories.map((repo) => ({
    url: `${site.url}${repoPath(repo.name)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...workPages, ...labRepoPages];
}
