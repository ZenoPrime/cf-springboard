import { NextRequest, NextResponse } from 'next/server';
import base from '@/lib/airtable-client';

interface IdeaData {
  title: string;
  slug: string;
  description: string;
  problem_solved: string;
  target_audience: string;
  mvp_features: string;
  difficulty: string;
  status: string;
  category: string;
  prd_content: string;
}

const ideasToAdd: IdeaData[] = [
  {
    title: "Digital Identity & Credit Scoring System",
    slug: "digital-identity-credit-scoring-system",
    description: "A blockchain-based platform designed to establish a secure, private, and efficient digital identity and credit scoring system. Leveraging the Solana blockchain, this platform aims to empower individuals with self-sovereign control over their personal data and financial reputation, while providing financial institutions with robust, fraud-resistant tools for identity verification and credit risk assessment.",
    problem_solved: "Identity fraud, limited access to financial services, data privacy concerns, and non-portable credit history. Traditional identity verification processes are manual, costly, susceptible to fraud, and create friction in onboarding workflows.",
    target_audience: "Individuals seeking financial services, financial institutions (banks/lenders), businesses requiring identity verification, and underserved populations without traditional credit histories.",
    mvp_features: "Mock issuer interface for verifiable credentials, basic user wallet for storing VCs, mock verifier interface, selective disclosure simulation, and core Solana smart contract for DID registration and VC verification.",
    difficulty: "Difficult",
    status: "approved",
    category: "DeFi",
    prd_content: JSON.stringify({
      "executive_summary": "Blockchain-based platform for secure digital identity and credit scoring using Solana blockchain, empowering users with self-sovereign control over personal data and financial reputation.",
      "problem_statement": "Identity fraud & inefficiency, limited access to financial services, data privacy concerns, and non-portable credit history plague existing identity management and credit assessment paradigms.",
      "key_features": [
        "Self-Sovereign Identity (SSI) Management with user-owned digital wallets",
        "Transaction History-Based Credit Scoring with on-chain aggregation",
        "Integration with Financial Institutions via APIs/SDKs",
        "Privacy-Preserving Verification with selective disclosure",
        "Portable Credit History anchored to user-controlled DIDs",
        "Verifiable Credentials (VCs) from trusted third-party entities"
      ],
      "target_users": [
        "Individual consumers seeking financial services",
        "Financial institutions requiring identity verification",
        "Businesses needing secure identity verification",
        "Underserved populations without traditional credit"
      ],
      "technical_stack": {
        "blockchain": "Solana",
        "smart_contracts": "Rust with Anchor framework",
        "identity": "Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs)",
        "privacy": "Zero-Knowledge Proofs (future consideration)"
      }
    })
  },
  {
    title: "Education Payment & Certification System",
    slug: "education-payment-certification-system",
    description: "A blockchain-based platform designed to revolutionize educational payments, credentials, and certificates. Leveraging the Solana blockchain, the system aims to provide a secure, transparent, and efficient ecosystem for managing academic records and financial transactions within the education sector.",
    problem_solved: "Certificate fraud, inefficient payment systems, lack of permanent accessible academic records, and opaque student loan management. Traditional paper-based certificates are susceptible to fraud and manual payment processes are administratively burdensome.",
    target_audience: "Educational institutions, students, employers/recruiters, scholarship providers, and loan providers seeking transparent and efficient academic credential and payment management.",
    mvp_features: "Basic institutional interface for certificate issuance, certificate representation as Solana NFTs, student wallet integration, public verification portal, and core smart contract for certificate minting and verification.",
    difficulty: "Intermediate",
    status: "approved",
    category: "Education",
    prd_content: JSON.stringify({
      "executive_summary": "Blockchain-based platform for educational payments, credentials, and certificates using Solana blockchain to provide secure, transparent ecosystem for academic records and financial transactions.",
      "problem_statement": "Certificate fraud, inefficient payment systems, lack of permanent accessible academic records, and opaque student loan management hinder trust, efficiency, and accessibility in education.",
      "key_features": [
        "Digital Certificate Issuance & Verification with tamper-proof certificates",
        "Automated Scholarship Disbursement via smart contracts",
        "School Fee Payment Tracking with automated reconciliation",
        "Integration with Educational Institutions via APIs/SDKs",
        "Student Loan Management through Smart Contracts",
        "Permanent Academic Records on-chain"
      ],
      "target_users": [
        "Educational institutions issuing certificates",
        "Students receiving credentials and making payments",
        "Employers verifying academic credentials",
        "Scholarship and loan providers"
      ],
      "technical_stack": {
        "blockchain": "Solana",
        "certificates": "NFTs with educational metadata",
        "payments": "Stablecoin disbursements",
        "integration": "APIs for Student Information Systems"
      }
    })
  },
  {
    title: "Non-Traditional Securities Market in Sierra Leone",
    slug: "non-traditional-securities-market-sierra-leone",
    description: "A mobile-first platform enabling the tokenisation and trading of non-traditional assets like agriculture, mining, and real estate. With mobile money integration, USSD support, and financial literacy programs in local languages, it democratises access to capital markets for Sierra Leoneans while fostering economic growth.",
    problem_solved: "Limited access to capital markets, lack of investment opportunities in non-traditional assets, and barriers to financial inclusion in Sierra Leone. Traditional investment platforms don't cater to local infrastructure and payment systems.",
    target_audience: "Sierra Leonean investors, farmers and agricultural businesses, mining companies, real estate developers, and individuals seeking alternative investment opportunities in local assets.",
    mvp_features: "Asset tokenization interface, mobile-first trading platform, mobile money integration (Orange Money/Afrimoney), basic asset verification system, and simple portfolio management.",
    difficulty: "Difficult",
    status: "approved",
    category: "DeFi",
    prd_content: JSON.stringify({
      "executive_summary": "Mobile-first platform for tokenizing and trading non-traditional assets in Sierra Leone, focusing on agriculture, mining, and real estate with local payment integration.",
      "problem_statement": "Sierra Leoneans face limited access to international investment opportunities, challenges with Leone to digital currency conversion, variable internet connectivity, and limited banking infrastructure.",
      "key_features": [
        "Asset Tokenization for agriculture, mining, and real estate",
        "Mobile Money Integration with Orange Money and Afrimoney",
        "USSD Support for basic phone users",
        "Financial Literacy Programs in local languages",
        "Local Asset Verification and Due Diligence"
      ],
      "target_users": [
        "Sierra Leonean retail investors",
        "Agricultural producers and cooperatives",
        "Mining companies and investors",
        "Real estate developers and investors"
      ],
      "technical_stack": {
        "platform": "Mobile-first web application",
        "payments": "Mobile money APIs",
        "assets": "Tokenized representations of physical assets",
        "accessibility": "USSD integration for feature phones"
      }
    })
  },
  {
    title: "Pension & Social Security Management",
    slug: "pension-social-security-management",
    description: "A blockchain-based platform designed to revolutionize the management of pension contributions and social security disbursements. Leveraging the Solana blockchain, this system aims to bring unprecedented transparency, efficiency, and security to these critical financial systems.",
    problem_solved: "Administrative inefficiency, payment delays and errors, lack of transparency, pension fraud, non-portable benefits, and multi-employer complexity. Current pension systems encounter significant inefficiencies and challenges in record-keeping and disbursement.",
    target_audience: "Individual contributors and beneficiaries, pension fund administrators, social security agencies, employers, and government regulators/auditors seeking transparent and efficient pension management.",
    mvp_features: "Mock employer contribution submission interface, basic employee contribution viewing interface, core Solana smart contract for contributions, simulated automated disbursement trigger, and basic disbursement monitor interface.",
    difficulty: "Difficult",
    status: "approved",
    category: "Government",
    prd_content: JSON.stringify({
      "executive_summary": "Blockchain-based platform for pension contributions and social security disbursements using Solana blockchain to bring transparency, efficiency, and security to financial systems.",
      "problem_statement": "Administrative inefficiency & cost, payment delays & errors, lack of transparency, pension fraud, non-portable benefits, and multi-employer complexity plague current pension and social security systems.",
      "key_features": [
        "Automated Pension Payments via smart contract disbursements",
        "Contribution Tracking with immutable transaction records",
        "Smart Contract-Based Benefits Management with rule encoding",
        "Integration with Government & Legacy Systems via APIs",
        "Multi-Employer & Portable Pension Management"
      ],
      "target_users": [
        "Individual contributors and beneficiaries",
        "Pension fund administrators and social security agencies",
        "Employers managing employee contributions",
        "Government regulators and auditors"
      ],
      "technical_stack": {
        "blockchain": "Solana",
        "smart_contracts": "Rust with Anchor framework",
        "identity": "Decentralized Identifiers for portable benefits",
        "integration": "APIs for government and legacy systems"
      }
    })
  },
  {
    title: "Sierra Leone Internet Capital Markets Platform",
    slug: "sierra-leone-internet-capital-markets-platform",
    description: "A mobile-first platform providing Sierra Leoneans with direct access to global internet-based capital markets. Built specifically for Sierra Leone's infrastructure and payment systems, it enables any Sierra Leonean with a mobile phone to participate in global digital markets.",
    problem_solved: "Limited access to international investment opportunities, challenges with Leone to digital currency conversion, variable internet connectivity, limited banking infrastructure outside major cities, and need for simple mobile-first solutions.",
    target_audience: "Sierra Leonean youth in urban areas, mobile money users nationwide, small business owners, university students, professional workers, rural residents with basic phones, and local investment groups.",
    mvp_features: "Sierra Leone-optimized registration, mobile money integration, lightweight app optimized for 2G/3G, global market access interface, educational content in Krio, and offline price alerts via SMS.",
    difficulty: "Intermediate",
    status: "approved",
    category: "Payments",
    prd_content: JSON.stringify({
      "executive_summary": "Mobile-first platform providing Sierra Leoneans direct access to global internet-based capital markets, optimized for local infrastructure and payment systems.",
      "problem_statement": "Sierra Leoneans face unique challenges in accessing global markets including limited access to international investment opportunities, challenges with Leone to digital currency conversion, and variable internet connectivity.",
      "key_features": [
        "Local Mobile Money Integration with Orange Money and Afrimoney",
        "Offline Capabilities for intermittent internet connectivity",
        "Leone-Based Trading for global markets",
        "USSD Support for non-smartphone users",
        "Local Language Support in Krio and other languages",
        "Educational Content and Community Features"
      ],
      "target_users": [
        "Sierra Leonean youth and urban residents",
        "Mobile money users nationwide",
        "Small business owners and professionals",
        "University students and rural residents"
      ],
      "technical_stack": {
        "platform": "Progressive Web App",
        "integration": "USSD and SMS gateway",
        "payments": "Mobile money APIs",
        "optimization": "Data saving mode and local cache"
      }
    })
  },
  {
    title: "Transportation Payment & Tracking System",
    slug: "transportation-payment-tracking-system",
    description: "A blockchain-based platform designed to enhance public transportation payments, logistics, and operational transparency. Leveraging the Solana blockchain, this system aims to streamline payment processes, improve fleet management, enable fair and automated revenue sharing among transport operators, and provide valuable data for route optimization.",
    problem_solved: "Cash handling and fraud, inefficient ticketing systems, opaque revenue sharing, lack of real-time operational insights, and limited pricing flexibility. Traditional ticket sales involve extensive cash handling and lack transparent revenue distribution.",
    target_audience: "Commuters and passengers, public transport operators, city/regional transportation authorities, and vehicle maintenance teams seeking efficient and transparent transportation payment systems.",
    mvp_features: "Mock operator ticket sales interface, basic passenger wallet and purchase flow, simulated validator for ticket scanning, and core Solana smart contract for ticketing with usage tracking.",
    difficulty: "Intermediate",
    status: "approved",
    category: "Payments",
    prd_content: JSON.stringify({
      "executive_summary": "Blockchain-based platform for public transportation payments, logistics, and operational transparency using Solana blockchain to streamline processes and enable automated revenue sharing.",
      "problem_statement": "Cash handling & fraud, inefficient ticketing systems, opaque revenue sharing, lack of real-time operational insights, and limited pricing flexibility plague current public transportation systems.",
      "key_features": [
        "Digital Ticketing System with tokenized tickets and seamless validation",
        "Fleet Management Integration with real-time vehicle tracking",
        "Automated Revenue Sharing via smart contract distribution",
        "Route Optimization with aggregated ridership data",
        "Integration with Existing Transport Networks via APIs"
      ],
      "target_users": [
        "Commuters and daily passengers",
        "Public transport operators and fleet managers",
        "City and regional transportation authorities",
        "Vehicle maintenance teams"
      ],
      "technical_stack": {
        "blockchain": "Solana",
        "tickets": "NFTs or custom tokens with metadata",
        "iot": "Vehicle tracking integration",
        "validation": "NFC/QR code scanning systems"
      }
    })
  }
];

export async function POST(request: NextRequest) {
  try {
    console.log('Starting to add ideas to Airtable...');
    
    const results = [];
    
    for (const idea of ideasToAdd) {
      try {
        console.log(`Adding idea: ${idea.title}`);
        
        const record = await base('ideas').create([{
           fields: {
              title: idea.title,
              slug: idea.slug,
              description: idea.description,
              problem_statement: idea.problem_solved,
              target_audience: idea.target_audience,
              mvp_features: idea.mvp_features,
              status: "submitted",
              prd_content: idea.prd_content
            }
         }]);
        
        results.push({
          success: true,
          title: idea.title,
          recordId: record[0].id
        });
        
        console.log(`Successfully added: ${idea.title} with ID: ${record[0].id}`);
      } catch (error) {
        console.error(`Error adding idea ${idea.title}:`, error);
        let errorMessage = 'Unknown error';
        if (error instanceof Error) {
          errorMessage = error.message;
        } else if (typeof error === 'string') {
          errorMessage = error;
        } else if (error && typeof error === 'object') {
          errorMessage = JSON.stringify(error);
        }
        results.push({
          success: false,
          title: idea.title,
          error: errorMessage
        });
      }
    }
    
    const successCount = results.filter(r => r.success).length;
    const failureCount = results.filter(r => !r.success).length;
    
    return NextResponse.json({
      message: `Processed ${ideasToAdd.length} ideas: ${successCount} successful, ${failureCount} failed`,
      results
    });
    
  } catch (error) {
    console.error('Error in add-ideas API:', error);
    return NextResponse.json(
      { 
        error: 'Failed to add ideas to Airtable',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}