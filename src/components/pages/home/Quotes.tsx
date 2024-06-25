import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const quotes = [
  {
    name: "Anonymous",
    quote: "Thank you for all that you do to take care of people in the city.",
  },
  {
    name: "Anonymous",
    quote: "Love Take 10, thanks for all the positive mahi.",
  },
  {
    name: "Anonymous",
    quote:
      "These guys offer such a valuable service, having an opportunity to stop and rest is a very important mission.",
  },
  {
    name: "Anonymous",
    quote:
      "I feel like they truly care about people on the street, making sure they are getting home safely.",
  },
];

const Card = ({ name, quote }: { name: string; quote: string }) => {
  return (
    <figure
      className={
        "relative w-72 cursor-default overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-colors hover:bg-gray-100"
      }
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="font-bold">{name}</figcaption>
        </div>
      </div>
      <blockquote>{quote}</blockquote>
    </figure>
  );
};

export function Quotes() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <h2>What People Are Saying</h2>

      <Marquee pauseOnHover className="[--duration:20s]">
        {quotes.map((quote, idx) => (
          <Card key={idx} {...quote} />
        ))}
      </Marquee>
      <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white"></div>
      <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white"></div>
    </div>
  );
}
