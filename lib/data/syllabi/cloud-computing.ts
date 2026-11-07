import type { SyllabusData } from "./types";

export const syllabus: SyllabusData = {
  "slug": "cloud-computing",
  "title": "Cloud Fundamentals: AWS Certified Cloud Practitioner (CLF-C02)",
  "subtitle": "Course Syllabus · Level 1 Cloud Track",
  "sections": [
    {
      "id": "course-facts",
      "title": "Course facts",
      "paragraphs": [
        "A 10-week, lab-driven course that prepares students to pass AWS Certified Cloud Practitioner (CLF-C02) and leaves each of them with a documented, deployed cloud portfolio.",
        "Field Detail Course CLD 101 · Cloud Fundamentals (placeholder code) Level Introductory undergraduate; open to career switchers Duration 10 weeks, about 6 to 8 study hours per week Format Weekly lecture, hands-on AWS lab, short quiz, one capstone Core tools AWS Management Console, AWS CloudShell and CLI, AWS Skill Builder, AWS Pricing Calculator, Git and GitHub Prerequisites Basic computer literacy and a first comfort with a command line; no cloud experience Target exam AWS Certified Cloud Practitioner (CLF-C02): 65 questions (50 scored), 90 minutes, about US$100 Instructor To be announced Term To be announced Contact Posted on the course site"
      ]
    },
    {
      "id": "why-this-course-will-change-how-you-see-the-cloud",
      "title": "Why this course will change how you see the cloud",
      "paragraphs": [
        "Every bank transfer, streamed video and exam portal you used this week ran in a data centre that someone else owns and rents out by the second. This course shows you how that works, what it costs, and who is responsible when it breaks.",
        "You learn the cloud by using it. You open an account, lock it down, launch real resources, watch the bill and tear everything down again. By Week 10 you are ready to sit CLF-C02, and you hold a public portfolio that shows what you built. Employers hiring for cloud roles in banks and fintechs look for that hands-on proof next to the certificate, so the course produces both.",
        "Five pillars Core AWS services. Compute, storage, databases, networking, analytics and AI services, learned by what each one is for and when to choose it.",
        "Hands-on labs. Every week ends in the AWS console and the command line, not in slides.",
        "Security first. The shared responsibility model, IAM and least privilege appear in Week 1 and in every lab after it.",
        "Cost awareness. Every lab carries a price estimate, a budget alert and a clean-up step, so no student meets a surprise bill.",
        "Exam readiness and portfolio. Study time follows the exam's domain weights, and every lab adds to a public Git repository."
      ]
    },
    {
      "id": "how-the-course-works",
      "title": "How the course works",
      "paragraphs": [
        "Concept first, console second. Each service is introduced by the problem it solves, then used in the AWS console, then repeated from the command line.",
        "Learning by doing. Every theory topic has a lab in the same week. Three-tier exercises every week. Warm-up (confidence), Core (mastery) and Boss Level (stretch, the kind of scenario that appears in interviews and on the exam).",
        "One growing portfolio. Core exercises add to CloudLog, your public Git repository of notes, diagrams, cost estimates and scripts (Appendix B).",
        "Cost discipline. A budget alert comes before the first resource, and every lab ends with a clean-up checklist.",
        "Exam rhythm. A 10-question domain quiz each week, two checkpoint exams, and a final readiness gate before you book the real exam.",
        "A capstone that ships. From Week 3 to Week 10 you design, deploy, document and cost a small cloud architecture."
      ]
    },
    {
      "id": "learning-outcomes",
      "title": "Learning outcomes",
      "paragraphs": [
        "By the end of the course you will be able to: Explain the value of the AWS Cloud, the cloud service and deployment models, and the six pillars of the AWS Well-Architected Framework.",
        "Apply the shared responsibility model and secure an account with MFA, least-privilege IAM policies and a billing alarm.",
        "Choose the right AWS compute, storage, database, networking, analytics or AI service for a stated business need.",
        "Estimate, monitor and reduce cloud cost using AWS pricing models, Budgets, Cost Explorer and the Pricing Calculator.",
        "Pick a support plan and the right technical resources for a given situation. Deploy and document a small, secure, cost-controlled architecture, and score 80% or higher on full CLF-C02 practice exams."
      ]
    },
    {
      "id": "prerequisites-and-readiness-check",
      "title": "Prerequisites and readiness check",
      "paragraphs": [
        "No cloud experience is needed, only the basics below. If a self-check feels shaky, use the Week 1 refresher labs to close the gap.",
        "Area You should know Self-check Computers and files Folders, file types, installing software, using a browser Can you create a folder, save a text file in it and zip it?",
        "Command line Moving between folders and running a command in a terminal Which command lists the files in a folder? (Answer: ls on Linux and macOS, dir on Windows.)",
        "Networking basics IP address, domain name, web request What does DNS translate? (Answer: domain names into IP addresses.)"
      ]
    },
    {
      "id": "course-at-a-glance",
      "title": "Course at a glance",
      "paragraphs": [
        "Study time follows the exam's domain weights: Domains 1 and 2 get two weeks each, Domain 3 (the largest, at 34%) gets four, and Domain 4 gets one. Week 10 reviews all four.",
        "Area You should know Self-check Everyday cost maths One-off versus recurring cost A server costs ₦ 2,000,000 up front. Renting one costs ₦ 45,000 a month. Which is cheaper over 4 years? (Answer: buying, at ₦ 2,000,000 versus ₦ 2,160,000, before power and repairs.)",
        "Account basics An email address, a phone for MFA, and an AWS-accepted payment card Do you have all three? See the access plan below if the card is a problem.",
        "Week Module You will learn Exam domain Milestone 1 Cloud Concepts and AWS Global Infrastructure Cloud service and deployment models, benefits of the cloud, Regions, Availability Zones, edge locations, safe account setup 1 Budget alert live 2 Well-Architected Framework, Adoption and Cloud Economics Six pillars, Cloud Adoption Framework, migration strategies, TCO, CapEx versus OpEx 1 3 Shared Responsibility and Identity Shared responsibility model, IAM users, groups, roles and policies, MFA, least privilege 2 Capstone proposal due Week Module You will learn Exam domain Milestone 4 Protecting, Governing and Proving Compliance Encryption, CloudTrail, Config, Artifact, GuardDuty, Inspector, Shield, WAF, Organizations 2 Checkpoint exam 1 (Domains 1 and 2) 5 Compute, Containers and Serverless EC2, Auto Scaling, load balancing, containers, Lambda, Elastic Beanstalk, Lightsail 3 6 Networking and Content Delivery VPC, subnets, gateways, security groups, network ACLs, Route 53, CloudFront, VPN, Direct Connect 3 7 Storage and Databases S3 classes and lifecycle, EBS, EFS, RDS, Aurora, DynamoDB, ElastiCache, Redshift 3 Capstone architecture and cost baseline due 8 Integration, Analytics, AI/ML and Operations SQS, SNS, EventBridge, Athena, QuickSight, SageMaker, Bedrock, Rekognition, CloudWatch, CloudFormation, CLI and SDKs 3 9 Billing, Pricing and Support On-Demand, Reserved, Savings Plans and Spot pricing, Budgets, Cost Explorer, Pricing Calculator, support plans, Trusted Advisor 4 Checkpoint exam 2 (full 65-question mock) 10 Exam Readiness and Capstone Showcase Exam strategy, weak- domain review, readiness gate, capstone demos All Capstone final due The Milestone column marks graded items. Topics may be refined as AWS updates its services.",
        "The 10-week journey Each week lists a hook, the concepts, a live lab and three exercises. Submit your work in one public Git repository, CloudLog, with one folder per week: notes, diagrams, screenshots with account numbers hidden, scripts, and a short README with your reasoning."
      ]
    },
    {
      "id": "week-1-cloud-concepts-and-aws-global-infrastructure",
      "title": "Week 1 · Cloud Concepts and AWS Global Infrastructure",
      "paragraphs": [
        "The hook: How can two students launch an app for a million users without buying a single server?",
        "Milestone. Budget alert live. What we cover Cloud computing defined; IaaS, PaaS and SaaS; public, private and hybrid deployment Benefits: agility, elasticity, economies of scale, pay-as-you-go, global reach Regions, Availability Zones and edge locations, and how to choose a Region (latency, compliance, price, service availability) Opening an AWS account safely: root user, MFA, billing alert Three ways to use AWS: console, command line (CLI) and SDKs Live lab. Lab 1: Open and secure an AWS account (MFA on the root user, a budget alert) and tour the console and CloudShell.",
        "Warm-up. Classify ten products you use, such as a mobile-money app, an email service and a game server, as IaaS, PaaS or SaaS, with one line of justification each.",
        "Core. Pick a user base of your choice and select the best AWS Region for it, justified by latency, cost and compliance. Create CloudLog and commit your Lab 1 notes with a screenshot of your budget alert.",
        "Boss Level. Use CloudShell to list every Region and its Availability Zones, then compare the price of one EC2 instance type in two Regions with the Pricing Calculator and explain the difference."
      ]
    },
    {
      "id": "week-2-well-architected-framework-adoption-and-cloud-economi",
      "title": "Week 2 · Well-Architected Framework, Adoption and Cloud Economics",
      "paragraphs": [
        "The hook: Is it cheaper to buy the server or rent it? It depends on what you count.",
        "What we cover The six Well-Architected pillars: operational excellence, security, reliability, performance efficiency, cost optimization, sustainability Cloud design principles: design for failure, scale horizontally, loosely coupled components, automate The Cloud Adoption Framework and the migration strategies (retire, retain, rehost, relocate, repurchase, replatform, refactor) Cloud economics: CapEx versus OpEx, fixed versus variable cost, TCO, right-sizing, managed services, licensing Live lab. Lab 2: Review a sample architecture against the six pillars, then compare on- premises and AWS cost with the Pricing Calculator.",
        "Warm-up. Match twelve scenario sentences to the Well-Architected pillar each one illustrates.",
        "Core. Build a three-year TCO comparison for a small school portal, on-premises versus AWS, in a spreadsheet with every assumption stated. Add it to CloudLog.",
        "Boss Level. A bank wants to move ten applications. Assign a migration strategy to each of ten given application profiles, defend each choice in one sentence, and name the biggest risk of the whole plan."
      ]
    },
    {
      "id": "week-3-shared-responsibility-and-identity",
      "title": "Week 3 · Shared Responsibility and Identity",
      "paragraphs": [
        "The hook: Who is to blame when a customer's data leaks from a cloud storage bucket? The answer is in one diagram.",
        "Milestone. Capstone proposal due. What we cover The shared responsibility model: security of the cloud versus security in the cloud, and how the line moves for EC2, RDS, Lambda and S3 IAM users, groups, roles and policies, and how to read a JSON policy Least privilege, MFA, the root user's rules, and why long-lived access keys are a risk IAM Identity Center and federation (overview), password policies Live lab. Lab 3: Build an IAM setup with a group, a user, a role and a read-only S3 policy, and test it with the IAM policy simulator.",
        "Warm-up. For six services (EC2, RDS, Lambda, S3, DynamoDB, Fargate), mark whether you or AWS is responsible for patching the operating system and for choosing encryption.",
        "Core. Create a group with read-only S3 access, add a test user, sign in as that user and show that a delete action is denied. Save the policy JSON and your explanation in CloudLog.",
        "Boss Level. Rewrite a deliberately over-permissive policy (wildcard actions on all resources) to least privilege for a stated job, verify it in the policy simulator, and list three ways the original could have been abused."
      ]
    },
    {
      "id": "week-4-protecting-governing-and-proving-compliance",
      "title": "Week 4 · Protecting, Governing and Proving Compliance",
      "paragraphs": [
        "The hook: An auditor asks, \"Show me who changed that setting last Tuesday.\" Can you?",
        "Milestone. Checkpoint exam 1, covering Domains 1 and 2. What we cover Encryption at rest and in transit; AWS KMS and AWS Certificate Manager Logging and auditing: CloudTrail, AWS Config, CloudWatch (overview) Compliance resources: AWS Artifact, compliance programs, Audit Manager Threat protection: GuardDuty, Inspector, Shield, WAF, Security Hub, Trusted Advisor Security groups versus network ACLs, and AWS Organizations with service control policies Live lab. Lab 4: Turn on CloudTrail, find your own Lab 3 actions in the event history, and download a compliance report from AWS Artifact.",
        "Warm-up. Match ten threats (DDoS, SQL injection, leaked key, unpatched instance and others) to the AWS service that detects or blocks them.",
        "Core. Trace one Lab 3 action in CloudTrail (who, what, when, from where) and write a five- line incident note for CloudLog.",
        "Boss Level. Design a security baseline for a fintech start-up as a one-page diagram and checklist covering account structure, MFA, logging, encryption and alerting, mapped to the services above and to a stated compliance need such as card-data rules."
      ]
    },
    {
      "id": "week-5-compute-containers-and-serverless",
      "title": "Week 5 · Compute, Containers and Serverless",
      "paragraphs": [
        "The hook: A server that exists for 200 milliseconds. How can that be cheaper than one that never stops?",
        "What we cover EC2: instance families, AMIs, key pairs, security groups and user data Scaling and availability: Auto Scaling and Elastic Load Balancing Containers (ECS, EKS, Fargate, ECR), serverless (Lambda), and managed options (Elastic Beanstalk, Lightsail, AWS Batch) Choosing between virtual machines, containers and functions Live lab. Lab 5: Launch an EC2 instance that serves a web page, then write and invoke a Lambda function.",
        "Warm-up. Pick the best compute option for six scenarios: a nightly batch job, an always- on website, an event-driven image resize, containerized microservices, a simple blog and a lift-and-shift legacy application.",
        "Core. Launch an EC2 instance with a user-data script that serves a web page, confirm it in your browser, then stop and terminate it and record what Billing shows. Create a Lambda function that returns a greeting and invoke it from the console and the CLI.",
        "Boss Level. Using the Pricing Calculator, compare EC2 and Lambda for the same small workload at 1,000, 1 million and 100 million requests a month. Find where EC2 becomes cheaper and explain which option wins at each scale."
      ]
    },
    {
      "id": "week-6-networking-and-content-delivery",
      "title": "Week 6 · Networking and Content Delivery",
      "paragraphs": [
        "The hook: Your server is running, but nobody can reach it. Where do you look first?",
        "What we cover VPCs, public and private subnets, route tables, internet gateways and NAT gateways Security groups versus network ACLs Route 53 (DNS), CloudFront (content delivery from edge locations) and Global Accelerator (overview) Connecting to on-premises networks: Site-to-Site VPN and Direct Connect Live lab. Lab 6: Build a VPC with one public and one private subnet and reach a web server in the public subnet.",
        "Warm-up. Draw a VPC across two Availability Zones and mark which parts are public and which are private.",
        "Core. Create a custom VPC with a public and a private subnet, attach an internet gateway and launch an instance you can reach from your browser. Break the connection on purpose by removing the route to the internet gateway, then fix it. Add the diagram to CloudLog.",
        "Boss Level. A website's users are on three continents and pages load slowly. Propose a design with Route 53 and CloudFront, explain what each one solves, and state how you would measure the improvement."
      ]
    },
    {
      "id": "week-7-storage-and-databases",
      "title": "Week 7 · Storage and Databases",
      "paragraphs": [
        "The hook: Where do your phone's backed-up photos actually live, and why does it cost so little?",
        "Milestone. Capstone architecture and cost baseline due. What we cover Object, block and file storage: S3, EBS and EFS; S3 storage classes and lifecycle rules; AWS Backup and Storage Gateway (overview) Relational databases (RDS, Aurora), NoSQL (DynamoDB), in-memory caching (ElastiCache) and data warehousing (Redshift) Durability and availability: Multi-AZ, replication and backups Choosing storage and a database for a workload Live lab. Lab 7: Host a static website from S3, add a lifecycle rule, and create a DynamoDB table.",
        "Warm-up. Match eight data needs, such as video archive, shared files, shopping-cart sessions and monthly reports, to the best storage or database service.",
        "Core. Create an S3 bucket with public access blocked by default, upload files, serve a static site, and add a lifecycle rule that moves objects to a cheaper class after 30 days.",
        "Create a DynamoDB table and add five items from the console and from the CLI. Boss Level. A photo-sharing app expects to reach 10 TB within a year. Choose storage classes and a database, justify each choice by durability, access pattern and cost, and price the S3 part per month in the Pricing Calculator."
      ]
    },
    {
      "id": "week-8-integration-analytics-ai-ml-and-operations",
      "title": "Week 8 · Integration, Analytics, AI/ML and Operations",
      "paragraphs": [
        "The hook: A model can describe a photo, and nobody had to study data science to use it.",
        "How? What we cover Decoupling applications: SQS, SNS, EventBridge and Step Functions (overview), and API Gateway Analytics: Athena, Glue, Kinesis, QuickSight and EMR (overview) AI and ML: SageMaker, Bedrock, Rekognition, Comprehend, Transcribe, Translate, Polly, Lex and Textract; matching a service to a task; responsible use Operating on AWS: CloudWatch, CloudFormation (infrastructure as code), Systems Manager, and repeatable deployment through the CLI and SDKs Live lab. Lab 8: Call a managed AI service on a sample file, create an SNS topic and a CloudWatch alarm that emails you, and deploy a small CloudFormation template.",
        "Warm-up. Name the AWS service for each of ten tasks, such as translating text, detecting faces, queueing messages, building a custom model and querying files with SQL.",
        "Core. Deploy a CloudFormation template that creates an S3 bucket, view it as a stack, then delete the stack and confirm every resource is gone. Add the template and your notes to CloudLog.",
        "Boss Level. Design a receipt reader for a small shop on paper: a photo is uploaded, text is extracted, totals are stored and the owner is notified. Choose the services, draw the flow, and justify managed services over building your own."
      ]
    },
    {
      "id": "week-9-billing-pricing-and-support",
      "title": "Week 9 · Billing, Pricing and Support",
      "paragraphs": [
        "The hook: The same server, five different prices. Which one do you pick? Milestone. Checkpoint exam 2, a timed 65-question mock covering all four domains.",
        "What we cover Pricing models: On-Demand, Reserved Instances, Savings Plans, Spot, and how data transfer and storage are priced Cost tools: Budgets, Cost Explorer, Cost and Usage Reports, Pricing Calculator, cost allocation tags, consolidated billing and Free Tier tracking Support plans (Basic, Developer, Business, Enterprise On-Ramp, Enterprise), Trusted Advisor and the Technical Account Manager role Technical resources: AWS re:Post, Knowledge Center, Marketplace, Professional Services, Partner Network and Prescriptive Guidance Live lab. Lab 9: Explore Cost Explorer, tag resources, create a budget with email alerts, and compare support plans.",
        "Warm-up. Match six workloads to the best pricing model: a steady 24/7 database, a fault- tolerant batch job, an unpredictable start-up website and three more.",
        "Core. Tag two lab resources with Project and Owner, activate the tags for cost allocation, create a budget with an alert at 80%, and read your own Cost Explorer breakdown.",
        "Boss Level. Estimate the monthly cost of your capstone architecture three ways: On- Demand, with Savings Plans where they apply, and after right-sizing. Recommend a support plan for a five-person fintech and justify it."
      ]
    },
    {
      "id": "week-10-exam-readiness-and-capstone-showcase",
      "title": "Week 10 · Exam Readiness and Capstone Showcase",
      "paragraphs": [
        "The hook: Most passes are won in the last week by people who study the questions they got wrong.",
        "Milestone. Capstone final due, and the readiness gate (see below). What we cover Exam anatomy: 65 questions (50 scored, 15 unscored and unmarked), multiple choice and multiple response; answer every question, because blanks score zero Reading scenario questions: keywords, eliminating wrong options, flagging and returning Error-log review by domain, with extra time on shared responsibility, pricing models and service-selection questions Booking the exam: Pearson VUE test centre or online proctoring, ID rules, fee and voucher options Capstone presentations and peer feedback Live lab. Capstone showcase: demo, five-minute presentation and Q&A.",
        "Warm-up. Build your error log from both checkpoint exams: group every missed question by domain and by cause (did not know, misread, second-guessed).",
        "Core. Sit a full timed practice exam under real conditions, 90 minutes without notes, then write the rule you will remember for every wrong answer.",
        "Boss Level. Teach-back: record a five-minute explanation of your weakest topic for a first- year student. Then pass the readiness gate, 80% or higher on an official-style full practice exam, before you book the real one."
      ]
    },
    {
      "id": "capstone-project-build-secure-and-cost-a-real-cloud-architec",
      "title": "Capstone Project: Build, Secure and Cost a Real Cloud Architecture",
      "paragraphs": [
        "From Week 3 to Week 10 you design, deploy, document and defend a small cloud architecture for a real problem. It must be secure, cost-controlled, and cheap enough to run inside your AWS Free plan credits.",
        "Required deliverables A clear problem statement and a named set of users. An architecture diagram that labels the Well-Architected pillar each design choice supports.",
        "An IAM design with least privilege and MFA, plus a shared-responsibility note that says what AWS does and what you do.",
        "A monthly cost estimate and a live budget alert on your account. A working deployment that uses at least three service categories, for example storage, serverless compute and a database.",
        "A CloudFormation template or CLI script that recreates the build, and a clean-up proof showing every resource deleted.",
        "A five-minute presentation. Project idea starters Week Milestone What is due 3 Proposal Problem statement, users, the AWS services you expect to use, a success measure and a first cost guess 7 Architecture and cost baseline Architecture diagram, Pricing Calculator estimate, security checklist and a first working deployment 10 Final Working deployment or recorded demo, CloudLog README, five-minute presentation and clean-up proof A static website for a school or a student society on S3 and CloudFront, with a contact form handled by Lambda.",
        "A lecture attendance logger: API Gateway, Lambda and DynamoDB. A receipt reader for small shops using S3, Textract and DynamoDB (the Week 8 design, built).",
        "A secure file-sharing space for a student group using IAM roles and S3 presigned links.",
        "A photo catalogue for a market stall with automatic thumbnails from a Lambda function.",
        "A cost-optimization audit of a start-up's sample monthly AWS bill, with a rewritten architecture."
      ]
    },
    {
      "id": "assessment-and-grading",
      "title": "Assessment and grading",
      "paragraphs": [
        "Boss Level exercises are stretch work, and instructors may award bonus credit for them.",
        "The real AWS exam is not graded. The Week 10 readiness gate (80% or higher on an official-style full practice exam) tells you when to book it.",
        "Course policies Late work (draft policy, subject to the final syllabus) Up to 24 hours late: 10% penalty.",
        "24 to 48 hours late: 25% penalty. More than 48 hours late: not accepted unless arranged beforehand with the instructor.",
        "Each student has two emergency slip days for lab assignments, usable without penalty.",
        "Component Weight What counts Weekly hands-on labs 30% Warm-up and Core exercises each week, with CloudLog commits and clean-up evidence Checkpoint exams 25% Exam 1 in Week 4 (10%) and Exam 2 in Week 9 (15%), timed and in CLF-C02 style Capstone project 35% Architecture, deployment, security design, cost estimate, documentation and presentation Participation and quizzes 10% Weekly 10-question domain quizzes and discussion A documented power or network outage does not count as lateness if you tell the instructor within 24 hours.",
        "Using AI tools AI assistants are welcome as tutors and study partners. Disclose how you used them in each README. In the labs, do the console and CLI steps yourself, and never submit an explanation or a template you cannot explain. AI tools are not allowed in the checkpoint exams.",
        "Academic integrity Discussing ideas is encouraged. Labs and the capstone must be your own work, with any tutorial or code you adapt cited in the README. Do not use or share leaked exam questions, often called brain dumps. They break the AWS certification rules and can get a candidate banned.",
        "AWS account and cost safety Use your own AWS account, turn on MFA for the root user in Week 1, and create a budget alert before you launch any resource.",
        "Never put access keys, passwords or account numbers in Git. Hide account numbers in screenshots.",
        "Finish every lab with its clean-up checklist. Stop and delete what you launched. A new AWS Free plan gives $100 in credits at sign-up and up to $100 more for completing activities, for up to six months. Plan your capstone to fit inside it. The account closes at the earlier of six months or when the credits run out, and on that plan a forgotten resource uses up credits instead of charging your card (AWS Builder Center). On a Paid plan the same mistake charges your card.",
        "Access plan for Nigeria Exam fees and unreliable power and data, not the content, are the main barriers, so the course is built around them.",
        "The next step after this course is AWS Certified Solutions Architect - Associate (SAA- C03), the top-ranked certification for Nigeria in the certification plan."
      ]
    },
    {
      "id": "resources",
      "title": "Resources",
      "paragraphs": [
        "The course has no required textbook; these are suggestions. AWS Certification exam guides: the official CLF-C02 guide, with domains, weights and task statements.",
        "AWS Skill Builder (skillbuilder.aws): free Cloud Practitioner Essentials, Builder Labs and practice question sets.",
        "Barrier How the course handles it Exam fee About US$100, roughly ₦ 133,000 at ₦ 1,330 per US$ (mid-market rate, late October 2026; vendor price, taxes and local rates vary). Book only after the Week 10 readiness gate. A pass on any AWS exam earns a 50% voucher toward the next one, according to the certification plan; confirm it in your AWS Certification account.",
        "Payment card AWS asks for a payment method at sign-up. If you have no card that accepts international payments, tell the instructor in Week 1 so alternatives can be arranged.",
        "Power and data Labs run in short sessions, end with clean-up so an outage cannot leave resources running, and use browser-based CloudShell, so nothing needs installing. Download notes, diagrams and the exam guide for offline study.",
        "Free study material AWS Skill Builder's free Cloud Practitioner Essentials course and Builder Labs, plus the AWS Free Tier credits.",
        "Study time The certification plan allows 2 to 4 weeks of self- study for this exam. The course spreads the same content over 10 weeks to add labs, a capstone and exam practice.",
        "AWS Free Tier: current credit and plan rules. AWS Pricing Calculator (calculator.aws): used in Weeks 1, 2, 5, 7 and 9.",
        "AWS Well-Architected Framework documentation (docs.aws.amazon.com/wellarchitected).",
        "The AWS whitepaper Overview of Amazon Web Services. Sources used to build this syllabus AWS Certification exam guides: exam format and the four domains with weights of 24%, 30%, 34% and 12%.",
        "AWS: Free Tier now offers $200 in credits and a 6-month free plan AWS Builder Center: getting started with the AWS Free Tier The attached Level 1 certification plan and the 2026 IT certification landscape PDF, for exam cost, naira conversion, voucher and study-resource details."
      ]
    },
    {
      "id": "appendix-a-exam-domain-map",
      "title": "Appendix A: Exam domain map",
      "paragraphs": [
        "Where each CLF-C02 domain is taught, so you can steer your revision by weight. Domain Weight of scored content Course weeks Task statements covered 1. Cloud Concepts 24% 1 to 2 Benefits of the AWS Cloud, design principles, migration strategies, cloud economics 2. Security and Compliance 30% 3 to 4 Shared responsibility, governance and compliance, access management, security components and resources 3. Cloud Technology and Services 34% 1, 5 to 8 Ways to deploy and operate, global infrastructure, compute, databases, networking, storage, AI/ML and analytics, other service categories 4. Billing, Pricing and Support 12% 9 Pricing models, billing and cost tools, support plans and technical resources"
      ]
    },
    {
      "id": "appendix-b-the-cloudlog-portfolio",
      "title": "Appendix B: The CloudLog portfolio",
      "paragraphs": [
        "Across the term you build CloudLog, one public Git repository that doubles as your portfolio. Each Core exercise marked \"add it to CloudLog\" extends it. By Week 10 you hold proof of hands-on work that you can discuss in an interview. cloudlog/ README.md            # who you are, what you built, links week-01/ ... week-10/  # notes, diagrams, screenshots (account numbers hidden), scripts capstone/ architecture.png cost-estimate.pdf template.yaml      # CloudFormation template or CLI script that recreates the build security-checklist.md error-log.md         # missed practice questions by domain and cause, from Week 4 Setting up your environment You need an AWS account on the Free plan, a GitHub account and a browser. AWS CloudShell runs in the console, so nothing has to be installed. git init cloudlog && cd cloudlog mkdir week-01 && echo \"# Week 1\" > week-01/README.md git add . && git commit -m \"Week 1: account setup and budget alert\" # in CloudShell aws sts get-caller-identity aws ec2 describe-regions --output table Exercise legend Level What it builds Time Warm-up Confidence: direct use of the week's core idea 20 to 30 minutes Core Mastery: a multi-step task in the console and CLI 1 to 2 hours Boss Level Stretch: open-ended, scenario-based and evidence-based 2 to 4 hours Syllabus version: October 2026. The schedule may be adjusted with notice; the learning outcomes and grading weights stay fixed."
      ]
    }
  ]
};
