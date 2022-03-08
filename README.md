# Wall of shame

Listing companies that are still doing business with Russia. This is a
simple nextjs site that can be deployed through 
[cloudflare pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/).

To contribute, simply add a new industry in the `/industries` directory
or extend an existing industry `.md` file by adding a new company. Remember
to add a couple of spaces to obtain a newline.

### Development

Develop while running the server with `pnpm dev`.

Test that exporting as a static html site works by doing
`pnpm build && pnpm export`.