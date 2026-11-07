import type { SyllabusData } from "./types";

export const syllabus: SyllabusData = {
  "slug": "cybersecurity",
  "title": "Security Foundations: CompTIA Security+ (SY0-701)",
  "subtitle": "Course Syllabus · Level 1 Cybersecurity Track",
  "sections": [
    {
      "id": "course-facts",
      "title": "Course facts",
      "paragraphs": [
        "A 12-week, lab-driven course that prepares students to pass CompTIA Security+ (SY0- 701) and leaves each of them with a documented security assessment of a small organization.",
        "Field Detail Course SEC 101 · Security Foundations (placeholder code) Level Introductory undergraduate; open to career switchers Duration 12 weeks, about 6 to 8 study hours per week Format Weekly lecture, hands-on lab in an isolated virtual lab, short quiz, one capstone Core tools VirtualBox, Ubuntu and Windows virtual machines, Wireshark, Nmap, OpenSSL, CyberChef, a vulnerability scanner (Greenbone or Nessus Essentials), TryHackMe free tier, Git and GitHub Prerequisites Networking basics and a first comfort with a command line; no security experience. CompTIA recommends Network+ and two years of IT experience but sets no formal prerequisite Target exam CompTIA Security+ (SY0-701): up to 90 questions (multiple choice and performance-based), 90 minutes, passing score 750 on a 100 to 900 scale, about US$392 to US$404"
      ]
    },
    {
      "id": "why-this-course-will-change-how-you-see-every-system-you-use",
      "title": "Why this course will change how you see every system you use",
      "paragraphs": [
        "Every mobile-banking login, card payment and hospital record is a promise that someone is watching the door. Banks, fintechs, telcos and government agencies report a shortage of people who can do that job, and Security+ is the entry credential they ask for most often.",
        "This course teaches you to think like a defender. You learn how attackers get in, how systems are built to resist them, how teams detect and respond when they fail, and how organizations govern risk. You practise in an isolated lab you build yourself, and you finish by assessing and hardening a small organization on paper and in your lab. By Week 12 you are ready to sit SY0-701, and you hold a portfolio that shows what you did.",
        "Five pillars Defender's mindset. Every topic starts from an asset to protect, a threat to it and a control that reduces the risk.",
        "Hands-on labs. Weekly work in an isolated virtual lab: capture traffic, scan, harden, read logs and respond to a simulated incident.",
        "Ethics and law first. You test only systems you own or have written permission to test, and you learn why from Week 1.",
        "Risk and governance. Policies, risk registers, audits and compliance, the part of security that decides what gets funded.",
        "Exam readiness and portfolio. Study time follows the five domain weights, and every lab adds to SecLog, your public Git repository.",
        "Field Detail Exam version SY0-701 launched on 7 November 2023. One estimate puts its retirement around May 2027; confirm the date on CompTIA's site before you plan your booking Instructor To be announced Term To be announced Contact Posted on the course site"
      ]
    },
    {
      "id": "how-the-course-works",
      "title": "How the course works",
      "paragraphs": [
        "Understand the attack, then build the defence. Each topic shows how something fails, then which control prevents, detects or corrects it.",
        "Learning by doing. Every theory topic has a lab in the same week, run in an isolated virtual lab on your own machine.",
        "Three-tier exercises every week. Warm-up (confidence), Core (mastery) and Boss Level (stretch, the kind of scenario that appears in interviews and in performance- based exam questions).",
        "One growing portfolio. Core exercises add to SecLog, your public Git repository of lab notes, scan reports, policies and playbooks (Appendix B).",
        "Exam rhythm. A 10-question domain quiz each week, performance-based question drills, two checkpoint exams and a final readiness gate.",
        "A capstone that ships. From Week 3 to Week 12 you assess, harden and document the security of a small organization."
      ]
    },
    {
      "id": "learning-outcomes",
      "title": "Learning outcomes",
      "paragraphs": [
        "By the end of the course you will be able to: Compare security control categories and types, and explain core concepts such as the CIA triad, zero trust and change management.",
        "Choose and apply cryptographic solutions, including hashing, encryption, digital signatures and certificates.",
        "Identify threat actors, attack surfaces, vulnerabilities and indicators of compromise, and recommend mitigations.",
        "Apply security principles to network, cloud, data and resilience design. Operate core security tools: harden systems, scan for vulnerabilities, read logs and alerts, and manage identity and access.",
        "Follow an incident response process and use data sources to support an investigation.",
        "Explain governance, risk management, third-party risk, compliance, audits and security awareness.",
        "Score 85% or higher on full SY0-701-style practice exams."
      ]
    },
    {
      "id": "prerequisites-and-readiness-check",
      "title": "Prerequisites and readiness check",
      "paragraphs": [
        "No security experience is needed, only the basics below. If a self-check feels shaky, use the Week 1 refresher lab to close the gap."
      ]
    },
    {
      "id": "course-at-a-glance",
      "title": "Course at a glance",
      "paragraphs": [
        "Study time follows the five domain weights: Security Operations (28%) gets three weeks, Threats (22%) and Program Management (20%) get two each, Architecture (18%) gets two, and General Security Concepts (12%) gets two because the rest builds on it. Week 12 reviews everything.",
        "Area You should know Self-check Networking basics IP addresses, ports, DNS, the TCP/IP layers Which port does HTTPS use by default? (Answer: 443.)",
        "Operating systems Users, files and permissions on Windows and Linux What does chmod 640 give the owner, the group and everyone else? (Answer: owner read and write, group read, others nothing.)",
        "Command line Moving between folders and running commands Which command shows your machine's IP configuration?",
        "(Answer: ip addr or ifconfig on Linux, ipconfig on Windows.) Number systems Binary and decimal Write 192 in binary. (Answer: 11000000.)",
        "Equipment A laptop with 8 GB of RAM, 40 GB of free disk and virtualization switched on Can you run a virtual machine? If not, tell the instructor in Week 1 and use browser-based labs instead.",
        "Week Module You will learn Exam domain Milestone 1 Security Concepts and Controls CIA triad, AAA, non- repudiation, control categories and types, zero trust, gap analysis, change management 1 Lab environment ready 2 Cryptography and PKI Symmetric and asymmetric encryption, hashing, salting, digital signatures, certificates, PKI, key management 1 3 Threat Actors, Vectors and Social Engineering Actors and motivations, attack surfaces, phishing and other social engineering 2 Capstone proposal due 4 Vulnerabilities, Malware and Mitigations Vulnerability types, malware, network, application and password attacks, indicators, mitigation techniques 2 5 Secure Architecture and Network Security On-premises, cloud, virtualization, containers, IoT and ICS, segmentation, firewalls, VPNs 3 6 Data Protection and Resilience Data types and classification, encryption states, backups, high availability, recovery sites and testing 3 Checkpoint exam 1 (Domains 1 to 3) Week Module You will learn Exam domain Milestone 7 Hardening, Identity and Access Secure baselines, hardening, wireless, mobile and application security, asset management, IAM, MFA, SSO, PAM 4 Capstone baseline due 8 Vulnerability Management, Monitoring and Tools Scanning, CVSS, logging, SIEM, alerting, IDS and IPS, EDR, DLP, NAC, email and DNS filtering 4 9 Incident Response, Forensics and Automation Incident response process, evidence handling, data sources for investigations, automation and orchestration 4 10 Governance, Risk and Compliance Policies, standards, governance structures, risk assessment, risk register, BIA, compliance and privacy 5 11 Third-Party Risk, Audits and Awareness Vendor assessment, agreements, audits and assessments, penetration testing types, awareness training 5 Checkpoint exam 2 (full mock) 12 Exam Readiness and Capstone Showcase Performance-based question strategy, error-log review, readiness gate, capstone demos All Capstone final due The Milestone column marks graded items. Topics may be refined if CompTIA updates the exam.",
        "The 12-week journey Each week lists a hook, the concepts, a live lab and three exercises. Submit your work in one public Git repository, SecLog, with one folder per week: notes, screenshots with sensitive details hidden, scan reports, scripts and a short README with your reasoning.",
        "All attack practice happens only inside your own isolated lab."
      ]
    },
    {
      "id": "week-1-security-concepts-and-controls",
      "title": "Week 1 · Security Concepts and Controls",
      "paragraphs": [
        "The hook: A locked door, a camera and a guard all protect the same room. Which one actually stops the burglar?",
        "Milestone. Lab environment ready. What we cover The CIA triad, non-repudiation, and authentication, authorization and accounting Control categories (technical, managerial, operational, physical) and types (preventive, deterrent, detective, corrective, compensating, directive) Zero trust, gap analysis, physical security and deception technology such as honeypots Change management: approvals, impact analysis and backout plans Ethics and law: why authorization comes before any testing Live lab. Lab 1: Build your isolated lab. Install VirtualBox, create Ubuntu and Windows virtual machines on a host-only network, take a snapshot, and show with a ping that the machines reach each other but not the internet.",
        "Warm-up. Sort fifteen controls, such as a badge reader, a firewall rule, a security policy, a backup restore and a camera, by category and by type.",
        "Core. Write a one-page gap analysis for a fictional 20-person clinic against a short list of basic controls. Commit it to SecLog with your lab notes and snapshot proof.",
        "Boss Level. Choose a public, historic breach. Map the controls that failed or were missing to the categories and types above, and argue which single control would have changed the outcome."
      ]
    },
    {
      "id": "week-2-cryptography-and-pki",
      "title": "Week 2 · Cryptography and PKI",
      "paragraphs": [
        "The hook: How can two strangers agree on a secret while everyone is listening? What we cover Symmetric versus asymmetric encryption, key exchange and key length Hashing, salting, key stretching and digital signatures Certificates, certificate authorities, PKI, revocation, key management, TPMs and HSMs, and the TLS handshake in outline Encryption levels (disk, file, database, transport), obfuscation (masking, tokenization, steganography) and the blockchain idea Live lab. Lab 2: Use OpenSSL and CyberChef to hash files, encrypt and decrypt a message, generate a key pair, sign a file and verify the signature.",
        "Warm-up. Choose symmetric encryption, asymmetric encryption or hashing for eight needs, such as storing passwords, sending a file securely and proving a file is unchanged.",
        "Core. Create a private certificate authority with OpenSSL and issue a certificate for a lab web server. Record the browser warning before you trust your CA and after.",
        "Boss Level. Hash twenty test passwords of your own with and without a salt, attack both sets with a small dictionary in your lab, and explain how salting and key stretching change the result."
      ]
    },
    {
      "id": "week-3-threat-actors-vectors-and-social-engineering",
      "title": "Week 3 · Threat Actors, Vectors and Social Engineering",
      "paragraphs": [
        "The hook: The strongest firewall cannot stop an employee who is told the boss urgently needs gift cards.",
        "Milestone. Capstone proposal due. What we cover Threat actors and motivations: nation-state, organized crime, hacktivist, insider, unskilled attacker, shadow IT Attack surfaces and vectors: messages, files, voice, removable media, unsecured networks, supply chain, default credentials Social engineering: phishing, smishing, vishing, pretexting, business email compromise, impersonation, typosquatting Threat intelligence and open-source intelligence Live lab. Lab 3: Analyze five sample phishing emails in a safe viewer. Inspect headers and links without opening attachments, and check URLs and file hashes with VirusTotal.",
        "Warm-up. Match twelve scenarios to the threat actor and the motivation behind each.",
        "Core. Build a table of threat actors, attack surfaces and likely methods for a fictional fintech, and finish your capstone proposal.",
        "Boss Level. For a fictional company, write a simulated phishing email that stays in your lab and is never sent. List the warning signs a user should spot, the reporting path, and the metrics you would track."
      ]
    },
    {
      "id": "week-4-vulnerabilities-malware-and-mitigations",
      "title": "Week 4 · Vulnerabilities, Malware and Mitigations",
      "paragraphs": [
        "The hook: Most breaches use a hole that had a patch for months. Why was it still open?",
        "What we cover Vulnerability types: SQL injection, cross-site scripting, buffer overflow, race conditions, misconfiguration, supply-chain weaknesses, zero-days, weak cryptography Malware: ransomware, trojans, worms, spyware, keyloggers, rootkits, logic bombs Attacks and indicators: password spraying and brute force, denial of service, on-path attacks, DNS attacks, and indicators such as account lockouts, impossible travel and unusual resource use Mitigation: segmentation, patching, least privilege, allow lists, encryption, monitoring, hardening and decommissioning Live lab. Lab 4: In your own isolated lab, attack and then fix a deliberately vulnerable web application such as DVWA or OWASP Juice Shop. Demonstrate SQL injection and cross- site scripting, then apply and verify the fix.",
        "Warm-up. Match ten log excerpts or symptoms to the most likely attack or indicator.",
        "Core. Follow a guided SQL injection against the vulnerable app, then apply the guided fix and show that the same attack now fails. Add your before-and-after evidence to SecLog.",
        "Boss Level. Write a one-page ransomware readiness brief for a school: the likely entry points, three preventive, two detective and two corrective controls, and how you would test the backups."
      ]
    },
    {
      "id": "week-5-secure-architecture-and-network-security",
      "title": "Week 5 · Secure Architecture and Network Security",
      "paragraphs": [
        "The hook: One flat network is one big room. Break in anywhere and you can reach everything.",
        "What we cover Architecture models: on-premises, cloud, hybrid, infrastructure as code, serverless, microservices, virtualization and containers, and the shared responsibility model IoT, industrial control systems, embedded and real-time systems, and why they are hard to patch Segmentation, zones, DMZs, jump servers and air gaps; firewalls (stateful, web application, next-generation), proxies and load balancers; VPNs, IPsec and TLS Secure protocols, device placement and network access control Live lab. Lab 5: Split your lab into two networks with a firewall (a Linux VM using nftables or iptables, or an appliance VM such as OPNsense) and write rules that allow only what a web server needs.",
        "Warm-up. Draw a flat network, then draw the same network segmented into user, server and guest zones.",
        "Core. Write firewall rules so users reach the web server over HTTPS only, the guest zone reaches only the internet, and nothing reaches the management zone. Test each rule with Nmap against your own lab and record the results.",
        "Boss Level. Compare hosting one application on-premises, on infrastructure as a service and as serverless. For each, state who is responsible for what and which two attacks matter most, then recommend one for a small bank with a limited budget."
      ]
    },
    {
      "id": "week-6-data-protection-and-resilience",
      "title": "Week 6 · Data Protection and Resilience",
      "paragraphs": [
        "The hook: The ransomware did not skip the backups. It encrypted them first. Where were yours?",
        "Milestone. Checkpoint exam 1, covering Domains 1 to 3. What we cover Data types and classification, data states (at rest, in transit, in use), data sovereignty and geographic restrictions Protection methods: encryption, masking, tokenization, segmentation and permission restrictions Resilience: high availability, clustering, load balancing, site strategies (hot, warm, cold), platform diversity Backups (full, incremental, differential), snapshots, replication, the 3-2-1 rule, power resilience, and testing through tabletop and failover exercises Live lab. Lab 6: Back up a small data set three ways, delete it, restore it and measure the restore time.",
        "Warm-up. Given a recovery point objective of 4 hours and a recovery time objective of 2 hours, choose a backup schedule and a site type that fit.",
        "Core. Create a four-level data classification scheme for a clinic, label ten example data items, and assign a protection method to each.",
        "Boss Level. Design a backup and recovery plan for a fintech with a 1-hour recovery point objective and a 4-hour recovery time objective. Include the 3-2-1 layout, a test schedule and the single point of failure you would remove first."
      ]
    },
    {
      "id": "week-7-hardening-identity-and-access",
      "title": "Week 7 · Hardening, Identity and Access",
      "paragraphs": [
        "The hook: Half of your attackers do not break in. They log in. Milestone. Capstone baseline due: asset inventory, threat model and first scan.",
        "What we cover Secure baselines (establish, deploy, maintain) and hardening of workstations, servers, network devices, mobile devices and wireless networks Application security: input validation, code signing and sandboxing Asset management: acquisition, inventory, ownership, disposal and data sanitization Identity and access management: provisioning and de-provisioning, SSO and federation, MFA factors, password managers, privileged access management, and access control models (RBAC, ABAC, MAC, DAC) Live lab. Lab 7: Harden a fresh Ubuntu and Windows virtual machine against a baseline checklist such as a CIS Benchmark, and enable MFA on a test account.",
        "Warm-up. Match access control models to six scenarios, such as a hospital, a military archive and a shared drive.",
        "Core. Apply at least 15 baseline settings to a virtual machine, record the state before and after, and add the hardening checklist to SecLog.",
        "Boss Level. Design identity and access for a 20-person company: roles, a joiner-mover- leaver process, an MFA policy, privileged account handling and a recovery plan for a lost MFA device."
      ]
    },
    {
      "id": "week-8-vulnerability-management-monitoring-and-tools",
      "title": "Week 8 · Vulnerability Management, Monitoring and Tools",
      "paragraphs": [
        "The hook: You cannot defend what you cannot see. What is happening on your network right now?",
        "What we cover Vulnerability scanning, CVSS scoring, false positives, remediation, validation and reporting; scans versus penetration tests Logging, SIEM, alerting, SNMP traps, NetFlow, agents versus agentless collection and alert tuning Security tools: firewalls, IDS and IPS, web and DNS filtering, email security (SPF, DKIM, DMARC), DLP, EDR and XDR, NAC and file integrity monitoring Live lab. Lab 8: Scan your own lab with Greenbone or Nessus Essentials, rank the findings by CVSS, and capture and read traffic with Wireshark.",
        "Warm-up. Read a ten-line authentication log and flag the three suspicious entries.",
        "Core. Run an authenticated vulnerability scan against one of your lab machines, triage the top five findings as valid, false positive or low priority, fix two, and rescan to show they are closed.",
        "Boss Level. Write plain-language detection rules for three events: repeated failed logins, a new administrator account and a large outbound transfer. For each, say how it could raise a false alarm and how you would tune it."
      ]
    },
    {
      "id": "week-9-incident-response-forensics-and-automation",
      "title": "Week 9 · Incident Response, Forensics and Automation",
      "paragraphs": [
        "The hook: It is 3 a.m. and the alarm has just fired. Who does what in the first hour?",
        "What we cover The incident response process: preparation, detection, analysis, containment, eradication, recovery and lessons learned; tabletop and simulation exercises; root cause analysis and threat hunting Digital forensics: legal hold, chain of custody, acquisition, order of volatility and reporting Data sources for investigations: log files, packet captures, endpoint and network logs, dashboards and vulnerability scans Automation and orchestration: SOAR, scripting and scheduled tasks, with their benefits and risks Live lab. Lab 9: Investigate a prepared incident. From a log bundle and a packet capture, build a timeline and name the likely entry point.",
        "Warm-up. Put the incident response phases in order for five short stories, and name the phase each listed action belongs to.",
        "Core. Write a one-page incident response playbook for credential theft by phishing, with roles, steps, a contact tree and the evidence to keep. Add it to SecLog.",
        "Boss Level. Run a 45-minute tabletop exercise on a ransomware scenario with two classmates, record the decisions and gaps, and write a lessons-learned report with three ranked improvements."
      ]
    },
    {
      "id": "week-10-governance-risk-and-compliance",
      "title": "Week 10 · Governance, Risk and Compliance",
      "paragraphs": [
        "The hook: The CEO asks, \"Are we secure?\" What is the honest answer on one page? What we cover Governance: policies (acceptable use, information security, incident response, business continuity, change management), standards, procedures, external considerations, and roles such as owner, controller, processor and custodian Risk management: identification, qualitative and quantitative assessment (SLE, ARO, ALE), the risk register, appetite and tolerance, and the strategies of accept, avoid, transfer and mitigate Business impact analysis: RTO, RPO, MTTR and MTBF Compliance and privacy: reporting, monitoring and the consequences of non- compliance; privacy law such as the Nigeria Data Protection Act 2023; frameworks such as NIST CSF, ISO 27001, CIS Controls and PCI DSS (overview) Live lab. Lab 10: Build a risk register for a fictional fintech with ten risks, score each one and propose a treatment.",
        "Warm-up. Calculate SLE, ARO and ALE by hand for three scenarios, using ALE = SLE × ARO.",
        "Core. Write three one-page policies in plain language for a 20-person company: acceptable use, passwords and access, and incident reporting.",
        "Boss Level. Map your ten risks and three policies to one framework (NIST CSF, ISO 27001 or CIS Controls), find one gap and say how you would close it, then present the result to a mock board in five minutes."
      ]
    },
    {
      "id": "week-11-third-party-risk-audits-and-awareness",
      "title": "Week 11 · Third-Party Risk, Audits and Awareness",
      "paragraphs": [
        "The hook: Your own defences were fine. The breach came in through your payroll vendor.",
        "Milestone. Checkpoint exam 2, a timed full mock with performance-based questions covering all five domains.",
        "What we cover Third-party risk: vendor assessment, due diligence, right-to-audit clauses, supply chain analysis and ongoing monitoring; agreements such as SLA, MSA, MOA, MOU, NDA and BPA Audits and assessments: internal, external and independent; attestation; penetration testing types and environments (known, partially known, unknown); passive and active reconnaissance Security awareness: phishing campaigns, recognising unusual behaviour, user guidance, training, reporting channels and culture Live lab. Lab 11: Evaluate a fictional vendor against a questionnaire and write a recommendation.",
        "Warm-up. Match eight agreement and assessment types to their purposes. Core. Design a 15-question vendor risk questionnaire for a cloud payroll provider, score three sample responses, and recommend accept, accept with conditions, or reject for each.",
        "Boss Level. Plan a six-month awareness programme for a bank's staff: topics, formats, a reporting channel, and the metrics that would show behaviour has changed."
      ]
    },
    {
      "id": "week-12-exam-readiness-and-capstone-showcase",
      "title": "Week 12 · Exam Readiness and Capstone Showcase",
      "paragraphs": [
        "The hook: Performance-based questions put you inside a scenario with the clock running.",
        "Practise them like a skill. Milestone. Capstone final due, and the readiness gate (see below).",
        "What we cover Exam anatomy: up to 90 questions, multiple choice and performance-based, 90 minutes, a scaled score where 750 on a 100 to 900 scale passes; flag performance- based questions and return to them Reading scenario questions: keywords such as best, first and most likely, and eliminating wrong options Error-log review across all five domains, with extra time on acronyms and commonly confused pairs such as IDS and IPS, or RTO and RPO Booking the exam: Pearson VUE test centre or online proctoring, ID rules, fee and retake rules, and the SY0-701 retirement date Capstone presentations and peer feedback Live lab. Capstone showcase: demo, five-minute presentation and Q&A.",
        "Warm-up. Build your error log from both checkpoint exams, grouped by domain and by cause, and write the twenty acronyms you miss most as plain sentences.",
        "Core. Sit a full timed practice exam with performance-based questions, 90 minutes without notes, then write the rule you will remember for every wrong answer.",
        "Boss Level. Teach-back: record a five-minute explanation of your weakest domain for a first-year student. Then pass the readiness gate, 85% or higher on an official-style full practice exam, before you book the real exam."
      ]
    },
    {
      "id": "capstone-project-assess-and-harden-a-small-organization",
      "title": "Capstone Project: Assess and Harden a Small Organization",
      "paragraphs": [
        "From Week 3 to Week 12 you assess the security of a small organization, harden a lab replica of its systems, and document what you found and fixed. Work on a fictional organization, or on a real one only with written permission and the instructor's approval of the scope.",
        "Required deliverables A scope and rules-of-engagement page, approved by the instructor before any testing.",
        "An asset inventory with data classification, and a threat model naming the top ten threats.",
        "Week Milestone What is due 3 Proposal Organization, scope, rules of engagement, the assets you will protect and the success measure 7 Baseline Asset inventory, data classification, threat model and a first vulnerability scan of your lab replica 12 Final Hardened lab, before-and-after scan comparison, risk register, policies, incident playbook, report and presentation A before-and-after vulnerability scan with triage and the fixes you applied.",
        "At least two hardened machines and a segmented network design, with a hardening checklist.",
        "A risk register of at least ten risks, mapped to one framework (NIST CSF, ISO 27001 or CIS Controls).",
        "Three policies, one incident response playbook and the notes from a tabletop exercise.",
        "A 10 to 15 page report and a ten-minute presentation. Project idea starters A branch of a small microfinance bank (fictional) with a lab replica of its customer portal.",
        "A school results portal that must protect student records. A clinic's appointment and records system, assessed against the Nigeria Data Protection Act 2023.",
        "A mobile-money agent network: a paper assessment of fraud and SIM-swap risk. A small online shop: payment page security, backups and vendor risk.",
        "A student society's cloud accounts: identity, MFA and phishing resilience."
      ]
    },
    {
      "id": "assessment-and-grading",
      "title": "Assessment and grading",
      "paragraphs": [
        "Boss Level exercises are stretch work, and instructors may award bonus credit for them.",
        "The real Security+ exam is not graded. The Week 12 readiness gate (85% or higher on an official-style full practice exam) tells you when to book it.",
        "Component Weight What counts Weekly hands-on labs 30% Warm-up and Core exercises each week, with SecLog commits and lab evidence Checkpoint exams 25% Exam 1 in Week 6 (10%) and Exam 2 in Week 11 (15%), timed and in SY0-701 style with performance-based questions Capstone project 35% Assessment, hardening, risk register, policies, playbook, report and presentation Participation and quizzes 10% Weekly 10-question domain quizzes and discussion Course policies Ethical hacking and lab safety These rules are not optional, and breaking them is treated as serious academic misconduct.",
        "Test only systems you own, such as the virtual machines in your lab, or systems for which you hold written permission. Unauthorized access to a computer system is a crime under Nigerian law.",
        "Never scan or probe the campus network, your internet provider, other students or any public system.",
        "Keep your lab on host-only or internal networks, separate from the campus and home network.",
        "Use only fictional or synthetic data. Never use real personal data in a lab. Use the malware and phishing samples the instructor provides, only inside your isolated virtual machines. Do not write or distribute malicious code.",
        "Late work (draft policy, subject to the final syllabus) Up to 24 hours late: 10% penalty.",
        "24 to 48 hours late: 25% penalty. More than 48 hours late: not accepted unless arranged beforehand with the instructor.",
        "Each student has two emergency slip days for lab assignments, usable without penalty.",
        "A documented power or network outage does not count as lateness if you tell the instructor within 24 hours.",
        "Using AI tools AI assistants are welcome as tutors and study partners. Disclose how you used them in each README. In the labs, run the tools and commands yourself, and never submit an explanation, policy or script you cannot explain. AI tools are not allowed in the checkpoint exams.",
        "Academic integrity Discussing ideas is encouraged. Labs and the capstone must be your own work, with any tutorial or template you adapt cited in the README. Do not use or share leaked exam questions, often called brain dumps. They break CompTIA's certification rules and can lead to a ban.",
        "Access plan for Nigeria The exam fee is the biggest barrier in this track, so the course is built to make one attempt count.",
        "The next steps after this course are CEH, the AWS Certified Security - Specialty or CCSP, according to the certification plan.",
        "Barrier How the course handles it Exam fee About US$392 to US$404, roughly ₦ 520,000 to ₦ 540,000 at ₦ 1,330 per US$ (mid-market rate, late October 2026; vendor price, taxes and local rates vary). It is the costliest exam in this Level 1 track.",
        "Book only after the Week 12 readiness gate, look for official discount vouchers or academic pricing, and buy only from CompTIA or its authorised partners.",
        "Exam version SY0-701 may retire around May 2027 by one estimate. Check CompTIA's site in Week 1 and plan your booking date before it.",
        "Lab hardware The lab needs a laptop with 8 GB of RAM. Students without one use browser-based labs such as the TryHackMe free tier, and tell the instructor in Week 1.",
        "Power and data Download virtual machine images and tools once on campus Wi-Fi, take a snapshot before every lab so a power cut cannot corrupt a machine, and keep your notes offline.",
        "Free study material Professor Messer's free full SY0-701 video course, free study groups and TryHackMe free rooms, as recommended in the certification plan.",
        "Study time The certification plan allows 4 to 8 weeks of self- study for this exam. The course spreads the same content over 12 weeks to add labs, a capstone and exam practice."
      ]
    },
    {
      "id": "resources",
      "title": "Resources",
      "paragraphs": [
        "The course has no required textbook; these are suggestions. CompTIA Security+ certification page: the official exam objectives and current exam details.",
        "Professor Messer's free SY0-701 course (professormesser.com): a full video course covering every objective.",
        "Mike Chapple, CompTIA Security+ Study Guide (SY0-701): a comprehensive book. TryHackMe (tryhackme.com): free browser-based rooms for hands-on practice.",
        "Tool documentation: Wireshark, Nmap, OpenSSL, CyberChef, Greenbone and VirtualBox.",
        "Practice targets for your own lab: DVWA and OWASP Juice Shop. Frameworks: NIST Cybersecurity Framework, ISO 27001 overview, CIS Controls and CIS Benchmarks.",
        "Sources used to build this syllabus Sailor: Security+ SY0-701 exam guide 2026: exam specifications and the domain weights of 12%, 22%, 18%, 28% and 20%.",
        "Destination Certification: Security+ passing score: the 750 on a 100 to 900 scale passing score.",
        "Professor Messer: differences between SY0-601 and SY0-701: release date and the estimated retirement window.",
        "The attached Level 1 certification plan and 2026 IT certification landscape PDF, for exam cost, naira conversion and study-resource details."
      ]
    },
    {
      "id": "appendix-a-exam-domain-map",
      "title": "Appendix A: Exam domain map",
      "paragraphs": [
        "Where each SY0-701 domain is taught, so you can steer your revision by weight. Domain Weight Course weeks Topics covered 1. General Security Concepts 12% 1 to 2 Control types, fundamental concepts, change management, cryptographic solutions"
      ]
    },
    {
      "id": "appendix-b-the-seclog-portfolio",
      "title": "Appendix B: The SecLog portfolio",
      "paragraphs": [
        "Across the term you build SecLog, one public Git repository that doubles as your portfolio.",
        "Each Core exercise marked \"add it to SecLog\" extends it. By Week 12 you hold proof of hands-on work that you can discuss in an interview. Hide sensitive details in every screenshot.",
        "Domain Weight Course weeks Topics covered 2. Threats, Vulnerabilities and Mitigations 22% 3 to 4 Threat actors, vectors and attack surfaces, vulnerabilities, indicators, mitigation techniques 3. Security Architecture 18% 5 to 6 Architecture models, secure enterprise infrastructure, data protection, resilience and recovery 4. Security Operations 28% 7 to 9 Hardening, asset management, vulnerability management, monitoring, security tools, IAM, automation, incident response, investigations 5. Security Program Management and Oversight 20% 10 to 11 Governance, risk management, third-party risk, compliance, audits, awareness seclog/ README.md              # who you are, what you built, links week-01/ ... week-12/  # notes, screenshots, scan reports, scripts capstone/ scope-and-rules.md asset-inventory.csv threat-model.md scans/               # before and after reports hardening-checklist.md risk-register.csv policies/ ir-playbook.md report.pdf error-log.md           # missed practice questions by domain and cause, from Week 6 Setting up your environment You need VirtualBox, an Ubuntu virtual machine, a Windows virtual machine, Wireshark, Nmap, OpenSSL and Git. Keep every machine on a host-only network. git init seclog && cd seclog mkdir week-01 && echo \"# Week 1\" > week-01/README.md git add . && git commit -m \"Week 1: isolated lab built\" # inside your lab VM ip addr openssl version # scan only your own host-only lab network sudo nmap -sn 192.168.56.0/24 Exercise legend Level What it builds Time Warm-up Confidence: direct use of the week's core idea 20 to 30 minutes Core Mastery: a multi-step task in your lab 1 to 2 hours Boss Level Stretch: open-ended, scenario-based and evidence-based 2 to 4 hours Syllabus version: October 2026. The schedule may be adjusted with notice; the learning outcomes and grading weights stay fixed."
      ]
    }
  ]
};
