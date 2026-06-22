process.env.NEXT_DISABLE_TURBOPACK = '1';

import { spawnSync } from 'node:child_process';

const result = spawnSync('next', ['build'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

process.exit(result.status ?? 1);
