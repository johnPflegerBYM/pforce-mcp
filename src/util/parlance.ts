export const Parlance = [
    {
        parlance:'Sales opportunity',
        sObjectType:'Opportunity',
        definedBy: {
            RecordType:'Sales',
            Type:'New Business'
        }
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
        additionalContext:'Status__c is used to determine where these are in the progress of being worked'
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
        parlance:'booster package opportunity',
        sObjectType:'Opportunity',
        definedBy: {
            RecordType:'Sales'
        },
        additionalContext:'These are opportunities that habe an opportunity line item with Booster in the name'
    }
]