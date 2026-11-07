import type { SyllabusData } from "./types";

export const syllabus: SyllabusData = {
  "slug": "networking",
  "title": "Network Foundations: Cisco CCST Networking (100-150)",
  "subtitle": "Course Syllabus · Level 1 Networking Track",
  "sections": [
    {
      "id": "course-facts",
      "title": "Course facts",
      "paragraphs": [
        "A 10-week, lab-driven course that prepares students to pass the Cisco Certified Support Technician (CCST) Networking exam and leaves each of them with a built, documented and troubleshot small-office network.",
        "Field Detail Course NET 101 · Network Foundations (placeholder code) Level Introductory undergraduate; open to career switchers Duration 10 weeks, about 6 to 8 study hours per week Format Weekly lecture, hands-on lab in Cisco Packet Tracer, short quiz, one capstone Core tools Cisco Packet Tracer, Wireshark, command-line network tools (ping, traceroute, nslookup, ipconfig), a subnet calculator, draw.io, Git and GitHub Prerequisites Basic computer literacy and comfort with numbers; no networking experience Target exam Cisco CCST Networking (100-150): 50 minutes, US$125, taken through Pearson VUE. Cisco's exam page does not list the number of questions or the passing score Next step CCNA (200-301): the CCST Networking exam is Cisco's first step toward it Instructor To be announced"
      ]
    },
    {
      "id": "why-this-course-will-change-how-you-see-every-message-you-se",
      "title": "Why this course will change how you see every message you send",
      "paragraphs": [
        "Every phone call, bank transfer and video stream crosses a network built from cables, radio links, switches and routers, and someone has to keep it running. Telcos, banks and large organizations all depend on people who understand how that works and can find the fault when it does not.",
        "This course takes you inside the network. You learn how data is packaged and addressed, how devices find each other, how to subnet an address range by hand, how to connect and configure devices, and how to diagnose problems methodically. You practise in Cisco Packet Tracer and Wireshark, and you finish by designing, building and troubleshooting a small-office network of your own. By Week 10 you are ready to sit CCST Networking, and you hold a portfolio of the networks you built.",
        "Five pillars How networks work. Models, protocols, addressing and the devices and media that carry data, learned from the bottom layer up.",
        "Hands-on labs. Every week ends in Packet Tracer, Wireshark or the command line, not in slides.",
        "Subnetting by hand. The addressing maths is practised until it is automatic, because it decides exam results and daily work.",
        "Systematic troubleshooting. A repeatable method, the diagnostic commands and honest documentation, practised on faults you did not create.",
        "Exam readiness and portfolio. Study time follows the exam topics, and every lab adds to NetLog, your public Git repository."
      ]
    },
    {
      "id": "how-the-course-works",
      "title": "How the course works",
      "paragraphs": [
        "Concept first, simulation second. Each idea is explained, then built and observed in Packet Tracer or Wireshark, so you see the packets rather than imagine them.",
        "Field Detail Term To be announced Contact Posted on the course site Learning by doing. Every theory topic has a lab in the same week.",
        "Three-tier exercises every week. Warm-up (confidence), Core (mastery) and Boss Level (stretch, the kind of scenario asked in interviews and on the exam).",
        "One growing portfolio. Core exercises add to NetLog, your public Git repository of topology diagrams, address plans, configurations and troubleshooting tickets (Appendix B).",
        "Maths by hand. A subnetting drill runs through Weeks 3 to 10, so the arithmetic is fast by exam day.",
        "Exam rhythm. A 10-question quiz each week, two checkpoint exams and a final readiness gate before you book the real exam.",
        "A capstone that ships. From Week 3 to Week 10 you design, build and troubleshoot a small-office network."
      ]
    },
    {
      "id": "learning-outcomes",
      "title": "Learning outcomes",
      "paragraphs": [
        "By the end of the course you will be able to: Explain how data moves across a network using the OSI and TCP/IP models, encapsulation and common protocols.",
        "Describe and capture the operation of DNS, DHCP, HTTP, TCP, UDP and ICMP. Plan and subnet an IPv4 address range by hand, and read and shorten IPv6 addresses.",
        "Choose suitable cables, wireless settings and endpoint configurations for a given situation.",
        "Build and configure a small switched and routed network in Packet Tracer. Diagnose network faults with a systematic method, diagnostic commands and Wireshark, and document them in tickets.",
        "Apply basic network security: firewalls, access control, secure wireless and device hardening.",
        "Score 80% or higher on full CCST Networking practice exams."
      ]
    },
    {
      "id": "prerequisites-and-readiness-check",
      "title": "Prerequisites and readiness check",
      "paragraphs": [
        "No networking experience is needed, only the basics below. If a self-check feels shaky, use the Week 1 and Week 3 labs to close the gap."
      ]
    },
    {
      "id": "course-at-a-glance",
      "title": "Course at a glance",
      "paragraphs": [
        "The weeks follow the exam's six topic areas: standards and concepts, addressing and subnet formats, endpoints and media types, infrastructure, diagnosing problems and security. Addressing gets three weeks of drills because every other topic depends on it.",
        "Confirm the current topic weights on Cisco's exam topics page before you book. Area You should know Self-check Computer use Files, settings, installing software, using a browser Can you install a program and open the network settings on your computer?",
        "Number sense Powers of 2 and simple arithmetic What is 2 to the power 8? (Answer: 256.)",
        "Everyday networking What a router, Wi-Fi and an IP address are, in plain terms Name two devices in your home or campus network and what each does.",
        "Command line Opening a terminal or command prompt and typing a command Which command shows your computer's IP address? (Answer: ipconfig on Windows, ip addr or ifconfig on Linux and macOS.)",
        "Equipment A laptop that can run Packet Tracer and Wireshark (8 GB of RAM recommended) Can you install both? If not, tell the instructor in Week 1 about lab options.",
        "Week Module You will learn Exam topic area Milestone 1 How Networks Work Network types, topologies, OSI and TCP/IP models, encapsulation, bandwidth, throughput and latency Standards and concepts Packet Tracer and Wireshark ready Week Module You will learn Exam topic area Milestone 2 Protocols and Network Services TCP and UDP, ports, HTTP, DNS, DHCP, FTP, NTP, ICMP, cloud and virtualization Standards and concepts 3 IPv4 Addressing and Subnetting Binary, masks, CIDR, private and public addresses, NAT, subnetting in four steps Addressing and subnet formats Capstone proposal due 4 IPv6 and Addressing Formats IPv6 format and types, MAC addresses, DHCP, SLAAC, dual stack Addressing and subnet formats 5 Endpoints, Media and Wireless Endpoint devices, copper and fibre cabling, Wi-Fi, cellular, configuring devices on each operating system Endpoints and media types 6 Switching and Network Devices Switches, MAC tables, VLAN concepts, ports and status lights, first steps on Cisco IOS Infrastructure Checkpoint exam 1 (Weeks 1 to 5) 7 Routing and Device Management Routers, packet forwarding, routing tables, default gateways, SSH, IOS show commands Infrastructure Capstone design due 8 Diagnosing Problems Troubleshooting method, help desk practice, ping, traceroute, nslookup, Wireshark Diagnosing problems The Milestone column marks graded items. Topics may be refined if Cisco updates the exam.",
        "The 10-week journey Each week lists a hook, the concepts, a live lab and three exercises. Submit your work in one public Git repository, NetLog, with one folder per week: Packet Tracer files, topology diagrams, address plans, screenshots and a short README with your reasoning."
      ]
    },
    {
      "id": "week-1-how-networks-work",
      "title": "Week 1 · How Networks Work",
      "paragraphs": [
        "The hook: You press send. In a fraction of a second your message crosses a room, a city and an ocean. What carries it?",
        "Milestone. Packet Tracer and Wireshark ready. What we cover Network types (PAN, LAN, WAN and the internet), clients and servers, and peer-to- peer Physical and logical topologies: star, bus, ring and mesh The OSI and TCP/IP models and what each layer does Encapsulation: data, segment, packet, frame and bits Performance: bandwidth, throughput, goodput, latency, jitter, packet loss and speed tests Live lab. Lab 1: Install Packet Tracer and Wireshark, build a two-computer network, ping across it, and capture the ping to find each layer's header.",
        "Week Module You will learn Exam topic area Milestone 9 Network Security Threats and attacks, firewalls, access control, secure wireless, hardening Security Checkpoint exam 2 (full mock) 10 Exam Readiness and Capstone Showcase Subnetting speed drills, error-log review, readiness gate, capstone demos All Capstone final due Warm-up. Match twelve everyday actions, such as opening a web page or sending an email, to the layer where the main work happens.",
        "Core. Draw the physical and logical topologies of a school computer lab and mark which devices work at which layer. Add the diagrams to NetLog.",
        "Boss Level. Run speed tests on your own connection at three times of day, record bandwidth, latency and packet loss, and explain the gap between the advertised speed and your measured goodput."
      ]
    },
    {
      "id": "week-2-protocols-and-network-services",
      "title": "Week 2 · Protocols and Network Services",
      "paragraphs": [
        "The hook: You type a web address and a page appears. Which conversations happened first?",
        "What we cover TCP versus UDP, port numbers and the three-way handshake in outline HTTP and HTTPS, DNS operation and record types (A, AAAA, MX, CNAME), DHCP, FTP and SFTP, NTP and ICMP On-premises versus cloud computing, cloud service types and server virtualization Live lab. Lab 2: Capture and decode DNS, DHCP and HTTP traffic in Wireshark and in Packet Tracer's simulation mode.",
        "Warm-up. Match ten protocols to their default ports and purposes. Core. Capture a DNS lookup and an HTTP request, annotate each packet with its protocol, port and purpose, and explain what DHCP gave your computer when it joined the network.",
        "Boss Level. Compare hosting a small clinic's records system on-premises, on infrastructure in the cloud and as a hosted application. For each, weigh cost, control and what happens if the internet link fails, then recommend one with two caveats."
      ]
    },
    {
      "id": "week-3-ipv4-addressing-and-subnetting",
      "title": "Week 3 · IPv4 Addressing and Subnetting",
      "paragraphs": [
        "The hook: An office has 50 computers and a network with 254 addresses. Where did the other numbers go?",
        "Milestone. Capstone proposal due. What we cover Binary and decimal conversion IPv4 structure: network and host portions, subnet masks and CIDR notation Public, private and reserved addresses; NAT and PAT Subnetting in four steps, and the default gateway Live lab. Lab 3: Give devices addresses from two subnets in Packet Tracer and prove which devices can and cannot reach each other.",
        "Warm-up. Convert eight addresses between binary and decimal, and find the network address of five host addresses.",
        "Core. Subnet 192.168.10.0/24 into four equal subnets. For each, write the network address, usable range, broadcast address and mask, then check two of them with a subnet calculator.",
        "Boss Level. Plan the addressing for a branch office with five departments of different sizes, wasting as few addresses as possible. Justify each subnet size, leave 30% room for growth, and document the plan."
      ]
    },
    {
      "id": "week-4-ipv6-and-addressing-formats",
      "title": "Week 4 · IPv6 and Addressing Formats",
      "paragraphs": [
        "The hook: The internet ran out of IPv4 addresses years ago. What took their place?",
        "What we cover IPv6 format and the rules for shortening addresses Address types: global unicast, unique local, link-local and multicast; prefix lengths MAC addresses: format and the manufacturer prefix How hosts get addresses: static, DHCP, SLAAC and the 169.254 fallback address; dual stack Live lab. Lab 4: Enable IPv6 on hosts in Packet Tracer, read their link-local and global addresses, and test with ping.",
        "Warm-up. Shorten eight IPv6 addresses and expand four. Core. Identify the type of ten IPv6 addresses, then find the MAC address of three devices and look up each manufacturer prefix.",
        "Boss Level. Write a one-page migration note for a small internet provider moving customers from IPv4 only to dual stack: what changes for hosts, DNS and firewalls, and what could break."
      ]
    },
    {
      "id": "week-5-endpoints-media-and-wireless",
      "title": "Week 5 · Endpoints, Media and Wireless",
      "paragraphs": [
        "The hook: Every network ends at a device on someone's desk or in someone's hand. How does it get connected?",
        "What we cover Endpoint devices: computers, servers, phones, tablets, printers and IoT devices Wired media: UTP cable categories, straight-through versus crossover, fibre (single- mode and multimode), connectors, distance and speed limits Wireless: Wi-Fi standards and bands, channels, SSIDs and access points; cellular networks Network settings on Windows, Linux, macOS and mobile devices; private versus public IP addresses Live lab. Lab 5: Document the network settings of two operating systems and a phone, and compare each device's private address with your public one.",
        "Warm-up. Choose the right cable or wireless technology for six situations, such as a 90 metre office run and a link between two buildings 2 km apart.",
        "Core. Draw a Wi-Fi channel plan for a three-floor building using the non-overlapping 2.4 GHz channels, and explain what interference you expect.",
        "Boss Level. Survey Wi-Fi in a place you can access using a free analyser app. Record signal strength at five locations and propose three changes that would improve coverage."
      ]
    },
    {
      "id": "week-6-switching-and-network-devices",
      "title": "Week 6 · Switching and Network Devices",
      "paragraphs": [
        "The hook: A switch knows which cable leads to which computer. How did it learn? Milestone. Checkpoint exam 1, covering Weeks 1 to 5.",
        "What we cover Network devices: switches, routers, access points, firewalls and modems Switching: frames, the MAC address table, broadcast domains, and the idea of VLANs and trunks Ports, cabling and status lights on Cisco devices; console access First steps on Cisco IOS: command modes, the help system and setting a hostname Live lab. Lab 6: Build a small switched network in Packet Tracer, watch the MAC address table fill, and explore the IOS help system.",
        "Warm-up. Label the ports and lights on a diagram of a Cisco router and switch, and say what each light colour means.",
        "Core. Build a switched network with four computers. Trace a frame in simulation mode and record the MAC address table before and after the first ping.",
        "Boss Level. Add two VLANs, one for staff and one for guests. Prove that they are isolated, and explain why a router is needed to connect them."
      ]
    },
    {
      "id": "week-7-routing-and-device-management",
      "title": "Week 7 · Routing and Device Management",
      "paragraphs": [
        "The hook: A packet must leave your network. How does it know which way is out? Milestone. Capstone design due: topology, IP plan and device list.",
        "What we cover Routers and packet forwarding, routing tables and default gateways Static versus dynamic routing (concepts) and NAT in practice Device management: console and remote access, SSH versus Telnet, IOS privilege levels, saving configurations and CDP Common show commands such as show ip interface brief, show running-config and show version Live lab. Lab 7: Connect two LANs through a router in Packet Tracer, add routes, and test end to end.",
        "Warm-up. Read a small routing table and say where packets for five destination addresses would go.",
        "Core. Connect two office LANs with a router, set addresses and default gateways, and prove end-to-end connectivity with ping and traceroute. Save the configuration and record the show command outputs.",
        "Boss Level. Add a simulated internet connection to your office network with a default route, and show with traceroute where each packet goes. Explain how NAT would let your private addresses reach the internet."
      ]
    },
    {
      "id": "week-8-diagnosing-problems",
      "title": "Week 8 · Diagnosing Problems",
      "paragraphs": [
        "The hook: A user says \"the internet is down.\" What are the first five questions you ask?",
        "What we cover The troubleshooting method: identify the problem, form a theory, test it, plan, fix, verify and document Help desk practice: tickets, escalation and clear communication with non-technical users Diagnostic commands: ping, traceroute (tracert), nslookup and ipconfig (or ip), and how to read their output Wireshark capture and display filters Common faults: cabling, wrong mask or gateway, missing DNS, DHCP conflicts, Wi-Fi interference and link lights Live lab. Lab 8: Diagnose five faults in prepared Packet Tracer networks and write a ticket for each.",
        "Warm-up. Put the troubleshooting steps in order for three short scenarios. Core. Diagnose five faults injected into a Packet Tracer network (a wrong mask, a wrong gateway, missing DNS, a cable in the wrong port and an address conflict) using ping, traceroute and nslookup. Write a ticket for each with the cause and the fix.",
        "Boss Level. Break a classmate's capstone network in three ways without telling them, swap files, and diagnose each other's. Record the evidence trail and the time to resolve."
      ]
    },
    {
      "id": "week-9-network-security",
      "title": "Week 9 · Network Security",
      "paragraphs": [
        "The hook: Your network works perfectly. So does the attacker's access to it. Milestone. Checkpoint exam 2, a full timed mock covering all topic areas.",
        "What we cover Security fundamentals: confidentiality, integrity and availability; threats, vulnerabilities and common attacks such as phishing, malware, denial of service and on-path attacks Firewalls: network and host-based, allow and deny rules Access control and identity: passwords, MFA, authentication, authorization and accounting Secure wireless: WPA2 and WPA3, and why open and WEP networks are unsafe Device hardening: default passwords, firmware updates and unused ports; security policies and awareness Live lab. Lab 9: Harden a Packet Tracer network and a home-router-style setup by changing defaults, setting a WPA2 passphrase, disabling unused ports and applying a host firewall rule.",
        "Warm-up. Match ten attacks to the best defence. Core. Write a security checklist of at least 15 items for a small office network, then audit your capstone network against it and record the gaps.",
        "Boss Level. Compare WEP, WPA2 and WPA3 and recommend settings for a cafe's guest and staff Wi-Fi, including network separation and a password policy."
      ]
    },
    {
      "id": "week-10-exam-readiness-and-capstone-showcase",
      "title": "Week 10 · Exam Readiness and Capstone Showcase",
      "paragraphs": [
        "The hook: Fifty minutes, and subnetting somewhere in the middle. Practise the maths until it is automatic.",
        "Milestone. Capstone final due, and the readiness gate (see below). What we cover Exam anatomy: 50 minutes, taken through Pearson VUE at a test centre or online with a proctor; Cisco's exam page lists duration and price but not the number of questions or the passing score Subnetting speed drills, and a flash review of ports, protocols and diagnostic commands Error-log review by topic area, and pacing across the 50 minutes Booking the exam: your Cisco account, Pearson VUE, vouchers and ID rules; the next step, CCNA (200-301) Capstone presentations and peer feedback Live lab. Capstone showcase: demo, five-minute presentation and Q&A.",
        "Warm-up. Build your error log from both checkpoint exams, grouped by topic area and by cause, then complete 20 subnetting problems in 20 minutes.",
        "Core. Sit a full timed practice exam in 50 minutes without notes, then write the rule you will remember for every wrong answer.",
        "Boss Level. Teach-back: record a five-minute explanation of your weakest topic for a first- year student. Then pass the readiness gate, 80% or higher on an official-style full practice exam, before you book the real exam."
      ]
    },
    {
      "id": "capstone-project-design-build-and-troubleshoot-a-small-offic",
      "title": "Capstone Project: Design, Build and Troubleshoot a Small-Office",
      "paragraphs": [
        "Network From Week 3 to Week 10 you design a network for a small organization, build it in Packet Tracer, secure it, and prove it works. In Week 8 you also diagnose a classmate's faulty version of it.",
        "Required deliverables A requirements page and a logical and physical topology diagram.",
        "An IPv4 addressing plan with subnet calculations, and an IPv6 plan for at least one segment.",
        "A working Packet Tracer network with switching, routing, a Wi-Fi segment and a simulated internet link.",
        "A test plan with ping, traceroute and nslookup evidence for each requirement. A security checklist of at least 15 items and an audit of your network against it.",
        "Three troubleshooting tickets from the faults you diagnosed in Week 8, with cause and fix.",
        "A 10-page report and a ten-minute presentation. Project idea starters A small clinic with reception, consulting rooms, a pharmacy and patient Wi-Fi.",
        "A school computer lab with a staff network, a student network and a printer. A fictional bank branch with a tellers' segment, a back office and an ATM link.",
        "A business centre with public workstations, a staff network and guest Wi-Fi. A co-working space with shared and reserved desks and a meeting-room network.",
        "Week Milestone What is due 3 Proposal The organization, its users and devices, requirements for speed, reliability and security, and a success measure 7 Design Topology diagram, IP addressing plan with subnets, device list, cabling and Wi-Fi plan 10 Final Working Packet Tracer network, test evidence, security audit, troubleshooting tickets, report and presentation An office of a community organization with a donated, mixed set of equipment."
      ]
    },
    {
      "id": "assessment-and-grading",
      "title": "Assessment and grading",
      "paragraphs": [
        "Boss Level exercises are stretch work, and instructors may award bonus credit for them.",
        "The real CCST Networking exam is not graded. The Week 10 readiness gate (80% or higher on an official-style full practice exam) tells you when to book it.",
        "Course policies Network etiquette and lab safety Capture and analyse only your own traffic or the capture files the instructor provides.",
        "Never capture other people's traffic. Never scan, probe or change devices on the campus or any network you do not own or administer.",
        "Do not plug unknown devices, such as a second router or a rogue DHCP server, into the campus network.",
        "Use only fictional data and addresses from the private ranges in your reports. Late work (draft policy, subject to the final syllabus) Up to 24 hours late: 10% penalty.",
        "24 to 48 hours late: 25% penalty. More than 48 hours late: not accepted unless arranged beforehand with the instructor.",
        "Each student has two emergency slip days for lab assignments, usable without penalty.",
        "Component Weight What counts Weekly hands-on labs 30% Warm-up and Core exercises each week, with Packet Tracer files, evidence and NetLog commits Checkpoint exams 25% Exam 1 in Week 6 (10%) and Exam 2 in Week 9 (15%), timed and in CCST style Capstone project 35% Design, working network, test evidence, security audit, tickets, report and presentation Participation and quizzes 10% Weekly 10-question quizzes, subnetting drills and discussion A documented power or network outage does not count as lateness if you tell the instructor within 24 hours.",
        "Using AI tools AI assistants are welcome as tutors and study partners. Disclose how you used them in each README. For subnetting and every from-scratch exercise, do the working yourself, and never submit a diagram, address plan or explanation you cannot explain. AI tools are not allowed in the checkpoint exams.",
        "Academic integrity Discussing ideas is encouraged. Labs and the capstone must be your own work, with any tutorial or template you adapt cited in the README. Do not use or share leaked exam questions, often called brain dumps. They break Cisco's certification rules and can lead to a ban.",
        "Access plan for Nigeria This is one of the cheaper exams in the Level 1 track, and the lab tools are free and run offline, so the course suits Nigerian power and data conditions well.",
        "Barrier How the course handles it Exam fee US$125, roughly ₦ 166,000 at ₦ 1,330 per US$ (mid- market rate, late October 2026; vendor price, taxes and local rates vary). Book only after the Week 10 readiness gate.",
        "Free study material The certification plan points to free Cisco Networking Academy courses and free Packet Tracer labs. Cisco's Network Technician career path is its own preparation route for this exam.",
        "Data costs Download Packet Tracer, Wireshark and course material once on campus Wi-Fi. Every lab then runs offline.",
        "Power cuts Save the Packet Tracer file after every step and commit at the end of each session, so an outage costs minutes, not hours.",
        "The certification plan notes that networking is core to telcos such as MTN and Airtel, to banking networks and to infrastructure roles, with solid local demand and moderate remote opportunities. The next step after this course is CCNA (200-301). The plan describes CCST as a confidence-building step, and says students with some exposure can go straight to CCNA."
      ]
    },
    {
      "id": "resources",
      "title": "Resources",
      "paragraphs": [
        "The course has no required textbook; these are suggestions. Cisco CCST Networking exam page: duration, price and scheduling.",
        "Cisco Learning Network: CCST Networking exam topics: the official topic list and weights.",
        "Cisco Networking Academy, Network Technician career path (skillsforall.com): free preparation courses.",
        "Cisco Packet Tracer, available free through Cisco Networking Academy. Russ White, Cisco Certified Support Technician CCST Networking 100-150 Official Cert Guide (Cisco Press).",
        "Allan Johnson, 31 Days Before Your Cisco Certified Support Technician (CCST) Networking 100-150 Exam (Cisco Press): a day-by-day review guide.",
        "Wireshark documentation and sample capture files. Sources used to build this syllabus Cisco: 100-150 CCST Networking: 50-minute duration, US$125 price, and the link to CCNA.",
        "Pearson: CCST Networking 100-150 Official Cert Guide: the exam's topic areas. Cisco Press: 31 Days Before Your CCST Networking Exam: the day-by-day topic list used to shape the weekly content.",
        "Barrier How the course handles it Hardware Packet Tracer and Wireshark run on a modest laptop, and no physical equipment is required.",
        "Study time The certification plan allows 4 to 6 weeks of self- study for this exam. The course spreads the same content over 10 weeks to add labs, a capstone and exam practice.",
        "The attached Level 1 certification plan and 2026 IT certification landscape PDF, for study time, naira conversion and Nigeria context."
      ]
    },
    {
      "id": "appendix-a-exam-topic-map",
      "title": "Appendix A: Exam topic map",
      "paragraphs": [
        "Where each CCST Networking topic area is taught. The areas follow the published study guides; confirm the current weights on Cisco's exam topics page."
      ]
    },
    {
      "id": "appendix-b-the-netlog-portfolio",
      "title": "Appendix B: The NetLog portfolio",
      "paragraphs": [
        "Across the term you build NetLog, one public Git repository that doubles as your portfolio.",
        "Each Core exercise marked \"add it to NetLog\" extends it. By Week 10 you hold proof of hands-on work you can discuss in an interview.",
        "Topic area Course weeks Topics covered Standards and concepts 1 to 2 Network types and topologies, OSI and TCP/IP models, encapsulation, performance, TCP and UDP, HTTP, DNS, DHCP, NTP, ICMP, cloud and virtualization Addressing and subnet formats 3 to 4 IPv4, subnetting, private addresses and NAT, IPv6, MAC addresses, address assignment Endpoints and media types 5 Endpoint devices, copper and fibre cabling, Wi-Fi, cellular, device network settings Infrastructure 6 to 7 Switching, VLAN concepts, ports and lights, routing, default gateways, device management Diagnosing problems 8 Troubleshooting method, help desk practice, ping, traceroute, nslookup, Wireshark Security 9 Threats and attacks, firewalls, access control, secure wireless, hardening netlog/ README.md              # who you are, what you built, links week-01/ ... week-10/  # Packet Tracer files, diagrams, captures, notes subnetting/ drills.md            # every drill, with your working tickets/               # troubleshooting tickets, from Week 8 error-log.md           # missed practice questions by topic and cause capstone/ requirements.md topology.png ip-plan.md network.pkt test-plan.md security-checklist.md report.pdf Setting up your environment Install Cisco Packet Tracer and Wireshark, and create the repository. These commands are the diagnostic tools you will use all term: git init netlog && cd netlog mkdir week-01 && echo \"# Week 1\" > week-01/README.md git add . && git commit -m \"Week 1: Packet Tracer and Wireshark ready\" ipconfig /all          # Windows (use: ip addr on Linux) ping 8.8.8.8 tracert example.com    # Windows (use: traceroute on Linux and macOS) nslookup example.com Exercise legend Level What it builds Time Warm-up Confidence: direct use of the week's core idea 20 to 30 minutes Core Mastery: a multi-step task in Packet Tracer or Wireshark 1 to 2 hours Boss Level Stretch: open-ended, scenario-based and evidence-based 2 to 4 hours Syllabus version: October 2026. The schedule may be adjusted with notice; the learning outcomes and grading weights stay fixed."
      ]
    }
  ]
};
