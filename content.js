/**
 * PORTFOLIO CONTENT — Single Source of Truth
 * ============================================
 * All editable text content lives here.
 * Edit via: open admin.html in your browser.
 * Then click "Export content.js" and replace this file.
 *
 * DO NOT edit page layouts or styles here — only text content.
 */

window.CONTENT = {

  /* ─────────────────────────────────────────
     GLOBAL — applies to every page
  ───────────────────────────────────────── */
  global: {
    name:        "Anubhav Pandey",
    tagline:     "Product Designer",
    email:       "pandeyanubhav229@gmail.com",
    linkedin:    "https://www.linkedin.com/in/anubhavp2000/",
    dribbble:    "https://dribbble.com/anubhavp",
    resumeUrl:   "https://drive.google.com/file/d/1M_Dw0t9avEZ7Y_Web8o-7EVGs0UCwxro/view?usp=sharing",
    gaId:        "G-XXXXXXXXXX",
    footerDesc:  "Product Designer. Designing clarity into systems that resist it. Open to founding designer and senior product design roles.",
    copyright:   "© 2026 Anubhav Pandey. All rights reserved."
  },

  /* ─────────────────────────────────────────
     HOME PAGE
  ───────────────────────────────────────── */
  home: {

    hero: {
      label:    "Product Designer",
      /* headingLines: each item is one line. Last item gets italic green. */
      headingLines: [
        "Designing clarity",
        "into systems that",
        "resist it."
      ],
      subtitle: "I was the founding designer at Carboledger — an enterprise B2B SaaS for sustainability compliance. 11 interconnected modules. 4-person team. Every UX decision mine.",
      /* stats: duplicatable up to 6 */
      stats: [
        { value: ">95%",  label: "Reduction in enterprise request turnaround" },
        { value: "14k+",  label: "Structured data fields managed in one workflow" },
        { value: "~80%",  label: "Adoption rate across enterprise users" },
        { value: "11",    label: "Interconnected platform modules owned" }
      ],
      cta1Label: "View Work",
      cta2Label: "Download Resume"
    },

    /* projects: duplicatable. Each card maps to a case study page. */
    projects: [
      {
        id:          "secureshare",
        number:      "01",
        tag:         "Enterprise SaaS",
        name:        "SecureShare",
        subtitle:    "External Contributor Platform — Carboledger",
        description: "Designed a platform surface for external contributors — suppliers, partners, third-party data providers — to participate in enterprise compliance workflows without being internal platform users. Two radically different mental models, one system.",
        metric:      "Turnaround: 6–8 weeks → 6–8 hours",
        url:         "work/secureshare.html"
      },
      {
        id:          "smartbalance",
        number:      "02",
        tag:         "Compliance Tooling",
        name:        "SmartBalance",
        subtitle:    "ISCC Mass Balance Bookkeeping — Carboledger",
        description: "Designed UX for ISCC Mass Balance — a chain-of-custody certification methodology for sustainable raw material traders. A ledger-abstraction problem where errors carry regulatory consequences and the domain logic is opaque to most users.",
        metric:      "Replaced spreadsheet reconciliation for enterprise traders",
        url:         "work/smartbalance.html"
      },
      {
        id:          "greenskills",
        number:      "03",
        tag:         "AI Product",
        name:        "GreenSkills",
        subtitle:    "AI Agents Suite for ESG Reporting — Carboledger",
        description: "Designed the UX for an AI agents suite that automates ESG data collection, interpretation, and reporting. The core design challenge: building trust in agent-driven outputs without making users dependent on a black box.",
        metric:      "[Metric placeholder — to be added]",
        url:         "work/greenskills.html"
      },
      {
        id:          "santhe",
        number:      "04",
        tag:         "B2C / Commerce",
        name:        "Santhe",
        subtitle:    "Hyperlocal Commerce Platform",
        description: "Designed trust-first ordering and fulfillment workflows for a hyperlocal commerce platform serving non-tech-savvy local retailers. Adoption risk was not a feature problem — it was a cognitive trust problem.",
        metric:      "MVP shipped & field validated with store owners",
        url:         "work/santhe.html"
      }
    ],

    /* experience: duplicatable */
    experience: [
      {
        company:     "Carboledger",
        role:        "UX Product Manager / Product Designer",
        period:      "Jul 2023 – Present",
        description: "Early-stage enterprise B2B SaaS for sustainability compliance and carbon data management. First and only designer. Defined UX direction for 11 interconnected platform modules across a 4-person team in a GDPR / SOC II / ISO 27001 regulated environment.",
        metric:      ">95% reduction\nin request turnaround"
      },
      {
        company:     "Santhe",
        role:        "Product Designer (Contract)",
        period:      "Jan 2022 – Apr 2022",
        description: "B2C hyperlocal commerce platform connecting customers, Kirana stores, and delivery partners. Designed trust-first order and fulfillment workflows for non-tech-savvy retailers. Worked directly with 1 frontend engineer to ship MVP flows.",
        metric:      "MVP shipped &\nfield validated"
      },
      {
        company:     "Sijil Pharma",
        role:        "UI/UX Designer + Front-end Developer",
        period:      "",
        description: "Healthcare solution provider building digital tools for pharmacies. Owned end-to-end design and front-end development for a medical dashboard covering inventory tracking, stock movement, and operations management.",
        metric:      "Full-stack design\nto production"
      }
    ],

    hideAiSection: false,

    /* aiProjects: duplicatable — living section */
    aiProjects: [
      {
        tag:         "AI / Tooling",
        title:       "[Project Name — Placeholder]",
        description: "A short description of what you built, what problem it solves, and what tool or method you used. 2–3 sentences.",
        linkText:    "Coming soon",
        url:         ""
      },
      {
        tag:         "AI / Design",
        title:       "[Project Name — Placeholder]",
        description: "A short description of what you built, what problem it solves, and what tool or method you used. 2–3 sentences.",
        linkText:    "Coming soon",
        url:         ""
      },
      {
        tag:         "Independent",
        title:       "[Project Name — Placeholder]",
        description: "A short description of what you built, what problem it solves, and what tool or method you used. 2–3 sentences.",
        linkText:    "Coming soon",
        url:         ""
      }
    ],

    /* blog: duplicatable — these are just post metadata, not post content */
    blog: [
      { date: "Add date", title: "[Blog Post Title 1 — Replace with actual title]", readTime: "X min read", url: "blog/post-1.html", image: "" },
      { date: "Add date", title: "[Blog Post Title 2 — Replace with actual title]", readTime: "X min read", url: "blog/post-2.html", image: "" },
      { date: "Add date", title: "[Blog Post Title 3 — Replace with actual title]", readTime: "X min read", url: "blog/post-3.html", image: "" }
    ]
  },

  /* ─────────────────────────────────────────
     ABOUT PAGE
  ───────────────────────────────────────── */
  about: {
    heroHeadingLines: [
      "I design systems that make",
      "complex, regulated products",
      "usable by non-experts."
    ],
    /* bioParagraphs: duplicatable. Each item is either a paragraph or a heading. */
    bioParagraphs: [
      {
        type: "paragraph",
        text: "I am a product designer who thinks in systems. My strongest work happens at the intersection of domain complexity and user clarity — where the product has to handle expert-level logic while being operated by people who are not experts in that domain."
      },
      {
        type: "paragraph",
        text: "For the past [X] years, I have been the first and only designer at Carboledger — an early-stage B2B SaaS platform for sustainability compliance and carbon data management. I joined when the product had no defined UX direction. I left that ambiguity with 11 interconnected platform modules, structured supplier response workflows, a role-based access model that encoded regulatory accountability into the product experience, and a contribution analysis tool that cut expert analysis time from half a day to under an hour."
      },
      {
        type: "paragraph",
        text: "What that environment actually meant: 4-person team. No design manager. No design system inherited from a previous team. Requirements that arrived as compliance framework references and vague stakeholder notes. Every major UX decision — what to build, how it should work, what trade-offs to make against regulatory constraints — was mine to own. That is what \"founding designer\" means in practice."
      },
      {
        type: "heading",
        text: "How I work"
      },
      {
        type: "paragraph",
        text: "I learn by wrestling with real complexity, not by waiting for well-formed requirements. I read domain documentation before I open Figma. I write decision logs — what alternatives I ruled out and why — before I ask engineers to build anything. I treat session recordings and user conversations as primary data, not decoration."
      },
      {
        type: "paragraph",
        text: "My strongest design decisions have come from noticing what is broken in the structure of a problem, not just in its surface. The alias system at Carboledger looked like a naming problem. It was four problems: cognitive recall, record-keeping consistency, data searchability, and supplier power dynamics — all requiring different solutions held simultaneously in one data model."
      },
      {
        type: "heading",
        text: "What I am looking for"
      },
      {
        type: "paragraph",
        text: "[Placeholder — Describe the type of company and role you want. Example: \"I am looking for founding designer or senior product design roles at early-stage B2B SaaS companies — particularly in AI, compliance, supply chain, or regulated domains.\"]"
      }
    ],
    /* skills: duplicatable */
    skills: [
      "Enterprise workflow design",
      "Information architecture",
      "Decision-support UX",
      "Role-based access design",
      "Platform coherence across modules",
      "Domain absorption — compliance, ESG, supply chain",
      "PRD and specification writing",
      "GDPR-compliant user research"
    ],
    /* tools: duplicatable */
    tools: [
      "Figma",
      "Cursor / Vercel v0",
      "SQL",
      "Google Analytics / Clarity",
      "Zipy (session recording)",
      "Webflow"
    ],
    /* sidebarBlocks: duplicatable — label + content */
    sidebarBlocks: [
      { label: "Currently", content: "[Add current status — e.g. Open to new roles]" },
      { label: "Location",  content: "[Your location — e.g. Bangalore, India. Open to remote.]" }
    ],
    ctaHeading:   "Let's work together.",
    ctaParagraph: "If you are building something hard in a regulated or complex domain and need a designer who can own the UX direction — I would like to talk.",
    ctaButtonLabel: "Get in touch"
  },

  /* ─────────────────────────────────────────
     CASE STUDIES
     Each case study has the same schema.
  ───────────────────────────────────────── */
  caseStudies: {

    secureshare: {
      title:    "SecureShare",
      subtitle: "Designing a product surface for external contributors — suppliers, partners, third-party data providers — to participate in enterprise compliance workflows without being internal platform users. Two radically different mental models, one system.",
      tags:     ["Enterprise SaaS", "Founding Designer"],
      meta: [
        { label: "My Role",    value: "Founding Product Designer\nSole designer on the team" },
        { label: "Company",    value: "Carboledger\nEnterprise B2B SaaS, sustainability compliance" },
        { label: "Team",       value: "4 people total\n1 designer (me), 2 engineers, 1 founder" },
        { label: "Constraints", value: "GDPR · SOC II\nISO 27001" }
      ],
      /* outcomes: fixed at 4, not duplicatable */
      outcomes: [
        { num: ">95%",   desc: "Reduction in enterprise request turnaround" },
        { num: "8 hrs",  desc: "Down from 6–8 weeks per request cycle" },
        { num: "470 hrs", desc: "Coordination overhead eliminated per cycle" },
        { num: "~80%",   desc: "Adoption rate across enterprise users" }
      ],
      /* sections: duplicatable */
      sections: [
        {
          id: "cs-context", num: "01", label: "Context",
          heading: "The environment that made every decision harder",
          blocks: [
            { type: "paragraph", text: "Carboledger is an early-stage enterprise B2B SaaS platform for sustainability compliance and carbon data management. Four people total. I was the only designer. The product operated under GDPR, SOC II, and ISO 27001 — not as checkbox compliance but as hard constraints on what data I could collect during user research, how sessions could be recorded, and what information the product could store about users." },
            { type: "paragraph", text: "Requirements arrived as compliance framework references, domain jargon, and vague stakeholder notes. There was no design system, no design manager, no prior UX direction to inherit. Every major decision — what to build, how it should behave, which regulatory constraints to encode as product guardrails — was mine to own and document." },
            { type: "image", show: true, size: "md", alt: "Platform environment diagram", caption: "Platform environment — company stage, team, regulatory context" }
          ]
        },
        {
          id: "cs-problem", num: "02", label: "The Problem",
          heading: "What was actually breaking",
          blocks: [
            { type: "paragraph", text: "Enterprise clients needed suppliers — external organisations that are not Carboledger customers — to submit structured compliance data: product specifications, emissions values, certifications, supporting documents. There was no product surface for this. Everything happened over email and spreadsheets." },
            { type: "callout", text: "[Placeholder — Describe the before state in specific, concrete terms.]" },
            { type: "paragraph", text: "The result: request cycles lasting 6–8 weeks. Hundreds of hours spent coordinating, chasing, reformatting, and re-requesting data." },
            { type: "image", show: true, size: "lg", alt: "Before state flow diagram", caption: "Before state — the email and spreadsheet coordination flow" }
          ]
        },
        {
          id: "cs-challenge", num: "03", label: "Core Challenge",
          heading: "Two mental models, one system",
          blocks: [
            { type: "paragraph", text: "The challenge was not \"how do we build a better form.\" It was: how do we design a single system that works for two completely different users with fundamentally different mental models, different stakes, and different definitions of \"done.\"" },
            { type: "image", show: true, size: "pair", alts: ["Enterprise user mental model", "External contributor mental model"], captions: ["Accuracy, audit trails, status tracking", "Clarity, speed, low error risk"] },
            { type: "paragraph", text: "The enterprise user — operating inside Carboledger — cared about data accuracy, completeness, audit trails, and regulatory defensibility. They wanted to track which suppliers had responded, flag missing fields, and have a complete exportable record." },
            { type: "paragraph", text: "The external contributor — operating outside Carboledger, without an account, often with low familiarity with sustainability data requirements — wanted to understand what was being asked, submit it correctly in one go, and not be blamed later if something was wrong." },
            { type: "paragraph", text: "[Placeholder — Add the specific constraints this created and where the two mental models conflicted.]" },
            { type: "image", show: true, size: "md", alt: "Tension diagram", caption: "Design tension — where the two mental models conflict" }
          ]
        },
        {
          id: "cs-decisions", num: "04", label: "Design Decisions",
          heading: "What I built and why",
          blocks: [
            { type: "paragraph", text: "[Placeholder — High-level overview of the SecureShare system. What are the main components? What architectural decisions did you make?]" },
            { type: "image", show: true, size: "xl", alt: "SecureShare system overview", caption: "SecureShare — full system overview, key screens" }
          ]
        },
        {
          id: "cs-outcomes", num: "05", label: "Outcomes",
          heading: "What changed",
          blocks: [
            { type: "metric", items: [
              { num: ">95%", desc: "Request turnaround reduction" },
              { num: "470 hrs", desc: "Coordination overhead removed per cycle" },
              { num: "~80%", desc: "Platform adoption rate" },
              { num: "~50%", desc: "POC to deal conversion" }
            ]},
            { type: "paragraph", text: "[Placeholder — Add context for each metric. What changed for enterprise users? For external contributors? At the business level?]" }
          ]
        }
      ],
      /* decisions: duplicatable */
      decisions: [
        {
          id: "cs-alias", num: "Decision 01", parentSectionId: "cs-decisions",
          title: "The Alias System — four problems inside one",
          blocks: [
            { type: "paragraph", text: "What looked like a product naming problem was actually four separate problems: cognitive recall, record-keeping consistency, data searchability, and supplier-customer power dynamics." },
            { type: "paragraph", text: "[Placeholder — Walk through why a single rename field would have broken two of the four problems.]" },
            { type: "metric", items: [
              { num: "~1,400", desc: "Products managed under the alias system" },
              { num: "14k+", desc: "Structured data fields in one workflow" }
            ]},
            { type: "image", show: true, size: "md", alt: "Alias system — key screens", caption: "Alias system — annotated key screens" }
          ]
        },
        {
          id: "cs-roles", num: "Decision 02", parentSectionId: "cs-decisions",
          title: "Multi-User Roles — trust architecture, not a permissions matrix",
          blocks: [
            { type: "paragraph", text: "Role-based access in a compliance product is not a permissions problem — it is a trust architecture problem." },
            { type: "paragraph", text: "[Placeholder — Walk through the role structure you designed.]" },
            { type: "image", show: true, size: "pair", alts: ["Role structure diagram", "Permission UI — key screen"], captions: ["Role structure", "Permission UI"] }
          ]
        },
        {
          id: "cs-workspace", num: "Decision 03", parentSectionId: "cs-decisions",
          title: "Workspace Architecture — multi-tenancy as a UX problem",
          blocks: [
            { type: "paragraph", text: "Most multi-tenant SaaS treats tenant isolation as an infrastructure concern. The UX design challenge was that enterprise users needed to feel they were operating in their own environment." },
            { type: "paragraph", text: "[Placeholder — How did you design workspace onboarding?]" },
            { type: "image", show: true, size: "md", alt: "Workspace architecture", caption: "Workspace onboarding and environment design" }
          ]
        },
        {
          id: "cs-contribution", num: "Decision 04", parentSectionId: "cs-decisions",
          title: "Contribution Analysis Tool — externalising expert reasoning",
          blocks: [
            { type: "paragraph", text: "The tool cut expert analysis time from approximately half a day to under one hour. The central design decision: where to draw the line between what the product calculates automatically and what it surfaces for human judgment." },
            { type: "paragraph", text: "[Placeholder — What did this look like in the UI?]" },
            { type: "metric", items: [
              { num: "<1 hr", desc: "Expert analysis time — down from ~half a day" }
            ]},
            { type: "image", show: true, size: "lg", alt: "Contribution analysis tool", caption: "Contribution analysis — before (Excel) vs. after (guided comparison UI)" }
          ]
        },
        {
          id: "cs-member-flow", num: "Decision 05", parentSectionId: "cs-decisions",
          title: "Workspace Member Flow — diagnosing context loss, not discoverability",
          blocks: [
            { type: "paragraph", text: "A user could not add internal team members and kept abandoning the flow. Session recordings showed the user was not confused about the feature — they were losing context every time the flow navigated them away from their current screen." },
            { type: "paragraph", text: "Fix: rewrite content to guide inline, open the add-member surface in a new tab to preserve context. Confusion dropped significantly. Engineering cost: near zero." },
            { type: "image", show: true, size: "pair", alts: ["Before — context lost on navigate", "After — new tab preserves context"], captions: ["", ""] }
          ]
        }
      ],
      reflection: "[Placeholder — One honest paragraph. What did you miss? What took longer than it should have? What would you change if you started again?]",
      nextProject: { label: "SmartBalance — ISCC Mass Balance Bookkeeping", url: "smartbalance.html" }
    },

    smartbalance: {
      title:    "SmartBalance",
      subtitle: "Designing UX for ISCC Mass Balance — a chain-of-custody certification methodology for sustainable raw material traders. A ledger-abstraction problem where errors carry regulatory consequences and the domain logic is opaque to most users.",
      tags:     ["Compliance Tooling", "Domain-Intensive"],
      meta: [
        { label: "My Role",    value: "Founding Product Designer\nSole designer on the team" },
        { label: "Company",    value: "Carboledger\nEnterprise B2B SaaS, sustainability compliance" },
        { label: "Domain",     value: "ISCC Mass Balance\nSustainability trader certification" },
        { label: "Constraints", value: "GDPR · SOC II\nISO 27001 · ISCC certification rules" }
      ],
      outcomes: [
        { num: "[X]%",  desc: "Reduction in manual reconciliation time per reporting period" },
        { num: "[X]+",  desc: "Certified material entries managed per trader per cycle" },
        { num: "[X]×",  desc: "Faster audit trail retrieval vs. Excel-based records" },
        { num: "[X]%",  desc: "Drop in over-allocation errors during certification audits" }
      ],
      sections: [
        {
          id: "cs-context", num: "01", label: "Context",
          heading: "A certification domain most designers have never encountered",
          blocks: [
            { type: "paragraph", text: "ISCC Mass Balance is a chain-of-custody certification methodology used by traders in chemical, agricultural, and energy supply chains to demonstrate that certified sustainable material — biomass, recycled feedstock, bio-based chemicals — is being handled and sold correctly. The certification does not require physical segregation of certified from non-certified material. Instead, it requires meticulous bookkeeping: every kilogram of certified material that comes in must be traceable through the system and must not be sold as certified in greater volumes than were purchased." },
            { type: "paragraph", text: "Carboledger was building SmartBalance as the module that lets enterprise traders run this bookkeeping directly on the platform — replacing the ad-hoc Excel workflows that had become the de-facto standard. I was the sole designer on a 4-person team. Requirements arrived as references to ISCC compliance framework documents, not product specs. Every UX decision had to be grounded in how the certification rules actually worked before I could translate them into something a non-expert user could operate." },
            { type: "callout", text: "\"Mass balance\" does not mean balancing a scale. It is a regulatory accounting framework. A trader can mix certified and conventional material in the same tank — they just need to ensure that the certified volume they sell never exceeds what they purchased and documented. The UX problem is: how do you let non-experts operate this correctly without exposing them to the underlying accounting rules they do not understand?" },
            { type: "image", show: true, size: "md", alt: "ISCC Mass Balance — what it is and why it matters", caption: "ISCC Mass Balance explained — the bookkeeping framework that SmartBalance replaces Excel for" }
          ]
        },
        {
          id: "cs-problem", num: "02", label: "The Problem",
          heading: "What traders were actually doing before",
          blocks: [
            { type: "paragraph", text: "Without SmartBalance, traders ran their mass balance records in Excel. Each trader maintained a separate spreadsheet — one column for incoming certified stock, one for outgoing certified deliveries, a running balance manually calculated. Certificates were stored in email folders and referenced in spreadsheet rows by filename. There was no validation that prevented someone from over-allocating — selling more certified volume than they had in stock." },
            { type: "paragraph", text: "The failure modes were quiet and slow. An error in a cell formula would compound across months. A certificate lookup would fail because the filename had changed. A trader would discover they had over-allocated only when an auditor flagged it — after the sale had already been made and the certificate issued. Remediation was expensive: corrected documentation, amended certificates, and in some cases failed certification audits." },
            { type: "metric", items: [
              { num: "Manual",  desc: "Reconciliation done entirely in Excel — no validation layer" },
              { num: "Silent",  desc: "Errors only surfaced at audit, not at point of entry" },
              { num: "Fragile", desc: "Certificate linkage maintained by filename convention, not by system" }
            ]},
            { type: "image", show: true, size: "lg", alt: "Before state — Excel mass balance tracking", caption: "Before state — the fragmented Excel and email workflow SmartBalance replaced" }
          ]
        },
        {
          id: "cs-challenge", num: "03", label: "Core Challenge",
          heading: "Designing a ledger for people who do not think in ledgers",
          blocks: [
            { type: "paragraph", text: "The core challenge was not \"how do we digitise this spreadsheet.\" It was: how do we let a trader correctly operate a certification bookkeeping system without requiring them to understand the underlying ISCC accounting rules that govern it? The framework has precise definitions of what counts as an incoming entry, what counts as an outgoing entry, what documentation must be attached, and what invariants the running balance must maintain. Most traders did not know these rules — they just needed to fill in numbers and trust the product to flag when something was wrong." },
            { type: "image", show: true, size: "pair", alts: ["What the user sees: enter stock/delivery amounts", "What the system does: validate against certification rules"], captions: ["What the user needs to do: enter amounts and attach certificates", "What the system needs to do: enforce certification invariants invisibly"] },
            { type: "paragraph", text: "There was a second, subtler challenge: the distinction between incoming certified stock and outgoing certified deliveries is obvious in accounting terms but deeply confusing in UX terms. Both involve a trader selecting a product, entering a volume, and attaching a certificate. The mental model difference is entirely in the direction of flow and its effect on the running balance — which is invisible unless the UI makes it explicit." },
            { type: "paragraph", text: "[Add specific constraints from the ISCC framework that made certain standard UX patterns unsuitable — e.g., why a simple form with a type dropdown was insufficient.]" }
          ]
        },
        {
          id: "cs-decisions", num: "04", label: "Design Decisions",
          heading: "What I built and why",
          blocks: [
            { type: "paragraph", text: "SmartBalance needed to solve four distinct UX problems simultaneously: make the running balance state always visible and unambiguous; encode the direction-of-flow distinction into the form structure without requiring users to understand accounting; attach certificates to entries in a way that survived file management inconsistency; and produce an audit trail that was both machine-readable for exports and human-readable for live auditor review." },
            { type: "image", show: true, size: "xl", alt: "SmartBalance — full system overview", caption: "SmartBalance system — key screens and the data flow between them" }
          ]
        },
        {
          id: "cs-outcomes", num: "05", label: "Outcomes",
          heading: "What changed for traders",
          blocks: [
            { type: "paragraph", text: "[Add specific outcomes here once metrics are confirmed. Suggested framing: reconciliation time per reporting period, reduction in over-allocation errors caught at audit, time to retrieve audit trail for a given certificate, adoption rate among enterprise trader users.]" },
            { type: "metric", items: [
              { num: "[X]%",  desc: "Reduction in reconciliation time per reporting cycle" },
              { num: "[X]+",  desc: "Entries managed per trader without Excel" },
              { num: "Zero",  desc: "Over-allocation errors post-launch (vs. [X] flagged at prior audits)" }
            ]}
          ]
        }
      ],
      decisions: [
        {
          id: "cs-decision-1", num: "Decision 01", parentSectionId: "cs-decisions",
          title: "Running Balance Visualization — making the certification state always legible",
          blocks: [
            { type: "paragraph", text: "The most important UX decision in SmartBalance was making the running balance a first-class element of every screen where an entry was being made — not a summary shown after the fact. Traders needed to see their current certified stock position before, during, and after every entry. Without this, the act of entering a delivery felt disconnected from its consequence: reducing the certified balance." },
            { type: "paragraph", text: "The balance indicator needed to communicate three distinct states: sufficient stock (entry is valid), approaching zero (trader should be aware), and over-allocation attempted (system blocks and explains why). Each state required a different UI treatment — not just color changes, but different contextual messaging explaining what the balance state meant for the certification." },
            { type: "callout", text: "Suggested addition: Add the specific visual treatment you chose for each balance state and the reasoning for choosing it over alternatives (e.g., why a persistent summary header beat a modal warning)." },
            { type: "image", show: true, size: "md", alt: "Running balance visualization — three states", caption: "Running balance indicator — sufficient stock / approaching zero / over-allocation blocked" }
          ]
        },
        {
          id: "cs-decision-2", num: "Decision 02", parentSectionId: "cs-decisions",
          title: "Entry Form Architecture — encoding certification rules into structure",
          blocks: [
            { type: "paragraph", text: "The ISCC framework distinguishes between stock entries (certified material coming in from a supplier) and delivery entries (certified material going out to a customer). In Excel, traders kept these in separate sheets but frequently confused them. In the product, I needed a form structure that made the distinction impossible to miss — not by labeling it 'Stock' vs 'Delivery' in a dropdown, but by making the two entry types structurally different in what they ask for and what they do to the balance." },
            { type: "paragraph", text: "A stock entry increases the certified balance and requires a supplier certificate as proof of origin. A delivery entry decreases the certified balance and generates or references a customer certificate. These are different document workflows, different validation rules, and different downstream effects. Collapsing them into a single form with a type selector would have created exactly the confusion the Excel workflow already had." },
            { type: "callout", text: "Suggested addition: Describe what the two entry forms looked like structurally. Did they use different entry points in the navigation? Different visual treatments? How did you handle the edge case where a trader needed to correct a past entry?" },
            { type: "image", show: true, size: "pair", alts: ["Stock entry form — inbound certified material", "Delivery entry form — outbound certified material"], captions: ["Stock entry — adds to certified balance, requires supplier certificate", "Delivery entry — draws from balance, generates customer certificate"] }
          ]
        },
        {
          id: "cs-decision-3", num: "Decision 03", parentSectionId: "cs-decisions",
          title: "Audit Trail Design — records that auditors and traders can both use",
          blocks: [
            { type: "paragraph", text: "ISCC audits require traders to produce a complete record of every certified transaction in a reporting period, with certificate references, volumes, dates, and counterparty information. The audit trail SmartBalance needed to produce was not just an export — it had to be navigable in-product by traders who needed to reconcile a disputed entry or trace a certificate back to its origin." },
            { type: "paragraph", text: "The design challenge: audit records are dense and technical by nature. A table of 200 entries with 8 columns is correct but unusable for a trader who wants to find one specific delivery from six months ago. I built a filterable audit log with certificate-level drill-down — each entry expandable to show the full certificate document chain and the balance state at the time of entry." },
            { type: "callout", text: "Suggested addition: Add what the audit export format looked like, whether you had to align with specific ISCC-required export templates, and how enterprise clients used the in-product log vs. the exported report during actual audits." },
            { type: "image", show: true, size: "lg", alt: "Audit trail — filterable log with certificate drill-down", caption: "Audit trail — filterable transaction log with per-entry certificate chain view" }
          ]
        },
        {
          id: "cs-decision-4", num: "Decision 04", parentSectionId: "cs-decisions",
          title: "Certificate Linkage — solving the broken file-reference problem",
          blocks: [
            { type: "paragraph", text: "In the Excel workflow, certificates were referenced by filename. If a PDF was renamed or moved, the reference broke silently. If a certificate was shared across multiple entries, there was no way to know which entries it covered. SmartBalance needed a certificate management layer that was more robust than file attachments — but not so complex that it became a new cognitive burden." },
            { type: "paragraph", text: "[Add the specific solution here — e.g., how certificates were uploaded and stored once, then referenced by entries rather than re-uploaded. How did the UI handle certificate reuse? What happened when a certificate expired or was superseded?]" },
            { type: "image", show: true, size: "md", alt: "Certificate management — upload once, reference from multiple entries", caption: "Certificate library — upload once, reference across entries, expiry tracking built in" }
          ]
        }
      ],
      reflection: "[Add reflection here — one honest paragraph. What would you do differently? Did the running balance visualization create any unexpected UX problems? Was there a specific part of the ISCC framework you failed to account for early and had to retroactively design around?]",
      nextProject: { label: "GreenSkills — AI Agents Suite for ESG Reporting", url: "greenskills.html" }
    },

    greenskills: {
      title:    "GreenSkills",
      subtitle: "Designing the UX for an AI agents suite that automates ESG data collection, interpretation, and reporting. The core design challenge: building trust in agent-driven outputs without making users dependent on a black box.",
      tags:     ["AI Product", "ESG / Compliance"],
      meta: [
        { label: "My Role",    value: "Founding Product Designer\nSole designer on the team" },
        { label: "Company",    value: "Carboledger\nEnterprise B2B SaaS, sustainability compliance" },
        { label: "Domain",     value: "ESG Reporting\nAI Agents, GHG Protocol, CSRD" },
        { label: "Constraints", value: "GDPR · SOC II\nISO 27001 · CSRD disclosure rules" }
      ],
      outcomes: [
        { num: "[X]×",  desc: "Faster ESG data collection vs. manual outreach" },
        { num: "[X]%",  desc: "Reduction in analyst time spent on data cleaning and formatting" },
        { num: "[X]+",  desc: "Supplier data points collected per reporting cycle" },
        { num: "[X]%",  desc: "Adoption rate among enterprise sustainability teams" }
      ],
      sections: [
        {
          id: "cs-context", num: "01", label: "Context",
          heading: "The regulatory pressure that created the product",
          blocks: [
            { type: "paragraph", text: "CSRD (Corporate Sustainability Reporting Directive) and the GHG Protocol are reshaping what enterprise companies must disclose about their supply chain emissions and ESG performance. The problem for most companies: the data is scattered across hundreds of suppliers, stored in different formats, and collected manually by sustainability analysts who spend the majority of their time on data gathering rather than analysis." },
            { type: "paragraph", text: "GreenSkills was Carboledger's AI agents module — a suite of agents designed to automate the collection, interpretation, and structuring of ESG data from supplier systems, uploaded documents, and direct responses. I was the sole designer on the 4-person team, defining the UX direction from the initial concept phase through to first enterprise pilots." },
            { type: "callout", text: "The market context: as of 2024, most sustainability teams at mid-market enterprises still run their CSRD data collection via email and Excel. GreenSkills was designed to replace that workflow entirely — with agents that could request, chase, interpret, and validate supplier data automatically." },
            { type: "image", show: true, size: "md", alt: "ESG data collection workflow — before AI agents", caption: "Before GreenSkills — the manual analyst workflow AI agents replace" }
          ]
        },
        {
          id: "cs-problem", num: "02", label: "The Problem",
          heading: "Where analyst time was actually going",
          blocks: [
            { type: "paragraph", text: "A sustainability analyst at an enterprise with 50 suppliers would spend a significant portion of their reporting cycle doing mechanical work: sending data request emails, following up with non-responders, downloading and reformatting supplier submissions, checking that the numbers were in the right units, and reconciling conflicting responses. Very little time was left for the actual analysis: understanding the numbers, identifying hotspots, and structuring the disclosure." },
            { type: "paragraph", text: "The agents GreenSkills deployed were designed to take over the mechanical layer: send structured requests, parse uploaded documents, flag missing or inconsistent data, and surface a clean, validated dataset ready for analysis. The UX problem was not 'how do you build the agent interface' — it was 'how do you design a system where the human can see what the agent did, trust its outputs, and know exactly when and why to intervene.'" },
            { type: "metric", items: [
              { num: "[X]hrs", desc: "Average analyst time per supplier data request cycle (before)" },
              { num: "Manual", desc: "PDF parsing, unit conversion, data formatting — all done by hand" },
              { num: "[X]%",   desc: "Of reporting time spent on data collection vs. actual analysis" }
            ]}
          ]
        },
        {
          id: "cs-challenge", num: "03", label: "Core Challenge",
          heading: "Calibrating trust — between black box and micromanagement",
          blocks: [
            { type: "paragraph", text: "The fundamental design tension in any AI agent product: if users cannot see what the agent did or why, they cannot trust it. But if users have to review every agent action, the automation provides no net benefit — the cognitive load shifts rather than reducing." },
            { type: "paragraph", text: "GreenSkills needed to hit a narrow target: give users enough transparency to trust agent outputs without requiring them to verify each one. That meant designing a clear model of where agents operate autonomously, where they surface their work for review, and where they must ask for human decision before proceeding. Getting the boundary wrong in either direction — too transparent, too opaque — would break the product's core value proposition." },
            { type: "image", show: true, size: "pair", alts: ["Too opaque: user cannot trust outputs", "Too transparent: automation becomes another form of manual work"], captions: ["Too opaque: agent acts as a black box, user cannot validate", "Too transparent: user reviews every step — no net efficiency gain"] },
            { type: "paragraph", text: "[Add the specific research or signals that helped you locate where the boundary should be — e.g., which agent actions users were most anxious about, which they were comfortable delegating entirely, and what evidence (session recordings, interviews) informed those thresholds.]" }
          ]
        },
        {
          id: "cs-decisions", num: "04", label: "Design Decisions",
          heading: "What I built and why",
          blocks: [
            { type: "paragraph", text: "Four decisions shaped the GreenSkills UX: an agent transparency layer that showed source and confidence for each data point; structured human review checkpoints before data entered official reports; a regulatory scope visualization that made abstract CSRD requirements legible to non-expert users; and a supplier data collection flow that replaced unstructured email with structured agent-mediated requests." },
            { type: "image", show: true, size: "xl", alt: "GreenSkills — agent suite overview and key screens", caption: "GreenSkills system — agent dashboard, transparency layer, review checkpoints" }
          ]
        },
        {
          id: "cs-outcomes", num: "05", label: "Outcomes",
          heading: "What changed for sustainability teams",
          blocks: [
            { type: "paragraph", text: "[Add specific outcomes when available. Suggested framing: analyst hours saved per reporting cycle, supplier response rate improvement, time from data collection start to validated dataset ready for reporting.]" },
            { type: "metric", items: [
              { num: "[X]×",  desc: "Faster supplier data collection vs. email-based outreach" },
              { num: "[X]%",  desc: "Analyst time freed from mechanical data formatting" },
              { num: "[X]%",  desc: "Adoption rate across enterprise sustainability teams in pilot" }
            ]}
          ]
        }
      ],
      decisions: [
        {
          id: "cs-decision-1", num: "Decision 01", parentSectionId: "cs-decisions",
          title: "Agent Transparency Layer — showing what the agent did and why",
          blocks: [
            { type: "paragraph", text: "Every data point collected by an agent carried a provenance record: which supplier submitted it, from which document or form field it was extracted, what confidence the agent assigned, and whether it was transformed (e.g., unit converted from kg to tCO2e). This was not a developer log — it was a user-facing data card that appeared in the review interface alongside each collected value." },
            { type: "paragraph", text: "The transparency layer served two functions. For high-confidence data points, it let users do a quick sanity check and approve in bulk. For low-confidence or flagged points, it surfaced exactly what the agent was uncertain about — a specific field value, a unit it could not resolve, a document section it could not parse — so users knew precisely what they needed to verify, rather than rejecting the entire collection." },
            { type: "callout", text: "Suggested addition: Add the specific confidence threshold that triggered the 'agent uncertain' state, how that threshold was determined, and whether users could adjust it per data type or supplier." },
            { type: "image", show: true, size: "md", alt: "Agent transparency card — source, confidence, provenance", caption: "Data point transparency card — source document, extraction confidence, any transformations applied" }
          ]
        },
        {
          id: "cs-decision-2", num: "Decision 02", parentSectionId: "cs-decisions",
          title: "Human Review Checkpoints — where automation stops and judgment begins",
          blocks: [
            { type: "paragraph", text: "Not all agent actions should be transparent — that way lies the micromanagement trap. The design question was: which specific actions, if wrong, would create downstream problems that could not easily be corrected? Those were the checkpoints. Everything else the agent did autonomously with a log available on demand." },
            { type: "paragraph", text: "The non-negotiable checkpoints were: before a data point entered a regulatory disclosure, before an agent sent an external communication to a supplier on behalf of the enterprise, and before the system flagged a supplier as non-compliant. These were high-stakes, hard-to-reverse, or externally visible actions. All other agent work — parsing, structuring, deduplicating — ran without interruption." },
            { type: "callout", text: "Suggested addition: Describe what the checkpoint review interface looked like. Was it a queue? A per-action modal? Did users review supplier-by-supplier or data-point-by-data-point? What was the average time spent at a checkpoint?" },
            { type: "image", show: true, size: "pair", alts: ["Checkpoint queue — actions awaiting human review", "Approved action — moves to disclosure pipeline"], captions: ["Checkpoint queue — high-stakes agent actions pending approval", "Post-approval — approved data enters the reporting pipeline"] }
          ]
        },
        {
          id: "cs-decision-3", num: "Decision 03", parentSectionId: "cs-decisions",
          title: "Regulatory Scope Visualization — making CSRD legible to non-experts",
          blocks: [
            { type: "paragraph", text: "CSRD reporting covers a defined scope: Scope 1 (direct emissions), Scope 2 (purchased energy), and Scope 3 (supply chain). Most users on the platform were not sustainability experts — they were operations managers or procurement teams who had been handed a reporting responsibility. Before agents could collect data, users needed to understand what data they were required to collect and why." },
            { type: "paragraph", text: "[Add how you solved this — e.g., an onboarding visualization that mapped the company's supply chain to the relevant CSRD data requirements, a scope selector with plain-language explanations, or a gap analysis view showing what was missing and why it was required.]" },
            { type: "image", show: true, size: "lg", alt: "CSRD scope visualization — what you need to collect and why", caption: "Regulatory scope map — plain-language view of CSRD data requirements for the user's supply chain" }
          ]
        },
        {
          id: "cs-decision-4", num: "Decision 04", parentSectionId: "cs-decisions",
          title: "Structured Supplier Data Collection — replacing email with agent-mediated requests",
          blocks: [
            { type: "paragraph", text: "The before state: sustainability analysts sent unstructured emails to supplier contacts asking for 'emissions data.' Responses came in different formats, at different times, with different levels of completeness. The agent-mediated replacement was a structured request flow: the agent sent a standardized request to the supplier contact, provided a structured submission form, chased non-responses on a defined schedule, and parsed the completed submission automatically." },
            { type: "paragraph", text: "[Add specifics on the supplier-facing experience — what did the request and submission form look like for a supplier who was not a Carboledger user? How did you handle supplier contacts who were also non-experts in ESG data? What happened when a supplier submitted incomplete data?]" },
            { type: "image", show: true, size: "md", alt: "Supplier data request flow — agent-mediated structured collection", caption: "Agent-mediated supplier request — structured form vs. unstructured email predecessor" }
          ]
        }
      ],
      reflection: "[Add reflection — one honest paragraph. What did you get wrong about the trust calibration? Were there agent actions you put behind review checkpoints that users consistently approved without reading? Were there autonomous actions that caused problems you had to retroactively checkpoint?]",
      nextProject: { label: "Santhe — Hyperlocal Commerce Platform", url: "santhe.html" }
    },

    santhe: {
      title:    "Santhe",
      subtitle: "Designing trust-first ordering and fulfillment workflows for a hyperlocal commerce platform serving non-tech-savvy local retailers. Adoption risk was not a feature problem — it was a cognitive trust problem.",
      tags:     ["B2C / Commerce", "Trust-First Design"],
      meta: [
        { label: "My Role",    value: "Product Designer (Contract)" },
        { label: "Company",    value: "Santhe\nB2C hyperlocal commerce platform" },
        { label: "Timeline",   value: "Jan 2022 – Apr 2022" },
        { label: "Users",      value: "Local Kirana store owners (50s–60s)\nDelivery partners, end customers" }
      ],
      outcomes: [
        { num: "MVP",   desc: "Shipped with 1 frontend engineer" },
        { num: "[X]+",  desc: "Kirana store owners onboarded in field validation" },
        { num: "[X]%",  desc: "Task completion rate in usability testing with store owners" },
        { num: "Zero",  desc: "Feature requests from store owners — adoption was blocked by trust, not missing features" }
      ],
      sections: [
        {
          id: "cs-context", num: "01", label: "Context",
          heading: "Designing for users who had never used a digital commerce tool",
          blocks: [
            { type: "paragraph", text: "Santhe was a hyperlocal commerce platform: customers placed orders through a consumer app, Kirana store owners received and fulfilled them, and delivery partners completed the last-mile. It was a 3-sided marketplace where the weakest link was the middle — the store owners, many of whom were in their 50s and 60s, running their shops the way they always had, and deeply sceptical of digital tools that promised to change how they worked." },
            { type: "paragraph", text: "I was brought in as a contract product designer to own the UX for the store owner side — the most fragile part of the experience. I worked directly with one frontend engineer. We had four months, a lean scope, and a clear constraint: do not build complexity that the store owners would not understand. Ship the simplest system that could actually work in the field." },
            { type: "callout", text: "The defining context: these users had not failed to adopt digital tools because the right app had not been built yet. They had failed to adopt because every digital tool they had encountered created more uncertainty than it resolved. Our job was not to add a new digital tool — it was to build one that reduced uncertainty." },
            { type: "image", show: true, size: "md", alt: "Santhe context — Kirana store owners and the platform three-way flow", caption: "Santhe ecosystem — customers, store owners, delivery partners and how the order flows between them" }
          ]
        },
        {
          id: "cs-problem", num: "02", label: "The Problem",
          heading: "Why store owners kept abandoning digital tools",
          blocks: [
            { type: "paragraph", text: "Non-tech-savvy store owners did not abandon digital commerce tools because those tools were too complex to learn. They abandoned them because those tools created situations with unclear outcomes. An order appeared on a screen — what happened if the store owner could not fulfill it? Would the customer be automatically notified? Would it affect their rating? Would the delivery partner show up anyway? The tool did not answer these questions, so store owners avoided the situation by not using the tool." },
            { type: "paragraph", text: "Adoption in this demographic was not blocked by missing features or poor visual design. It was blocked by the inability to predict what would happen next at every step of the workflow. Store owners who had spent decades in face-to-face commerce had deeply ingrained mental models of how transactions worked. A digital tool that mapped cleanly onto those models, with every state and outcome made explicit, would be adopted. One that deviated unexpectedly would be abandoned." },
            { type: "metric", items: [
              { num: "Trust", desc: "The primary adoption barrier — not feature gaps or usability friction" },
              { num: "Offline", desc: "Mental model store owners brought in: face-to-face, synchronous, predictable" },
              { num: "Failure", desc: "State design was the critical gap — what happens when things go wrong" }
            ]}
          ]
        },
        {
          id: "cs-challenge", num: "03", label: "Core Challenge",
          heading: "Cognitive simplicity over feature completeness",
          blocks: [
            { type: "paragraph", text: "The challenge was not to design a simpler interface. It was to design a system where the store owner always knew exactly what was happening, what would happen next, and what they were expected to do. That is a different problem. A visually simple interface with ambiguous state transitions is more confusing than a complex interface where every state is clearly labeled." },
            { type: "image", show: true, size: "pair", alts: ["Common failure: clean UI with ambiguous states", "Santhe approach: explicit states with plain-language outcomes"], captions: ["Common failure mode: visually clean but states and their consequences are ambiguous", "Santhe design principle: every state named, every outcome stated before the user commits"] },
            { type: "paragraph", text: "The specific design constraint this created: every order state had to be named in plain language and had to include what happened automatically and what required the store owner to act. Every action the store owner could take had to show its consequence before it was taken. Error states — order they could not fulfill, delivery partner not available, customer unreachable — had to be first-class design objects, not afterthoughts." },
            { type: "paragraph", text: "[Add specific user research findings here — e.g., which states caused the most confusion, what language store owners actually used to describe order states vs. what the product was using, and how field validation sessions shaped the final language choices.]" }
          ]
        },
        {
          id: "cs-decisions", num: "04", label: "Design Decisions",
          heading: "What I built and why",
          blocks: [
            { type: "paragraph", text: "Three decisions defined the Santhe store owner experience: an order state model that made every transition and its consequence explicit before the store owner acted; a failure state system that gave store owners a clear path when they could not fulfill an order; and a simplified dashboard that showed only what was relevant to the current operational moment — no unnecessary information during active order periods." },
            { type: "image", show: true, size: "xl", alt: "Santhe store owner flow — order states and actions", caption: "Santhe store owner interface — order state flow, key screens, and failure state handling" }
          ]
        }
      ],
      decisions: [
        {
          id: "cs-decision-1", num: "Decision 01", parentSectionId: "cs-decisions",
          title: "Order State Explicitness — naming every state in the store owner's language",
          blocks: [
            { type: "paragraph", text: "Most commerce platforms name order states from the customer's perspective: 'Order Received,' 'Being Prepared,' 'Out for Delivery.' For Kirana store owners, these labels described outcomes — not the actions they needed to take. I redesigned the state model from the store owner's operational perspective: what does this state mean for what I do right now?" },
            { type: "paragraph", text: "Every state label was tested with store owners during field sessions. 'Being Prepared' became 'You are packing this order' because 'Being Prepared' sounded like something that was happening somewhere else. 'Pending' became 'New order — you have not accepted yet' because 'Pending' had no clear owner. The language was non-standard but it was the language that produced correct actions." },
            { type: "callout", text: "Suggested addition: Add 2-3 specific examples of state label changes from field testing — the before (standard e-commerce language), what store owners thought it meant, and the after (Santhe language). These make the insight concrete." },
            { type: "image", show: true, size: "md", alt: "Order state language — before and after", caption: "State label redesign — from standard e-commerce language to store owner operational language" }
          ]
        },
        {
          id: "cs-decision-2", num: "Decision 02", parentSectionId: "cs-decisions",
          title: "Failure State Design — what happens when the store owner cannot fulfill",
          blocks: [
            { type: "paragraph", text: "The most anxiety-producing scenario for store owners was not a complex order — it was an order they could not fulfill. Out-of-stock item. Delivery partner no-show. Customer unreachable. In the pre-digital workflow, these situations resolved naturally through a phone call. In a digital platform with no precedent for this user group, they became the scenarios that drove abandonment." },
            { type: "paragraph", text: "I designed every failure state as a three-part structure: what happened (plain statement of the situation), what would happen automatically (what the system would do without any action from the store owner), and what the store owner could do (optional action they could take to improve the outcome). This structure made failure states feel manageable rather than catastrophic." },
            { type: "paragraph", text: "[Add specific failure state examples — particularly the 'cannot fulfill' flow. What exactly did the store owner see? What was communicated to the customer? Was there any penalty or rating consequence, and if so, how was that disclosed?]" },
            { type: "image", show: true, size: "pair", alts: ["Cannot fulfill order — what store owner sees", "Customer notification — automatic handling"], captions: ["Cannot fulfill: three-part structure — what happened / automatic / optional action", "Customer notification — automatic, with no action required from the store owner"] }
          ]
        },
        {
          id: "cs-decision-3", num: "Decision 03", parentSectionId: "cs-decisions",
          title: "Dashboard Simplification — showing only what matters right now",
          blocks: [
            { type: "paragraph", text: "The Santhe store owner dashboard had to work in an operational context: a store owner glancing at a phone while serving another customer, or checking an order while the delivery partner was at the door. Information density that would be fine in a quiet back-office review was unacceptable in that environment." },
            { type: "paragraph", text: "The dashboard was designed around a single primary question: 'Do I have anything I need to act on right now?' Orders requiring action were surfaced immediately on entry. Completed orders, historical data, and settings were one level deeper — available but not competing for attention during active hours. The visual hierarchy was deliberate: one thing at a time, in the order the store owner would encounter them operationally." },
            { type: "callout", text: "Suggested addition: Describe what the dashboard looked like at different times of day — an empty state mid-morning, a busy lunch rush with 3 active orders, and end-of-day with completed order summary. The context-sensitivity is the story." },
            { type: "image", show: true, size: "lg", alt: "Santhe dashboard — active orders, empty state, end-of-day", caption: "Dashboard states — active order period, idle, and end-of-day summary" }
          ]
        }
      ],
      reflection: "[Add reflection — one honest paragraph. Was there a specific failure state you did not design for that surfaced during field validation? Was the trust problem more about the product or more about the context of adoption — i.e., were there non-design factors (payout timing, store owner social proof, business model) that mattered more than the UX in the end?]",
      nextProject: { label: "Back to all work", url: "../index.html#work" }
    }
  }

}; // end window.CONTENT
