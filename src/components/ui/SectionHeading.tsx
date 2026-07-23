import clsx from "clsx";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  className?: string;
  /** kicker index label like "01" */
  index?: string;
  invert?: boolean;
};

/** Mono kicker + display title used to open each section. */
export default function SectionHeading({
  kicker,
  title,
  className,
  index,
  invert,
}: SectionHeadingProps) {
  return (
    <div className={clsx("space-y-4", className)}>
      <Reveal>
        <p
          className={clsx(
            "font-mono text-xs uppercase tracking-[0.3em]",
            invert ? "text-navy-mid" : "text-ember",
          )}
        >
          {index && <span className="mr-3 opacity-60">{index} /</span>}
          {kicker}
        </p>
      </Reveal>
      <SplitHeading
        as="h2"
        mode="line"
        className={clsx(
          "font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl",
          invert ? "text-navy" : "text-cream",
        )}
      >
        {title}
      </SplitHeading>
    </div>
  );
}
