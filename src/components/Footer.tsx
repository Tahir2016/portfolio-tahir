import Container from "@/components/Container";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/60">
      <Container className="flex flex-col items-center justify-between gap-2 py-6 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs tracking-wide text-muted-foreground">
          © {new Date().getFullYear()} Tahir Pathan
        </p>
        <p className="font-mono text-xs tracking-wide text-muted-foreground">
          Full Stack Developer · React · Node.js · PostgreSQL · AWS
        </p>
      </Container>
    </footer>
  );
};

export default Footer;