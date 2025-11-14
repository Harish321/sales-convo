export const conversationsData = {
  preSales: [
    {
      id: "PS001",
      customerName: "Acme Corporation",
      contactPerson: "John Smith",
      email: "john.smith@acme.com",
      phone: "+1 (555) 123-4567",
      status: "active",
      priority: "high",
      product: "Enterprise SaaS Platform",
      expectedValue: "$50,000",
      stage: "Proposal Sent",
      lastContact: "2024-11-12",
      nextFollowUp: "2024-11-15",
      notes: "Interested in annual subscription. Requested custom integration options.",
      timeline: {
        totalDuration: 25,
        totalActivities: 8,
        peopleInvolved: 4,
        phases: [
          {
            month: "Oct",
            stage: "Lead → Demo",
            activities: 3,
            type: "presales",
            startDate: "2024-10-15",
            endDate: "2024-10-31"
          },
          {
            month: "Nov",
            stage: "Proposal → Negotiation",
            activities: 5,
            type: "sales",
            startDate: "2024-11-01",
            endDate: "2024-11-12"
          }
        ]
      },
      messages: [
        {
          id: 1,
          sender: "John Smith",
          timestamp: "2024-11-10 10:30 AM",
          message: "We're looking for a robust SaaS solution for our team of 150 users."
        },
        {
          id: 2,
          sender: "Sales Rep",
          timestamp: "2024-11-10 11:45 AM",
          message: "Great! Our Enterprise plan would be perfect. Let me send you a detailed proposal."
        },
        {
          id: 3,
          sender: "John Smith",
          timestamp: "2024-11-12 02:15 PM",
          message: "Received the proposal. Can we schedule a demo for next week?"
        }
      ]
    },
    {
      id: "PS002",
      customerName: "TechStart Inc",
      contactPerson: "Sarah Johnson",
      email: "sarah.j@techstart.io",
      phone: "+1 (555) 234-5678",
      status: "active",
      priority: "medium",
      product: "Cloud Analytics Suite",
      expectedValue: "$25,000",
      stage: "Demo Scheduled",
      lastContact: "2024-11-13",
      nextFollowUp: "2024-11-16",
      notes: "Startup looking to scale. Budget conscious but interested in annual plan.",
      timeline: {
        totalDuration: 15,
        totalActivities: 5,
        peopleInvolved: 3,
        phases: [
          {
            month: "Nov",
            stage: "Lead → Demo",
            activities: 5,
            type: "presales",
            startDate: "2024-11-08",
            endDate: "2024-11-13"
          }
        ]
      },
      messages: [
        {
          id: 1,
          sender: "Sarah Johnson",
          timestamp: "2024-11-08 09:15 AM",
          message: "We need analytics capabilities for our growing user base."
        },
        {
          id: 2,
          sender: "Sales Rep",
          timestamp: "2024-11-08 10:30 AM",
          message: "Our Analytics Suite has helped many startups scale efficiently. When would be a good time for a demo?"
        },
        {
          id: 3,
          sender: "Sarah Johnson",
          timestamp: "2024-11-13 03:45 PM",
          message: "How about Thursday at 2 PM? Our tech lead will join too."
        }
      ]
    },
    {
      id: "PS003",
      customerName: "Global Retail Group",
      contactPerson: "Michael Chen",
      email: "m.chen@globalretail.com",
      phone: "+1 (555) 345-6789",
      status: "active",
      priority: "high",
      product: "E-commerce Integration Platform",
      expectedValue: "$100,000",
      stage: "Negotiation",
      lastContact: "2024-11-14",
      nextFollowUp: "2024-11-17",
      notes: "Large enterprise deal. Discussing multi-year contract with volume discount.",
      timeline: {
        totalDuration: 42,
        totalActivities: 12,
        peopleInvolved: 6,
        phases: [
          {
            month: "Sep",
            stage: "Lead → Qualification",
            activities: 4,
            type: "presales",
            startDate: "2024-09-20",
            endDate: "2024-09-30"
          },
          {
            month: "Oct",
            stage: "Demo → Proposal",
            activities: 5,
            type: "presales",
            startDate: "2024-10-01",
            endDate: "2024-10-31"
          },
          {
            month: "Nov",
            stage: "Negotiation",
            activities: 3,
            type: "sales",
            startDate: "2024-11-01",
            endDate: "2024-11-14"
          }
        ]
      },
      messages: [
        {
          id: 1,
          sender: "Michael Chen",
          timestamp: "2024-11-05 11:00 AM",
          message: "We're expanding our e-commerce operations across 5 regions."
        },
        {
          id: 2,
          sender: "Sales Rep",
          timestamp: "2024-11-05 02:30 PM",
          message: "Perfect timing! Our platform supports multi-region deployments seamlessly."
        },
        {
          id: 3,
          sender: "Michael Chen",
          timestamp: "2024-11-14 10:20 AM",
          message: "The demo was impressive. Can we discuss pricing for a 3-year contract?"
        }
      ]
    },
    {
      id: "PS004",
      customerName: "HealthCare Solutions",
      contactPerson: "Dr. Emily White",
      email: "e.white@healthcaresol.com",
      phone: "+1 (555) 456-7890",
      status: "pending",
      priority: "medium",
      product: "Patient Management System",
      expectedValue: "$35,000",
      stage: "Initial Contact",
      lastContact: "2024-11-11",
      nextFollowUp: "2024-11-18",
      notes: "Healthcare provider interested in HIPAA-compliant solution.",
      timeline: {
        totalDuration: 5,
        totalActivities: 2,
        peopleInvolved: 2,
        phases: [
          {
            month: "Nov",
            stage: "Initial Contact",
            activities: 2,
            type: "presales",
            startDate: "2024-11-11",
            endDate: "2024-11-11"
          }
        ]
      },
      messages: [
        {
          id: 1,
          sender: "Dr. Emily White",
          timestamp: "2024-11-11 08:45 AM",
          message: "Looking for a HIPAA-compliant patient management system for our clinic network."
        },
        {
          id: 2,
          sender: "Sales Rep",
          timestamp: "2024-11-11 01:20 PM",
          message: "Our system is fully HIPAA compliant and trusted by healthcare providers nationwide. Let me send you more information."
        }
      ]
    },
    {
      id: "PS005",
      customerName: "EduTech Academy",
      contactPerson: "Robert Martinez",
      email: "r.martinez@edutech.edu",
      phone: "+1 (555) 567-8901",
      status: "active",
      priority: "low",
      product: "Learning Management System",
      expectedValue: "$15,000",
      stage: "Qualification",
      lastContact: "2024-11-09",
      nextFollowUp: "2024-11-20",
      notes: "Educational institution exploring options. Long sales cycle expected.",
      timeline: {
        totalDuration: 8,
        totalActivities: 3,
        peopleInvolved: 2,
        phases: [
          {
            month: "Nov",
            stage: "Lead → Qualification",
            activities: 3,
            type: "presales",
            startDate: "2024-11-09",
            endDate: "2024-11-09"
          }
        ]
      },
      messages: [
        {
          id: 1,
          sender: "Robert Martinez",
          timestamp: "2024-11-09 04:00 PM",
          message: "We're evaluating LMS platforms for our 500+ students."
        },
        {
          id: 2,
          sender: "Sales Rep",
          timestamp: "2024-11-09 05:15 PM",
          message: "We have special education pricing. Would you like to see our academic success stories?"
        }
      ]
    }
  ],
  postSales: [
    {
      id: "PO001",
      customerName: "Alpha Technologies",
      contactPerson: "David Brown",
      email: "david.b@alphatech.com",
      phone: "+1 (555) 678-9012",
      status: "active",
      priority: "high",
      product: "Enterprise SaaS Platform",
      contractValue: "$75,000",
      accountHealth: "healthy",
      renewalDate: "2025-03-15",
      lastContact: "2024-11-13",
      nextCheckIn: "2024-11-20",
      notes: "Happy customer. Exploring additional modules for Q1 2025.",
      timeline: {
        totalDuration: 112,
        totalActivities: 23,
        peopleInvolved: 8,
        finalDealSize: "$115K ARR",
        phases: [
          {
            month: "Oct",
            monthYear: "October 2024",
            stage: "Lead → Demo",
            activities: 6,
            type: "presales",
            startDate: "2024-10-01",
            endDate: "2024-10-31",
            dealValue: "$125,000",
            probability: "40%",
            keyMilestone: "Product Demo Completed",
            owner: "John Smith",
            channels: ["Email", "Call", "Video"],
            activityDetails: [
              {
                date: "Oct 1",
                title: "Initial Inquiry",
                description: "Lead submitted enterprise tier form",
                type: "email"
              },
              {
                date: "Oct 3",
                title: "Qualification Call",
                description: "BDR confirmed BANT, 3 decision makers identified",
                type: "call"
              },
              {
                date: "Oct 5",
                title: "Discovery Meeting",
                description: "AE met with stakeholders, mapped requirements",
                type: "meeting"
              },
              {
                date: "Oct 10",
                title: "Product Demo",
                description: "SE demonstrated features, API integration focus",
                type: "demo"
              },
              {
                date: "Oct 12",
                title: "Technical Q&A",
                description: "Security and compliance validation",
                type: "call"
              },
              {
                date: "Oct 18",
                title: "Follow-up Email",
                description: "Sent additional documentation and case studies",
                type: "email"
              }
            ]
          },
          {
            month: "Nov",
            monthYear: "November 2024",
            stage: "Proposal → Closed",
            activities: 5,
            type: "closed",
            startDate: "2024-11-01",
            endDate: "2024-11-30",
            dealValue: "$115,000",
            probability: "90%",
            keyMilestone: "Contract Signed",
            owner: "John Smith",
            channels: ["Email", "Call", "Video"],
            activityDetails: [
              {
                date: "Nov 2",
                title: "Proposal Sent",
                description: "Custom pricing and implementation plan delivered",
                type: "email"
              },
              {
                date: "Nov 8",
                title: "Pricing Discussion",
                description: "Negotiated terms, discussed payment schedule",
                type: "call"
              },
              {
                date: "Nov 15",
                title: "Executive Review",
                description: "Presented to C-suite, addressed final concerns",
                type: "meeting"
              },
              {
                date: "Nov 22",
                title: "Legal Review",
                description: "Contract review and MSA negotiation",
                type: "call"
              },
              {
                date: "Nov 28",
                title: "Contract Signed",
                description: "Final agreement executed, deal closed",
                type: "email"
              }
            ]
          },
          {
            month: "Dec",
            monthYear: "December 2024",
            stage: "Onboarding → Active",
            activities: 8,
            type: "onboarding",
            startDate: "2024-12-01",
            endDate: "2024-12-31",
            dealValue: "$115,000",
            keyMilestone: "Go-Live Completed",
            owner: "Sarah Johnson",
            channels: ["Email", "Call", "Video"],
            activityDetails: [
              {
                date: "Dec 2",
                title: "Kickoff Meeting",
                description: "Introduced implementation team, reviewed timeline",
                type: "meeting"
              },
              {
                date: "Dec 5",
                title: "Data Migration",
                description: "Imported historical data and configurations",
                type: "email"
              },
              {
                date: "Dec 9",
                title: "Admin Training",
                description: "Trained system administrators on platform setup",
                type: "demo"
              },
              {
                date: "Dec 12",
                title: "User Training Session 1",
                description: "Basic features training for 20 end users",
                type: "demo"
              },
              {
                date: "Dec 16",
                title: "User Training Session 2",
                description: "Advanced features and workflows",
                type: "demo"
              },
              {
                date: "Dec 19",
                title: "Integration Setup",
                description: "Configured API connections to existing systems",
                type: "call"
              },
              {
                date: "Dec 23",
                title: "UAT Completion",
                description: "User acceptance testing signed off",
                type: "email"
              },
              {
                date: "Dec 30",
                title: "Go-Live",
                description: "Platform launched to all users successfully",
                type: "meeting"
              }
            ]
          },
          {
            month: "Jan",
            monthYear: "January 2025",
            stage: "Active Customer",
            activities: 4,
            type: "active",
            startDate: "2025-01-01",
            endDate: "2025-01-20",
            dealValue: "$115,000",
            keyMilestone: "Healthy Account Status",
            owner: "Sarah Johnson",
            channels: ["Email", "Call"],
            activityDetails: [
              {
                date: "Jan 5",
                title: "Post Go-Live Check-in",
                description: "Reviewed initial adoption metrics, addressed questions",
                type: "call"
              },
              {
                date: "Jan 10",
                title: "Feature Adoption Review",
                description: "Analyzed usage patterns, recommended best practices",
                type: "meeting"
              },
              {
                date: "Jan 15",
                title: "Expansion Discussion",
                description: "Discussed additional modules and advanced features",
                type: "call"
              },
              {
                date: "Jan 20",
                title: "QBR Scheduled",
                description: "Scheduled quarterly business review for February",
                type: "email"
              }
            ]
          }
        ]
      },
      tickets: [
        {
          id: "T001",
          type: "Feature Request",
          status: "In Progress",
          description: "Custom reporting dashboard"
        },
        {
          id: "T002",
          type: "Support",
          status: "Resolved",
          description: "API integration assistance"
        }
      ],
      messages: [
        {
          id: 1,
          sender: "David Brown",
          timestamp: "2024-11-10 09:30 AM",
          message: "The platform is working great! We'd like to explore the advanced analytics module."
        },
        {
          id: 2,
          sender: "Account Manager",
          timestamp: "2024-11-10 11:15 AM",
          message: "Excellent! Let me schedule a session to walk you through the advanced features."
        },
        {
          id: 3,
          sender: "David Brown",
          timestamp: "2024-11-13 03:00 PM",
          message: "Training session was very helpful. Ready to proceed with the upgrade."
        }
      ]
    },
    {
      id: "PO002",
      customerName: "Innovate Solutions",
      contactPerson: "Lisa Anderson",
      email: "l.anderson@innovatesol.com",
      phone: "+1 (555) 789-0123",
      status: "at-risk",
      priority: "high",
      product: "Cloud Analytics Suite",
      contractValue: "$40,000",
      accountHealth: "at-risk",
      renewalDate: "2025-01-20",
      lastContact: "2024-11-14",
      nextCheckIn: "2024-11-15",
      notes: "Experiencing performance issues. Need immediate attention to prevent churn.",
      timeline: {
        totalDuration: 95,
        totalActivities: 18,
        peopleInvolved: 5,
        finalDealSize: "$40K ARR",
        phases: [
          {
            month: "Jul",
            stage: "Lead → Demo",
            activities: 5,
            type: "presales",
            startDate: "2024-07-15",
            endDate: "2024-07-31"
          },
          {
            month: "Aug",
            stage: "Proposal → Closed",
            activities: 4,
            type: "closed",
            startDate: "2024-08-01",
            endDate: "2024-08-20"
          },
          {
            month: "Sep",
            stage: "Onboarding → Active",
            activities: 6,
            type: "onboarding",
            startDate: "2024-09-01",
            endDate: "2024-09-30"
          },
          {
            month: "Oct-Nov",
            stage: "At Risk",
            activities: 3,
            type: "active",
            startDate: "2024-10-01",
            endDate: "2024-11-14"
          }
        ]
      },
      tickets: [
        {
          id: "T003",
          type: "Bug",
          status: "High Priority",
          description: "Dashboard loading slowly"
        },
        {
          id: "T004",
          type: "Support",
          status: "Open",
          description: "Data export timing out"
        }
      ],
      messages: [
        {
          id: 1,
          sender: "Lisa Anderson",
          timestamp: "2024-11-12 02:45 PM",
          message: "We're experiencing significant performance issues with the dashboard. This is impacting our operations."
        },
        {
          id: 2,
          sender: "Account Manager",
          timestamp: "2024-11-12 03:30 PM",
          message: "I'm escalating this to our technical team immediately. We'll have someone look at it today."
        },
        {
          id: 3,
          sender: "Lisa Anderson",
          timestamp: "2024-11-14 10:00 AM",
          message: "Still waiting for resolution. Can we get an update?"
        },
        {
          id: 4,
          sender: "Account Manager",
          timestamp: "2024-11-14 10:30 AM",
          message: "Our engineering team identified the issue and is implementing a fix. ETA 2 hours."
        }
      ]
    },
    {
      id: "PO003",
      customerName: "Prime Manufacturing",
      contactPerson: "James Wilson",
      email: "j.wilson@primemfg.com",
      phone: "+1 (555) 890-1234",
      status: "active",
      priority: "medium",
      product: "Supply Chain Management",
      contractValue: "$60,000",
      accountHealth: "healthy",
      renewalDate: "2025-06-30",
      lastContact: "2024-11-11",
      nextCheckIn: "2024-11-25",
      notes: "Stable account. Regular quarterly business reviews scheduled.",
      timeline: {
        totalDuration: 150,
        totalActivities: 20,
        peopleInvolved: 7,
        finalDealSize: "$60K ARR",
        phases: [
          {
            month: "May",
            stage: "Lead → Qualification",
            activities: 5,
            type: "presales",
            startDate: "2024-05-01",
            endDate: "2024-05-31"
          },
          {
            month: "Jun",
            stage: "Demo → Closed",
            activities: 6,
            type: "closed",
            startDate: "2024-06-01",
            endDate: "2024-06-30"
          },
          {
            month: "Jul-Aug",
            stage: "Onboarding",
            activities: 7,
            type: "onboarding",
            startDate: "2024-07-01",
            endDate: "2024-08-15"
          },
          {
            month: "Sep-Nov",
            stage: "Active Customer",
            activities: 2,
            type: "active",
            startDate: "2024-09-01",
            endDate: "2024-11-11"
          }
        ]
      },
      tickets: [
        {
          id: "T005",
          type: "Training",
          status: "Completed",
          description: "New user onboarding"
        }
      ],
      messages: [
        {
          id: 1,
          sender: "James Wilson",
          timestamp: "2024-11-11 11:20 AM",
          message: "Can we schedule training for 5 new team members?"
        },
        {
          id: 2,
          sender: "Account Manager",
          timestamp: "2024-11-11 02:45 PM",
          message: "Absolutely! I'll coordinate with our training team. How does next Tuesday work?"
        }
      ]
    },
    {
      id: "PO004",
      customerName: "Digital Marketing Pro",
      contactPerson: "Amanda Lee",
      email: "a.lee@digitalmarketingpro.com",
      phone: "+1 (555) 901-2345",
      status: "active",
      priority: "medium",
      product: "Marketing Automation Platform",
      contractValue: "$30,000",
      accountHealth: "healthy",
      renewalDate: "2025-04-10",
      lastContact: "2024-11-08",
      nextCheckIn: "2024-11-22",
      notes: "Power user. Frequently provides valuable product feedback.",
      timeline: {
        totalDuration: 85,
        totalActivities: 16,
        peopleInvolved: 4,
        finalDealSize: "$30K ARR",
        phases: [
          {
            month: "Jul",
            stage: "Lead → Demo",
            activities: 4,
            type: "presales",
            startDate: "2024-07-20",
            endDate: "2024-07-31"
          },
          {
            month: "Aug",
            stage: "Proposal → Closed",
            activities: 5,
            type: "closed",
            startDate: "2024-08-01",
            endDate: "2024-08-25"
          },
          {
            month: "Sep",
            stage: "Onboarding → Active",
            activities: 5,
            type: "onboarding",
            startDate: "2024-09-01",
            endDate: "2024-09-20"
          },
          {
            month: "Oct-Nov",
            stage: "Active Customer",
            activities: 2,
            type: "active",
            startDate: "2024-10-01",
            endDate: "2024-11-08"
          }
        ]
      },
      tickets: [],
      messages: [
        {
          id: 1,
          sender: "Amanda Lee",
          timestamp: "2024-11-08 01:30 PM",
          message: "Love the new email templates feature! Any plans for SMS integration?"
        },
        {
          id: 2,
          sender: "Account Manager",
          timestamp: "2024-11-08 03:00 PM",
          message: "Great to hear! SMS integration is on our Q1 2025 roadmap. I'll keep you posted."
        }
      ]
    },
    {
      id: "PO005",
      customerName: "Finance Hub Inc",
      contactPerson: "Richard Taylor",
      email: "r.taylor@financehub.com",
      phone: "+1 (555) 012-3456",
      status: "active",
      priority: "low",
      product: "Financial Analytics Tool",
      contractValue: "$20,000",
      accountHealth: "stable",
      renewalDate: "2025-08-15",
      lastContact: "2024-11-05",
      nextCheckIn: "2024-12-01",
      notes: "Low-touch account. Minimal support requests. Renewal likely.",
      timeline: {
        totalDuration: 120,
        totalActivities: 15,
        peopleInvolved: 3,
        finalDealSize: "$20K ARR",
        phases: [
          {
            month: "Jun",
            stage: "Lead → Demo",
            activities: 4,
            type: "presales",
            startDate: "2024-06-10",
            endDate: "2024-06-30"
          },
          {
            month: "Jul",
            stage: "Proposal → Closed",
            activities: 4,
            type: "closed",
            startDate: "2024-07-01",
            endDate: "2024-07-20"
          },
          {
            month: "Aug",
            stage: "Onboarding → Active",
            activities: 5,
            type: "onboarding",
            startDate: "2024-08-01",
            endDate: "2024-08-25"
          },
          {
            month: "Sep-Nov",
            stage: "Active Customer",
            activities: 2,
            type: "active",
            startDate: "2024-09-01",
            endDate: "2024-11-05"
          }
        ]
      },
      tickets: [],
      messages: [
        {
          id: 1,
          sender: "Richard Taylor",
          timestamp: "2024-11-05 09:00 AM",
          message: "Everything is running smoothly. Great product!"
        },
        {
          id: 2,
          sender: "Account Manager",
          timestamp: "2024-11-05 10:30 AM",
          message: "Wonderful to hear! Don't hesitate to reach out if you need anything."
        }
      ]
    }
  ]
};
