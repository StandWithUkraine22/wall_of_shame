# Wall of shame

Listing companies that are still doing business with Russia. This is a
simple nextjs site that can be deployed through 
[cloudflare pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/).

To contribute, simply add a new industry in the `/industries` directory
or extend an existing industry `.md` file by adding a new company. Remember
to add a couple of spaces to obtain a newline.

Let's improve this project and keep the list updated.

## Development

Develop while running the server with `pnpm dev`.

Test that exporting as a static html site works by doing
`pnpm build && pnpm export`.

## Deployment

### Initial deployment

To deploy this repo with [cloudflare pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/), follow these steps:

  1. Create a new public GitHub repo or use this one.
  2. Create a new cloudflare account.
  3. Follow the [cloudflare deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#deploying-with-cloudflare-pages).

### Deploy changes

To deploy changes, just merge a PR to the `main` branch. The updates will be deployed automatically in cloudflare.