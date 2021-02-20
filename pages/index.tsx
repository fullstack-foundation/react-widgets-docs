import { Button, Padding, Margin } from "@fullstack-foundation/react-widgets";

const IndexPage = () => (
  <div>
    <div>
      <Padding padding={{ vertical: 10, horizontal: 20 }}>
        <Button>Button with Padding</Button>
      </Padding>
    </div>
    <div>
      <Margin margin={{ top: 30, right: 0, bottom: 0, left: 0 }}>
        <Button>Button with Margin</Button>
      </Margin>
    </div>
  </div>
);

export default IndexPage;
