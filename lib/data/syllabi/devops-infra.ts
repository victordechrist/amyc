import type { SyllabusData } from "./types";

export const syllabus: SyllabusData = {
  "slug": "devops-infra",
  "title": "Infrastructure as Code: HashiCorp Terraform Associate (004)",
  "subtitle": "Course Syllabus · Level 1 DevOps Track",
  "sections": [
    {
      "id": "course-facts",
      "title": "Course facts",
      "paragraphs": [
        "A 10-week, lab-driven course that prepares students to pass HashiCorp Certified: Terraform Associate (004) and leaves each of them with a reusable, version-controlled Terraform project.",
        "Field Detail Course IAC 101 · Infrastructure as Code with Terraform (placeholder code) Level Introductory undergraduate; for students who already know Linux, Git and basic cloud ideas Duration 10 weeks, about 6 to 8 study hours per week Format Weekly lecture, hands-on Terraform lab, short quiz, one capstone Core tools Terraform CLI (the exam tests version 1.12), VS Code with the HashiCorp Terraform extension, Git and GitHub, Docker (optional), an AWS Free plan account for some labs, a free HCP Terraform account Prerequisites Linux command line, Git and basic cloud concepts; no Terraform experience Target exam HashiCorp Certified: Terraform Associate (004): multiple choice, 1 hour, online proctored, about US$70.50, valid for 2 years. HashiCorp does not publish the question count, passing score or domain weights"
      ]
    },
    {
      "id": "why-this-course-will-change-how-you-see-every-server-you-bui",
      "title": "Why this course will change how you see every server you build",
      "paragraphs": [
        "The first server you build by hand is an achievement. The tenth is a risk, because nobody remembers exactly how the first nine were set up. Infrastructure as code replaces that memory with a text file that a machine can read, a team can review and Git can version.",
        "This course teaches Terraform, the most widely used tool for that job. You learn to describe infrastructure, preview a change before making it, keep a record of what exists, share the work through modules, and run it safely as a team. The certification plan ranks Terraform Associate as an accessible, high-return credential, and notes that it pairs well with cloud and security skills and leads toward platform and reliability roles. By Week 10 you are ready to sit the exam, and you hold a project that rebuilds an environment from scratch with one command.",
        "Five pillars Infrastructure as code. Describe what you want, let Terraform work out how, and review every change before it happens.",
        "Hands-on labs. Every week ends at the terminal with real init, plan, apply and destroy runs, starting with offline-friendly providers.",
        "State and safety. State, drift, locking and secrets are taught as core skills, because most real Terraform problems live there.",
        "Reusable design. Variables, modules and versions turn one-off scripts into code a team can share.",
        "Exam readiness and portfolio. Study follows all eight official objectives, and every lab adds to InfraLog, your public Git repository.",
        "Field Detail Exam version 004 replaced 003 on 8 January 2026 and adds ephemeral values, custom conditions and HCP Terraform workspaces and projects Instructor To be announced Term To be announced Contact Posted on the course site"
      ]
    },
    {
      "id": "how-the-course-works",
      "title": "How the course works",
      "paragraphs": [
        "Run it, then explain it. Every concept is typed into a real configuration and run. The exam asks what happens when you do, so you learn by watching.",
        "Offline-friendly first. Early labs use the local, random and Docker providers, which need no cloud account and little data. Cloud labs come later and stay inside free-plan credits.",
        "Three-tier exercises every week. Warm-up (confidence), Core (mastery) and Boss Level (stretch, the kind of scenario asked in interviews and on the exam).",
        "One growing portfolio. Core exercises add to InfraLog, your public Git repository of configurations, modules and runbooks (Appendix B).",
        "Study every objective. HashiCorp publishes eight objectives and 37 sub-objectives and no weights, so the course covers all of them (Appendix A).",
        "Exam rhythm. A 10-question quiz each week, two checkpoint exams and a final readiness gate before you book the real exam.",
        "A capstone that ships. From Week 3 to Week 10 you build a reusable, multi- environment project, and tear it down again with one command."
      ]
    },
    {
      "id": "learning-outcomes",
      "title": "Learning outcomes",
      "paragraphs": [
        "By the end of the course you will be able to: Explain infrastructure as code, its advantages, and how Terraform handles multi-cloud, hybrid and service-agnostic workflows.",
        "Install, version and configure providers, and run the core workflow: init, validate, plan, apply, destroy and fmt.",
        "Write configuration with resources, data sources, variables, outputs, complex types, expressions, functions and dependencies.",
        "Validate configuration with custom conditions and handle sensitive and ephemeral data safely.",
        "Build, version and compose reusable modules. Manage state: backends, locking, remote state and drift.",
        "Maintain real infrastructure: import it, inspect state and debug with verbose logging.",
        "Use HCP Terraform workspaces, projects and governance features. Score 80% or higher on full practice exams of the Terraform Associate (004) objectives."
      ]
    },
    {
      "id": "prerequisites-and-readiness-check",
      "title": "Prerequisites and readiness check",
      "paragraphs": [
        "Terraform assumes you can work in a terminal and understand what a server and a network are. The Cloud Fundamentals and Software Development courses in this track cover these skills. If a self-check feels shaky, spend the first week refreshing that area."
      ]
    },
    {
      "id": "course-at-a-glance",
      "title": "Course at a glance",
      "paragraphs": [
        "HashiCorp publishes eight numbered objectives and no weights, so every objective is taught. Configuration (Objective 4) is the largest and gets three weeks.",
        "Area You should know Self-check Linux command line Navigating folders, editing files, running commands, environment variables How do you set an environment variable for one command in Linux? (Answer: put NAME=value before the command, or use export for the session.)",
        "Git Commit, branch, push, and a .gitignore file Which file stops Git tracking a file you do not want to publish?",
        "(Answer: .gitignore.) Cloud concepts Servers, networks, storage, regions and why cloud costs money Why should you destroy lab resources when you finish?",
        "(Answer: running resources keep using credits or money.) Reading configuration Key-value text formats such as JSON or YAML Can you spot the error in a JSON object that is missing a comma?",
        "Equipment A laptop with 8 GB of RAM if you use Docker, 4 GB without it Can you install Terraform and VS Code? If not, tell the instructor in Week 1 about the browser-based sandbox.",
        "Week Module You will learn Exam objective Milestone 1 Infrastructure as Code Foundations IaC and its advantages, declarative versus manual provisioning, multi-cloud workflows, installing Terraform, a first apply 1 Terraform installed, first apply done 2 Providers, State Basics and the Core Workflow Providers and versions, the lock file, multiple providers, state purpose, init, validate, fmt, plan, apply, destroy 2 and 3 3 Configuration I: Resources, Data, Variables, Outputs Resource and data blocks, references, input variables, outputs, locals 4a to 4c Capstone proposal due 4 Configuration II: Types, Expressions, Functions, Dependencies Complex types, for expressions, count and for_each, functions, depends_on, lifecycle rules 4d to 4f 5 Configuration III: Validation and Sensitive Data Variable validation, preconditions, checks, sensitive and ephemeral values, secrets and Vault 4g and 4h Checkpoint exam 1 (Objectives 1 to 4) 6 Modules Module sources, variable scope, composition, version pinning 5 Capstone design due 7 State Management Local and remote backends, locking, drift, refresh-only mode, moved blocks 6 The Milestone column marks graded items. Topics may be refined as Terraform and the exam change.",
        "The 10-week journey Each week lists a hook, the concepts, a live lab and three exercises. Submit your work in one public Git repository, InfraLog, with one folder per week: configurations, plan and apply output, and a short README with your reasoning. Never commit state files or secrets, and destroy every lab resource before you finish."
      ]
    },
    {
      "id": "week-1-infrastructure-as-code-foundations",
      "title": "Week 1 · Infrastructure as Code Foundations",
      "paragraphs": [
        "The hook: It took a team three days to build the test server by hand, and three more to rebuild it after a mistake. What if a text file could do it in two minutes?",
        "Milestone. Terraform installed and first apply done. What we cover What infrastructure as code is, and its advantages: repeatability, version control, speed, consistency, review and documentation Declarative versus manual provisioning, and where Terraform fits among other tools How Terraform handles multi-cloud, hybrid cloud and service-agnostic workflows Week Module You will learn Exam objective Milestone 8 Maintaining Infrastructure Importing resources, inspecting state, verbose logging, troubleshooting 7 9 HCP Terraform Workspaces, projects, teams, variable sets, remote runs, policy, CLI integration 8 Checkpoint exam 2 (full mock) 10 Exam Readiness and Capstone Showcase All 37 sub-objectives, error-log review, readiness gate, capstone demos All Capstone final due The HCL language in outline, Terraform Community edition versus HCP Terraform, and installing Terraform and an editor Live lab. Lab 1: Install Terraform, write a configuration that creates a local file and a random name, and run init, plan, apply and destroy.",
        "Warm-up. Sort twelve statements into advantages of infrastructure as code and problems of manual provisioning.",
        "Core. Use the local_file and random_pet resources to generate a ten-line report. Apply it, change one value, apply again, and explain what Terraform changed and why. Commit the work to InfraLog.",
        "Boss Level. Build the same three-resource setup three ways: by hand, with a shell script and with Terraform. Compare repeatability, speed, drift, review and rollback, using evidence from doing at least two of them."
      ]
    },
    {
      "id": "week-2-providers-state-basics-and-the-core-workflow",
      "title": "Week 2 · Providers, State Basics and the Core Workflow",
      "paragraphs": [
        "The hook: Terraform runs on plugins. Where do they come from, and what remembers what they built?",
        "What we cover Providers: source addresses, required_providers, version constraints, the dependency lock file and provider blocks How Terraform uses providers, and writing configuration with multiple providers and aliases The purpose of state: mapping configuration to real resources The core workflow: init, validate, fmt, plan, apply and destroy, and reading the resource graph Live lab. Lab 2: Use two providers in one configuration, pin their versions, and walk the full workflow while reading the state file.",
        "Warm-up. Match twelve commands to what each does and to its stage of the workflow.",
        "Core. Pin provider versions with constraints, upgrade with init -upgrade, and show how the lock file changes. Add a second provider with an alias and use both in one configuration.",
        "Boss Level. Generate the resource graph for a five-resource configuration, predict the creation and destruction order, then check your prediction against the apply and destroy output and explain any difference."
      ]
    },
    {
      "id": "week-3-configuration-i-resources-data-variables-and-outputs",
      "title": "Week 3 · Configuration I: Resources, Data, Variables and Outputs",
      "paragraphs": [
        "The hook: Hard-coded values are fine for a demo. What happens when three teams need the same setup?",
        "Milestone. Capstone proposal due. What we cover Resource blocks versus data blocks, and when to use each References between resources, resource addressing and implicit dependencies Input variables (type, default, description), tfvars files, TF_VAR_ environment variables and their precedence Output values and local values Live lab. Lab 3: Refactor a hard-coded configuration into variables, locals and outputs, and read from an existing source with a data block.",
        "Warm-up. Label each block in a 30-line configuration as resource, data, variable, output or local, and say how each is referenced.",
        "Core. Build a small web page served by a Docker container (or, if you have an AWS Free plan account, an S3 static site) with variables for name and tags. Supply values through a tfvars file and an environment variable, and show the precedence order by setting the same variable in three places.",
        "Boss Level. Take a working configuration with 15 hard-coded values and make it reusable for dev and staging. Leave no hard-coded values, expose the outputs a downstream user needs, and document every input in a README table."
      ]
    },
    {
      "id": "week-4-configuration-ii-types-expressions-functions-and-depe",
      "title": "Week 4 · Configuration II: Types, Expressions, Functions and Dependencies",
      "paragraphs": [
        "The hook: You need five similar servers, each with its own name and tag. Do you copy the block five times?",
        "What we cover Primitive and complex types: lists, sets, maps, objects and tuples, with type constraints Expressions: conditionals, for expressions and splat expressions; count and for_each; dynamic blocks Built-in functions for strings, collections, numbers, files and encoding, tested in terraform console Dependencies: implicit references, depends_on, and the lifecycle rules create_before_destroy, prevent_destroy and ignore_changes Live lab. Lab 4: Use for_each over a map of objects to create several resources and a dynamic block, and test functions in terraform console.",
        "Warm-up. Predict the result of ten expressions and function calls, then check each in terraform console.",
        "Core. Create several resources with count and the same set with for_each. Remove the middle item from each list and explain why for_each avoids unwanted replacements.",
        "Boss Level. Build a configuration that takes a map of environments (name, size and an enabled flag) and creates only the enabled ones, with computed names and tags, using for expressions, conditionals and functions. Add one depends_on where no implicit dependency exists, and explain why it is needed."
      ]
    },
    {
      "id": "week-5-configuration-iii-validation-and-sensitive-data",
      "title": "Week 5 · Configuration III: Validation and Sensitive Data",
      "paragraphs": [
        "The hook: A typo in one variable creates a resource nobody can delete. How can Terraform refuse it before it happens?",
        "Milestone. Checkpoint exam 1, covering Objectives 1 to 4. What we cover Variable validation blocks, preconditions, postconditions and check blocks, with clear error messages Sensitive variables and outputs, and why secrets still appear in state Ephemeral values and write-only arguments, new in the 004 exam, where a provider supports them Managing secrets with a secrets manager such as Vault (overview); keeping secrets out of Git Live lab. Lab 5: Add validation, a precondition and a check to your Week 4 configuration, then handle one secret three ways: marked sensitive, supplied by environment variable, and as an ephemeral or write-only value where supported.",
        "Warm-up. Write validation rules for five inputs: a region name, a network CIDR block, an environment name, a port number and an email address.",
        "Core. Add variable validation, a precondition and a postcondition to a configuration, trigger each failure on purpose, and record the error messages. Mark a password variable sensitive and show where it still appears in the state file.",
        "Boss Level. Write a one-page secrets-handling standard for a Terraform team: what counts as sensitive or ephemeral, where secrets live, who can read state, and what to do if a secret is committed. Test two of its controls in your lab."
      ]
    },
    {
      "id": "week-6-modules",
      "title": "Week 6 · Modules",
      "paragraphs": [
        "The hook: You have written the same network block four times. A module is a function call for infrastructure.",
        "Milestone. Capstone design due: module interfaces and an architecture diagram. What we cover Root and child modules, and how Terraform sources modules (local path, the Terraform Registry, Git, private registry) Variable scope in modules: inputs, outputs and passing values between modules Module composition, structure and documentation, and when not to make a module Managing module versions with version constraints and pinning Live lab. Lab 6: Build a local module, call it twice with different inputs, and use a public registry module with a pinned version.",
        "Warm-up. Draw how values flow into and out of a module with two inputs and two outputs, and list what the parent can and cannot see.",
        "Core. Extract repeated resources into a local module with variables and outputs and call it twice. Then call a Registry module with a version constraint and read its inputs and outputs.",
        "Boss Level. Design a two-module composition, for example a network module and an app module, where the second consumes the first's outputs. Release the first as a Git tag, pin the second to it, document both in READMEs, and show an upgrade from version 1.0.0 to 1.1.0."
      ]
    },
    {
      "id": "week-7-state-management",
      "title": "Week 7 · State Management",
      "paragraphs": [
        "The hook: The state file is the only memory Terraform has. What happens when two people write to it at once?",
        "What we cover The local backend, and why teams use remote backends State locking and how to configure remote state with a backend block Resource drift: detecting it with refresh-only mode and deciding whether to accept or revert it Refactoring state with moved and removed blocks, and the state command family (overview) Live lab. Lab 7: Move a configuration's state from local to a remote backend, watch a lock being held, and detect and resolve drift.",
        "Warm-up. Match eight state problems, such as lost state, two simultaneous runs, drift and a renamed resource, to the feature that addresses each.",
        "Core. Migrate a configuration's state from the local backend to a remote backend of your choice, such as HCP Terraform or an AWS S3 bucket. Start two applies at once to see the lock, and record the error.",
        "Boss Level. Change a resource outside Terraform to cause drift, detect it with a refresh- only plan, and show both outcomes: accepting the change and reverting it. Then rename a resource with a moved block without destroying it."
      ]
    },
    {
      "id": "week-8-maintaining-infrastructure",
      "title": "Week 8 · Maintaining Infrastructure",
      "paragraphs": [
        "The hook: Much of the world's infrastructure was built before anyone wrote it down. How do you bring it under control?",
        "What we cover Importing existing infrastructure with import blocks and the import command, including generated configuration Inspecting state with terraform state list and show, terraform show and outputs Verbose logging with TF_LOG and TF_LOG_PATH, and when to use each log level The troubleshooting workflow, upgrading Terraform and provider versions, and forcing replacement safely Live lab. Lab 8: Create a resource by hand, import it into Terraform with an import block, and make the plan show no changes.",
        "Warm-up. Put the import steps in order and say whether each one changes your configuration, your state or real infrastructure.",
        "Core. Import a manually created resource, write matching configuration until the plan is clean, and use state list and state show to inspect it.",
        "Boss Level. Debug three broken configurations (a provider error, a dependency cycle and a wrong attribute reference) using validate, plan output and TF_LOG at different levels.",
        "Write a short runbook listing the symptoms, commands and fixes."
      ]
    },
    {
      "id": "week-9-hcp-terraform",
      "title": "Week 9 · HCP Terraform",
      "paragraphs": [
        "The hook: Your whole team runs Terraform from laptops. Whose version, whose credentials, and who approved that apply?",
        "Milestone. Checkpoint exam 2, a full timed mock covering all eight objectives. What we cover HCP Terraform and Terraform Enterprise versus Community edition Workspaces, projects, teams and variable sets; run triggers Remote runs, the CLI-driven and version-control-driven workflows, the cloud block, terraform login and migrating state Collaboration and governance: the private registry, policy enforcement, change requests, drift detection and health checks Live lab. Lab 9: Create a free HCP Terraform organisation, connect a GitHub repository to a workspace, and run a plan and apply remotely. Check HashiCorp's current free-tier limits first.",
        "Warm-up. Sort twelve features into Community edition, HCP Terraform or both. Core. Migrate a configuration's state to HCP Terraform with the cloud block, store a sensitive value in a variable set, and trigger a remote run from a pull request.",
        "Boss Level. Organise two projects containing three workspaces (dev, staging and prod), link two of them with a run trigger, restrict who can apply to prod with a team permission or a policy, and document the design for a five-person team."
      ]
    },
    {
      "id": "week-10-exam-readiness-and-capstone-showcase",
      "title": "Week 10 · Exam Readiness and Capstone Showcase",
      "paragraphs": [
        "The hook: One hour of multiple choice, and every question assumes you have run the command yourself.",
        "Milestone. Capstone final due, and the readiness gate (see below). What we cover Exam anatomy: one hour, multiple choice, online proctored, Terraform 1.12; HashiCorp does not publish the question count, passing score or domain weights Reading questions that ask which command to run, what happens next, or what is true Reviewing all 37 sub-objectives, the official learning path and the official sample questions Error-log review by objective; booking and ID rules; the exam fee does not include a retake Next steps after the exam, and capstone presentations Live lab. Capstone showcase: demo, five-minute presentation and Q&A.",
        "Warm-up. Build your error log from both checkpoint exams, grouped by objective and by cause, and tick off each of the 37 sub-objectives you can explain without notes.",
        "Core. Work the official sample questions, then sit a full timed practice exam of 60 minutes without notes. For every wrong answer, run the relevant command in your lab and write what you saw.",
        "Boss Level. Teach-back: record a five-minute explanation of your weakest objective for a first-year student. Then pass the readiness gate, 80% or higher on an official-style full practice exam, before you book the real exam."
      ]
    },
    {
      "id": "capstone-project-provision-a-reusable-multi-environment",
      "title": "Capstone Project: Provision a Reusable, Multi-Environment",
      "paragraphs": [
        "Environment From Week 3 to Week 10 you build a Terraform project that creates a small but complete environment, such as a web application with its network, compute and storage, for both a dev and a staging setup, and that can be destroyed and rebuilt with one command.",
        "Required deliverables Week Milestone What is due 3 Proposal The environment you will provision, the providers you will use, and how you will keep costs inside free credits 6 Design Architecture diagram, module interfaces (inputs and outputs), environment plan and state strategy 10 Final Working project, remote state, README, destroy proof and a ten-minute presentation A root configuration plus at least two reusable modules, each with documented inputs and outputs, and pinned module and provider versions.",
        "Separate dev and staging environments driven by variables, not copied code. Remote state with locking, and a written note on how state is protected.",
        "Input validation, and a secrets approach with no secrets in Git or in logs. A GitHub Actions workflow that runs fmt, validate and plan on every pull request.",
        "An architecture diagram, a README that lets a stranger run the project, and a cost note.",
        "Proof that terraform destroy removes everything, and a ten-minute presentation. Project idea starters A static website with storage, a content delivery layer and a custom domain placeholder.",
        "A small application tier: network, a virtual machine or container, and a database.",
        "A student lab environment that can be created and torn down for each class. A monitored web service with alarms and a notification topic.",
        "A reusable \"project starter\" module set for a club or small business. A local Docker-based platform with a reverse proxy, an app and a database, for students without cloud credits."
      ]
    },
    {
      "id": "assessment-and-grading",
      "title": "Assessment and grading",
      "paragraphs": [
        "Component Weight What counts Weekly hands-on labs 30% Warm-up and Core exercises each week, with configurations, plan and apply evidence, and InfraLog commits Checkpoint exams 25% Exam 1 in Week 5 (10%) and Exam 2 in Week 9 (15%), timed and in Terraform Associate style Capstone project 35% Modules, environments, remote state, validation, CI, documentation and presentation Participation and quizzes 10% Weekly 10-question quizzes and discussion Boss Level exercises are stretch work, and instructors may award bonus credit for them.",
        "The real Terraform Associate exam is not graded. The Week 10 readiness gate (80% or higher on an official-style full practice exam) tells you when to book it, since the exam fee does not include a retake.",
        "Course policies Cloud cost and lab safety Create a budget alert on any cloud account before your first apply. On an AWS Free plan, forgotten resources use up your credits.",
        "Run terraform destroy at the end of every lab, and confirm in the provider's console that nothing is left running.",
        "Use small, free-plan-eligible resource sizes, and never create resources you do not need for the lab.",
        "Use only your own accounts and never run Terraform against someone else's infrastructure without written permission.",
        "State files and secrets Never commit state files, .terraform directories, or tfvars files that contain secrets.",
        "Add them to .gitignore in Week 1. State can contain secrets in plain text, so treat it like a password file and store it in a protected remote backend.",
        "If you commit a secret by accident, rotate it immediately and tell the instructor.",
        "Late work (draft policy, subject to the final syllabus) Up to 24 hours late: 10% penalty.",
        "24 to 48 hours late: 25% penalty. More than 48 hours late: not accepted unless arranged beforehand with the instructor.",
        "Each student has two emergency slip days for lab assignments, usable without penalty.",
        "A documented power or network outage does not count as lateness if you tell the instructor within 24 hours.",
        "Using AI tools AI assistants are welcome as tutors and pair programmers. Disclose how you used them in each README. Always read the plan before you apply generated code, and never submit a configuration you cannot explain line by line. AI tools are not allowed in the checkpoint exams.",
        "Academic integrity Discussing ideas is encouraged. Labs and the capstone must be your own work, with any module, tutorial or snippet you adapt cited in the README. Do not use or share leaked exam questions, often called brain dumps. They break HashiCorp's certification rules and can lead to a ban.",
        "Access plan for Nigeria This is the cheapest exam in the Level 1 track, and most of the practice runs offline, so it suits Nigerian cost, power and data conditions well.",
        "Barrier How the course handles it Exam fee About US$70.50, roughly ₦ 94,000 at ₦ 1,330 per US$ (mid-market rate, late October 2026; vendor price, taxes and local rates vary). The certification plan calls it the cheapest high-signal item in the track.",
        "The fee does not include a retake, so book only after the Week 10 readiness gate.",
        "Free study material HashiCorp's official 004 learning path, exam content list and sample questions are free, and the course follows them.",
        "Data costs Run terraform init  once on campus Wi-Fi with a provider plugin cache, so later labs reuse downloaded providers offline. Early labs use only the local, random and Docker providers.",
        "Power cuts Run labs in short sessions, keep state remote or committed-safe, and destroy before you stop so nothing is left running.",
        "Cloud cost Use free-plan credits for the few cloud labs, set a budget alert, and destroy after every lab. Students without credits complete the capstone in a local Docker version.",
        "The certification plan notes that Terraform pairs well with cloud and security paths and has strong remote platform and site-reliability potential. It describes Terraform, the Certified Kubernetes Administrator (CKA) and a cloud credential as a high-return stack, and lists the Kubernetes and Cloud Native Associate (KCNA, about US$250) as a beginner-friendly complement."
      ]
    },
    {
      "id": "resources",
      "title": "Resources",
      "paragraphs": [
        "The course has no required textbook; these are suggestions. HashiCorp Terraform Associate certification page: exam details and registration.",
        "Associate exam content list (004): the official objectives mapped to documentation and tutorials.",
        "Associate learning path (004) and sample questions (004). Terraform documentation for version 1.12 (developer.hashicorp.com/terraform/docs).",
        "The Terraform Registry (registry.terraform.io): providers and public modules. Terraform sandbox: a browser-based practice environment.",
        "HCP Terraform (app.terraform.io): a free account for the Week 9 labs. Sources used to build this syllabus HashiCorp: Terraform Associate (004) exam content list: the eight objectives, 37 sub- objectives and the four new topics in 004.",
        "HashiCorp: Infrastructure Automation certifications: the 8 January 2026 switch from 003 to 004, and Terraform 1.12.",
        "HashiCorp: Terraform Associate: one hour, multiple choice, online proctored, two-year validity.",
        "Barrier How the course handles it Hardware Terraform itself is light. Docker needs 8 GB of RAM.",
        "Students with weak laptops can use HashiCorp's browser-based Terraform sandbox. Study time The certification plan allows 4 to 8 weeks of self- study for this exam. The course spreads the same content over 10 weeks to add labs, a capstone and exam practice.",
        "The attached Level 1 certification plan and 2026 IT certification landscape PDF, for the exam price, naira conversion, study-time and career guidance."
      ]
    },
    {
      "id": "appendix-a-exam-objective-map",
      "title": "Appendix A: Exam objective map",
      "paragraphs": [
        "HashiCorp publishes eight objectives and 37 sub-objectives but no weights, so study every one. This table shows where each is taught.",
        "Objective Course weeks Sub-objectives 1. Infrastructure as Code with Terraform 1 Explain IaC, its advantages, and multi- cloud, hybrid and service-agnostic workflows (1a to 1c) 2. Terraform fundamentals 2 Install and version providers, how providers are used, multiple providers, how state is used and managed (2a to 2d) 3. Core Terraform workflow 2 Workflow, init, validate, plan, apply, destroy and fmt (3a to 3g) 4. Terraform configuration 3 to 5 Resource and data blocks, references, variables and outputs, complex types, expressions and functions, dependencies, custom conditions, sensitive data and secrets (4a to 4h) 5. Terraform modules 6 Sourcing modules, variable scope, using modules, module versions (5a to 5d) 6. Terraform state management 7 Local backend, state locking, remote state, drift (6a to 6d) 7. Maintain infrastructure with Terraform 8 Import, inspecting state, verbose logging (7a to 7c) 8. HCP Terraform 9 Creating infrastructure, collaboration and governance, workspaces and projects, CLI integration (8a to 8d)"
      ]
    },
    {
      "id": "appendix-b-the-infralog-portfolio",
      "title": "Appendix B: The InfraLog portfolio",
      "paragraphs": [
        "Across the term you build InfraLog, one public Git repository that doubles as your portfolio. Each Core exercise marked \"add it to InfraLog\" extends it. By Week 10 you hold proof of hands-on work you can discuss in an interview. infralog/ README.md              # who you are, what you built, links week-01/ ... week-10/  # configurations, plan and apply output, notes modules/               # your reusable modules, tagged in Git capstone/ README.md architecture.png main.tf  variables.tf  outputs.tf  versions.tf modules/ envs/dev.tfvars  envs/staging.tfvars .github/workflows/terraform.yml error-log.md           # missed practice questions by objective and cause .gitignore Setting up your environment Install Terraform and VS Code with the HashiCorp Terraform extension, then create the repository. Put these lines in .gitignore on day one: *.tfstate *.tfstate.* .terraform/ crash.log *.auto.tfvars These commands make up the core workflow, and the plugin cache saves repeated downloads: terraform version terraform init terraform fmt -check terraform validate terraform plan -out=tfplan terraform apply tfplan terraform destroy # reuse downloaded providers across labs mkdir -p \"$HOME/.terraform.d/plugin-cache\" export TF_PLUGIN_CACHE_DIR=\"$HOME/.terraform.d/plugin-cache\" Exercise legend Syllabus version: October 2026. The schedule may be adjusted with notice; the learning outcomes and grading weights stay fixed.",
        "Level What it builds Time Warm-up Confidence: direct use of the week's core idea 20 to 30 minutes Core Mastery: a multi-step task that runs real Terraform 1 to 2 hours Boss Level Stretch: open-ended, scenario-based and evidence-based 2 to 4 hours"
      ]
    }
  ]
};
