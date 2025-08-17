import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    category: z.string(),
    series: z.string().optional(),
    draft: z.boolean().optional(),
    image: z.string().optional(),
    votes: z.number().optional(),
    comments: z.number().optional(),
    pending_hbd: z.number().optional(),
    total_hbd: z.number().optional(),
    active_votes: z.array(z.object({
      percent: z.string(),
      reputation: z.number().optional(),
      rshares: z.number(),
      voter: z.string(),
      hbd_value: z.number().optional(),
    })).optional(),
    beneficiaries: z.array(z.object({
      account: z.string(),
      weight: z.number(),
    })).optional(),
  }),
});

const splinterlandsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    category: z.string(),
    series: z.string().optional(),
    draft: z.boolean().optional(),
    image: z.string().optional(),
    votes: z.number().optional(),
    comments: z.number().optional(),
    pending_hbd: z.number().optional(),
    total_hbd: z.number().optional(),
    active_votes: z.array(z.object({
      percent: z.string(),
      reputation: z.number().optional(),
      rshares: z.number(),
      voter: z.string(),
      hbd_value: z.number().optional(),
    })).optional(),
    beneficiaries: z.array(z.object({
      account: z.string(),
      weight: z.number(),
    })).optional(),
  }),
});

const hiveCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    category: z.string(),
    series: z.string().optional(),
    draft: z.boolean().optional(),
    image: z.string().optional(),
    votes: z.number().optional(),
    comments: z.number().optional(),
    pending_hbd: z.number().optional(),
    total_hbd: z.number().optional(),
    active_votes: z.array(z.object({
      percent: z.string(),
      reputation: z.number().optional(),
      rshares: z.number(),
      voter: z.string(),
      hbd_value: z.number().optional(),
    })).optional(),
    beneficiaries: z.array(z.object({
      account: z.string(),
      weight: z.number(),
    })).optional(),
  }),
});

const seriesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  splinterlands: splinterlandsCollection,
  hive: hiveCollection,
  series: seriesCollection,
};