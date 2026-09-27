# Dev Kumar — Intelligence Orchestration Portfolio

Static, responsive portfolio for `_dev_Apple_SystemsSoftwareEngineerIntelligenceOrchestration_200670440-0836`. Built with plain HTML, CSS, JavaScript, and original inline SVG artwork. No build step is required.

## Role and company research

The target is Apple's Systems Software Engineer, Intelligence Orchestration, Proactive Intelligence role (requisition 200670440-0836) in Cupertino. The team develops daemons, frameworks, and platform services behind Apple Intelligence and Siri across Apple platforms, spanning model lifecycle and on-device inference, private cloud routing, document processing for search, performance reporting, customer issue resolution, and design guidance with partner engineering teams.

This work sits at the systems/ML boundary rather than foundation-model research: the product challenge is to make intelligence useful within OS and device constraints while balancing model availability, memory, latency, privacy boundaries, and failures. Apple's public materials explain that many requests run on device, while more computationally demanding requests may use Private Cloud Compute; Apple's September 2026 Siri announcement also describes an orchestrator that can use on-device Spotlight and app capabilities. These public product details informed the portfolio's on-device/private-cloud routing illustration. The illustration is a conceptual portfolio diagram, not an Apple architecture diagram.

The resume is unusually direct for this systems profile: C++/Python request routing by model and privacy tier; model versioning and hot swap; bounded-memory inference; priority scheduling for document indexing; RAG retrieval; and on-device latency, memory, and failure reporting. Earlier work adds Swift/Objective-C frameworks, launchd daemons, XPC, GCD, Core ML, Instruments, LLDB/GDB, and performance testing.

- [Apple role posting](https://jobs.apple.com/en-us/details/200670440-0836/systems-software-engineer-intelligence-orchestration-proactive-intelligence)
- [Apple Intelligence privacy and compute model](https://www.apple.com/privacy/features/)
- [Apple's September 2026 Siri and Intelligence announcement](https://www.apple.com/newsroom/2026/09/siri-ai-a-profoundly-more-capable-and-personal-assistant-is-here/)

## Publish

Create the repository named `_dev_Apple_SystemsSoftwareEngineerIntelligenceOrchestration_200670440-0836` under `DSP25SCM14K`, push this directory to `main`, then configure GitHub Pages from the root of that branch. This static site needs no compilation.
