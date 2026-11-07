import type { SyllabusData } from "./types";

export const syllabus: SyllabusData = {
  "slug": "software-development",
  "title": "Software Development Foundations: Portfolio Track",
  "subtitle": "Course Syllabus · Level 1 Software Development Track",
  "sections": [
    {
      "id": "course-facts",
      "title": "Course facts",
      "paragraphs": [
        "A 14-week, project-driven course with no exam. Students leave with four public portfolio projects and one deployed full-stack capstone, which is how this track proves ability in place of a single paid Level 1 certificate."
      ]
    },
    {
      "id": "why-this-course-will-change-how-you-see-every-app-you-use",
      "title": "Why this course will change how you see every app you use",
      "paragraphs": [
        "Every screen on your phone is code that someone wrote, tested and shipped. This course teaches you to do the same, from the first terminal command to a deployed application with a database, a login system and automated tests.",
        "There is no single paid certificate for this path, and that is deliberate. Start-ups and fintechs hire on what you can show: a clean public repository, a live link and a short write- up of the decisions you made. So the course asks you to build five projects, review other people's code, and publish everything. By Week 14 you have a portfolio you can walk an interviewer through, and the habits of a working developer.",
        "Field Detail Course SWE 101 · Software Development Foundations (placeholder code) Level Introductory undergraduate; open to career switchers Duration 14 weeks, about 8 to 10 study hours per week Format Weekly lecture, hands-on lab, code review, four portfolio projects and one capstone Core tools Linux terminal, Git and GitHub, VS Code, Python, Node.js, TypeScript, React, Next.js, FastAPI, SQL (SQLite and PostgreSQL), GitHub Actions Prerequisites Basic computer literacy and everyday logic; no programming experience Credential A public portfolio of five projects. Optional signal: GitHub Foundations, an entry-level exam listed at about US$49 to US$99 (confirm the current price on GitHub's certification page) Instructor To be announced Term To be announced Contact Posted on the course site Five pillars Fundamentals first. Linux, Git, how the web works and core programming come before any framework.",
        "Build to learn. Four portfolio projects and a capstone, each public, deployed and documented.",
        "A modern stack. Python, TypeScript, React with Next.js, a Python API and SQL, the skills that start-up and fintech teams ask for.",
        "Professional practice. Tests, code review, continuous integration, secure coding and clear documentation from the first project.",
        "Portfolio and career. A polished GitHub profile, project case studies, interview practice and a route to remote and freelance work."
      ]
    },
    {
      "id": "how-the-course-works",
      "title": "How the course works",
      "paragraphs": [
        "Projects instead of an exam. Four portfolio projects and a capstone carry most of the grade. Each lives in its own public repository with a case-study README.",
        "Build to learn. Every concept is used in a lab the same week, and every lab ends in something that runs.",
        "Three-tier exercises every week. Warm-up (confidence), Core (mastery) and Boss Level (stretch, the kind of task asked in interviews).",
        "One growing portfolio. All weekly work goes into PortfolioKit, your public Git repository (Appendix B), so your commit history shows your progress.",
        "Code review is part of the work. You review classmates' pull requests and respond to reviews of yours.",
        "Two practical checkpoints. Timed, hands-on coding assessments in Weeks 7 and 12 check that you can build without help.",
        "A capstone that ships. From Week 9 to Week 14 you build and deploy a full-stack application."
      ]
    },
    {
      "id": "learning-outcomes",
      "title": "Learning outcomes",
      "paragraphs": [
        "By the end of the course you will be able to: Work confidently in the terminal and use Git and GitHub for version control and collaboration.",
        "Write, test and package programs in Python, and write typed code in TypeScript. Build responsive, accessible web interfaces with HTML, CSS, JavaScript, React and Next.js.",
        "Design and build a REST API with Python, a relational database and authentication.",
        "Apply secure coding basics and avoid the most common web vulnerabilities. Automate tests and deployment with continuous integration, and deploy a full-stack application.",
        "Review code, document your work and use AI coding assistants responsibly. Present a public portfolio of five projects and explain every design decision in it."
      ]
    },
    {
      "id": "prerequisites-and-readiness-check",
      "title": "Prerequisites and readiness check",
      "paragraphs": [
        "No programming experience is needed, only the basics below. If a self-check feels shaky, use the Week 1 and Week 2 labs to close the gap.",
        "Area You should know Self-check Computer use Files, folders, installing software, using a browser Can you create a folder, make a text file in it and rename the file's extension?",
        "Everyday logic Following and writing precise step- by-step instructions A shop gives 10% off orders above ₦ 20,000. What does a ₦ 25,000 order cost? (Answer: ₦ 22,500.)",
        "Problem solving Breaking a task into steps List the steps to find the largest number in a list of five. (Answer: keep a largest-so-far value and compare each number with it.)",
        "Reading English Following written documentation Can you read a short technical page and explain it in your own words?",
        "Equipment A laptop with 8 GB of RAM (4 GB can work) that can install VS Code Can you install software on it? If not, tell the instructor in Week 1 about browser-based options."
      ]
    },
    {
      "id": "course-at-a-glance",
      "title": "Course at a glance",
      "paragraphs": [
        "The course climbs one layer at a time: tools, then Python, then the web front end, then the back end, then deployment and teamwork. Each project proves the skills taught before it.",
        "Week Module You will learn Milestone 1 Developer Toolkit: Linux, Git and the Web Terminal, files and permissions, Git and GitHub, how HTTP and DNS work GitHub profile and PortfolioKit live 2 Python Fundamentals I Variables, types, conditionals, loops, functions, lists and dictionaries 3 Python Fundamentals II Files, modules, exceptions, virtual environments, pytest, command-line tools Project 1 due: Python command-line tool 4 HTML, CSS and Responsive Design Semantic HTML, accessibility, Flexbox, Grid, mobile-first layouts 5 JavaScript and the DOM Functions, arrays and objects, events, fetch, async code Project 2 due: portfolio website 6 TypeScript Foundations Types, interfaces, unions, generics basics, strict mode, linting 7 React Foundations Components, props, state, effects, forms, custom hooks Checkpoint 1: timed practical (Weeks 1 to 6) 8 Next.js and Frontend Project Routing, layouts, data fetching, SEO metadata, deployment Project 3 due: deployed Next.js app 9 Backend APIs with Python REST design, FastAPI, validation, status codes, API docs, CORS Capstone proposal due The Milestone column marks graded items. Tool versions may be refreshed as the frameworks change.",
        "The 14-week journey Each week lists a hook, the concepts, a live lab and three exercises. Keep all work in PortfolioKit, one public Git repository with a folder per week, and give each of the four projects and the capstone its own repository with a case-study README. Commit often: your history is part of the evidence."
      ]
    },
    {
      "id": "week-1-developer-toolkit-linux-git-and-the-web",
      "title": "Week 1 · Developer Toolkit: Linux, Git and the Web",
      "paragraphs": [
        "The hook: Every app you use began as a folder of text files and a history of small changes.",
        "How do teams keep that history safe? Milestone. GitHub profile and PortfolioKit repository live.",
        "What we cover Terminal basics: moving around, files, paths, permissions and environment variables Week Module You will learn Milestone 10 Databases and SQL Relational modelling, SQL queries, joins, indexes, an ORM, migrations 11 Authentication and Secure Coding Password hashing, sessions and tokens, authorization, OWASP basics, secrets Project 4 due: REST API with database and login 12 Testing, CI/CD and Deployment Unit and integration tests, GitHub Actions, deploying a full stack Checkpoint 2: timed full-stack practical 13 Teamwork and Capstone Build Issues, pull requests, code review, Agile basics, documentation, responsible AI use Capstone build review 14 Portfolio, Interviews and Showcase Portfolio polish, case studies, interview practice, demos Capstone final due Git: init, add, commit, branches, merging and resolving conflicts GitHub: remotes, README files, issues and pull requests How the web works: client and server, HTTP requests and responses, DNS, and browser developer tools Live lab. Lab 1: Set up your environment (terminal, VS Code, Git), create your GitHub account and PortfolioKit repository, and push your first commit.",
        "Warm-up. Using only the terminal, create a folder for each of the 14 weeks, add a README to each, and list the whole tree.",
        "Core. Make three commits on a branch, create a deliberate merge conflict with a second branch, resolve it, and open a pull request on your own repository. Tell the story in your README.",
        "Boss Level. Use browser developer tools and curl to trace what happens when you open a website: the DNS lookup, the request headers, the status code and the response size.",
        "Write a one-page explanation with a diagram."
      ]
    },
    {
      "id": "week-2-python-fundamentals-i",
      "title": "Week 2 · Python Fundamentals I",
      "paragraphs": [
        "The hook: A program is a recipe. Can you write one precise enough for a machine? What we cover Variables, types and operators Conditionals and loops Functions, parameters and return values Lists, tuples, dictionaries and sets Reading error messages and breaking a problem into steps Live lab. Lab 2: Write small terminal programs: a tip calculator, a grade classifier and a word counter.",
        "Warm-up. Write a function that takes a list of prices and returns the total including 7.5% VAT.",
        "Core. Build a mobile-money transaction summarizer. Given a list of transaction dictionaries, report the total received, the total sent, the largest transaction and a count per category.",
        "Boss Level. Write a text-based game of your choice, such as a guessing game or tic-tac- toe against the computer, with input validation and clear functions. Explain your design in the README."
      ]
    },
    {
      "id": "week-3-python-fundamentals-ii",
      "title": "Week 3 · Python Fundamentals II",
      "paragraphs": [
        "The hook: Your script works on your laptop. Will it work on someone else's, and still work next month?",
        "Milestone. Project 1 due: a Python command-line tool. What we cover Reading and writing files, including CSV and JSON Modules and packages, virtual environments and pip Exceptions and defensive programming Unit tests with pytest Command-line interfaces with argparse, code style and docstrings Live lab. Lab 3: Turn a script into a tested command-line tool with a virtual environment and a requirements file.",
        "Warm-up. Write three pytest tests for a function that checks whether a phone number has a valid format.",
        "Core. Build an expense tracker command-line tool that stores entries in a JSON file, supports add, list and summary commands, handles bad input without crashing, and has at least five tests.",
        "Boss Level. Package Project 1 properly: a README with install and usage steps, a licence, passing tests, a tagged release on GitHub, and one issue opened and closed by a pull request."
      ]
    },
    {
      "id": "week-4-html-css-and-responsive-design",
      "title": "Week 4 · HTML, CSS and Responsive Design",
      "paragraphs": [
        "The hook: Most of your users will open your site on a small phone with slow data. Does it still work?",
        "What we cover Semantic HTML, forms and accessibility: alt text, labels, contrast and keyboard use The CSS box model, selectors and specificity Flexbox and Grid, and mobile-first responsive design with media queries Images, performance and design basics: typography, spacing and colour contrast Live lab. Lab 4: Build a responsive profile page from a design mock, with no framework.",
        "Warm-up. Fix a deliberately broken page: five HTML errors and three accessibility problems.",
        "Core. Build a responsive landing page for a fictional local business, with a navigation bar, a hero section, a card grid and a contact form, that works from 360 pixels wide up to a desktop.",
        "Boss Level. Rework the same page to score 90 or more for performance and accessibility in browser Lighthouse on a throttled mobile connection. Document each change and the score before and after."
      ]
    },
    {
      "id": "week-5-javascript-and-the-dom",
      "title": "Week 5 · JavaScript and the DOM",
      "paragraphs": [
        "The hook: A page that never changes is a poster. What makes it an application? Milestone. Project 2 due: your portfolio website, deployed.",
        "What we cover JavaScript syntax, functions, arrays and objects, and the array methods map, filter and reduce The DOM: selecting elements and handling events Fetch, JSON, promises and async and await Browser storage and debugging with developer tools Live lab. Lab 5: Add interactivity with a to-do list, then a page that loads data from a public API.",
        "Warm-up. Use map, filter and reduce to compute totals and averages from an array of product objects.",
        "Core. Build a currency or weather converter that fetches from a public API, shows loading and error states, and remembers the last choice in browser storage.",
        "Boss Level. Turn your portfolio into Project 2: about, skills, projects and contact sections, a dark-mode toggle that persists, deployment on a free host, and a README with your design decisions."
      ]
    },
    {
      "id": "week-6-typescript-foundations",
      "title": "Week 6 · TypeScript Foundations",
      "paragraphs": [
        "The hook: The bug is a typo in a property name, found by a user at 2 a.m. What if the editor had caught it first?",
        "What we cover Static types, annotations, interfaces and type aliases Union types, narrowing and the basics of generics Strict mode, ESLint and Prettier Migrating JavaScript to TypeScript and typing API data Live lab. Lab 6: Convert your Week 5 converter to TypeScript with strict mode on.",
        "Warm-up. Add type annotations to ten untyped functions and fix every error the compiler reports.",
        "Core. Model a small store (products, orders, customers) with interfaces and union types, and write typed functions for totals, filters and a discount rule.",
        "Boss Level. Migrate your Project 2 scripts to TypeScript with strict mode on, no uses of the any type, and npm scripts that run the linter and the type checker."
      ]
    },
    {
      "id": "week-7-react-foundations",
      "title": "Week 7 · React Foundations",
      "paragraphs": [
        "The hook: A screen is a function of its data. Change the data and the screen follows.",
        "Milestone. Checkpoint 1: a timed practical coding assessment covering Weeks 1 to 6.",
        "What we cover Components and JSX, props and component composition State with useState, effects with useEffect, lists and keys Controlled forms and lifting state up Custom hooks (introduction) Live lab. Lab 7: Build a task manager in React with TypeScript: add, edit, filter and persist tasks.",
        "Warm-up. Break a given page design into a component tree on paper, naming each component's props and state.",
        "Core. Build a React expense tracker with a form, a list, a filter by category and a running total, using TypeScript and no UI library.",
        "Boss Level. Add data fetching with loading and error states and a custom hook, write basic tests with a testing library, and refactor until no component is longer than about 80 lines."
      ]
    },
    {
      "id": "week-8-next-js-and-frontend-project",
      "title": "Week 8 · Next.js and Frontend Project",
      "paragraphs": [
        "The hook: Your app runs on your laptop. A customer is waiting. How does it reach them?",
        "Milestone. Project 3 due: a deployed Next.js application. What we cover Next.js file-based routing, layouts, dynamic routes and route handlers Server and client components, and data fetching Environment variables, image handling and SEO metadata Deploying to Vercel and connecting a custom domain (overview) Live lab. Lab 8: Create a Next.js app with three pages and a dynamic route, and deploy it.",
        "Warm-up. Map a ten-page website onto a Next.js folder structure, marking which routes are static and which are dynamic.",
        "Core. Build a blog or product catalogue with a list page and dynamic detail pages that load from a JSON file or a public API, add search-engine metadata, and deploy it.",
        "Boss Level. Project 3: a polished, deployed Next.js app for a real use, such as a campus event board or a small shop catalogue, with responsive design, accessibility checks, a Lighthouse report and a case-study README."
      ]
    },
    {
      "id": "week-9-backend-apis-with-python",
      "title": "Week 9 · Backend APIs with Python",
      "paragraphs": [
        "The hook: The front end asks and the back end answers. What makes a good answer? Milestone. Capstone proposal due.",
        "What we cover HTTP methods and status codes, and REST design FastAPI routes, path and query parameters, and JSON Request validation with Pydantic and clear error responses Generated API documentation, CORS, and calling the API from a front end Live lab. Lab 9: Build a small API with FastAPI and explore it in the interactive documentation.",
        "Warm-up. On paper, design the REST endpoints (paths, methods and status codes) for a library system.",
        "Core. Build a to-do or expense API with create, read, update and delete endpoints, validation and proper error responses, stored in memory, with a test for each endpoint.",
        "Boss Level. Connect your Week 7 React app to your API with fetch, handle CORS, loading and errors, and write a README sequence that starts both locally."
      ]
    },
    {
      "id": "week-10-databases-and-sql",
      "title": "Week 10 · Databases and SQL",
      "paragraphs": [
        "The hook: Memory forgets when the power goes. Where do your users' records live? What we cover Relational modelling: tables, keys, relationships and normalization basics SQL: SELECT, WHERE, JOIN, GROUP BY, INSERT, UPDATE and DELETE Indexes and transactions; SQLite and PostgreSQL An ORM (SQLAlchemy) and database migrations; a NoSQL overview Live lab. Lab 10: Design a schema for a small store, load sample data and answer ten questions in SQL.",
        "Warm-up. Draw an entity-relationship diagram for a school: students, courses, enrolments and lecturers.",
        "Core. Replace the in-memory storage in your Week 9 API with a database through an ORM, add a migration, and show that data survives a restart.",
        "Boss Level. Write ten SQL queries, including joins and aggregates, over a provided transaction data set. Add an index and use EXPLAIN to show what changed."
      ]
    },
    {
      "id": "week-11-authentication-and-secure-coding",
      "title": "Week 11 · Authentication and Secure Coding",
      "paragraphs": [
        "The hook: The fastest way to lose your users' trust is to store their passwords wrongly.",
        "Milestone. Project 4 due: a REST API with a database and authentication. What we cover Authentication versus authorization, password hashing, sessions, cookies and tokens Role-based access and checking ownership of records OWASP Top 10 basics: injection, broken access control, cryptographic failures Input validation, secrets and environment variables, HTTPS and dependency updates Live lab. Lab 11: Add registration, login and a protected route to your API.",
        "Warm-up. Review a code snippet with five security mistakes (a hard-coded secret, SQL built from strings, a plain-text password, a missing authorization check and a verbose error) and fix each one.",
        "Core. Add user registration with hashed passwords, login with tokens and role checks so users can only edit their own records. Write tests for the denied cases.",
        "Boss Level. Project 4: a documented REST API with a database, authentication, validation, tests, an OpenAPI description and a threat note listing five risks and your mitigations."
      ]
    },
    {
      "id": "week-12-testing-ci-cd-and-deployment",
      "title": "Week 12 · Testing, CI/CD and Deployment",
      "paragraphs": [
        "The hook: Shipping on a Friday evening is safe only if a machine has already tried to break the build.",
        "Milestone. Checkpoint 2: a timed full-stack practical. What we cover Unit, integration and end-to-end tests, test-driven development basics and code coverage GitHub Actions workflows that lint, test and build Environment configuration and secrets in CI Deploying an API to a free-tier host and a front end to Vercel; logs and monitoring basics Live lab. Lab 12: Add a CI workflow that runs lint and tests on every pull request, then deploy the API and the front end.",
        "Warm-up. Write the failing test first, then the code that makes it pass, for three small functions.",
        "Core. Create a GitHub Actions workflow that installs dependencies, lints, runs the tests and blocks merging when they fail. Show one failing run and one passing run.",
        "Boss Level. Deploy your Project 4 API and a front end that uses it, with environment variables set securely, a health-check endpoint and a rollback plan written in the README."
      ]
    },
    {
      "id": "week-13-teamwork-and-capstone-build",
      "title": "Week 13 · Teamwork and Capstone Build",
      "paragraphs": [
        "The hook: Nobody ships alone. How do strangers change the same code without breaking it?",
        "Milestone. Capstone build review. What we cover Issues, branches, pull requests and code review etiquette Agile basics: user stories, small increments and stand-ups Documentation: READMEs, API docs, architecture notes and decision records; open- source licences Responsible use of AI coding assistants: write clear prompts, review every line, keep tests, and disclose your use Live lab. Lab 13: Peer code review. Review a classmate's pull request and receive one on yours.",
        "Warm-up. Write a user story and three acceptance criteria for one capstone feature.",
        "Core. Open three well-formed issues on your capstone, work each in its own branch, and merge them through reviewed pull requests with at least one requested change that you addressed.",
        "Boss Level. Contribute to another student's project or a beginner-friendly open-source repository: fix one issue or improve its documentation by following its contribution guide, and write up what you learned."
      ]
    },
    {
      "id": "week-14-portfolio-interviews-and-showcase",
      "title": "Week 14 · Portfolio, Interviews and Showcase",
      "paragraphs": [
        "The hook: A hiring manager gives your GitHub profile ninety seconds. What do they see?",
        "Milestone. Capstone final due. What we cover Portfolio curation, README case studies and a GitHub profile README CVs and professional profiles for developers Technical interview practice: live coding, basic data structures and walking through your own projects Routes to remote and freelance work, and how to prepare for the optional GitHub Foundations exam Capstone presentations and peer feedback Live lab. Capstone showcase: demo, ten-minute presentation and Q&A.",
        "Warm-up. Rewrite the READMEs of your four projects in one format: the problem, the stack, how to run it and what you learned.",
        "Core. Complete a 45-minute mock technical interview with a classmate: one coding problem, one project walkthrough and one question about a trade-off you made.",
        "Boss Level. Publish your portfolio: a site that presents all five projects with live links, and a polished GitHub profile. Pass a final review in which a reviewer clones each repository and runs it from the README alone."
      ]
    },
    {
      "id": "capstone-project-ship-a-real-full-stack-application",
      "title": "Capstone Project: Ship a Real Full-Stack Application",
      "paragraphs": [
        "From Week 9 to Week 14 you design, build, test and deploy a full-stack application for a real need. It combines everything from the four earlier projects and adds teamwork practice.",
        "Required deliverables A clear problem statement, named users and written user stories.",
        "An architecture diagram of the front end, API and database. A TypeScript front end (Next.js), a Python API and a relational database.",
        "User registration and login with role or ownership checks. Automated tests and a continuous integration workflow.",
        "A live deployment and a README that lets a stranger run the project in under ten minutes.",
        "A case-study write-up and a ten-minute presentation. Week Milestone What is due 9 Proposal Problem statement, users, user stories, the planned stack and a feature list split into must- have and later 13 Build review Core features working and deployed, tests passing, CI running, and at least one reviewed pull request 14 Final Deployed application, documentation, case-study write-up and a ten-minute presentation Project idea starters A campus event and club board with sign-ups.",
        "An inventory and sales tracker for a small shop. A clinic appointment booking site.",
        "A crowd-sourced market price tracker for local produce. A lecture attendance and results portal for a department.",
        "A rotating savings group (ajo or esusu) tracker."
      ]
    },
    {
      "id": "assessment-and-grading",
      "title": "Assessment and grading",
      "paragraphs": [
        "Boss Level exercises are stretch work, and instructors may award bonus credit for them.",
        "The optional GitHub Foundations exam is not graded. Course policies Late work (draft policy, subject to the final syllabus) Up to 24 hours late: 10% penalty.",
        "24 to 48 hours late: 25% penalty. More than 48 hours late: not accepted unless arranged beforehand with the instructor.",
        "Component Weight What counts Weekly hands-on labs 20% Warm-up and Core exercises each week, with clean commit history in PortfolioKit Portfolio projects 1 to 4 25% Python tool (Week 3), portfolio site (Week 5), Next.js app (Week 8), REST API (Week 11); each judged on working code, tests, deployment and README Practical checkpoints 15% Checkpoint 1 in Week 7 (7%) and Checkpoint 2 in Week 12 (8%), timed and hands-on Capstone project 30% Full-stack application, tests, CI, deployment, documentation and presentation Participation and code reviews 10% Quality of reviews you give and respond to, and weekly discussion Each student has two emergency slip days for lab assignments, usable without penalty.",
        "A documented power or network outage does not count as lateness if you tell the instructor within 24 hours.",
        "Using AI coding tools AI assistants are welcome as tutors and pair programmers. Disclose how you used them in each README. In the from-scratch exercises, write the core code yourself, and never commit code you cannot explain line by line. AI tools are not allowed in the practical checkpoints.",
        "Academic integrity Discussing ideas is encouraged. Labs, projects and the capstone must be your own work, with any tutorial, template or snippet you adapt cited in the README. Your Git history is evidence of how the work was built, so commit regularly, and do not submit a project whose history you cannot explain.",
        "Secrets and licensing Never commit passwords, API keys or tokens. Use environment variables and a .gitignore file, and rotate any key that leaks.",
        "Add an open-source licence to every public repository, and credit any code or assets you reuse under their own licences.",
        "Use only fictional or synthetic data in projects. Never publish real personal data.",
        "Access plan for Nigeria This is the cheapest path in the Level 1 track, because the credential is your portfolio. The main barriers are data, power and hardware, so the course is built around them.",
        "Barrier How the course handles it Credential cost None required. The optional GitHub Foundations exam is listed at about US$49 to US$99 (roughly ₦ 65,000 to ₦ 132,000 at ₦ 1,330 per US$, mid-market rate in late October 2026; confirm the current price on GitHub's certification page).",
        "The certification plan notes that Nigeria's start-up and fintech ecosystem hires on demonstrated building ability, with good local hiring and remote freelancing. The next step after this course is to layer cloud or DevOps skills on top of your portfolio."
      ]
    },
    {
      "id": "resources",
      "title": "Resources",
      "paragraphs": [
        "The course has no required textbook; these are suggestions. freeCodeCamp: a free, self-paced full-stack curriculum covering HTML, CSS, JavaScript, React, TypeScript, Python and databases.",
        "The Odin Project (theodinproject.com): a free, project-first full-stack path. CS50W, Harvard's free web programming course.",
        "MDN Web Docs: the reference for HTML, CSS and JavaScript. Barrier How the course handles it Data costs Install tools and download packages once on campus Wi-Fi, keep the documentation pages you need saved for offline reading, and run everything on a local development server.",
        "Power cuts Commit often, push when you have connection, and work in short sessions that end with a commit so little is lost.",
        "Hardware A laptop with 8 GB of RAM is comfortable and 4 GB can work. If yours is too weak, tell the instructor in Week 1 about browser-based development options within free quotas.",
        "Hosting and accounts Free tiers cover every project, but some hosts ask for a payment card. Tell the instructor in Week 1 if that is a problem.",
        "Free study material freeCodeCamp's free full-stack curriculum, The Odin Project and Harvard's CS50W, to go deeper than the lectures.",
        "Study time The certification plan suggests 2 to 4 months of part-time study for this path. The course fits that range at 14 weeks.",
        "Official documentation for Python, TypeScript, React (react.dev), Next.js, FastAPI and PostgreSQL.",
        "OWASP Top 10: the standard list of web application risks. GitHub Docs and GitHub Skills: free guides and practice for Git and GitHub.",
        "Sources used to build this syllabus freeCodeCamp: major curriculum updates: the Certified Full Stack Developer curriculum.",
        "Microsoft Learn: GitHub Foundations: the optional exam, which is proctored. Third- party sites list the price between US$49 and US$99, so confirm it with GitHub.",
        "The attached Level 1 certification plan and 2026 IT certification landscape PDF, for the Nigeria portfolio approach, naira conversion and study-time guidance."
      ]
    },
    {
      "id": "appendix-a-skills-to-projects-map",
      "title": "Appendix A: Skills-to-projects map",
      "paragraphs": [
        "Each portfolio project proves the skills taught before it, so a reviewer can see your growth in order.",
        "Project Due Skills it proves Stack 1. Command-line tool Week 3 Programming basics, testing, packaging, Git workflow Python, pytest 2. Portfolio website Week 5 Semantic HTML, responsive CSS, DOM scripting, deployment HTML, CSS, JavaScript 3. Next.js application Week 8 Typed front-end code, components, routing, deployment TypeScript, React, Next.js 4. REST API Week 11 API design, SQL, authentication, secure coding, testing Python, FastAPI, SQL Capstone Week 14 Everything above, plus CI/CD, teamwork and documentation Next.js, FastAPI, PostgreSQL"
      ]
    },
    {
      "id": "appendix-b-the-portfoliokit-repository",
      "title": "Appendix B: The PortfolioKit repository",
      "paragraphs": [
        "Across the term you build PortfolioKit, one public Git repository for weekly work, and you give each project its own repository. Each Core exercise marked \"add it to PortfolioKit\" extends it. By Week 14 your history shows how you grew as a developer. portfoliokit/ README.md              # who you are, links to every project week-01/ ... week-14/  # exercises, notes and screenshots checkpoints/           # your reflections on both checkpoints reviews/               # pull requests you reviewed, with lessons learned project-1-cli-tool/      # separate repository project-2-portfolio-site/ project-3-nextjs-app/ project-4-rest-api/ capstone/ Setting up your environment You need a terminal, Git, VS Code, Python 3 and Node.js. Create the repository on GitHub, then connect it: git config --global user.name \"Your Name\" git config --global user.email \"you@example.com\" git init portfoliokit && cd portfoliokit mkdir week-01 && echo \"# Week 1\" > week-01/README.md git add . && git commit -m \"Week 1: environment ready\" git branch -M main git remote add origin https://github.com/<your-username>/portfoliokit.git git push -u origin main python3 --version node --version Exercise legend Level What it builds Time Warm-up Confidence: direct use of the week's core idea 20 to 30 minutes Core Mastery: a multi-step task that needs the week's full toolkit 1 to 3 hours Syllabus version: October 2026. The schedule may be adjusted with notice; the learning outcomes and grading weights stay fixed.",
        "Level What it builds Time Boss Level Stretch: open-ended and evidence-based, often a project milestone 3 to 6 hours"
      ]
    }
  ]
};
