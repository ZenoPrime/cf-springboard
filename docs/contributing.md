# 🤝 Contributing to Springboard

We're excited that you're interested in contributing to Springboard! This guide will help you get started with contributing to our Web3 project discovery platform.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Ways to Contribute](#ways-to-contribute)
- [Development Setup](#development-setup)
- [Contribution Workflow](#contribution-workflow)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Issue Guidelines](#issue-guidelines)
- [Pull Request Process](#pull-request-process)
- [Content Contributions](#content-contributions)
- [Community Guidelines](#community-guidelines)
- [Recognition](#recognition)

## 📜 Code of Conduct

### Our Pledge

We are committed to making participation in our project a harassment-free experience for everyone, regardless of:

- Age, body size, disability, ethnicity, gender identity and expression
- Level of experience, nationality, personal appearance, race, religion
- Sexual identity and orientation

### Our Standards

**Positive behaviors include:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behaviors include:**
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct which could reasonably be considered inappropriate

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team. All complaints will be reviewed and investigated promptly and fairly.

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control
- **Code editor** (VS Code recommended)
- **Basic knowledge** of React, Next.js, and TypeScript

### Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Install dependencies** with `npm install`
4. **Set up environment** variables
5. **Start development** server with `npm run dev`
6. **Make your changes** and test them
7. **Submit a pull request**

## 🎯 Ways to Contribute

### Code Contributions

- **Bug fixes**: Fix reported issues
- **Feature development**: Implement new features
- **Performance improvements**: Optimize existing code
- **Security enhancements**: Improve platform security
- **Accessibility improvements**: Make the platform more accessible

### Content Contributions

- **Project ideas**: Submit new Web3 project concepts
- **Builder kits**: Create resource packages
- **Documentation**: Improve guides and tutorials
- **Translations**: Help localize the platform
- **Examples**: Provide implementation examples

### Community Contributions

- **Issue reporting**: Report bugs and suggest features
- **Testing**: Help test new features and releases
- **Code review**: Review pull requests from other contributors
- **Mentoring**: Help new contributors get started
- **Advocacy**: Promote the project in the community

## 💻 Development Setup

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/cf-springboard.git
cd cf-springboard
```

### 2. Install Dependencies

```bash
# Install project dependencies
npm install

# Or using yarn
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Airtable Configuration
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_IDEAS_TABLE=Ideas
AIRTABLE_BUILDER_KITS_TABLE=Builder Kits
AIRTABLE_HACKATHONS_TABLE=Hackathons
AIRTABLE_RESOURCES_TABLE=Resources

# Optional: Analytics and monitoring
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

### 4. Start Development Server

```bash
# Start the development server
npm run dev

# The application will be available at http://localhost:3000
```

### 5. Verify Setup

- Visit `http://localhost:3000`
- Check that the homepage loads correctly
- Verify that data is fetched from Airtable
- Test navigation between pages

## 🔄 Contribution Workflow

### 1. Create a Branch

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/issue-description
```

### 2. Make Changes

- Write clean, well-documented code
- Follow existing code style and conventions
- Add tests for new functionality
- Update documentation as needed

### 3. Test Your Changes

```bash
# Run tests
npm run test

# Run linting
npm run lint

# Check TypeScript types
npm run type-check

# Build the project
npm run build
```

### 4. Commit Changes

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "feat: add new project idea filtering feature"
```

### 5. Push and Create PR

```bash
# Push to your fork
git push origin feature/your-feature-name

# Create a pull request on GitHub
```

## 📝 Coding Standards

### Code Style

- **ESLint**: Follow the configured ESLint rules
- **Prettier**: Use Prettier for code formatting
- **TypeScript**: Use TypeScript for type safety
- **Naming**: Use descriptive variable and function names

### File Organization

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable React components
│   ├── ui/             # Basic UI components
│   ├── layout/         # Layout components
│   └── features/       # Feature-specific components
├── lib/                # Utility functions and configurations
├── types/              # TypeScript type definitions
└── styles/             # Global styles and Tailwind config
```

### Component Guidelines

```typescript
// Use functional components with TypeScript
interface ComponentProps {
  title: string;
  description?: string;
  onAction?: () => void;
}

export function Component({ title, description, onAction }: ComponentProps) {
  return (
    <div className="component-container">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {onAction && (
        <button onClick={onAction} className="action-button">
          Action
        </button>
      )}
    </div>
  );
}
```

### Styling Guidelines

- **Tailwind CSS**: Use Tailwind for styling
- **Responsive Design**: Ensure mobile-first responsive design
- **Dark Mode**: Support both light and dark themes
- **Accessibility**: Follow WCAG guidelines

```tsx
// Example with proper styling
<div className="
  flex flex-col gap-4 p-6
  bg-white dark:bg-gray-900
  rounded-lg shadow-md
  hover:shadow-lg transition-shadow
  md:flex-row md:gap-6
">
  {/* Component content */}
</div>
```

## 🧪 Testing Guidelines

### Test Structure

```typescript
// Component test example
import { render, screen } from '@testing-library/react';
import { Component } from './Component';

describe('Component', () => {
  it('renders with required props', () => {
    render(<Component title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('handles optional props correctly', () => {
    const mockAction = jest.fn();
    render(
      <Component 
        title="Test" 
        description="Test description" 
        onAction={mockAction} 
      />
    );
    
    expect(screen.getByText('Test description')).toBeInTheDocument();
    
    const button = screen.getByRole('button');
    button.click();
    expect(mockAction).toHaveBeenCalled();
  });
});
```

### Testing Commands

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm run test Component.test.tsx
```

## 📚 Documentation

### Code Documentation

```typescript
/**
 * Fetches project ideas from Airtable with optional filtering
 * @param filters - Optional filters to apply
 * @param filters.category - Filter by project category
 * @param filters.difficulty - Filter by difficulty level
 * @returns Promise resolving to array of project ideas
 */
export async function fetchIdeas(filters?: {
  category?: string;
  difficulty?: string;
}): Promise<Idea[]> {
  // Implementation
}
```

### README Updates

- Update README.md for significant changes
- Include setup instructions for new features
- Add examples for new functionality
- Update dependency information

### API Documentation

- Document new API endpoints
- Include request/response examples
- Update OpenAPI specifications
- Add integration examples

## 🐛 Issue Guidelines

### Bug Reports

When reporting bugs, include:

```markdown
## Bug Description
A clear description of what the bug is.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What you expected to happen.

## Actual Behavior
What actually happened.

## Environment
- OS: [e.g. Windows 10, macOS 12.0]
- Browser: [e.g. Chrome 96, Safari 15]
- Node.js version: [e.g. 18.0.0]
- Project version: [e.g. 1.2.0]

## Additional Context
Any other context about the problem.
```

### Feature Requests

```markdown
## Feature Description
A clear description of the feature you'd like to see.

## Problem Statement
What problem does this feature solve?

## Proposed Solution
How would you like this feature to work?

## Alternatives Considered
Other solutions you've considered.

## Additional Context
Any other context or screenshots.
```

## 🔀 Pull Request Process

### PR Checklist

Before submitting a PR, ensure:

- [ ] Code follows project style guidelines
- [ ] Tests pass and coverage is maintained
- [ ] Documentation is updated
- [ ] Commit messages are descriptive
- [ ] PR description explains changes
- [ ] Breaking changes are documented

### PR Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change)
- [ ] New feature (non-breaking change)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] New tests added for new functionality
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where necessary
- [ ] I have made corresponding changes to documentation
- [ ] My changes generate no new warnings
```

### Review Process

1. **Automated Checks**: CI/CD pipeline runs tests and linting
2. **Code Review**: Maintainers review code quality and design
3. **Testing**: Changes are tested in staging environment
4. **Approval**: At least one maintainer approval required
5. **Merge**: Changes are merged to main branch

## 📝 Content Contributions

### Project Ideas

To contribute project ideas:

1. **Research**: Ensure the idea is unique and valuable
2. **Structure**: Follow the project idea template
3. **Detail**: Provide comprehensive information
4. **Review**: Submit for community review

#### Project Idea Template

```markdown
# Project Title

## Category
[DeFi/NFT/DAO/Gaming/etc.]

## Difficulty
[Beginner/Intermediate/Advanced/Expert]

## Executive Summary
Brief overview of the project concept.

## Problem Statement
What problem does this project solve?

## Key Features
- Feature 1
- Feature 2
- Feature 3

## Technical Architecture
- Blockchain: [Ethereum/Solana/Polygon/etc.]
- Smart Contracts: [Solidity/Rust/etc.]
- Frontend: [React/Vue/Angular/etc.]
- Backend: [Node.js/Python/etc.]

## Business Model
- Revenue streams
- Target market
- Go-to-market strategy

## Implementation Roadmap
### Phase 1: MVP (2-3 months)
- Deliverable 1
- Deliverable 2

### Phase 2: Growth (3-6 months)
- Deliverable 1
- Deliverable 2

## Resources Required
- Team size: X developers
- Estimated budget: $X
- Timeline: X months
```

### Builder Kits

To contribute builder kits:

1. **Identify Need**: Find gaps in existing resources
2. **Create Content**: Develop comprehensive materials
3. **Test**: Validate with community feedback
4. **Package**: Organize for easy distribution

### Documentation

- **Clarity**: Write clear, concise documentation
- **Examples**: Include practical examples
- **Structure**: Use consistent formatting
- **Updates**: Keep documentation current

## 👥 Community Guidelines

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and ideas
- **Discord**: Real-time community chat
- **Twitter**: Updates and announcements

### Community Roles

#### Contributors
- Submit code, content, or documentation
- Participate in discussions
- Help other community members

#### Maintainers
- Review and merge pull requests
- Manage project roadmap
- Moderate community discussions
- Make architectural decisions

#### Core Team
- Project leadership and vision
- Major feature development
- Community management
- Strategic partnerships

### Mentorship Program

- **New Contributors**: Pair with experienced mentors
- **Learning Path**: Structured onboarding process
- **Support**: Regular check-ins and guidance
- **Growth**: Opportunities for increased responsibility

## 🏆 Recognition

### Contributor Recognition

- **Contributors Page**: Featured on project website
- **Release Notes**: Acknowledged in release announcements
- **Social Media**: Highlighted on project social channels
- **Swag**: Exclusive contributor merchandise

### Contribution Levels

#### Bronze Contributors
- 1-5 merged pull requests
- Active in community discussions
- Helps other contributors

#### Silver Contributors
- 6-15 merged pull requests
- Significant feature contributions
- Mentors new contributors

#### Gold Contributors
- 16+ merged pull requests
- Major feature development
- Community leadership
- Long-term commitment

### Special Recognition

- **Contributor of the Month**: Monthly recognition
- **Annual Awards**: Yearly contributor celebration
- **Conference Speaking**: Opportunities to represent project
- **Advisory Role**: Input on project direction

## 📞 Getting Help

### For New Contributors

1. **Read Documentation**: Start with this guide and README
2. **Join Community**: Connect on Discord or GitHub Discussions
3. **Find Good First Issues**: Look for "good first issue" labels
4. **Ask Questions**: Don't hesitate to ask for help

### For Experienced Contributors

1. **Mentor Others**: Help new contributors get started
2. **Review PRs**: Participate in code review process
3. **Propose Features**: Suggest new features and improvements
4. **Lead Initiatives**: Take ownership of major features

### Support Channels

- **GitHub Issues**: Technical problems and bugs
- **GitHub Discussions**: General questions and ideas
- **Discord**: Real-time help and community chat
- **Email**: Direct contact for sensitive issues

---

## 🎉 Thank You!

Thank you for your interest in contributing to Springboard! Every contribution, no matter how small, helps make the Web3 ecosystem more accessible and innovative.

**Together, we're building the future of decentralized innovation! 🚀**

---

*This contributing guide is a living document. Please suggest improvements and updates as the project evolves.*