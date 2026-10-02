import useReveal from "../utils/hooks/useReveal";

const RevealBlock = ({
  children,
  cls = "reveal",
}: {
  children: React.ReactNode;
  cls?: string;
}) => {
  const ref = useReveal(cls);
  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
};

export default RevealBlock;
