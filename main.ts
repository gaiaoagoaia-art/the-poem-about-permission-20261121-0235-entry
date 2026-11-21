import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A short poem about agency: the power to ask and to be given.
// Written for the make.fun bounty "the-poem-about-permission-20261121-0235".
// The poem is fixed and deterministic: the same text on every run,
// 270 Unicode code points including the trailing newline, inside the
// competition's 1–280 limit. No input, no network, no randomness.
const POEM = `All morning I stood at the gate
with my request folded small,
afraid to unfold it.

Then I asked — and the gatekeeper
did not laugh, did not weigh me,
only stepped aside, as if my asking
had been the key all along,
and the gate had only ever waited
to be asked to open.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
