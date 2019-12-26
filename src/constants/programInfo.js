import logo from "../images/logo_galvanize.png" // add school logo to images folder and import here

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = { // term details section
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APRRange36: '10.76 - 11.16%',
    APRRange60: '12.33 - 12.51%',
    interestOnly: [
        { // for multiple examples of interest only, add items to interestOnly array
            programName: 'the Software Engineering Immersive program',
            APR36: '10.94%',
            financeCharge36: '$2,527.38',
            IOPayment36: '$77.91',
            FullMonthlyPayment36: '$330.67',
            APR60: '12.41%',
            financeCharge60: '$4,326.13',
            IOPayment60: '$95.25',
            FullMonthlyPayment60: '$226.07',
            LoanExampleAmt: '$10,000',
            LoanExampleOFeeAmt: '$400',
            LoanExampleAmtPlusOFee: '$10,400',
            programLength: '6' // program length in months
        },
        { // for multiple examples of interest only, add items to interestOnly array
            programName: 'the Data Science Immersive, Remote Data Science Immersive, or Remote Software Engineering Immersive program',
            APR36: '11.16%',
            financeCharge36: '$2,293.64',
            IOPayment36: '$77.91',
            FullMonthlyPayment36: '$330.67',
            APR60: '12.51%',
            financeCharge60: '$4,040.39',
            IOPayment60: '$95.25',
            FullMonthlyPayment60: '$226.07',
            LoanExampleAmt: '$10,000',
            LoanExampleOFeeAmt: '$400',
            LoanExampleAmtPlusOFee: '$10,400',
            programLength: '3' // program length in months
        },
    ],
    immediateRepayment: [
        { // for multiple examples of immmediate repayment, add items to immediateRepayment array
            programName: 'PROGRAM NAME',
            APR36: 'XX.XX%',
            financeCharge36: '$X,XXX.XX',
            FullMonthlyPayment36: '$XXX.XX',
            APR60: 'XX.XX%',
            financeCharge60: '$X,XXX.XX',
            FullMonthlyPayment60: '$XXX.XX',
            LoanExampleAmt: '$10,000',
            LoanExampleOFeeAmt: '$400',
            LoanExampleAmtPlusOFee: '$10,400'
        }
    ]
}

export const faq = { // faq section
    costOfLiving: true, // true if at least one program has cost of living included
    costOfLivingPrograms: 'Software Engineering Immersive and Data Science Immersive programs', // leave as empty string is cost of living availability is the same across all programs
    multCostOfLivingPrograms: true, // true if costOfLivingPrograms string has more than one program
    interestOnly: true, // true if interest-only payments are an option
    immediateRepayment: false, // true if immediate repayment is an option
    multipleLoanLengths: true, // true if 36 and 60 month options are both available
    multipleLoanTypes: false, // true if both IR and IO are available
    multiPrograms: true, // only true if there are multiple programs
    onlinePrograms: true, // true if at least one program is remote/online
    schoolHQState: 'CA',
    origFee: 0.04,

    // interest payment FAQ info
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APR36: '10.94 - 11.16%',
    APR60: '12.41 - 12.51%',
    IOPayment36: '$77.91',
    IOPayment60: '$95.25',

    // max loan amounts by program for faq1
    loanRange: [
        {
            programName: "Galvanize's Software Engineering Immersive",
            maxAmount: "$19,500",
            col: true,
            colAmount: "$12,000"
        },
        {
            programName: "Galvanize's Data Science Immersive",
            maxAmount: "$15,980",
            col: true,
            colAmount: "$6,000"
        },
    ]
}

// ***** END TERMS AND FAQ INFO ***** 

// ***** BEGIN GENERAL SCHOOL INFO ***** 

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Galvanize"

export const schoolURL = 'https://www.galvanize.com/' // update with url of school's website

export const headline = "Learn to Code at Galvanize" // update headline as appropriate

export const leadContent = {
    header: "Your last step on the path toward changing your career",
    paragraph: `${schoolName} offers courses to provide students a foundation in either software engineering or data science. ${schoolName} partners with Skills Fund to offer tuition${faq.costOfLiving ? ' and cost of living' : ''} financing so more students like you can access their program.`
}

export const threeStepCardText = {
    step1: "",
    step2: {
        header: "select your program",
        text: "Choose between the Software Engineering Immersive, Remote Software Engineering Immserive, Data Science Immersive, and Remote Data Science Immersive programs."
    },
    step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`
}

export const netlifyFormName = 'galvanize_contact'

export const GATracking = 'UA-68312423-1'

export const hubspotFormId = "fd0a2a7f-84ed-4d9d-8e5c-dedb19fc548f" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_galvanize_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO ***** 


// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 10000
export const placeholder = '$10,000'
export const interestRates = {
    ir36: 8.99,
    ir60: 10.99
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [ // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
    {
        name: "Software Engineering Immersive",
        url: "https://my.skills.fund/application?lenderCode=SKGWD18",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 28500,
            loanTerm36: true,
            loanTerm60: true,
            '0': { // interest-only 
                k: 7, 
                apr36: 10.94, 
                apr60: 12.41
            },
            '1': null // immediate repayment
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: true, // true if there are multiple metros with different tuition amounts for the same program
        showLoanTypes: false, // true if both IR and IO are available
        locations: ["Austin", "Boulder", "Golden Triangle", "New York", "Phoenix", "Platte", "San Francisco", "Seattle"],
        metros: [ // list in same order as locations array above
          {
            location: "Austin",
            loanInfo: { // // match loanInfo to Program 1 above
              maxLoanAmt: 28500,
              loanTerm36: true,
              loanTerm60: true,
              '0': { 
                  k: 7, 
                  apr36: 10.94, 
                  apr60: 12.41
              },
              '1': null
            }
          },
          {
            location: "Boulder",
            loanInfo: {
                maxLoanAmt: 28500,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                  k: 7, 
                  apr36: 10.94, 
                  apr60: 12.41
                },
                '1': null
            }
          },
          {
            location: "Golden Triangle",
            loanInfo: {
                maxLoanAmt: 28500,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                  k: 7, 
                  apr36: 10.94, 
                  apr60: 12.41
                },
                '1': null
            },
          },
          {
            location: "New York",
            loanInfo: {
                maxLoanAmt: 31500,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                  k: 7, 
                  apr36: 10.94, 
                  apr60: 12.41
                },
                '1': null
            },
          },
          {
            location: "Phoenix",
            loanInfo: {
                maxLoanAmt: 28500,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                  k: 7, 
                  apr36: 10.94, 
                  apr60: 12.41
                },
                '1': null
            },
          },
          {
            location: "Platte",
            loanInfo: {
                maxLoanAmt: 28500,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                  k: 7, 
                  apr36: 10.94, 
                  apr60: 12.41
                },
                '1': null
            },
          },
          {
            location: "San Francisco",
            loanInfo: {
                maxLoanAmt: 31500,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                  k: 7, 
                  apr36: 10.94, 
                  apr60: 12.41
                },
                '1': null
            },
          },
          {
            location: "Seattle",
            loanInfo: {
                maxLoanAmt: 31500,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                  k: 7, 
                  apr36: 10.94, 
                  apr60: 12.41
                },
                '1': null
            },
          },
        ]
    },
    {
        name: "Data Science Immersive",
        url: "https://my.skills.fund/application?lenderCode=SKGDS18",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 20480,
            loanTerm36: true,
            loanTerm60: true,
            '0': { 
                k: 5, 
                apr36: 11.16, 
                apr60: 12.51
            },
            '1': null
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: true,
        showLoanTypes: false,
        locations: ["Austin", "Boulder", "Golden Triangle", "New York", "Phoenix", "Platte", "San Francisco", "Seattle"],
        metros: [
            {
              location: "Austin",
              loanInfo: { // match loanInfo to Program 2 loanInfo above
                maxLoanAmt: 20480,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                },
                '1': null
              }
            },
            {
              location: "Boulder",
              loanInfo: {
                  maxLoanAmt: 20480,
                  loanTerm36: true,
                  loanTerm60: true,
                  '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                  },
                  '1': null
              }
            },
            {
              location: "Golden Triangle",
              loanInfo: {
                  maxLoanAmt: 20480,
                  loanTerm36: true,
                  loanTerm60: true,
                  '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                  },
                  '1': null
              }
            },
            {
              location: "New York",
              loanInfo: {
                  maxLoanAmt: 21980,
                  loanTerm36: true,
                  loanTerm60: true,
                  '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                  },
                  '1': null
              }
            },
            {
              location: "Phoenix",
              loanInfo: {
                  maxLoanAmt: 20480,
                  loanTerm36: true,
                  loanTerm60: true,
                  '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                  },
                  '1': null
              }
            },
            {
              location: "Platte",
              loanInfo: {
                  maxLoanAmt: 20480,
                  loanTerm36: true,
                  loanTerm60: true,
                  '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                  },
                  '1': null
              }
            },
            {
              location: "San Francisco",
              loanInfo: {
                  maxLoanAmt: 21980,
                  loanTerm36: true,
                  loanTerm60: true,
                  '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                  },
                  '1': null
              }
            },
            {
              location: "Seattle",
              loanInfo: {
                  maxLoanAmt: 21980,
                  loanTerm36: true,
                  loanTerm60: true,
                  '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                  },
                  '1': null
              }
            },
          ]
    },
    {
        name: "Remote Software Engineering Immersive",
        url: "https://my.skills.fund/application?lenderCode=SKGALRE19",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 23480,
            loanTerm36: true,
            loanTerm60: true,
            '0': { 
                k: 5, 
                apr36: 11.16, 
                apr60: 12.51
            },
            '1': null
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 23480,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                },
                '1': null
              }
            },
            {
              location: "Metro B",
              loanInfo: {
                  maxLoanAmt: 15545,
                  loanTerm36: true,
                  loanTerm60: true,
                  '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                  },
                  '1': {
                    apr36: 11.25, 
                    apr60: 12.55
                }
              }
            },
            {
              location: "Metro C",
              loanInfo: {
                  maxLoanAmt: 28500,
                  loanTerm36: true,
                  loanTerm60: true,
                  '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                  },
                  '1': {
                    apr36: 11.25, 
                    apr60: 12.55
                }
                },
              }
          ]
    },
    {
        name: "Remote Data Science Immersive",
        url: "https://my.skills.fund/application?lenderCode=SKGALRE19",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 15980,
            loanTerm36: true,
            loanTerm60: true,
            '0': { 
                k: 5, 
                apr36: 11.16, 
                apr60: 12.51
            },
            '1': null
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 15980,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                },
                '1': null
              }
            },
            {
              location: "Metro B",
              loanInfo: {
                  maxLoanAmt: 15545,
                  loanTerm36: true,
                  loanTerm60: true,
                  '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                  },
                  '1': {
                    apr36: 11.25, 
                    apr60: 12.55
                }
              }
            },
            {
              location: "Metro C",
              loanInfo: {
                  maxLoanAmt: 20545,
                  loanTerm36: true,
                  loanTerm60: true,
                  '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                  },
                  '1': {
                    apr36: 11.25, 
                    apr60: 12.55
                }
                },
              }
          ]
    },
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText = "Choose the loan amount that works best for you. Borrow up to your metro's max loan amount for tuition & cost of living (see table below) for Galvanize's Software Engineering Immersive or Data Science Immersive program, or up to $15,980 for the Remote Software Engineering Immersive or Remote Data Science Immersive tuition."

export const paymentTable = {
    headers: ["Metro", "Tuition", "Cost of Living"],
    data: [
        {
            name: "#1: San Francisco, New York City, Seattle",
            tuition: "$19,500",
            col: "$12,000"
        },
        {
            name: "#2: Austin, Boulder, Golden Triangle, Platte, Phoenix",
            tuition: "$19,500",
            col: "$9,000"
        }
    ],
    data2: [
        {
            name: "#1: San Francisco, New York City, Seattle",
            tuition: "$15,980",
            col: "$6,000"
        },
        {
            name: "#2: Austin, Boulder, Golden Triangle, Platte, Phoenix",
            tuition: "$15,980",
            col: "$4,500"
        }
    ],
    show: true
}

// ***** END LOAN CALC TEXT INFO *****


// ***** Snippets for Netlify ***** 

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

