import { DisplayText, FormLayout, Heading, Stack, Subheading, TextField } from "@shopify/polaris";
import { useCallback } from "react";
import { useState } from "react";

export function SubscriberConfiguration() {
    const [subscriberId, setSubscriberId] = useState('');
    const handleSubscriberId = useCallback(value => setSubscriberId(value), []);
    const [industryDomain, setIndustryDomain] = useState('');
    const handleIndustryDomain = useCallback(value => setIndustryDomain(value), []);
    return <FormLayout>

        <Stack distribution="fill" alignment="center">
            <DisplayText size="small" >Subscriber ID</DisplayText>
            <TextField
                label="Subscriber ID"
                labelHidden
                value={subscriberId}
                align="right"
                maxLength={20}
                onChange={handleSubscriberId}
                autoComplete="off">
            </TextField>
        </Stack>

        <Stack distribution="fill" alignment="center">
            <DisplayText size="small">Industry Domain</DisplayText>
            <TextField
                label="Industry domain"
                labelHidden
                value={industryDomain}
                align="right"
                maxLength={20}
                onChange={handleIndustryDomain}
                autoComplete="off">
            </TextField>
        </Stack>
    </FormLayout>
}
