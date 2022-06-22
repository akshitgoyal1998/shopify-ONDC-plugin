import { Page, Layout, Card, Button } from "@shopify/polaris";
import { SubscriberConfiguration } from "./SubscriberConfiguration";

export function EmptyStatePage() {
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Card title="Subscriber Configuration" sectioned>
          <SubscriberConfiguration/>
          </Card>
          <Card title="Security and trust" sectioned>

          </Card>
          <Card title="Business configuation" sectioned>

          </Card>
          <Card title="Order cancellation configuration" sectioned>

          </Card>
          <Card title="API configuration" sectioned>

          </Card>
          <Card title="Payment Configuration" sectioned>

          </Card>
          <Card title="Fulfillment Configuration" sectioned>

          </Card>
          <Card title="Provider Configuration" sectioned>

          </Card>

          <Button size="large" primary >Update</Button>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
