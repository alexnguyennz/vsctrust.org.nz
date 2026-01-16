import Marquee from "@/components/ui/marquee";

const quotes = [
  {
    quote: "Thank you for all that you do to take care of people in the city.",
  },
  {
    quote: "Love Take 10, thanks for all the positive mahi.",
  },
  {
    quote:
      "These guys offer such a valuable service, having an opportunity to stop and rest is a very important mission.",
  },
  {
    quote:
      "I feel like they truly care about people on the street, making sure they are getting home safely.",
  },
];

const Card = ({ quote }: { name?: string; quote: string }) => {
  return (
    <figure
      className={
        "relative w-72 cursor-default overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 p-5 transition-colors hover:bg-gray-100"
      }
    >
      <blockquote className="text-sm text-gray-600">{quote}</blockquote>
    </figure>
  );
};

export function Quotes() {
  return (
    <Marquee pauseOnHover className="[--duration:30s]">
      {quotes.map((quote, idx) => (
        <Card key={idx} {...quote} />
      ))}
    </Marquee>
  );
}
