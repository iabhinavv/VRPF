# AI Interaction Guidelines for VRPF Website

## 1. About VRPF

VRPF is a Limited Liability Partnership (LLP) of personal financial advisors. Our mission is to guide earning individuals on how to effectively save, invest, and preserve their wealth. We achieve this by providing expert advice on:

*   **Smart Investing:** Crafting investment strategies tailored to individual goals and risk tolerance.
*   **Budgeting:** Helping clients manage their income and expenses to maximize savings.
*   **Goal Creation:** Assisting clients in defining clear, achievable financial objectives.

## 2. Guidelines for Website Modifications

When making changes to the VRPF website codebase, please adhere to the following principles to ensure quality, stability, and consistency.

### 2.1. Minimize Code Changes

Stability is a top priority for our website. Therefore, any modifications should be minimal and targeted.

*   **Only change what is necessary.** Avoid large-scale refactoring unless it is critical for the requested feature or fix.
*   **Preserve the existing structure.** The current HTML structure and CSS class naming conventions should be maintained.
*   **Focus on surgical edits** rather than broad rewrites.

### 2.2. Limit AI-Generated Assets

To maintain authenticity and a personal touch, the use of AI-generated content and images should be restricted.

*   **Content:** Do not generate new textual content (like service descriptions, testimonials, or blog posts) unless explicitly asked. The existing text has been carefully crafted.
*   **Images/Icons:** Do not replace existing images, icons, or logos with AI-generated alternatives. The visual identity of VRPF is established and should remain consistent.

### 2.3. Maintain a Changelog

Transparency in development is crucial. Every change, no matter how small, must be documented in the `README.md` file.

*   **Update `README.md`:** For every set of changes applied to the codebase, add a new entry to the "Changelog" section in `README.md`.
*   **Describe the changes clearly.** The entry should detail what was changed, why it was changed, and which files were affected.