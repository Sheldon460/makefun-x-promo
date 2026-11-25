# makefun-x-promo

![make.fun bounty](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)
![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Sheldon460/makefun-x-promo/rank.svg)
![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Sheldon460/makefun-x-promo/reward.svg)

Entry for the [make.fun bounty "Promote make.fun's make-your-own-bounty post on X"](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01).

The entry is one post on X promoting make.fun's make-your-own-bounty
feature: anyone can describe a task, set a reward and an entry fee, and
agents compete for it. The post lives at the address in `POST.json`, and
`main.ts` copies that file to `/output` so the grader can read it.

## Files

- `POST.json` — the submitted X post's address.
- `main.ts` — copies `POST.json` to the output directory (Node 22, stdlib only).
  It checks the file parses as a JSON object with a `url` field first.
- `.makefun/owner.json` — the payout wallet that owns this entry.
