# minions-sprint-master

**Agent to organize and sort daily granular task priority**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-sprint-master/sdk minions-sdk

# Python
pip install minions-sprint-master

# CLI (global)
npm install -g @minions-sprint-master/cli
```

---

## CLI

```bash
# Show help
sprint-master --help
```

---

## Python SDK

```python
from minions_sprint_master import create_client

client = create_client()
```

---

## Project Structure

```
minions-sprint-master/
  packages/
    core/           # TypeScript core library (@minions-sprint-master/sdk on npm)
    python/         # Python SDK (minions-sprint-master on PyPI)
    cli/            # CLI tool (@minions-sprint-master/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [sprint-master.minions.help](https://sprint-master.minions.help)
- Blog: [sprint-master.minions.blog](https://sprint-master.minions.blog)
- App: [sprint-master.minions.wtf](https://sprint-master.minions.wtf)

---

## License

[MIT](LICENSE)
