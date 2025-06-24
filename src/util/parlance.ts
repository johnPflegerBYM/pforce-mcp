export const Parlance = [
    {
        parlance:'Sales opportunity',
        sObjectType:'Opportunity',
        definedBy: {
            RecordType:'Sales',
            Type:'New Business'
        },
        additionalContext: [
            'sales opportunities are new business opportunities and are generally defined by their line items',
        ]
    },
    {
        parlance:'Automated Account Deduction',
        sObjectType:'Opportunity',
        definedBy: {
            RecordType:'Cancellation',
            Name:'Automated account deduction'
        },
        additionalContext: 'These are automated opportunities that get created and closed won'
    },
    {
        parlance:'Accounts',
        sObjectType:'Account',
        definedBy: {
            RecordType:'Single Restaurant',
        },
        additionalContext: [
            'accounts to our business are restaurants',
            'BM_ID__c is the account number field for an account',
            'accounts all have a unique BM_ID__c identifier field which is a 6 digit number. At times you may be asked to locate a record by their BM_ID__c. '
        ]
    },
    {
        parlance:'onboarding cases',
        sObjectType: 'Case',
        definedBy: {
            Type: 'Onboarding',
            RecordType: 'Online Ordering Onboarding'
        }
    },
    {
        parlance: 'slips or website slips',
        sObjectType:'Issue__c',
        definedBy: {
            Type__c:'GBP Website Slip'
        },
        additionalContext:[
             'Status__c is used to determine where these are in the progress of being worked'
        ]
    },
    {
        parlance:'upsell opportunity',
        sObjectType:'Opportunity',
        definedBy: {
            RecordType:'Sales',
            Type:'Existing Business'
        }
    },
    {
        parlance: 'china sales team',
        sObjectType:'User',
        definedBy: {
            Profile:'AE (China)'
        }
    },
    {
        parlance: 'us sales team',
        sObjectType:'User',
        definedBy: {
            Profile:'AE (US)'
        }
    },
    {
        parlance: 'philippines sales team',
        sObjectType:'User',
        definedBy: {
            Profile:'AE (Philippines)'
        }
    },
    {
        parlance: 'ready queue or ready leads',
        sObjectType:'Lead',
        definedBy: {
            Position__c:'Ready'
        }
    },
    {
        parlance: 'assigned leads',
        sObjectType: 'Lead',
        definedBy: {
            Position__c:'Live'
        },
        additionalContext: [
            'Assigned leads are leads in a sales agent\'s name where Position__c = "Live"'
        ]
    },
    {
        parlance: 'allocated leads',
        sObjectType: 'Lead',
        definedBy: {
            Position__c:'Live',
            isConverted:false
        },
        additionalContext: [
            'Assigned leads are leads in a sales agent\'s name where Position__c = "Live"'
        ]
    },
    {
        parlance: 'inserted restaurants',
        sObjectType: 'Account',
        definedBy: {
            Website_Inserted__c:true
        }
    },
    {
        parlance: 'resolved slips',
        sObjectType: 'Issue__c',
        definedBy: {
            Type__c:'GBP Website Slip',
            Status__c:'Closed Resolved'
        },
        additionalContext: [
            'slips can be Closed Resolved when they are successfully completed or Closed UnResolved if we are closing the issue without a resolution'
        ]
    },
    {
        parlance: 'talk time',
        sObjectType: 'Task',
        definedBy: {
            Type:'Call'
        },
        additionalContext: [
            'Talk Time is the sum of the total call durations for a cohort during a period of time.',
            'talk time should use the field: CallDurationInSeconds',
            'talk time should be converted in minutes'
        ]
    },
    {
        parlance: 'creation rate or sales creation rate',
        additionalContext: [
            'This requires two queries and some math.',
            'the soql query for getting leads starts like: "SELECT COUNT_DISTINCT(WhoId) FROM Task WHERE Type="Call"...',
            'the formula is number of converted accounts / number of unique leads called in a given time period',
            'converted accounts soql starts like: "SELECT COUNT_DISTINCT(ConvertedAccountId) ConvertedAccounts FROM Lead WHERE IsConverted = true"'
        ]
    },
    {
        parlance: 'link to a record',
        additionalContext: [
            'when creating a link to a record use the following as the base url: "https://beyondmenu.lightning.force.com/"'
        ]
    },
    {
        parlance:'booster package opportunity',
        sObjectType:'Opportunity',
        definedBy: {
            RecordType:'Sales'
        },
        additionalContext:[
            'These are opportunities that have an opportunity line item with Booster in the name'
        ]
    },
    {
        parlance: 'success team',
        sObjectType:'User',
        definedBy: {
            Profile:'Success'
        }
    },
    {
        parlance:'asian leads',
        sObjectType:'Lead',
        definedBy: {
            Asian_Cuisine_Indicator__c:2
        },
        additionalContext: [
            'the Asian_Cuisine_Indicator__c field is a number 1 or 2. the value of 2 indicates the the lead is an asian restaurant'
        ]
    }
]