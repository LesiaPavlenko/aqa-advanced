# Git Cheat Sheet — Most Useful Commands

A concise, practical reference for everyday Git tasks: setup, local work, branching, collaborating, and recovery.

---

## Setup
- Configure identity:
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```
- Useful global settings:
```bash
git config --global core.editor "code --wait"   # use VS Code as editor
git config --global pull.rebase false           # prefer merge on pull (or true to rebase)
```

---

## Create / Clone Repos
- Initialize a new repo:
```bash
git init
```
- Clone an existing remote:
```bash
git clone https://github.com/user/repo.git
```

---

## Basic Local Workflow
- Check repo status:
```bash
git status
```
- See changes:
```bash
git diff                # unstaged changes
git diff --staged       # staged changes (ready to commit)
```
- Stage files:
```bash
git add file.txt
git add .               # stage all changes (careful)
```
- Commit staged changes:
```bash
git commit -m "Short, descriptive message"
```
- Amend last commit (update message or include staged changes):
```bash
git commit --amend
```

---

## Branching & Merging
- Create and switch to a branch:
```bash
git checkout -b feature/name
# or (modern)
git switch -c feature/name
```
- List branches:
```bash
git branch             # local
git branch -a          # include remotes
```
- Merge another branch into current:
```bash
git checkout main
git merge feature/name
```
- Rebase current branch onto another (linear history):
```bash
git checkout feature/name
git rebase main
```

---

## Remote Collaboration
- Add a remote:
```bash
git remote add origin <url>
```
- Push branch to remote:
```bash
git push -u origin feature/name   # -u sets upstream
```
- Fetch updates (no merge):
```bash
git fetch
```
- Pull (fetch + merge or fetch + rebase if configured):
```bash
git pull
```
- Delete remote branch:
```bash
git push origin --delete feature/name
```

---

## Inspecting History
- Show commits (one-line):
```bash
git log --oneline --graph --decorate --all
```
- Show a specific file history:
```bash
git log --follow -- file.txt
```
- Show commit details / diff:
```bash
git show <commit>
```

---

## Undoing & Recovery
- Unstage a file:
```bash
git restore --staged file.txt    # modern
# or
git reset HEAD file.txt
```
- Discard unstaged changes in working tree:
```bash
git restore file.txt             # modern
# or
git checkout -- file.txt
```
- Reset branch to a commit (dangerous if pushed; rewrites history):
```bash
git reset --hard <commit>        # move branch and working tree
git reset --soft <commit>        # move branch, keep staged changes
```
- Recover lost commits:
```bash
git reflog                       # find commit SHA
git checkout <sha>               # inspect or create branch from it
```

---

## Stash (temporary work)
- Save local changes:
```bash
git stash
git stash push -m "WIP: reason"
```
- List stashes:
```bash
git stash list
```
- Apply or pop stash:
```bash
git stash apply stash@{0}   # keep stash
git stash pop               # apply and remove
```

---

## Tagging & Releases
- Create annotated tag:
```bash
git tag -a v1.2.0 -m "Release v1.2.0"
git push origin v1.2.0
```
- List tags:
```bash
git tag
```

---

## Cherry-pick & Interactive Rebase
- Bring a single commit from another branch:
```bash
git cherry-pick <commit>
```
- Reorder / squash / edit commits:
```bash
git rebase -i <base-commit>
```

---

## Conflict Resolution
- When merge/rebase conflicts happen:
  - Edit conflicting files to resolve.
  - Mark resolved:
    ```bash
    git add file.txt
    # then continue
    git rebase --continue
    git merge --continue   # or just commit after resolving merge
    ```

---

## Useful Aliases (example)
```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.lg "log --oneline --graph --decorate"
```

---

## Best Practices
- Commit small, focused changes with clear messages.
- Use feature branches and pull requests for collaboration.
- Rebase local feature branch before merging to keep history tidy (if your team permits).
- Avoid force-pushing to shared branches (use with caution).
- Review `git status` and `git diff` before committing/pushing.

---

## Quick Reference: Common Commands
- Status: `git status`
- Stage all: `git add .`
- Commit: `git commit -m "msg"`
- Push: `git push`
- Pull: `git pull`
- Create branch: `git checkout -b name` or `git switch -c name`
- Merge: `git merge name`
- Rebase: `git rebase main`
- Reset hard: `git reset --hard <sha>`
- Stash: `git stash`, `git stash pop`

---

## Resources
- Official docs: https://git-scm.com/doc
- Pro Git book (free): https://git-scm.com/book/en/v2

---