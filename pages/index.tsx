import { Text, Page } from "@vercel/examples-ui";
import { Chat } from "../components/Chat";

function Home() {
  return (
    <Page className="flex flex-col">
      <section className="flex flex-col gap-3 px-2">
        <Text variant="h2">TB Companion</Text>
        <div className="lg:w-2/3 grow">
          <Chat />
        </div>
      </section>
    </Page>
  );
}

export default Home;
